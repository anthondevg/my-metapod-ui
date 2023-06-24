"use client";
import "./globals.css";
import tw from "twin.macro";

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
