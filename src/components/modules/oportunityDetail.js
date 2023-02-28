import React from "react";
import Image from "next/image";

export default function OportunityDetail() {
  return (
    <div>
      <div className="flex relative mt-10">
        <div>
          <Image
            src="/images/oportunity/top.svg"
            alt="op-top"
            className="w-[45rem]"
            width={100}
            height={100}
          />
        </div>
        <div className=" w-[30rem] text-center font-semibold absolute top-52 right-10">
          Бид таны болон танай хуулийн фирмийн талаарх бүрэн, цогц мэдээллийг
          хүмүүст харуулах боломжийг олгоно.
        </div>
      </div>
      <div className="flex my-10 items-center">
        <div className="w-[30rem] text-center font-semibold">
          Дэлгэрэнгүй мэдээлэлд Товч танилцуулга, Үйлчлүүлэгчийн сэтгэгдэл,
          Онцлох ажил, Гол үйлчлүүлэгчид, Мэргэшсэн чиглэл, Хуульчид, Про боно
          үйл ажиллагаа, Холбоо барих зэрэг мэдээллүүд оно. Та хүссэн үедээ
          мэдээллээ шинэчлэх боломжтой.
        </div>
        <div>
          <Image
            src="/images/oportunity/bot.svg"
            alt="op-top"
            className="w-[45rem]"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
