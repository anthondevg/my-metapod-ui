"use client";
import React, { useEffect, useState } from "react";
import protectedRoute from "../hoc/protectedRoute";
import tw from "twin.macro";
import Header from "./header";
import Card from "./card";
import Pagination from "./pagination";

const page = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`)
      .then((res) => res.json())
      .then((res) => {
        setPokemons(res.results);
      });
  }, [offset]);

  const handleNavigation = (offset: number) => {
    setOffset(offset);
  };

  return (
    <>
      <div tw="mb-4">
        0
        <Pagination handlePagination={handleNavigation} />
      </div>

      <main tw="xl:grid-cols-5 grid gap-8 w-full md:grid-cols-2 lg:grid-cols-3">
        {pokemons.map((pokemon: any, index) => (
          <Card key={index.toString()} pokemonName={pokemon.name} />
        ))}
      </main>

      <div tw="mt-4">
        <Pagination handlePagination={handleNavigation} />
      </div>
    </>
  );
};

export default protectedRoute(page);
