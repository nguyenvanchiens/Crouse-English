"use client";

import { useState } from "react";
import { Award, Check, Coins, Snowflake } from "lucide-react";
import { REWARDS, rewardById } from "@/content/rewards";
import { MAX_FREEZES, POINTS, balance, canBuy, type Reward, type RewardKind } from "@/lib/points";
import { displayStreak, todayKey } from "@/lib/progress-core";
import { progress, useProgress } from "@/lib/progress";
import { formatDateVi } from "@/lib/format";
import { PersistNotice } from "@/components/ui/persist-notice";
import { Avatar } from "@/components/points";

const GROUPS: { kind: RewardKind; title: string; hint: string }[] = [
  { kind: "freeze", title: "Thẻ đóng băng chuỗi", hint: "Món hữu ích nhất: giữ thói quen học mỗi ngày kể cả khi lỡ nghỉ một hôm." },
  { kind: "avatar", title: "Ảnh đại diện", hint: "Hiện ở trang Khóa học của tôi." },
  { kind: "title", title: "Danh hiệu", hint: "Hiện dưới tên bạn ở trang Khóa học của tôi và trên chứng chỉ." },
  { kind: "frame", title: "Khung chứng chỉ", hint: "Đổi viền cho mọi chứng chỉ bạn nhận." },
];

const FRAME_SWATCH: Record<string, string> = {
  "frame-silver": "border-slate-400",
  "frame-gold": "border-amber-500",
  "frame-jade": "border-emerald-600",
};

const EARN_RULES: [string, string][] = [
  ["Học xong một bài (lần đầu)", `+${POINTS.lesson}`],
  ["Xong bài ôn tập chương (lần đầu)", `+${POINTS.review}`],
  ["Điểm của bài đạt 80% / 100%", `+${POINTS.score80} / thêm +${POINTS.score100}`],
  ["Vượt qua bài kiểm tra cuối khóa", `+${POINTS.finalPass}`],
  ["Ngày học đầu tiên trong ngày", `+${POINTS.firstOfDay}`],
  ["Mỗi từ nhớ được khi ôn từ vựng", `+${POINTS.vocab} (tối đa ${POINTS.vocabDailyCap} mỗi ngày)`],
  ["Chuỗi 7 / 30 / 100 ngày học liên tiếp", `+${POINTS.streak[7]} / +${POINTS.streak[30]} / +${POINTS.streak[100]}`],
  ["Làm bài kiểm tra trình độ (lần đầu)", `+${POINTS.placement}`],
];

export function RewardsShop() {
  const { state, ready } = useProgress();
  const [notice, setNotice] = useState<string | null>(null);
  if (!ready) return <div className="clay mt-10 h-64 animate-pulse bg-card" aria-hidden />;

  const points = state.points;
  const rewards = state.rewards;
  const have = balance(points);
  const title = rewardById(rewards.title);
  const streak = displayStreak(state.streak, todayKey(), rewards.freezes);

  function onBuy(r: Reward) {
    const res = canBuy(points, rewards, r);
    if (res !== "ok") return;
    progress.buyReward(r);
    setNotice(r.kind === "freeze" ? `Đã đổi ${r.name}. Bạn đang có ${rewards.freezes + 1} thẻ.` : `Đã đổi và dùng ngay: ${r.name}.`);
  }

  return (
    <div className="mt-10 space-y-12">
      <PersistNotice />
      <section className="clay flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8" aria-label="Điểm của bạn">
        <div className="flex items-center gap-4">
          <Avatar id={rewards.avatar} size="size-16" />
          <div>
            <p className="font-display text-xl font-bold">{state.learnerName ?? "Bạn"}</p>
            {title && <p className="font-semibold text-grape">{title.name}</p>}
            <p className="mt-1 flex items-center gap-1 text-ink-soft">
              <Snowflake className="size-4" aria-hidden /> {rewards.freezes}/{MAX_FREEZES} thẻ đóng băng · chuỗi {streak} ngày
            </p>
          </div>
        </div>
        <div className="text-left sm:text-right">
          <p className="flex items-center gap-2 font-display text-5xl font-extrabold sm:justify-end">
            <Coins className="size-10 text-tangerine-deep" aria-hidden />
            <span className="tabular-nums">{have.toLocaleString("vi-VN")}</span>
          </p>
          <p className="text-ink-soft">điểm có thể đổi (đã tích {points.earned.toLocaleString("vi-VN")}, đã dùng {points.spent.toLocaleString("vi-VN")})</p>
        </div>
      </section>

      <div role="status" aria-live="polite">
        {notice && <p className="rounded-2xl border-2 border-ink bg-leaf-soft px-4 py-3 font-semibold">{notice}</p>}
      </div>

      <section aria-labelledby="earn">
        <h2 id="earn" className="font-display text-3xl font-extrabold">Cách kiếm điểm</h2>
        <p className="mt-2 text-ink-soft">Mỗi thành tích chỉ được tính một lần, nên học lại một bài không cộng thêm điểm. Học đều mỗi ngày là cách tích nhanh nhất.</p>
        <div className="mt-5 rounded-2xl border-[2.5px] border-ink bg-card">
          <table className="w-full border-collapse text-left">
            <tbody>
              {EARN_RULES.map(([what, pts]) => (
                <tr key={what} className="border-b border-ink/15 last:border-0">
                  <td className="px-4 py-2.5">{what}</td>
                  <td className="px-4 py-2.5 text-right font-display font-bold sm:whitespace-nowrap">{pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {GROUPS.map((g) => (
        <section key={g.kind} aria-labelledby={`shop-${g.kind}`}>
          <h2 id={`shop-${g.kind}`} className="font-display text-3xl font-extrabold">{g.title}</h2>
          <p className="mt-2 text-ink-soft">{g.hint}</p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {REWARDS.filter((r) => r.kind === g.kind).map((r) => {
              const status = canBuy(points, rewards, r);
              const equipped = r.kind !== "freeze" && rewards[r.kind] === r.id;
              return (
                <li key={r.id} className="clay flex flex-col p-5">
                  <div className="flex items-center gap-3">
                    {r.kind === "avatar" && <Avatar id={r.id} size="size-12" />}
                    {r.kind === "freeze" && (
                      <span className="grid size-12 place-items-center rounded-full border-[2.5px] border-ink bg-sky" aria-hidden>
                        <Snowflake className="size-6" />
                      </span>
                    )}
                    {r.kind === "frame" && <span className={`size-12 shrink-0 rounded-xl border-[6px] bg-card ${FRAME_SWATCH[r.id]}`} aria-hidden />}
                    {r.kind === "title" && (
                      <span className="grid size-12 place-items-center rounded-full border-[2.5px] border-ink bg-sun" aria-hidden>
                        <Award className="size-6" />
                      </span>
                    )}
                    <div>
                      <p className="font-display text-lg font-bold leading-tight">{r.name}</p>
                      <p className="flex items-center gap-1 font-semibold text-ink-soft">
                        <Coins className="size-4 text-tangerine-deep" aria-hidden />
                        {r.cost} điểm
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 flex-1 text-ink-soft">{r.description}</p>
                  <div className="mt-4">
                    {status === "owned" ? (
                      equipped ? (
                        <button type="button" className="btn btn-ghost" onClick={() => progress.equipReward(r.kind as Exclude<RewardKind, "freeze">, null)}>
                          <Check className="size-5 text-leaf" aria-hidden />
                          Đang dùng, bấm để bỏ
                        </button>
                      ) : (
                        <button type="button" className="btn btn-ghost" onClick={() => progress.equipReward(r.kind as Exclude<RewardKind, "freeze">, r.id)}>
                          Dùng
                        </button>
                      )
                    ) : (
                      <button type="button" className="btn btn-primary" disabled={status !== "ok"} onClick={() => onBuy(r)}>
                        {status === "max-freezes" ? `Đã đủ ${MAX_FREEZES} thẻ` : status === "too-poor" ? `Cần thêm ${r.cost - have} điểm` : `Đổi (${r.cost} điểm)`}
                      </button>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <section aria-labelledby="history">
        <h2 id="history" className="font-display text-3xl font-extrabold">Lịch sử điểm</h2>
        {points.log.length === 0 ? (
          <p className="mt-3 text-ink-soft">Chưa có gì. Học xong bài đầu tiên để nhận điểm.</p>
        ) : (
          <ul className="mt-5 divide-y divide-ink/15 rounded-2xl border-[2.5px] border-ink bg-card">
            {points.log.slice(0, 20).map((e, i) => (
              <li key={i} className="flex items-center justify-between gap-4 px-4 py-2.5">
                <span>
                  {e.reason}
                  <span className="ml-2 text-sm text-ink-soft">{formatDateVi(e.at)}</span>
                </span>
                <span className={`font-display font-bold tabular-nums ${e.amount < 0 ? "text-ink-soft" : ""}`}>
                  {e.amount > 0 ? `+${e.amount}` : e.amount === 0 ? "" : e.amount}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
