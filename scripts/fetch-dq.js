#!/usr/bin/env node
// One-off script: downloads Don Quixote (Ormsby trans.) from Project Gutenberg
// and saves it to public/don-quixote.txt for local serving.
// Run once: npm run fetch-dq

import https from "node:https";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "public", "don-quixote.txt");
const URL = "https://www.gutenberg.org/cache/epub/996/pg996.txt";

fs.mkdirSync(path.dirname(OUT), { recursive: true });

console.log(`Fetching ${URL} …`);

https.get(URL, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
  if (res.statusCode !== 200) {
    console.error(`HTTP ${res.statusCode} — fetch failed.`);
    process.exit(1);
  }

  let bytes = 0;
  const file = fs.createWriteStream(OUT);

  res.on("data", (chunk) => {
    bytes += chunk.length;
    process.stdout.write(`\r  ${(bytes / 1024).toFixed(0)} KB received…`);
  });

  res.pipe(file);

  file.on("finish", () => {
    console.log(`\n  Saved → ${path.relative(ROOT, OUT)} (${(bytes / 1024).toFixed(0)} KB)`);
  });
}).on("error", (err) => {
  console.error("Fetch error:", err.message);
  process.exit(1);
});
