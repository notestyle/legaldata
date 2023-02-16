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

export default function TopFarm() {
  return (
    <div className="w-full">
      <div className="text-xl font-bold ">2024 оны шилдэг 4 хуулийн фирм</div>
      <div className="w-20 h-0.5 bg-secondary mt-2"></div>
      <div className="flex flex-col md:flex-row w-full gap-6 mt-5 overflow-x-auto">
        {farmLlist.map((row, i) => (
          <FarmCard key={i} org={row} />
        ))}
      </div>
    </div>
  );
}
