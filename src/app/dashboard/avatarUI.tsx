import React, { useState } from "react";
import tw from "twin.macro";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AvatarUI() {
  const [showMenu, setshowMenu] = useState(false);
  const router = useRouter();

  return (
    <div
      tw="flex items-center relative w-1/12 h-16"
      onMouseOver={() => {
        setshowMenu(true);
      }}
      onMouseLeave={() => {
        setshowMenu(false);
      }}
    >
      <Link tw="flex items-center" href={"/dashboard/profile"}>
        <img
          tw="text-white rounded-full w-12 h-12 bg-white border border-2 border-indigo-500 hover:border-white"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9S2MNXkR8KtA40dOvsn53YhcHPXlU-_Iy881FIGuD2C66Hc5HBqbv65hN0LfuymfeYdE&usqp=CAU"
          alt=""
          width={100}
          height={100}
        />
      </Link>

      <button
        onClick={(e) => {
          localStorage.removeItem("access_token");
          localStorage.removeItem("user");
          router.replace("/login");
        }}
        className={`bg-indigo-200 ease-in duration-300 -skew-4 px-4 py-2 absolute top-16 ${
          !showMenu ? "hidden" : ""
        }`}
      >
        Sign out
      </button>
    </div>
  );
}
