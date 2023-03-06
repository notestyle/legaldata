import React from "react";
import Image from "next/image";

export default function Person_create() {
  return (
    <>
      <div className="w-full lg:w-[30rem] my-8 sticky top-20 self-start ">
        <div>
          <div className="relative">
            <button className="absolute bottom-0 right-0 p-3">
              <Image
                src="/images/icons/camera.svg"
                className=" w-full"
                alt="facebook"
                width={100}
                height={80}
              />
            </button>
            <Image
              src="/images/profiles/farm_create_cover.jpg"
              className=" w-full  rounded-2xl"
              alt="facebook"
              width={100}
              height={80}
            />
          </div>
          <div className="flex pl-2 pt-3 gap-5">
            <div className=" w-28 h-20 relative">
              <button className="absolute bottom-3 right-0 p-3 z-10">
                <Image
                  src="/images/icons/camera.svg"
                  className=" w-full"
                  alt="add photo"
                  width={100}
                  height={80}
                />
              </button>
              <Image
                src="/images/profiles/create_farm.svg"
                className=" w-full absolute -translate-y-1/2"
                alt="facebook"
                width={100}
                height={80}
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-white border border-gray rounded-lg">
          <div className="px-5 pt-4">
            <div className="font-bold ">Овог нэр*</div>
            <div className="flex pt-3 gap-5 justify-between">
              <div>
                <input
                  type="text"
                  className=" font-semibold w-52 h-8 bg-white1 border border-gray rounded-md pl-3 outline-none"
                  placeholder="Овог"
                ></input>
              </div>
              <div>
                <input
                  type="text"
                  className=" font-semibold w-52 h-8 bg-white1 border border-gray rounded-md pl-3 outline-none"
                  placeholder="Нэр"
                ></input>
              </div>
            </div>
            <div className="pt-4 font-bold">Холбогдох</div>
            <div className="flex flex-col gap-3 py-2">
              <div className="flex justify-between relative">
                <div className="bg-white1 w-8 h-8 rounded-lg border border-gray"></div>
                <div>
                  <Image
                    src="/images/icons/phone.svg"
                    className="w-6 h-6 absolute left-1 top-1"
                    alt="instagram"
                    width={100}
                    height={80}
                  />
                </div>
                <div className=" w-full flex justify-between pl-6">
                  <input
                    type="text"
                    className="w-44 h-8  font-semibold rounded-lg bg-white1 pl-3 border border-gray outline-none"
                    placeholder="Утасны дугаар 1*"
                  ></input>
                  <input
                    type="text"
                    className="w-44 h-8 font-semibold rounded-lg bg-white1 pl-3 border border-gray outline-none"
                    placeholder="Утасны дугаар 2"
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex justify-between relative">
                  <div className="bg-white1 w-8 h-8 rounded-lg border border-gray"></div>
                  <div>
                    <Image
                      src="/images/icons/mail.svg"
                      className="w-6 h-6 absolute left-1 top-1"
                      alt="instagram"
                      width={100}
                      height={80}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-96 h-8  font-semibold rounded-lg bg-white1 pl-3 border border-gray outline-none"
                      placeholder="И-Майл*"
                    ></input>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between relative">
                  <div className="bg-white1 w-8 h-8 rounded-lg border border-gray"></div>
                  <div>
                    <Image
                      src="/images/icons/location.svg"
                      className="w-6 h-6 absolute left-1 top-1"
                      alt="instagram"
                      width={100}
                      height={80}
                    />
                  </div>
                  <div>
                    <textarea
                      className=" bg-white1  border border-gray rounded-lg pl-2 outline-none"
                      id="about"
                      name="."
                      rows="3"
                      cols="49"
                      placeholder="Энд бич..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
