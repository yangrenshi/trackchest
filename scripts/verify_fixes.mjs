import fs from "fs";

const counterHtml = fs.readFileSync("e:/other/AIcode/OPC/opcwiki/raw/sources/AI编程出海/我的产品/2026-11-12_trackchest/web/.next/server/app/fortnite-chest-counter.html", "utf8");

// 1. 检查标题层级
const regex = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
let match;
let list = [];
while ((match = regex.exec(counterHtml)) !== null) {
  list.push({ level: parseInt(match[1]), text: match[2].replace(/<[^>]+>/g, "").trim().substring(0, 50) });
}
console.log("--- HEADING HIERARCHY CHECK ---");
console.log("Total headings in page:", list.length);
let jumps = 0;
let prev = 0;
list.forEach((h, i) => {
  let jump = "";
  if (h.level > prev + 1 && prev !== 0) {
    jump = " [FAIL: JUMP from H" + prev + " to H" + h.level + "]";
    jumps++;
  }
  console.log("  [" + i + "] H" + h.level + ": " + h.text + jump);
  prev = h.level;
});
console.log("Total skipped heading jumps:", jumps);

// 2. 检查目标关键词 'chest counter fortnite'
const titleMatch = counterHtml.match(/<title>([^<]+)<\/title>/);
const descMatch = counterHtml.match(/<meta\s+name="description"\s+content="([^"]+)"/);
console.log("\n--- KEYWORD MATCHING CHECK ---");
console.log("Title:", titleMatch ? titleMatch[1] : "NOT FOUND");
console.log("Description:", descMatch ? descMatch[1] : "NOT FOUND");
console.log("Description starts with target phrase:", descMatch ? descMatch[1].startsWith("Chest counter Fortnite") : false);
console.log("Description length:", descMatch ? descMatch[1].length : 0);

// 正文出现精确词组 'chest counter fortnite'
const lowerHtml = counterHtml.toLowerCase();
const countKeyword = (lowerHtml.match(/chest counter fortnite/g) || []).length;
console.log('Exact phrase "chest counter fortnite" count in page:', countKeyword);

// 3. 检查百分比社区估算标注
console.log("\n--- PERCENTAGE ESTIMATE CHECK ---");
console.log('Has "Standard Chests (~70%–80% Active Node Activation, Community Est.)":', counterHtml.includes("Community Est."));
console.log('Has unlabelled "(70%–80% Active Node Activation)":', counterHtml.includes("(70%–80% Active Node Activation)"));

// 4. 检查出处一致性
const pirateHtml = fs.readFileSync("e:/other/AIcode/OPC/opcwiki/raw/sources/AI编程出海/我的产品/2026-11-12_trackchest/web/.next/server/app/pirate-token-odds.html", "utf8");
console.log("\n--- CITATION CONSISTENCY CHECK ---");
console.log("Pirate page has Polygon Nov 9 telemetry:", pirateHtml.includes("Polygon on Nov 9, 2026"));
console.log("Pirate page has old unaligned disclosure text:", pirateHtml.includes("odds disclosure published Nov 9"));
