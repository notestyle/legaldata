import React from "react";
import Head from "next/head";
import Layout from "@/components/layouts/layout";
import Organization_create from "@/components/organization_create";
import Organization_create_detail from "@/components/organization_create_detail";

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
        <div className="w-full px-2 md:px-20  h-28 flex justify-between items-center mt-10 gap-10 bg-white1">
          <div className="w-[30rem] h-0.5 bg-gradient-to-r from-white1   to-primary"></div>
          <div className=" font-bold text-primary text-2xl gap-3 text-center ">
            Байгууллага
          </div>
          <div className=" w-[30rem]  h-0.5 bg-gradient-to-l from-white1 to-primary "></div>
        </div>
        <div className="flex justify-center">
          <div className="text-secondary font-[Ubuntu] font-semibold">
            *гэсэн тэмдэгтэй талбарыг заавал бөглөнө.
          </div>
        </div>
        <div className="flex pt-6 gap-10 flex-col lg:flex-row">
          <Organization_create />
          <Organization_create_detail />
        </div>
      </Layout>
    </>
  );
}
