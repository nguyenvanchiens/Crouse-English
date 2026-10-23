"use client";

import { useEffect, useRef, useState, type Dispatch, type KeyboardEvent, type MouseEvent, type PointerEvent, type SetStateAction } from "react";

/** how far a press must travel before it is a drag and not a tap */
const DRAG_START = 6;
/** a pointer's click comes right after its pointerup; one later than this is a separate press */
const CLICK_AFTER_POINTER = 500;

function moveItem<T>(list: T[], from: number, to: number) {
  const next = [...list];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

interface Press {
  x: number;
  y: number;
  index: number;
  label: string;
  el: Element;
  moved: boolean;
  /** the piece just swapped with, ignored until the finger leaves it, so two pieces of different widths don't
   *  swap back and forth under a finger that stays still */
  skip: Element | null;
}

/**
 * Reorder the pieces already placed in an answer: drag one onto another's place (touch or mouse), or move the
 * focused one with the arrow keys. A plain tap stays a tap (`onTap`: in the sentence builders, take the piece
 * back out), so a wrong piece in the middle no longer means taking everything after it out again.
 * Spread `itemProps(i, label)` on each piece; give them stable keys so a piece keeps its element as it moves.
 */
export function useDragReorder<T>(items: T[], setItems: Dispatch<SetStateAction<T[]>>, onTap: (index: number) => void) {
  const [dragging, setDragging] = useState<number | null>(null);
  const [status, setStatus] = useState("");
  const press = useRef<Press | null>(null);
  const pointerHandledAt = useRef(-Infinity);
  const count = useRef(items.length);
  useEffect(() => {
    count.current = items.length;
  }, [items.length]);
  const stop = useRef<() => void>(() => {});
  useEffect(() => () => stop.current(), []);

  const move = (from: number, to: number, label: string) => {
    const n = count.current;
    if (to < 0 || to >= n || from === to) return false;
    setItems((list) => moveItem(list, from, to));
    setStatus(`Đã chuyển “${label}” tới vị trí ${to + 1}/${n}`);
    return true;
  };

  // The drag is followed on the window: moving the dragged element in the page releases its pointer capture.
  const onWindowMove = (e: globalThis.PointerEvent) => {
    const p = press.current;
    if (!p) return;
    if (!p.moved && Math.hypot(e.clientX - p.x, e.clientY - p.y) < DRAG_START) return;
    if (!p.moved) setDragging(p.index);
    p.moved = true;
    // the piece under the finger takes the dragged piece's place (works across wrapped lines)
    const over = document.elementFromPoint(e.clientX, e.clientY)?.closest<HTMLElement>("[data-reorder-index]") ?? null;
    if (over !== p.skip) p.skip = null;
    if (!over || over === p.skip) return;
    const to = Number(over.dataset.reorderIndex);
    if (!Number.isInteger(to) || to === p.index) return;
    if (move(p.index, to, p.label)) {
      p.index = to;
      p.skip = over;
      setDragging(to);
    }
  };
  // A press that did not move is a tap, taken here rather than from `click`: phones sometimes send no click for
  // a tap right after a drag. The click that may still follow is then ignored (see onClick).
  const onWindowUp = (e: globalThis.PointerEvent) => {
    const p = press.current;
    press.current = null;
    setDragging(null);
    stop.current();
    if (!p) return;
    pointerHandledAt.current = performance.now();
    if (!p.moved && e.type === "pointerup" && p.el.contains(e.target as Node)) onTap(p.index);
  };

  const itemProps = (index: number, label: string) => ({
    "data-reorder-index": index,
    "data-dragging": dragging === index || undefined,
    style: { touchAction: "none" as const },
    onPointerDown: (e: PointerEvent<HTMLElement>) => {
      if (e.button !== 0) return;
      stop.current();
      press.current = { x: e.clientX, y: e.clientY, index, label, el: e.currentTarget, moved: false, skip: null };
      window.addEventListener("pointermove", onWindowMove);
      window.addEventListener("pointerup", onWindowUp);
      window.addEventListener("pointercancel", onWindowUp);
      stop.current = () => {
        window.removeEventListener("pointermove", onWindowMove);
        window.removeEventListener("pointerup", onWindowUp);
        window.removeEventListener("pointercancel", onWindowUp);
        stop.current = () => {};
      };
    },
    // Enter / Space (a click with detail 0) always count; a pointer's click right after its pointerup was
    // already handled there, as a tap or as the end of a drag
    onClick: (e: MouseEvent<HTMLElement>) => {
      if (e.detail !== 0 && performance.now() - pointerHandledAt.current < CLICK_AFTER_POINTER) return;
      onTap(index);
    },
    onKeyDown: (e: KeyboardEvent<HTMLElement>) => {
      const step = e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : 0;
      if (!step) return;
      e.preventDefault();
      const group = e.currentTarget.parentElement;
      if (move(index, index + step, label)) {
        // moving the element in the page can drop its focus: put it back on the moved piece
        requestAnimationFrame(() => group?.querySelector<HTMLElement>(`[data-reorder-index="${index + step}"]`)?.focus());
      }
    },
  });

  return { itemProps, dragging, status };
}
