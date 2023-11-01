import { defineConfig, presetAttributify, presetUno, presetWebFonts } from 'unocss';

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        robotoslab: [{ name: 'Roboto Slab' }, { name: 'sans-serif', provider: 'none' }],
      },
    }),
  ],
});
