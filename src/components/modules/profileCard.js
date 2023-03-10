import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ProfileCard({
  firstname,
  lastname,
  title,
  company,
  img,
  className,
}) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/user/123")}
      className={`cursor-pointer rounded-lg border border-gray bg-[#fff] flex flex-col items-center py-4 min-w-fit ${className}`}
    >
      <div className="relative w-16 h-16">
        <Image
          src={img}
          alt={firstname}
          fill
          className="object-cover object-top rounded-full"
        />
      </div>
      <div className="flex gap-2 font-bold text-base my-2">
        {firstname}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-secondary"
        >
          <path
            fillRule="evenodd"
            d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="text-sm">{lastname}</div>
      <div className="my-6 text-xs">{title}</div>
      <div className="w-60 italic text-xs">{company}</div>
    </div>
  );
}
