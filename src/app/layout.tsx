import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { AuthProvider } from "@/context/AuthContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Fortnite Chest Tracker — Free Online Chest Counter",
    template: "%s | TrackChest",
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  authors: [{ name: "TrackChest Studio", url: siteConfig.url }],
  creator: "TrackChest Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Fortnite Chest Tracker — Free Online Chest Counter",
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortnite Chest Tracker — Free Online Chest Counter",
    description: siteConfig.description,
    creator: "@trackchest",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 1. WebApplication 结构化数据
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TrackChest - Fortnite Chest Tracker",
    url: siteConfig.url,
    applicationCategory: "GameApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: siteConfig.description,
    featureList: [
      "Real-time tap counter for Fortnite chests",
      "Categorized tracking for Regular, Rare, Sprite, and Vault chests",
      "Session, Daily, and All-Time career totals",
      "LocalStorage offline persistence",
      "Zero login or Epic Games account required",
    ],
  };

  // 2. FAQPage 结构化数据
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question || faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer || faq.a,
      },
    })),
  };

  // 只有当环境变量配置了真实的 GA4 ID（非占位符）时才注入脚本
  const hasValidGA =
    siteConfig.gaMeasurementId &&
    siteConfig.gaMeasurementId.startsWith("G-") &&
    siteConfig.gaMeasurementId !== "G-XXXXXXXXXX";

  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        {/* Google Fonts: Chakra Petch & Rajdhani */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,500;0,700;0,800;1,700&family=Rajdhani:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* WebApplication JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
        {/* FAQPage JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Google Analytics 4 (仅有效 ID 加载) */}
        {hasValidGA && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteConfig.gaMeasurementId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="antialiased bg-void-950 text-slate-100 selection:bg-amber-400 selection:text-slate-950 flex flex-col min-h-screen tactical-grid-bg relative">
        <AuthProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
