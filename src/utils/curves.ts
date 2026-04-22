import type { TrackCurve } from "@/types/track";

export function sampleCurve(curve: TrackCurve, speed: number): number {
  const keyframes = curve.keyframes;

  if (keyframes.length === 0) return curve.kind === "pitch" ? 1 : 0;
  if (speed <= keyframes[0].speed) return keyframes[0].value;

  let low = 1;
  let high = keyframes.length - 1;
  let nextIndex = keyframes.length;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (speed <= keyframes[mid].speed) {
      nextIndex = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  if (nextIndex === keyframes.length) {
    return keyframes[keyframes.length - 1].value;
  }

  const previous = keyframes[nextIndex - 1];
  const next = keyframes[nextIndex];
  const span = next.speed - previous.speed;
  const ratio = span === 0 ? 0 : (speed - previous.speed) / span;
  return previous.value + (next.value - previous.value) * ratio;
}
