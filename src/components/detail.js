import React from "react";
import Image from "next/image";

export default function Detail() {
  return (
    <div className="w-full lg:w-[28rem] my-8 sticky top-28 self-start ">
      <div>
        <div>
          <Image
            src="/images/social/farm-profile.svg"
            className=" w-full"
            alt="facebook"
            width={100}
            height={80}
          />
        </div>
        <div className="flex pl-2 pt-3 gap-5">
          <div className=" w-28 h-20 relative">
            <Image
              src="/images/social/company-profile.svg"
              className=" w-full absolute -translate-y-1/2"
              alt="facebook"
              width={100}
              height={80}
            />
          </div>
          <div className="font-bold font-[Ubuntu]">Company Name </div>
          <div>
            <Image
              src="/images/icons/verified.svg"
              className=" w-5 h-5"
              alt="facebook"
              width={100}
              height={80}
            />
          </div>
          <div className="flex gap-2">
            <Image
              src="/images/social/facebook.svg"
              className=" w-5 h-5"
              alt="facebook"
              width={100}
              height={80}
            />
            <Image
              src="/images/social/instagram.svg"
              className=" w-5 h-5"
              alt="instagram"
              width={100}
              height={80}
            />
            <Image
              src="/images/social/linkedin.svg"
              className=" w-5 h-5"
              alt="linkedin"
              width={100}
              height={80}
            />
            <Image
              src="/images/social/youtube.svg"
              className=" w-5 h-5"
              alt="youtube"
              width={100}
              height={80}
            />
            <Image
              src="/images/social/twitter.svg"
              className=" w-5 h-5"
              alt="twitter"
              width={100}
              height={80}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-60 border-2 border-gray rounded-2xl mb-10 bg-white">
        <div className="pl-5 pt-3">
          <div className="font-bold font-[Ubuntu]">Холбоо барих</div>
          <div className="flex">
            <div>
              <Image
                src="/images/icons/map.svg"
                className=" w-40 h-40 mt-3"
                alt="twitter"
                width={100}
                height={80}
              />
            </div>
            <div className=" flex flex-col pl-4 pt-3 font-bold">
              <div className="w-60">
                <div className="text-primary opacity-70">Хаяг</div>
                <div className="font-semibold text-xs">
                  Монгол Улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 8-хороо Амарын
                  гудамж-29 Сан Бизнес Центр, 402 тоот.
                </div>
              </div>
              <div className="pt-5">
                <div className="text-primary opacity-70">Утас</div>
                <div className="font-semibold text-xs flex gap-5">
                  <div> +976 8996 3336 </div>
                  <div> +976 8996 3336 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex gap-3">
          <div className="font-bold font-[Ubuntu]">3.5</div>
          <Image
            src="/images/icons/star.svg"
            className=" w-5 h-5"
            alt="youtube"
            width={100}
            height={80}
          />
          <Image
            src="/images/icons/star.svg"
            className=" w-5 h-5"
            alt="youtube"
            width={100}
            height={80}
          />
          <Image
            src="/images/icons/star.svg"
            className=" w-5 h-5"
            alt="youtube"
            width={100}
            height={80}
          />
          <Image
            src="/images/icons/star.svg"
            className=" w-5 h-5"
            alt="youtube"
            width={100}
            height={80}
          />
          <Image
            src="/images/icons/star.svg"
            className=" w-5 h-5"
            alt="youtube"
            width={100}
            height={80}
          />
        </div>
        <div className="pl-6">
          <button className="w-60 h-10 bg-[#EF233C] rounded-xl text-[#EDF2F4] font-[Ubuntu] font-semibold text-sm drop-shadow-md hover:drop-shadow-xl">
            Үнэлгээ өгөх
          </button>
        </div>
      </div>
    </div>
  );
}
