import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import http from "http";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const playwright = require("C:/Users/jtzy/AppData/Roaming/npm/node_modules/playwright");

const PORT = 3456;
const TARGET_URL = `http://127.0.0.1:${PORT}/fortnite-chest-counter`;

function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    function check() {
      const req = http.get(url, (res) => {
        if (res.statusCode === 200) {
          resolve();
        } else {
          setTimeout(check, 500);
        }
      });
      req.on("error", () => {
        if (Date.now() - start > timeoutMs) {
          reject(new Error("Server start timeout"));
        } else {
          setTimeout(check, 500);
        }
      });
    }
    check();
  });
}

async function run() {
  console.log("Starting Next.js production server on port", PORT);
  const server = spawn("cmd.exe", ["/c", `npx next start -p ${PORT}`], {
    cwd: "e:/other/AIcode/OPC/opcwiki/raw/sources/AI编程出海/我的产品/2026-11-12_trackchest/web",
    stdio: "inherit",
    detached: false,
  });

  try {
    console.log("Waiting for server to become ready...");
    await waitForServer(TARGET_URL);
    console.log("Server ready! Launching headless Chrome via Playwright...");

    const browser = await playwright.chromium.launch({
      executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--force-device-scale-factor=2"],
    });

    const context = await browser.newContext({
      viewport: { width: 1280, height: 860 },
      deviceScaleFactor: 2,
    });

    const page = await context.newPage();
    console.log("Navigating to:", TARGET_URL);
    await page.goto(TARGET_URL, { waitUntil: "networkidle" });

    console.log("Injecting 20-chest match data into LocalStorage...");
    await page.evaluate(() => {
      localStorage.setItem(
        "trackchest_categorized_cols_v1",
        JSON.stringify({
          standard: 12,
          rare: 5,
          sprite: 2,
          vault: 1,
        })
      );
    });

    console.log("Reloading page to display active match session...");
    await page.reload({ waitUntil: "networkidle" });

    // 等待 20 chests 出现
    await page.waitForSelector("text=20 chests", { timeout: 10000 });
    console.log("Detected active '20 chests' multi-column state in DOM!");

    // 稍微等待动画和样式稳定
    await page.waitForTimeout(1000);

    // 找到四列计数器的容器卡片（包含顶部 Total 20 chests 和 4 列卡片）
    // CategorizedCounterView 的顶层 div 包含 className="space-y-6"
    const counterContainer = page.locator(".space-y-6").first();

    const outputDir = "e:/other/AIcode/OPC/opcwiki/raw/sources/AI编程出海/我的产品/2026-11-12_trackchest/web/public/images";
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const targetPath1 = path.join(outputDir, "fortnite-chest-counter-match-hud.png");
    const targetPath2 = path.join(outputDir, "fortnite-4-column-chest-counter-match.png");

    console.log("Capturing element screenshot of the active 20-chest 4-column counter...");
    await counterContainer.screenshot({
      path: targetPath1,
      type: "png",
    });
    console.log("Saved screenshot to:", targetPath1);

    // 复制一份副本
    fs.copyFileSync(targetPath1, targetPath2);
    console.log("Saved duplicate to:", targetPath2);

    await browser.close();
    console.log("Browser closed successfully.");
  } finally {
    console.log("Stopping Next.js server...");
    server.kill("SIGINT");
    try {
      spawn("cmd.exe", ["/c", `for /f "tokens=5" %a in ('netstat -aon ^| findstr :${PORT}') do taskkill /f /pid %a`], {
        stdio: "ignore",
      });
    } catch {}
  }
}

run().catch((err) => {
  console.error("Error during screenshot capture:", err);
  process.exit(1);
});
