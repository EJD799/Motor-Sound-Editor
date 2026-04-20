import type { ID } from "./common";
import type { CurveKind } from "./track";

export type EditorTool = "select" | "move" | "keyframe";
export type SimMode = "traction" | "coasting" | "brake";
export type SimulatorMode = SimMode;
export type TransportState = "stopped" | "playing" | "paused";

export interface SelectedKeyframeRef {
  trackId: ID;
  kind: CurveKind;
  keyframeId: ID;
}

export interface HoveredKeyframeRef {
  trackId: ID;
  kind: CurveKind;
  keyframeId: ID;
}

export interface EditorRuntimeState {
  simulator: {
    mode: SimulatorMode;
    currentSpeed: number;
    maxSpeed: number;
    acceleration: number;
    brakeDeceleration: number;
  };
  playback: {
    transport: TransportState;
    playheadSpeed: number;
    audioEnabled: boolean;
  };
  selection: {
    activeTrackId: ID | null;
    selectedKeyframe: SelectedKeyframeRef | null;
    hoveredKeyframe: HoveredKeyframeRef | null;
  };
  view: {
    tool: EditorTool;
    zoomX: number;
    zoomY: number;
    offsetX: number;
    offsetY: number;
  };
}

export interface KeyframePoint {
  id: string;
  x: number;
  y: number;
}

export interface TrackCurve {
  pitchPoints: KeyframePoint[];
  volumePoints: KeyframePoint[];
}

export interface AudioTrack {
  id: string;
  name: string;
  color: string;
  filePath: string | null;
  mute: boolean;
  solo: boolean;
  curve: TrackCurve;
}

export interface SelectionState {
  activeTrackId: string | null;
  selectedPitchPointId: string | null;
  selectedVolumePointId: string | null;
}

export interface SimulatorState {
  mode: SimMode;
  currentSpeed: number;
  maxSpeed: number;
  acceleration: number;
  brakeDeceleration: number;
  isPlaying: boolean;
}
