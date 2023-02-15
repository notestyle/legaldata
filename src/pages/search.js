import Layout from "@/components/layout";
import MainTable from "@/components/mainTable";
import Sort from "@/components/sort";
import { useState } from "react";
import {
  ratingList,
  locationList,
  sectorList,
  categoryList,
} from "@/dummy/constant";
export default function Search() {
  const [sortList, setSortList] = useState(["Улаанбаатар", "Эрүү", "Шүүгч"]);

  function onChangeSort() {}

  return (
    <Layout>
      <div className="flex gap-8">
        <Sort
          onChange={onChangeSort}
          ratingList={ratingList}
          locationList={locationList}
          sectorList={sectorList}
          categoryList={categoryList}
        />
        <div className="w-full">
          <div className="w-full flex justify-between mt-8">
            <input
              type="text"
              placeholder="Хайх..."
              className=" bg-transparent text-xl outline-none w-full"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6 text-secondary cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div className="w-full flex gap-2 mt-4">
            {sortList.map((row, i) => (
              <div
                key={i}
                className="px-3 h-8 bg-primary rounded text-white flex items-center justify-between gap-3"
              >
                {row}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => {}}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ))}
          </div>

          <MainTable />
        </div>
      </div>
    </Layout>
  );
}
