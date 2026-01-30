import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "College Management System (CMS)",
  description: "Modern, integrated college management portal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
