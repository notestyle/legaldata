import React from "react";

const categoryList = [
  {
    name: "Бүгд",
    total: 2400,
    value: "all",
  },
  {
    name: "Хуулийн фирм",
    total: 2400,
    value: "all",
  },
  {
    name: "Шүүгч",
    total: 2400,
    value: "all",
  },
  {
    name: "Прокурор",
    total: 2400,
    value: "all",
  },
  {
    name: "Өмгөөлөгч",
    total: 2400,
    value: "all",
  },
  {
    name: "Хуульч",
    total: 2400,
    value: "all",
  },
  {
    name: "Байгууллага",
    total: 2400,
    value: "all",
  },
  {
    name: "Арбитч",
    total: 2400,
    value: "all",
  },
  {
    name: "Нотариат",
    total: 2400,
    value: "all",
  },
  {
    name: "Судлаач",
    total: 2400,
    value: "all",
  },
  {
    name: "Junior",
    total: 2400,
    value: "all",
  },
  {
    name: "Шинжээч",
    total: 2400,
    value: "all",
  },
];

export default function Sort() {
  return (
    <>
      <div className="lg:hidden mt-4">
        <div className="flex w-full gap-2">
          <select className="bg-white h-10 w-60 outline-none rounded-md shadow ">
            <option>Байршил</option>
            <option>Улаанбаатар</option>
            <option>Сүхбаатар аймаг</option>
          </select>
          <select className="bg-white h-10 w-60 outline-none rounded-md shadow ">
            <option>Мэрэгшсэн салбар</option>
            <option>2022</option>
            <option>2023</option>
          </select>
          <select className="bg-white h-10 w-60 outline-none rounded-md shadow ">
            <option>Он</option>
            <option>2022</option>
            <option>2023</option>
          </select>
        </div>
        <div className="flex overflow-x-auto gap-2 mt-4">
          {categoryList.map((row, i) => (
            <button
              key={i}
              className="px-2 py-1 flex gap-2 bg-secondary rounded-full text-white h-8"
            >
              {row.name} <span>{row.total}</span>
            </button>
          ))}
        </div>
      </div>

      <div className=" flex-col py-6 gap-3 w-80 hidden lg:flex">
        <div className=" flex flex-col justify-center w-72 h-24 bg-white border border-gray gap-1 rounded-md">
          <div className="font-[Ubuntu] font-bold pl-6">Байршил</div>
          <div className="flex justify-center">
            <select className="bg-white1 h-10 w-60 outline-none rounded-md shadow ">
              <option>Бүгд</option>
              <option>Улаанбаатар</option>
              <option>Сүхбаатар аймаг</option>
            </select>
          </div>
        </div>
        <div>
          <div className=" flex flex-col justify-center w-72 h-24 bg-white border border-gray gap-1 rounded-md">
            <div className="font-[Ubuntu] font-bold pl-6">Мэргэшсэн салбар</div>
            <div className="flex justify-center">
              <select className="bg-white1 h-10 w-60 outline-none rounded-md shadow ">
                <option>Бүгд</option>
                <option>Өмгөөлөгч</option>
                <option>Шүүгч</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex flex-col justify-center w-72 h-24 bg-white border border-gray gap-1 rounded-md">
            <div className="font-[Ubuntu] font-bold pl-6">Он</div>
            <div className="flex justify-center">
              <select className="bg-white1 h-10 w-60 outline-none rounded-md shadow ">
                <option>Бүгд</option>
                <option>2022</option>
                <option>2023</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-72 py-4 flex flex-col gap-2 bg-white border border-gray rounded-md px-4">
          <div className="pt-3 font-bold mb-2">Төрөл</div>
          {categoryList.map((row, i) => (
            <div key={i} className="w-full flex justify-between">
              <div>{row.name}</div>
              <div>{row.total}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
