import Layout from "@/components/layouts/layout";
import New from "@/components/new";
import Head from "next/head";
import React from "react";

export default function Create() {
  return (
    <>
      <Head>
        <title>Legal Data</title>
        <meta name="description" content="Хуулийн зөвлөгөө" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
      </Head>
      <Layout>
        <div className="flex pt-12 justify-center">
          <New />
        </div>
      </Layout>
    </>
  );
}
