import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://meeradentalclinic.com'),
  title: "Meera Dental Clinic | Best Dentist in Navi Mumbai | Dr. Shivani",
  description: "Dr. Shivani - Expert Dental Specialist with MDS, BDS, Fellowship in Oral Implantology, MSc in Facial Cosmetology. Advanced dental care in Navi Mumbai. Book appointment: +91 81084 04057",
  keywords: "dentist navi mumbai, dental clinic seawoods west, dr shivani, dental implants, aligners, smile design, laser dentistry, digital scanner, best dentist navi mumbai",
  authors: [{ name: "Dr. Shivani" }],
  creator: "Meera Dental Clinic",
  publisher: "Meera Dental Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Meera Dental Clinic | Best Dentist in Navi Mumbai",
    description: "Expert Dental Specialist Dr. Shivani with MDS, BDS, Fellowship in Oral Implantology. Advanced dental care in Navi Mumbai.",
    url: 'https://meeradentalclinic.com',
    siteName: "Meera Dental Clinic",
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: "Meera Dental Clinic",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Meera Dental Clinic",
    description: "Expert dental care with advanced technology in Navi Mumbai",
    images: ['/images/hero.png'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#059669" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
