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
    baseURL: '/', // 确保基础URL设置正确
    head: {
      // 预加载关键 CSS
      link: [{ rel: "stylesheet", href: "/ant-design-vue/dist/reset.css" }],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  // 确保静态资源正确处理
  nitro: {
    publicAssets: [
      {
        dir: 'public',
        baseURL: '/'
      }
    ]
  },
  // 添加运行时配置
  runtimeConfig: {
    // 私有配置（仅在服务器端可用）
    apiSecret: '',
    // 公共配置（客户端和服务器端都可用）
    public: {
      baseUrl: process.env.BASE_URL || '/'
    }
  }
});
