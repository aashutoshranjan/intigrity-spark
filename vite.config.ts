// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  nitro: {
    // Self-hosted production target: a real Node HTTP server that calls serve()
    // and keeps the process alive. Any other preset (e.g. the cloudflare-module
    // default) emits a module that only exports a fetch handler, so
    // `node .output/server/index.mjs` would exit immediately with code 0.
    // Override with NITRO_PRESET only if you deploy elsewhere.
    preset: process.env.NITRO_PRESET ?? "node-server",
    // Pin the output layout so `node .output/server/index.mjs` always exists.
    output: {
      dir: ".output",
      serverDir: ".output/server",
      publicDir: ".output/public",
    },
  },
});

