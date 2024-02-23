"use client";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const planetImage = [
  "https://cdn.pixabay.com/photo/2016/08/24/14/29/earth-1617121_640.jpg",
  "https://cdn.mos.cms.futurecdn.net/Mza6ccKYF6WVrqZekTtJxN-1200-80.jpg",
  "https://images.hindustantimes.com/tech/img/2023/03/16/1600x900/super_earth_1678939310749_1678939319503_1678939319503.jpg",
];

export default function Home() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const totalPages = 6;

  const getData = async () => {
    setLoading(true);
    await axios
      .get(`https://swapi.dev/api/planets/?page=${currentPage}&format=json`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

  const router = useRouter();

  return (
    <div className="w-screen h-full bg-[#000] flex flex-col items-center p-4 pt-10">
      <h1 className="text-6xl font-bold [text-shadow:_0px_0px_8px_#fff]">
        STAR WARS
      </h1>
      <p className="text-3xl text-[#aaa] [text-shadow:_0px_0px_5px_#00f]">
        Planets Directory
      </p>
      {loading ? (
        <div className="w-full h-[calc(100vh-200px)] flex flex-col justify-center items-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full h-full p-4 gap-4">
          {data.map((item, index) => {
            return (
              <div
                key={item.name}
                className="relative group flex flex-col items-center bg-slate-800 w-auto rounded-xl h-[min-content] gap-2 overflow-hidden pb-4 hover:bg-slate-900 transition-all"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    className="w-full h-48 object-cover group-hover:scale-150 transition-all duration-300"
                    src={planetImage[index % 3]}
                  />
                </div>
                <p className="text-2xl font-bold text-center">{item.name}</p>
                <div className="flex flex-row gap-4 px-2">
                  <div>
                    <p className="text-sm text-[#fff5]">Climate</p>
                    <p className="text-md font-bold">{item.climate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#fff5]">Population</p>
                    <p className="text-md font-bold">{item.population}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#fff5]">Diameter</p>
                    <p className="text-md font-bold">{item.diameter}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    localStorage.setItem("planet", JSON.stringify(item));
                    localStorage.setItem("index", index.toString());
                    router.push("/planet-details");
                  }}
                  className="hidden group-hover:flex transition-all duration-300 absolute top-[70px] rounded-xl bg-[#0005] backdrop-blur-[4px] px-4 py-2"
                >
                  View details
                </button>
              </div>
            );
          })}
        </div>
      )}
      <div className="flex gap-2 mt-4">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <div
              onClick={() => {
                setCurrentPage(item);
              }}
              style={{
                backgroundColor: currentPage === item ? "#0F3460" : "#333",
              }}
              className="rounded-xl bg-slate-800 h-12 w-12 flex items-center justify-center hover:bg-slate-600 cursor-pointer"
              key={item.toString()}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
