import React from "react";
import Image from "next/image";

export default function Feature() {
  return (
    <>
      <div className="flex justify-evenly">
        <div className="w-80 h-48 text-center bg-white rounded-xl flex flex-col justify-center items-center drop-shadow-lg mt-20 ">
          <div>
            <img src="/feature1.svg" />
          </div>
          <div className="w-72 text-primary text-xs font-semibold font-[Ubuntu]">
            Бид хэрэглэгчдийнхээ дунд явуулсан санал асуулгын
            үнэлгээндтулгуурлан, салбартаа хүлээн зөвшөөрөгдсөн хуульч, хуулийн
            фирмийн үнэлгээний эрэмбийг жил бүр гаргана.
          </div>
        </div>
        <div className="w-80 h-48 text-center bg-white rounded-xl flex flex-col justify-center items-center drop-shadow-lg mt-20 ">
          <div>
            <img src="/feature2.svg" />
          </div>
          <div className="w-72 text-primary text-xs font-semibold font-[Ubuntu]">
            Бид хэрэглэгчдийнхээ дунд явуулсан санал асуулгын
            үнэлгээндтулгуурлан, салбартаа хүлээн зөвшөөрөгдсөн хуульч, хуулийн
            фирмийн үнэлгээний эрэмбийг жил бүр гаргана.
          </div>
        </div>
        <div className="w-80 h-48 text-center bg-white rounded-xl flex flex-col justify-center items-center drop-shadow-lg mt-20 ">
          <div>
            <img src="/feature3.svg" />
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
