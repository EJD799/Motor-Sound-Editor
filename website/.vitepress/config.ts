import { defineConfig } from "vitepress";

const englishManualSidebar = [
  { text: "Documentation Home", link: "/docs/" },
  { text: "Getting Started", link: "/docs/guide/getting-started" },
  { text: "Home and Projects", link: "/docs/guide/home" },
  { text: "Interface Overview", link: "/docs/guide/interface-overview" },
  { text: "Editor Workspace", link: "/docs/guide/editor" },
  { text: "Tracks and Audio", link: "/docs/guide/tracks-and-audio" },
  { text: "Curve Editing", link: "/docs/guide/curve-editing" },
  { text: "Transport and Preview", link: "/docs/guide/transport-and-preview" },
  { text: "List Editor", link: "/docs/guide/list-editor" },
  { text: "Project Details and Save", link: "/docs/guide/project-details-and-save" },
  { text: "Export Workflow", link: "/docs/guide/export" },
  { text: "Shortcuts", link: "/docs/guide/shortcuts" },
  { text: "FAQ", link: "/docs/guide/faq" },
];

const englishTutorialSidebar = [
  { text: "First Project", link: "/docs/tutorials/first-project" },
  { text: "Assign Audio and Preview", link: "/docs/tutorials/assign-audio-and-preview" },
  { text: "Refine Curves and Export", link: "/docs/tutorials/refine-curves-and-export" },
];

const chineseManualSidebar = [
  { text: "文档首页", link: "/zh/docs/" },
  { text: "快速开始", link: "/zh/docs/guide/getting-started" },
  { text: "首页与项目", link: "/zh/docs/guide/home" },
  { text: "界面总览", link: "/zh/docs/guide/interface-overview" },
  { text: "编辑器工作区", link: "/zh/docs/guide/editor" },
  { text: "轨道与音频", link: "/zh/docs/guide/tracks-and-audio" },
  { text: "曲线编辑", link: "/zh/docs/guide/curve-editing" },
  { text: "预览与运行状态", link: "/zh/docs/guide/transport-and-preview" },
  { text: "列表编辑器", link: "/zh/docs/guide/list-editor" },
  { text: "项目详情与保存", link: "/zh/docs/guide/project-details-and-save" },
  { text: "导出流程", link: "/zh/docs/guide/export" },
  { text: "快捷键", link: "/zh/docs/guide/shortcuts" },
  { text: "常见问题", link: "/zh/docs/guide/faq" },
];

const chineseTutorialSidebar = [
  { text: "创建第一个项目", link: "/zh/docs/tutorials/first-project" },
  { text: "分配音频并试听", link: "/zh/docs/tutorials/assign-audio-and-preview" },
  { text: "打磨曲线并导出", link: "/zh/docs/tutorials/refine-curves-and-export" },
];

const sharedThemeConfig = {
  logo: "/64x64.png",
  socialLinks: [
    {
      icon: "github",
      link: "https://github.com/xiangao0904/Motor-Sound-Editor",
    },
  ],
};

export default defineConfig({
  lang: "en-US",
  title: "Motor Sound Editor",
  description:
    "Official product site and user documentation for Motor Sound Editor.",
  head: [
    ["link", { rel: "icon", href: "/64x64.png", type: "image/png" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap",
      },
    ],
  ],
  appearance: false,
  themeConfig: sharedThemeConfig,
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      link: "/",
      title: "Motor Sound Editor",
      description:
        "Official product site and user documentation for Motor Sound Editor.",
      themeConfig: {
        nav: [
          { text: "Product", link: "/" },
          { text: "Docs", link: "/docs/" },
          { text: "Download", link: "/download/" },
        ],
        sidebar: {
          "/docs/": [
            {
              text: "Manual",
              items: englishManualSidebar,
            },
            {
              text: "Tutorials",
              items: englishTutorialSidebar,
            },
          ],
        },
        outline: {
          label: "On this page",
          level: [2, 3],
        },
        docFooter: {
          prev: "Previous page",
          next: "Next page",
        },
        returnToTopLabel: "Back to top",
        sidebarMenuLabel: "Menu",
        langMenuLabel: "Languages",
        footer: {
          message: "Built for simulator-grade motor sound authoring.",
          copyright: "Copyright © 2026 Motor Sound Editor",
        },
      },
    },
    zh: {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zh/",
      title: "Motor Sound Editor",
      description: "Motor Sound Editor 官方网站与用户文档。",
      themeConfig: {
        nav: [
          { text: "首页", link: "/zh/" },
          { text: "文档", link: "/zh/docs/" },
          { text: "下载", link: "/zh/download/" },
        ],
        sidebar: {
          "/zh/docs/": [
            {
              text: "使用手册",
              items: chineseManualSidebar,
            },
            {
              text: "教程",
              items: chineseTutorialSidebar,
            },
          ],
        },
        outline: {
          label: "本页内容",
          level: [2, 3],
        },
        docFooter: {
          prev: "上一页",
          next: "下一页",
        },
        returnToTopLabel: "回到顶部",
        sidebarMenuLabel: "菜单",
        langMenuLabel: "语言",
        footer: {
          message: "面向模拟器级电机音效创作的桌面工具。",
          copyright: "Copyright © 2026 Motor Sound Editor",
        },
      },
    },
  },
});
