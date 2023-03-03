import React from "react";
import Image from "next/image";

export default function OportunityDetail() {
  return (
    <div className="w-full h-full flex flex-col place-items-center">

        {/* first */}
        <div className="flex relative mt-10 flex-col xl:flex-row place-items-center gap-8 justify-center">
            {/* image */}
            <div>
            <Image
                src="/images/oportunity/top.svg"
                alt="op-top"
                className="w-[45rem] lg:w-[35rem]"
                width={100}
                height={100}
            />
            </div>
            <div className="w-80 md:w-[30rem] text-center font-semibold">
                Бид таны болон танай хуулийн фирмийн талаарх бүрэн, цогц мэдээллийг
                хүмүүст харуулах боломжийг олгоно.
            </div>
        </div>

        {/* second */}
        <div className="flex my-10 items-center gap-8 flex-col-reverse place-items-center xl:flex-row">
            <div className="w-80 md:w-[30rem] text-center font-semibold 3xl:mt-20">
                Дэлгэрэнгүй мэдээлэлд Товч танилцуулга, Үйлчлүүлэгчийн сэтгэгдэл,
                Онцлох ажил, Гол үйлчлүүлэгчид, Мэргэшсэн чиглэл, Хуульчид, Про боно
                үйл ажиллагаа, Холбоо барих зэрэг мэдээллүүд оно. Та хүссэн үедээ
                мэдээллээ шинэчлэх боломжтой.
            </div>
            {/* image */}
            <div>
            <Image
                src="/images/oportunity/bot.svg"
                alt="op-top"
                className="w-[30rem] md:w-[45rem] lg:w-[35rem]"
                width={100}
                height={100}
            />
            </div>
      </div>
    </div>
  );
}
