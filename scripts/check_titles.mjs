import fs from "fs";

const files = [
  "index.html",
  "fortnite-chest-counter.html",
  "pirate-token-odds.html",
  "chest-types.html",
  "how-to-check-chests.html",
];

for (const f of files) {
  const p =
    "e:/other/AIcode/OPC/opcwiki/raw/sources/AI编程出海/我的产品/2026-11-12_trackchest/web/.next/server/app/" +
    f;
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, "utf8");
    const m = html.match(/<title>([^<]+)<\/title>/);
    if (m) {
      console.log(`${f} -> length ${m[1].length}: "${m[1]}"`);
    }
  }
}
