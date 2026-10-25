import { studySeconds, wordsRemembered, type ProgressState } from "./progress-core";

export type BadgeIcon = "lesson" | "flame" | "words" | "target" | "trophy" | "star" | "calendar";

export interface Badge {
  id: string;
  name: string;
  /** what earns it, shown under a locked badge too */
  how: string;
  icon: BadgeIcon;
  /** progress toward it: `have` of `need` */
  have: number;
  need: number;
  earned: boolean;
}

/**
 * Milestones worth showing off, all read from what the learner has already done (so a learner who studied
 * before badges existed has them at once). Each family is a ladder: the dashboard shows the earned ones and
 * the next one to reach.
 */
export function badges(state: ProgressState): Badge[] {
  const lessons = Object.values(state.lessons).filter((l) => l.done).length;
  const words = wordsRemembered(state);
  const goalDays = Object.keys(state.study).filter((d) => studySeconds(state, d) >= state.dailyGoal * 60).length;
  const studyDays = state.points.awarded.filter((k) => k.startsWith("day:")).length;
  const certificates = state.points.awarded.filter((k) => k.startsWith("final:")).length;
  const perfect = state.points.awarded.filter((k) => k.startsWith("s100:")).length;

  const ladder = (id: string, icon: BadgeIcon, have: number, steps: [number, string, string][]): Badge[] =>
    steps.map(([need, name, how]) => ({ id: `${id}-${need}`, name, how, icon, have: Math.min(have, need), need, earned: have >= need }));

  return [
    ...ladder("lessons", "lesson", lessons, [
      [1, "Bước đầu tiên", "Học xong bài đầu tiên"],
      [10, "Chăm chỉ", "Học xong 10 bài"],
      [50, "Bền bỉ", "Học xong 50 bài"],
    ]),
    ...ladder("streak", "flame", state.bestStreak, [
      [3, "Lửa nhỏ", "Học 3 ngày liên tiếp"],
      [7, "Một tuần trọn vẹn", "Học 7 ngày liên tiếp"],
      [30, "Thói quen thép", "Học 30 ngày liên tiếp"],
    ]),
    ...ladder("words", "words", words, [
      [50, "50 từ trong đầu", "Nhớ 50 từ khi ôn tập"],
      [200, "Kho từ 200", "Nhớ 200 từ khi ôn tập"],
      [500, "Kho từ 500", "Nhớ 500 từ khi ôn tập"],
    ]),
    ...ladder("goal", "target", goalDays, [
      [1, "Đúng hẹn", "Đạt mục tiêu ngày lần đầu"],
      [10, "Giữ lời", "Đạt mục tiêu ngày 10 lần"],
    ]),
    ...ladder("days", "calendar", studyDays, [[20, "20 ngày học", "Học vào 20 ngày khác nhau"]]),
    ...ladder("perfect", "star", perfect, [[1, "Tuyệt đối", "Đạt 100% một bài học"]]),
    ...ladder("certificate", "trophy", certificates, [[1, "Có chứng chỉ", "Qua bài kiểm tra cuối một khóa"]]),
  ];
}

/** Earned badges, plus the next one to reach in each family (the closest first). */
export function badgeShelf(all: Badge[]): { earned: Badge[]; next: Badge[] } {
  const earned = all.filter((b) => b.earned);
  const family = (b: Badge) => b.id.slice(0, b.id.lastIndexOf("-"));
  // the first unearned badge of each family (the ladders are in order)
  const firsts = new Map<string, Badge>();
  for (const b of all) if (!b.earned && !firsts.has(family(b))) firsts.set(family(b), b);
  const next = [...firsts.values()].sort((a, b) => b.have / b.need - a.have / a.need);
  return { earned, next };
}
