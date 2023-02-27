import React from "react";
import Image from "next/image";

export default function Enter() {
<<<<<<< HEAD
  return (
    <>
      <div className="w-80 h-96 flex">
        <div className="w-full flex items-center flex-col">
          <div>
            <Image
              src="/logo2.png"
              alt="logo"
              className="w-40 h-20"
              width={100}
              height={100}
            />
          </div>
          <div className="w-full pt-16">
            <input
              type="text"
              className=" text-sm bg-black"
              placeholder="Бүртгэлтэй И-мэйл хаяг/Утас*"
            ></input>
          </div>
          <div className="w-full  pt-5">
            <input
              type="text"
              className="input text-sm bg-white"
              placeholder="Нууц үг"
            ></input>
          </div>
          <div>
            <button className="w-56 h-10 mt-16 bg-[#EF233C] rounded-xl text-[#EDF2F4] font-[Ubuntu] font-semibold text-sm shadow-md shadow-secondary ">
              Нэвтрэх
            </button>
          </div>
          <div>
            <button className="text-secondary font-semibold mt-10">
              БҮРТГҮҮЛЭХ
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
=======
    return (
        <>
            <div className="w-80 h-96 flex">
                <div className="w-full flex items-center flex-col">
                    <div>
                        <Image
                            src="/logo2.png"
                            alt="logo"
                            className="w-40 h-20"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="w-full pt-16">
                        <input
                            type="text"
                            className="text-sm bg-white border w-full pr-12 pl-4 py-2 rounded-xl border-gray outline-none"
                            placeholder="Бүртгэлтэй И-мэйл хаяг/Утас"
                        ></input>
                    </div>
                    <div className="w-full pt-5">
                        <input
                            type="text"
                            className="text-sm bg-white border w-full pr-12 pl-4 py-2 rounded-xl border-gray outline-none"
                            placeholder="Нууц үг"
                        ></input>
                    </div>
                    <div>
                        <button className="w-56 h-10 mt-16 bg-[#EF233C] rounded-xl text-[#EDF2F4] font-[Ubuntu] font-semibold text-sm shadow-md shadow-secondary ">
                            Нэвтрэх
                        </button>
                    </div>
                    <div>
                        <button className="text-secondary font-semibold mt-10">
                            БҮРТГҮҮЛЭХ
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
>>>>>>> fa34eb475be5171777b400466d9f0b8f3e8de6cd
