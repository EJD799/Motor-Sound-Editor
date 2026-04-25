---
title: Transport and Preview
description: Understand simulator modes, speed control, and audible preview.
---

# Transport and Preview

Preview is what turns the editor from a data-entry tool into an authoring tool. Instead of exporting after every small change, you can listen to the current project in motion while continuing to shape it.

## What the transport bar controls

The transport bar along the bottom of the editor provides:

- play / pause
- simulator mode selection
- maximum speed
- acceleration
- related project-wide simulator values

These controls do not exist only for presentation. They directly shape how the preview system interprets the active project.

## Play and pause

Use the play button or press `Space` to start or stop preview playback.

When preview starts, the app:

- collects audible tracks
- loads the assigned audio buffers
- samples the active curves at the current speed
- loops the track audio while continuously updating pitch and gain

If a track has no valid audio file, the engine can warn instead of silently pretending the layer is present.

## Simulator modes

The transport bar exposes three simulator states:

- **Traction**
- **Coasting**
- **Brake**

These modes matter because the editor does not treat all running conditions as the same.

### Traction

Traction is used for powered running behavior. It is the default editing-side curve set outside of brake mode.

### Coasting

Coasting is a preview state, but in the current implementation it still works through the traction-side authoring path. Use it to hear how the project behaves when not braking, while remembering that dedicated coasting curve authoring is not separate in the present build.

### Brake

Brake switches the editor to the brake curve set. If you are editing brake behavior, confirm the simulator mode before changing chart points.

## Current speed

The preview engine responds to the current speed value. As speed changes:

- pitch is resampled from the active pitch curve
- volume is resampled from the active volume curve

This makes speed the most important audition variable during tuning.

## Max speed and acceleration

The transport bar also exposes project-wide behavior limits such as:

- maximum speed
- acceleration
- brake deceleration

These values are not cosmetic. They influence editor normalization, preview logic, and how you interpret the project.

## Audible-track rules

For preview purposes, a track must be effectively audible. In the current implementation that means it should:

- be enabled
- not be muted
- not be hidden

If a track is hidden or muted, the preview engine treats it as inactive.

## Practical preview strategy

Use preview in short loops:

1. choose the track and state
2. set or change speed
3. listen
4. edit one or two points
5. listen again

This is much more reliable than making many edits and only checking the result later.

## Troubleshooting preview

If preview sounds wrong, check these first:

- is the correct track active?
- is the correct simulator mode selected?
- does the track have an assigned audio file?
- is the track muted or hidden?
- did you edit traction while expecting brake, or the reverse?

## Related reading

- [Curve Editing](/docs/guide/curve-editing)
- [List Editor](/docs/guide/list-editor)
- [Shortcuts](/docs/guide/shortcuts)
