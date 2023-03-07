import React from "react";
import Image from "next/image";

export default function Tip() {
  return (
    <>
      <div className="w-full h-40 bg-white flex flex-col border-2 border-gray rounded-lg mt-20 lg:mt-0">
        <div className="flex justify-center pt-5">
          <Image
            className="w-14 h-14"
            src="/images/icons/tip.svg"
            alt="feature"
            width={100}
            height={100}
          />
        </div>
        <div className="flex justify-center py-3">
          <div className="font-[Ubuntu] italic text-center w-full">
            Бид хуулийн фирм, өмгөөлөгчдийн үнэлгээний эрэмбийг өөрийн
            бүртгэлтэй хэрэглэгчдийн үнэлгээнд үндэслэн гаргадаг.
          </div>
        </div>
      </div>
    </>
  );
}
