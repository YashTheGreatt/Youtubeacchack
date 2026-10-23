import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THE DARKNESS — Roblox Scripts",
  description:
    "Enter THE DARKNESS: a monochrome Roblox scripting community concept built around creativity, tools, and learning.",
  applicationName: "THE DARKNESS",
  metadataBase: new URL("https://roblox-scripts.vercel.app"),
  openGraph: {
    title: "THE DARKNESS — Roblox Scripts",
    description: "A darker side of scripting. Built for creators.",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
