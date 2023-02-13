import React from "react";
import Image from "next/image";

export default function Detail() {
  return (
    <div>
      <div>
        <Image
          src="/images/social/farm-profile.svg"
          className="w-80 h-60"
          alt="logo"
          width={100}
          height={100}
        />
        <div className="pl-2 relative">
          <Image
            src="/images/social/company-profile.svg"
            className="w-24 h-24 absolute -translate-y-16 "
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
