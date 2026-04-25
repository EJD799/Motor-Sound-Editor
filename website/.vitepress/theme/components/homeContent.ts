export type HomeLocale = "en" | "zh";

export interface HomeContent {
  navAriaLabel: string;
  sectionLinksAriaLabel: string;
  homeAriaLabel: string;
  languageSwitchLabel: string;
  languageSwitchHref: string;
  languageSwitchAriaLabel: string;
  navItems: Array<{ label: string; href: string }>;
  docsHref: string;
  downloadHref: string;
  downloadLabel: string;
  docsLabel: string;
  githubLabel: string;
  versionLabel: string;
  brandSubline: string;
  frameContext: string;
  showcaseAriaLabel: string;
  hero: {
    kicker: string;
    titleLines: string[];
    lead: string;
    primaryAction: string;
    secondaryAction: string;
    stats: Array<{ value: string; label: string }>;
    floatingLeft: { eyebrow: string; value: string; label: string };
    floatingRight: { eyebrow: string; value: string; label: string };
  };
  why: {
    kicker: string;
    title: string;
    titleLines?: string[];
    lead: string;
    cards: Array<{
      eyebrow: string;
      title: string;
      copy: string;
      tone: "legacy" | "modern";
      bullets: string[];
    }>;
  };
  features: {
    kicker: string;
    title: string;
    titleLines?: string[];
    lead: string;
    items: Array<{ icon: string; title: string; copy: string }>;
  };
  showcase: {
    kicker: string;
    title: string;
    titleLines?: string[];
    lead: string;
    cards: Array<{ label: string; title: string; copy: string; src: string; alt: string }>;
  };
  workflow: {
    kicker: string;
    title: string;
    titleLines?: string[];
    lead: string;
    steps: Array<{ number: string; title: string; copy: string; src: string; label: string }>;
  };
  foundation: {
    kicker: string;
    title: string;
    titleLines?: string[];
    lead: string;
    items: Array<{ title: string; copy: string }>;
    format: {
      badge: string;
      eyebrow: string;
      title: string;
      copy: string;
      map: string[];
    };
  };
  docs: {
    kicker: string;
    title: string;
    titleLines?: string[];
    lead: string;
    action: string;
    cards: Array<{ title: string; copy: string; href: string; cta: string }>;
  };
  finalCta: {
    kicker: string;
    title: string;
    titleLines?: string[];
    copy: string;
    primaryAction: string;
    secondaryAction: string;
  };
}

const featureIcons = {
  curve: "M4 18C7.5 8.8 10.5 20 14 11.5C16 6.5 18.5 5.6 21 7.2M5 18h16M4 4.5v15",
  preview: "M4 12h3l2.2-5 4.6 11 3-7H21M5 20h14M5 4h14",
  native: "M13 2 4.5 13h7L9 22l10.5-13h-7L13 2Z",
  export: "M12 3v12m0 0 5-5m-5 5-5-5M4 20h16M6 6h4M14 6h4",
} as const;

export const homeContent: Record<HomeLocale, HomeContent> = {
  en: {
    navAriaLabel: "Primary navigation",
    sectionLinksAriaLabel: "Page sections",
    homeAriaLabel: "Motor Sound Editor home",
    languageSwitchLabel: "中文",
    languageSwitchHref: "/zh/",
    languageSwitchAriaLabel: "Switch to Simplified Chinese",
    navItems: [
      { label: "Why", href: "#why" },
      { label: "Features", href: "#features" },
      { label: "Showcase", href: "#showcase" },
      { label: "Workflow", href: "#workflow" },
      { label: "Docs", href: "#docs" },
    ],
    docsHref: "/docs/",
    downloadHref: "/download/",
    downloadLabel: "Download",
    docsLabel: "Open Docs",
    githubLabel: "GitHub Repository",
    versionLabel: "Current release",
    brandSubline: "Desktop authoring suite",
    frameContext: "Curve workspace",
    showcaseAriaLabel: "Software interface preview",
    hero: {
      kicker: "BVE motor sound authoring · visual desktop workflow",
      titleLines: ["Design BVE", "motor sound with", "surgical control."],
      lead: "Leave manual CSV editing behind. Motor Sound Editor turns pitch, volume, speed and train-state behavior into a refined visual workflow with real-time feedback.",
      primaryAction: "Download for Windows",
      secondaryAction: "Open Docs",
      stats: [
        { value: "3", label: "drive states with real-time preview" },
        { value: ".msep", label: "portable project format" },
        { value: "Native", label: "Rust + Tauri core" },
      ],
      floatingLeft: {
        eyebrow: "Speed",
        value: "72 km/h",
        label: "live preview",
      },
      floatingRight: {
        eyebrow: "State",
        value: "Traction",
        label: "multi-track blend",
      },
    },
    why: {
      kicker: "Why it exists",
      title: "Spend less time managing files. Spend more time shaping sound.",
      titleLines: [
        "Spend less time",
        "managing files.",
        "Spend more time",
        "shaping sound.",
      ],
      lead: "BVE motor sound production is detail-heavy, but the creative process should not be buried under spreadsheets, directory conventions and repeated test exports.",
      cards: [
        {
          eyebrow: "Legacy workflow",
          title: "CSV rows, scattered folders, slow feedback loops.",
          copy: "Traditional motor sound work forces creators to maintain pitch tables, volume tables, file names and test runs separately. Small changes become repetitive, fragile and hard to evaluate.",
          tone: "legacy",
          bullets: [
            "Manual CSV editing",
            "Fragmented audio assets",
            "Delayed in-game validation",
          ],
        },
        {
          eyebrow: "Motor Sound Editor",
          title: "Curves, tracks and preview live in one focused workspace.",
          copy: "Shape speed-based pitch and volume visually, switch train states instantly, and hear the result before packaging the project through one clean native export workflow.",
          tone: "modern",
          bullets: [
            "Visual curve authoring",
            "Traction / coast / brake preview",
            "Native export workflow",
          ],
        },
      ],
    },
    features: {
      kicker: "Core features",
      title: "A focused toolchain for simulator-grade motor sound.",
      titleLines: [
        "A focused toolchain",
        "for simulator-grade",
        "motor sound.",
      ],
      lead: "Built around the decisions that matter most: how the motor evolves with speed, how tracks layer together, and how cleanly the finished package reaches the simulator.",
      items: [
        {
          icon: featureIcons.curve,
          title: "Visual curve editing",
          copy: "Edit speed-based pitch and volume curves directly. Add, move and refine keyframes without touching raw CSV tables.",
        },
        {
          icon: featureIcons.preview,
          title: "Multi-track live preview",
          copy: "Audition layered motor tracks across traction, coast and braking states while changing speed in real time.",
        },
        {
          icon: featureIcons.native,
          title: "Native desktop performance",
          copy: "Built with Rust and Tauri for a fast, lightweight desktop experience that stays responsive during detailed sound design.",
        },
        {
          icon: featureIcons.export,
          title: "Structured export pipeline",
          copy: "Package projects through a clean native export workflow so handoff, validation and release builds stay organized.",
        },
      ],
    },
    showcase: {
      kicker: "Product showcase",
      title:
        "The product surface stays as polished as the sound work inside it.",
      titleLines: [
        "The product surface",
        "stays as polished",
        "as the sound work",
        "inside it.",
      ],
      lead: "Manage projects on the home screen, then move into a full editor designed around curve visibility, track layering and state-based playback.",
      cards: [
        {
          label: "Project gallery",
          title: "Home gallery and project management",
          copy: "Browse recent projects, search quickly, sort your work, and jump into a saved sound set without rebuilding context.",
          src: "/homepage.png",
          alt: "Motor Sound Editor home gallery and project management view",
        },
        {
          label: "Editor workspace",
          title: "Curve editing, transport and layered track control",
          copy: "Tune pitch and volume curves against speed, move across train states, and manage track layers inside one dedicated workspace.",
          src: "/editpage.png",
          alt: "Motor Sound Editor editor workspace with curve panels and track layers",
        },
      ],
    },
    workflow: {
      kicker: "Workflow",
      title: "From raw samples to a deliverable package.",
      titleLines: ["From raw samples", "to a deliverable", "package."],
      lead: "A linear, creator-friendly process designed to keep sound decisions visible from project setup to final export packaging.",
      steps: [
        {
          number: "01",
          title: "Create or reopen a project",
          copy: "Start from a clean project, reopen an existing .msep workspace, and keep source material inside one organized production context.",
          src: "/createfile.mp4",
          label: "Create or reopen a project workflow preview",
        },
        {
          number: "02",
          title: "Sculpt behavior curves",
          copy: "Treat motor sound like a visual system. Add keyframes, reshape transitions, and tune how pitch and volume respond to speed.",
          src: "/sculpt.mp4",
          label: "Sculpt behavior curves workflow preview",
        },
        {
          number: "03",
          title: "Validate while tuning",
          copy: "Preview traction, coasting and braking behavior immediately so each adjustment can be judged in motion instead of waiting for the final package.",
          src: "/validate.mp4",
          label: "Validate while tuning workflow preview",
        },
        {
          number: "04",
          title: "Package for delivery",
          copy: "Build an export-ready package with project structure and bundled assets prepared for testing, release work and sharing.",
          src: "/export.mp4",
          label: "Package for delivery workflow preview",
        },
      ],
    },
    foundation: {
      kicker: "Native foundation",
      title: "A native foundation for serious project work.",
      titleLines: ["A native foundation", "for serious", "project work."],
      lead: "Motor Sound Editor pairs a responsive Rust + Tauri desktop shell with a project format built for editing continuity, bundled media and clean native export packaging.",
      items: [
        {
          title: "Visual curve authoring",
          copy: "Edit pitch and volume behavior directly in a visual workspace instead of maintaining raw table files by hand.",
        },
        {
          title: "Portable project container",
          copy: "Keep project data, track layers, curve data and bundled audio together inside one transportable .msep file.",
        },
        {
          title: "Native desktop workflow",
          copy: "Run a fast Rust + Tauri toolchain with layered preview, responsive editing and export-ready project packaging.",
        },
      ],
      format: {
        badge: ".msep",
        eyebrow: "Project container",
        title:
          "Keep project data, curve data, track layers and bundled audio together.",
        copy: "The dedicated .msep format packages project data and bundled audio so a sound set can be saved, transferred, archived or shared without relying on loose folders or manual file memory.",
        map: [
          "project data",
          "curve data",
          "track layers",
          "bundled audio",
          "export output",
        ],
      },
    },
    docs: {
      kicker: "Learn the workflow",
      title: "Integrated guidance for seamless production.",
      titleLines: [
        "Documentation is",
        "part of the product,",
        "not an",
        "afterthought.",
      ],
      lead: "Jump into the docs hub for setup guidance, project management, editor behavior, export workflow notes and answers to the questions that come up during real production work.",
      action: "Open Docs",
      cards: [
        {
          title: "Quick Start",
          copy: "Install the app, open your first project, and understand the fastest route from source audio to a working package.",
          href: "/docs/guide/getting-started",
          cta: "Read guide",
        },
        {
          title: "Editor Workflow",
          copy: "Learn how track layers, state previews, curve panels and keyframe editing work together inside the main editor.",
          href: "/docs/guide/editor",
          cta: "Read guide",
        },
        {
          title: "Export Reference",
          copy: "Review the native export workflow, packaging expectations, and the practical checks to make before a release build.",
          href: "/docs/guide/export",
          cta: "Read guide",
        },
      ],
    },
    finalCta: {
      kicker: "Start building",
      title:
        "Bring a modern authoring workflow to your next motor sound project.",
      titleLines: [
        "Bring a modern",
        "authoring workflow",
        "to your next BVE",
        "motor sound",
        "project.",
      ],
      copy: "Download the Windows release, open the docs, or visit the GitHub repository to follow development and review the source.",
      primaryAction: "Download for Windows",
      secondaryAction: "Open Docs",
    },
  },
  zh: {
    navAriaLabel: "主导航",
    sectionLinksAriaLabel: "页面分区导航",
    homeAriaLabel: "Motor Sound Editor 中文首页",
    languageSwitchLabel: "EN",
    languageSwitchHref: "/",
    languageSwitchAriaLabel: "切换到英文首页",
    navItems: [
      { label: "定位", href: "#why" },
      { label: "功能", href: "#features" },
      { label: "界面", href: "#showcase" },
      { label: "流程", href: "#workflow" },
      { label: "文档", href: "#docs" },
    ],
    docsHref: "/zh/docs/",
    downloadHref: "/zh/download/",
    downloadLabel: "下载",
    docsLabel: "打开文档",
    githubLabel: "GitHub 仓库",
    versionLabel: "当前版本",
    brandSubline: "桌面音效创作套件",
    frameContext: "曲线工作区",
    showcaseAriaLabel: "软件界面预览",
    hero: {
      kicker: "BVE 电机音效创作 · 可视化桌面工作流",
      titleLines: ["为 BVE 电机音效建立", "更精准的可视化创作流程。"],
      lead: "摆脱手工 CSV 编辑。Motor Sound Editor 把 pitch、volume、speed 与列车状态行为整合进一个带实时反馈的可视化工作流。",
      primaryAction: "下载 Windows 版本",
      secondaryAction: "打开文档",
      stats: [
        { value: "3", label: "三种运行状态实时预览" },
        { value: ".msep", label: "可移植项目格式" },
        { value: "Native", label: "Rust + Tauri 原生核心" },
      ],
      floatingLeft: { eyebrow: "速度", value: "72 km/h", label: "实时试听" },
      floatingRight: { eyebrow: "状态", value: "Traction", label: "多轨混合" },
    },
    why: {
      kicker: "为什么需要它",
      title: "少花时间管理文件，把精力放回声音塑形。",
      lead: "BVE 电机音效制作本来就足够细碎，不应该再被表格、目录约定和反复试导出拖住节奏。",
      cards: [
        {
          eyebrow: "传统方式",
          title: "CSV 行、分散文件夹，以及缓慢的反馈循环。",
          copy: "传统流程往往要求创作者分别维护 pitch 表、volume 表、文件名和测试步骤。一次小改动就可能牵动多处内容，既重复又脆弱。",
          tone: "legacy",
          bullets: ["手工维护 CSV", "音频资源分散", "进游戏后才能验证"],
        },
        {
          eyebrow: "Motor Sound Editor",
          title: "曲线、轨道与预览集中在一个清晰的工作区里。",
          copy: "以可视化方式塑造基于速度的 pitch 与 volume，快速切换列车状态，并在打包前就直接听到结果。",
          tone: "modern",
          bullets: [
            "可视化曲线创作",
            "牵引 / 惰行 / 制动预览",
            "原生导出工作流",
          ],
        },
      ],
    },
    features: {
      kicker: "核心能力",
      title: "围绕模拟器级电机音效而生的专注工具链。",
      lead: "整个产品只围绕几件真正重要的事展开：速度变化时声音如何演化、轨道如何叠加，以及最终成果如何整洁地进入导出流程。",
      items: [
        {
          icon: featureIcons.curve,
          title: "可视化曲线编辑",
          copy: "直接编辑基于速度的 pitch 与 volume 曲线，增删和微调关键帧，不再依赖原始 CSV 表格。",
        },
        {
          icon: featureIcons.preview,
          title: "多轨实时试听",
          copy: "在牵引、惰行和制动状态之间切换，并在实时变速时试听多层电机音轨的叠加效果。",
        },
        {
          icon: featureIcons.native,
          title: "原生桌面性能",
          copy: "基于 Rust 与 Tauri 构建，在细致音效编辑过程中保持快速、轻量且响应稳定的桌面体验。",
        },
        {
          icon: featureIcons.export,
          title: "结构化导出流程",
          copy: "通过清晰的原生导出工作流整理项目、验证内容并生成可交付包，便于测试、归档与发布。",
        },
      ],
    },
    showcase: {
      kicker: "界面展示",
      title: "界面本身也保持着和音效工作同样精致的质感。",
      lead: "在首页管理项目，再进入围绕曲线可见性、轨道层级和状态化播放构建的完整编辑器工作区。",
      cards: [
        {
          label: "项目画廊",
          title: "首页画廊与项目管理",
          copy: "浏览最近项目、快速搜索、切换排序方式，并在不重新整理上下文的情况下回到上一次的音效工程。",
          src: "/homepage.png",
          alt: "Motor Sound Editor 首页项目画廊与项目管理界面",
        },
        {
          label: "编辑器工作区",
          title: "曲线编辑、传输控制与分层轨道管理",
          copy: "围绕速度调节 pitch 与 volume 曲线，在不同列车状态间切换，并在同一工作区里管理轨道层。",
          src: "/editpage.png",
          alt: "Motor Sound Editor 编辑器工作区与轨道面板界面",
        },
      ],
    },
    workflow: {
      kicker: "工作流程",
      title: "从原始样本一路走到可交付的导出包。",
      lead: "一条更线性的创作路径，让你从项目创建到最终打包始终看得见声音决策与项目状态。",
      steps: [
        {
          number: "01",
          title: "创建或重新打开项目",
          copy: "从空白工程开始，或重新打开现有 .msep 工作区，把源素材和编辑状态维持在同一个项目上下文内。",
          src: "/createfile.mp4",
          label: "创建或重新打开项目工作流预览",
        },
        {
          number: "02",
          title: "塑造声音行为曲线",
          copy: "把电机音当作一个可视化系统来处理。添加关键帧、重塑过渡，并细调 speed 对 pitch 与 volume 的影响。",
          src: "/sculpt.mp4",
          label: "塑造行为曲线工作流预览",
        },
        {
          number: "03",
          title: "边调边验证",
          copy: "立即试听 traction、coasting 和 brake 的行为，不必等到最终打包后才判断一次修改是否成立。",
          src: "/validate.mp4",
          label: "边调边验证工作流预览",
        },
        {
          number: "04",
          title: "整理并导出交付包",
          copy: "生成结构化的导出包，把项目数据和所需资源整理好，方便测试、归档与交接。",
          src: "/export.mp4",
          label: "整理并导出交付包工作流预览",
        },
      ],
    },
    foundation: {
      kicker: "原生基础",
      title: "适合严肃项目工作的原生桌面底座。",
      lead: "Motor Sound Editor 将响应迅速的 Rust + Tauri 桌面外壳，与专为连续编辑、资源打包和导出流程设计的项目格式结合在一起。",
      items: [
        {
          title: "可视化曲线创作",
          copy: "在图形化工作区中直接塑造 pitch 与 volume 行为，而不是手工维护表格文件。",
        },
        {
          title: "可移植项目容器",
          copy: "把项目数据、轨道层、曲线数据与打包音频一起放进可转移的 .msep 文件中。",
        },
        {
          title: "原生桌面工作流",
          copy: "借助分层预览、快速编辑与导出准备流程，在桌面环境中保持高响应的创作体验。",
        },
      ],
      format: {
        badge: ".msep",
        eyebrow: "项目容器",
        title: "让项目数据、曲线数据、轨道层与打包音频保持在一起。",
        copy: "专用的 .msep 格式会把项目信息与音频资源一起保存，便于保存、转移、归档或共享，而不是依赖松散目录和人为记忆。",
        map: ["项目数据", "曲线数据", "轨道层", "打包音频", "导出结果"],
      },
    },
    docs: {
      kicker: "学习工作流",
      title: "文档是产品的一部分，而不是事后补写的附属品。",
      lead: "进入文档中心查看安装、项目管理、编辑器行为、导出流程和制作过程中真正会遇到的问题说明。",
      action: "打开文档",
      cards: [
        {
          title: "快速开始",
          copy: "先完成安装、打开第一个项目，并理解从源音频到可工作包的最快路径。",
          href: "/zh/docs/guide/getting-started",
          cta: "查看占位页",
        },
        {
          title: "编辑器工作流",
          copy: "了解轨道层、状态预览、曲线面板和关键帧编辑在主编辑器中如何协同工作。",
          href: "/zh/docs/guide/editor",
          cta: "查看占位页",
        },
        {
          title: "导出说明",
          copy: "查看导出流程、打包预期，以及在准备交付前应该检查的关键项目。",
          href: "/zh/docs/guide/export",
          cta: "查看占位页",
        },
      ],
    },
    finalCta: {
      kicker: "开始创作",
      title: "把现代化的创作流程带进你的下一个 BVE 电机音效项目。",
      copy: "查看下载页、进入文档，或前往 GitHub 仓库跟进开发进度和源代码。",
      primaryAction: "下载 Windows 版本",
      secondaryAction: "打开文档",
    },
  },
};
