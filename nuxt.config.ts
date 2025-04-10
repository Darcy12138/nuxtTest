import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  plugins: ["~/plugins/antd.js"],
  app: {
    head: {
      // 预加载关键 CSS
      link: [{ rel: "stylesheet", href: "/ant-design-vue/dist/reset.css" }],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
});
