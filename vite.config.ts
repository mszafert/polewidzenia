import eslint from '@rollup/plugin-eslint';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [{ ...eslint({ include: 'src/**/*.+(ts|vue)' }), enforce: 'pre' }, vue(), UnoCSS()],
  server: {
    port: 3000,
  },
});
