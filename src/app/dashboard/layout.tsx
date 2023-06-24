"use client";

import tw from "twin.macro";
import Header from "./header";

const Container = tw.section`xl:px-48 px-16  bg-gradient-to-b from-[#222222] to-[#000000] bg-contain bg-no-repeat`;

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
