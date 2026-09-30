import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Netlify's local build/deploy artifacts, not source.
    ".netlify/**",
    // Static-export post-processing working folders, not source.
    "out-inline/**",
    "out-assets/**",
  ]),
]);

export default eslintConfig;
