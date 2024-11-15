// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxt/eslint', '@nuxt/content', '@nuxthq/studio', '@nuxtjs/color-mode'],

  ssr: true,

  components: [
    {
      path: '~/components/content-home',
      global: true,
      pathPrefix: true,
      prefix: 'Home',
    },
  ],

  devtools: { enabled: false },

  app: {
    rootTag: 'main',
    rootAttrs: {
      id: 'app',
    },
  },

  css: ['~/assets/scss/index.scss'],

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    storage: 'localStorage',
    classSuffix: '',
    storageKey: 'color-mode',
  },

  content: {
    documentDriven: true,
    markdown: {
      mdc: true,
    },
  },

  compatibilityDate: '2024-04-03',

  eslint: {
    config: {
      stylistic: true,
    },
  },

  studio: {
    enabled: true,
  },

  unocss: {
    nuxtLayers: true,
  },
})
