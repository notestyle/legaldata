import React from "react";
export default function Topic() {
  return (
    <div className="w-full h-28 flex justify-evenly items-center gap-10">
      <div className="w-1/4 h-0.5 bg-gradient-to-r from-white to-primary"></div>
      <div className="flex font-bold text-primary text-lg gap-3">
        <h1>Танд тохирох</h1>
        <p className=" text-secondary text-lg">ХУУЛЬЧ,ХУУЛИЙН ФИРМИЙГ</p>
        <h1>олоорой</h1>
      </div>
      <div className=" w-1/4  h-0.5 bg-gradient-to-l from-white to-primary "></div>
    </div>
  );
}
