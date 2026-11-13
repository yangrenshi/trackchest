import fs from "fs";

const home = fs.readFileSync(
  "e:/other/AIcode/OPC/opcwiki/raw/sources/AI编程出海/我的产品/2026-11-12_trackchest/web/.next/server/app/index.html",
  "utf8"
);
const pirate = fs.readFileSync(
  "e:/other/AIcode/OPC/opcwiki/raw/sources/AI编程出海/我的产品/2026-11-12_trackchest/web/.next/server/app/pirate-token-odds.html",
  "utf8"
);

console.log(
  "Home banner match:",
  home.includes("Wave 1: Starts Saturday, Nov 14 • 1.5x drops")
);
console.log(
  "Pirate banner match:",
  pirate.includes("Wave 1: Starts Saturday, Nov 14 • 1.5x drops")
);
console.log(
  "Double odds statement removed from pirate:",
  !pirate.includes("container drop odds double")
);
console.log(
  "Boosted odds statement added to pirate:",
  pirate.includes(
    "Container drop odds are boosted during Treasure Hours — 1.5x in Wave 1 and 2x in Waves 2 &amp; 3"
  )
);
console.log(
  "New official source quote present in HTML:",
  pirate.includes("Epic&#x27;s official drop rates, reported by Polygon on Nov 9, 2026") ||
    pirate.includes("Epic's official drop rates, reported by Polygon on Nov 9, 2026")
);
