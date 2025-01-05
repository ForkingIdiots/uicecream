import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from '@vitejs/plugin-react-swc';
import { resolve, relative, extname } from 'path';
import { defineConfig } from 'vite';
import dts from "vite-plugin-dts";
import pkg from "./package.json";
import { glob } from 'glob'

import { fileURLToPath } from 'url';
import tsconfigPaths from "vite-tsconfig-paths";

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), tsconfigPaths(), dts({
    // include: ["./lib/index.ts", "./lib/**/*.ts", "./lib/**/*.tsx"],
    exclude: ["node_modules", "dist"],
    // rollupTypes: true,
    // insertTypesEntry: true,
    // insertTypesEntry: true,

    include: resolve(__dirname, 'lib/**/*.{ts,tsx}'),
    compilerOptions: {
      baseUrl: "./lib/",
      emitDeclarationOnly: true,
      noEmit: false
    },
    outDir: "dist/types",
  }),],
  resolve: {
    alias: {
      "@": "/lib"
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: Object.keys(pkg.dependencies),
      output: {
        assetFileNames: 'assets/[name][extname]',
        chunkFileNames: 'chunks/[name].[hash].js',
        entryFileNames: '[name].js',
      },
      input: Object.fromEntries(
        glob.sync(resolve(__dirname, 'lib/**/*.{ts,tsx}')).map((file) => [
          relative('lib', file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
    }
  }
})
