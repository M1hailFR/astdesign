// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@pinia/nuxt",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
  ],

  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    public: {
      firebaseApiKey: "AIzaSyCwWox7LN3MvSUpPaZY-_NyCkuC17C_ZPI",
      firebaseAuthDomain: "rmnvch-resume.firebaseapp.com",
      firebaseProjectId: "rmnvch-resume",
      firebaseStorageBucket: "rmnvch-resume.firebasestorage.app",
      firebaseMessagingSenderId: "650268771761",
      firebaseAppId: "1:650268771761:web:7ec5139544a1c809046990",
      firebaseMeasurementId: "G-566MN20332"
    }
  },

  app: {
    rootId: "__test-app",
    head: {
      title: "astdesign | test task",
      htmlAttrs: {
        lang: "en",
        prefix: "og:http://ogp.me/ns#",
        class: "ui-scrollbars",
      },
    },
  },

  googleFonts: {
    download: true,
    families: {
      "Open+Sans": [400, 500, 600, 700],
      Roboto: [400, 500, 700],
    },
  },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.ts",
    exposeConfig: true,
  },
});
