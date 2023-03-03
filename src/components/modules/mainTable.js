import React from "react";
import ProfileCard from "./profileCard.js";
import Tabs from "../inputs/pagination.js";
import Image from "next/image.js";

const lawyerList = [
  {
    img: "/images/profiles/1.jpeg",
    firstname: "Бархасболд",
    lastname: "Баярсайхан",
    title: "Өмгөөлөгч/судлаач",
    company: "Өмгөөлийн Кэй И Партнерс ХХН",
  },
  {
    img: "/images/profiles/2.jpeg",
    firstname: "Бархасболд",
    lastname: "Баярсайхан",
    title: "Өмгөөлөгч/судлаач",
    company: "Өмгөөлийн Кэй И Партнерс ХХН",
  },
  {
    img: "/images/profiles/3.jpeg",
    firstname: "Бархасболд",
    lastname: "Баярсайхан",
    title: "Өмгөөлөгч/судлаач",
    company: "Өмгөөлийн Кэй И Партнерс ХХН",
  },
  {
    img: "/images/profiles/4.jpeg",
    firstname: "Бархасболд",
    lastname: "Баярсайхан",
    title: "Өмгөөлөгч/судлаач",
    company: "Өмгөөлийн Кэй И Партнерс ХХН",
  },
  {
    img: "/images/profiles/5.jpeg",
    firstname: "Бархасболд",
    lastname: "Баярсайхан",
    title: "Өмгөөлөгч/судлаач",
    company: "Өмгөөлийн Кэй И Партнерс ХХН",
  },
  {
    img: "/images/profiles/6.webp",
    firstname: "Бархасболд",
    lastname: "Баярсайхан",
    title: "Өмгөөлөгч/судлаач",
    company: "Өмгөөлийн Кэй И Партнерс ХХН",
  },
  {
    img: "/images/profiles/7.jpeg",
    firstname: "Бархасболд",
    lastname: "Баярсайхан",
    title: "Өмгөөлөгч/судлаач",
    company: "Өмгөөлийн Кэй И Партнерс ХХН",
  },
];

const categorySummary = [
  {
    image: "/images/icons/building.svg",
    name: "Хуулийн фирм",
    total: 7741,
  },
  {
    image: "/images/icons/person.svg",
    name: "Шүүгч",
    total: 200,
  },
  {
    image: "/images/icons/person.svg",
    name: "Прокурор",
    total: 200,
  },
  {
    image: "/images/icons/person.svg",
    name: "Өмгөөлөгч",
    total: 200,
  },
  {
    image: "/images/icons/person.svg",
    name: "Хуульч",
    total: 200,
  },
  {
    image: "/images/icons/building.svg",
    name: "Байгууллага",
    total: 200,
  },
  {
    image: "/images/icons/person.svg",
    name: "Арбитч",
    total: 200,
  },
  {
    image: "/images/icons/building.svg",
    name: "Нотариат",
    total: 200,
  },
  {
    image: "/images/icons/person.svg",
    name: "Судлаач",
    total: 200,
  },
  {
    image: "/images/icons/person.svg",
    name: "Junior",
    total: 200,
  },
  {
    image: "/images/icons/building.svg",
    name: "Шинжээч",
    total: 200,
  },
];

export default function MainTable({ showCategory }) {
  return (
    <div className="bg-white border border-gray rounded-md my-8 py-8">
      {showCategory ? (
        // category badges
        <>
          <div className="grid w-full grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-cols-8 justify-around overflow-x-auto gap-4 px-8">
            {categorySummary.map((row, i) => (
              <button key={i} className={"flex flex-col place-items-center"}>
                {/* the icon with the count */}
                <div className="w-20 h-20 lg:w-18 lg:h-18 xl:w-20 xl:h-20 md:w-24 md:h-24 bg-white rounded-full border-2 border-secondary flex flex-col justify-center items-center relative">
                  <Image
                    src={row.image}
                    className=" w-14 h-14"
                    alt={row.name}
                    width={100}
                    height={100}
                  />
                  <div className="text-secondary font-bold absolute -bottom-2 bg-white px-1 ">
                    {row.total}
                  </div>
                </div>
                {/* name of the category */}
                <div className="font-[Ubuntu] font-bold pt-1 pr-3">
                  {row.name}
                </div>
              </button>
            ))}
          </div>
          <div className="h-[1px] bg-gray my-12"></div>
        </>
      ) : (
        <></>
      )}

      <div className="w-full grid grid-col-1 md:grid-cols-2 md:gap-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 gap-5 px-4 overflow-x-auto">
        {lawyerList.map((row, i) => (
          <ProfileCard
            key={i}
            firstname={row.firstname}
            lastname={row.lastname}
            title={row.title}
            company={row.company}
            img={row.img}
            className="w-full text-center font-semibold"
          />
        ))}
      </div>

      <Tabs />
    </div>
  );
}
