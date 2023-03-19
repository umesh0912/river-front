import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomeView from "@/views/homeView";
import Layout from "@/components/layout/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>River Front</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Galada&display=swap');
        </style>
      </Head>
      <Layout>
        <HomeView />
      </Layout>
    </>
  );
}
