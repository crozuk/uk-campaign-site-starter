export const publishCheckModeLabels = {
  development: "Allow placeholders during local editing.",
  preview: "Warn about placeholders during preview builds.",
  production: "Fail the build if placeholders remain.",
} as const;

export const publishCheckPaths = [
  "src",
  "public",
  "functions",
  "astro.config.mjs",
  "wrangler.toml",
] as const;

export const publishCheckMarkers = [
  "TODO_",
  "REPLACE_ME",
  "EXAMPLE_",
  "lorem ipsum",
  "replace-me.example.com",
  "mailto:?subject",
] as const;
