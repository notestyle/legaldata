import React from "react";
import Head from "next/head";
import Layout from "@/components/layouts/layout";
import Farm_create from "@/components/farm_create";

export default function farm_create() {
  return (
    <>
      <Head>
        <title>Legal Data</title>
        <meta name="description" content="Хуулийн зөвлөгөө" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
      </Head>
      <Layout>
        <div className="w-full px-2 md:px-20 lg:px-32 h-28 flex justify-between items-center gap-10 bg-white1">
          <div className="w-1/3 h-0.5 bg-gradient-to-r from-white   to-primary"></div>
          <div className=" font-bold text-primary text-2xl gap-3 text-center ">
            Хуулийн фирм
          </div>
          <div className=" w-1/3  h-0.5 bg-gradient-to-l from-white to-primary "></div>
        </div>
        <div className="flex justify-center">
          <div className="text-secondary font-[Ubuntu]">
            *гэсэн тэмдэгтэй талбарыг заавал бөглөнө.
          </div>
        </div>
        <Farm_create />
      </Layout>
    </>
  );
}