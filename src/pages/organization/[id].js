import Desc from "@/components/desc";
import Detail from "@/components/detail";
import Layout from "@/components/layout";
import Head from "next/head";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Legal Data</title>
        <meta name="description" content="Хуулийн зөвлөгөө" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
      </Head>
      <Layout>
        <div className="flex gap-10 h-full w-full ">
          <Detail />
          <Desc />
        </div>
      </Layout>
    </>
  );
}
