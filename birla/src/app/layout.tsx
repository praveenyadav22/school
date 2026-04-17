import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LogoSlider from "@/utils/LogoSlider";
import SocialMedia from "@/utils/SocialMedia";
import BreadCrumb from "@/components/BreadCrumb";
import { AccessibilityProvider } from "@/context/AccessibilityContext";
import AccessibilityWidget from "@/components/Accessibility/AccessibilityWidget";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Birla Vidya Niketan",
  description: "Premier CBSE School in Pushp Vihar, New Delhi",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css"
        />
      </head>
      <body>
        {/* AccessibilityProvider wraps everything so all pages
            can read/set accessibility state via useAccessibility() */}
        <AccessibilityProvider>
          <Header />
          <BreadCrumb />
          <main>{children}</main>
          <LogoSlider />
          <SocialMedia />
          <Footer />
          {/* Fixed floating button + slide-in drawer — appears on every page */}
          <AccessibilityWidget />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
