// vite.config.ts
import { defineConfig } from "file:///Users/jarvis/Desktop/Y/%E6%A0%B8%E5%BF%83%E8%83%BD%E5%8A%9B/code-inspector/node_modules/.pnpm/vite@4.5.5/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/jarvis/Desktop/Y/%E6%A0%B8%E5%BF%83%E8%83%BD%E5%8A%9B/code-inspector/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@4.5.5+vue@3.5.13/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { CodeInspectorPlugin } from "file:///Users/jarvis/Desktop/Y/%E6%A0%B8%E5%BF%83%E8%83%BD%E5%8A%9B/code-inspector/packages/code-inspector-plugin/dist/index.mjs";
import vueJsx from "file:///Users/jarvis/Desktop/Y/%E6%A0%B8%E5%BF%83%E8%83%BD%E5%8A%9B/code-inspector/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@4.5.5+vue@3.5.13/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    CodeInspectorPlugin({
      bundler: "vite",
      behavior: {
        copy: "{file}"
      }
      // pathFormat: ['-g', '-r', '{file}:{line}:{column}']
    }),
    vueJsx()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvamFydmlzL0Rlc2t0b3AvWS9cdTY4MzhcdTVGQzNcdTgwRkRcdTUyOUIvY29kZS1pbnNwZWN0b3IvZGVtb3Mvdml0ZS12dWUzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvamFydmlzL0Rlc2t0b3AvWS9cdTY4MzhcdTVGQzNcdTgwRkRcdTUyOUIvY29kZS1pbnNwZWN0b3IvZGVtb3Mvdml0ZS12dWUzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9qYXJ2aXMvRGVza3RvcC9ZLyVFNiVBMCVCOCVFNSVCRiU4MyVFOCU4MyVCRCVFNSU4QSU5Qi9jb2RlLWluc3BlY3Rvci9kZW1vcy92aXRlLXZ1ZTMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCB7IENvZGVJbnNwZWN0b3JQbHVnaW4gfSBmcm9tICdjb2RlLWluc3BlY3Rvci1wbHVnaW4nO1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4JztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBDb2RlSW5zcGVjdG9yUGx1Z2luKHtcbiAgICAgIGJ1bmRsZXI6ICd2aXRlJyxcbiAgICAgIGJlaGF2aW9yOiB7XG4gICAgICAgIGNvcHk6ICd7ZmlsZX0nLFxuICAgICAgfSxcbiAgICAgIC8vIHBhdGhGb3JtYXQ6IFsnLWcnLCAnLXInLCAne2ZpbGV9OntsaW5lfTp7Y29sdW1ufSddXG4gICAgfSksXG4gICAgdnVlSnN4KCksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVksU0FBUyxvQkFBb0I7QUFDaGEsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsMkJBQTJCO0FBQ3BDLE9BQU8sWUFBWTtBQUduQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixvQkFBb0I7QUFBQSxNQUNsQixTQUFTO0FBQUEsTUFDVCxVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUEsTUFDUjtBQUFBO0FBQUEsSUFFRixDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsRUFDVDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
