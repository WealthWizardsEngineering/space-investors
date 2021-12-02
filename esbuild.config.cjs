require("esbuild")
  .esbuild.build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    sourcemap: true,
    outfile: "public/app.js",
    target: "esnext",
  })
  .catch(() => process.exit(1));
