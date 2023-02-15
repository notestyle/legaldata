import Layout from "@/components/layout";
import Detail from "@/components/detail";
import Userdetail from "@/components/user-detail";
import Head from "next/head";
export default function UserPofile() {
  return (
    <>
      <Head>
        <title>Legal Data</title>
        <meta name="description" content="Хуулийн зөвлөгөө" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
      </Head>
      <Layout>
        <Userdetail />
      </Layout>
    </>
  );
}
