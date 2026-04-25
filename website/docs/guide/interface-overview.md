---
title: Interface Overview
description: Read the application as a complete workflow before focusing on individual tools.
---

# Interface Overview

Motor Sound Editor is easier to learn when you treat it as one connected workflow instead of a collection of isolated widgets. At a high level, the application has two major surfaces:

- the **Home screen**, where you manage projects
- the **Editor**, where you shape track behavior and preview results

<ScreenshotPlaceholder
  title="Annotated interface overview"
  caption="Replace this placeholder with a labeled interface diagram that identifies the home screen, editor workspace, chart panels, track sidebar, and transport bar."
  ratio="16 / 9"
/>

## Home screen vs editor

The Home screen answers questions like:

- which project should I continue?
- do I want to create, open, or import a file?
- which recent project matches the sound set I need?

The Editor answers questions like:

- which track is active?
- which curve set am I editing?
- what does the project sound like at the current speed?
- which keyframe should I move, add, or delete?

## The editor layout at a glance

When you enter the editor, the screen is organized around three zones:

1. **Left tools and commands**
2. **Central chart workspace**
3. **Right-side track controls**

The transport bar runs along the bottom and ties playback state, simulator mode, and project-wide speed settings together.

## Left side: tools and project actions

The left area gives you mode selection and project-level actions such as:

- Select mode
- Move mode
- Keyframe mode
- Export
- Return Home

This area is about intent: what kind of operation are you about to perform?

## Center: chart workspace

The center of the editor is the main authoring surface. It contains two stacked charts:

- the **Pitch** chart
- the **Volume** chart

These charts are where you visually understand how a track behaves across speed.

## Right side: track management

The right sidebar manages the currently available tracks. It includes:

- the track layer list
- controls to add or delete tracks
- the active-track selector
- the selected track's editable details

This is where you decide which sound source belongs to which layer, and how that layer is named and identified.

## Bottom transport bar

The bottom bar combines playback and simulator controls. It contains:

- play/pause
- traction / coasting / brake mode buttons
- max speed
- acceleration
- related project-wide transport settings

Think of this bar as the bridge between editing and listening.

## Modal tools and supporting panels

Several operations happen in dialogs or transient panels, including:

- list editor
- export dialog
- project details
- new keyframe panels

These are not secondary features. They support the main chart workflow and are part of normal daily use.

## Recommended reading

After this overview, continue with:

1. [Editor Workspace](/docs/guide/editor)
2. [Tracks and Audio](/docs/guide/tracks-and-audio)
3. [Curve Editing](/docs/guide/curve-editing)
