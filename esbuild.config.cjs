const esbuild = require("esbuild");

const isProd = process.env.NODE_ENV === "production";

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: isProd,
    sourcemap: !isProd,
    outfile: "public/app.js",
    target: "esnext",
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
