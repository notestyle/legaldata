import React from "react";

export default function Header() {
  return (
    <div className="w-full h-28 bg-primary flex justify-between items-center text-white px-8 lg:px-32">
      <div className="flex ">
        <div>Legal data</div>
        <div className="gap-8 ml-20 items-center hidden lg:flex">
          <div>Нүүр</div>
          <div>Үйлчилгээ</div>
          <div>Чансаа</div>
          <div>Боломжууд</div>
        </div>
      </div>
      <div className="hidden lg:flex gap-4">
        <button>Бүртгүүлэх</button>
        <button>Нэвтрэх</button>
        <button>MN</button>
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
