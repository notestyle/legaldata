import Layout from "@/components/layout";
import Sort from "@/components/sort";
import Tip from "@/components/tip";
import TopFarm from "@/components/topFarm";
import TopLawyer from "@/components/topLawyer";
import Head from "next/head";
import {
  categoryList,
  locationList,
  sectorList,
  yearList,
} from "@/dummy/constant";

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
        <div className="w-full flex gap-8 flex-col lg:flex-row">
          <Sort
            categoryList={categoryList}
            locationList={locationList}
            sectorList={sectorList}
            yearList={yearList}
          />
          <div className="w-full lg:w-[calc(100%-20rem)] py-8">
            <TopFarm />
            <TopLawyer title="2024 оны шилдэг өмгөөлөгчид" />
            <TopLawyer title="2024 оны шилдэг шүүгчид" />
          </div>
        </div>
      </Layout>
    </>
  );
}
