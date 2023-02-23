import { useGetUserWithId } from "@/queries/user.queries";
import { Husq } from "@/types/husq";
import { Card, Text, Group, Avatar } from "@mantine/core";
import React, { useState } from "react";
import LikeHusq from "./LikeHusq";
import Reply from "./Reply";

function HusqBox({ husq }: { husq: Husq }) {
  const user = useGetUserWithId(husq.authorId).data;
  return (
    <Card shadow="sm" p="lg" radius="md" mb="lg" withBorder w="70%" miw="30vw">
      <Card.Section inheritPadding py="xs">
        <Group>
          <Avatar
            radius="xl"
            src={`https://loremflickr.com/320/240/nature?${Math.random()}`}
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
          <Reply />
          <Text>{husq._count.replies}</Text>
        </Group>
      </Group>
    </Card>
  );
}

export default HusqBox;
