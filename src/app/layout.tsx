import type { Metadata } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { BRAND_INFO, FAQS } from "@/data/siteData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GIBRAN INTERIOR - Jasa Pembuatan Kitchen Set & Furniture Custom Jawa Barat, Jakarta, Banten",
  description: "Jasa interior rumah dan pembuatan custom furniture berkualitas di DKI Jakarta, Jawa Barat, dan Banten. Spesialis kitchen set, wardrobe lemari, dan backdrop TV berbahan multiplek 18mm bergaransi 1 tahun.",
  keywords: [
    "jasa interior rumah",
    "custom furniture",
    "kitchen set minimalis",
    "kitchen set jakarta",
    "kitchen set bandung",
    "kitchen set bsd tangerang",
    "jasa pembuatan lemari custom",
    "backdrop tv minimalis",
    "interior custom bekasi",
    "interior rumah bogor depok",
    "gibran interior"
  ],
  authors: [{ name: "Gibran Interior" }],
  openGraph: {
    title: "GIBRAN INTERIOR - Custom Interior & Furniture Presisi",
    description: "Wujudkan interior impian dengan bahan multiplek meranti 18mm & finishing HPL/Duco. Free survei lokasi untuk Jawa Barat, DKI Jakarta, & Banten.",
    url: "https://gibraninterior.com",
    siteName: "Gibran Interior",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Gibran Interior Custom Furniture",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org Structured Data for LocalBusiness & Services
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": BRAND_INFO.name,
    "alternateName": "Gibran Interior Custom Furniture",
    "description": "Jasa Pembuatan Kitchen Set, Wardrobe Lemari Pakaian, dan Interior Custom Rumah di Jawa Barat, DKI Jakarta, dan Banten.",
    "telephone": BRAND_INFO.phone,
    "email": BRAND_INFO.email,
    "sameAs": [
      BRAND_INFO.socialMedia.instagram,
      BRAND_INFO.socialMedia.tiktok,
      BRAND_INFO.socialMedia.threads
    ],
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "DKI Jakarta"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Jawa Barat"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Banten"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Nasional 3, Citatah, Cipatat",
      "addressLocality": "Bandung Barat",
      "addressRegion": "Jawa Barat",
      "postalCode": "40554",
      "addressCountry": "ID"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": BRAND_INFO.rating,
      "reviewCount": BRAND_INFO.reviewCount,
      "bestRating": "5"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <html lang="id" className={`${geistSans.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#faf8f5] text-stone-900 antialiased selection:bg-[#966743]/20 selection:text-[#7a4f2e]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
