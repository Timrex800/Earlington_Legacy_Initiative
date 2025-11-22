import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    base: '/Earlington_Legacy_Initiative/',
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            VITE_APP_TITLE: env.VITE_APP_TITLE || 'Earlington Legacy Initiative',
            VITE_APP_OG_IMAGE: env.VITE_APP_OG_IMAGE || '/og-image.jpg',
            VITE_PUBLIC_URL: env.VITE_PUBLIC_URL || 'https://timrex800.github.io/Earlington_Legacy_Initiative',
            VITE_APP_LOGO_PLACEHOLDER: env.VITE_APP_LOGO_PLACEHOLDER || '/favicon.png',
          },
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
    },
  };
});
