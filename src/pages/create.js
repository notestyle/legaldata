import Create from "@/components/create";
import Head from "next/head";
import Layout from "@/components/layouts/layout";

export default function CreateP() {
  return (
    <>
      <Head>
        <title>Legal Data</title>
        <meta name="description" content="Хуулийн зөвлөгөө" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
      </Head>
      <Layout>
        <Create />
      </Layout>
    </>
  );
}
