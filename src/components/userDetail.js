import React from "react";
import Image from "next/image";

export default function Userdetail() {
  return (
    <div>
      <div className="w-[28rem] sticky top-28 self-start">
        <div>
          <Image
            src="/images/social/user-cover.svg"
            className=" w-full"
            alt="user-cover"
            width={100}
            height={80}
          />
        </div>
        <div className="flex pl-2 pt-3 gap-5">
          <div className=" w-28 h-20 relative">
            <Image
              src="/images/social/user-profile.svg"
              className=" w-full absolute -translate-y-1/2"
              alt="user-profile"
              width={100}
              height={80}
            />
          </div>
          <div className="font-bold font-[Ubuntu]">Company Name </div>
          <div>
            <Image
              src="/images/icons/verified.svg"
              className=" w-5 h-5"
              alt="verified"
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
        <div className="w-full h-48 border-2 border-gray rounded-2xl mb-10 bg-white">
          <div className="pl-5 pt-3">
            <div className="font-bold font-[Ubuntu]">Надтай холбогдох</div>
            <div className="pt-5">
              <div className="w-full flex gap-12">
                <div className="flex gap-3">
                  <Image
                    src="/images/icons/phone.svg"
                    className=" w-5 h-5"
                    alt="twitter"
                    width={100}
                    height={80}
                  />
                  <div className="font-bold font-[Ubuntu]">+976 8996 3336</div>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="/images/icons/phone.svg"
                    className=" w-5 h-5"
                    alt="twitter"
                    width={100}
                    height={80}
                  />
                  <div className="font-bold font-[Ubuntu]">+976 8996 3336</div>
                </div>
              </div>
              <div className="flex gap-3 py-3">
                <div>
                  <Image
                    src="/images/icons/mail.svg"
                    className=" w-5 h-5"
                    alt="twitter"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="font-bold font-[Ubuntu]">
                  battulga.purvee@gmail.com
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <Image
                    src="/images/icons/location.svg"
                    className=" w-10 h-10"
                    alt="twitter"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="font-bold font-[Ubuntu]">
                  Улаанбаатар хот, Сүхбаатар дүүрэг, 8-р хороо, Амарын гудамж
                  29, Сан Бизнес Центр, 402 тоот
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
        <div className="w-full flex flex-col items-center">
          <div className="text-sm text-center py-6">
            Манай үйлчилгээ нь хуульч, өмгөөлөгч, судлаач, хуулийн фирмүүүдийн
            нарийвчилсан мэдээллийг шуурхай, хүртээмжэйгээр харуулах тул таныг
            боломжит үйлчлүүлэгч, харилцагчтай холбоход тусална.
          </div>
          <div className="text-secondary underline">БИДЭНТЭЙ НЭГДЭХ</div>
        </div>
      </div>
    </div>
  );
}
