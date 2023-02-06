import React from "react";
import ProfileCard from "./profileCard.js";
import Tabs from "./tabs.js";

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

export default function MainTable({ showCategory }) {
  return (
    <div className="bg-white border border-gray rounded-md my-8">
      {showCategory ? (
        <>
          <div className="flex w-full justify-around my-4">
            <div className="bg-secondary w-20 h-20 rounded-full "></div>
            <div className="bg-secondary w-20 h-20 rounded-full "></div>
            <div className="bg-secondary w-20 h-20 rounded-full "></div>
            <div className="bg-secondary w-20 h-20 rounded-full "></div>
            <div className="bg-secondary w-20 h-20 rounded-full "></div>
          </div>
          <div className="flex w-full justify-around my-4">
            <div className="bg-secondary w-20 h-20 rounded-full "></div>
            <div className="bg-secondary w-20 h-20 rounded-full "></div>
            <div className="bg-secondary w-20 h-20 rounded-full "></div>
            <div className="bg-secondary w-20 h-20 rounded-full "></div>
            <div className="bg-secondary w-20 h-20 rounded-full "></div>
            <div className="bg-secondary w-20 h-20 rounded-full "></div>
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="h-[1px] bg-gray my-12"></div>
      <div className="w-full grid grid-cols-5 gap-5 px-4">
        {lawyerList.map((row, i) => (
          <ProfileCard
            key={i}
            firstname={row.firstname}
            lastname={row.lastname}
            title={row.title}
            company={row.company}
            img={row.img}
            className="w-full"
          />
        ))}
      </div>

      <Tabs />
    </div>
  );
}
