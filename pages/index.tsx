import Head from "next/head";
import HomeView from "@/views/homeView";
import Layout from "@/components/layout/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>River Front</title>
      </Head>
      <Layout>
        <HomeView />
      </Layout>
    </>
  );
}
