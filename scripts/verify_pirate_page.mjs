import fs from "fs";

const pirateHtml = fs.readFileSync(
  "e:/other/AIcode/OPC/opcwiki/raw/sources/AI编程出海/我的产品/2026-11-12_trackchest/web/.next/server/app/pirate-token-odds.html",
  "utf8"
);

// 1. 词数统计 (剔除 script, style, html 标签后的可见正文净词数)
const cleanText = pirateHtml
  .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, " ")
  .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, " ")
  .replace(/<[^>]+>/g, " ");

const words = cleanText.split(/\s+/).filter(Boolean).length;
console.log("--- WORD COUNT VERIFICATION ---");
console.log("Total visible text words in /pirate-token-odds:", words);

// 2. 检查精确词组 "pirate token odds" 频次
const lowerHtml = cleanText.toLowerCase();
const matches = lowerHtml.match(/pirate token odds/g) || [];
console.log("\n--- KEYWORD MATCHING VERIFICATION ---");
console.log('Occurrences of exact phrase "pirate token odds":', matches.length);

// 3. 检查四块关键内容
console.log("\n--- FOUR KEY SECTIONS VERIFICATION ---");
console.log(
  "① Containers section present:",
  pirateHtml.includes("Which Containers Qualify for Pirate Token Odds (1 in 137,500)")
);
console.log(
  "   - Standard wooden chests mentioned:",
  pirateHtml.includes("Standard Wooden Chests")
);
console.log(
  "   - Safes / Buried crates clarified:",
  pirateHtml.includes("Safes &amp; Cash Registers") || pirateHtml.includes("Safes & Cash Registers")
);
console.log(
  "② 1 in 91,667 standalone section:",
  pirateHtml.includes("The 1 in 91,667 Milestone")
);
console.log(
  "   1 in 68,750 standalone section:",
  pirateHtml.includes("The 1 in 68,750 Double Odds")
);
console.log(
  "③ December 4 conclusion section:",
  pirateHtml.includes("What Happens to Pirate Tokens When Chapter 7 Concludes on December 4")
);
console.log(
  "④ FAQ section present:",
  pirateHtml.includes("Frequently Asked Questions About Pirate Token Odds")
);

// 4. 结构化数据
console.log("\n--- STRUCTURED DATA VERIFICATION ---");
console.log("Has SoftwareApplication schema:", pirateHtml.includes("SoftwareApplication"));
console.log("Has FAQPage schema:", pirateHtml.includes("FAQPage"));
