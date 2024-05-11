// ../../mnt/6C7066F17066C186/spring24-4.2/software/cReddit-Frontend/vitest.config.js
import { defineConfig } from "file:///mnt/6C7066F17066C186/spring24-4.2/software/cReddit-Frontend/node_modules/vitest/dist/config.js";
import * as path from "path";
import react from "file:///mnt/6C7066F17066C186/spring24-4.2/software/cReddit-Frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_dirname = "/mnt/6C7066F17066C186/spring24-4.2/software/cReddit-Frontend";
var vitest_config_default = defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    root: "./",
    coverage: {
      include: ["**/src/**"],
      provider: "v8",
      exclude: ["**/src/context/**", "**/src/services/**", "**/src/Components/settings/utils/**", "**/src/App.jsx", "**/src/utils/**", "**/src/"]
    }
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }]
  }
});
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbW50LzZDNzA2NkYxNzA2NkMxODYvc3ByaW5nMjQtNC4yL3NvZnR3YXJlL2NSZWRkaXQtRnJvbnRlbmQvdml0ZXN0LmNvbmZpZy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9tbnQvNkM3MDY2RjE3MDY2QzE4Ni9zcHJpbmcyNC00LjIvc29mdHdhcmUvY1JlZGRpdC1Gcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC82QzcwNjZGMTcwNjZDMTg2L3NwcmluZzI0LTQuMi9zb2Z0d2FyZS9jUmVkZGl0LUZyb250ZW5kL3ZpdGVzdC5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC82QzcwNjZGMTcwNjZDMTg2L3NwcmluZzI0LTQuMi9zb2Z0d2FyZS9jUmVkZGl0LUZyb250ZW5kL3ZpdGVzdC5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlc3QvY29uZmlnJ1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gICAgdGVzdDoge1xuICAgICAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICAgICAgcm9vdDogJy4vJyxcbiAgICAgICAgY292ZXJhZ2U6IHtcbiAgICAgICAgICAgIGluY2x1ZGU6IFsnKiovc3JjLyoqJ10sXG4gICAgICAgICAgICBwcm92aWRlcjogJ3Y4JyxcbiAgICAgICAgICAgIGV4Y2x1ZGU6IFsnKiovc3JjL2NvbnRleHQvKionLCAnKiovc3JjL3NlcnZpY2VzLyoqJywgJyoqL3NyYy9Db21wb25lbnRzL3NldHRpbmdzL3V0aWxzLyoqJywgJyoqL3NyYy9BcHAuanN4JywgJyoqL3NyYy91dGlscy8qKicsICcqKi9zcmMvJ11cbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgICBhbGlhczogW3sgZmluZDogXCJAXCIsIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSB9XVxuICAgIH1cbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFcsU0FBUyxvQkFBb0I7QUFDdlksWUFBWSxVQUFVO0FBQ3RCLE9BQU8sV0FBVztBQUZsQixJQUFNLG1DQUFtQztBQUd6QyxJQUFPLHdCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsTUFBTTtBQUFBLElBQ0YsYUFBYTtBQUFBLElBQ2IsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLE1BQ04sU0FBUyxDQUFDLFdBQVc7QUFBQSxNQUNyQixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMscUJBQXFCLHNCQUFzQix1Q0FBdUMsa0JBQWtCLG1CQUFtQixTQUFTO0FBQUEsSUFDOUk7QUFBQSxFQUNKO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxPQUFPLENBQUMsRUFBRSxNQUFNLEtBQUssYUFBa0IsYUFBUSxrQ0FBVyxLQUFLLEVBQUUsQ0FBQztBQUFBLEVBQ3RFO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
