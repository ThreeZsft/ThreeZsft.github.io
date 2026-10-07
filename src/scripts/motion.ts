/**
 * Shared motion primitives.
 *
 * Every effect here is an enhancement over a page that already works without
 * it, and every one of them asks `reduced()` before it moves anything.
 */

/** Whether the visitor has asked for less movement. */
export function reduced(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Whether this is a real pointer that can hover — a mouse or trackpad. */
export function finePointer(): boolean {
  return window.matchMedia("(pointer: fine) and (hover: hover)").matches;
}

/** Frame-rate independent enough for our purposes, and what the design uses. */
export function lerp(from: number, to: number, amount: number): number {
  return from + (to - from) * amount;
}

export function clamp(value: number, min = 0, max = 1): number {
  return Math.min(max, Math.max(min, value));
}

/** Smoothstep — the falloff the dot field and the globe both pull with. */
export function smoothstep(t: number): number {
  return t * t * (3 - 2 * t);
}

/** easeInOutCubic — drives the hero cards from pile to grid. */
export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * A requestAnimationFrame loop that stops itself when the page is hidden and
 * picks up again when it comes back, so a background tab costs nothing.
 */
export function rafLoop(tick: (now: number) => void): () => void {
  let id = 0;
  const frame = (now: number) => {
    id = requestAnimationFrame(frame);
    tick(now);
  };
  const start = () => {
    if (!id) id = requestAnimationFrame(frame);
  };
  const stop = () => {
    if (id) cancelAnimationFrame(id);
    id = 0;
  };
  const visibility = () => (document.hidden ? stop() : start());
  document.addEventListener("visibilitychange", visibility);
  start();
  return () => {
    stop();
    document.removeEventListener("visibilitychange", visibility);
  };
}

/** The label + glyph the cursor follower shows while hovering something. */
export type FollowerDetail = { label: string; glyph: string } | null;

/** Components announce what the follower should say; the cursor listens. */
export function setFollower(detail: FollowerDetail): void {
  window.dispatchEvent(new CustomEvent("tm:follower", { detail }));
}
