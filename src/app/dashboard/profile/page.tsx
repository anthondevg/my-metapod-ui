"use client";
import React from "react";
import Link from "next/link";
const profile = () => {
  return (
    <div>
      profile<Link href="/dashboard">dashboard</Link>
    </div>
  );
};

export default profile;
