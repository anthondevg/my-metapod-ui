'use client';
import tw from "twin.macro";

const Container = tw.section`bg-gray-50 text-black flex flex-col w-full`;
const Input = () => <input placeholder="email" tw="border border-black border-solid hover:border-black rounded-xl" />


export default function Home() {
  return (
    <main className="flex min-h-screen p-24">
      <div className="bg-gray">
        <h1 className="text-4xl">MyMetapod UI</h1>
        <br />
      </div>
    </main>
  )
}
