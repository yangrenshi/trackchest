import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#121212",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* 外框高光边 */}
        <div
          style={{
            position: "absolute",
            inset: "20px",
            border: "1px solid #2e2e2e",
            borderRadius: "24px",
            pointerEvents: "none",
          }}
        />

        {/* 顶部标签 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#1d1d1d",
            border: "1px solid #2e2e2e",
            borderRadius: "9999px",
            padding: "8px 22px",
            color: "#ffc93c",
            fontSize: "18px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "28px",
          }}
        >
          <span>FORTNITE CHAPTER 7 • TREASURE HUNTERS</span>
        </div>

        {/* 品牌主标题 */}
        <h1
          style={{
            fontSize: "68px",
            fontWeight: 900,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "18px",
            letterSpacing: "-1px",
          }}
        >
          TrackChest
        </h1>

        {/* 核心副标 */}
        <p
          style={{
            fontSize: "28px",
            color: "#9a9a9a",
            textAlign: "center",
            lineHeight: 1.4,
            maxWidth: "920px",
            marginBottom: "40px",
          }}
        >
          Live Fortnite Chest Tracker &amp; Drop Odds Calculator
        </p>

        {/* 4 大核心特性横幅 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            background: "#1d1d1d",
            border: "1px solid #2e2e2e",
            borderRadius: "16px",
            padding: "16px 36px",
            fontSize: "19px",
            color: "#ffffff",
            fontWeight: 600,
          }}
        >
          <span style={{ color: "#49d6ff" }}>4-Column Live Tally</span>
          <span style={{ color: "#2e2e2e" }}>•</span>
          <span style={{ color: "#f0a6ff" }}>Pirate Token Odds</span>
          <span style={{ color: "#2e2e2e" }}>•</span>
          <span style={{ color: "#ffd510" }}>100% Free Companion</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
