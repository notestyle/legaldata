import Layout from "@/components/layout";
import Userdetail from "@/components/userDetail";
import Head from "next/head";
import Userdesc from "@/components/userDesc";

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
        <div className="flex gap-10 h-full w-full ">
          <Userdetail />
          <Userdesc />
        </div>
      </Layout>
    </>
  );
}
