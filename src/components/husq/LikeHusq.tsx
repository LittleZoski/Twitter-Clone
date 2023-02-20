import { useLikeHusq } from "@/queries/husq.queries";
import React, { useState } from "react";
import { UnstyledButton, Group, Avatar } from "@mantine/core";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Husq } from "@/types/husq";

function LikeHusq({id}:{id:number}) {
  //need to add useState for liked unliked status onClick
  const likeHusq = useLikeHusq();
  const [liked, setLiked] = useState(false);

  function handleClick() {
    if (liked === false) {
      setLiked(true);
      likeHusq.mutate(id);
    } else {
      setLiked(false);
    }
  }
  return (
    <UnstyledButton onClick={handleClick}>
      <Group>
        {liked ? <BsHeartFill color="#00acee" /> : <BsHeart color="#00acee" />}
      </Group>
    </UnstyledButton>
  );
}

export default LikeHusq;
