import { User } from "@/types/user";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import React from "react";

function UserCard({ user }: { user: User }) {
  return (
    <Card shadow="sm" p="lg" radius="md" mb="lg" withBorder style={{width:400}}>
      <Card.Section>
        <Image
          src={`https://picsum.photos/500/560?${Math.random()}`}
          height={160}
          alt={user.name}
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>User card</Text>
        <Badge color="pink" variant="light">
          Hot
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        <Group>
          User id: {user.id}
        </Group>
        <Group>
          User name: {user.username}
        </Group>
        <Group>
          user's real name: {user.name}
        </Group>
        <Group>
          User Bio: {user.about}
        </Group>
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Inspec User Profile
      </Button>
    </Card>
  );
}

export default UserCard;
