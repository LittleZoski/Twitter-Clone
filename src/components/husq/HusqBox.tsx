import { useGetUserWithId } from "@/queries/user.queries";
import { Husq } from "@/types/husq";
import { Card, Image, Text, Badge, Button, Group, Flex } from "@mantine/core";
import React, { useState } from "react";
import LikeHusq from "./LikeHusq";

function HusqBox({ husq }: { husq: Husq }) {
  return (
    <Card
      shadow="sm"
      p="lg"
      radius="md"
      mb="lg"
      withBorder
      style={{ width: 400 }}
    >
      <Card.Section>
        <Image
          src={`https://loremflickr.com/320/240/nature?${Math.random()}`}
          height={50}
          alt={husq.text}
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Badge color="pink" variant="light">
          Hot
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        <Group>created at: {husq.createdAt}</Group>
        <Group>Author: {useGetUserWithId(husq.authorId).data?.name}</Group>
        <Group>post: {husq.text}</Group>
        <Group>likes: {husq._count.likes}</Group>
        <Group>replies #: {husq._count.replies}</Group>
      </Text>

      <Flex>
        <LikeHusq id={husq.id} />
      </Flex>
    </Card>
  );
}

export default HusqBox;
