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

export default function RecommendFarm() {
  return (
    <div className="w-full lg:w-[22rem] h-fit py-4 border-[1pxssss] border-gray bg-white rounded-md my-4 lg:sticky lg:top-[10rem] ">
      <div className=" pl-2">
        <div className="font-[Ubuntu] font-extrabold text-xl pl-5 ">
          Онцлох хуулийн фирм
        </div>
        <div className="bg-secondary w-20 h-0.5 mt-1 mx-5"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-8 lg:px-0 lg:flex lg:flex-col items-center">
        {farmLlist.map((row, i) => (
          <div
            key={i}
            className=" w-[18.3rem] h-24 rounded-md border border-gray bg-[#fff] flex items-center py-4 mt-5 gap-3"
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
      <div className="flex justify-center pt-5">
        <button className="w-[18.4rem] h-10 bg-[#EF233C] rounded-md text-[#EDF2F4] font-[Ubuntu] font-semibold text-sm drop-shadow-2xl">
          Бүх хуулийн фирм харах
        </button>
      </div>
    </div>
  );
}
