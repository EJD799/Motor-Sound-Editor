---
title: Editor & Track Layers
description: Editor layout, track management, and preview behavior.
---

# Editor & Track Layers

The editor is where the product becomes specific. The layout is tuned around selecting tracks, shaping curves, and hearing the effect immediately.

## Main layout zones

The current editor is organized into four primary areas:

- left tool rail
- center dual-chart workspace
- right track and detail panels
- bottom transport and simulator bar

## Left tool rail

### Tool modes

The current tool modes are:

- `Select Mode`
- `Move Mode`
- `Keyframe`

These modes affect how keyframes are selected, inserted, and dragged inside the chart editor.

### Current speed

The left side also exposes `Current Speed`, which drives both chart context and realtime preview behavior.

### Export and return

The lower area of the rail includes:

- `Export File`
- `Return Home`

If the current project is dirty, returning home triggers an unsaved-changes confirmation first.

## Dual-chart workspace

The center workspace contains two separate charts:

- upper `Pitch`
- lower `Volume`

Each chart renders the active track within the currently selected curve set.

## Keyframe editing

The current implementation already supports:

- inserting keyframes
- selecting keyframes
- dragging keyframes
- deleting keyframes
- editing values numerically

Curve data is separated into:

- `traction`
- `brake`

And each set contains:

- `pitch`
- `volume`

## Track layer management

The `Track Layers` panel is the main control surface for multi-track work. It supports:

- adding tracks
- deleting the active track
- choosing the active track
- renaming
- recoloring
- mute / unmute
- show / hide
- enable / disable
- audio file assignment

This is the layer-management core of the product, especially when shaping several motor sound bands together.

## Track details

The `Track Details` area exposes editable information for the active track, including:

- track name
- color
- assigned file
- other active-track properties available in the current UI

If no track is active, the panel shows an empty state.

## List editor

The visual chart editor is paired with a list editor for precision work:

- edit speed / value pairs directly
- inspect traction / brake pitch / volume side by side
- work numerically when gesture-based editing is not enough

This makes the app usable for both exploratory editing and exact-value cleanup.

## Realtime preview

The bottom transport area provides:

- play / pause
- `Traction`
- `Coasting`
- `Brake`
- max speed
- acceleration

As speed or mode changes, the preview engine updates the layered audio result so curve edits can be evaluated immediately.

## Project detail and editing history

The current editor also includes:

- undo / redo history
- project details dialog
- unsaved-change confirmation when leaving

Those details matter because this is intended to be a repeatable editing workflow, not a one-shot converter.
