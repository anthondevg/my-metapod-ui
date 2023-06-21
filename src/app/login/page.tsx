"use client";

import React, { useState } from "react";
import tw from "twin.macro";
import { validateInputs } from "../utils/validations";
import Modal from "./ modal";

const Login = () => {
  interface modalTypes {
    variant: string;
    message: string;
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState([]) as any;
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({} as modalTypes);

  const handleLogin = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    // validate inputs
    const errors = await validateInputs(email, password);
    setErrors(errors);
    if (errors.length) return; // if inputs ok make request

    setLoading(true); // loading state

    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) =>
        res.json().then((data) => ({ status: res.status, body: data }))
      )
      .then((data) => {
        setTimeout(() => {
          data.status == 200
            ? setModal({
                variant: "success",
                message: "Success! Welcome back",
              })
            : setModal({
                variant: "error",
                message: data.body,
              });

          setLoading(false);
        }, 500);
      });
  };

  return (
    <main tw="flex justify-center items-center flex-col">
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
        width={100}
        height={100}
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
        noValidate
      >
        <Modal variant={modal.variant}>{modal.message}</Modal>

        <h3 tw="font-bold text-2xl content-center w-full">Login</h3>
        {errors.map((error: string) => (
          <span
            key={error}
            tw="text-white bg-red-300 rounded my-2 w-full p-1 flex items-center font-bold"
          >
            <img
              src="https://www.icons101.com/icon_ico/id_60047/054_Psyduck.ico"
              width={50}
              alt=""
            />
            {error}
          </span>
        ))}
        <div tw="flex justify-between">
          <label htmlFor="email" tw="text-lg text-gray-500 font-bold">
            Email
          </label>{" "}
        </div>

        <input
          type="email"
          aria-label="email"
          formNoValidate
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
        </div>

        <input
          type={showPassword ? "text" : "password"}
          aria-label="password"
          placeholder="************"
          tw="border-4 border-gray-300 rounded-md p-2"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <label tw="pr-4">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={(e) => {
              setShowPassword(e.target.checked);
            }}
          />
          Show password
        </label>

        {loading ? (
          <button tw="px-12 py-4 bg-red-400 flex justify-between items-center mt-4 rounded-md text-white font-bold">
            Loading
            <img
              src="https://i.gifer.com/origin/76/76dfca2a58c4dff5c9827b527132bda8.gif"
              alt=""
              width={50}
            />
          </button>
        ) : (
          <button
            tw="px-12 py-4 bg-red-400 mt-4 rounded-md text-white font-bold"
            type="submit"
          >
            Login
          </button>
        )}

        <a href="/signup">Create Acccount</a>
      </form>

      <a href="https://anthondev.com" tw="text-white mt-4">
        anthondev.com
      </a>
    </main>
  );
};

export default Login;
