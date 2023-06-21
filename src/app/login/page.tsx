"use client";

import React, { useState } from "react";
import tw from "twin.macro";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(["", ""]) as any;

  const handleLogin = async () => {
    console.log("click");

    const validations = validateInputs(email, password);

    setErrors(validations);
    const user = await fetch("./auth.json").then((res) => res.json());

    console.log(user);
    console.log(validations);
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

      <Form>
        <div tw="flex justify-between">
          <label htmlFor="email" tw="text-lg text-gray-500 font-bold">
            Email
          </label>{" "}
          <span tw="text-red-500 font-bold">{errors[0]}</span>
        </div>

        <input
          type="email"
          aria-label="email"
          required
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
          required
          tw="border-4 border-gray-300 rounded-md p-2"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          tw="px-12 py-4 bg-red-400 mt-4 rounded-md text-white font-bold"
          onClick={handleLogin}
        >
          Login
        </button>
      </Form>

      <a href="https://anthondev.com" tw="text-white mt-4">
        anthondev.com
      </a>
    </main>
  );
};

const Form = tw.section`flex bg-gray-100 px-6 py-8 mt-6 rounded-md flex-col w-96 shadow border-2 border-gray-300`;

const validateInputs = (email: string, password: string) => {
  let errors = ["", ""];

  if (!email) {
    errors[0] = "missing email";
  } else if (validateEmail(email)) {
    errors[0] = "invalid email";
  }

  if (!password) {
    errors[1] = "missing password";
  }

  return errors;
};

const validateEmail = (email: string) => {
  return !String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default Login;
