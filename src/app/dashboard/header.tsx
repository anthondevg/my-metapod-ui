import React from "react";
import tw from "twin.macro";
import AvatarUI from "./avatarUI";
import Link from "next/link";

const Header = () => {
  return (
    <header tw="flex items-center justify-between mb-8">
      <Link href={"/dashboard"}>
        <div tw="flex items-center">
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
            width={75}
            height={75}
            alt="metapod"
          />
          <h1 tw="text-white text-5xl font-bold">MyMetapod</h1>
        </div>
      </Link>

      <AvatarUI />
    </header>
  );
};

export default Header;
