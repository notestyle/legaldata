import React from "react";

export default function FarmCard() {
  return (
    <div>
      <div className=" w-[21rem] h-24 rounded-md border border-gray bg-[#fff] flex items-center py-4 mt-5 gap-3">
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
    </div>
  );
}
