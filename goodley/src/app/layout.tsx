import type { Metadata } from "next";
import "@/styles/globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AccessibilityProvider } from "@/context/AccessibilityContext";
import AccessibilityWidget from "@/components/Accessibility/AccessibilityWidget";

export const metadata: Metadata = {
  title: {
    default: "Goodley Public School | West Shalimar Bagh, New Delhi – CBSE Affiliated School",
    template: "%s | Goodley Public School",
  },
  description:
    "Goodley Public School, West Shalimar Bagh, New Delhi – CBSE Affiliated School. Providing quality education since 1999.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts – Poppins + Open Sans + Roboto */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome 4.7 */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          crossOrigin="anonymous"
        />
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <AccessibilityProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <AccessibilityWidget />
          {/* Back to top */}
          <a href="#main-content" id="topcontrol" aria-label="Back to top">
            <i className="fa fa-angle-up" />
          </a>
        </AccessibilityProvider>
      </body>
    </html>
  );
}
