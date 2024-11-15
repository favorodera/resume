import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      gray1: '#434343',
      gary2: '#666666',
      gray3: '#999999',
      gray4: '#434343',
      rose: '#E91D63',
    },
  },
  safelist: [
    'i-lucide-globe',
    'i-lucide-link',
    'i-lucide-mail',
    'i-lucide-phone',
    'i-lucide-github',
    'i-lucide-twitter',
    'i-lucide-linkedin',
    'i-lucide-printer',
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        // ...
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        roboto: [
          {
            provider: 'google',
            name: 'Roboto Condensed',
            weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            italic: true,
          },
          {
            provider: 'none',
            name: 'sans-serif',
          },
        ],
        oswald: [
          {
            provider: 'google',
            name: 'Oswald',
            weights: [200, 300, 400, 500, 600, 700],
            italic: true,
          },
          {
            provider: 'none',
            name: 'sans-serif',
          },
        ],
        scpro: [
          {
            provider: 'google',
            name: 'Source Code Pro',
            weights: [200, 300, 400, 500, 600, 700, 800, 900],
            italic: true,
          },
          {
            provider: 'none',
            name: 'monospace',
          },
        ],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
