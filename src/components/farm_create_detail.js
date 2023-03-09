import React from "react";
import Image from "next/image";
import Language from "./inputs/language";

export default function Farm_create_detail() {
  return (
    <>
      <div className="w-full my-8 p-7  bg-white border border-gray rounded-xl">
        <div className="flex items-center justify-between">
          <Language />
          <button className="bg-[#0EAC4D] h-12 py-2 px-8 rounded-xl text-white font-bold">
            Хадгалах
          </button>
        </div>
        <div className="w-full h-0.5 bg-gray my-7"></div>
        <div className="">
          <div className="font-bold text-sm font-[Ubuntu]">
            Товч танилцуулга
          </div>
          <div className="w-14 h-0.5 bg-secondary mt-1 mb-4"></div>
          <div>
            <textarea
              className="input h-20 font-semibold"
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
        <div className="flex pt-3 gap-4">
          <div>
            <select className=" font-semibold w-20 h-9 bg-white1 border border-gray rounded-md  ">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>
          <input
            type="text"
            className=" font-semibold w-full h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Энд бич..."
          ></input>
          <button className="w-9 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="facebook"
              width={100}
              height={80}
            />
          </button>
        </div>
        <div className="pt-8">
          <div className="font-bold text-sm font-[Ubuntu]">
            Мэргэшсэн чиглэл*
          </div>
          <div className="w-14 h-0.5 bg-secondary mt-1 mb-4"></div>
        </div>
        <div className="w-full h-48 bg-white1 flex  rounded-lg border border-gray">
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
        <div className="w-full h-48 bg-white1 flex rounded-lg border border-gray ">
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
        <div className="flex gap-4    pt-2">
          <input
            type="text"
            className=" font-semibold w-full h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Жишээ: “Капитал Маркет” ХХК"
          ></input>

          <button className="w-9 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="facebook"
              width={100}
              height={80}
            />
          </button>
        </div>
        <div className="pt-8">
          <div className="font-bold text-sm font-[Ubuntu]">Хуульчид</div>
          <div className="w-14 h-0.5 bg-secondary my-2"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="flex flex-col gap-3 px-2 pb-4 w-full lg:w-96 bg-white1 border border-gray rounded-lg">
            <div className="font-bold py-2">Сонгогдсон хуульчид</div>
            <div className=" w-full h-16 bg-white border border-gray rounded-lg flex justify-between items-center">
              <div className="flex">
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
                    className="w-5 h-5 mt-2 ml-2"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                </div>
              </div>
              <button className="w-7 h-7 mr-3 bg-white1 border border-gray flex items-center justify-center rounded-lg">
                <Image
                  src="/images/icons/trash.svg"
                  className="w-5 h-5"
                  alt="facebook"
                  width={100}
                  height={80}
                />
              </button>
            </div>
            <div className=" w-full h-16 bg-white border border-gray rounded-lg flex justify-between items-center">
              <div className="flex">
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
                    className="w-5 h-5 mt-2 ml-2"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                </div>
              </div>
              <button className="w-7 h-7 mr-3 bg-white1 border border-gray flex items-center justify-center rounded-lg">
                <Image
                  src="/images/icons/trash.svg"
                  className="w-5 h-5"
                  alt="facebook"
                  width={100}
                  height={80}
                />
              </button>
            </div>
            <div className=" w-full h-16 bg-white border border-gray rounded-lg flex justify-between items-center">
              <div className="flex">
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
                    className="w-5 h-5 mt-2 ml-2"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                </div>
              </div>
              <button className="w-7 h-7 mr-3 bg-white1 border border-gray flex items-center justify-center rounded-lg">
                <Image
                  src="/images/icons/trash.svg"
                  className="w-5 h-5"
                  alt="facebook"
                  width={100}
                  height={80}
                />
              </button>
            </div>
            <div className=" w-full h-16 bg-white border border-gray rounded-lg flex justify-between items-center">
              <div className="flex">
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
                    className="w-5 h-5 mt-2 ml-2"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                </div>
              </div>
              <button className="w-7 h-7 mr-3 bg-white1 border border-gray flex items-center justify-center rounded-lg">
                <Image
                  src="/images/icons/trash.svg"
                  className="w-5 h-5"
                  alt="facebook"
                  width={100}
                  height={80}
                />
              </button>
            </div>
          </div>
          <div className=" p-3 bg-white1 border border-gray rounded-lg w-full">
            <div className="flex relative mb-4">
              <input
                type="text"
                className="text-md bg-white1 w-full pr-12 py-2 border-b-2 border-gray outline-none placeholder:text-lg font-semibold"
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2  ">
                <div className=" w-full h-16 mt-2 bg-white border border-gray rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
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
                        className="w-5 h-5 mb-5 ml-2"
                        alt="facebook"
                        width={100}
                        height={80}
                      />
                    </div>
                  </div>
                  <button className="bg-[#0EAC4D] w-9 h-9 mr-4 rounded-lg text-white font-bold text-2xl flex justify-center">
                    +
                  </button>
                </div>
                <div className=" w-full h-16 mt-2 bg-white border border-gray rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
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
                        className="w-5 h-5 mb-5 ml-2"
                        alt="facebook"
                        width={100}
                        height={80}
                      />
                    </div>
                  </div>
                  <button className="bg-[#0EAC4D] w-9 h-9 mr-4 rounded-lg text-white font-bold text-2xl flex justify-center">
                    +
                  </button>
                </div>
                <div className=" w-full h-16 mt-2 bg-white border border-gray rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
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
                        className="w-5 h-5 mb-5 ml-2"
                        alt="facebook"
                        width={100}
                        height={80}
                      />
                    </div>
                  </div>
                  <button className="bg-[#0EAC4D] w-9 h-9 mr-4 rounded-lg text-white font-bold text-2xl flex justify-center">
                    +
                  </button>
                </div>
                <div className=" w-full h-16 mt-2 bg-white border border-gray rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
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
                        className="w-5 h-5 mb-5 ml-2"
                        alt="facebook"
                        width={100}
                        height={80}
                      />
                    </div>
                  </div>
                  <button className="bg-[#0EAC4D] w-9 h-9 mr-4 rounded-lg text-white font-bold text-2xl flex justify-center">
                    +
                  </button>
                </div>
                <div className=" w-full h-16 mt-2 bg-white border border-gray rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
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
                        className="w-5 h-5 mb-5 ml-2"
                        alt="facebook"
                        width={100}
                        height={80}
                      />
                    </div>
                  </div>
                  <button className="bg-[#0EAC4D] w-9 h-9 mr-4 rounded-lg text-white font-bold text-2xl flex justify-center">
                    +
                  </button>
                </div>
                <div className=" w-full h-16 mt-2 bg-white border border-gray rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
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
                        className="w-5 h-5 mb-5 ml-2"
                        alt="facebook"
                        width={100}
                        height={80}
                      />
                    </div>
                  </div>
                  <button className="bg-[#0EAC4D] w-9 h-9 mr-4 rounded-lg text-white font-bold text-2xl flex justify-center">
                    +
                  </button>
                </div>
                <div className=" w-full h-16 mt-2 bg-white border border-gray rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
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
                        className="w-5 h-5 mb-5 ml-2"
                        alt="facebook"
                        width={100}
                        height={80}
                      />
                    </div>
                  </div>
                  <button className="bg-[#0EAC4D] w-9 h-9 mr-4 rounded-lg text-white font-bold text-2xl flex justify-center">
                    +
                  </button>
                </div>
                <div className=" w-full h-16 mt-2 bg-white border border-gray rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
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
                        className="w-5 h-5 mb-5 ml-2"
                        alt="facebook"
                        width={100}
                        height={80}
                      />
                    </div>
                  </div>
                  <button className="bg-[#0EAC4D] w-9 h-9 mr-4 rounded-lg text-white font-bold text-2xl flex justify-center">
                    +
                  </button>
                </div>
                <div className=" w-full h-16 mt-2 bg-white border border-gray rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
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
                        className="w-5 h-5 mb-5 ml-2"
                        alt="facebook"
                        width={100}
                        height={80}
                      />
                    </div>
                  </div>
                  <button className="bg-[#0EAC4D] w-9 h-9 mr-4 rounded-lg text-white font-bold text-2xl flex justify-center">
                    +
                  </button>
                </div>
                <div className=" w-full h-16 mt-2 bg-white border border-gray rounded-lg flex justify-between items-center">
                  <div className="flex items-center">
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
                        className="w-5 h-5 mb-5 ml-2"
                        alt="facebook"
                        width={100}
                        height={80}
                      />
                    </div>
                  </div>
                  <button className="bg-[#0EAC4D] w-9 h-9 mr-4 rounded-lg text-white font-bold text-2xl flex justify-center">
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
                className="  font-semibold w-full h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
                placeholder="Энд бич..."
              ></input>
            </div>

            <button className="w-9 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
              <Image
                src="/images/icons/trash.svg"
                className="w-6 h-6"
                alt="facebook"
                width={100}
                height={80}
              />
            </button>
          </div>
          <div>
            <textarea
              className="input h-20 font-semibold"
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
        <div className="flex gap-4 flex-col">
          <input
            type="text"
            className=" text-sm font-semibold w-full h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Утасны дугаар 1*"
          ></input>
          <input
            type="text"
            className=" text-sm font-semibold w-full h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Утасны дугаар 2"
          ></input>
          <input
            type="text"
            className=" text-sm font-semibold w-full h-9 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="И-мэйл*"
          ></input>
        </div>
        <div className="pt-7 pb-2">
          <div className="font-bold text-sm font-[Ubuntu]">Хаяг*</div>
        </div>
        <div className=" flex flex-col gap-4">
          <div className="flex gap-4">
            <div>
              <select className=" font-semibold text-sm w-full h-9 bg-white1 border border-gray rounded-md outline-none">
                <option>Нийслэл/Аймаг</option>
                <option>Улаанбаатар</option>
                <option>Дархан</option>
              </select>
            </div>
            <div>
              <select className=" font-semibold text-sm w-full h-9 bg-white1 border border-gray rounded-md outline-none ">
                <option>Дүүрэг/Сум</option>
                <option>Хан-Уул</option>
                <option>Чингэлтэй</option>
              </select>
            </div>
            <div>
              <select className=" font-semibold text-sm w-full h-9 bg-white1 border border-gray rounded-md outline-none">
                <option>Хороо/Баг</option>
                <option>1-р хороо</option>
                <option>2-р хороо</option>
              </select>
            </div>
          </div>
          <div>
            <textarea
              className="input text-sm h-20"
              id="about"
              name="."
              rows="4"
              cols="30"
              placeholder="Дэлгэнгүй хаяг Жишээ: Улаанбаатар хот, Сүхбаатар
            дүүрэг, 8-р хороо, Амарын гудамж
            29, Сан Бизнес Центр, 402 тоот"
            ></textarea>
          </div>
          <div className="flex w-full gap-4 ">
            <div className="w-8 h-8 bg-white1 rounded-lg border border-gray flex justify-center items-center pt-3 pr-[14px]">
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
            <input
              type="text"
              className=" font-semibold w-full h-8 bg-white1 border border-gray rounded-md pl-3 outline-none"
              placeholder="Google map shared link"
            ></input>
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
        <div className="w-full p-3 mt-2 gap-4 bg-white rounded-lg border border-gray lg:flex grid grid-cols-2 ">
          <div className=" flex flex-col gap-2">
            <div className="font-semibold italic">Мэргэшсэн чиглэл</div>

            <select className=" font-semibold text-sm w-full h-8 bg-white1 border border-gray rounded-md outline-none  ">
              <option>Хөрөнгө оруулалтын сан</option>
              <option>Хөрөнгө оруулалтын сан</option>
              <option>Хөрөнгө оруулалтын сан</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold italic">Нэр</div>

            <input
              type="text"
              className=" font-semibold w-full h-8 bg-white1 border border-gray rounded-md pl-3 outline-none"
              placeholder="Нэр"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold italic">Утас</div>
            <div>
              <input
                type="text"
                className=" font-semibold w-full h-8 bg-white1 border border-gray rounded-md pl-3 outline-none"
                placeholder="Утасны дугаар*"
              ></input>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold italic">И-мэйл</div>
            <div>
              <input
                type="И-мэйл"
                className=" font-semibold w-full h-8 bg-white1 border border-gray rounded-md pl-3 outline-none"
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
        <div className="w-full flex mt-2 gap-4">
          <select className=" font-semibold text-sm w-28 h-8 bg-white1 border border-gray rounded-md outline-none  ">
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
          </select>

          <input
            type="И-мэйл"
            className=" font-semibold w-full h-8 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Энд бич..."
          ></input>
          <button className="w-9 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="facebook"
              width={100}
              height={80}
            />
          </button>
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
        <div className="w-full flex justify-between mt-2 mb-5 gap-4">
          <input
            type="И-мэйл"
            className=" font-semibold w-full h-8 bg-white1 border border-gray rounded-md pl-3 outline-none"
            placeholder="Про боно үйл ажиллагааны тухай бичих талбар"
          ></input>

          <button className="w-9 h-9 bg-white1 border border-gray flex items-center justify-center rounded-lg">
            <Image
              src="/images/icons/trash.svg"
              className="w-6 h-6"
              alt="facebook"
              width={100}
              height={80}
            />
          </button>
        </div>
      </div>
    </>
  );
}
