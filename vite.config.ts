import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from '@rollup/plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [{ ...eslint({ include: 'src/**/*.+(ts|vue)' }), enforce: 'pre' }, vue()],
  server: {
    port: 3000,
  },
});
