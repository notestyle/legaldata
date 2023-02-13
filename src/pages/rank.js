import Layout from "@/components/layout";
import Sort from "@/components/sort";
import Tip from "@/components/tip";
import TopFarm from "@/components/topFarm";
import TopLawyer from "@/components/topLawyer";
import Head from "next/head";

export default function Rank() {
  return (
    <>
      <Head>
        <title>Legal Data</title>
        <meta name="description" content="Хуулийн зөвлөгөө" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
      </Head>
      <Layout>
        <div className="w-full h-6 bg-white1"></div>
        <Tip />
        <Sort />
        <TopFarm />
      </Layout>
    </>
  );
}
