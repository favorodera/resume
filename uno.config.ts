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
    // ...

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
        ibm: [
          {
            name: 'IBM Plex Mono',
            provider: 'google',
            weights: ['100', '200', '300', '400', '500', '700'],
            italic: true,
          },
          {
            name: 'monospace',
            provider: 'none',
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
