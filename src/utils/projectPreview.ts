import { CURVE_MAX_VALUE } from "@/constants/curveRanges";
import type { ProjectDocument } from "@/types/project";
import type { TrackCurve } from "@/types/track";
import { sampleCurve } from "@/utils/curves";

function curvePreview(curve: TrackCurve, maxSpeed: number): number[] {
  const points = 9;

  return Array.from({ length: points }, (_, index) => {
    const speed = (maxSpeed / (points - 1)) * index;
    const value = sampleCurve(curve, speed);
    const normalized = Math.max(0, Math.min(value / CURVE_MAX_VALUE[curve.kind], 1));
    return 92 - normalized * 72;
  });
}

export function createProjectPreview(document: ProjectDocument) {
  const track =
    document.tracks.tracks.find((item) => item.visible !== false) ??
    document.tracks.tracks[0];
  const maxSpeed = document.project.meta.maxSpeed || 1;

  if (!track) {
    return {
      previewPitch: [],
      previewVolume: [],
    };
  }

  return {
    previewPitch: curvePreview(track.curveSets.traction.pitch, maxSpeed),
    previewVolume: curvePreview(track.curveSets.traction.volume, maxSpeed),
  };
}
