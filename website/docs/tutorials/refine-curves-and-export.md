---
title: Refine Curves and Export
description: Polish a project and prepare a packaged output.
---

# Refine Curves and Export

This tutorial takes a project from "basically working" to "reviewed, saved, and packaged."

## Goal

You will:

- refine curve shape
- use the list editor for numeric cleanup
- save the project
- run export

## Step 1: Review the chart

Open the editor and inspect:

- pitch shape
- volume shape
- traction vs brake differences

Before changing values, decide whether the problem is structural or numeric.

## Step 2: Make structural changes in the chart

Use the chart when you need to:

- move a transition to a different speed
- soften or sharpen a ramp
- add a new control point for a missing behavior change

## Step 3: Make numeric changes in the list editor

Open the list editor when:

- the shape already feels correct
- the exact values need cleanup
- you want a clearer traction vs brake comparison

Apply the changes only after checking both sides of the table.

## Step 4: Preview at multiple speeds

Do not validate at only one speed. Test:

- low speed
- mid speed
- near the upper range

Repeat in both traction and brake.

## Step 5: Save the editable project

Save the `.msep` file first. This keeps the editable master version safe before packaging.

## Step 6: Export

1. Open the export dialog.
2. Leave **BVE** as the active format.
3. Choose a sample rate.
4. Choose the destination path.
5. Run export.

If the project contains OGG audio, the export process can convert it to WAV for the active export target.

## Step 7: Archive both results

Keep:

- the editable `.msep`
- the exported `.zip`

This gives you both a master source file and a packaged deliverable.
