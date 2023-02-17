import Head from "next/head";
import styles from "@/styles/Home.module.css";
import AppShellPage from "@/components/Appshell";
import { useGetHusqs } from "@/queries/husq.queries";
import HusqList from "@/components/husq/HusqList";
import LikeHusq from "@/components/husq/LikeHusq";

export default function Home() {
  return (
    <>
      <LikeHusq />
    </>
  );
}
