"use client";
import "./globals.css";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>metapod</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
