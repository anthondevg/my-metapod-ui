"use client";

import tw from "twin.macro";

const Container = tw.section`bg-black h-screen flex justify-center`;

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
