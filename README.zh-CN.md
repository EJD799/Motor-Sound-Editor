# Motor Sound Editor

Motor Sound Editor 是一个桌面端电机音编辑器，用于创建、预览、保存并导出面向 BVE 风格内容制作流程的电机音工程。项目使用 Vue 3、TypeScript、Tauri 和 Rust 构建，原生可编辑工程格式为 `.msep`，导出格式为面向 BVE 的 `.zip` 包。

## 语言

- English：本项目主 README，见 [README.md](README.md)
- 简体中文：本文件

## Current Status

| Status | 含义 |
| --- | --- |
| Implemented now | 当前代码库中已经实现，按现状应可直接使用 |
| Available but limited | 已经提供，但能力较窄、未完全展开，或带有平台限制 |
| Planned / roadmap | 尚未实现，或目前仅作为占位 / 产品方向存在 |

## 项目定位

Motor Sound Editor 面向需要制作分层牵引 / 制动电机音的内容创作者，目标不是让用户手工维护原始 BVE 表格，而是提供一条更直观的桌面编辑工作流。它重点解决三个实际问题：

- 以可视化方式编辑基于速度的 pitch / volume 曲线
- 对多轨电机音进行实时预览
- 保存可继续编辑的源工程，并导出为 BVE 可用的 ZIP 包

典型用户包括 BVE 内容作者、列车模拟爱好者，以及需要桌面工具而不是一堆 CSV / 文本文件的工具开发者。

## 当前能力

### Implemented now

- 创建新的 `.msep` 工程，并设置项目名、最大速度、加速度、制动减速度等基础参数
- 从首页直接打开已有 `.msep` 工程，或通过传入工程路径启动应用
- 将 `.msep` 文件导入最近工程列表，首页支持拖拽导入
- 在最近工程画廊中进行搜索、按日期 / 名称排序，并显示自动生成的预览线
- 保存与另存为 `.msep`，离开编辑器或关闭窗口时会提示未保存修改
- 编辑牵引与制动两套曲线数据，每套都包含 pitch 与 volume
- 添加、移动、删除关键帧，并通过数值输入精确修改
- 在选择、移动、关键帧插入三种编辑工具之间切换
- 管理轨道：新增轨道、删除当前轨道、重命名、改色、分配音频、静音、显示 / 隐藏、激活 / 取消激活
- 为轨道分配 `wav` 或 `ogg` 音频文件，并通过原生层读取音频元数据
- 在牵引、惰行、制动三种模拟状态下进行多轨实时音频预览
- 通过列表编辑器以表格方式编辑 traction / brake 下的 pitch / volume 关键帧
- 提供撤销 / 重做历史
- 打开 Project Details 查看项目统计信息
- 导出 BVE ZIP 包，并自动生成文本 / CSV 文件以及 WAV 音频输出

### Available but limited

- 导出目前只支持 `BVE`；`OpenBVE` 与 `MTR` 在 UI 中仅为禁用占位项
- Windows 发布版会注册 `.msep` 文件关联，并支持单实例重新打开工程；这是 Windows 专属行为
- 音频导入当前仅支持 `wav` 与 `ogg`
- 首页的 `Import File` 会把工程加入画廊，不会立即进入编辑器
- 项目内部已有关键帧吸附相关的 settings store，但还没有完整的设置界面
- 当前项目版本为 `v0.0.1`

### Planned / roadmap

- 扩展更多导出目标，例如 OpenBVE 或 MTR
- 补全更完整的设置体验
- 丰富项目元数据与说明字段
- 增强旧版本 / 新版本工程之间的恢复与兼容性工具
- 如果前端实时预览性能成为瓶颈，再考虑升级更重的原生音频方案

## 工作流概览

1. 在首页创建工程，或打开 / 导入一个已有的 `.msep` 文件。
2. 进入编辑器，选择当前要编辑的活动轨道。
3. 为该轨道分配一个 `wav` 或 `ogg` 文件。
4. 通过图表编辑器或列表编辑器修改 traction / brake 下的 pitch 与 volume 曲线。
5. 通过切换 transport 状态与当前速度进行预览。
6. 将可编辑源工程保存为 `.msep`。
7. 在需要分发成果时导出为面向 BVE 的 `.zip` 包。

### 编辑器中值得说明的交互

- `Space`：播放 / 暂停预览
- `W`：将模拟状态向 `Traction` 方向切换一级
- `S`：将模拟状态向 `Brake` 方向切换一级
- `Ctrl+S`：保存
- `Ctrl+Shift+S`：另存为
- `Ctrl+Z`：撤销
- `Ctrl+Y` 或 `Ctrl+Shift+Z`：重做
- `Ctrl+D`：清除当前选择
- `Delete`：删除当前选中的关键帧

## 原生 `.msep` 工程格式

### Implemented now

`.msep` 是 Motor Sound Editor 当前使用的原生可编辑工程格式。在当前实现中，它由 Rust 后端写入，本质上是一个 ZIP 容器。

归档内容结构如下：

```text
project.msep
|-- project.json
|-- tracks.json
\-- Assets/
    \-- <generated-file-names>
```

- `project.json`：保存项目元数据，例如名称、应用版本、schema 版本、时间戳、最大速度、加速度、制动减速度
- `tracks.json`：保存活动轨道 id、轨道定义、曲线 / 关键帧数据，以及音频资源元数据
- `Assets/...`：保存轨道资源记录所引用的实际音频负载

### 说明

- 原生工程扩展名为 `.msep`
- 编辑器围绕打包后的工程数据工作，而不是直接编辑松散的 BVE 导出文件
- 打开工程时，会恢复打包后的音频负载并重新创建预览播放所需的 object URL

### Planned / roadmap

- 更明确的 schema 前向 / 后向兼容处理
- 当 schema 演进时，为旧工程提供迁移工具

## BVE 导出行为

### Implemented now

应用当前可以将工程导出为面向 BVE 工作流的 `.zip` 压缩包。导出由 Rust 后端完成，并会按用户选择的采样率重采样音频。

当前导出逻辑：

- 只导出启用、已分配音频、且 `mute = false` 的轨道
- 导出根目录名称基于清理后的项目名生成
- `ogg` 音频会在导出时被解码并转换为 WAV
- 输出 WAV 编码为 PCM16
- 可选采样率为 `22050`、`32000`、`44100`、`48000`、`96000`

生成结构：

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

关键输出文件：

- `vehicle.txt`：告诉 BVE 去哪里读取 `sound\Sound.txt` 与 `motornoise\motornoise.txt`
- `motornoise.txt`：映射 power / brake 的 volume 与 frequency 表
- `powerfreq.csv`、`powervol.csv`、`brakefreq.csv`、`brakevol.csv`：由工程关键帧采样生成的 motor noise 表
- `Sound.txt`：把轨道索引映射到生成后的 WAV 文件名

### Available but limited

- 导出格式选择界面里能看到未来格式，但当前只有 `BVE` 可用
- 如果没有可导出的有效轨道，导出会按设计直接失败

### Planned / roadmap

- 在 BVE 路径稳定后继续扩展更多导出目标
- 提供更多导出期选项与校验

## 技术栈与架构

### Implemented now

- Frontend：Vue 3 + TypeScript + Pinia
- 可视化编辑器：Konva
- 桌面壳与原生 IPC：Tauri 2
- 原生后端：Rust
- 音频元数据解码与导出时音频处理：Rust + `symphonia`
- 打包：Rust 侧负责生成 `.msep` 与 BVE `.zip`

高层分工如下：

- Vue / Pinia 管理应用状态、编辑器交互以及 Web Audio 预览
- Rust 负责工程打包、工程打开、文件时间戳、元数据解码、Windows 文件关联以及 BVE 导出
- Tauri IPC 负责连接前后两层

## 快速开始

### 前置条件

- Node.js
- `pnpm`
- Rust toolchain
- 当前平台所需的 Tauri 构建依赖

目前项目是桌面优先、且以 Windows 为主要目标的平台。像 `.msep` 文件关联这样的行为，当前就是专门为 Windows 发布版实现的。

### 安装依赖

```bash
pnpm install
```

### 开发模式运行

```bash
pnpm tauri dev
```

说明：

- Tauri 会通过 `beforeDevCommand` 自动启动 Vite 前端
- Vite 开发服务器固定使用 `1420` 端口

### 仅构建前端

```bash
pnpm build
```

### 构建桌面应用

```bash
pnpm tauri build
```

## 开发命令

| 命令 | 作用 |
| --- | --- |
| `pnpm install` | 安装 JavaScript 依赖 |
| `pnpm dev` | 单独运行 Vite 前端 |
| `pnpm build` | 类型检查并构建前端 |
| `pnpm preview` | 预览已构建前端 |
| `pnpm tauri dev` | 以开发模式运行桌面应用 |
| `pnpm tauri build` | 构建桌面发布包 |

## 仓库结构

```text
.
|-- src/                 # Vue 前端、页面、组件、stores、services
|-- src-tauri/           # Rust 后端、Tauri 配置、打包资源
|-- public/              # 静态公共资源
|-- BVE电机音编辑PRD.md     # 产品 / 设计说明
|-- 导出-BVE.md           # BVE 导出说明
\-- package.json         # 前端脚本与依赖
```

几个更值得从这里读起的入口：

- `src/App.vue`：顶层应用流程、全局保存 / 打开逻辑、导出对话框、未保存变更处理
- `src/pages/HomePage.vue`：项目画廊、创建 / 打开 / 导入流程
- `src/pages/EditorPage.vue`：主编辑器 UI、transport、轨道管理、关键帧编辑
- `src/services/msepProject.ts`：`.msep` 的打开 / 保存辅助逻辑
- `src/services/bveExport.ts`：前端导出编排
- `src-tauri/src/native.rs`：原生工程归档 / 导出实现

## 限制

### Implemented now

- `package.json` 中当前还没有接入自动化测试命令
- 仓库中没有附带截图或演示媒体
- 设置体验仍未完成
- 导出能力当前刻意保持为 BVE-only
- 音频预览与导出都围绕基于速度采样的线性曲线展开

### Available but limited

- 编辑器已经有项目统计和吸附状态，但还没有完整的项目 / 偏好设置工作流
- 数据模型里存在 track locking 字段，但围绕锁定展开的完整流程目前仍比较少

### Planned / roadmap

- 更强的校验、迁移与异常恢复流程
- 更完善的编辑器体验与面向贡献者的文档
- 更丰富的导出兼容性与配套工具

## Roadmap

下面的内容是项目方向，不代表已经交付。

- 在 BVE 导出路径稳定后扩展更多导出目标
- 补全设置体验与项目元数据编辑体验
- 在未来 schema 更新时增强兼容检查与迁移行为
- 加强项目 I/O 过程中的恢复、校验与错误提示
- 持续优化多轨工程下的编辑流程
- 如果实时预览负载继续升高，再评估更重的原生音频处理方案

## License 与项目状态

### 当前项目状态

- 源码中的应用版本：`0.0.1`
- 英文 README 是规范入口文档
- 项目当前按照“已实现能力 + 明确标注的 roadmap”方式持续整理中

### License

仓库中目前没有显式的 license 文件。如果计划分发或复用该项目，建议在发布前补充明确许可证。
