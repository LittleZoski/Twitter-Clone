import { useGetCurrentUser, useGetUserWithId } from "@/queries/user.queries";
import { Husq } from "@/types/husq";
import {
  Card,
  Text,
  Group,
  Avatar,
  Popover,
  ActionIcon,
  Loader,
} from "@mantine/core";
import { useDebouncedState } from "@mantine/hooks";
import React, { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import CreateHusq from "./CreateHusq";
import DeleteHusq from "./DeleteHusq";
import LikeHusq from "./LikeHusq";
import { Reply } from "./Reply";

function HusqBox({ husq }: { husq: Husq }) {
  const user = useGetUserWithId(husq.authorId).data;
  const [opened, setOpened] = useState(false);
  const { userId, status } = useGetCurrentUser();

  const handleReply = () => {
    setOpened(!opened);
  };

  if (status == "loading") {
    return <Loader />;
  }

  return (
    <Popover width="35%" position="bottom" opened={opened} onChange={setOpened}>
      <Popover.Target>
        <Card
          shadow="sm"
          p="lg"
          radius="md"
          mb="lg"
          withBorder
          w="70%"
          miw="30vw"
        >
          <Card.Section inheritPadding py="xs">
            <Group>
              <Avatar
                radius="xl"
                src={`https://loremflickr.com/320/240/nature?${user?.id}`}
                alt={husq.text}
              />
              <Text fw={700}>{user?.name}</Text>
              <Text>@{user?.username}</Text>
              <Text>{husq.createdAt}</Text>
            </Group>
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text>{husq.text}</Text>
          </Group>

          <Group>
            <Group spacing={"xs"} px="10%">
              <LikeHusq husq={husq} />
            </Group>
            <Group spacing={"xs"}>
              <ActionIcon>
                <FaRegComment color="#00acee" onClick={handleReply} />
              </ActionIcon>
              <Text>{husq._count.replies}</Text>
            </Group>
            {userId && (
              <Group spacing={"xs"}>
                <DeleteHusq husq={husq} userId={userId} />
              </Group>
            )}
          </Group>
        </Card>
      </Popover.Target>

      <Popover.Dropdown>
        <CreateHusq replyId={husq.id} />
      </Popover.Dropdown>
    </Popover>
  );
}

export default HusqBox;
