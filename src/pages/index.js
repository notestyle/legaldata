import Ad from "@/components/ad";
import Layout from "@/components/layout";
import MainTable from "@/components/mainTable";
import Search from "@/components/search";
import TopFarm from "@/components/topFarm";
import TopLawyer from "@/components/topLawyer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Legal Data</title>
        <meta name="description" content="Хуулийн зөвлөгөө" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
      </Head>
      <Layout>
        <Search />
        <TopFarm />
        <TopLawyer />
        <div className="h-[1px] bg-gray my-12"></div>
        <MainTable showCategory />
        <Ad />
      </Layout>
    </>
  );
}
