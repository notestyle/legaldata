import React from "react";

export default function Sort() {
  return (
    <>
      <div className="flex flex-col py-6 gap-3 w-80">
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
          {" "}
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
          {" "}
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
        <div className="w-72 h-[28rem] bg-white border border-gray rounded-md">
          <div className="pl-6 pt-3 font-[Ubuntu] font-bold">Төрөл</div>
        </div>
      </div>
    </>
  );
}
