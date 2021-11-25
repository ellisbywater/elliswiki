import Layout from "@/components/Layout";
import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ellis | Web3 & Blockchain Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen pb-2">
        <Hero />
      </div>
    </>
  );
}
