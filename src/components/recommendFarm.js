import React from "react";
import Image from "next/image";
import FarmCard from "./farmCard";

const farmLlist = [
  {
    name: "Chaing Anders PLLC",
    desc: "An intuitive user interface for quickly generating lorem ipsum placeholder content and copy",
    img: "/images/farm/court.jpg",
  },
  {
    name: "Chaing Anders PLLC",
    desc: "An intuitive user interface for quickly generating lorem ipsum placeholder content and copy",
    img: "/images/farm/court.jpg",
  },
  {
    name: "Chaing Anders PLLC",
    desc: "An intuitive user interface for quickly generating lorem ipsum placeholder content and copy",
    img: "/images/farm/court.jpg",
  },
  {
    name: "Chaing Anders PLLC",
    desc: "An intuitive user interface for quickly generating lorem ipsum placeholder content and copy",
    img: "/images/farm/court.jpg",
  },
];

export default function RecommendFarm() {
  return (
    <div className="w-full lg:w-[22rem] h-fit py-4 px-4 border-[1pxssss] border-gray bg-white rounded-md my-4 lg:sticky lg:top-[10rem] ">
      <div className="font-[Ubuntu] font-extrabold text-xl ">
        Онцлох хуулийн фирм
      </div>
      <div className="bg-secondary w-20 h-0.5 mt-1"></div>

      <div className="grid grid-cols-1 mt-4 gap-2 md:grid-cols-2 px-8 lg:px-0 lg:flex lg:flex-col items-center">
        {farmLlist.map((row, i) => (
          <FarmCard org={row} key={i} />
        ))}
      </div>
      <div className="flex justify-center pt-5">
        <button className="w-[18.4rem] h-10 bg-[#EF233C] rounded-md text-[#EDF2F4] font-[Ubuntu] font-semibold text-sm drop-shadow-2xl">
          Бүх хуулийн фирм харах
        </button>
      </div>
    </div>
  );
}
