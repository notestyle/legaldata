import Layout from "@/components/layouts/layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <Head>
        <title>Legal Data</title>
        <meta name="description" content="Хуулийн зөвлөгөө" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
      </Head>
      <Layout>
        <div className="flex pt-20 justify-center">
          <div className="w-80 py-10 flex">
            <div className="w-full flex items-center flex-col">
              <div>
                <Image
                  src="/Logo2.png"
                  alt="logo"
                  className="w-40 h-20"
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-full pt-16">
                <input
                  type="text"
                  className="font-semibold bg-white border w-full pr-12 pl-4 py-2 rounded-xl border-gray outline-none"
                  placeholder="Бүртгэлтэй И-мэйл хаяг/Утас"
                ></input>
              </div>
              <div className="w-full pt-5">
                <input
                  type="password"
                  className="font-semibold bg-white border w-full pr-12 pl-4 py-2 rounded-xl border-gray outline-none"
                  placeholder="Нууц үг"
                ></input>
              </div>
              <div>
                <button className="w-56 h-10 mt-16 bg-[#EF233C] rounded-xl text-[#EDF2F4] font-[Ubuntu] font-semibold text-sm shadow-md shadow-secondary ">
                  Нэвтрэх
                </button>
              </div>
              <div>
                <button
                  className="text-secondary font-semibold mt-10"
                  onClick={() => router.push("/new")}
                >
                  БҮРТГҮҮЛЭХ
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
