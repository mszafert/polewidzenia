import { defineConfig, presetAttributify, presetUno, presetWebFonts } from 'unocss';

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        robotoslab: [
          { name: 'Roboto Slab', weights: [400, 600] },
          { name: 'sans-serif', provider: 'none' },
        ],
      },
    }),
  ],
});
