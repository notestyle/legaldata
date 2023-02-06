import React from "react";
export default function Footer() {
  return (
    <div className="w-full h-96 bg-primary flex flex-col px-32">
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
          <img src="Logo.png" className="w-28 h-14" />
        </div>
      </div>
      <div className="h-1 w-full bg-[#525984]"></div>
      <div className="w-full flex justify-between">
        <div>© 2023. Бүх эрх хуулиар хамгаалагдсан. Legal Data</div>
        <div className="flex">1</div>
      </div>
    </div>
  );
}
