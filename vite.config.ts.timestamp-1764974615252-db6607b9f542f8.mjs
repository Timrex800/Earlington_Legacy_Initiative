// vite.config.ts
import { defineConfig, loadEnv } from "file:///C:/Users/Timothy/Desktop/Earlington_Legacy_Initiative/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Timothy/Desktop/Earlington_Legacy_Initiative/node_modules/@vitejs/plugin-react/dist/index.js";
import { createHtmlPlugin } from "file:///C:/Users/Timothy/Desktop/Earlington_Legacy_Initiative/node_modules/vite-plugin-html/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\Timothy\\Desktop\\Earlington_Legacy_Initiative";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    // CRITICAL FIX: Set base to '/' for root domain deployment on Afrihost.
    // This ensures all asset paths are correct.
    base: "/",
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            // Use environment variables for dynamic content injection
            VITE_APP_TITLE: env.VITE_APP_TITLE || "Earlington Legacy Initiative",
            VITE_APP_OG_IMAGE: env.VITE_APP_OG_IMAGE || "/og-image.jpg",
            VITE_PUBLIC_URL: env.VITE_PUBLIC_URL || "https://earlingtonlegacy.org.za/",
            VITE_APP_LOGO_PLACEHOLDER: env.VITE_APP_LOGO_PLACEHOLDER || "/favicon.png"
          }
        }
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    },
    // Ensure the build output directory is 'dist' (Vite default)
    build: {
      outDir: "dist"
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxUaW1vdGh5XFxcXERlc2t0b3BcXFxcRWFybGluZ3Rvbl9MZWdhY3lfSW5pdGlhdGl2ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcVGltb3RoeVxcXFxEZXNrdG9wXFxcXEVhcmxpbmd0b25fTGVnYWN5X0luaXRpYXRpdmVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1RpbW90aHkvRGVza3RvcC9FYXJsaW5ndG9uX0xlZ2FjeV9Jbml0aWF0aXZlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1odG1sJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9ICkgPT4ge1xyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAvLyBDUklUSUNBTCBGSVg6IFNldCBiYXNlIHRvICcvJyBmb3Igcm9vdCBkb21haW4gZGVwbG95bWVudCBvbiBBZnJpaG9zdC5cclxuICAgIC8vIFRoaXMgZW5zdXJlcyBhbGwgYXNzZXQgcGF0aHMgYXJlIGNvcnJlY3QuXHJcbiAgICBiYXNlOiAnLycsIFxyXG4gICAgXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIHJlYWN0KCksXHJcbiAgICAgIGNyZWF0ZUh0bWxQbHVnaW4oe1xyXG4gICAgICAgIG1pbmlmeTogdHJ1ZSxcclxuICAgICAgICBpbmplY3Q6IHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgLy8gVXNlIGVudmlyb25tZW50IHZhcmlhYmxlcyBmb3IgZHluYW1pYyBjb250ZW50IGluamVjdGlvblxyXG4gICAgICAgICAgICBWSVRFX0FQUF9USVRMRTogZW52LlZJVEVfQVBQX1RJVExFIHx8ICdFYXJsaW5ndG9uIExlZ2FjeSBJbml0aWF0aXZlJyxcclxuICAgICAgICAgICAgVklURV9BUFBfT0dfSU1BR0U6IGVudi5WSVRFX0FQUF9PR19JTUFHRSB8fCAnL29nLWltYWdlLmpwZycsXHJcbiAgICAgICAgICAgIFZJVEVfUFVCTElDX1VSTDogZW52LlZJVEVfUFVCTElDX1VSTCB8fCAnaHR0cHM6Ly9lYXJsaW5ndG9ubGVnYWN5Lm9yZy56YS8nLFxyXG4gICAgICAgICAgICBWSVRFX0FQUF9MT0dPX1BMQUNFSE9MREVSOiBlbnYuVklURV9BUFBfTE9HT19QTEFDRUhPTERFUiB8fCAnL2Zhdmljb24ucG5nJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSApLFxyXG4gICAgXSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IHtcclxuICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIC8vIEVuc3VyZSB0aGUgYnVpbGQgb3V0cHV0IGRpcmVjdG9yeSBpcyAnZGlzdCcgKFZpdGUgZGVmYXVsdClcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIG91dERpcjogJ2Rpc3QnLFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyVixTQUFTLGNBQWMsZUFBZTtBQUNqWSxPQUFPLFdBQVc7QUFDbEIsU0FBUyx3QkFBd0I7QUFDakMsT0FBTyxVQUFVO0FBSGpCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFPO0FBQ3pDLFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUM7QUFFdkMsU0FBTztBQUFBO0FBQUE7QUFBQSxJQUdMLE1BQU07QUFBQSxJQUVOLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLGlCQUFpQjtBQUFBLFFBQ2YsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFVBQ04sTUFBTTtBQUFBO0FBQUEsWUFFSixnQkFBZ0IsSUFBSSxrQkFBa0I7QUFBQSxZQUN0QyxtQkFBbUIsSUFBSSxxQkFBcUI7QUFBQSxZQUM1QyxpQkFBaUIsSUFBSSxtQkFBbUI7QUFBQSxZQUN4QywyQkFBMkIsSUFBSSw2QkFBNkI7QUFBQSxVQUM5RDtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUU7QUFBQSxJQUNKO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDdEM7QUFBQSxJQUNGO0FBQUE7QUFBQSxJQUVBLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
