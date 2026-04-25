---
title: Curve Editing
description: Add, move, update, and remove keyframes in the chart editor.
---

# Curve Editing

Curve editing is the heart of Motor Sound Editor. Each editable behavior is represented as a speed-based curve made of keyframes. You do not type rows into a raw data table first; you shape the behavior visually and refine it numerically when needed.

## The two editable behaviors

For each relevant curve set, you edit:

- **Pitch**
- **Volume**

These are separate curves. A believable sound often depends on them moving differently across the same speed range.

## The available curve sets

Each track contains two curve sets:

- **Traction**
- **Brake**

In the current build, coasting preview stays on the traction-side authoring path. When the simulator mode is `brake`, the brake curves become active. Otherwise, traction is the active editing set.

## Keyframe fundamentals

A keyframe stores:

- speed
- value

The editor sorts keyframes by speed and clamps values to valid ranges for the curve type. In practice, that means you can focus on shaping the curve instead of manually enforcing table order.

## Adding keyframes in the chart

There are two common ways to add keyframes:

- switch to **Keyframe** mode and add points directly in the chart
- use list-editor tools to insert a row-based keyframe

After adding a point, the app can select it immediately so you can continue with precise adjustments.

## Selecting keyframes

When a keyframe is selected, the Track Details panel exposes numeric **X** and **Y** fields:

- **X** is speed
- **Y** is the current curve value

This gives you two editing styles:

- graphical movement in the chart
- exact numeric refinement in the details panel

## Moving keyframes

Use **Move** mode when you want to reposition an existing point. Moving a keyframe changes the shape of the active curve without creating a new point.

Typical uses:

- smoothing a ramp
- moving a change later in the speed range
- reducing a sudden jump

## Deleting keyframes

You can remove a selected keyframe through:

- the **Delete Selected Point** button in Track Details
- the `Delete` key
- keyframe interactions in keyframe mode where supported by the current context

Delete points carefully. Removing one keyframe can change a much larger portion of the resulting curve than you expect.

## Numeric editing

The X and Y fields are especially useful when:

- two adjacent points are very close
- the chart is visually dense
- you want repeatable exact values
- you are matching behavior to an external reference

Because the values are tied to the selected keyframe, always confirm which point is selected before typing.

## Speed range and clamping

Keyframe speed is normalized against the project's maximum speed. If you later reduce maximum speed at the project level, existing keyframes can be normalized into the new valid range.

This is helpful, but it also means:

- project-wide speed changes should be made deliberately
- late changes to max speed can affect the interpretation of existing curves

## Good curve-editing workflow

1. Place the main structural points first.
2. Preview the result at several speeds.
3. Add intermediate points only when needed.
4. Use numeric editing for precision, not for every edit.
5. Keep the curve readable.

Overfitting with too many points usually makes later revisions harder.

## Related reading

- [Transport and Preview](/docs/guide/transport-and-preview)
- [List Editor](/docs/guide/list-editor)
