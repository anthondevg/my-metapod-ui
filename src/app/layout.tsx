"use client";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>MyMetapodUI</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
