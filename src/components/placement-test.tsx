"use client";

import { useState } from "react";
import { Volume2 } from "lucide-react";
import type { Course, PlacementQuestion } from "@/content/types";
import { suggestCourseSlug } from "@/lib/course-utils";
import { PLACEMENT_LEVELS, scorePlacement, type PlacementResult } from "@/lib/placement";
import { progress, useProgress } from "@/lib/progress";
import { speak, useSpeechSupport } from "@/lib/speech";
import { CourseCard } from "@/components/course/course-card";
import { LEVEL_LABEL } from "@/components/course/goal-meta";
import { OptionList } from "@/components/ui/option-list";
import { ProgressBar } from "@/components/ui/progress-bar";

const SKILL_LABEL: Record<PlacementQuestion["skill"], string> = {
  vocab: "Từ vựng",
  grammar: "Ngữ pháp",
  listening: "Nghe",
};

export function PlacementTest({ questions, courses }: { questions: PlacementQuestion[]; courses: Course[] }) {
  const { state, ready } = useProgress();
  const { tts } = useSpeechSupport();
  const [stage, setStage] = useState<"intro" | "quiz" | "result">("intro");
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<PlacementResult | null>(null);

  const q = questions[i];
  const choice = q ? (answers[q.id] ?? null) : null;

  function start() {
    setAnswers({});
    setI(0);
    setResult(null);
    setStage("quiz");
  }

  function next() {
    if (i < questions.length - 1) {
      setI(i + 1);
      return;
    }
    const r = scorePlacement(questions, answers);
    progress.savePlacement(r.level, r.startLevel, r.score);
    setResult(r);
    setStage("result");
  }

  if (stage === "intro") {
    return (
      <div className="clay p-8 sm:p-10">
        <h1 className="font-display text-5xl font-extrabold leading-tight">Kiểm tra trình độ tiếng Anh</h1>
        <p className="mt-4 text-lg text-ink-soft">
          {questions.length} câu, khoảng 10 phút, gồm từ vựng, ngữ pháp và nghe. Mỗi câu chỉ trả lời một lần, không quay lại câu trước.
        </p>
        {ready && state.placement && (
          <p className="mt-4 rounded-2xl bg-sky px-4 py-3">
            Lần trước hệ thống gợi ý bạn bắt đầu từ cấp <strong>{state.placement.startLevel}</strong> ({LEVEL_LABEL[state.placement.startLevel].toLowerCase()}).
          </p>
        )}
        <button type="button" className="btn btn-primary mt-8 text-lg" onClick={start}>Bắt đầu</button>
      </div>
    );
  }

  if (stage === "result" && result) {
    const suggested = courses.find((c) => c.slug === suggestCourseSlug(result.startLevel));
    const passedAny = result.startLevel !== "A1";
    return (
      <div className="space-y-8">
        <div className="clay card-in p-8 text-center sm:p-10">
          <p className="font-semibold text-ink-soft">Bạn nên bắt đầu từ cấp</p>
          <p className="mt-2 font-display text-7xl font-extrabold">{result.startLevel}</p>
          <p className="font-display text-2xl font-bold">{LEVEL_LABEL[result.startLevel]}</p>
          <p className="mt-3 text-ink-soft">
            {passedAny ? `Bạn đã vững đến cấp ${result.level}. ` : "Bạn chưa vượt qua cấp nào, hãy bắt đầu từ nền tảng. "}
            Đúng {result.score}% tổng số câu.
          </p>
          <dl className="mx-auto mt-8 grid max-w-md gap-3 text-left">
            {PLACEMENT_LEVELS.map((l) => {
              const { correct, total } = result.perLevel[l];
              return (
                <div key={l} className="grid grid-cols-[3rem_1fr_3.5rem] items-center gap-3">
                  <dt className="font-display font-bold">{l}</dt>
                  <dd><ProgressBar value={total ? (correct / total) * 100 : 0} label={`Cấp ${l}: đúng ${correct}/${total}`} /></dd>
                  <dd className="text-right text-sm font-semibold">{correct}/{total}</dd>
                </div>
              );
            })}
          </dl>
        </div>
        {suggested && (
          <div>
            <h2 className="mb-4 font-display text-3xl font-extrabold">Khóa học gợi ý cho bạn</h2>
            <CourseCard course={suggested} />
          </div>
        )}
        <button type="button" className="btn btn-ghost" onClick={start}>Làm lại bài kiểm tra</button>
      </div>
    );
  }

  return (
    <div className="clay p-6 sm:p-8">
      <ProgressBar value={(i / questions.length) * 100} label={`Đã làm ${i}/${questions.length} câu`} />
      <p className="mt-5 text-sm font-semibold text-ink-soft">
        Câu {i + 1}/{questions.length}, {SKILL_LABEL[q.skill].toLowerCase()}
      </p>
      <h2 className="mt-2 font-display text-3xl font-extrabold leading-snug">{q.prompt}</h2>
      {q.audioText && (
        <div className="mt-4">
          <button type="button" className="btn btn-ghost" onClick={() => speak(q.audioText!)} disabled={!tts}>
            <Volume2 className="size-5" aria-hidden />
            Nghe
          </button>
          {!tts && <p className="mt-2 text-sm text-ink-soft">Trình duyệt không đọc to được. Câu gốc: {q.audioText}</p>}
        </div>
      )}
      <div className="mt-6">
        <OptionList
          key={q.id}
          name={q.id}
          options={q.options}
          value={choice}
          onChange={(k) => setAnswers({ ...answers, [q.id]: k })}
        />
      </div>
      <button type="button" className="btn btn-primary mt-8" disabled={choice === null} onClick={next}>
        {i < questions.length - 1 ? "Câu tiếp" : "Xem kết quả"}
      </button>
    </div>
  );
}
