"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, RotateCcw } from "lucide-react";
import type { VocabWord } from "@/content/types";
import { isDue, todayKey } from "@/lib/progress-core";
import { progress, useProgress } from "@/lib/progress";
import { EmptyState } from "@/components/ui/empty-state";
import { PersistNotice } from "@/components/ui/persist-notice";
import { PronounceCard } from "@/components/pronounce-card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { stopSpeaking } from "@/lib/speech";

export interface ReviewWord {
  /** vocabKey(course, word) */
  key: string;
  /** where it comes from: a lesson (reviewed once the lesson is done) or a word-bank topic (once added) */
  source: { lesson: string } | { topic: string };
  course: string;
  word: VocabWord;
}

/** At most this many never-seen words join a day's session, so a finished course doesn't flood it. */
const NEW_PER_DAY = 15;
const SESSION_MAX = 30;

export function VocabReview({ words }: { words: ReviewWord[] }) {
  const { state, ready } = useProgress();
  // the session is fixed when it starts, so answering a card doesn't reshuffle the queue under the learner
  const [session, setSession] = useState<ReviewWord[] | null>(null);
  const [i, setI] = useState(0);
  const [remembered, setRemembered] = useState(0);

  if (!ready) return <div className="clay mt-10 h-72 animate-pulse bg-card" aria-hidden />;

  const today = todayKey();
  const learned = words.filter((w) => ("lesson" in w.source ? state.lessons[w.source.lesson]?.done : state.topics.includes(w.source.topic)));
  const dueOld = learned.filter((w) => state.srs[w.key] && isDue(state.srs[w.key], today));
  const fresh = learned.filter((w) => !state.srs[w.key]);
  const queue = [...dueOld, ...fresh.slice(0, NEW_PER_DAY)].slice(0, SESSION_MAX);

  if (learned.length === 0) {
    return (
      <div className="mt-10">
        <EmptyState title="Chưa có từ nào để ôn" body="Học xong một bài, hoặc thêm một chủ đề trong kho từ vựng, từ sẽ xuất hiện ở đây.">
          <Link href="/khoa-hoc" className="btn btn-primary">Chọn khóa học</Link>
          <Link href="/tu-vung" className="btn btn-ghost">Mở kho từ vựng</Link>
        </EmptyState>
      </div>
    );
  }

  if (session === null) {
    const inBox = learned.filter((w) => state.srs[w.key]).length;
    return (
      <div className="clay mt-10 p-8">
        <PersistNotice />
        <p className="font-display text-2xl font-bold">
          {queue.length > 0 ? `Hôm nay có ${queue.length} từ cần ôn` : "Hôm nay bạn đã ôn xong"}
        </p>
        <p className="mt-2 text-ink-soft">
          Có {learned.length} từ từ các bài đã học và chủ đề đã thêm; {inBox} từ trong số đó đã vào lịch ôn.
          {fresh.length > NEW_PER_DAY && ` Còn ${fresh.length - NEW_PER_DAY} từ mới sẽ được thêm dần vào những ngày sau.`}
        </p>
        {queue.length > 0 ? (
          <button
            type="button"
            className="btn btn-primary mt-6"
            onClick={() => {
              setSession(queue);
              setI(0);
              setRemembered(0);
            }}
          >
            Bắt đầu ôn
          </button>
        ) : (
          <Link href="/cua-toi" className="btn btn-ghost mt-6">Học tiếp bài mới</Link>
        )}
      </div>
    );
  }

  if (i >= session.length) {
    return (
      <div className="clay card-in mt-10 p-8 text-center">
        <Check className="mx-auto size-10 text-leaf" aria-hidden />
        <p className="mt-3 font-display text-3xl font-extrabold">Xong buổi ôn hôm nay</p>
        <p className="mt-2 text-lg">Bạn nhớ {remembered}/{session.length} từ. Những từ chưa nhớ sẽ quay lại vào ngày mai.</p>
        <button type="button" className="btn btn-ghost mt-6" onClick={() => setSession(null)}>Về trang ôn tập</button>
      </div>
    );
  }

  const current = session[i];
  function answer(ok: boolean) {
    stopSpeaking();
    progress.reviewWord(current.key, ok);
    if (ok) setRemembered((n) => n + 1);
    setI(i + 1);
  }

  return (
    <div className="mt-10 space-y-4">
      <ProgressBar value={(i / session.length) * 100} label={`Đã ôn ${i}/${session.length} từ`} />
      <PronounceCard key={current.key} word={current.word} label={`${current.course}, từ ${i + 1}/${session.length}`}>
        <p className="text-ink-soft">Nhớ nghĩa của từ trước, rồi bấm “Xem nghĩa” để kiểm tra.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button type="button" className="btn btn-ghost" onClick={() => answer(false)}>
            <RotateCcw className="size-5" aria-hidden />
            Chưa nhớ
          </button>
          <button type="button" className="btn btn-primary" onClick={() => answer(true)}>
            <Check className="size-5" aria-hidden />
            Đã nhớ
          </button>
        </div>
      </PronounceCard>
    </div>
  );
}
