import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://maison-lou.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Maison Lou • Esthétique & Onglerie à domicile",
  description:
    "Maison Lou propose des prestations professionnelles d'onglerie et d'esthétique à domicile : gel, rallongements, semi-permanent et épilations directement chez vous.",
  keywords: [
    "esthéticienne à domicile",
    "onglerie à domicile",
    "manucure à domicile",
    "pose gel",
    "épilation à domicile",
    "Maison Lou",
  ],
  openGraph: {
    title: "Maison Lou • Esthétique & Onglerie à domicile",
    description:
      "L'expertise esthétique au service de votre bien-être, directement chez vous.",
    url: siteUrl,
    siteName: "Maison Lou",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maison Lou — Esthétique & Onglerie à domicile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Lou • Esthétique & Onglerie à domicile",
    description: "L'expertise esthétique au service de votre bien-être, directement chez vous.",
  },
  alternates: { canonical: siteUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Maison Lou",
  description:
    "Prestations professionnelles d'esthétique et d'onglerie à domicile.",
  telephone: "+33665562007",
  email: "loulounejado@gmail.com",
  priceRange: "€€",
  areaServed: "Région",
  url: siteUrl,
  sameAs: ["https://www.instagram.com/"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
