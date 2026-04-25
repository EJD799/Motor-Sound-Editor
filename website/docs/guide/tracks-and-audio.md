---
title: Tracks and Audio
description: Manage track layers, assign files, and control track state.
---

# Tracks and Audio

Tracks are the building blocks of a Motor Sound Editor project. Each track can hold its own audio file, color, name, curve data, and visibility state. A finished project often depends more on clean track organization than on any single keyframe edit.

## The track layers panel

The **Track Layers** panel on the right side of the editor is the main place where you manage project layers. It includes:

- an active-track selector
- a scrollable track list
- add and delete track actions
- per-track mute and visibility toggles

Each track row shows:

- a color strip
- the track name
- a mute button
- a visibility button

## Active track selection

The active track decides which layer you are editing. Only one track is active at a time.

You can activate a track in two common ways:

- choose it from the dropdown selector
- click it in the track list

If no track is active, the Track Details panel becomes unavailable for editing and chart interactions lose their main target.

## Adding a track

Use the `+` button in the Track Layers panel to create a new track. New tracks receive:

- a generated name such as `motor0`, `motor1`, and so on
- a random color
- fresh traction and brake curve sets

Add new tracks when you want to separate different sound layers instead of forcing unrelated behavior into one curve set.

## Deleting a track

Use the `-` button to delete the active track.

Before you delete a track, confirm two things:

- the track is not the layer you still want to hear in preview
- its audio or curve work is no longer needed

Deleting a track removes its editing context from the current project state.

## Renaming a track

The **Track Details** panel exposes a **Name** field for the active track. Use descriptive names whenever possible:

- `motor_low`
- `motor_mid`
- `gear_overlay`
- `brake_texture`

Clear names make list editing, preview troubleshooting, and later revisions much easier.

## Track color

Each active track can change color through the **Color** control in Track Details. Color has no effect on export output, but it has a strong effect on editing clarity because it helps you distinguish track curves in the chart view and the layer list.

Use color to separate:

- different tonal roles
- duplicated layers with slight variation
- primary vs support tracks

## Assigning an audio file

The **File** control in Track Details opens the audio picker for the active track.

The current build supports assigning at least:

- `wav`
- `ogg`

When an audio file is assigned, the track stores an asset reference inside the project. That asset becomes part of the `.msep` project package when saved.

## What happens when you replace a file

When you assign a new audio file to a track, the track points to the new asset. During save and save-as packaging, unreferenced audio is pruned from the resulting `.msep` output so old replaced audio does not keep inflating the saved project file.

That means:

- you can safely replace track audio during editing
- the saved project should keep only the audio still in use

## Mute and visibility

Each track has two quick toggles in the layer list:

- **Mute**: removes the track from audible preview
- **Visibility**: hides the track from the visible editing set and also removes it from audible preview behavior in the current implementation

These toggles are useful for troubleshooting layered sound sets.

## Good track management habits

- Start with fewer tracks than you think you need.
- Split a track only when the behavior really differs.
- Rename tracks before the project grows.
- Use mute to isolate a problem.
- Use visibility to reduce visual clutter when curve editing becomes dense.

## Next steps

Continue with [Curve Editing](/docs/guide/curve-editing) to learn how each track's pitch and volume behavior is authored.
