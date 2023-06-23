import React, { useEffect, useState } from "react";
import tw from "twin.macro";

const Card = ({ pokemonName, handleModal, openModal }) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res);
      });
    console.log(pokemon);
  }, [pokemonName]);
  return (
    <div
      tw="rounded-xl bg-gray-800 flex flex-col shadow border-solid border-4 border-gray-600 cursor-pointer"
      onClick={() => {
        handleModal(true, pokemon);
      }}
    >
      <div tw="relative z-1 h-56 bg-black  before:block before:absolute before:-inset-0 before:bg-gradient-to-b before:to-[#1a1a1adf] before:from-transparent">
        {pokemon.sprites && (
          <img
            src={
              pokemon.sprites.versions["generation-v"]["black-white"].animated
                .front_default
                ? pokemon.sprites.versions["generation-v"]["black-white"]
                    .animated.front_default
                : "https://nintenduo.com/wp-content/uploads/2023/02/Hora-Pokemon-GO-Destacado-Jigglypuff-Shiny-00.webp"
            }
            alt=""
            tw="w-full rounded-t-xl h-56 z-10"
          />
        )}

        <span tw="bg-indigo-600 absolute text-white font-bold  px-6 py-1 shadow -skew-x-12 right-4 -top-4">
          {pokemon.weight}
        </span>
      </div>
      <div tw="p-4 border-solid border-t-4 border-t-gray-500">
        <h3 tw="font-bold text-2xl text-white mb-6">{pokemon.name}</h3>

        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          tw="cursor-default bg-indigo-500 p-4 rounded-xl"
        >
          <span tw="text-white font-bold">moves</span>
          <ul>
            {pokemon.moves &&
              pokemon.moves.slice(0, 3).map((move: any, i) => (
                <li key={i} tw="text-white">
                  {move.move.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
