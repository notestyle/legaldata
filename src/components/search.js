import React from "react";

export default function Search() {
  return (
    <>
      <div className="w-full h-28 flex justify-center items-center gap-10">
        <div className="w-1/4 h-0.5 bg-gradient-to-r from-white to-primary"></div>
        <div className="flex gap-2 font-bold text-primary text-lg">
          Танд тохирох
          <p className="text-secondary text-lg">ХУУЛЬЧ,ХУУЛИЙН ФИРМИЙГ</p>
          олоорой
        </div>
        <div className=" w-1/4  h-0.5 bg-gradient-to-l from-white to-primary "></div>
      </div>
      <div className="flex justify-center">
        <div className=" w-[90rem] h-14 border-2 border-gray rounded-md flex items-center font-semibold">
          <input
            type="text"
            className=" w-[25.625rem] h-[3.2rem]  bg-white placeholder:pl-1 pl-4  "
            placeholder="Нэрээр хайх"
          ></input>
          <select>
            <option>Байршил</option>
            <option>Улаанбаатар</option>
            <option>Сүхбаатар аймаг</option>
          </select>
          <button className="p-4 pr-28 border-l flex items-center ">
            Мэргэшсэн салбар
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <button className="p-4 pr-44 border-l flex items-center ">
            Төрөл
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <button className=" w-[11.8rem] bg-secondary rounded-lg p-4 px-[4.8  rem] text-white">
            Хайх
          </button>
        </div>
      </div>
    </>
  );
}
