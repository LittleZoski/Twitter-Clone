import { useLikeHusq } from "@/queries/husq.queries";
import React from "react";
import { UnstyledButton, Group, Avatar } from "@mantine/core";
import { IconHeart, IconHeartFilled } from "@tabler/icons";

function LikeHusq() {
  //need to add useState for liked unliked status onClick
  const id = 12;

  const likeHusq = useLikeHusq();

  function handleClick() {
    likeHusq.mutate(id);
  }
  return (
    <UnstyledButton onClick={handleClick}>
      <Group>
        <Avatar size={40} color="blue"></Avatar>
      </Group>
    </UnstyledButton>
  );
}

export default LikeHusq;
