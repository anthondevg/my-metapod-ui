import React, { useState } from "react";
import tw from "twin.macro";

export default function ModalInfo({ open, handleModal, pokemon }) {
  return (
    <div
      onClick={() => {
        handleModal(false, pokemon);
      }}
      className={`bg-[#6d6d6d81] xl:h-screen h-full fixed left-0 w-full top-0 z-20 flex justify-center items-center ${
        open ? "" : "hidden overflow-x-hidden"
      }`}
    >
      <div
        tw="bg-gray-800 p-6 w-1/3 z-30 rounded-xl relative"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {pokemon.sprites && (
          <div tw="flex">
            <img src={pokemon.sprites.front_default} alt="" width={150} />
            <img src={pokemon.sprites.back_default} alt="" width={150} />
            <img src={pokemon.sprites.front_shiny} alt="" width={150} />
            <img src={pokemon.sprites.back_shiny} alt="" width={150} />
          </div>
        )}
        <h1 tw="font-bold text-3xl text-orange-300">
          {pokemon && pokemon.name}
        </h1>
        {pokemon.types && (
          <span tw="font-bold text-white bg-red-500 p-2 absolute top-0 left-0">
            {pokemon.types[0].type.name}
          </span>
        )}
        <p tw="font-bold text-white">weight: {pokemon && pokemon.weight}</p>

        <p tw="font-bold text-white">height: {pokemon && pokemon.height}</p>

        <p tw="font-bold text-white bg-indigo-500 p-2 rounded-md my-2">Stats</p>

        {pokemon.stats &&
          pokemon.stats.map((stat: any, i) => (
            <p key={i} tw="font-bold text-white flex justify-between">
              <span tw="text-indigo-500">{stat.stat.name} </span>{" "}
              <span>{stat.base_stat}</span>
            </p>
          ))}
      </div>
    </div>
  );
}
