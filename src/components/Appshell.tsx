import { ReactNode, useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Center,
  Card,
  Button,
  Badge,
  Group,
} from '@mantine/core';
import angry from "./angry.jpg";
import { useQuery } from '@tanstack/react-query';
import { API } from '@/api/api';
import {AiOutlineTwitter} from 'react-icons/ai';
import {CgMoreO} from 'react-icons/cg';
import {BsSearch, BsFillPersonFill} from 'react-icons/bs';
import {FiBell, FiUsers} from 'react-icons/fi';
import {GoVerified} from 'react-icons/go';
import {RiHome7Fill} from 'react-icons/ri';
import {MdPersonOutline} from 'react-icons/md';
import {BiEnvelope, BiBookmark} from  'react-icons/bi';
import Link from 'next/link';

<script
  src="https://kit.fontawesome.com/43dcc20e7a.js"
  crossOrigin="anonymous"
></script>;

export default function AppShellPage({ children }: { children: ReactNode }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const { status, data } = useQuery({
    queryKey: ["HusqrGet"],
    queryFn: () => {
      return API.get("/api/v1/husqs").then((res) => res.data);
    },
  });

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="lg" hiddenBreakpoint="sm" width={{ sm: 300, lg: 300 }}>
          <div className='nav'>
          <nav>
            <Link className="link" href="/">
              <i className='nav-icons'><RiHome7Fill /></i> Home</Link>
            <Link className="link" href="/explore">
              <i className='nav-icons'><FiUsers /></i> Users</Link>
            <Link className="link" href="/users">
              <i className='nav-icons'><FiBell /></i> Notifications</Link>
            <Link className="link" href="/messages">
              <i className='nav-icons'><BiEnvelope /></i> Messages</Link>
            <Link className="link" href="/bookmarks">
              <i className='nav-icons'><BiBookmark /></i> Bookmarks</Link>
            <Link className="link" href="/blue">
              <i className='nav-icons'><GoVerified /></i> Blue</Link>
            <Link className="link" href="/profile">
              <i className='nav-icons'><MdPersonOutline /></i> Profile</Link>
            <Link className="link" href="/more">
              <i className='nav-icons'><CgMoreO /></i> More</Link>
            <button className='tweet'>Husq</button>
          </nav>
          </div>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="lg" hiddenBreakpoint="sm" width={{ sm: 400, lg: 400 }}>
          <div className="container">
            <div className="search-box">
              <input type="text" className="search-input" placeholder="Search Husqr"></input>
              <button className="search-button">
              <i><BsSearch/></i>
              </button>
            </div>
            </div>
            {/* Whats Happening Card*/}
            <Card className="happenings" radius="lg">
          <Group>
            <Text weight={500} style={{paddingBottom: '10px'}}><h1>What's Happening</h1></Text>
          </Group>

          <Text size="lg" color='#00acee'>
            Trending in Texas
          </Text>
          <button className="articles" style={{paddingBottom: '50px'}}>
            If Strike Isn’t Settled Quickly, It May Last Awhile
          </button>

          <Text size="lg" color='#00acee'>
            Trending in Florida
          </Text>
          <button className="articles" style={{paddingBottom: '50px'}}>
            Typhoon Rips Through Cemetery; Hundreds Dead
          </button>

          <Text size="lg" color='#00acee'>
            Trending in NY
          </Text>
          <button className="articles" style={{paddingBottom: '50px'}}>
            Something Went Wrong in Jet Crash, Expert Says
          </button>
          <button className="articles" style={{color: "#00acee", paddingBottom: '50px'}}>
            Show More
          </button>
          </Card>

          {/* Who To Follow Card*/}
          <Card className="follow-me" radius="lg">
          <Group>
            <Text weight={500} style={{paddingBottom: '10px'}}><h1>Who To Follow</h1></Text>
          </Group>

          <button className="articles" style={{paddingBottom: '50px'}}>
          <img className="img"  width="50" height="50" src="data:image/jpeg;base64,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" alt="shaq-oatmeal" /> ShaquilleOatmeal  <GoVerified color="#00acee"/>
          </button>

          <button className="articles" style={{paddingBottom: '50px'}}>
          <img className="img" width="50" height="50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLYl8qaEZBXQMTa4l7MmIiL0MU8V44c7w0nA&usqp=CAU" alt="angryman"/>TheAverageStudent <GoVerified color="#00acee"/>
          </button>

          <button className="articles" style={{paddingBottom: '50px'}}>
           <img className="img" width="50" height="50" src="data:image/jpeg;base64,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" 
           alt="LordVoldy"/> LordVoldy <GoVerified color="#00acee"/>
          </button>
          <button className="articles" style={{color: "#00acee", paddingBottom: '50px'}}>
            Show More
          </button>
          </Card>
          </Aside>
        </MediaQuery>
        }


      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <div className="icon">
              <AiOutlineTwitter size="3em" style={{ color: "#00acee" }} />
            </div>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
