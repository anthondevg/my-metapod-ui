"use client";
import React from "react";
import protectedRoute from "../hoc/protectedRoute";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <ul>
        <li>aaaaaaaaaa</li>
      </ul>

      <button
        onClick={(e) => {
          localStorage.removeItem("access_token");
          router.replace("/login");
        }}
      >
        Cerrar sesion
      </button>
    </div>
  );
};

export default protectedRoute(page);
