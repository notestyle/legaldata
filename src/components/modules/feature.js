import React from "react";
import Image from "next/image";

export default function Feature() {
  return (
    <>
      <div className="flex place-items-center justify-center md:justify-between gap-24 md:gap-8 lg:gap-12 xl:gap-24 mt-20 flex-col md:flex-row w-full md:px-12 md2:px-28 lg:px-0">

        <div className="w-3/4 md:w-100 lg:w-96 h-56 pt-20 lg:h-56 text-center bg-white rounded-xl flex flex-col justify-center items-center drop-shadow-lg relative pb-10">
          <div className="absolute w-32 h-32 rounded-full shadow-md bg-white flex items-center justify-center transform left-1/2  -translate-x-1/2 -top-1/3">
            <Image
              className=""
              src="/images/icons/feature1.svg"
              alt="feature"
              width={100}
              height={100}
            />
          </div>
          <div className="px-4 text-primary text-xs font-semibold font-[Ubuntu] h-full flex items-center">
            Бид хэрэглэгчдийнхээ дунд явуулсан санал асуулгын
            үнэлгээндтулгуурлан, салбартаа хүлээн зөвшөөрөгдсөн хуульч, хуулийн
            фирмийн үнэлгээний эрэмбийг жил бүр гаргана.
          </div>
        </div>

        <div className="flex md:hidden lg:flex w-3/4 md:w-full lg:w-96 h-56 pt-20 lg:h-56 text-center relative bg-white rounded-xl flex-col pb-6 xl:pb-10 justify-center items-center drop-shadow-lg">
          <div className="absolute w-32 h-32 shadow-md rounded-full bg-white flex items-center justify-center left-1/2 -translate-x-1/2 -top-20">
            <Image
              src="/images/icons/feature2.svg"
              alt="feature"
              width={100}
              height={100}
            />
          </div>
          <div className="px-4 text-primary text-xs font-semibold font-[Ubuntu] h-full flex items-center">
            Манай үйлчилгээ нь хуулийн салбарын мэргэжилтнүүд, судлаач, залуу
            хуульч, хуулийн оюутан, хуулийн фирмүүүдийн нарийвчилсан мэдээллийг
            шуурхай, хүртээмжэйгээр харуулах тул таныг гадаад, дотоодын боломжит
            үйлчлүүлэгч, харилцагчтай холбоход тусална.
          </div>
        </div>

        <div className="w-3/4 md:w-100 lg:w-96 h-56 pt-20 lg:h-56 text-center bg-white rounded-xl flex flex-col justify-center items-center drop-shadow-lg relative pb-14">
            {/* image */}
            <div className="absolute w-32 h-32 rounded-full shadow-md bg-white flex items-center justify-center transform left-1/2  -translate-x-1/2 -top-1/3">
                <Image
                className=""
                src="/images/icons/feature3.svg"
                alt="feature"
                width={100}
                height={100}
                />
            </div>
            {/* text */}
            <h1 className="px-4 text-primary text-xs font-semibold font-[Ubuntu] h-full flex items-center">
                Профайлаа үүсгэснээр гишүүнчлэлийн тавар, өмгөөлөгчийн хариуцлагын
                даатгалаа онлайнаар төлөх зэрэг үйлчилгээнүүдийг нэг доороос авах
                боломжтой болно.
            </h1>
        </div>

      </div>
      {/* third option */}
        <div className="hidden md:flex lg:hidden flex-row place-items-center justify-center mt-24 w-full md:px-28 lg:px-0">
            <div className="w-3/4 md:w-80 lg:w-96 h-56 pt-20 lg:h-56 text-center relative bg-white rounded-xl flex flex-col pb-6 xl:pb-10 justify-center items-center drop-shadow-lg">
                <div className="absolute w-32 h-32 shadow-md rounded-full bg-white flex items-center justify-center left-1/2 -translate-x-1/2 -top-20">
                    <Image
                    src="/images/icons/feature2.svg"
                    alt="feature"
                    width={100}
                    height={100}
                    />
                </div>
                <div className="px-4 text-primary text-xs font-semibold font-[Ubuntu] h-full flex items-center">
                    Манай үйлчилгээ нь хуулийн салбарын мэргэжилтнүүд, судлаач, залуу
                    хуульч, хуулийн оюутан, хуулийн фирмүүүдийн нарийвчилсан мэдээллийг
                    шуурхай, хүртээмжэйгээр харуулах тул таныг гадаад, дотоодын боломжит
                    үйлчлүүлэгч, харилцагчтай холбоход тусална.
                </div>
            </div>
        </div>
    </>
  );
}
