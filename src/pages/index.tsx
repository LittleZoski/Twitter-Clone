import Head from "next/head";
import styles from "@/styles/Home.module.css";
import AppShellPage from "@/components/Appshell";
import { useGetHusqs } from "@/queries/husq.queries";
import Timeline from "@/components/husq/Timeline";
import LikeHusq from "@/components/husq/LikeHusq";
import DeleteHusq from "@/components/husq/DeleteHusq";

export default function Home() {
  return (
    <>
      <Timeline />
    </>
  );
}
