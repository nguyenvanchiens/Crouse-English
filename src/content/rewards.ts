import type { Reward } from "@/lib/points";

/**
 * Rewards shop. Prices are set against the earning rate: a lesson brings about 25–45 points
 * (lesson + score + first-of-day), a whole level about 1,000.
 */
export const REWARDS: Reward[] = [
  // streak protection: the most useful item for keeping a daily habit
  { id: "freeze", kind: "freeze", name: "Thẻ đóng băng chuỗi", description: "Lỡ nghỉ một ngày, chuỗi ngày học vẫn được giữ. Giữ tối đa 3 thẻ.", cost: 60 },

  // avatars (the icon is chosen in the UI by id)
  { id: "avatar-owl", kind: "avatar", name: "Cú mèo chăm học", description: "Ảnh đại diện cho người học đêm.", cost: 50 },
  { id: "avatar-cat", kind: "avatar", name: "Mèo lười", description: "Học ít mà đều, vẫn tới đích.", cost: 50 },
  { id: "avatar-sun", kind: "avatar", name: "Mặt trời buổi sáng", description: "Cho người học trước giờ đi làm.", cost: 80 },
  { id: "avatar-mountain", kind: "avatar", name: "Đỉnh núi", description: "Mỗi cấp là một chặng leo.", cost: 120 },
  { id: "avatar-rocket", kind: "avatar", name: "Tên lửa", description: "Tiến bộ thần tốc.", cost: 200 },
  { id: "avatar-crown", kind: "avatar", name: "Vương miện", description: "Dành cho người đã đi rất xa.", cost: 400 },

  // titles shown under your name
  { id: "title-chamchi", kind: "title", name: "Người học chăm chỉ", description: "Danh hiệu hiện dưới tên bạn.", cost: 40 },
  { id: "title-motsach", kind: "title", name: "Mọt sách", description: "Cho người mê đọc.", cost: 120 },
  { id: "title-tuvung", kind: "title", name: "Chiến binh từ vựng", description: "Cho người ôn từ đều đặn.", cost: 200 },
  { id: "title-phatam", kind: "title", name: "Bậc thầy phát âm", description: "Cho người nói rõ từng âm cuối.", cost: 250 },
  { id: "title-nguphap", kind: "title", name: "Cao thủ ngữ pháp", description: "Cho người không còn sợ thì.", cost: 300 },
  { id: "title-huyenthoai", kind: "title", name: "Huyền thoại C1", description: "Danh hiệu cao nhất.", cost: 800 },

  // certificate frames
  { id: "frame-silver", kind: "frame", name: "Khung chứng chỉ Bạc", description: "Viền bạc cho mọi chứng chỉ của bạn.", cost: 150 },
  { id: "frame-gold", kind: "frame", name: "Khung chứng chỉ Vàng", description: "Viền vàng cho mọi chứng chỉ của bạn.", cost: 300 },
  { id: "frame-jade", kind: "frame", name: "Khung chứng chỉ Ngọc", description: "Viền xanh ngọc cho mọi chứng chỉ của bạn.", cost: 600 },
];

export const rewardById = (id: string | null) => (id ? REWARDS.find((r) => r.id === id) ?? null : null);
