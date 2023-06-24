"use client";
import React, { useEffect, useState } from "react";
import protectedRoute from "../hoc/protectedRoute";
import tw from "twin.macro";
import Header from "./header";
import Card from "./card";
import Pagination from "./pagination";
import ModalInfo from "./modal";
import Footer from "./footer";

const page = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const [offset, setOffset] = useState(0);
  const [modalOpen, setModalOpen] = useState(false) as any;

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

  const handleOpenModal = (open: Boolean, pokemon: any) => {
    setModalOpen(open);
    setPokemon(pokemon);
  };

  return (
    <>
      <h3 tw="text-white font-bold text-3xl">Dashboard</h3>
      <div tw="mb-12 text-left w-full flex justify-center">
        <Pagination handlePagination={handleNavigation} />
      </div>

      <main tw="xl:grid-cols-5 grid gap-8 w-full md:grid-cols-2 lg:grid-cols-3">
        {pokemons.map((pokemon: any, index) => (
          <Card
            key={index.toString()}
            pokemonName={pokemon.name}
            handleModal={handleOpenModal}
            openModal={modalOpen}
          />
        ))}
      </main>

      <ModalInfo
        open={modalOpen}
        handleModal={handleOpenModal}
        pokemon={pokemon}
      />

      <div tw="mb-8 mt-8 text-left w-full flex justify-center">
        <Pagination handlePagination={handleNavigation} />
      </div>
      <Footer />
    </>
  );
};

export default protectedRoute(page);
