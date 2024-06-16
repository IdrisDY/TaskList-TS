// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  build: {
    transpile: ["bootstrap"],
  },
  generate: {
    fallback: true, // Enable fallback for dynamic routes
  },
});
