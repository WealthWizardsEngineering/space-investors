const esbuild = require("esbuild");

const isProd = process.env.NODE_ENV === "production";

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    sourcemap: !isProd,
    outfile: "public/app.js",
    target: "esnext",
  })
  .catch(() => process.exit(1));
