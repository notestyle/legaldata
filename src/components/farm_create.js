import React from "react";
import Image from "next/image";

export default function Farm_create() {
  return (
    <>
      <div className="w-full lg:w-[28rem] my-8 sticky top-28 self-start ">
        <div>
          <div className="relative">
            <div className="absolute bottom-0 right-0 p-3">
              <Image
                src="/images/icons/camera.svg"
                className=" w-full"
                alt="facebook"
                width={100}
                height={80}
              />
            </div>
            <Image
              src="/images/profiles/farm_create_cover.jpg"
              className=" w-full rounded-2xl"
              alt="facebook"
              width={100}
              height={80}
            />
          </div>
          <div className="flex pl-2 pt-3 gap-5">
            <div className=" w-28 h-20 relative">
              <div className="absolute bottom-3 right-0 p-3 z-10">
                <Image
                  src="/images/icons/camera.svg"
                  className=" w-full"
                  alt="facebook"
                  width={100}
                  height={80}
                />
              </div>
              <Image
                src="/images/profiles/create_farm.svg"
                className=" w-full absolute -translate-y-1/2"
                alt="facebook"
                width={100}
                height={80}
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-white border border-gray rounded-lg">
          <div className="px-5 pt-4">
            <div className="font-bold ">Хуулийн фирмийн нэр*</div>
            <div className="flex">
              <div>
                <input
                  type="text"
                  className="input text-sm w-20"
                  placeholder="Энд бич..."
                ></input>
              </div>
              <div>
                <select className="bg-white h-10 outline-none ">
                  <option>Байршил</option>
                  <option>Улаанбаатар</option>
                  <option>Сүхбаатар аймаг</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
