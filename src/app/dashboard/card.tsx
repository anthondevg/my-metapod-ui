import React from "react";
import tw from "twin.macro";

const Card = ({
  img = "https://nintenduo.com/wp-content/uploads/2023/02/Hora-Pokemon-GO-Destacado-Jigglypuff-Shiny-00.webp",
}) => {
  return (
    <div tw="rounded-xl bg-white flex flex-col shadow">
      <div tw="relative z-10 h-56 before:block before:absolute before:-inset-0 before:bg-gradient-to-b before:to-[#36363657] before:from-transparent">
        <img src={img} alt="" tw="w-full rounded-t-xl h-56 z-1" />

        <span tw="absolute bottom-2 text-white ease-in duration-300 hover:-translate-y-1 font-bold bg-green-600 rounded-3xl right-2 px-6 py-1">
          Rayo
        </span>
      </div>
      <div tw="p-4">
        <h3 tw="font-bold text-2xl text-green-800 mb-6">Pikachu God</h3>

        <span tw="text-green-600">#Electrico</span>

        <span tw="text-green-600">#Rayos</span>
        <span tw="text-green-600">#NoEvolucion</span>
      </div>
    </div>
  );
};

export default Card;
