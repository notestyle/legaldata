import Layout from "@/components/layout";
import OportunityDetail from "@/components/oportunityDetail";
import RecommendFarm from "@/components/recommendFarm";
import Head from "next/head";

export default function Oportunity() {
  return (
    <>
      <Head>
        <title>Legal Data</title>
        <meta name="description" content="Хуулийн зөвлөгөө" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
      </Head>
      <Layout>
        <div className="flex lg:flex-row-reverse flex-col gap-4 w-full">
          <RecommendFarm />
          <OportunityDetail />
        </div>
      </Layout>
    </>
  );
}
