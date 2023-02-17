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
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { API } from "@/api/api";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgMoreO } from "react-icons/cg";
import { BsSearch, BsFillPersonFill } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import { GoVerified } from "react-icons/go";
import { RiHome7Fill } from "react-icons/ri";
import { MdPersonOutline } from "react-icons/md";
import { BiHash, BiEnvelope, BiBookmark } from "react-icons/bi";
import Link from "next/link";

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
        <Navbar p="lg" hiddenBreakpoint="sm" width={{ sm: 600, lg: 600 }}>
          <div className="nav">
            <nav>
              <Link className="link" href="/">
                <i className="nav-icons">
                  <RiHome7Fill />
                </i>{" "}
                Home
              </Link>
              <Link className="link" href="/users">
                <i className="nav-icons">
                  <BiHash />
                </i>{" "}
                Users
              </Link>
              <Link className="link" href="/notifications">
                <i className="nav-icons">
                  <FiBell />
                </i>{" "}
                Notifications
              </Link>
              <Link className="link" href="/messages">
                <i className="nav-icons">
                  <BiEnvelope />
                </i>{" "}
                Messages
              </Link>
              <Link className="link" href="/bookmarks">
                <i className="nav-icons">
                  <BiBookmark />
                </i>{" "}
                Bookmarks
              </Link>
              <Link className="link" href="/blue">
                <i className="nav-icons">
                  <GoVerified />
                </i>{" "}
                Blue
              </Link>
              <Link className="link" href="/profile">
                <i className="nav-icons">
                  <MdPersonOutline />
                </i>{" "}
                Profile
              </Link>
              <Link className="link" href="/more">
                <i className="nav-icons">
                  <CgMoreO />
                </i>{" "}
                More
              </Link>
              <button className="tweet">Husq</button>
            </nav>
          </div>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
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
            <Text>
              <h1>Husqr</h1>
            </Text>
            <div className="container">
              <div className="search-box">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search Husqr"
                ></input>
                <button className="search-button">
                  <i>
                    <BsSearch />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
