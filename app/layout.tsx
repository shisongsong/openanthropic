import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Open Frontier",
  description: "Open Frontier provides practical AI product storytelling and deployment-ready site content.",
  metadataBase: new URL("https://ai.openanthropic.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
