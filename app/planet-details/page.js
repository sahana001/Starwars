"use client";

import React from "react";
import { planetImage } from "../page";
import Residents from "@/components/Residents";
import { useState, useEffect } from "react";

function PlanetDetails() {
  const [loading, setLoading] = useState(true);
  const [planetData, setPlanetData] = useState();
  const [index, setIndex] = useState();

  useEffect(() => {
    const planet_Data = JSON.parse(localStorage.getItem("planet"));
    const _index = JSON.parse(localStorage.getItem("index"));

    setPlanetData(planet_Data);
    setIndex(_index);
  }, []);

  return (
    <div className="relative w-screen h-full bg-[#000]">
      <img
        className="w-screen h-screen object-cover top-0 fixed"
        src={planetImage[index % 3]}
      />
      {/* {loading ? (
        <div className="w-full h-[calc(100vh-200px)] flex flex-col justify-center items-center">
          <p>Loading...</p>
        </div>
      ) : ( */}
      {planetData && (
        <div className="z-10 w-full h-screen backdrop-blur-md flex flex-col items-center p-4 pt-10">
          <h1 className="text-6xl font-bold [text-shadow:_0px_0px_10px_#fff]">
            {planetData.name}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full h-full p-4 gap-4">
            <div className="rounded-xl bg-[#0005] p-2">
              <p className="text-xl text-center text-[#fffa] font-semibold">
                Orbital Period
              </p>
              <p className="text-2xl text-center font-bold">
                {planetData?.orbital_period}
              </p>
            </div>
            <div className="rounded-xl bg-[#0005] p-2">
              <p className="text-xl text-center text-[#fffa] font-semibold">
                Rotation Period
              </p>
              <p className="text-2xl text-center font-bold">
                {planetData?.rotation_period}
              </p>
            </div>
            <div className="rounded-xl bg-[#0005] p-2">
              <p className="text-xl text-center text-[#fffa] font-semibold">
                Diameter
              </p>
              <p className="text-2xl text-center font-bold">
                {planetData?.diameter}
              </p>
            </div>
            <div className="rounded-xl bg-[#0005] p-2">
              <p className="text-xl text-center text-[#fffa] font-semibold">
                Climate
              </p>
              <p className="text-2xl text-center font-bold">
                {planetData?.climate}
              </p>
            </div>
            <div className="rounded-xl bg-[#0005] p-2">
              <p className="text-xl text-center text-[#fffa] font-semibold">
                Gravity
              </p>
              <p className="text-2xl text-center font-bold">
                {planetData?.gravity}
              </p>
            </div>
            <div className="rounded-xl bg-[#0005] p-2">
              <p className="text-xl text-center text-[#fffa] font-semibold">
                Terrain
              </p>
              <p className="text-2xl text-center font-bold">
                {planetData?.terrain}
              </p>
            </div>
            <div className="rounded-xl bg-[#0005] p-2">
              <p className="text-xl text-center text-[#fffa] font-semibold">
                Surface water
              </p>
              <p className="text-2xl text-center font-bold">
                {planetData?.surface_water}
              </p>
            </div>
            <div className="rounded-xl bg-[#0005] p-2">
              <p className="text-xl text-center text-[#fffa] font-semibold">
                Population
              </p>
              <p className="text-2xl text-center font-bold">
                {planetData?.population}
              </p>
            </div>
            <div className="rounded-xl bg-[#0005] p-2">
              <p className="text-xl text-center text-[#fffa] font-semibold">
                Created
              </p>
              <p className="text-2xl text-center font-bold">
                {planetData?.created?.slice(0, 10)}
              </p>
            </div>
            <div className="rounded-xl bg-[#0005] p-2">
              <p className="text-xl text-center text-[#fffa] font-semibold">
                Updated
              </p>
              <p className="text-2xl text-center font-bold">
                {planetData?.edited?.slice(0, 10)}
              </p>
            </div>
          </div>
          <p className="text-xl text-center text-[#fffa] font-semibold">
            Residents
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full h-full p-4 gap-4">
            {planetData.residents.map((item) => {
              return (
                <Residents
                  key={item}
                  residentUrl={item}
                  loading={loading}
                  setLoading={setLoading}
                />
              );
            })}
          </div>
        </div>
      )}
      {/* )} */}
    </div>
  );
}

export default PlanetDetails;
