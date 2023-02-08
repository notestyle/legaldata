import Ad from "@/components/ad";
import Feature from "@/components/feature";
import Layout from "@/components/layout";
import Pay from "@/components/Pay";
import Topic from "@/components/Topic";

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
        <Topic />
        <Feature />
        <Pay />
      </Layout>
    </>
  );
}
