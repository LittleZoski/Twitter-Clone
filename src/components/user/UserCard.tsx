import {
  usefollowUser,
  useGetCurrentUser,
  usePatchCurrentUser,
  useUnfollowUser,
} from "@/queries/user.queries";
import { User } from "@/types/user";
import {
  Card,
  Text,
  Button,
  Group,
  Box,
  TextInput,
  Flex,
  Loader,
  Avatar,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FollowUser from "./FollowUser";

function UserCard({ user }: { user: User }) {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const patchCurrentUser = usePatchCurrentUser();
  const unfollowUser = useUnfollowUser();
  const followUser = usefollowUser();
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
    patchCurrentUser.mutate(userUpdate);
    form.reset();
  };

  const handlefollow = (user: User) => {
    followUser.mutate(user.id);
  };

  const handleUnfollow = (user: User) => {
    unfollowUser.mutate(user.id);
  };

  useEffect(() => {
    console.log(data);
  }, [currentuser]);

  if (!data) {
    return <Loader />;
  }

  return (
    <Card
      shadow="sm"
      p="lg"
      radius="md"
      mb="lg"
      withBorder
      style={{ width: 400 }}
    >
      <Card.Section inheritPadding py="xs">
        <Group position="apart">
          <Group>
            <Avatar
              src={`https://loremflickr.com/320/240/nature?${user.id}`}
              radius="xl"
              alt={currentuser.name}
            />

            <Flex direction="column">
              <Group>
                <Text fw={700}>@{user.username}</Text>
              </Group>
              <Group>
                <Text>{user.name}</Text>
              </Group>
            </Flex>
          </Group>
          <Button
            variant="light"
            color="blue"
            mt="md"
            radius="xl"
            onClick={(event) => handleClick(user)}
          >
            See profile
          </Button>
        </Group>
      </Card.Section>

      {currentuser.id === Number(localStorage.getItem("currentUserId")) && (
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
      )}
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
