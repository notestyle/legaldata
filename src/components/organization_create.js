import React from "react";
import Image from "next/image";

export default function Organization_create() {
  return (
    <>
      <div className="w-full lg:w-[30rem] py-8 lg:sticky top-20 self-start  ">
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
                  alt="facebook"
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
            <div className="font-bold ">Байгууллагын нэр*</div>
            <div className="flex pt-3 gap-4">
              <input
                type="text"
                className=" font-semibold w-full h-8 bg-white1 border border-gray rounded-md pl-3 outline-none"
                placeholder="Энд бич..."
              ></input>
              <div>
                <select className=" font-semibold w-28 h-8 bg-white1 border border-gray rounded-md outline-none  ">
                  <option>ХХК</option>
                  <option>ХХК1</option>
                  <option>ХХК2</option>
                </select>
              </div>
            </div>
            <div className="pt-4 font-bold">Холбоос</div>
            <div className="py-4 flex flex-col gap-3">
              <div className="flex gap-4 relative">
                <div className="bg-white1 w-9 h-8 rounded-lg border border-gray"></div>
                <div>
                  <Image
                    src="/images/social/url_facebook.svg"
                    className="w-6 h-6 absolute left-1 top-1"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                </div>

                <input
                  type="text"
                  className="w-full h-8 font-semibold outline-none rounded-lg bg-white1 pl-3 border border-gray"
                  placeholder="URL"
                ></input>
              </div>
              <div className="flex gap-4 relative">
                <div className="bg-white1 w-9 h-8 rounded-lg border border-gray"></div>
                <div>
                  <Image
                    src="/images/social/url_instagram.svg"
                    className="w-6 h-6 absolute left-1 top-1"
                    alt="instagram"
                    width={100}
                    height={80}
                  />
                </div>

                <input
                  type="text"
                  className="w-full h-8 font-semibold rounded-lg bg-white1 pl-3 border border-gray outline-none"
                  placeholder="URL"
                ></input>
              </div>
              <div className="flex gap-4 relative">
                <div className="bg-white1 w-9 h-8 rounded-lg border border-gray"></div>
                <div>
                  <Image
                    src="/images/social/url_twitter.svg"
                    className="w-6 h-6 absolute left-1 top-1"
                    alt="twitter"
                    width={100}
                    height={80}
                  />
                </div>
                <input
                  type="text"
                  className="w-full h-8 font-semibold rounded-lg bg-white1 pl-3 border border-gray outline-none"
                  placeholder="URL"
                ></input>
              </div>
              <div className="flex gap-4 relative">
                <div className="bg-white1 w-9 h-8 rounded-lg border border-gray"></div>
                <div>
                  <Image
                    src="/images/social/url_youtube.svg"
                    className="w-6 h-6 absolute left-1 top-1"
                    alt="youtube"
                    width={100}
                    height={80}
                  />
                </div>
                <input
                  type="text"
                  className="w-full h-8 font-semibold rounded-lg bg-white1 pl-3 border border-gray outline-none"
                  placeholder="URL"
                ></input>
              </div>
              <div className="flex gap-4 relative">
                <div className="bg-white1 w-9 h-8 rounded-lg border border-gray"></div>
                <div>
                  <Image
                    src="/images/social/url_linkedin.svg"
                    className="w-6 h-6 absolute left-1 top-1"
                    alt="linkedin"
                    width={100}
                    height={80}
                  />
                </div>
                <input
                  type="text"
                  className="w-full h-8  font-semibold rounded-lg bg-white1 pl-3 border border-gray outline-none"
                  placeholder="URL"
                ></input>
              </div>
              <div className="flex gap-4 relative">
                <div className="bg-white1 w-9 h-8 rounded-lg border border-gray"></div>
                <div>
                  <Image
                    src="/images/social/url_internet.svg"
                    className="w-6 h-6 absolute left-1 top-1"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                </div>
                <input
                  type="text"
                  className="w-full h-8  font-semibold rounded-lg bg-white1 pl-3 border border-gray outline-none"
                  placeholder="URL"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
