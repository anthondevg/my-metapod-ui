"use client";
import Link from "next/link";
import tw from "twin.macro";

export default function Home() {
  return (
    <>
      <main tw="flex justify-center flex-col items-center h-screen">
        <h1 tw="text-center">
          Welcome to MyMetapod! a project for Anthony Gonzalez made with Love
          and Nextjs. <br /> Please run the auth server with and
        </h1>
        <p tw="p-4 border-solid border-indigo-500 border-2">npm run server</p>
        Use the credentials: moana@admin.com / 123456 or Create an account for
        you, thanks! :D
        <Link
          tw="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
          href={"/login"}
        >
          Login
        </Link>
        <Link
          tw="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded"
          href={"/signup"}
        >
          Sign Up
        </Link>
        <Link
          tw="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href={"/dashboard"}
        >
          Dashboard
        </Link>
      </main>
    </>
  );
}
