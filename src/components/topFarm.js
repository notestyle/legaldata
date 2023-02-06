import React from "react";
import Image from "next/image";

export default function TopFarm() {
  return (
    <>
      <div className="text-xl font-bold mt-9">
        2024 оны шилдэг 4 хуулийн фирм{" "}
      </div>
      <div className="w-20 h-0.5 bg-secondary mt-2"></div>
      <div className="flex gap-6">
        <div className=" w-80 h-24 rounded-md border border-gray bg-[#fff] flex items-center py-4 mt-5 gap-3">
          <div className=" bg-secondary w-16 h-16 ml-3 rounded-md pr-16 "></div>
          <div>
            <div className=" text-sm font-bold text-primary">
              Chaing Anders PLLC
            </div>
            <div className=" text-xs">
              An intuitive user interface for quickly generating lorem ipsum
              placeholder content and copy
            </div>
          </div>
        </div>
        <div className=" w-80 h-24 rounded-md border border-gray bg-[#fff] flex items-center py-4 mt-5 gap-3">
          <div className=" bg-primary w-16 h-16 ml-3 rounded-md pr-16 "></div>
          <div>
            <div className=" text-sm font-bold text-primary">
              Chaing Anders PLLC
            </div>
            <div className=" text-xs">
              An intuitive user interface for quickly generating lorem ipsum
              placeholder content and copy
            </div>
          </div>
        </div>
        <div className=" w-80 h-24 rounded-md border border-gray bg-[#fff] flex items-center py-4 mt-5 gap-3">
          <div className=" bg-secondary w-16 h-16 ml-3 rounded-md pr-16 "></div>
          <div>
            <div className=" text-sm font-bold text-primary">
              Chaing Anders PLLC
            </div>
            <div className=" text-xs">
              An intuitive user interface for quickly generating lorem ipsum
              placeholder content and copy
            </div>
          </div>
        </div>
        <div className=" w-80 h-24 rounded-md border border-gray bg-[#fff] flex items-center py-4 mt-5 gap-3">
          <div className=" bg-primary w-16 h-16 ml-3 rounded-md pr-16 "></div>
          <div>
            <div className=" text-sm font-bold text-primary">
              Chaing Anders PLLC
            </div>
            <div className=" text-xs">
              An intuitive user interface for quickly generating lorem ipsum
              placeholder content and copy
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
