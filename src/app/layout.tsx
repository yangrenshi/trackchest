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
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Fortnite Chest Tracker — TrackChest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortnite Chest Tracker — Free Online Chest Counter",
    description: siteConfig.description,
    creator: "@trackchest",
    images: [`${siteConfig.url}/opengraph-image`],
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
  const hasValidGA =
    siteConfig.gaMeasurementId &&
    siteConfig.gaMeasurementId.startsWith("G-") &&
    siteConfig.gaMeasurementId !== "G-XXXXXXXXXX";

  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        {/* Google Fonts: Inter (Body) + Chakra Petch (Logo Only) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics & Tag Manager (GTM-THLFJFWJ) */}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-THLFJFWJ"
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </Script>

        {/* Google Analytics 4 (环境变量备用) */}
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

        {/* Umami 自建流量统计（2KB 极轻量、免 Cookie、抗拦截） */}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src={`${process.env.NEXT_PUBLIC_UMAMI_HOST_URL || "https://umami-pied-six.vercel.app"}/script.js`}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="antialiased bg-[#121212] text-white selection:bg-[#ffc93c] selection:text-black flex flex-col min-h-screen">
        <AuthProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
