import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import pkg from "./package.json";
import dts from "vite-plugin-dts";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), tsconfigPaths(), dts({
    exclude: ["node_modules", "dist"],
    rollupTypes: true,
    compilerOptions: {
      baseUrl: "./",
      emitDeclarationOnly: true,
      noEmit: false
    },
    outDir: "dist/types",
  }),],
  build: {
    lib: {
      entry: "./lib/index.ts",
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: Object.keys(pkg.dependencies),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
