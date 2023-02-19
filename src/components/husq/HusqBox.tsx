import { useGetUserWithId } from "@/queries/user.queries";
import { Husq } from "@/types/husq";
import { Card, Image, Text, Badge, Button, Group, Flex } from "@mantine/core";
import React from "react";

function HusqrBox({ husq }: { husq: Husq }) {

  


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
          src={`https://loremflickr.com/320/240/cat?${Math.random()}`}
          height={250}
          alt={husq.text}
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Husqr card</Text>
        <Badge color="pink" variant="light">
          Hot
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        <Group>Husq id: {husq.id}</Group>
        <Group>created at: {husq.createdAt}</Group>
        <Group>Author: {useGetUserWithId(husq.authorId).data?.name}</Group>
        <Group>post: {husq.text}</Group>
        <Group>likes: {husq._count.likes}</Group>
        <Group>replies #: {husq._count.replies}</Group>
      </Text>

      <Flex>
        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Like
        </Button>
        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          unLike
        </Button>
      </Flex>
    </Card>
  );
}

export default HusqrBox;
