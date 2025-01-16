import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'], // Specify the entry file
  format: ['esm', 'cjs'], // Output both ESM and CommonJS formats
  dts: true,              // Generate TypeScript declaration files
  sourcemap: true,        // Include sourcemaps
  clean: true             // Clean the output directory before building
});
