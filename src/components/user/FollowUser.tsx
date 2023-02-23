import { useDeleteLike, useLikeHusq } from "@/queries/husq.queries";
import React, { useState } from "react";
import { UnstyledButton, Group, Avatar, Text } from "@mantine/core";
import {SlUserFollowing, SlUserUnfollow} from 'react-icons/sL'
import { Husq } from "@/types/husq";
import { usefollowUser, useGetCurrentUser, usegetHusqsUserFollower, useUnfollowUser } from "@/queries/user.queries";
import { User } from "@/types/user";

function FollowUser({ user }: { user: User }) {
  //need to add useState for liked unliked status onClick

  const currentUser = useGetCurrentUser().userId!;
  const unfollowUser = useUnfollowUser();
  const followUser = usefollowUser();
  const UsersFollower = usegetHusqsUserFollower(user.id)
  

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
    <UnstyledButton onClick={handleClick} >
      <Group>
        {followed ? <SlUserFollowing color="#00acee" style={{fontSize:'50px'}}/> : <SlUserUnfollow color="#00acee" style={{fontSize:'50px'}}/>}
      </Group>
    </UnstyledButton>
  );
}

export default FollowUser;
