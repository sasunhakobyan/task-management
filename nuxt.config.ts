// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  colorMode: {
    preference: "light",
  },
});
