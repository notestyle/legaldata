import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function FarmCard({ org }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/organization/123")}
      className=" w-full px-2 py-2 min-w-fit rounded-md border border-gray text-left bg-[#fff] flex gap-3"
    >
      <Image
        className="w-[4.3rem] h-16 rounded-xl"
        src={org.img}
        alt="farm"
        width={100}
        height={100}
      />
      <div className=" max-w-xs">
        <div className=" text-sm font-bold text-primary">{org.name}</div>
        <div className=" text-xs">{org.desc}</div>
      </div>
    </button>
  );
}
