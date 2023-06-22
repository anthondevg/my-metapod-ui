"use client";
import React from "react";
import protectedRoute from "../hoc/protectedRoute";
import tw from "twin.macro";
import Header from "./header";
import Card from "./card";

const page = () => {
  return (
    <>
      <div tw="w-full">
        <Header></Header>
      </div>
      <main tw="xl:grid-cols-5 grid gap-5 w-full md:grid-cols-3">
        <Card
          img={
            "https://nintenduo.com/wp-content/uploads/2023/02/Hora-Pokemon-GO-Destacado-Jigglypuff-Shiny-00.webp"
          }
        />
        <Card
          img={
            "https://archives.bulbagarden.net/media/upload/thumb/4/49/Ash_Pikachu.png/1200px-Ash_Pikachu.png"
          }
        />
        <Card />
        <Card
          img={"https://i.ebayimg.com/images/g/DboAAOSwB4BZ5nZJ/s-l1600.jpg"}
        />
        <Card
          img={
            "https://i.pinimg.com/474x/13/20/b4/1320b42aa0dd3809347c6ecd226eef85.jpg"
          }
        />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </>
  );
};

export default protectedRoute(page);
