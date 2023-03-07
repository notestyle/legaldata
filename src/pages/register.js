import Head from "next/head";
import Layout from "@/components/layouts/layout";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Legal Data</title>
        <meta name="description" content="Хуулийн зөвлөгөө" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
      </Head>
      <Layout>
        <div className="w-full px-10 my-16 md:px-20 lg:px-52 h-28 flex justify-between items-center gap-10 bg-white1">
          <div className="w-1/3 h-0.5 bg-gradient-to-r from-white1 to-primary"></div>
          <div className="font-[Ubuntu] font-bold">ПРОФАЙЛ ҮҮСГЭХ</div>
          <div className=" w-1/3  h-0.5 bg-gradient-to-l from-white1 to-primary "></div>
        </div>
        <div className="flex justify-center md:justify-between gap-24 mt-20 flex-col md:flex-row w-full">
          <div className="w-full lg:w-96 h-full pt-20 lg:h-56 text-center bg-white rounded-xl flex flex-col justify-center items-center drop-shadow-lg relative">
            <div className="absolute flex items-center justify-center transform left-1/2  -translate-x-1/2 -top-1/3">
              <Image
                className="w-40"
                src="/images/profiles/create1.svg"
                alt="feature"
                width={100}
                height={100}
              />
            </div>
            <div className="pb-5 font-bold">Хуулийн фирм</div>
            <div className="px-4 text-primary text-xs font-semibold font-[Ubuntu] h-full flex items-end pb-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </div>
            <button
              onClick={() => router.push("farm_create")}
              className=" absolute -bottom-5 w-48 h-10 bg-[#EF233C] rounded-xl text-[#EDF2F4] font-[Ubuntu] font-semibold text-sm drop-shadow-md"
            >
              ҮҮСГЭХ
            </button>
          </div>
          <div className="w-full lg:w-96 h-full pt-20 lg:h-56 text-center relative bg-white rounded-xl flex flex-col justify-center items-center drop-shadow-lg  ">
            <div className="absolute flex items-center justify-center left-1/2 -translate-x-1/2 -top-20">
              <Image
                className="w-40"
                src="/images/profiles/create2.svg"
                alt="feature"
                width={100}
                height={100}
              />
            </div>
            <div className="pb-5 font-bold">Байгууллага</div>
            <div className="px-4 text-primary text-xs font-semibold font-[Ubuntu] h-full flex items-end pb-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </div>
            <button
              onClick={() => router.push("/organization_create")}
              className=" absolute -bottom-5 w-48 h-10 bg-[#EF233C] rounded-xl text-[#EDF2F4] font-[Ubuntu] font-semibold text-sm drop-shadow-md"
            >
              ҮҮСГЭХ
            </button>
          </div>
          <div className="w-full relative lg:w-96 h-full pt-20 lg:h-56 text-center bg-white rounded-xl flex flex-col justify-center items-center drop-shadow-lg mb-12 ">
            <div className="absolute flex items-center justify-center transform left-1/2  -translate-x-1/2 -top-1/3">
              <Image
                className="w-40"
                src="/images/profiles/create3.svg"
                alt="feature"
                width={100}
                height={100}
              />
            </div>
            <div className="pb-5 font-bold">Хувь хүн</div>
            <div className="px-4 text-primary text-xs font-semibold font-[Ubuntu] h-full flex items-end pb-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </div>
            <button
              onClick={() => router.push("/person_create")}
              className=" absolute -bottom-5 w-48 h-10 bg-[#EF233C] rounded-xl text-[#EDF2F4] font-[Ubuntu] font-semibold text-sm drop-shadow-md"
            >
              ҮҮСГЭХ
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}
