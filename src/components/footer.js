import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full h-72 bg-primary flex flex-col px-32">
      <div className="w-full flex justify-between py-8">
        <div className="flex">
          <div className="pt-5 text-white text-xs ">
            <div className=" opacity-30 pb-5">Цэсүүд</div>
            <div className="grid grid-col-4 gap-2">
              <div>Нүүр</div>
              <div>Үйлчилгээ</div>
              <div>Чансаа</div>
              <div>Боломжууд</div>
            </div>
          </div>
          <div className="text-white ml-40 pt-5 text-xs w-48 h-20">
            <div className=" opacity-30 pb-5">Хаяг</div>
            <div>
              Монгол Улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 8-хороо Амарын
              гудамж-29 Сан Бизнес Центр, 402 тоот.
            </div>
          </div>
        </div>
        <div className="h-full flex items-end">
          <Image
            src="/Logo.png"
            className="w-28 h-14"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="h-1 w-full bg-[#525984]"></div>
      <div className="w-full flex justify-between">
        <div className="mt-5 text-white flex">
          ©2023. Бүх эрх хуулиар хамгаалагдсан.
          <div className="text-secondary pl-2"> Legal Data </div>
        </div>
        <div className="flex gap-2 pt-5">
          <Image
            src="/images/social/facebook.png"
            className=" w-5 h-5"
            alt="facebook"
            width={100}
            height={80}
          />
          <Image
            src="/images/social/instagram.png"
            className=" w-5 h-5"
            alt="instagram"
            width={100}
            height={80}
          />
          <Image
            src="/images/social/linkedin.png"
            className=" w-5 h-5"
            alt="linkedin"
            width={100}
            height={80}
          />
          <Image
            src="/images/social/youtube.png"
            className=" w-5 h-5"
            alt="youtube"
            width={100}
            height={80}
          />
          <Image
            src="/images/social/twitter.png"
            className=" w-5 h-5"
            alt="twitter"
            width={100}
            height={80}
          />
        </div>
      </div>
    </div>
  );
}
