import React from "react";
import Image from "next/image";

export default function Widget() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="bg-white rounded-lg border border-gray w-[250px] h-[277px] relative">
          <div className="w-4 h-4 bg-secondary mr-40 rotate-45 absolute -top-2 ml-12 -z-10"></div>
          <div className="flex flex-col mx-6 my-6">
            <div className="flex">
              <Image
                src="/images/profiles/2.jpeg"
                className="w-12 h-12 border-2 border-black"
                alt="facebook"
                width={100}
                height={80}
              />
              <div className="pl-3">
                <div className="font-bold">Бархасболд</div>
                <div>Бархасболд</div>
              </div>
            </div>
            <div className="flex flex-col pt-9 gap-6">
              <button className="flex gap-3">
                <div>
                  <Image
                    src="/images/icons/group.svg"
                    className="w-6 h-6"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="text-primary opacity-80">Бидэнтэй нэгдэх</div>
              </button>
              <button className="flex gap-3">
                <div>
                  <Image
                    src="/images/icons/edit.svg"
                    className="w-6 h-6 text-primary opacity-80"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="text-primary opacity-80">Бүртгэл засах</div>
              </button>
              <div className="w-full h-[1px] bg-primary"></div>
              <button className="flex gap-3">
                <div>
                  <Image
                    src="/images/icons/exit.svg"
                    className="w-6 h-6 text-primary opacity-80"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="text-primary opacity-80">Гарах</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
