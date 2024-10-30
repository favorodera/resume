// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxt/eslint', '@nuxt/content', '@nuxthq/studio', '@nuxtjs/color-mode'],

  ssr: true,

  devtools: { enabled: false },

  app: {
    rootTag: 'main',
    rootAttrs: {
      id: 'app',
    },
  },

  css: ['~/assets/scss/index.scss', '@unocss/reset/normalize.css'],

  colorMode: {
    preference: 'dark',
    fallback: 'system',
    storage: 'localStorage',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },

  content: {
    highlight: {
      langs: ['c'],
      theme: {
        default: 'github-dark',
        dark: 'github-dark',
        light: 'github-light',
      },
    },
  },

  experimental: {
    asyncContext: true,
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
