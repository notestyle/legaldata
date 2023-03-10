import React from "react";
import Image from "next/image";
import Language from "./inputs/language";

export default function Person_create_detail() {
  return (
    <>
      <div className="w-full my-8 p-7  bg-white border border-gray rounded-xl">
        <div className="flex items-center relative justify-between">
          <Language />
          <button className="bg-[#0EAC4D] h-12 py-2 px-8 rounded-xl text-white font-bold ">
            Хадгалах
          </button>
        </div>

        <div className="w-full h-0.5 bg-gray my-7"></div>
        <div className="">
          <div className="font-bold text-sm font-[Ubuntu]">Миний тухай*</div>
          <div className="w-14 h-0.5 bg-secondary mt-1 mb-4"></div>
          <div>
            <textarea
              className="input h-20 font-semibold"
              id="about"
              name="."
              rows="4"
              cols="30"
              placeholder="Энд бич..."
            ></textarea>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="font-bold text-sm font-[Ubuntu]">Боловсрол</div>
            <div className="w-14 h-0.5 bg-secondary mt-1"></div>
          </div>
          <button className="bg-[#0EAC4D] w-9 h-9 rounded-lg text-white font-bold text-2xl flex justify-center">
            +
          </button>
        </div>
        <div className="flex pt-3 gap-4">
          <div>
            <select className=" font-semibold w-16 h-9 bg-white1 border border-gray rounded-md outline-none ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>

          <input
            type="text"
            className=" font-semibold w-full h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Энд бич..."
          ></input>

          <div className="w-12 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="trash"
              width={100}
              height={80}
            />
          </div>
        </div>
        <div className="flex pt-3 gap-4">
          <div>
            <select className=" font-semibold w-16 h-9 bg-white1 border border-gray rounded-md outline-none ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>

          <input
            type="text"
            className=" font-semibold w-full h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Энд бич..."
          ></input>

          <div className="w-12 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="trash"
              width={100}
              height={80}
            />
          </div>
        </div>
        <div className="flex pt-3 gap-4">
          <div>
            <select className=" font-semibold w-16 h-9 bg-white1 border border-gray rounded-md outline-none ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>

          <input
            type="text"
            className=" font-semibold w-full h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Энд бич..."
          ></input>

          <div className="w-12 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="trash"
              width={100}
              height={80}
            />
          </div>
        </div>
        <div className="flex justify-between pt-4">
          <div>
            <div className="font-bold text-sm font-[Ubuntu]">
              Ажлын туршлага
            </div>
            <div className="w-14 h-0.5 bg-secondary mt-1 m  4"></div>
          </div>
          <button className="bg-[#0EAC4D] w-9 h-9 rounded-lg text-white font-bold text-2xl flex justify-center">
            +
          </button>
        </div>
        <div className="flex pt-3 gap-4">
          <div>
            <select className=" font-semibold w-16 h-9 bg-white1 border border-gray rounded-md outline-none ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>

          <input
            type="text"
            className=" font-semibold w-full h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Энд бич..."
          ></input>

          <div className="w-12 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="trash"
              width={100}
              height={80}
            />
          </div>
        </div>
        <div className="flex pt-3 gap-4">
          <div>
            <select className=" font-semibold w-16 h-9 bg-white1 border border-gray rounded-md outline-none ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>

          <input
            type="text"
            className=" font-semibold w-full h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Энд бич..."
          ></input>

          <div className="w-12 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="trash"
              width={100}
              height={80}
            />
          </div>
        </div>
        <div className="flex pt-3 gap-4">
          <div>
            <select className=" font-semibold w-16 h-9 bg-white1 border border-gray rounded-md outline-none ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>

          <input
            type="text"
            className=" font-semibold w-full h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Энд бич..."
          ></input>

          <div className="w-12 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="trash"
              width={100}
              height={80}
            />
          </div>
        </div>
        <div className="pt-10">
          <div className="font-bold text-sm font-[Ubuntu]">
            Сонгуульт ажил & Гишүүнчлэл
          </div>
          <div className="w-14 h-0.5 bg-secondary mt-1 mb-4"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 justify-between">
          <input
            type="text"
            className=" font-semibold w-full lg:w-1/3 h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Сонгуульт ажил"
          ></input>
          <input
            type="text"
            className=" font-semibold w-full lg:w-1/3 h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Сонгуульт ажил 2"
          ></input>
          <input
            type="text"
            className=" font-semibold w-full lg:w-1/3 h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Сонгуульт ажил 3"
          ></input>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 justify-between py-4">
          <input
            type="text"
            className=" font-semibold w-full lg:w-1/3 h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Гишүүнчлэл 1"
          ></input>
          <input
            type="text"
            className=" font-semibold w-full lg:w-1/3 h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Гишүүнчлэл 2"
          ></input>
          <input
            type="text"
            className=" font-semibold w-full lg:w-1/3 h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Гишүүнчлэл 3"
          ></input>
        </div>
        <div className="pt-10">
          <div className="font-bold text-sm font-[Ubuntu]">
            Ур чадвар & Хобби
          </div>
          <div className="w-14 h-0.5 bg-secondary mt-1 mb-4"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 justify-between">
          <input
            type="text"
            className=" font-semibold w-full lg:w-1/3 h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Ур чадвар 1*"
          ></input>
          <input
            type="text"
            className=" font-semibold w-full lg:w-1/3 h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Ур чадвар 2"
          ></input>
          <input
            type="text"
            className=" font-semibold w-full lg:w-1/3 h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Ур чадвар 3"
          ></input>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 justify-between py-4">
          <input
            type="text"
            className=" font-semibold w-full lg:w-1/3 h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Хобби 1*"
          ></input>
          <input
            type="text"
            className=" font-semibold w-full lg:w-1/3 h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Хобби 2"
          ></input>
          <input
            type="text"
            className=" font-semibold w-full lg:w-1/3 h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Хобби 3"
          ></input>
        </div>
        <div className="py-5">
          <div className="font-bold text-sm font-[Ubuntu]">Тодорхойлолт</div>
          <div className="w-14 h-0.5 bg-secondary mt-1 mb-4"></div>
          <div>
            <textarea
              className="input h-20 font-semibold"
              id="about"
              name="."
              rows="4"
              cols="30"
              placeholder="Энд бич..."
            ></textarea>
          </div>
        </div>
        <div>
          <div className="font-bold text-sm font-[Ubuntu]">Бүтээл</div>
          <div className="w-14 h-0.5 bg-secondary mt-1 mb-4"></div>
        </div>
        <div className="flex pt-3 gap-4 w-full">
          <div>
            <select className=" font-semibold w-16 h-9 bg-white1 border border-gray rounded-md outline-none ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>

          <input
            type="text"
            className=" font-semibold w-full h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Энд бич..."
          ></input>

          <div className="w-12 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="trash"
              width={100}
              height={80}
            />
          </div>
        </div>
        <div className="flex pt-3 gap-4 w-full">
          <div>
            <select className=" font-semibold w-16 h-9 bg-white1 border border-gray rounded-md outline-none ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>

          <input
            type="text"
            className=" font-semibold w-full h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Энд бич..."
          ></input>

          <div className="w-12 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="trash"
              width={100}
              height={80}
            />
          </div>
        </div>
        <div className="flex py-4 gap-4 w-full">
          <div>
            <select className=" font-semibold w-16 h-9 bg-white1 border border-gray rounded-md outline-none ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>

          <input
            type="text"
            className=" font-semibold w-full h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Энд бич..."
          ></input>

          <div className="w-12 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="trash"
              width={100}
              height={80}
            />
          </div>
        </div>
      </div>
    </>
  );
}
