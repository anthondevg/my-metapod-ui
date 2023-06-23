"use client";

import tw from "twin.macro";
import Header from "./header";

const Container = tw.section`bg-gradient-to-b from-[#222222] to-[#000000] h-screen px-24`;

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <div tw="w-full">
        <Header></Header>
      </div>
      {children}
    </Container>
  );
}
