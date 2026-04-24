import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import LocaleReserveNotice from "./components/LocaleReserveNotice.vue";
import ScreenshotPlaceholder from "./components/ScreenshotPlaceholder.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("LocaleReserveNotice", LocaleReserveNotice);
    app.component("ScreenshotPlaceholder", ScreenshotPlaceholder);
  },
} satisfies Theme;
