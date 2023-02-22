import {
  usefollowUser,
  useGetCurrentUser,
  usePatchCurrentUser,
  useUnfollowUser,
} from "@/queries/user.queries";
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
  Flex,
  Loader,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useLocalStorage } from "@mantine/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function UserCard({ user }: { user: User }) {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const patchCurrentUser = usePatchCurrentUser();
  const unfollowUser = useUnfollowUser();
  const followUser = usefollowUser();
  const { status, data } = useGetCurrentUser();
  const [currentuser, setUser] = useState<User>(user);
  // const queryClient = useQueryClient()
  // if(patchCurrentUser.isSuccess){
  //   // queryClient.invalidateQueries({queryKey: ["getCurrentUser"] })
  //   queryClient.setQueryData(["getCurrentUser"], patchCurrentUser.data )
  // }
  const handleClick = (user: User) => {
    console.log(user);
    router.push({
      pathname: "/userHusqrList",
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
    if(followUser.isSuccess){
      return(<>following {user.name} is success</>)
    }
  };

  const handleUnfollow = (user: User) => {
    unfollowUser.mutate(user.id);
  };

  useEffect(() => {
    console.log(data);
  }, [currentuser]);


  if(!data){
    return <Loader />
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
          Followed By
        </Badge>

      </Group>

      <Text size="sm" color="dimmed">
        <Group>User id: {data.id}</Group>
        <Group>User name: {data.username}</Group>
        <Group>user's real name: {data.name}</Group>
        <Group>User Bio: {data.about}</Group>
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
      {currentuser.id !== Number(localStorage.getItem("currentUserId")) && (
        <Flex>
          <Button
            variant="light"
            color="blue"
            fullWidth
            mt="md"
            radius="md"
            onClick={(event) => handlefollow(user)}
          >
            Follow
          </Button>
          <Button
            variant="light"
            color="blue"
            fullWidth
            mt="md"
            radius="md"
            onClick={(event) => handleUnfollow(user)}
          >
            Unfollow
          </Button>
        </Flex>
      )}

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
