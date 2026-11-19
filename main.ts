// Entry program for the news-image-20261118 bounty.
// Copies the pre-rendered 1024x1024 news summary (entry.png) to /output/entry.png.
// No dependencies, no network, no randomness: the output bytes are identical on every run.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const source = join(repoRoot, "entry.png");
const outputDir = "/output";
const target = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target}`);
