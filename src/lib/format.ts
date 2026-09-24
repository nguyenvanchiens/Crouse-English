export function formatVnd(amount: number): string {
  return `${new Intl.NumberFormat("vi-VN").format(amount)}đ`;
}

export function formatDateVi(iso: string): string {
  return new Date(iso).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
}

export function certificateCode(courseSlug: string, name: string, completedAt: string): string {
  let h = 5381;
  for (const ch of `${courseSlug}|${name}|${completedAt}`) h = ((h << 5) + h + ch.charCodeAt(0)) | 0;
  const hash = (h >>> 0).toString(36).toUpperCase().padStart(6, "0").slice(-6);
  return `CE-${courseSlug.toUpperCase()}-${hash}`;
}
