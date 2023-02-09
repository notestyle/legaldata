import React from "react";
import Image from "next/image";

export default function Feature() {
  return (
    <>
      <div className="flex justify-evenly relative">
        <div className="w-80 h-48 text-center bg-white rounded-xl flex flex-col justify-center items-center drop-shadow-lg mt-20 ">
          <div>
            <img
              className=" absolute bottom-36 right-[6.5rem]"
              src="/feature1.svg"
            />
          </div>
          <div className="w-72 text-primary text-xs font-semibold font-[Ubuntu]">
            Бид хэрэглэгчдийнхээ дунд явуулсан санал асуулгын
            үнэлгээндтулгуурлан, салбартаа хүлээн зөвшөөрөгдсөн хуульч, хуулийн
            фирмийн үнэлгээний эрэмбийг жил бүр гаргана.
          </div>
        </div>
        <div className="w-80 h-48 text-center bg-white rounded-xl flex flex-col justify-center items-center drop-shadow-lg mt-20 ">
          <div>
            <img
              className=" absolute bottom-36 right-[5.8rem]"
              src="/feature2.svg"
            />
          </div>
          <div className="w-72 text-primary text-xs font-semibold font-[Ubuntu]">
            Бид хэрэглэгчдийнхээ дунд явуулсан санал асуулгын
            үнэлгээндтулгуурлан, салбартаа хүлээн зөвшөөрөгдсөн хуульч, хуулийн
            фирмийн үнэлгээний эрэмбийг жил бүр гаргана.
          </div>
        </div>
        <div className="w-80 h-48 text-center bg-white rounded-xl flex flex-col justify-center items-center drop-shadow-lg mt-20 ">
          <div>
            <img
              className=" absolute bottom-36 right-[6.5rem]"
              src="/feature3.svg"
            />
          </div>
          <div className="w-72 text-primary text-xs font-semibold font-[Ubuntu]">
            Бид хэрэглэгчдийнхээ дунд явуулсан санал асуулгын
            үнэлгээндтулгуурлан, салбартаа хүлээн зөвшөөрөгдсөн хуульч, хуулийн
            фирмийн үнэлгээний эрэмбийг жил бүр гаргана.
          </div>
        </div>
      </div>
    </>
  );
}
