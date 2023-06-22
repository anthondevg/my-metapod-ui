"use client";

import tw from "twin.macro";

const Container = tw.section`bg-gradient-to-b from-[#303030] to-[#1c1c1a] px-24 h-screen`;

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
