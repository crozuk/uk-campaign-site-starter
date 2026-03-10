import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const rootDir = process.cwd();
const scanTargets = ["src", "public", "functions", "astro.config.mjs", "wrangler.toml"];
const ignoredSegments = new Set(["node_modules", ".git", ".astro", "dist", ".wrangler"]);

const checks = [
  { label: "TODO marker", pattern: /\bTODO_/gi },
  { label: "Replace marker", pattern: /\bREPLACE_ME\b/gi },
  { label: "Example marker", pattern: /\bEXAMPLE_/gi },
  { label: "Lorem ipsum", pattern: /lorem ipsum/gi },
  {
    label: "Dummy email address",
    pattern: /\b(?:hello|team|press|contact|info)@example\.(?:com|org|co\.uk)\b/gi,
  },
  {
    label: "Placeholder CTA link",
    pattern: /(?:href|link)\s*:\s*["'](?:#|https?:\/\/replace-me\.example\.com|mailto:\?subject)/gi,
  },
  {
    label: "Placeholder site URL",
    pattern: /https?:\/\/replace-me\.example\.com/gi,
  },
  {
    label: "Placeholder legal copy",
    pattern: /\b(?:company number 00000000|registered address here|privacy text to be replaced)\b/gi,
  },
];

const mode = getMode();

function getMode() {
  const explicit = process.env.PUBLISH_CHECK_MODE?.toLowerCase();

  if (explicit === "development" || explicit === "preview" || explicit === "production") {
    return explicit;
  }

  if (process.env.NODE_ENV === "development") {
    return "development";
  }

  return "preview";
}

async function walk(target) {
  const fullPath = path.join(rootDir, target);
  const fileStat = await stat(fullPath);

  if (fileStat.isFile()) {
    return [fullPath];
  }

  const entries = await readdir(fullPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (ignoredSegments.has(entry.name)) {
      continue;
    }

    const nextTarget = path.join(target, entry.name);
    const nextPath = path.join(rootDir, nextTarget);

    if (entry.isDirectory()) {
      files.push(...(await walk(nextTarget)));
      continue;
    }

    files.push(nextPath);
  }

  return files;
}

function formatExcerpt(source, index, length) {
  const start = Math.max(0, index - 20);
  const end = Math.min(source.length, index + length + 40);
  return source
    .slice(start, end)
    .replace(/\s+/g, " ")
    .trim();
}

async function collectMatches(filePath) {
  const relativePath = path.relative(rootDir, filePath);

  if (relativePath === "src/data/publish-check.ts") {
    return [];
  }

  const source = await readFile(filePath, "utf8");
  const findings = [];

  for (const check of checks) {
    const matches = Array.from(source.matchAll(check.pattern));

    for (const match of matches) {
      findings.push({
        file: relativePath,
        label: check.label,
        value: match[0],
        excerpt: formatExcerpt(source, match.index ?? 0, match[0].length),
      });
    }
  }

  return findings;
}

async function main() {
  const files = [];

  for (const target of scanTargets) {
    try {
      files.push(...(await walk(target)));
    } catch (error) {
      if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
        continue;
      }

      throw error;
    }
  }

  const findings = [];

  for (const file of files) {
    findings.push(...(await collectMatches(file)));
  }

  if (findings.length === 0) {
    console.log(`[publish-check] ${mode}: no placeholder markers found.`);
    return;
  }

  const output = findings
    .map(
      (finding) =>
        `- ${finding.file}: ${finding.label} matched "${finding.value}" (${finding.excerpt})`,
    )
    .join("\n");

  if (mode === "development") {
    console.log("[publish-check] development: placeholders allowed.");
    console.log(output);
    return;
  }

  if (mode === "preview") {
    console.warn("[publish-check] preview warning: placeholder markers still exist.");
    console.warn(output);
    return;
  }

  console.error("[publish-check] production failure: replace or remove placeholder markers before publishing.");
  console.error(output);
  process.exitCode = 1;
}

main().catch((error) => {
  console.error("[publish-check] unexpected error:", error);
  process.exitCode = 1;
});
