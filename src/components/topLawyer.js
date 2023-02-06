import React from "react";
import ProfileCard from "./profileCard.js";

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
];

export default function MainTable({ showCategory }) {
  return (
    <div>
      <div className="text-xl font-bold mt-9">2024 оны шилдэг өмгөөлөгчид</div>
      <div className="w-20 h-0.5 bg-secondary mt-2"></div>
      <div className="w-full grid grid-cols-5 gap-5">
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
    </div>
  );
}
