---
title: Exporting To BVE
description: Current BVE export behavior.
---

# Exporting To BVE

The current production export target is **BVE** only. Other export labels may appear in UI placeholders, but they are not part of the shipped workflow yet.

## What makes a track exportable

A track is considered exportable when it is:

- enabled
- not muted
- assigned to an audio asset

If no track satisfies those conditions, export is intentionally blocked.

## Current export capabilities

- export format: `BVE`
- output container: `.zip`
- accepted source audio: `wav`, `ogg`
- `ogg` is decoded and converted to `wav` during export
- exported WAV encoding: `PCM16`
- selectable sample rates:
  - `22050`
  - `32000`
  - `44100`
  - `48000`
  - `96000`

## Output structure

```text
<ProjectName>.zip
\-- <ProjectName>/
    |-- vehicle.txt
    |-- motornoise/
    |   |-- motornoise.txt
    |   |-- powerfreq.csv
    |   |-- powervol.csv
    |   |-- brakefreq.csv
    |   \-- brakevol.csv
    \-- sound/
        |-- Sound.txt
        |-- sound_1.wav
        |-- sound_2.wav
        \-- ...
```

## What those files do

### `vehicle.txt`

Points BVE to `sound\Sound.txt` and `motornoise\motornoise.txt`.

### `motornoise/*.csv`

Stores sampled data derived from the project keyframe curves.

### `Sound.txt`

Maps exported track indices to generated WAV files.

## Practical export advice

- check which tracks are still muted, hidden, or inactive in your workflow
- make sure every track you expect to hear is actually assigned to audio
- remember that OGG inputs become WAV on export, which can change final package size

::: warning Current boundary
OpenBVE, MTR, and broader export ecosystems are still future-facing direction only. The current documentation and homepage intentionally keep the export story limited to BVE.
:::
