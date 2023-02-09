import React from "react";

export default function Search() {
  return (
    <>
      <div className="w-full px-52 h-28 flex justify-between items-center gap-10 bg-white1">
        <div className="w-1/4 h-0.5 bg-gradient-to-r from-white to-primary"></div>
        <div className="flex font-bold text-primary text-lg gap-3">
          <h1>Танд тохирох</h1>
          <p className=" text-secondary text-lg">ХУУЛЬЧ,ХУУЛИЙН ФИРМИЙГ</p>
          <h1>олоорой</h1>
        </div>
        <div className=" w-1/4  h-0.5 bg-gradient-to-l from-white to-primary "></div>
      </div>
      <div className="w-screen h-full sticky top-20 z-20 flex justify-center bg-white1">
        <div className="flex justify-center  px-52">
          <div className=" w-full h-14 border-2 border-gray rounded-md gap-4 flex items-center font-semibold bg-white">
            <input
              type="text"
              className=" w-full h-[3.2rem]  bg-white placeholder:pl-1 pl-4 outline-none"
              placeholder="Нэрээр хайх"
            ></input>
            <div className="h-2/3 w-[1px] bg-primary"></div>
            <select className="bg-white h-10 w-96 outline-none ">
              <option>Байршил</option>
              <option>Улаанбаатар</option>
              <option>Сүхбаатар аймаг</option>
            </select>
            <div className="h-2/3 w-[1px] bg-primary"></div>
            <select className="bg-white h-10 w-96 outline-none ">
              <option>Мэргэшсэн салбар</option>
              <option>Өмгөөлөгч</option>
              <option>Шүүгч</option>
            </select>
            <div className="h-2/3 w-[1px] bg-primary"></div>
            <select className=" h-10 w-96 outline-none ">
              <option>Төрөл</option>
              <option>Эрүү</option>
              <option>Залилан</option>
            </select>
            <button className="h-full w-[12.8rem] bg-secondary rounded-lg p-4 px-[4.8rem] text-white">
              Хайх
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
