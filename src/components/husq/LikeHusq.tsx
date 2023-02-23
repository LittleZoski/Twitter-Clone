import { useDeleteLike, useLikeHusq } from "@/queries/husq.queries";
import React, { useState } from "react";
import { UnstyledButton, Group, Avatar, Text } from "@mantine/core";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Husq } from "@/types/husq";
import { useGetCurrentUser } from "@/queries/user.queries";

const LikePost = ({ liked, likes }: { liked: Boolean; likes: number }) => {
  return (
    <>
      <Group>
        {liked ? <BsHeartFill color="#00acee" /> : <BsHeart color="#00acee" />}
        <Text>{likes}</Text>
      </Group>
    </>
  );
};

const DisplayLikes = ({ likes }: { likes: number }) => {
  return <Text>Likes: {likes}</Text>;
};

function LikeHusq({ husq }: { husq: Husq }) {
  //need to add useState for liked unliked status onClick
  const likeHusq = useLikeHusq();
  const currentUser = useGetCurrentUser().userId!;
  const unLikeHusq = useDeleteLike(currentUser);
  const showLikeButton = husq.authorId != currentUser;

  const [liked, setLiked] = useState(husq.liked);

  function handleClick() {
    if (liked === false) {
      setLiked(true);
      husq._count.likes += 1;
      likeHusq.mutate(husq.id);
    } else {
      setLiked(false);
      husq._count.likes -= 1;
      unLikeHusq.mutate(husq.id);
    }
  }
  return (
    <Group>
      {showLikeButton ? (
        <UnstyledButton onClick={handleClick}>
          <LikePost liked={liked} likes={husq._count.likes} />
        </UnstyledButton>
      ) : (
        <DisplayLikes likes={husq._count.likes} />
      )}
    </Group>
  );
}

export default LikeHusq;
