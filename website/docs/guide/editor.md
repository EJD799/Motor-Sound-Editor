---
title: Editor Workspace
description: Understand the editor as the main authoring environment.
---

# Editor Workspace

The editor is the center of the product. It combines track management, speed-based curve authoring, live preview, and export preparation in one desktop workspace.

![Motor Sound Editor editor workspace](/editpage.png)

## What the editor is optimized for

The editor is not a generic DAW timeline and it is not a spreadsheet replacement with nicer colors. It is optimized for one specific job:

- map speed to pitch and volume
- manage multiple layers
- listen to the result immediately
- preserve the work in a structured project file

## Tool modes

The left toolbar exposes the main interaction modes:

- **Select**: focus on choosing tracks or points
- **Move**: adjust positions of existing keyframes
- **Keyframe**: add or delete points directly in the chart workflow

If an action does not behave the way you expect, check the active tool first. Many chart interactions are mode-dependent.

## The two-chart model

The editor uses two stacked charts:

- **Pitch** on top
- **Volume** below

This separation is important. Even when the same speed region is involved, the tonal behavior and loudness behavior are edited independently.

## Active track and active curve set

Almost every chart action depends on two active contexts:

- the **active track**
- the **active curve set**

The active curve set follows the current simulator mode:

- when the simulator is in **brake**, the editor works on the brake curve set
- otherwise, the editor works on the traction curve set

In practical terms, coasting is previewed as part of the traction-side authoring flow in the current build.

## Reading the chart area

Each chart uses speed on the horizontal axis and a behavior value on the vertical axis:

- pitch values control playback rate behavior
- volume values control gain behavior

The charts are designed to help you read transitions, plateaus, and abrupt changes at a glance.

## Project context visible in the editor

The editor keeps several project-wide values close at hand:

- current speed
- simulator mode
- maximum speed
- acceleration
- brake deceleration

These values give context to every keyframe decision you make.

## Export and return-home actions

The editor sidebar also includes:

- **Export File**
- **Return Home**

Export lets you package the project without leaving the editor. Return Home exits back to the project gallery. If the project has unsaved changes, the app can prompt you before leaving.

## Working rhythm

A typical editing rhythm looks like this:

1. choose the active track
2. choose the simulator mode
3. add or move keyframes
4. preview at speed
5. refine values numerically if needed
6. save

That rhythm is deliberate. The interface is arranged to make the loop short.

## Next steps

Continue with [Tracks and Audio](/docs/guide/tracks-and-audio) to understand how tracks are selected, named, and linked to audio files.
