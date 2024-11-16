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
      gray3: '#999999',
      gray4: '#434343',
    },
  },
  safelist: [
    'i-lucide-globe',
    'i-lucide-mail',
    'i-lucide-printer',
    'i-lucide-map-pin',
    'i-lucide-external-link',
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
