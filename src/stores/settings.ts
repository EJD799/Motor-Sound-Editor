import { computed, ref } from "vue";
import { defineStore } from "pinia";

export interface KeyframeSnapSettings {
  speedStep: number;
  valueStep: number;
}

const DEFAULT_KEYFRAME_SNAP_SPEED_STEP = 0.5;
const DEFAULT_KEYFRAME_SNAP_VALUE_STEP = 0.2;

function normalizeSnapStep(value: number, fallback: number) {
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

export const useSettingsStore = defineStore("settings", () => {
  const keyframeSnapState = ref<KeyframeSnapSettings>({
    speedStep: DEFAULT_KEYFRAME_SNAP_SPEED_STEP,
    valueStep: DEFAULT_KEYFRAME_SNAP_VALUE_STEP,
  });

  const keyframeSnap = computed(() => keyframeSnapState.value);

  function setKeyframeSnapSpeedStep(value: number) {
    keyframeSnapState.value.speedStep = normalizeSnapStep(
      value,
      DEFAULT_KEYFRAME_SNAP_SPEED_STEP,
    );
  }

  function setKeyframeSnapValueStep(value: number) {
    keyframeSnapState.value.valueStep = normalizeSnapStep(
      value,
      DEFAULT_KEYFRAME_SNAP_VALUE_STEP,
    );
  }

  return {
    keyframeSnap,

    setKeyframeSnapSpeedStep,
    setKeyframeSnapValueStep,
  };
});
