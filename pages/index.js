import Layout from "@/components/Layout";
import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero />
      </div>
    </Layout>
  );
}
