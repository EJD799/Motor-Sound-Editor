# Motor Sound Editor

Motor Sound Editor is a desktop editor for building, previewing, saving, and exporting motor sound projects for BVE-style train content workflows. The app is built with Vue 3, TypeScript, Tauri, and Rust, and uses a native `.msep` project format for editable source projects plus `.zip` packages for BVE export.

## Language

- English: this file
- Simplified Chinese: [README.zh-CN.md](README.zh-CN.md)

## Current Status

| Status | Meaning |
| --- | --- |
| Implemented now | Available in the current codebase and expected to work today |
| Available but limited | Shipped, but intentionally narrow or platform-specific |
| Planned / roadmap | Not implemented yet, or only present as UI placeholders / product direction |

## Why This Project Exists

Motor Sound Editor is aimed at creators who need a dedicated workflow for layered traction and brake motor sounds instead of hand-editing raw BVE tables. It focuses on three practical jobs:

- editing speed-based pitch and volume curves visually
- previewing multi-track motor sounds in real time
- packaging editable projects and exporting a BVE-friendly ZIP bundle

Typical users include BVE content creators, train simulation hobbyists, and tool builders who want a desktop-first editor instead of a folder of CSV and text files.

## Current Capabilities

### Implemented now

- Create a new `.msep` project with project name, max speed, acceleration, and brake deceleration defaults
- Open existing `.msep` projects directly from the home page or by launching the app with a project path
- Import `.msep` files into the recent-project gallery, including drag-and-drop on the home page
- Browse and manage recent projects with search, date/name sorting, and generated preview lines
- Save and Save As `.msep` files, including unsaved-changes prompts when leaving the editor or closing the window
- Edit motor sound data with separate traction and brake curve sets for pitch and volume
- Add, move, delete, and numerically edit keyframes
- Switch editor tools between select, move, and keyframe insertion modes
- Manage tracks: add track, delete active track, rename track, recolor track, assign audio, mute, hide/show, and activate/deactivate a track
- Assign `wav` or `ogg` audio files to tracks and read metadata through the native layer
- Preview layered audio in real time with simulator states for traction, coasting, and brake
- Use a list editor to edit traction/brake pitch and volume keyframes in tabular form
- Undo and redo editing history
- Open project details and inspect project statistics
- Export a BVE ZIP package with generated text/CSV files and WAV audio conversion

### Available but limited

- Export currently supports `BVE` only; `OpenBVE` and `MTR` appear in the UI but are disabled placeholders
- Windows release builds register `.msep` file association and support single-instance reopen behavior; this is Windows-specific
- Audio import is limited to `wav` and `ogg`
- Home-page `Import File` adds a project to the gallery; it does not immediately enter the editor
- There is a settings store for keyframe snap values, but there is no finished settings screen yet
- The project is currently versioned as `v0.0.1`

### Planned / roadmap

- broader export targets such as OpenBVE or MTR
- a fuller settings experience
- richer project metadata and documentation fields
- stronger recovery and compatibility tooling around older/newer project versions
- possible future backend audio upgrades if frontend preview performance becomes a bottleneck

## Workflow Overview

1. Create a project or open/import an existing `.msep` file from the home page.
2. Enter the editor and select the active track you want to work on.
3. Assign a `wav` or `ogg` file to the track.
4. Edit pitch and volume curves for traction and brake behavior with the chart editor or the list editor.
5. Preview playback by changing transport state and current speed.
6. Save the editable source project as `.msep`.
7. Export a `.zip` package for BVE when you need a distributable output.

### Editor interactions worth knowing

- `Space`: play / pause preview
- `W`: step simulator mode upward toward `Traction`
- `S`: step simulator mode downward toward `Brake`
- `Ctrl+S`: save
- `Ctrl+Shift+S`: save as
- `Ctrl+Z`: undo
- `Ctrl+Y` or `Ctrl+Shift+Z`: redo
- `Ctrl+D`: clear active selection
- `Delete`: delete selected keyframe

## Native `.msep` Project Format

### Implemented now

`.msep` is the native editable project format used by Motor Sound Editor. In the current implementation, it is a ZIP-based container written by the Rust backend.

The archive contains:

```text
project.msep
|-- project.json
|-- tracks.json
\-- Assets/
    \-- <generated-file-names>
```

- `project.json`: project metadata such as name, app version, schema version, timestamps, max speed, acceleration, and brake deceleration
- `tracks.json`: active track id, track definitions, curve/keyframe data, and audio asset metadata
- `Assets/...`: packaged audio payloads referenced by the track asset records

### Notes

- The extension is `.msep`
- The editor works with the packaged project data, not with loose BVE export files
- Opening a project restores packaged audio payloads and recreates object URLs for preview playback

### Planned / roadmap

- more explicit forward/backward compatibility handling between schema versions
- migration tooling for older project files if the schema evolves

## BVE Export Behavior

### Implemented now

The app can export a project as a `.zip` archive for BVE workflows. The Rust backend generates the export bundle and resamples audio to the selected sample rate.

Current export flow:

- only enabled tracks with assigned audio and `mute = false` are exported
- the export root folder is based on a sanitized project name
- `ogg` audio is decoded and converted to WAV during export
- output WAV files are encoded as PCM16
- selectable sample rates are `22050`, `32000`, `44100`, `48000`, and `96000`

Generated structure:

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

Key generated files:

- `vehicle.txt`: points BVE to `sound\Sound.txt` and `motornoise\motornoise.txt`
- `motornoise.txt`: maps power/brake volume and frequency tables
- `powerfreq.csv`, `powervol.csv`, `brakefreq.csv`, `brakevol.csv`: sampled motor-noise tables derived from the project keyframes
- `Sound.txt`: maps track indices to generated WAV file names

### Available but limited

- export format selection UI shows future formats, but only `BVE` is active today
- exporting with no eligible tracks fails intentionally

### Planned / roadmap

- additional export targets beyond BVE
- more export-time options and validation

## Tech Stack And Architecture

### Implemented now

- Frontend: Vue 3 + TypeScript + Pinia
- Visual editor: Konva
- Desktop shell and native IPC: Tauri 2
- Native backend: Rust
- Audio metadata decoding and export-time audio processing: Rust + `symphonia`
- Packaging: Rust ZIP writer for `.msep` and BVE `.zip` output

High-level split:

- Vue/Pinia manages application state, editor interactions, and Web Audio preview
- Rust handles project packaging, project opening, file timestamps, metadata decoding, Windows file association, and BVE export
- Tauri IPC connects the two layers

## Getting Started

### Prerequisites

- Node.js
- `pnpm`
- Rust toolchain
- Tauri build prerequisites for your platform

Windows is the primary target right now. The codebase is desktop-first, and some behavior such as `.msep` file association is implemented specifically for Windows release builds.

### Install dependencies

```bash
pnpm install
```

### Run in development

```bash
pnpm tauri dev
```

Notes:

- Tauri starts the Vite frontend automatically through `beforeDevCommand`
- the Vite dev server is configured for port `1420`

### Build the frontend only

```bash
pnpm build
```

### Build the desktop app

```bash
pnpm tauri build
```

## Development Commands

| Command | What it does |
| --- | --- |
| `pnpm install` | Install JavaScript dependencies |
| `pnpm dev` | Run the Vite frontend by itself |
| `pnpm build` | Type-check and build the frontend |
| `pnpm preview` | Preview the built frontend |
| `pnpm tauri dev` | Run the desktop app in development |
| `pnpm tauri build` | Build desktop release bundles |

## Repository Layout

```text
.
|-- src/                 # Vue frontend, pages, components, stores, services
|-- src-tauri/           # Rust backend, Tauri config, bundling assets
|-- public/              # Static public assets
|-- BVE电机音编辑PRD.md     # Product/design notes
|-- 导出-BVE.md           # Export behavior notes
\-- package.json         # Frontend scripts and dependencies
```

Useful entry points:

- `src/App.vue`: top-level app flow, global save/open logic, export dialog, unsaved-change handling
- `src/pages/HomePage.vue`: project gallery, create/open/import flows
- `src/pages/EditorPage.vue`: main editor UI, transport, track management, keyframe editing
- `src/services/msepProject.ts`: `.msep` open/save helpers
- `src/services/bveExport.ts`: frontend export orchestration
- `src-tauri/src/native.rs`: native project/archive/export implementation

## Limitations

### Implemented now

- No automated test suite is wired into `package.json` yet
- No screenshots or demo media are bundled in the repository
- The settings experience is incomplete
- Export support is intentionally narrow and BVE-only
- Audio preview and export are built around speed-sampled linear curves

### Available but limited

- The editor has project statistics and snapping state, but not a full project/preferences management workflow
- Track locking exists in the data model, but the broader lock-oriented workflow is still minimal

### Planned / roadmap

- stronger validation, migration, and crash-recovery workflows
- richer editor ergonomics and contributor-facing docs
- extended export compatibility and tooling

## Roadmap

The roadmap below is direction, not a statement of shipped features.

- Add more export targets after the BVE path stabilizes
- Expand the settings and project metadata experience
- Improve compatibility checks and migration behavior for future schema updates
- Strengthen recovery, validation, and error reporting around project I/O
- Continue refining the editor workflow for larger multi-track projects
- Revisit native-side audio processing if real-time preview workload grows substantially

## License And Project Status

### Current project status

- App version in source: `0.0.1`
- English README is the canonical documentation entry point
- The project is actively shaped around current implementation plus a documented roadmap

### License

No license file is currently present in the repository. If you plan to distribute or reuse the project, add an explicit license before publishing.
