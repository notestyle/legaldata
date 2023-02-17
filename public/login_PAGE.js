import Layout from "@/components/layouts/layout";
import Enter from "@/components/modules/login";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>Legal Data</title>
        <meta name="description" content="Хуулийн зөвлөгөө" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
      </Head>
      <Layout>
        <div className="flex pt-20 justify-center">
          <Enter />
        </div>
      </Layout>
    </>
  );
}
