import React from "react";
import Image from "next/image";

export default function Language() {
  return (
    <>
      <ul class="grid grid-cols-2 w-1/2">
        <li class="relative w-full  ">
          <input
            class="sr-only peer"
            type="radio"
            value="yes"
            name="answer"
            id="answer_yes"
            defaultChecked={true}
          />
          <label
            class="flex w-full h-12 gap-3 justify-center items-center opacity-25 peer-checked:opacity-100 bg-white border border-secondary rounded-lg cursor-pointer peer-checked:border-gray"
            for="answer_yes"
          >
            <Image
              src="/images/icons/mongolia.svg"
              className="w-12 h-8"
              alt="mn"
              width={100}
              height={80}
            />

            <div className="font-bold hidden lg:block">Монгол хэл дээрх</div>
          </label>
        </li>

        <li class="relative w-full  ">
          <input
            class="sr-only peer"
            type="radio"
            value="no"
            name="answer"
            id="answer_no"
          />
          <label
            class="flex full h-12 gap-3 justify-center items-center opacity-25 peer-checked:opacity-100 bg-white border border-secondary rounded-lg cursor-pointer peer-checked:border-gray"
            for="answer_no"
          >
            <Image
              src="/images/icons/english.svg"
              className="w-12 h-8 "
              alt="eng"
              width={100}
              height={80}
            />
            <div className="font-bold hidden lg:block">English</div>
          </label>
        </li>
      </ul>
    </>
  );
}
