"use client";

import React, { useState } from "react";
import tw from "twin.macro";
import { validateInputs } from "../utils/validations";
import Alert from "./alert";
import login from "../utils/auth";
import { useRouter } from "next/navigation";
import loginRoute from "../hoc/loginRoute";
interface alertTypes {
  variant: string;
  message: string;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState([]) as any;
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({} as alertTypes);
  const router = useRouter();

  const handleLogin = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    resetAlert();
    // validate inputs
    const errors = await validateInputs(email, password);
    setErrors(errors);

    if (errors.length) return; // if inputs ok make request

    setLoading(true); // loading state

    login(email, password).then((data: any) => {
      setTimeout(() => {
        switch (data.status) {
          case 200:
            localStorage.setItem("access_token", data.body.accessToken);
            localStorage.setItem("user", JSON.stringify(data.body.user));
            setAlert({
              variant: "success",
              message: "Success! Redirecting to dashboard...",
            });
            setTimeout(() => {
              router.replace("/dashboard");
            }, 1000);
            break;
          case 400:
            setAlert({
              variant: "error",
              message: data.body,
            });
          default:
            break;
        }

        setLoading(false);
      }, 650);
    });
  };

  const resetAlert = () => {
    setAlert({
      variant: "",
      message: "",
    }); //remove alert if exists
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
        <Alert variant={alert.variant}>{alert.message}</Alert>

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
          </label>
        </div>

        <input
          id="emailLoginForm"
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
          id="passwordLoginForm"
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
            id="submitLogin"
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

export default loginRoute(Login);
