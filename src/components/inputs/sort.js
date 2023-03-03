import React, { useState } from "react";

export default function Sort({
  onChange,
  locationList,
  sectorList,
  categoryList,
  yearList,
  ratingList,
  visible,
}) {
  const [active, setActive] = useState();

  return (
    <>
      {/* for smaller screen starting at "lg" */}
      <div className="lg:hidden mt-4 w-full">
        <div className="flex gap-2 mt-20 overflow-x-auto pb-1 overflow-y-hidden">
          {categoryList &&
            categoryList.map((row, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`${
                  i == active ? "bg-secondary" : "bg-primary"
                } px-2 py-1 flex gap-2  rounded-full text-white h-8`}
              >
                {row.name} <span>{row.total}</span>
              </button>
            ))}
        </div>
      </div>

      {/* for big screen */}
      <div className=" flex-col py-6 gap-3 w-80 hidden lg:flex">
        {locationList ? (
          <div className=" flex flex-col justify-center w-72 h-24 bg-white border border-gray gap-1 rounded-md">
            <div className="font-[Ubuntu] font-bold pl-6">Байршил</div>
            <div className="flex justify-center">
              <select className="bg-white1 h-10 w-60 outline-none rounded-md shadow ">
                <option>Бүгд</option>
                {locationList.map((row, i) => (
                  <option key={i} value={row.id}>
                    {row.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ) : (
          <></>
        )}

        {sectorList ? (
          <div className=" flex flex-col justify-center w-72 h-24 bg-white border border-gray gap-1 rounded-md">
            <div className="font-[Ubuntu] font-bold pl-6">Мэргэшсэн салбар</div>
            <div className="flex justify-center">
              <select className="bg-white1 h-10 w-60 outline-none rounded-md shadow ">
                <option>Бүгд</option>
                {sectorList.map((row, i) => (
                  <option key={i} value={row.id}>
                    {row.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ) : (
          <></>
        )}

        {yearList ? (
          <div className=" flex flex-col justify-center w-72 h-24 bg-white border border-gray gap-1 rounded-md">
            <div className="font-[Ubuntu] font-bold pl-6">Он</div>
            <div className="flex justify-center">
              <select className="bg-white1 h-10 w-60 outline-none rounded-md shadow ">
                <option>Бүгд</option>
                {yearList.map((row, i) => (
                  <option key={i} value={row}>
                    {row}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ) : (
          <></>
        )}

        {categoryList ? (
          <div className="w-72 py-4 flex flex-col gap-2 bg-white border border-gray rounded-md px-4">
            <div className="pt-3 font-bold mb-2">Төрөл</div>
            {categoryList.map((row, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`${
                  active == i ? "text-secondary" : ""
                } w-full flex justify-between`}
              >
                <div>{row.name}</div>
                <div>{row.total}</div>
              </button>
            ))}
          </div>
        ) : (
          <></>
        )}
        {ratingList ? (
          <div className="w-72 py-4 flex flex-col gap-2 bg-white border border-gray rounded-md px-4">
            <div className="pt-3 font-bold mb-2">Үнэлгээ</div>
            {ratingList.map((row, i) => (
              <div key={i} className="flex gap-8">
                <input type="checkbox" className="checkbox" />
                <div className="flex gap-2">
                  {[...Array(5).keys()].map((rate) =>
                    rate + 1 <= row ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-star"
                        key={rate}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-star"
                        key={rate}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
