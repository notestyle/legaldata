import Ad from "@/components/modules/ad";
import Layout from "@/components/layouts/layout";
import MainTable from "@/components/modules/mainTable";
import Search from "@/components/inputs/search";
import TopFarm from "@/components/modules/topFarm";
import TopLawyer from "@/components/modules/topLawyer";
import RecommendFarm from "@/components/modules/recommendFarm";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Legal Data</title>
        <meta name="description" content="Хуулийн зөвлөгөө" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/logo.png" />
      </Head>

      <Layout sticky={<Search />}>
        <div className="flex lg:flex-row-reverse flex-col gap-4 w-full">
          <RecommendFarm />
          <div className="w-full lg:w-[calc(100%-22rem)] pt-4">
            <TopFarm />
            <TopLawyer title="2024 оны шилдэг өмгөөлөгчид" />
            <div className="h-[1px] bg-gray my-12"></div>
            <MainTable showCategory />
            <Ad />
          </div>
        </div>
      </Layout>
    </>
  );
}
