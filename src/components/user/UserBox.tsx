import { useGetCurrentUser, usePatchCurrentUser } from "@/queries/user.queries";
import { User } from "@/types/user";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Box,
  TextInput,
  Checkbox,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useLocalStorage } from "@mantine/hooks";
import { useRouter } from "next/router";
import React, { useState } from "react";

function UserCard({ user }: { user: User }) {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const patchCurrentUser = usePatchCurrentUser();
  const { status, data } = useGetCurrentUser();
  const [currentuser, setUser] = useState<User>(user);

  const handleClick = (user: User) => {
    console.log(user);
    router.push({
      pathname: "/user-profile",
      query: { myParam: JSON.stringify(user) },
    });
  };

  const form = useForm({
    initialValues: {
      name: "",
      about: "",
    },

    validate: {
      name: (value) =>
        /^[0-9a-zA-Z]{2,12}$/.test(value) ? null : "Invalid name",
      about: (value) =>
        /^[\s\S]{3,120}$/.test(value) ? null : "Invalid about",
    },
  });

  const handlePatchUserInfor = (values: any) => {
    console.log(values);
    const userUpdate = {
      name: values.name,
      about: values.about,
    };
    patchCurrentUser(userUpdate);
    setUser(data!);
  };

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
          alt={currentuser.name}
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>User card</Text>
        <Badge color="pink" variant="light">
          Hot
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        <Group>User id: {currentuser.id}</Group>
        <Group>User name: {currentuser.username}</Group>
        <Group>user's real name: {currentuser.name}</Group>
        <Group>User Bio: {currentuser.about}</Group>
      </Text>

      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={(event) => handleClick(user)}
      >
        Inspec User Profile
      </Button>

      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={() => setOpen(!isOpen)}
      >
        Edit User profile
      </Button>
      {isOpen &&
        currentuser.id === Number(localStorage.getItem("currentUserId")) && (
          <Box sx={{ maxWidth: 300 }} mx="auto">
            <form
              onSubmit={form.onSubmit((values) => handlePatchUserInfor(values))}
            >
              <TextInput
                withAsterisk
                label="name"
                placeholder="your name"
                {...form.getInputProps("name")}
              />

              <TextInput
                withAsterisk
                label="about"
                placeholder="about you"
                {...form.getInputProps("about")}
              />

              <Group position="right" mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </form>
          </Box>
        )}
    </Card>
  );
}

export default UserCard;
