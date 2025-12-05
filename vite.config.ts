import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode } ) => {
  const env = loadEnv(mode, process.cwd());

  return {
    // CRITICAL FIX: Set base to '/' for root domain deployment on Afrihost.
    // This ensures all asset paths are correct.
    base: '/', 
    
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            // Use environment variables for dynamic content injection
            VITE_APP_TITLE: env.VITE_APP_TITLE || 'Earlington Legacy Initiative',
            VITE_APP_OG_IMAGE: env.VITE_APP_OG_IMAGE || '/og-image.jpg',
            VITE_PUBLIC_URL: env.VITE_PUBLIC_URL || 'https://earlingtonlegacy.org.za/',
            VITE_APP_LOGO_PLACEHOLDER: env.VITE_APP_LOGO_PLACEHOLDER || '/favicon.png',
          },
        },
      } ),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    // Ensure the build output directory is 'dist' (Vite default)
    build: {
      outDir: 'dist',
    },
  };
});
