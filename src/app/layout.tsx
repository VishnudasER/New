import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "For Shuttu, With Love ❤️",
  description: "A personalized romantic period-care, comfort & love sanctuary exclusively for my girlfriend, Shuttu.",
  keywords: ["For Shuttu", "Love", "Romantic", "Period Care", "Comfort", "Sru"],
  authors: [{ name: "Her Boy" }],
  openGraph: {
    title: "For Shuttu, With Love ❤️",
    description: "A tiny corner of the internet where everything is about you.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FFF0F5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans bg-[#FFF8FA] text-[#4A2835] antialiased selection:bg-pink-200 selection:text-pink-900">
        {children}
      </body>
    </html>
  );
}
