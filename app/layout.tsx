import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exteriors CRM",
  description: "MVP CRM foundation for exterior home services teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
