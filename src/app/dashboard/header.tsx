import React from "react";
import { useRouter } from "next/navigation";
import tw from "twin.macro";
import Link from "next/link";

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

      <div tw="flex">
        <Link
          tw="text-white rounded-full w-12 h-12 bg-white "
          href={"/dashboard/profile"}
        >
          <img
            src="https://yt3.googleusercontent.com/lgGRw5FeRj05CYBZN-pQ52yykiMXw3NB50oiREDi4Hx0I73JWouhzdmOc1Ij-Y2XQPuYls45-Q=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </Link>

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
