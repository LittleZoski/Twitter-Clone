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
import React, { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import CreateHusq from "./CreateHusq";
import DeleteHusq from "./DeleteHusq";
import { HusqReplies } from "./HusqReplies";
import LikeHusq from "./LikeHusq";

function HusqBox({ husq }: { husq: Husq }) {
  const user = useGetUserWithId(husq.authorId).data;
  const [opened, setOpened] = useState(false);
  const [replyState, setReplyState] = useState(false);
  const [targetSize, setTargetSize] = useState();
  const { userId, status } = useGetCurrentUser();

  if (status == "loading") {
    return <Loader />;
  }

  const handleReply = () => {
    setReplyState(true);
    setOpened(true);
  };

  const showReply = () => {
    setReplyState(false);
    setOpened(true);
  };

  const ReplyBox = ({
    replyState,
    husq,
  }: {
    replyState: Boolean;
    husq: Husq;
  }) => {
    return (
      <>
        {replyState ? (
          <CreateHusq replyId={husq.id} />
        ) : (
          <HusqReplies id={husq.id} />
        )}
      </>
    );
  };

  return (
    <Popover
      width="35%"
      position="bottom"
      opened={opened}
      onChange={setOpened}
      withArrow={true}
    >
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
            <Text align="left">{husq.text}</Text>
          </Group>

          <Group position="apart" spacing="xl">
            <ActionIcon>
              <LikeHusq husq={husq} />
            </ActionIcon>
            <Group>
              <button onClick={showReply}>Show Replies</button>
              <Text>{husq._count.replies}</Text>
            </Group>
            <Group>
              <ActionIcon>
                <FaRegComment color="#00acee" onClick={handleReply} />
              </ActionIcon>
              <Text>{husq._count.replies}</Text>
            </Group>
            {userId && <DeleteHusq husq={husq} userId={userId} />}
          </Group>
        </Card>
      </Popover.Target>

      <Popover.Dropdown>
        <ReplyBox replyState={replyState} husq={husq} />
      </Popover.Dropdown>
    </Popover>
  );
}

export default HusqBox;
