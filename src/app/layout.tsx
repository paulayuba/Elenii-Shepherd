import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elenii-shepherd.com.ng"),
  title: {
    default: "Elenii Shepherd | The Future Belongs to Every Kind of Vision",
    template: "%s | Elenii Shepherd",
  },
  description: "Elenii Shepherd is building an inclusive ecosystem connecting assistive technology, offline AI, education, community support and economic opportunity for visually impaired people.",
  applicationName: "Elenii Shepherd",
  category: "Assistive technology",
  keywords: [
    "Elenii Shepherd", "assistive technology", "visual impairment", "blind accessibility",
    "offline AI", "inclusive innovation", "accessibility Nigeria", "wearable technology",
    "visually impaired entrepreneurs", "disability inclusion", "Africa assistive technology",
    "DDQIC", "Queen's University", "inclusive entrepreneurship",
  ],
  authors: [{ name: "Elenii Shepherd", url: "https://elenii-shepherd.com.ng" }],
  creator: "Elenii Shepherd",
  publisher: "Elenii Shepherd",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-512.png", type: "image/png", sizes: "512x512" }],
    shortcut: "/favicon.ico",
    apple: "/icon-512.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "Elenii Shepherd",
    title: "The Future Belongs to Every Kind of Vision",
    description: "Technology, independence and opportunity—connected in one ecosystem for visually impaired people.",
    images: [{ url: "/media/logo-dark.png", width: 1536, height: 1024, alt: "Elenii Shepherd" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Future Belongs to Every Kind of Vision",
    description: "An ecosystem connecting assistive technology, education, community and economic opportunity.",
    images: ["/media/logo-dark.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://elenii-shepherd.com.ng/#organization",
              name: "Elenii Shepherd",
              url: "https://elenii-shepherd.com.ng",
              logo: "https://elenii-shepherd.com.ng/media/logo-dark.png",
              description: "An inclusive technology, community and economic opportunity ecosystem for visually impaired people.",
              foundingLocation: { "@type": "Place", name: "Nigeria" },
              areaServed: ["Nigeria", "Africa"],
              sameAs: ["https://ng.linkedin.com/company/elenii-shepherd"],
              knowsAbout: ["Assistive technology", "Accessibility", "Offline artificial intelligence", "Inclusive entrepreneurship", "Visual impairment"],
            },
            {
              "@type": "WebSite",
              "@id": "https://elenii-shepherd.com.ng/#website",
              url: "https://elenii-shepherd.com.ng",
              name: "Elenii Shepherd",
              publisher: { "@id": "https://elenii-shepherd.com.ng/#organization" },
              inLanguage: "en-NG",
            },
            {
              "@type": "SoftwareApplication",
              name: "Elenii Shepherd Android Prototype",
              operatingSystem: "Android",
              applicationCategory: "HealthApplication",
              softwareVersion: "0.1.0",
              downloadUrl: "https://elenii-shepherd.com.ng/prototype",
              publisher: { "@id": "https://elenii-shepherd.com.ng/#organization" },
            },
          ],
        }) }} />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
