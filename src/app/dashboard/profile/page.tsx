"use client";
import React, { useEffect, useState } from "react";
import tw from "twin.macro";

const profile = () => {
  const [user, setUser] = useState({}) as any;
  useEffect(() => {
    let user = localStorage.getItem("user");

    setUser(JSON.parse(user));
    console.log(JSON.parse(user));
  }, []);

  return (
    <div>
      <h3 tw="font-bold text-3xl text-white">Your Profile</h3>
      <div tw="bg-indigo-600 rounded-xl p-8 mt-4">
        <p tw="font-bold text-3xl text-white">id: {user.id}</p>
        <p tw="font-bold text-3xl text-white">Email: {user.email}</p>
      </div>
    </div>
  );
};

export default profile;
