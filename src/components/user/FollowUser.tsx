import { useDeleteLike, useLikeHusq } from "@/queries/husq.queries";
import React, { useState } from "react";
import { Button, Group, Avatar, Text } from "@mantine/core";
import {SlUserFollowing, SlUserUnfollow} from 'react-icons/sL'
import { Husq } from "@/types/husq";
import { usefollowUser, useGetCurrentUser, useGetUserFollower, useUnfollowUser } from "@/queries/user.queries";
import { User } from "@/types/user";

function FollowUser({ user }: { user: User }) {
  //need to add useState for liked unliked status onClick

  const currentUser = useGetCurrentUser().userId!;
  const unfollowUser = useUnfollowUser();
  const followUser = usefollowUser();
  const UsersFollower = useGetUserFollower(user.id)
  

  const [followed, setfollow] = useState(UsersFollower.isFollowing);

  function handleClick() {
    if (followed === false) {
      setfollow(true);
      followUser.mutate(user.id);
    } else {
      setfollow(false);
      unfollowUser.mutate(user.id);
    }
  }


  return (
    <Group>
    { followed ? <Button onClick={handleClick} color="#00acee" >Unfollow</Button>: <Button onClick={handleClick} color="#00acee" >Follow</Button>}
    </Group >
  );
}

export default FollowUser;
