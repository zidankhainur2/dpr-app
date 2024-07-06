"use client";

import Image from "next/image";
import React, { useState } from "react";

function LoveMeter() {
  const [namaKamu, setNamaKamu] = useState("");
  const [namaPasangan, setNamaPasangan] = useState("");
  const [hasilPersentase, setHasilPersentase] = useState(null);
  const [penjelasan, setPenjelasan] = useState("");
  const [namaKamuHasil, setNamaKamuHasil] = useState("");
  const [namaPasanganHasil, setNamaPasanganHasil] = useState("");

  const cekLoveMeter = (event) => {
    event.preventDefault();

    if (namaKamu.trim() === "" || namaPasangan.trim() === "") {
      alert("Isi Nama Kamu dan Nama Pasangan Terlebih Dahulu");
      return;
    }

    const randomPersentase = Math.floor(Math.random() * 100) + 1;
    setHasilPersentase(randomPersentase);

    let penjelasanCinta = "";
    if (randomPersentase === 100) {
      penjelasanCinta =
        "Kalian benar-benar cocok dan tak terpisahkan sampai akhir hayat.";
    } else if (randomPersentase >= 80) {
      penjelasanCinta = "Kalian sangat cocok dan hubungan kalian sangat kuat.";
    } else if (randomPersentase >= 60) {
      penjelasanCinta =
        "Kalian cocok, tetapi perlu sedikit usaha lebih untuk mempertahankan hubungan.";
    } else if (randomPersentase >= 40) {
      penjelasanCinta =
        "Kalian lumayan cocok, namun ada beberapa hal yang perlu diperbaiki.";
    } else if (randomPersentase >= 20) {
      penjelasanCinta =
        "Hubungan kalian butuh banyak usaha untuk bisa berjalan dengan baik.";
    } else {
      penjelasanCinta =
        "Sepertinya kalian kurang cocok, mungkin lebih baik menjadi teman.";
    }
    setPenjelasan(penjelasanCinta);
    setNamaKamuHasil(namaKamu);
    setNamaPasanganHasil(namaPasangan);
    setNamaKamu("");
    setNamaPasangan("");
  };

  return (
    <div className="max-w-md w-full bg-white p-8 shadow-lg m-auto mt-48 rounded-xl">
      <div className="flex justify-center mb-4">
        <a href="/">
          <Image
            src="/21.png"
            alt="1"
            width={100}
            height={100}
            className="items-center"
          />
        </a>
      </div>
      <h2 className="text-2xl text-primary text-center font-semibold">
        Love Meter
      </h2>

      <form onSubmit={cekLoveMeter}>
        <div className="mb-4">
          <input
            type="text"
            name="namaKamu"
            id="namaKamu"
            placeholder="Masukkan Nama Kamu"
            className="shadow py-2 px-3 mt-4 border rounded w-full text-gray-700 focus:outline-none"
            value={namaKamu}
            onChange={(e) => setNamaKamu(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="namaPasangan"
            id="namaPasangan"
            placeholder="Masukkan Nama Pasangan"
            className="shadow py-2 px-3 mt-4 border rounded w-full text-gray-700 focus:outline-none"
            value={namaPasangan}
            onChange={(e) => setNamaPasangan(e.target.value)}
          />
        </div>
        <div className="mb-4 flex justify-center">
          <button className="bg-primary hover:bg-indigo-800 py-2 px-4 rounded-lg font-semibold">
            Cek Love Meter
          </button>
        </div>
      </form>
      {hasilPersentase !== null && (
        <div className="mt-4 text-center">
          <p className="text-xl text-indigo-600 font-semibold text-center pb-2">
            {namaKamuHasil} & {namaPasanganHasil}
          </p>
          <div className="relative w-32 h-32 mx-auto">
            <svg
              viewBox="0 0 471.701 471.701"
              className="absolute inset-0 w-full h-full"
            >
              <path
                d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
                    c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
                    l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
                    C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
                    s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
                    c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                    C444.801,187.101,434.001,213.101,414.401,232.701z"
                fill="#F87171"
                opacity="0.2"
              />
              <path
                d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
                    c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
                    l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
                    C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
                    s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
                    c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                    C444.801,187.101,434.001,213.101,414.401,232.701z"
                fill="#F87171"
                style={{ clipPath: `inset(${100 - hasilPersentase}% 0 0 0)` }}
              />
            </svg>
          </div>
          <p className="text-2xl text-primary font-bold text-center">
            {hasilPersentase}%
          </p>
          <p className="mt-2 text-gray-700">{penjelasan}</p>
        </div>
      )}
      <p className="text-slate-400 text-center mt-4">@dprsecondhome</p>
    </div>
  );
}

export default LoveMeter;
