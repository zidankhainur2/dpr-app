"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Beranda() {
  return (
    <div className="max-w-md w-full bg-white p-8 shadow-lg m-auto mt-48 rounded-xl">
      <div className="flex justify-center mb-4">
        <Image
          src="/21.png"
          alt="1"
          width={100}
          height={100}
          className="items-center"
        />
        <h1 className="text-3xl font-bold text-primary text-center mt-4">
          Welcome to DPR App
        </h1>
      </div>
      <div className="space-y-4 mt-8">
        <Link
          href="/cek-kodam"
          className="block w-full text-center bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Cek Kodam
        </Link>
        <Link
          href="/love-meter"
          className="block w-full text-center bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Love Meter
        </Link>
      </div>
    </div>
  );
}

export default Beranda;
