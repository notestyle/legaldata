import React, { useState } from "react";
import Image from "next/image";
import Star from "../inputs/stars";

export default function RateMe({ show, setShow }) {
  const [rating, setRating] = useState(3.5);

  return (
    <>
      {show ? (
        <>
          <div
            className="w-screen h-screen cursor-pointer bg-white bg-opacity-20 backdrop-blur-sm z-40 flex items-center justify-center fixed left-0 top-0"
            onClick={() => {
              console.log(show);
              setShow(false);
            }}
          ></div>
          <div className="z-40 flex items-center justify-center fixed transform left-[calc(50%-15rem)] top-[calc(50%-18rem)]">
            <div className="bg-white flex flex-col items-center w-[30rem] px-4 rounded-xl relative shadow">
              <div className="flex justify-center ">
                <div className="w-32 h-32 rounded-full bg-white absolute -translate-y-1/2"></div>
                <Image
                  src="/images/profiles/rate.jpg"
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
              <Star value={rating} setValue={setRating} />
              <div className="flex gap-3 pt-6 w-full">
                <input
                  type="text"
                  className="input"
                  placeholder="И-мэйл*"
                ></input>
                <select className="input ">
                  <option>Хэрэглэгчийн төрөл*</option>
                  <option>Шүүгч</option>
                  <option>Өмгөөлөгч</option>
                </select>
              </div>
              <div className="flex gap-3 pt-4 w-full">
                <input
                  type="text"
                  className="input"
                  placeholder="Овог*"
                ></input>
                <input type="text" className="input" placeholder="Нэр*"></input>
              </div>
              <div className="text-sm italic py-3">
                Энэ хуулийн фирм/өмгөөлөгч/хуульчаас хууль зүйн зөвлөгөө,
                үйлчилгээ авсан талаарх санал, сэтгэгдлээ хуваалцана уу. Өөрийн
                хэргийн тухайн дэлгэрэнгүй мэдээлэл болон хувийн мэдээллээ
                дэлгэж болохгүй.
              </div>
              <div>
                <textarea
                  className="input"
                  id="Сэтгэгдэл"
                  name="."
                  rows="4"
                  cols="50"
                  placeholder="Сэтгэгдэл"
                ></textarea>
              </div>
              <div className=" flex pt-3 gap-3 mb-12 w-full">
                <input type="checkbox" className="checkbox"></input>
                <div> Өөрийн нэрийг нийтэд харагдуулахгүй байх </div>
              </div>

              <button className="w-60 h-10 bg-[#EF233C] rounded-xl text-[#EDF2F4] font-[Ubuntu] font-semibold text-sm drop-shadow-md absolute -bottom-4">
                Үнэлгээ өгөх
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
