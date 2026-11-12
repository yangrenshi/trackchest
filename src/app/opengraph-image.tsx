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
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "rgba(99, 102, 241, 0.15)",
            border: "1px solid rgba(129, 140, 248, 0.3)",
            borderRadius: "9999px",
            padding: "8px 24px",
            color: "#a5b4fc",
            fontSize: "20px",
            fontWeight: 600,
            marginBottom: "32px",
          }}
        >
          <span>🚀 Instant AI Tool</span>
        </div>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.15,
            marginBottom: "24px",
            maxWidth: "1000px",
          }}
        >
          {siteConfig.name}
        </h1>

        <p
          style={{
            fontSize: "28px",
            color: "#cbd5e1",
            textAlign: "center",
            lineHeight: 1.4,
            maxWidth: "900px",
          }}
        >
          {siteConfig.tagline}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "48px",
            fontSize: "20px",
            color: "#94a3b8",
          }}
        >
          <span>{siteConfig.domain}</span>
          <span>•</span>
          <span>100% Free Trial</span>
          <span>•</span>
          <span>No Credit Card Required</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
