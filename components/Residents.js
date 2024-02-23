import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Residents({ residentUrl, loading, setLoading }) {
  const [resident, setResident] = useState();

  const getResident = async () => {
    await axios
      .get(residentUrl)
      .then((res) => {
        console.log(res.data);
        setResident(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getResident();
  }, []);

  return (
    <div className="relative p-4 group flex flex-col items-center bg-slate-800 w-auto rounded-xl h-[min-content] gap-2 overflow-hidden pb-4 hover:bg-slate-900 transition-all">
      <img
        className="absolute top-0 opacity-5 h-full w-full object-cover"
        src={
          resident?.gender === "female"
            ? "https://thumbs.dreamstime.com/b/woman-avatar-icon-flat-style-illustration-web-isolated-black-background-woman-avatar-icon-flat-style-illustration-web-163672116.jpg"
            : "https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-avatar-of-a-man-wearing-sunglasses-image_2569096.jpg"
        }
      />
      {!resident ? (
        <p>N/A</p>
      ) : (
        <>
          <p className="text-xl font-bold text-center mb-2">{resident?.name}</p>
          <div className="grid grid-cols-3 w-full gap-1">
            <div className="flex flex-col items-center">
              <p className="text-[#aaa] text-sm">Height :</p>
              <p>{resident?.height}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#aaa] text-sm">Mass :</p>
              <p>{resident?.mass}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#aaa] text-sm">Skin Color :</p>
              <p>{resident?.skin_color}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#aaa] text-sm">Birth year :</p>
              <p>{resident?.birth_year}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#aaa] text-sm">Gender :</p>
              <p>{resident?.gender}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#aaa] text-sm">Birth date :</p>
              <p>{resident?.created?.slice(0, 10)}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Residents;
