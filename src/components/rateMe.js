import React from "react";
import Image from "next/image";
import Star from "./stars";

export default function RateMe() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="bg-white flex flex-col items-center w-[30rem] h-[25rem] px-4 rounded-xl relative">
          <div className="flex justify-center ">
            <Image
              src="/images/social/user-profile.svg"
              alt="user-profile"
              className="w-28 h-28 rounded-full absolute -translate-y-1/2"
              width={100}
              height={100}
            />
          </div>
          <div className="flex items-center gap-3 pl-6 pt-14">
            <div className="font-bold font-[Ubuntu]"> User Name </div>
            <Image
              src="/images/icons/verified.svg"
              alt="user-profile"
              className="w-4 h-4 "
              width={100}
              height={100}
            />
          </div>
          <Star />
          <div className="flex gap-3 pt-6 w-full">
            <input
              type="text"
              className=" w-full rounded  bg-[#EDEDED] placeholder:pl-4 outline-none"
              placeholder="И-мэйл*"
            ></input>
            <select className="w-full bg-[#EDEDED]  rounded outline-none ">
              <option>Хэрэглэгчийн төрөл*</option>
              <option>Шүүгч</option>
              <option>Өмгөөлөгч</option>
            </select>
          </div>
          <div className="flex gap-3 pt-4 w-full">
            <input
              type="text"
              className=" w-full rounded  bg-[#EDEDED] placeholder:pl-4 outline-none"
              placeholder="Овог*"
            ></input>
            <input
              type="text"
              className=" w-full rounded  bg-[#EDEDED] placeholder:pl-4 outline-none"
              placeholder="Нэр*"
            ></input>
          </div>
          <div className="text-sm italic py-3">
            Энэ хуулийн фирм/өмгөөлөгч/хуульчаас хууль зүйн зөвлөгөө, үйлчилгээ
            авсан талаарх санал, сэтгэгдлээ хуваалцана уу. Өөрийн хэргийн тухайн
            дэлгэрэнгүй мэдээлэл болон хувийн мэдээллээ дэлгэж болохгүй.
          </div>
          <div>
            <input
              type="text"
              className=" w-[28rem] h-12 rounded  bg-[#EDEDED] placeholder: pl-2 text-sm outline-none"
              placeholder="Сэтгэгдэл*"
            ></input>
          </div>
          <div className=" flex pt-3 gap-3">
            <input type="checkbox" checked></input>
            <div> Өөрийн нэрийг нийтэд харагдуулахгүй байх </div>
          </div>
          <div className="w-full flex justify-center pt-2">
            <button className="w-60 h-10 bg-[#EF233C] rounded-xl text-[#EDF2F4] font-[Ubuntu] font-semibold text-sm drop-shadow-md">
              Үнэлгээ өгөх
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
