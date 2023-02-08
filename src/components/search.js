import React from "react";

export default function Search() {
  return (
    <>
      <div className="w-full h-28 flex justify-evenly items-center gap-10">
        <div className="w-1/4 h-0.5 bg-gradient-to-r from-white to-primary"></div>
        <div className="flex font-bold text-primary text-lg gap-3">
          <h1>Танд тохирох</h1>
          <p className=" text-secondary text-lg">ХУУЛЬЧ,ХУУЛИЙН ФИРМИЙГ</p>
          <h1>олоорой</h1>
        </div>
        <div className=" w-1/4  h-0.5 bg-gradient-to-l from-white to-primary "></div>
      </div>
      <div className="flex justify-center bg-white1">
        <div className=" w-[88.5rem] h-14 border-2 border-gray rounded-md flex items-center font-semibold bg-white1">
          <input
            type="text"
            className=" w-[25.625rem] h-[3.2rem]  bg-white1 placeholder:pl-1 pl-4 outline-none"
            placeholder="Нэрээр хайх"
          ></input>
          <select className="bg-white1 h-10 border-l-[0.1rem] w-64 ">
            <option>Байршил</option>
            <option>Улаанбаатар</option>
            <option>Сүхбаатар аймаг</option>
          </select>
          <select className="bg-white1 h-10 border-l-[0.1rem] w-72 ">
            <option>Мэргэшсэн салбар</option>
            <option>Улаанбаатар</option>
            <option>Сүхбаатар аймаг</option>
          </select>
          <select className="bg-white1 h-10 border-l-[0.1rem] w-64 ">
            <option>Төрөл</option>
            <option>Улаанбаатар</option>
            <option>Сүхбаатар аймаг</option>
          </select>
          <button className=" w-[12.8rem] bg-secondary rounded-lg p-4 px-[4.8  rem] text-white">
            Хайх
          </button>
        </div>
      </div>
    </>
  );
}
