import Image from "next/image";
import Layout from "@/components/layouts/layout";
import Head from "next/head";
export default function Photo() {
  return (
    <>
      <Head>
        <title>Legal Data</title>
        <meta name="description" content="Хуулийн зөвлөгөө" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
      </Head>
      <Layout>
        <div className="w-full">
          <div className="w-full flex items-center justify-center pt-40">
            <Image
              src="/images/profiles/rate.jpg"
              alt="photo"
              className="rounded-full"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col items-center py-12">
            <div className="font-bold ">Бархасболд</div>
            <div>Баярсайхан</div>
          </div>
          <div className=" flex justify-center">
            <button className="w-60 h-10 bg-[#EF233C] rounded-xl text-[#EDF2F4] font-[Ubuntu] font-semibold text-sm shadow-md shadow-secondary">
              Болсон
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}
