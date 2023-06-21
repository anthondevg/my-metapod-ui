"use client";

import React, { useState } from "react";
import tw from "twin.macro";
import { validateInputs } from "../utils/validations";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(["", ""]) as any;
  const router = useRouter();

  const handleLogin = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    setErrors(validateInputs(email, password));
    if (!email && !password) return;
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        router.push("login");
        console.log(data);
      });
  };

  return (
    <main tw="flex justify-center items-center flex-col">
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
        width={159}
        height={159}
        alt="metapod"
      />

      <h1 tw="text-white text-4xl font-bold">
        MyMetapod
        <span tw="text-white ml-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 rounded-xl">
          UI
        </span>
      </h1>

      <form
        tw="flex bg-gray-100 px-6 py-8 mt-6 rounded-md flex-col w-96 shadow border-2 border-gray-300"
        onSubmit={handleLogin}
      >
        <h3 tw="font-bold text-2xl content-center w-full">Sign Up</h3>
        <div tw="flex justify-between">
          <label htmlFor="email" tw="text-lg text-gray-500 font-bold">
            Email
          </label>
          <span tw="text-red-500 font-bold">{errors[0]}</span>
        </div>

        <input
          type="email"
          aria-label="email"
          placeholder="email@user.com"
          tw="border-4 w-full border-gray-300 rounded-md p-2"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <div tw="flex justify-between">
          <label htmlFor="password" tw="text-lg text-gray-500 font-bold">
            Password
          </label>
          <span tw="text-red-500 font-bold">{errors[1]}</span>
        </div>

        <input
          type="password"
          aria-label="password"
          placeholder="************"
          tw="border-4 border-gray-300 rounded-md p-2"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          tw="px-12 py-4 bg-red-400 mt-4 rounded-md text-white font-bold"
          type="submit"
        >
          Create Account
        </button>

        <a href="/login">Login</a>
      </form>

      <a href="https://anthondev.com" tw="text-white mt-4">
        anthondev.com
      </a>
    </main>
  );
};

export default Signup;
