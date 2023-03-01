import React from "react";
import Image from "next/image";

export default function Person_create_detail() {
  return (
    <>
      <div className="w-[56.5rem] my-8 px-7 bg-white border border-gray rounded-xl">
        <div className="flex items-center relative">
          <div className=" w-80 h-12 border my-5 border-gray rounded-xl shadow-md flex gap-3 justify-center items-center">
            <div>
              <Image
                src="/images/icons/mongolia.svg"
                className=" w-12 h-8"
                alt="facebook"
                width={100}
                height={80}
              />
            </div>
            <div className="font-bold">Монгол хэл дээрх</div>
          </div>
          <div className=" w-80 h-12 border my-5 border-secondary border-l-0 rounded-xl shadow-md flex gap-5 justify-center items-center absolute right-60">
            <div className="text-gray">
              <Image
                src="/images/icons/english.svg"
                className="w-12 h-8 opacity-25"
                alt="facebook"
                width={100}
                height={80}
              />
            </div>
            <div className="font-bold text-gray">English</div>
          </div>
          <button className="bg-[#0EAC4D] h-12 py-2 px-8 rounded-xl text-white font-bold absolute right-10">
            Хадаглах
          </button>
        </div>
        <div className="w-full h-0.5 bg-gray"></div>
        <div className="py-5">
          <div className="font-bold text-sm font-[Ubuntu]">Миний тухай*</div>
          <div className="w-14 h-0.5 bg-secondary mt-1 mb-4"></div>
          <div>
            <textarea
              className="input h-20"
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
            <div className="w-14 h-0.5 bg-secondary mt-1 mb-4"></div>
          </div>
          <button className="bg-[#0EAC4D] w-9 h-9 rounded-lg text-white font-bold text-2xl flex justify-center">
            +
          </button>
        </div>
        <div className="flex pt-3 gap-7">
          <div>
            <select className=" font-semibold w-32 h-9 bg-white1 border border-gray rounded-md outline-none ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>
          <div className="font-bold text-xl w-2">-</div>
          <div>
            <select className=" font-semibold w-32 h-9 bg-white1 border border-gray rounded-md outline-none ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              className=" text-sm w-[435px] h-9 bg-white1 border border-gray rounded-md placeholder:pl-3 outline-none"
              placeholder="Энд бич..."
            ></input>
          </div>
          <div className="w-9 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="facebook"
              width={100}
              height={80}
            />
          </div>
        </div>
        <div className="flex pt-3 gap-7">
          <div>
            <select className=" font-semibold w-32 h-9 bg-white1 border border-gray rounded-md outline-none ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>
          <div className="font-bold text-xl w-2">-</div>
          <div>
            <select className=" font-semibold w-32 h-9 bg-white1 border border-gray rounded-md outline-none ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              className=" text-sm w-[435px] h-9 bg-white1 border border-gray rounded-md placeholder:pl-3 outline-none"
              placeholder="Энд бич..."
            ></input>
          </div>
          <div className="w-9 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="facebook"
              width={100}
              height={80}
            />
          </div>
        </div>
        <div className="flex pt-3 gap-7">
          <div>
            <select className=" font-semibold w-32 h-9 bg-white1 border border-gray rounded-md outline-none ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>
          <div className="font-bold text-xl w-2">-</div>
          <div>
            <select className=" font-semibold w-32 h-9 bg-white1 border border-gray rounded-md outline-none ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              className=" text-sm w-[435px] h-9 bg-white1 border border-gray rounded-md placeholder:pl-3 outline-none"
              placeholder="Энд бич..."
            ></input>
          </div>
          <div className="w-9 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="facebook"
              width={100}
              height={80}
            />
          </div>
        </div>
        <div className="pt-10">
          <div className="font-bold text-sm font-[Ubuntu]">
            Ур чадвар & Хобби
          </div>
          <div className="w-14 h-0.5 bg-secondary mt-1 mb-4"></div>
        </div>
        <div className="flex justify-between">
          <input
            type="text"
            className=" text-sm w-[236px] h-9 bg-white1 border border-gray rounded-md placeholder:pl-3 outline-none"
            placeholder="Ур чадвар 1*"
          ></input>
          <input
            type="text"
            className=" text-sm w-[236px] h-9 bg-white1 border border-gray rounded-md placeholder:pl-3 outline-none"
            placeholder="Ур чадвар 2"
          ></input>
          <input
            type="text"
            className=" text-sm w-[236px] h-9 bg-white1 border border-gray rounded-md placeholder:pl-3 outline-none"
            placeholder="Ур чадвар 3"
          ></input>
        </div>
        <div className="flex justify-between py-4">
          <input
            type="text"
            className=" text-sm w-[236px] h-9 bg-white1 border border-gray rounded-md placeholder:pl-3 outline-none"
            placeholder="Хобби 1*"
          ></input>
          <input
            type="text"
            className=" text-sm w-[236px] h-9 bg-white1 border border-gray rounded-md placeholder:pl-3 outline-none"
            placeholder="Хобби 2"
          ></input>
          <input
            type="text"
            className=" text-sm w-[236px] h-9 bg-white1 border border-gray rounded-md placeholder:pl-3 outline-none"
            placeholder="Хобби 3"
          ></input>
        </div>
        <div className="py-5">
          <div className="font-bold text-sm font-[Ubuntu]">Тодорхойлолт</div>
          <div className="w-14 h-0.5 bg-secondary mt-1 mb-4"></div>
          <div>
            <textarea
              className="input h-20"
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
        <div className="flex pt-3 gap-7">
          <div>
            <select className=" font-semibold w-32 h-9 bg-white1 border border-gray rounded-md outline-none ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              className=" text-sm w-[625px] h-9 bg-white1 border border-gray rounded-md placeholder:pl-3 outline-none"
              placeholder="Энд бич..."
            ></input>
          </div>
          <div className="w-9 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="facebook"
              width={100}
              height={80}
            />
          </div>
        </div>
        <div className="flex pt-3 gap-7">
          <div>
            <select className=" font-semibold w-32 h-9 bg-white1 border border-gray rounded-md outline-none ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              className=" text-sm w-[625px] h-9 bg-white1 border border-gray rounded-md placeholder:pl-3 outline-none"
              placeholder="Энд бич..."
            ></input>
          </div>
          <div className="w-9 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="facebook"
              width={100}
              height={80}
            />
          </div>
        </div>
        <div className="flex py-4 gap-7">
          <div>
            <select className=" font-semibold w-32 h-9 bg-white1 border border-gray rounded-md outline-none ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              className=" text-sm w-[625px] h-9 bg-white1 border border-gray rounded-md placeholder:pl-3 outline-none"
              placeholder="Энд бич..."
            ></input>
          </div>
          <div className="w-9 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="facebook"
              width={100}
              height={80}
            />
          </div>
        </div>
      </div>
    </>
  );
}
