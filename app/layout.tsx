import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gamezop",
  description:
    "On Gamezop you can play the best free online games. Gamezop has the best online games selection of multiplayer games and single-player games",
  generator: "Next.js",
  icons: [
    { rel: "apple-touch-icon", url: "icons/favicon-512.png" },
    { rel: "icon", url: "icons/favicon-512.png" },
  ],
  manifest: "/manifest.json",
  keywords: ["nextjs13", "pwa", "next-pwa"],
  authors: [{ name: "Aryan Sharma" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="icons/favicon-512.png" />
        <link rel="apple-touch-icon" href="icons/favicon-512.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
