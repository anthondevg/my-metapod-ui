"use client";

import tw from "twin.macro";
import Header from "./header";

const Container = tw.section`bg-black h-screen flex justify-center`;

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <main tw="flex justify-center items-center flex-col">
        <Header />
        {children}
        <a href="https://anthondev.com" tw="text-white mt-4">
          anthondev.com
        </a>
      </main>
    </Container>
  );
}
