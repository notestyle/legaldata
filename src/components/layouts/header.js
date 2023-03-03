import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function Header() {
  const router = useRouter();
  const [clicked, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const size = useWindowSize();

  return (
    <>
      <div className="w-full fixed h-20 bg-primary flex justify-between place-items-center text-white px-2 md:px-20 lg:px-32 lg:sticky top-0 z-40 ">
        {/* left side */}
        <div className="flex h-full space-x-20 place-items-center">
          <Image
            onClick={() => {
              router.push("/");
            }}
            src="/Logo.png"
            className="w-28 h-14 cursor-pointer resize-none"
            alt="logo"
            width={100}
            height={100}
          />
          {/* routers */}
          <div className="gap-8 items-center hidden lg:flex h-full ">
            <Link
              href="/"
              className={`font-semibold ${
                router.pathname == "/" ? "text-secondary" : ""
              } hover:text-secondary  h-full flex items-center relative`}
            >
              Нүүр
              <div
                className="w-full h-1 bg-secondary absolute bottom-0"
                hidden={router.pathname != "/"}
              ></div>
            </Link>
            <Link
              href="/service"
              className={`font-semibold ${
                router.pathname == "/service" ? "text-secondary" : ""
              } hover:text-secondary  h-full flex items-center relative`}
            >
              Үйлчилгээ
              <div
                href="/rank"
                className={`font-semibold ${
                  router.pathname == "/rank" ? "text-secondary" : ""
                } hover:text-secondary  h-full flex items-center relative`}
              ></div>
              <div
                className="w-full h-1 bg-secondary absolute bottom-0"
                hidden={router.pathname != "/service"}
              ></div>
            </Link>
            <Link
              href="/rank"
              className={`font-semibold ${
                router.pathname == "/rank" ? "text-secondary" : ""
              } hover:text-secondary  h-full flex items-center relative`}
            >
              Чансаа
              <div
                className="w-full h-1 bg-secondary absolute bottom-0"
                hidden={router.pathname != "/rank"}
              ></div>
            </Link>
            <Link
              href="/oportunity"
              className={`font-semibold ${
                router.pathname == "/oportunity" ? "text-secondary" : ""
              } hover:text-secondary  h-full flex items-center relative`}
            >
              Боломжууд
              <div
                className="w-full h-1 bg-secondary absolute bottom-0"
                hidden={router.pathname != "/oportunity"}
              ></div>
            </Link>
          </div>
        </div>
        {/* right side */}
        <div className="hidden lg:flex gap-5 items-center">
          <Link
            className="flex justify-center items-center gap-4 font-semibold"
            href={"/new"}
          >
            <Image
              src="/images/icons/header.svg"
              alt="header"
              className="w-4 h-4"
              width={100}
              height={100}
            />
            Бүртгүүлэх
          </Link>
          {/* login */}
          <Link
            className=" font-semibold  h-8 flex justify-between items-center overflow-hidden"
            href={"/login"}
          >
            {clicked ? (
              <>
                <div className="bg-white w-8 h-full rounded-l-md flex justify-center items-center">
                  <Image
                    src="/images/profiles/1.jpeg"
                    width={100}
                    height={100}
                    className="bg-white w-8 h-full rounded-l-md flex justify-center items-center object-cover"
                  />
                </div>
                <div className="px-4 border border-white rounded-r-md h-full flex items-center ">
                  Бархас
                </div>
              </>
            ) : (
              <>
                <div className="bg-white w-8 h-full rounded-l-md flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-4 h-4 text-primary"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="px-4 border border-white rounded-r-md h-full flex items-center ">
                  Нэвтрэх
                </div>
              </>
            )}
            {/* user logged in */}
          </Link>
          <button
            className=" text-sm font-bold text-primary bg-white w-8 h-8 rounded-lg"
            onClick={() => setClick(!clicked)}
          >
            MN
          </button>
        </div>

        {/* for small phones size : lg */}
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setOpen(!open)}
            className={`menu-icon ${
              open
                ? "opacity-50 group-hover:opacity-100 rotate-90"
                : "opacity-50 group-hover:opacity-100"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className={`menu-icon ${
              open
                ? "opacity-50 group-hover:opacity-100 rotate-90"
                : "opacity-50 group-hover:opacity-100"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            onClick={() => setOpen(!open)}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </div>
      <div
        className={`bg-primary text-white fixed z-30 w-full px-5 h-full pt-24 ease-in-out duration-300 ${
          !open ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex flex-col gap-5">
          <Link
            href="/"
            className={`font-semibold ${
              router.pathname == "/" ? "text-secondary" : ""
            } hover:text-secondary  flex items-center relative`}
          >
            Нүүр
          </Link>
          <Link
            href="/service"
            className={`font-semibold ${
              router.pathname == "/service" ? "text-secondary" : ""
            } hover:text-secondary  flex items-center relative`}
          >
            Үйлчилгээ
            <div
              href="/rank"
              className={`font-semibold ${
                router.pathname == "/rank" ? "text-secondary" : ""
              } hover:text-secondary  flex items-center relative`}
            ></div>
          </Link>
          <Link
            href="/rank"
            className={`font-semibold ${
              router.pathname == "/rank" ? "text-secondary" : ""
            } hover:text-secondary   flex items-center relative`}
          >
            Чансаа
          </Link>
          <Link
            href="/oportunity"
            className={`font-semibold ${
              router.pathname == "/oportunity" ? "text-secondary" : ""
            } hover:text-secondary   flex items-center relative`}
          >
            Боломжууд
          </Link>
        </div>
        <div className="w-40 pt-4 flex flex-col gap-4">
          {/* bvrtgvvleh button */}
          <Link
            className="flex items-center gap-6 font-semibold border border-white w-full rounded-lg p-2"
            href={"/new"}
          >
            <Image
              src="/images/icons/header.svg"
              alt="header"
              className="w-4 h-4"
              width={100}
              height={100}
            />
            Бүртгүүлэх
          </Link>
          {/* login button */}
          <Link href={"/login"}>
            {clicked ? (
              <>
                <div className="w-full h-full rounded-md flex items-center border border-white">
                  <Image
                    src="/images/profiles/1.jpeg"
                    width={100}
                    height={100}
                    className="bg-white h-10 w-10 object-cover rounded-l-md flex justify-center items-center"
                  />

                  <div className="px-4 py-2 rounded-r-md h-full flex items-center ">
                    Бархас
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-full h-full rounded-md flex items-center border border-white">
                  <div className="h-10 w-8 flex place-items-center justify-center bg-white rounded-l-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-4 w-4 text-primary"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="px-4 py-2 rounded-r-md h-full flex items-center ">
                    Нэвтрэх
                  </div>
                </div>
              </>
            )}
          </Link>
        </div>
      </div>
    </>
  );
}
