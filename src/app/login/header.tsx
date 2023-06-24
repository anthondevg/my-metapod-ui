import React from "react";
import tw from "twin.macro";

export default function Header() {
  return (
    <>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
        width={100}
        height={100}
        alt="metapod"
      />
      <h1 tw="text-white text-4xl font-bold">
        MyMetapod
        <span tw="text-white ml-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 rounded-xl">
          UI
        </span>
      </h1>
    </>
  );
}
