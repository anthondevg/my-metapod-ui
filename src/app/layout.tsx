"use client";
import "./globals.css";
import tw from "twin.macro";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html tw="bg-gradient-to-b from-[#222222] to-[#000000] bg-contain bg-no-repeat">
      <head>
        <title>MyMetapodUI</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
