import { ALL_DRILLS } from "@/content/drills";
import { EXAM_PAPERS, OFFICIAL_CHECKS } from "@/content/my-plan";
import {
  BASE_REVIEW_HOW,
  DRILL_HOW,
  INPUT_SESSIONS,
  IPA_HOW,
  LESSON_HOW,
  REMEDY_HOW,
  REVIEW_HOW,
  type SelfStudySession,
} from "@/content/today";
import { SESSIONS_PER_SPRINT, SPRINT_END, SPRINT_HOURS, SPRINT_MINUTES, SPRINT_START, WORK_SPRINTS } from "@/content/work-sprints";
import type { PlanData } from "./my-plan-core";
import { PLAN_FINAL_PASS, grammarDoneOf, type PlanInput, type PlanLevel, type PlanStage } from "./plan-stage";
import { lessonKey, todayKey, topicKey, type ProgressState } from "./progress-core";
import { buildSchedule, daySelfStudy, type DayMain } from "./schedule";
import type { SprintPlace } from "./work-sprint";

/** What a day is built around; frozen on the day's first visit so ticking a topic doesn't swap it for the next. */
export interface DayPicks {
  main: DayMain;
}

export interface DayRecord {
  date: string;
  picks: DayPicks;
  /** ids of tasks ticked by hand */
  done: string[];
}

export interface TaskLink { href: string; label: string; external?: boolean }

export interface TodayTask {
  id: string;
  minutes: number;
  title: string;
  why: string;
  steps: string[];
  links: TaskLink[];
  /** done, from the learner's progress or a tick */
  done: boolean;
  /** done is read from progress, so there is nothing to tick */
  auto: boolean;
  /** part of the minimum for a busy day */
  essential: boolean;
}

/** The day's main work and calendar stage: the calendar's entry for that date. */
export function pickDay(date: Date, input: PlanInput, stage: PlanStage, state: ProgressState, data: PlanData): DayPicks & { stage: number } {
  const d = buildSchedule(date, { input, stage, state, data })[0];
  return { main: d.main, stage: d.stage };
}

export interface TodayInput {
  date: Date;
  picks: DayPicks;
  ticked: string[];
  input: PlanInput;
  stage: PlanStage;
  state: ProgressState;
  data: PlanData;
  /** vocabulary cards due on that day */
  dueWords: number;
  /** the calendar stage of that day: -1 the base, 0… a level */
  dayStage: number;
  /** the last day studied before this one, to review first */
  recap?: { date: string; done: boolean };
  /** study days due for a short spaced review: about 2, 7 and 21 days before (see spacedDays) */
  spaced?: { date: string; ago: number }[];
  /** the work-English sprint session that takes the place of the weekday's self-study (see sprintOn) */
  sprint?: SprintPlace | null;
}

const SKILL_VI: Record<string, string> = { reading: "Đọc", use: "Use of English", listening: "Nghe", writing: "Viết", speaking: "Nói" };
const LEVEL_ORDER = ["A1", "A2", "B1", "B2", "C1"];
const noVideo = (s: string) => s.replace("xem video minh họa trước (nếu bài có), rồi ", "");

function selfStudyTask(s: SelfStudySession, id: string, ticked: string[], essential: boolean): TodayTask {
  return {
    id,
    minutes: s.minutes,
    title: `Tự học: ${s.title}`,
    why: "Bài học trên trang chỉ là một phần nhỏ số giờ cần để lên cấp. Phần tự học này là bắt buộc, không phải phần thêm.",
    steps: s.steps,
    links: s.url ? [{ href: s.url, label: s.urlLabel ?? "Mở trang", external: true }] : [{ href: "/lo-trinh-cua-toi#hours", label: "Mở nhật ký giờ học" }],
    done: ticked.includes(id),
    auto: false,
    essential,
  };
}

export function buildToday(t: TodayInput): TodayTask[] {
  const { date, picks, ticked, input, state, data, dueWords, recap, dayStage } = t;
  const { levels, baseCourse, ipaCourse, grammar, ipa } = input;
  const today = todayKey(date);
  const tasks: TodayTask[] = [];
  // the day's own level, not the learner's current one: a preview of a B2 day shows B2 material
  const level: PlanLevel | undefined = dayStage < 0 ? levels[0] : levels[Math.min(dayStage, levels.length - 1)];
  const rec = (course: string, lesson: string) => state.lessons[lessonKey(course, lesson)];
  const doneToday = (course: string, lesson: string) => rec(course, lesson)?.completedAt?.startsWith(today) === true;
  const manual = (id: string) => ticked.includes(id);
  const levelOf = (slug: string) => levels.find((l) => l.slug === slug);
  const lessonOf = (l: PlanLevel | undefined, slug: string | null) => (l && slug ? l.chapters.flatMap((c) => c.lessons).find((x) => x.slug === slug) : undefined);
  const main = picks.main;
  const upper = !!level && LEVEL_ORDER.indexOf(level.level) >= 2;

  // 1. vocabulary, every day (more time from B1, when the deck is bigger)
  const vocabDone = state.points.vocabToday.day === today && state.points.vocabToday.n > 0;
  tasks.push({
    id: "vocab",
    minutes: upper ? 15 : 10,
    title: dueWords > 0 ? `Ôn ${dueWords} từ đến hạn` : "Ôn từ vựng",
    why: "Từ được nhắc lại đúng lúc sắp quên thì nhớ lâu. Trang ôn đưa tối đa 15 từ mới mỗi ngày, nên thêm chủ đề không làm ngợp.",
    steps: [
      "Mở trang Ôn từ vựng, bấm Bắt đầu ôn.",
      "Nhìn từ, tự nói nghĩa và đặt nhanh một câu trong đầu rồi mới bấm Xem nghĩa.",
      "Bấm nghe phát âm, đọc to theo một lần.",
      "Chấm thật lòng: không nhớ chắc thì bấm Chưa nhớ, từ đó sẽ quay lại ngày mai.",
    ],
    links: [{ href: "/on-tap-tu-vung", label: "Mở Ôn từ vựng" }],
    done: vocabDone || manual("vocab"),
    auto: vocabDone,
    essential: true,
  });

  // 2. before new work, check the last day studied is still there
  const takesRecap = main.kind === "grammar" || main.kind === "lesson" || (main.kind === "consolidate" && (main.focus === "input" || main.focus === "words" || main.focus === "produce"));
  if (recap && takesRecap) {
    tasks.push({
      id: "recap",
      minutes: 7,
      title: "Ôn lại buổi học trước",
      why: "Kiểm tra xem bạn còn nắm được các điểm chính đã học ở buổi trước. Nhớ lại được thì kiến thức mới bám chắc hơn.",
      steps: [
        "Mở trang Ôn lại, buổi học gần nhất đã được chọn sẵn.",
        "Với mỗi bài, nói hoặc viết ra các điểm chính bạn còn nhớ, rồi mới mở để so.",
        "Làm phần Kiểm tra nhanh, không mở lại bài.",
        "Dưới 70% thì học lại bài được gợi ý trước khi sang bài mới.",
      ],
      links: [{ href: `/on-lai?ngay=${recap.date}`, label: "Mở Ôn lại" }],
      done: recap.done,
      auto: true,
      essential: true,
    });
  }

  // 2b. short spaced reviews of the days 2, 7 and 21 days back: the spacing that makes lessons stick
  const spaced = (t.spaced ?? []).filter((s) => s.date !== recap?.date);
  if (spaced.length && main.kind !== "exam" && main.kind !== "done") {
    tasks.push({
      id: "spaced",
      minutes: spaced.length * 4,
      title: `Ôn cách quãng: ${spaced.map((s) => `buổi ${s.ago} ngày trước`).join(", ")}`,
      why: "Gặp lại bài cũ đúng lúc sắp quên (sau khoảng 2 ngày, 1 tuần, 3 tuần) là cách nhớ lâu nhất. Mỗi buổi chỉ vài phút.",
      steps: [
        "Với mỗi buổi, mở trang Ôn lại, tự nhớ các điểm chính trước khi xem.",
        "Làm phần Kiểm tra nhanh, không mở lại bài.",
        "Dưới 70% thì đánh dấu bài đó để học lại vào ngày củng cố gần nhất.",
      ],
      links: spaced.map((s) => ({ href: `/on-lai?ngay=${s.date}`, label: `Ôn buổi ${s.date.slice(8, 10)}/${s.date.slice(5, 7)}` })),
      done: spaced.every((s) => data.reviews[s.date]?.at.startsWith(today) === true),
      auto: true,
      essential: true,
    });
  }

  // 3. the day's main work, from the calendar
  if (main.kind === "grammar") {
    const g = grammar.find((x) => x.slug === main.lesson);
    if (g) {
      tasks.push({
        id: `g:${g.slug}`,
        minutes: 28,
        title: `Bài A1: ${g.title}`,
        why: "Chặng nền: lấp chỗ hổng ngữ pháp để đọc cả câu mà hiểu. Mỗi ngày học trọn một bài A1, đủ các bước, không vội.",
        steps: LESSON_HOW.map((s, i) => (i === 0 && !g.video ? noVideo(s) : s)),
        links: [
          { href: `/hoc/${baseCourse}/${g.slug}`, label: "Vào học" },
          { href: `/ngu-phap/${baseCourse}/${g.slug}`, label: "Sổ tay ngữ pháp" },
        ],
        done: grammarDoneOf(input, state, data, g.slug),
        auto: true,
        essential: true,
      });
    }
    const p = ipa.find((x) => x.slug === main.ipa);
    if (p) {
      tasks.push({
        id: `ipa:${p.slug}`,
        minutes: p.minutes,
        title: `Phát âm: ${p.title}`,
        why: "Phát âm được chấm ở mọi cấp. Học đúng âm từ đầu, nhất là âm cuối và trọng âm mà người Việt hay sai, đỡ phải sửa về sau.",
        steps: IPA_HOW,
        links: [{ href: `/hoc/${ipaCourse}/${p.slug}`, label: "Vào học" }],
        done: rec(ipaCourse, p.slug)?.done === true,
        auto: true,
        essential: !g,
      });
    }
  }

  if (main.kind === "base-review") {
    const titles = main.lessons.map((s) => grammar.find((g) => g.slug === s)?.title ?? s);
    tasks.push({
      id: "base-review",
      minutes: 30,
      title: `Ôn cách quãng: ${titles.join("; ")}`,
      why: "Hôm nay không học bài mới. Gặp lại bài cũ sau vài ngày là cách nhớ lâu nhất.",
      steps: BASE_REVIEW_HOW(titles),
      links: main.lessons.map((s, i) => ({ href: `/hoc/${baseCourse}/${s}`, label: `Mở bài ${i + 1}` })),
      done: manual("base-review"),
      auto: false,
      essential: true,
    });
  }

  if (main.kind === "lesson") {
    const cur = levelOf(main.course);
    const lesson = lessonOf(cur, main.lesson);
    if (cur && lesson) {
      tasks.push({
        id: "lesson",
        minutes: lesson.minutes,
        title: lesson.kind === "review" ? `${cur.level}: ${lesson.title}` : `Bài mới ${cur.level}: ${lesson.title}`,
        why: lesson.kind === "review"
          ? "Ôn cả chương trước khi sang chương mới, để biết chỗ nào chưa vững."
          : `Bài tiếp theo của ${cur.title}${lesson.lecture ? `, trọng tâm: ${lesson.lecture}` : ""}. Học đủ các bước theo thứ tự.`,
        steps: lesson.kind === "review" ? REVIEW_HOW : LESSON_HOW.map((s, i) => (i === 0 && !lesson.media ? noVideo(s) : s)),
        links: [{ href: `/hoc/${cur.slug}/${lesson.slug}`, label: "Vào học" }],
        done: doneToday(cur.slug, lesson.slug),
        auto: true,
        essential: true,
      });
    }
  }

  if (main.kind === "consolidate") {
    const cur = levelOf(main.course);
    const target = lessonOf(cur, main.target);
    if (cur && main.focus === "input") {
      const sessions = INPUT_SESSIONS[cur.level] ?? [];
      const s = sessions[Math.floor(date.getTime() / 86_400_000) % Math.max(sessions.length, 1)];
      if (s)
        tasks.push({
          id: "input",
          minutes: s.minutes,
          title: `Đầu vào mới: ${s.title}`,
          why: "Muốn lên C1 cần đọc và nghe rất nhiều nội dung mới vừa sức, không chỉ làm lại bài cũ.",
          steps: s.steps,
          links: s.url ? [{ href: s.url, label: s.urlLabel ?? "Mở trang", external: true }] : [],
          done: manual("input"),
          auto: false,
          essential: true,
        });
    } else if (cur && main.focus === "words") {
      const left = cur.topics.filter((id) => !state.topics.includes(topicKey(cur.slug, id)));
      tasks.push({
        id: "consolidate",
        minutes: 30,
        title: left.length ? `Từ vựng: thêm một chủ đề ${cur.level}` : `Từ vựng: 15 từ mới cấp ${cur.level} theo Oxford 3000/5000`,
        why: left.length
          ? `Mỗi chủ đề có khoảng 30 từ, vào lịch ôn dần 15 từ mỗi ngày. Kho ${cur.level} còn ${left.length} chủ đề chưa thêm.`
          : `Kho từ ${cur.level} đã thêm hết. C1 cần khoảng 6.000–8.000 từ, nên từ giờ học thêm theo danh sách Oxford 3000/5000 (có ghi cấp từng từ)${upper ? " và Academic Word List" : ""}, cộng với từ gặp khi đọc.`,
        steps: left.length
          ? [
              `Mở Kho từ vựng ${cur.level}, chọn một chủ đề chưa học, bấm thêm vào lịch ôn.`,
              "Đọc to từng từ, nghe phát âm, nhìn dấu trọng âm.",
              "Viết một đoạn 4–5 câu dùng ít nhất 5 từ của chủ đề.",
            ]
          : [
              `Mở danh sách Oxford 3000/5000, lọc cấp ${cur.level}, lấy 10 từ tiếp theo bạn chưa biết (đánh dấu chỗ đã học đến).`,
              upper ? "Thêm 5 từ trong Academic Word List, học theo thứ tự danh sách." : "Thêm 5 từ hoặc cụm từ bạn gặp từ 2 lần trở lên khi đọc, nghe trong tuần.",
              "Tra từng từ trên Cambridge Dictionary: nghĩa, phát âm, câu ví dụ.",
              "Thêm từng từ vào mục Từ của tôi trên trang Ôn từ vựng, kèm một câu ví dụ của chính bạn: từ sẽ vào lịch ôn cùng từ của khóa, tối đa 15 từ mới mỗi ngày.",
            ],
        links: left.length
          ? [{ href: `/tu-vung/${cur.slug}`, label: `Kho từ vựng ${cur.level}` }]
          : [
              { href: "/on-tap-tu-vung#tu-cua-toi", label: "Thêm vào Từ của tôi" },
              { href: "https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000", label: "Oxford 3000/5000", external: true },
              ...(upper ? [{ href: "https://www.wgtn.ac.nz/lals/resources/academicwordlist", label: "Academic Word List", external: true }] : []),
            ],
        done: manual("consolidate"),
        auto: false,
        essential: true,
      });
    } else if (cur && target) {
      const name = target.title;
      const byFocus = {
        redo: {
          title: `Củng cố: làm lại bài ${name}`,
          steps: [
            `Mở lại bài “${name}”. Gấp vở, tự viết lại công thức và cách dùng của bài giảng, rồi mở ra so.`,
            "Làm lại phần Bài tập. Câu nào sai lần trước thì làm chậm và giải thích được vì sao đúng.",
            "Trong phần Đọc hiểu, tách 2 câu dài theo 4 bước.",
            "Đọc lại sổ lỗi, viết lại đúng 3 lỗi hay mắc nhất.",
          ],
        },
        produce: {
          title: `Viết và nói với bài ${name}`,
          steps: [
            `Làm lại nhiệm vụ Thực hành của bài “${name}” mà không nhìn bài cũ, viết dài hơn lần trước một chút.`,
            "Nhờ AI sửa bài viết và giải thích từng lỗi, chép lỗi vào sổ.",
            "Mở bước Luyện nói, trả lời lại câu hỏi nói tự do, ghi âm và nghe lại.",
            "Nói lại lần nữa, sửa đúng những chỗ vừa nghe thấy chưa ổn.",
          ],
        },
        spaced: {
          title: `Ôn cách quãng: bài cũ ${name}`,
          steps: [
            `Trước khi mở bài “${name}”, tự nói ra 3 điểm chính bạn còn nhớ.`,
            "Mở bài, đọc lại phần Ghi nhớ ở cuối bài giảng và so với những gì bạn nhớ.",
            "Làm lại phần Bài tập. Sai từ 3 câu trở lên thì đọc lại cả bài giảng.",
            "Đặt 2 câu mới về chính bạn với cấu trúc của bài.",
          ],
        },
      } as const;
      const k = byFocus[main.focus as "redo" | "produce" | "spaced"];
      tasks.push({
        id: "consolidate",
        minutes: 30,
        title: k.title,
        why: "Hôm nay không học bài mới. Giữa các bài là ngày học đầu vào mới hoặc dùng lại bài đã học, mỗi ngày một kiểu.",
        steps: [...k.steps],
        links: [{ href: `/hoc/${cur.slug}/${target.slug}`, label: "Mở lại bài" }],
        done: manual("consolidate"),
        auto: false,
        essential: true,
      });
    }
  }

  if (main.kind === "weak") {
    const cur = levelOf(main.course)!;
    const lessons = main.lessons.map((s) => lessonOf(cur, s)).filter((x) => !!x);
    tasks.push({
      id: "weak",
      minutes: Math.max(30, lessons.length * 25),
      title: lessons.length ? `Học lại: ${lessons.map((x) => x.title).join("; ")}` : `Ôn tổng ${cur.level} trước bài kiểm tra`,
      why: `Bài dưới ${PLAN_FINAL_PASS}% là chỗ dễ mất điểm nhất trong bài kiểm tra cuối khóa.`,
      steps: lessons.length
        ? ["Đọc lại bài giảng của từng bài, chép lại công thức không nhìn vở.", "Làm lại phần Bài tập, câu nào vẫn sai thì ghi vào sổ lỗi.", "Làm lại phần Đọc hiểu, tách các câu khó."]
        : ["Làm lại các bài ôn tập chương, như đi thi.", "Đọc lại sổ lỗi của cả cấp."],
      links: lessons.length ? lessons.map((x) => ({ href: `/hoc/${cur.slug}/${x.slug}`, label: x.title })) : [{ href: `/khoa-hoc/${cur.slug}`, label: "Mở giáo trình" }],
      done: manual("weak"),
      auto: false,
      essential: true,
    });
  }

  if (main.kind === "paper") {
    const cur = levelOf(main.course)!;
    const check = OFFICIAL_CHECKS[cur.level];
    const p = (EXAM_PAPERS[cur.level] ?? []).find((x) => x.id === main.paper);
    // practice never touches the standard samples: they stay unseen for the check that passes the level
    const kind = p?.id === "writing" ? "writing" : p?.id === "speaking" ? "speaking" : "paper";
    // the speaking test is face to face, so the computer-based samples have none: speaking always practises elsewhere
    const set = kind === "speaking" ? undefined : check.practice[main.set ?? 0];
    const source = set
      ? [`Dùng ${set.label} (trên trang ôn thi Cambridge), chỉ phần ${p?.name}. Bộ đề for Schools dùng để luyện; đề mẫu bản thường để dành cho ngày kiểm chứng, đừng mở trước.`]
      : kind === "writing"
        ? [`Hết đề luyện miễn phí cho phần này: chọn trên Write & Improve một đề đúng dạng và đúng cấp ${cur.level}, không dùng đề mẫu bản thường (để dành cho ngày kiểm chứng).`]
        : kind === "speaking"
          ? ["Làm một bài thi nói hoàn chỉnh trên Speak & Improve (có chấm theo CEFR), rồi luyện lại các phần đó với bạn nói hoặc giáo viên, tính giờ như thi thật."]
          : [
              `Hết đề luyện miễn phí cho phần này${cur.level === "C1" ? " (C1 Advanced không có bản for Schools)" : ""}: làm phần ${p?.name} trong sách đề chính thức của Cambridge (mỗi cuốn có 4 đề thi thật). Đừng dùng đề mẫu bản thường còn lại, vì đó là đề để kiểm chứng.`,
              "Chưa có sách thì hôm nay luyện kỹ năng của phần này với các bài ngắn cấp của bạn trên trang Activities for learners của Cambridge.",
            ];
    if (p)
      tasks.push({
        id: "paper",
        minutes: p.minutes + 20,
        title: `Luyện đề ${check.exam}: phần ${p.name}`,
        why: "Làm quen từng phần của đề thi thật trước ngày làm đề mẫu: dạng câu hỏi, thời gian, cách điền đáp án.",
        steps: [
          `Đọc mô tả phần ${p.name} trên trang ôn thi của Cambridge (handbook) để biết có mấy phần và mỗi phần hỏi gì.`,
          ...source,
          p.practice,
          kind === "speaking"
            ? "Nhờ giáo viên hoặc AI chấm theo các tiêu chí phần Nói (câu lệnh chấm nói trong lộ trình), kèm điểm CEFR của Speak & Improve."
            : kind === "writing"
              ? "Nhờ AI chấm theo các tiêu chí phần Viết (câu lệnh chấm viết trong lộ trình)."
              : "Chấm bằng đáp án đi kèm.",
          "Ghi lại dạng câu hỏi bạn sai nhiều nhất để ôn trước ngày làm đề mẫu.",
        ],
        links: [
          { href: check.prepUrl, label: "Trang ôn thi Cambridge", external: true },
          ...(set ? [] : kind === "writing"
            ? [{ href: "https://writeandimprove.com/", label: "Mở Write & Improve", external: true }]
            : kind === "speaking"
              ? [{ href: "https://speakandimprove.com/", label: "Mở Speak & Improve", external: true }]
              : [{ href: "https://www.cambridgeenglish.org/learning-english/activities-for-learners/", label: "Activities for learners", external: true }]),
        ],
        done: manual("paper"),
        auto: false,
        essential: true,
      });
  }

  if (main.kind === "final") {
    const i = levels.findIndex((l) => l.slug === main.course);
    const cur = levels[i];
    const st = t.stage.statuses[i];
    if (cur.finalSlug)
      tasks.push({
        id: "final",
        minutes: 25,
        title: `Bài kiểm tra cuối khóa ${cur.level} (lộ trình cần từ ${PLAN_FINAL_PASS}%)`,
        why: st?.finalScore != null ? `Lần trước đạt ${st.finalScore}%, sau tuần học bù. Mỗi lần làm là một bộ đề khác.` : "Đã học hết bài, giờ kiểm tra cả khóa.",
        steps: ["Làm một mạch như đi thi, không mở lại bài giảng.", "Câu nào sai thì đọc giải thích và ghi vào sổ lỗi.", `Chưa đạt ${PLAN_FINAL_PASS}% thì lịch xếp một tuần học bù trước khi làm lại.`],
        links: [{ href: `/hoc/${cur.slug}/${cur.finalSlug}`, label: "Làm bài kiểm tra" }],
        done: doneToday(cur.slug, cur.finalSlug),
        auto: true,
        essential: true,
      });
  }

  if (main.kind === "placement") {
    const cur = levelOf(main.course)!;
    tasks.push({
      id: "placement",
      minutes: 20,
      title: `Kiểm tra nhanh trình độ (mong đợi qua ${cur.level})`,
      why: "Kiểm tra nhanh để soát lại, không phải điều kiện lên cấp: điều kiện thật là đề mẫu chính thức của Cambridge.",
      steps: ["Làm trong một lần, không tra cứu.", "Câu nào không biết thì bấm Tôi không biết, đừng đoán.", "Phần nào thấp hơn mong đợi thì ôn thêm phần đó trong tuần."],
      links: [{ href: "/kiem-tra-trinh-do", label: "Làm bài kiểm tra trình độ" }],
      done: state.placement?.takenAt.startsWith(today) === true,
      auto: true,
      essential: false,
    });
  }

  if (main.kind === "remedy") {
    const cur = levelOf(main.course)!;
    tasks.push({
      id: "remedy",
      minutes: 45,
      title: `Học bù phần ${SKILL_VI[main.skill] ?? main.skill} (đề mẫu ${OFFICIAL_CHECKS[cur.level].exam} chưa đạt)`,
      why: "Đề mẫu lần trước chưa đạt ở phần này. Ôn đúng chỗ yếu rồi mới làm một đề mẫu mới.",
      steps: REMEDY_HOW[main.skill] ?? REMEDY_HOW.reading,
      links: [{ href: OFFICIAL_CHECKS[cur.level].prepUrl, label: "Trang ôn thi Cambridge", external: true }],
      done: manual("remedy"),
      auto: false,
      essential: true,
    });
  }

  if (main.kind === "exam") {
    const cur = levelOf(main.course)!;
    const check = OFFICIAL_CHECKS[cur.level];
    const papers = EXAM_PAPERS[cur.level] ?? [];
    const oral = (id: string) => id === "listening" || id === "speaking";
    const part = main.part === "written" ? papers.filter((p) => !oral(p.id)) : main.part === "oral" ? papers.filter((p) => oral(p.id)) : papers;
    tasks.push({
      id: "exam",
      minutes: part.reduce((n, p) => n + p.minutes, 0) + 30,
      title: `Đề mẫu chính thức ${check.exam}${main.part === "all" ? "" : main.part === "written" ? ", ngày 1: đọc và viết" : ", ngày 2: nghe và nói"}`,
      why: main.part === "all"
        ? "Bước kiểm chứng để lên cấp, so với ngưỡng thật của Cambridge."
        : "Bước kiểm chứng để lên cấp, so với ngưỡng thật của Cambridge. Đề dài nên chia hai ngày cho đỡ mệt; thi thật thì phần Nghe làm cùng ngày với Đọc và Viết, chỉ phần Nói có thể vào ngày khác.",
      steps: [
        `Làm ${part.map((p) => `${p.name} (${p.minutes} phút)`).join(", ")} của một đề mẫu chưa dùng, như thi thật.`,
        "Tự chấm đọc, nghe bằng đáp án chính thức.",
        ...(part.some((p) => p.id === "speaking")
          ? [
              `Phần Nói: thi thật là nói trực tiếp với giám khảo, nên đề mẫu làm trên máy không có phần Nói. Chọn đề giấy thì dùng phần Speaking của chính đề đó; chọn đề làm trên máy thì làm một bài thi nói hoàn chỉnh trên Speak & Improve.`,
              `Nên nhờ giáo viên hoặc bạn nói đóng vai giám khảo (thi thật nói theo cặp), và ghi thêm điểm CEFR của Speak & Improve hôm đó: điểm này cũng nên từ ${cur.level} trở lên.`,
            ]
          : []),
        "Trước khi nhờ AI chấm viết và nói, cho AI chấm thử một bài mẫu có điểm của giám khảo Cambridge (trong handbook). AI lệch quá một bậc thì đừng tin điểm AI cho bài của bạn.",
        main.part === "written" ? "Mai làm nốt nghe và nói, rồi mới nhập điểm." : "Nhập điểm vào lộ trình và chọn đúng đề đã làm.",
      ],
      links: [
        { href: check.prepUrl, label: "Trang ôn thi Cambridge", external: true },
        ...(part.some((p) => p.id === "speaking") ? [{ href: "https://speakandimprove.com/", label: "Mở Speak & Improve", external: true }] : []),
        { href: `/lo-trinh-cua-toi#exam-${cur.level}`, label: "Nhập điểm" },
      ],
      done: data.exams[cur.level]?.at.startsWith(today) === true || manual("exam"),
      auto: false,
      essential: true,
    });
  }

  if (main.kind === "done") {
    tasks.push({
      id: "official",
      minutes: 30,
      title: "Đăng ký thi chứng chỉ C1 quốc tế",
      why: "Bạn đã đi hết lộ trình. Chứng chỉ quốc tế là bằng chứng được công nhận khi đi học, đi làm.",
      steps: ["Tìm lịch thi IELTS hoặc Cambridge C1 Advanced gần bạn.", "Trong lúc chờ thi, giữ nhịp ôn từ vựng và tự học mỗi ngày."],
      links: [{ href: "/lo-trinh-cua-toi#c1", label: "Xem phần Về đích C1" }],
      done: manual("official"),
      auto: false,
      essential: false,
    });
  }

  // 4. the sentence drill stream: from the bank, or from the day's own text when the bank has none for today
  const ids = "drills" in main ? main.drills : [];
  const drills = ids.map((id) => ALL_DRILLS.find((d) => d.id === id)).filter((d) => !!d);
  const lessonDay = main.kind === "lesson" || main.kind === "grammar";
  const studyDay = main.kind !== "week-review" && main.kind !== "exam" && main.kind !== "done";
  if (!drills.length && studyDay) {
    tasks.push({
      id: "drills",
      minutes: 8,
      title: "Tách 2 câu khó khi đọc",
      why: "Đọc câu mà không hiểu là điểm yếu chính của bạn, nên ngày nào cũng tách câu. Hôm nay lấy câu từ chính bài học hoặc bài đọc của ngày.",
      steps: [
        "Chọn 2 câu dài nhất hoặc khó hiểu nhất bạn gặp hôm nay (trong bài học, bài đọc hoặc bản ghi lời bài nghe).",
        "Tự tách theo 4 bước: tìm động từ chính, tìm chủ ngữ, nhìn dạng động từ để biết thời gian, cắt câu ở từ nối.",
        "Viết nghĩa câu ra giấy bằng tiếng Việt.",
        "Nhờ AI kiểm tra: dán câu vào và hỏi động từ chính, chủ ngữ và cấu trúc của câu là gì, rồi so với cách bạn tách.",
        "Chép câu và cách tách vào sổ, Chủ nhật đọc lại.",
      ],
      links: [{ href: "/lo-trinh-cua-toi#tach-cau", label: "Xem các câu mẫu đã tách" }],
      done: manual("drills"),
      auto: false,
      essential: !lessonDay,
    });
  }
  if (drills.length) {
    tasks.push({
      id: "drills",
      minutes: drills.length * 4,
      title: drills.length > 1 ? `Tách ${drills.length} câu khi đọc` : "Tách một câu khi đọc",
      why: "Đọc câu mà không hiểu là điểm yếu chính của bạn. Mỗi ngày tách vài câu, khó dần theo cấp, đến tận C1.",
      steps: [...drills.map((d) => `Câu: ${d.en}`), ...DRILL_HOW],
      links: [{ href: "/lo-trinh-cua-toi#tach-cau", label: "Mở các câu luyện" }],
      done: drills.every((d) => data.done.includes(`d:${d.id}`)),
      auto: true,
      essential: !lessonDay,
    });
  }

  // 5. self-study for the weekday (Sunday's is the week review), unless the day is full already
  const session = daySelfStudy(main, level?.level, date.getDay());
  const sp = t.sprint;
  if (session && sp && date.getDay() !== 0) {
    // 6. English for the job: a 20-hour sprint session in place of the weekday's self-study
    const s = sp.sprint.sessions[sp.session % sp.sprint.sessions.length];
    tasks.push({
      id: "sprint",
      minutes: SPRINT_MINUTES,
      title: `Tiếng Anh cho công việc, đợt ${sp.index + 1}/${WORK_SPRINTS.length}: ${s.title}`,
      why: `${sp.sprint.title}. Mục tiêu sau ${SPRINT_HOURS} giờ: ${sp.sprint.goal} Đã luyện ${sp.hours.toLocaleString("vi-VN")}/${SPRINT_HOURS} giờ (buổi ${sp.session + 1}/${SESSIONS_PER_SPRINT}). Buổi này thay cho phần tự học hôm nay.`,
      steps: [SPRINT_START, ...s.steps, SPRINT_END],
      links: sp.sprint.links.map((l) => ({ ...l, external: true })),
      done: manual("sprint"),
      auto: false,
      essential: true,
    });
  } else if (session)
    tasks.push(selfStudyTask(session, `self:${date.getDay()}`, ticked, main.kind === "week-review"));

  return tasks;
}
