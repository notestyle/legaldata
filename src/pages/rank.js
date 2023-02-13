import Layout from "@/components/layout";
import Sort from "@/components/sort";
import Tip from "@/components/tip";
import TopFarm from "@/components/topFarm";
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
        <div className="w-full h-6 bg-white1"></div>
        <Tip />
        <div className="flex flex-row gap-4 w-full">
          <Sort />
          <div className="w-[calc(100%-22rem)]">
            <TopFarm />
          </div>
        </div>
      </Layout>
    </>
  );
}
