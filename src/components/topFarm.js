import React from "react";
import Image from "next/image";

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
    <div className="w-full overflow-x-scroll">
      <div className="text-xl font-bold mt-9">
        2024 оны шилдэг 4 хуулийн фирм{" "}
      </div>
      <div className="w-20 h-0.5 bg-secondary mt-2"></div>
      <div className="flex gap-6 mt-5">
        {farmLlist.map((row, i) => (
          <div
            key={i}
            className=" w-[21rem] h-24 rounded-md border border-gray bg-[#fff] flex items-center py-4 gap-3"
          >
            <Image
              className="w-[4.3rem] h-16 pl-1 rounded-xl"
              src={row.img}
              alt="farm"
              width={100}
              height={100}
            />
            <div>
              <div className=" text-sm font-bold text-primary">{row.name}</div>
              <div className=" text-xs">{row.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
