import React from "react";
import Image from "next/image";
export default function Ad() {
  return (
    <>
      <div className="w-full py-8">
        <div className="pt-12 flex justify-center italic font-[Ubuntu]">
          <div>Профайлаа үүсгээрэй </div>
        </div>
        <div className="pt-8 flex justify-center font-[Ubuntu] text-2xl font-bold">
          <div>ТАНЫ АЖИЛ ХЭРЭГТ ХҮЧ НЭМНЭ</div>
        </div>
        <div className="flex justify-center">
          <div className=" w-[60rem] text-center font-[Ubuntu] font-bold pt-12  ">
            legal Connect нь хууль зүйн салбарынхныг нэг дор нэгтгэнэ. Манай
            платформ нь хууль зүйн салбарын эрэлт, хэрэгцээнд нийцүүлэн
            хийгдсэн. Legal Connect -ийн профайл нь таныг бүрэн илэрхийлж, ажил
            хэргийн боломжийг нээж өгөх дижитал нэрийн хуудас тань болно.
          </div>
        </div>
        <div className="flex w-full py-8 gap-8 lg:flex-row flex-col justify-center items-center lg:justify-evenly">
          <div className=" w-80 h-60 flex items-center flex-col">
            <Image
              src="/images/icons/check.svg"
              className=" w-[4.5rem] h-16"
              alt="check"
              width={100}
              height={80}
            />
            <div className="text-center font-[Ubuntu] font-bold pt-4">
              Бидэнтэй нэгд
            </div>
            <div className="font-semibold text-center text-md pt-5">
              Legal Connect нь хууль зүйн салбарын бүх мэргэжилтнүүдийн сүлжээ
              юм. Бидэнтэй нэгдээрэй.
            </div>
          </div>
          <div className=" w-80 h-60  flex items-center flex-col">
            <Image
              src="/images/icons/check.svg"
              className=" w-[4.5rem] h-16"
              alt="check"
              width={100}
              height={80}
            />
            <div className="text-center font-[Ubuntu] font-bold pt-4">
              Мэдлэг, туршлагаа онцол{" "}
            </div>
            <div className=" w-72 font-semibold text-center text-md pt-5">
              Өөрийн профайлыг үүсгэж, өөрийн мэдлэг, ур чадвар, туршлагаа
              онцлоорой.
            </div>
          </div>
          <div className=" w-80 h-60 flex items-center flex-col">
            <Image
              src="/images/icons/check.svg"
              className=" w-[4.5rem] h-16"
              alt="check"
              width={100}
              height={80}
            />
            <div className="text-center font-[Ubuntu] font-bold pt-4">
              Хязгааргүй боломж{" "}
            </div>
            <div className=" w-60 font-semibold text-center text-md pt-5">
              Legal Connect -д нэгдэж ажил хэрэг, хамтын ажиллагаагаа
              өргөжүүлээрэй.
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <button className="w-60 h-10 bg-[#EF233C] rounded-xl text-[#EDF2F4] font-[Ubuntu] font-semibold text-sm drop-shadow-md hover:drop-shadow-xl">
            Бидэнтэй нэгд
          </button>
        </div>
      </div>
    </>
  );
}
