import React from "react";
import Image from "next/image";

export default function Organization_create_detail() {
  return (
    <>
      <div className="w-[56.5rem] my-8 px-7 bg-white border border-gray rounded-xl">
        <div className="flex items-center relative">
          <div className=" w-80 h-12 border my-5 border-gray rounded-xl shadow-md flex gap-3 justify-center items-center">
            <div>
              <Image
                src="/images/icons/mongolia.svg"
                className=" w-12 h-8"
                alt="facebook"
                width={100}
                height={80}
              />
            </div>
            <div className="font-bold">Монгол хэл дээрх</div>
          </div>
          <div className=" w-80 h-12 border my-5 border-secondary border-l-0 rounded-xl shadow-md flex gap-5 justify-center items-center absolute right-60">
            <div className="text-gray">
              <Image
                src="/images/icons/english.svg"
                className="w-12 h-8 opacity-25"
                alt="facebook"
                width={100}
                height={80}
              />
            </div>
            <div className="font-bold text-gray">English</div>
          </div>
          <button className="bg-[#0EAC4D] h-12 py-2 px-8 rounded-xl text-white font-bold absolute right-10">
            Хадаглах
          </button>
        </div>
        <div className="w-full h-0.5 bg-gray"></div>
        <div className="py-5">
          <div className="font-bold text-sm font-[Ubuntu]">
            Товч танилцуулга
          </div>
          <div className="w-14 h-0.5 bg-secondary mt-1 mb-4"></div>
          <div>
            <textarea
              className="input h-20"
              id="about"
              name="."
              rows="4"
              cols="30"
              placeholder="Энд бич..."
            ></textarea>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="font-bold text-sm font-[Ubuntu]">Онцлох ажил*</div>
            <div className="w-14 h-0.5 bg-secondary mt-1 mb-4"></div>
          </div>
          <button className="bg-[#0EAC4D] w-9 h-9 rounded-lg text-white font-bold text-2xl flex justify-center">
            +
          </button>
        </div>
        <div className="flex pt-3 gap-7">
          <div>
            <select className=" font-semibold w-32 h-9 bg-white1 border border-gray rounded-md  ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              className=" text-sm w-[630px] h-9 bg-white1 border border-gray rounded-md placeholder:pl-3"
              placeholder="Энд бич..."
            ></input>
          </div>
          <div className="w-9 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="facebook"
              width={100}
              height={80}
            />
          </div>
        </div>
        <div className="pt-8">
          <div className="font-bold text-sm font-[Ubuntu]">
            Мэргэшсэн чиглэл*
          </div>
          <div className="w-14 h-0.5 bg-secondary mt-1 mb-4"></div>
        </div>
        <div className="w-[845px] h-48 bg-white1 flex  rounded-lg border border-gray">
          <div className="w-1/2 ">
            <div className="pl-5">
              <div className=" flex pt-3 gap-3 w-full">
                <input type="checkbox" className="checkbox"></input>
                <div>Lorem </div>
              </div>
              <div className=" flex pt-3 gap-3  w-full">
                <input type="checkbox" className="checkbox"></input>
                <div>Lorem </div>
              </div>
              <div className=" flex pt-3 gap-3  w-full">
                <input type="checkbox" className="checkbox"></input>
                <div>Lorem </div>
              </div>
              <div className=" flex pt-3 gap-3  w-full">
                <input type="checkbox" className="checkbox"></input>
                <div>Lorem </div>
              </div>
              <div className=" flex pt-3 gap-3  w-full">
                <input type="checkbox" className="checkbox"></input>
                <div>Lorem </div>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div className="pl-5">
              <div className=" flex pt-3 gap-3 w-full">
                <input type="checkbox" className="checkbox"></input>
                <div>Lorem </div>
              </div>
              <div className=" flex pt-3 gap-3  w-full">
                <input type="checkbox" className="checkbox"></input>
                <div>Lorem </div>
              </div>
              <div className=" flex pt-3 gap-3  w-full">
                <input type="checkbox" className="checkbox"></input>
                <div>Lorem </div>
              </div>
              <div className=" flex pt-3 gap-3  w-full">
                <input type="checkbox" className="checkbox"></input>
                <div>Lorem </div>
              </div>
              <div className=" flex pt-3 gap-3  w-full">
                <input type="checkbox" className="checkbox"></input>
                <div>Lorem </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8">
          <div className="font-bold text-sm font-[Ubuntu]">
            Үйлчилгээ үзүүлэх боломжтой хэл*
          </div>
          <div className="w-14 h-0.5 bg-secondary mt-1 mb-4"></div>
        </div>
        <div className="w-[845px] h-48 bg-white1 flex rounded-lg border border-gray ">
          <div className="w-1/2 ">
            <div className="pl-5">
              <div className=" flex pt-3 gap-3 w-full">
                <input type="checkbox" className="checkbox"></input>
                <div>Lorem </div>
              </div>
              <div className=" flex pt-3 gap-3  w-full">
                <input type="checkbox" className="checkbox"></input>
                <div>Lorem </div>
              </div>
              <div className=" flex pt-3 gap-3  w-full">
                <input type="checkbox" className="checkbox"></input>
                <div>Lorem </div>
              </div>
              <div className=" flex pt-3 gap-3  w-full">
                <input type="checkbox" className="checkbox"></input>
                <div>Lorem </div>
              </div>
              <div className=" flex pt-3 gap-3  w-full">
                <input type="checkbox" className="checkbox"></input>
                <div>Lorem </div>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div className="pl-5">
              <div className=" flex pt-3 gap-3 w-full">
                <input type="checkbox" className="checkbox"></input>
                <div>Lorem </div>
              </div>
              <div className=" flex pt-3 gap-3  w-full">
                <input type="checkbox" className="checkbox"></input>
                <div>Lorem </div>
              </div>
              <div className=" flex pt-3 gap-3  w-full">
                <input type="checkbox" className="checkbox"></input>
                <div>Lorem </div>
              </div>
              <div className=" flex pt-3 gap-3  w-full">
                <input type="checkbox" className="checkbox"></input>
                <div>Lorem </div>
              </div>
              <div className=" flex pt-3 gap-3  w-full">
                <input type="checkbox" className="checkbox"></input>
                <div>Lorem </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-5">
          <div>
            <div className="font-bold text-sm font-[Ubuntu]">
              Гол үйлчлүүлэгчид*
            </div>
            <div className="w-14 h-0.5 bg-secondary my-2"></div>
          </div>
          <button className="bg-[#0EAC4D] w-9 h-9 rounded-lg text-white font-bold text-2xl flex justify-center">
            +
          </button>
        </div>
        <div className="flex justify-between pt-2">
          <div>
            <input
              type="text"
              className=" text-sm w-[630px] h-9 bg-white1 border border-gray rounded-md placeholder:pl-3"
              placeholder="Жишээ: “Капитал Маркет” ХХК"
            ></input>
          </div>
          <div className="w-9 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="facebook"
              width={100}
              height={80}
            />
          </div>
        </div>
        <div className="pt-8">
          <div className="font-bold text-sm font-[Ubuntu]">Хуульчид</div>
          <div className="w-14 h-0.5 bg-secondary my-2"></div>
        </div>
        <div className="flex gap-3">
          <div className=" w-72 bg-white1 border border-gray rounded-lg">
            <div className="pl-3 flex flex-col gap-3">
              <div className="font-bold py-2">Сонгогдсон хуульчид</div>
              <div className=" w-64 h-16 bg-white border border-gray rounded-lg flex items-center">
                <Image
                  src="/images/profiles/1.jpeg"
                  className="w-10 h-10 rounded-full m-3"
                  alt="facebook"
                  width={100}
                  height={80}
                />
                <div>
                  <div className="font-bold text-lg">Бархасболд</div>
                  <div className="font-[Ubuntu]">Баярсайхан</div>
                </div>
                <div>
                  <Image
                    src="/images/icons/verified.svg"
                    className="w-5 h-5 mb-4 ml-2"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="w-7 h-7 ml-5 bg-white1 border border-gray flex items-center justify-center rounded-lg">
                  <Image
                    src="/images/icons/trash.svg"
                    className="w-5 h-5"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                </div>
              </div>
              <div className=" w-64 h-16 bg-white border border-gray rounded-lg flex items-center">
                <Image
                  src="/images/profiles/4.jpeg"
                  className="w-10 h-10 rounded-full m-3"
                  alt="facebook"
                  width={100}
                  height={80}
                />
                <div>
                  <div className="font-bold text-lg">Бархасболд</div>
                  <div className="font-[Ubuntu]">Баярсайхан</div>
                </div>
                <div>
                  <Image
                    src="/images/icons/verified.svg"
                    className="w-5 h-5 mb-4 ml-2"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="w-7 h-7 ml-5 bg-white1 border border-gray flex items-center justify-center rounded-lg">
                  <Image
                    src="/images/icons/trash.svg"
                    className="w-5 h-5"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                </div>
              </div>
              <div className=" w-64 h-16 bg-white border border-gray rounded-lg flex items-center">
                <Image
                  src="/images/profiles/3.jpeg"
                  className="w-10 h-10 rounded-full m-3"
                  alt="facebook"
                  width={100}
                  height={80}
                />
                <div>
                  <div className="font-bold text-lg">Бархасболд</div>
                  <div className="font-[Ubuntu]">Баярсайхан</div>
                </div>
                <div>
                  <Image
                    src="/images/icons/verified.svg"
                    className="w-5 h-5 mb-4 ml-2"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="w-7 h-7 ml-5 bg-white1 border border-gray flex items-center justify-center rounded-lg">
                  <Image
                    src="/images/icons/trash.svg"
                    className="w-5 h-5"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                </div>
              </div>
              <div className=" w-64 h-16 bg-white border border-gray rounded-lg flex items-center">
                <Image
                  src="/images/profiles/2.jpeg"
                  className="w-10 h-10 rounded-full m-3"
                  alt="facebook"
                  width={100}
                  height={80}
                />
                <div>
                  <div className="font-bold text-lg">Бархасболд</div>
                  <div className="font-[Ubuntu]">Баярсайхан</div>
                </div>
                <div>
                  <Image
                    src="/images/icons/verified.svg"
                    className="w-5 h-5 mb-4 ml-2"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="w-7 h-7 ml-5 bg-white1 border border-gray flex items-center justify-center rounded-lg">
                  <Image
                    src="/images/icons/trash.svg"
                    className="w-5 h-5"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" p-3 bg-white1 border border-gray rounded-lg">
            <div className="flex relative mb-4">
              <input
                type="text"
                className="text-md bg-white1 w-full pr-12 py-2 border-b-2 border-black outline-none placeholder:text-lg font-semibold"
                placeholder="Бархасболд"
              ></input>
              <Image
                src="/images/icons/search.svg"
                className="w-6 h-6 absolute right-3 mt-1"
                alt="facebook"
                width={100}
                height={80}
              />
            </div>
            <div className="">
              <div className="grid grid-cols-2 gap-2  ">
                <div className=" w-64 h-16 mt-2 bg-white border border-gray rounded-lg flex items-center">
                  <Image
                    src="/images/profiles/1.jpeg"
                    className="w-10 h-10 rounded-full m-3"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                  <div>
                    <div className="font-bold text-lg">Бархасболд</div>
                    <div className="font-[Ubuntu]">Баярсайхан</div>
                  </div>
                  <div>
                    <Image
                      src="/images/icons/verified.svg"
                      className="w-5 h-5 mb-4 ml-2"
                      alt="facebook"
                      width={100}
                      height={80}
                    />
                  </div>
                  <button className="bg-[#0EAC4D] w-9 h-9 ml-4 rounded-lg text-white font-bold text-2xl flex justify-center">
                    +
                  </button>
                </div>
                <div className=" w-64 h-16 mt-2 bg-white border border-gray rounded-lg flex items-center">
                  <Image
                    src="/images/profiles/1.jpeg"
                    className="w-10 h-10 rounded-full m-3"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                  <div>
                    <div className="font-bold text-lg">Бархасболд</div>
                    <div className="font-[Ubuntu]">Баярсайхан</div>
                  </div>
                  <div>
                    <Image
                      src="/images/icons/verified.svg"
                      className="w-5 h-5 mb-4 ml-2"
                      alt="facebook"
                      width={100}
                      height={80}
                    />
                  </div>
                  <button className="bg-[#0EAC4D] w-9 h-9 ml-4 rounded-lg text-white font-bold text-2xl flex justify-center">
                    +
                  </button>
                </div>
                <div className=" w-64 h-16 mt-2 bg-white border border-gray rounded-lg flex items-center">
                  <Image
                    src="/images/profiles/1.jpeg"
                    className="w-10 h-10 rounded-full m-3"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                  <div>
                    <div className="font-bold text-lg">Бархасболд</div>
                    <div className="font-[Ubuntu]">Баярсайхан</div>
                  </div>
                  <div>
                    <Image
                      src="/images/icons/verified.svg"
                      className="w-5 h-5 mb-4 ml-2"
                      alt="facebook"
                      width={100}
                      height={80}
                    />
                  </div>
                  <button className="bg-[#0EAC4D] w-9 h-9 ml-4 rounded-lg text-white font-bold text-2xl flex justify-center">
                    +
                  </button>
                </div>
                <div className=" w-64 h-16 mt-2 bg-white border border-gray rounded-lg flex items-center">
                  <Image
                    src="/images/profiles/1.jpeg"
                    className="w-10 h-10 rounded-full m-3"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                  <div>
                    <div className="font-bold text-lg">Бархасболд</div>
                    <div className="font-[Ubuntu]">Баярсайхан</div>
                  </div>
                  <div>
                    <Image
                      src="/images/icons/verified.svg"
                      className="w-5 h-5 mb-4 ml-2"
                      alt="facebook"
                      width={100}
                      height={80}
                    />
                  </div>
                  <button className="bg-[#0EAC4D] w-9 h-9 ml-4 rounded-lg text-white font-bold text-2xl flex justify-center">
                    +
                  </button>
                </div>
                <div className=" w-64 h-16 mt-2 bg-white border border-gray rounded-lg flex items-center">
                  <Image
                    src="/images/profiles/1.jpeg"
                    className="w-10 h-10 rounded-full m-3"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                  <div>
                    <div className="font-bold text-lg">Бархасболд</div>
                    <div className="font-[Ubuntu]">Баярсайхан</div>
                  </div>
                  <div>
                    <Image
                      src="/images/icons/verified.svg"
                      className="w-5 h-5 mb-4 ml-2"
                      alt="facebook"
                      width={100}
                      height={80}
                    />
                  </div>
                  <button className="bg-[#0EAC4D] w-9 h-9 ml-4 rounded-lg text-white font-bold text-2xl flex justify-center">
                    +
                  </button>
                </div>
                <div className=" w-64 h-16 mt-2 bg-white border border-gray rounded-lg flex items-center">
                  <Image
                    src="/images/profiles/1.jpeg"
                    className="w-10 h-10 rounded-full m-3"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                  <div>
                    <div className="font-bold text-lg">Бархасболд</div>
                    <div className="font-[Ubuntu]">Баярсайхан</div>
                  </div>
                  <div>
                    <Image
                      src="/images/icons/verified.svg"
                      className="w-5 h-5 mb-4 ml-2"
                      alt="facebook"
                      width={100}
                      height={80}
                    />
                  </div>
                  <button className="bg-[#0EAC4D] w-9 h-9 ml-4 rounded-lg text-white font-bold text-2xl flex justify-center">
                    +
                  </button>
                </div>
                <div className=" w-64 h-16 mt-2 bg-white border border-gray rounded-lg flex items-center">
                  <Image
                    src="/images/profiles/1.jpeg"
                    className="w-10 h-10 rounded-full m-3"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                  <div>
                    <div className="font-bold text-lg">Бархасболд</div>
                    <div className="font-[Ubuntu]">Баярсайхан</div>
                  </div>
                  <div>
                    <Image
                      src="/images/icons/verified.svg"
                      className="w-5 h-5 mb-4 ml-2"
                      alt="facebook"
                      width={100}
                      height={80}
                    />
                  </div>
                  <button className="bg-[#0EAC4D] w-9 h-9 ml-4 rounded-lg text-white font-bold text-2xl flex justify-center">
                    +
                  </button>
                </div>
                <div className=" w-64 h-16 mt-2 bg-white border border-gray rounded-lg flex items-center">
                  <Image
                    src="/images/profiles/1.jpeg"
                    className="w-10 h-10 rounded-full m-3"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                  <div>
                    <div className="font-bold text-lg">Бархасболд</div>
                    <div className="font-[Ubuntu]">Баярсайхан</div>
                  </div>
                  <div>
                    <Image
                      src="/images/icons/verified.svg"
                      className="w-5 h-5 mb-4 ml-2"
                      alt="facebook"
                      width={100}
                      height={80}
                    />
                  </div>
                  <button className="bg-[#0EAC4D] w-9 h-9 ml-4 rounded-lg text-white font-bold text-2xl flex justify-center">
                    +
                  </button>
                </div>
                <div className=" w-64 h-16 mt-2 bg-white border border-gray rounded-lg flex items-center">
                  <Image
                    src="/images/profiles/1.jpeg"
                    className="w-10 h-10 rounded-full m-3"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                  <div>
                    <div className="font-bold text-lg">Бархасболд</div>
                    <div className="font-[Ubuntu]">Баярсайхан</div>
                  </div>
                  <div>
                    <Image
                      src="/images/icons/verified.svg"
                      className="w-5 h-5 mb-4 ml-2"
                      alt="facebook"
                      width={100}
                      height={80}
                    />
                  </div>
                  <button className="bg-[#0EAC4D] w-9 h-9 ml-4 rounded-lg text-white font-bold text-2xl flex justify-center">
                    +
                  </button>
                </div>
                <div className=" w-64 h-16 mt-2 bg-white border border-gray rounded-lg flex items-center">
                  <Image
                    src="/images/profiles/1.jpeg"
                    className="w-10 h-10 rounded-full m-3"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                  <div>
                    <div className="font-bold text-lg">Бархасболд</div>
                    <div className="font-[Ubuntu]">Баярсайхан</div>
                  </div>
                  <div>
                    <Image
                      src="/images/icons/verified.svg"
                      className="w-5 h-5 mb-4 ml-2"
                      alt="facebook"
                      width={100}
                      height={80}
                    />
                  </div>
                  <button className="bg-[#0EAC4D] w-9 h-9 ml-4 rounded-lg text-white font-bold text-2xl flex justify-center">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-5">
          <div>
            <div className="font-bold text-sm font-[Ubuntu]">
              Үйлчлүүлэгчийн сэтгэгдэл*
            </div>
            <div className="w-14 h-0.5 bg-secondary my-1"></div>
          </div>
          <button className="bg-[#0EAC4D] w-9 h-9 rounded-lg text-white font-bold text-2xl flex justify-center">
            +
          </button>
        </div>
        <div className="w-full gap-3 p-3 mt-2 border border-gray rounded-lg">
          <div className="flex justify-between pb-3">
            <div>
              <input
                type="text"
                className=" text-sm w-[630px] h-9 bg-white1 border border-gray rounded-md placeholder:pl-3"
                placeholder="Энд бич..."
              ></input>
            </div>

            <div className="w-9 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
              <Image
                src="/images/icons/trash.svg"
                className="w-6 h-6"
                alt="facebook"
                width={100}
                height={80}
              />
            </div>
          </div>
          <div>
            <textarea
              className="input h-20"
              id="about"
              name="."
              rows="4"
              cols="30"
              placeholder="(600 тэмдэгтээс ихгүй байна)"
            ></textarea>
          </div>
        </div>
        <div className="pt-10">
          <div className="font-bold text-sm font-[Ubuntu]">Холбоо барих</div>
          <div className="w-14 h-0.5 bg-secondary my-2"></div>
        </div>
        <div className="flex justify-between">
          <input
            type="text"
            className=" text-sm w-[236px] h-9 bg-white1 border border-gray rounded-md placeholder:pl-3"
            placeholder="Утасны дугаар 1*"
          ></input>
          <input
            type="text"
            className=" text-sm w-[236px] h-9 bg-white1 border border-gray rounded-md placeholder:pl-3"
            placeholder="Утасны дугаар 2"
          ></input>
          <input
            type="text"
            className=" text-sm w-[236px] h-9 bg-white1 border border-gray rounded-md placeholder:pl-3"
            placeholder="И-мэйл*"
          ></input>
        </div>
        <div className="pt-7 pb-2">
          <div className="font-bold text-sm font-[Ubuntu]">Хаяг*</div>
        </div>
        <div className=" flex flex-col gap-3">
          <div className="flex justify-between">
            <div>
              <select className=" font-semibold w-[236px] h-9 bg-white1 border border-gray rounded-md outline-none">
                <option>Нийслэл/Аймаг</option>
                <option>Улаанбаатар</option>
                <option>Дархан</option>
              </select>
            </div>
            <div>
              <select className=" font-semibold w-[236px] h-9 bg-white1 border border-gray rounded-md outline-none ">
                <option>Дүүрэг/Сум</option>
                <option>Хан-Уул</option>
                <option>Чингэлтэй</option>
              </select>
            </div>
            <div>
              <select className=" font-semibold w-[236px] h-9 bg-white1 border border-gray rounded-md outline-none">
                <option>Хороо/Баг</option>
                <option>1-р хороо</option>
                <option>2-р хороо</option>
              </select>
            </div>
          </div>
          <div>
            <textarea
              className="input h-20"
              id="about"
              name="."
              rows="4"
              cols="30"
              placeholder="Дэлгэнгүй хаяг Жишээ: Улаанбаатар хот, Сүхбаатар
            дүүрэг, 8-р хороо, Амарын гудамж
            29, Сан Бизнес Центр, 402 тоот"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <div className="w-8 h-8 bg-white1 rounded-lg border border-gray">
              <div>
                <Image
                  src="/images/icons/google_map.svg"
                  className="w-6 h-6 mb-4 ml-2"
                  alt="facebook"
                  width={100}
                  height={80}
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                className=" text-sm w-[50rem] h-8 bg-white1 border border-gray rounded-md placeholder:pl-3"
                placeholder="Google map shared link"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <div>
            <div className="font-bold text-sm font-[Ubuntu]">
              Шууд холбогдох
            </div>
            <div className="w-14 h-0.5 bg-secondary my-1"></div>
          </div>
          <button className="bg-[#0EAC4D] w-9 h-9 rounded-lg text-white font-bold text-2xl flex justify-center">
            +
          </button>
        </div>
        <div className="w-full p-3 mt-2 bg-white rounded-lg border border-gray flex justify-between">
          <div className=" flex flex-col gap-2">
            <div className="font-semibold italic">Мэргэшсэн чиглэл</div>
            <div>
              <select className=" font-semibold text-sm w-[193px] h-9 bg-white1 border border-gray rounded-md outline-none  ">
                <option>Хөрөнгө оруулалтын сан</option>
                <option>Хөрөнгө оруулалтын сан</option>
                <option>Хөрөнгө оруулалтын сан</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold italic">Нэр</div>
            <div>
              <input
                type="text"
                className=" text-sm w-[193px] h-8 bg-white1 border border-gray rounded-md placeholder:pl-3"
                placeholder="Нэр"
              ></input>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold italic">Утас</div>
            <div>
              <input
                type="text"
                className=" text-sm w-[193px] h-8 bg-white1 border border-gray rounded-md placeholder:pl-3"
                placeholder="Утасны дугаар*"
              ></input>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold italic">Нэр</div>
            <div>
              <input
                type="И-мэйл"
                className=" text-sm w-[193px] h-8 bg-white1 border border-gray rounded-md placeholder:pl-3"
                placeholder="И-мэйл*"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-5">
          <div>
            <div className="font-bold text-sm font-[Ubuntu]">Шагнал</div>
            <div className="w-14 h-0.5 bg-secondary my-1"></div>
          </div>
          <button className="bg-[#0EAC4D] w-9 h-9 rounded-lg text-white font-bold text-2xl flex justify-center">
            +
          </button>
        </div>
        <div className="w-full flex justify-between mt-2">
          <div>
            <select className=" font-semibold text-sm w-28 h-9 bg-white1 border border-gray rounded-md outline-none  ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>
          <div>
            <input
              type="И-мэйл"
              className=" text-sm w-[630px] h-8 bg-white1 border border-gray rounded-md placeholder:pl-3"
              placeholder="Энд бич..."
            ></input>
          </div>
          <div className="w-9 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="facebook"
              width={100}
              height={80}
            />
          </div>
        </div>
        <div className="flex justify-between pt-8">
          <div>
            <div className="font-bold text-sm font-[Ubuntu]">
              Про боно үйл ажиллагаа
            </div>
            <div className="w-14 h-0.5 bg-secondary my-1"></div>
          </div>
          <button className="bg-[#0EAC4D] w-9 h-9 rounded-lg text-white font-bold text-2xl flex justify-center">
            +
          </button>
        </div>
        <div className="w-full flex justify-between mt-2 mb-5">
          <div>
            <input
              type="И-мэйл"
              className=" text-sm w-[630px] h-8 bg-white1 border border-gray rounded-md placeholder:pl-3"
              placeholder="Про боно үйл ажиллагааны тухай бичих талбар"
            ></input>
          </div>
          <div className="w-9 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="facebook"
              width={100}
              height={80}
            />
          </div>
        </div>
      </div>
    </>
  );
}
