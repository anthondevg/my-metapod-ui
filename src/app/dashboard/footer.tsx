import React from "react";
import tw from "twin.macro";

export default function Footer() {
  return (
    <div tw="flex items-center justify-center">
      <p tw="font-bold text-white text-xl">
        Made by <a href="https://anthondev.com">anthondev</a> for{" "}
      </p>
      <img
        src="https://monoma.io/wp-content/uploads/2022/05/logo-white.png"
        alt=""
        width={150}
      />
    </div>
  );
}
