import React from "react";
import { useRouter } from "next/navigation";
import tw from "twin.macro";

const Header = () => {
  const router = useRouter();

  return (
    <header tw="flex items-center justify-between mb-8">
      <div tw="flex items-center">
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
          width={75}
          height={75}
          alt="metapod"
        />
        <h1 tw="text-white text-5xl font-bold">MyMetapod</h1>
      </div>

      <div>
        <button
          onClick={(e) => {
            localStorage.removeItem("access_token");
            router.replace("/login");
          }}
          tw="bg-gray-200 px-4 py-2 rounded"
        >
          Sign out
        </button>
      </div>
    </header>
  );
};

export default Header;
