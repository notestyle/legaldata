import React from "react";
export default function Topic() {
  return (
    <div className="w-full h-28 flex justify-between items-center gap-10 pt-36 pb-12 md:pt-36 md:pb-16 lg:pt-12 lg:pb-8">
      <div className="w-full h-0.5 bg-gradient-to-r from-white to-primary"></div>
      <div className=" font-bold text-primary text-lg text-center lg:min-w-fit">
        ЯАГААД МАНАЙ ҮЙЛЧИЛГЭЭГ
        <span className=" text-secondary text-lg mx-2">СОНГОХ ЁСТОЙ</span>
        ВЭ?
      </div>
      <div className=" w-full  h-0.5 bg-gradient-to-l from-white to-primary "></div>
    </div>
  );
}
