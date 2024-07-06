"use client";

import Image from "next/image";
import React, { useState } from "react";

function Content() {
  const namaKodam = [
    "Power Rangers Pink",
    "Power Rangers Biru",
    "Power Rangers Ireng",
    "Power Rangers Merah",
    "Kabel Data Type-C",
    "Colokan Casan",
    "Lucinta Luna",
    "Kudanil Terbang",
    "Cacing Alaska",
    "Ikan Mujair",
    "Elang Bondol",
    "Ojek Online",
    "Kucing Berkacamata",
    "Burung Puyuh",
    "Sapi Jepang",
    "Dugong",
    "Ikan Cupang",
    "Monyet Arab",
    "Anak Kost",
    "Penjaga Warnet",
    "Hantu Pocong",
    "Tuyul Gaul",
    "Jin Botol",
    "Nyi Roro Kidul",
    "Genderuwo",
    "Sundel Bolong",
    "Kolor Ijo",
    "Tukang Bakso",
    "Tukang Parkir",
    "Ikan Lele",
    "Kupu-Kupu Malam",
    "Bunga Matahari",
    "Kabel Listrik",
    "Uang Receh",
    "Laptop Kentang",
    "Sepeda Lipat",
    "Robot Vacuum",
    "Mangga Muda",
    "Ayam Goreng",
    "Bakso Sapi",
    "Bajay",
    "Komputer Jadul",
    "Cangkir Kopi",
    "Batu Nisan",
    "Buku Tulis",
    "Televisi Tabung",
    "Lemari Es",
    "Mesin Jahit",
    "Motor Bebek",
    "Sepatu Roda",
    "Jaket Kulit",
    "Piring Terbang",
    "Jari Manis",
    "Cincin Emas",
    "Sapu Lidi",
    "Kue Lapis",
    "Kereta Api",
    "Lampu Jalan",
    "Rambut Jagung",
    "Sarung Tinju",
    "Terong Ungu",
    "Kerupuk Udang",
    "Martabak Manis",
    "Ketupat Lebaran",
    "Kaleng Susu",
    "Botol Kaca",
    "Teko Teh",
    "Payung Lipat",
    "Meja Belajar",
    "Kursi Kantor",
    "Kasur Busa",
    "Guling Kapuk",
    "Jendela Kaca",
    "Tirai Jendela",
    "Lukisan Abstrak",
    "Kipas Angin",
    "Dispenser Air",
    "Wajan Besi",
    "Cermin Dinding",
    "Bantal Sofa",
    "Tali Jemuran",
    "Gantungan Baju",
    "Kompor Gas",
    "Panci Presto",
    "Spatula Kayu",
    "Sendok Garpu",
    "Piring Makan",
    "Gelombang Radio",
    "Kacamata Hitam",
    "Topi Koboi",
    "Tas Ransel",
    "Sepatu Bot",
    "Kaus Kaki",
    "Celana Jeans",
    "Baju Batik",
    "Jas Hujan",
    "Sarung Tangan",
    "Buku Novel",
    "Pulpen Tinta",
    "Pensil Kayu",
    "Penghapus Karet",
    "Penggaris Besi",
    "Rautan Pensil",
    "Map Plastik",
    "Buku Agenda",
    "Beruang Kutub",
    "Paus Biru",
    "Gajah",
    "Harimau",
    "Serigala",
    "Singa",
    "Cheetah",
    "Puma",
    "Buaya",
    "Komodo",
    "Anaconda",
    "Pinguin",
    "Flamingo",
    "Burung Hantu",
    "Burung Elang",
    "Hiu Putih",
    "Ikan Paus",
    "Ikan Pari",
    "Kuda Nil",
    "Badak",
    "Gorila",
    "Simba",
    "Timon",
    "Pumbaa",
  ];

  const [nama, setNama] = useState("");
  const [hasilKodam, setHasilKodam] = useState("");
  const [inputNama, setInputNama] = useState("");

  const cekKodam = (event) => {
    event.preventDefault();

    if (nama.trim() === "") {
      alert("Isi Nama Terlebih Dahulu");
      return;
    }

    const randomIndex = Math.floor(Math.random() * namaKodam.length);
    const randomKodam = namaKodam[randomIndex];
    setHasilKodam(randomKodam);
    setInputNama(nama);
    setNama("");
  };

  return (
    <div className="max-w-md w-full bg-white p-8 shadow-lg m-auto mt-48 rounded-xl">
      <div className="">
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
        <div>
          <h2 className="text-2xl text-primary text-center font-semibold">
            Cek Kodam
          </h2>

          <form id="kodam-form" onSubmit={cekKodam}>
            <div className="mb-4">
              <input
                type="text"
                name="nama"
                id="nama"
                placeholder="Masukan Nama Kalian"
                className="shadow py-2 px-3 mt-4 border rounded w-full text-gray-700 focus:outline-none"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>

            <div className="mb-4 flex justify-center">
              <button className="bg-primary hover:bg-indigo-800 py-2 px-4 rounded-lg font-semibold">
                Cek Kodam
              </button>
            </div>
            <div id="hasil-kodam">
              {hasilKodam && (
                <>
                  <p className="text-xl text-indigo-600 font-semibold text-center pb-2">
                    {inputNama}
                  </p>
                  <p className="text-2xl text-primary font-bold text-center">
                    {hasilKodam}
                  </p>
                </>
              )}
            </div>
            <p className="text-slate-400 text-center mt-4">@dprsecondhome</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Content;
