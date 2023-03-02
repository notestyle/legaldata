import React from "react";
import Image from "next/image";

export default function Feature() {
  return (
    <>
      <div className="flex justify-center md:justify-between gap-24 mt-20 flex-col md:flex-row w-full">
        <div className="w-full lg:w-96 h-full pt-20 lg:h-56 text-center bg-white rounded-xl flex flex-col justify-center items-center drop-shadow-lg relative">
          <div className="absolute w-32 h-32 rounded-full shadow-md bg-white flex items-center justify-center transform left-1/2  -translate-x-1/2 -top-1/3">
            <Image
              className=""
              src="/images/icons/feature1.svg"
              alt="feature"
              width={100}
              height={100}
            />
          </div>
          <div className="px-4 text-primary text-xs font-semibold font-[Ubuntu] h-full flex items-end pb-10">
            Бид хэрэглэгчдийнхээ дунд явуулсан санал асуулгын
            үнэлгээндтулгуурлан, салбартаа хүлээн зөвшөөрөгдсөн хуульч, хуулийн
            фирмийн үнэлгээний эрэмбийг жил бүр гаргана.
          </div>
        </div>
        <div className="w-full lg:w-96 h-full pt-20 lg:h-56 text-center relative bg-white rounded-xl flex flex-col justify-center items-center drop-shadow-lg  ">
          <div className="absolute w-36 h-36 shadow-md rounded-full bg-white flex items-center justify-center left-1/2 -translate-x-1/2 -top-20">
            <Image
              src="/images/icons/feature2.svg"
              alt="feature"
              width={100}
              height={100}
            />
          </div>
          <div className="px-4 text-primary text-xs font-semibold font-[Ubuntu] h-full flex items-end pb-10">
            Манай үйлчилгээ нь хуулийн салбарын мэргэжилтнүүд, судлаач, залуу
            хуульч, хуулийн оюутан, хуулийн фирмүүүдийн нарийвчилсан мэдээллийг
            шуурхай, хүртээмжэйгээр харуулах тул таныг гадаад, дотоодын боломжит
            үйлчлүүлэгч, харилцагчтай холбоход тусална.
          </div>
        </div>
        <div className="w-full lg:w-96 h-full pt-20 mt-[-20px] md:mt-0 lg:h-56 text-center bg-white rounded-xl flex flex-col justify-center items-center drop-shadow-lg  ">
          <div className="absolute w-32 h-32 shadow-md rounded-full bg-white flex items-center justify-center transform left-1/2  -translate-x-1/2 -top-1/3">
            <Image
              src="/images/icons/feature3.svg"
              alt="feature"
              width={100}
              height={100}
            />
          </div>
          <div className="px-4 text-primary text-xs font-semibold font-[Ubuntu] h-full flex items-end pb-10">
            Профайлаа үүсгэснээр гишүүнчлэлийн тавар, өмгөөлөгчийн хариуцлагын
            даатгалаа онлайнаар төлөх зэрэг үйлчилгээнүүдийг нэг доороос авах
            боломжтой болно.
          </div>
        </div>
      </div>
    </>
  );
}
