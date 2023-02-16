import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <div className="w-full h-20 bg-primary flex justify-between items-center text-white px-8 lg:px-32 sticky top-0 z-10 ">
      <div className="flex h-full">
        <div className="flex justify-center items-center">
          <Image
            onClick={() => {
              router.push("/");
            }}
            src="/Logo.png"
            className="w-28 h-14 cursor-pointer"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div className="gap-8 ml-20 items-center hidden lg:flex h-full ">
          <Link
            href="/"
            className={`font-semibold ${
              router.pathname == "/" ? "text-secondary" : ""
            } hover:text-secondary  h-full flex items-center relative`}
          >
            Нүүр
            <div
              className="w-full h-1 bg-secondary absolute bottom-0"
              hidden={router.pathname != "/"}
            ></div>
          </Link>
          <Link
            href="/service"
            className={`font-semibold ${
              router.pathname == "/service" ? "text-secondary" : ""
            } hover:text-secondary  h-full flex items-center relative`}
          >
            Үйлчилгээ
            <div
              href="/rank"
              className={`font-semibold ${
                router.pathname == "/rank" ? "text-secondary" : ""
              } hover:text-secondary  h-full flex items-center relative`}
            ></div>
            <div
              className="w-full h-1 bg-secondary absolute bottom-0"
              hidden={router.pathname != "/service"}
            ></div>
          </Link>
          <Link
            href="/rank"
            className={`font-semibold ${
              router.pathname == "/rank" ? "text-secondary" : ""
            } hover:text-secondary  h-full flex items-center relative`}
          >
            Чансаа
            <div
              className="w-full h-1 bg-secondary absolute bottom-0"
              hidden={router.pathname != "/rank"}
            ></div>
          </Link>
          <Link
            href="/oportunity"
            className={`font-semibold ${
              router.pathname == "/oportunity" ? "text-secondary" : ""
            } hover:text-secondary  h-full flex items-center relative`}
          >
            Боломжууд
            <div
              className="w-full h-1 bg-secondary absolute bottom-0"
              hidden={router.pathname != "/oportunity"}
            ></div>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex gap-4 items-center">
        <div>
          <Image
            src="/images/icons/header.svg"
            className="w-4 h-4"
            width={100}
            height={100}
          />
        </div>
        <button className=" font-semibold">Бүртгүүлэх</button>
        <button className=" font-semibold  h-8 flex justify-between items-center overflow-hidden">
          <div className="bg-white w-8 h-full rounded-l-md flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4 text-primary"
            >
              <path
                fill-rule="evenodd"
                d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="px-4 border border-white rounded-r-md h-full flex items-center ">
            Нэвтрэх
          </div>
        </button>
        <button className=" text-sm font-bold text-primary bg-white w-8 h-8 rounded-lg ">
          MN
        </button>
      </div>
      <button className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );
}
