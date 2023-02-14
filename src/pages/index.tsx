import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Login from "@/components/Register";
import Register from "@/components/Register";
import HusqList from "@/components/husq/HusqList";
import { useGetHusqs } from "@/queries/husq.queries";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data = useGetHusqs();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Register />
      </main>
    </>
  );
}
