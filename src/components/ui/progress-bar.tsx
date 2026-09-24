export function ProgressBar({ value, label, className = "" }: { value: number; label: string; className?: string }) {
  const v = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={v}
      className={`h-3.5 w-full overflow-hidden rounded-full border-2 border-ink bg-card ${className}`}
    >
      <div className="h-full rounded-full bg-leaf transition-[width] duration-500" style={{ width: `${v}%` }} />
    </div>
  );
}
