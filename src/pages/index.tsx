import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import AppShellPage from '@/components/Appshell'
import { useGetHusqs } from '@/queries/husq.queries';



export default function Home() {
  const data = useGetHusqs();
  return (
    <>
      <AppShellPage/>
    </>
  );
}
