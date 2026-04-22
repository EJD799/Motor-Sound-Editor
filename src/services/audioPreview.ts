import type { AudioAsset, CurveSetKind, Track } from "@/types/track";
import { sampleCurve } from "@/utils/curves";

interface PlayingTrack {
  source: AudioBufferSourceNode;
  gain: GainNode;
}

export class AudioPreviewEngine {
  private context: AudioContext | null = null;
  private buffers = new Map<string, AudioBuffer>();
  private playing = new Map<string, PlayingTrack>();

  async loadAsset(asset: AudioAsset): Promise<AudioBuffer | null> {
    if (this.buffers.has(asset.id)) {
      return this.buffers.get(asset.id) ?? null;
    }

    if (!asset.objectUrl) return null;

    const context = this.getContext();
    const response = await fetch(asset.objectUrl);
    const data = await response.arrayBuffer();
    const buffer = await context.decodeAudioData(data);
    this.buffers.set(asset.id, buffer);
    return buffer;
  }

  async start(
    tracks: Track[],
    assets: AudioAsset[],
    curveSet: CurveSetKind,
    speed: number,
  ): Promise<string[]> {
    const context = this.getContext();
    await context.resume();
    this.stop();

    const warnings: string[] = [];
    const activeTracks = this.filterAudibleTracks(tracks);
    const assetById = new Map(assets.map((asset) => [asset.id, asset]));

    for (const track of activeTracks) {
      const asset = track.assetId ? assetById.get(track.assetId) : null;

      if (!asset) {
        warnings.push(`${track.name} has no audio file`);
        continue;
      }

      try {
        const buffer = await this.loadAsset(asset);
        if (!buffer) {
          warnings.push(`${track.name} audio is unavailable`);
          continue;
        }

        const source = context.createBufferSource();
        const gain = context.createGain();
        source.buffer = buffer;
        source.loop = true;
        source.connect(gain);
        gain.connect(context.destination);
        source.start();
        this.playing.set(track.id, { source, gain });
      } catch {
        warnings.push(`${track.name} audio could not be decoded`);
      }
    }

    this.update(tracks, curveSet, speed);
    return warnings;
  }

  update(tracks: Track[], curveSet: CurveSetKind, speed: number) {
    if (!this.context) return;

    const audibleIds = new Set(this.filterAudibleTracks(tracks).map((track) => track.id));
    const trackById = new Map(tracks.map((track) => [track.id, track]));
    const now = this.context.currentTime;

    this.playing.forEach((nodes, trackId) => {
      const track = trackById.get(trackId);
      const shouldPlay = track ? audibleIds.has(track.id) : false;
      const pitch = track ? sampleCurve(track.curveSets[curveSet].pitch, speed) : 1;
      const volume = track ? sampleCurve(track.curveSets[curveSet].volume, speed) : 0;

      nodes.source.playbackRate.setTargetAtTime(Math.max(0.01, pitch), now, 0.03);
      nodes.gain.gain.setTargetAtTime(shouldPlay ? volume : 0, now, 0.03);
    });
  }

  stop() {
    this.playing.forEach(({ source }) => {
      try {
        source.stop();
      } catch {
        // Already stopped nodes are harmless.
      }
    });
    this.playing.clear();
  }

  async dispose() {
    this.stop();
    this.buffers.clear();
    const context = this.context;
    this.context = null;

    if (context && context.state !== "closed") {
      await context.close();
    }
  }

  private getContext(): AudioContext {
    if (!this.context) {
      this.context = new AudioContext();
    }

    return this.context;
  }

  private filterAudibleTracks(tracks: Track[]): Track[] {
    return tracks.filter(
      (track) => track.enabled && !track.mute && track.visible !== false,
    );
  }
}
