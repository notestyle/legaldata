import React from "react";
import Image from "next/image";

export default function New() {
  return (
    <>
      <div className="w-80 h-96 flex flex-col gap-3">
        <div className="flex w-full gap-5">
          <input
            type="text"
            className=" w-[9.4rem] h-11  text-sm rounded-lg bg-white placeholder:pl-3 border border-gray"
            placeholder="Нэр"
          ></input>
          <input
            type="text"
            className=" w-[9.4rem] h-11  text-sm rounded-lg bg-white placeholder:pl-3 border border-gray"
            placeholder="Овог"
          ></input>
        </div>
        <div>
          <input
            type="text"
            className=" w-full h-11  text-sm rounded-lg bg-white placeholder:pl-3 border border-gray"
            placeholder="И-мэйл хаяг "
          ></input>
        </div>
        <div>
          <input
            type="text"
            className=" w-full h-11  text-sm rounded-lg bg-white placeholder:pl-3 border border-gray"
            placeholder="Нууц үг "
          ></input>
        </div>
        <div>
          <input
            type="text"
            className=" w-full h-11  text-sm rounded-lg bg-white placeholder:pl-3 border border-gray"
            placeholder="Нууц үг давт "
          ></input>
        </div>
        <div className="flex pt-6 flex-col gap-2">
          <div className="font-semibold text-sm text-[#262F56] font-[Ubuntu]">
            Төрсөн огноо
          </div>
          <div className="flex justify-between">
            <select className="bg-white h-10 w-24 rounded-xl border border-gray  outline-none ">
              <option>10 сар</option>
              <option>11 сар</option>
              <option>12 сар</option>
            </select>
            <select className="bg-white h-10 w-24 rounded-xl border border-gray  outline-none ">
              <option>10 сар</option>
              <option>11 сар</option>
              <option>12 сар</option>
            </select>
            <select className="bg-white h-10 w-24 rounded-xl border border-gray  outline-none ">
              <option>10 сар</option>
              <option>11 сар</option>
              <option>12 сар</option>
            </select>
          </div>
        </div>
        <div className="flex pt-6 flex-col gap-2">
          <div className="font-semibold text-sm text-[#262F56] font-[Ubuntu]">
            Хүйс
          </div>
          <div className="flex justify-between">
            <button className="bg-white h-10 w-24 text-secondary rounded-xl border border-secondary">
              Эмэгтэй
            </button>
            <button className="bg-white h-10 w-24 rounded-xl border border-gray">
              Эрэгтэй
            </button>
            <button className="bg-white h-10 w-24 rounded-xl border border-gray">
              Хамаагүй
            </button>
          </div>
        </div>

        <div className="flex justify-center pt-5">
          <button className="w-60 h-10 bg-[#EF233C] rounded-xl text-[#EDF2F4] font-[Ubuntu] font-semibold text-sm shadow-md shadow-secondary">
            Бүртгэл үүсгэх
          </button>
        </div>
      </div>
    </>
  );
}
