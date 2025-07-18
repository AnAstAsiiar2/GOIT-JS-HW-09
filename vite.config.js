import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/GOIT-JS-HW-09/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,  // ← додаємо сюди також
  },
  define: {
    global: 'window',
  },
});

