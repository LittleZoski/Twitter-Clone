import { useLikeHusq } from "@/queries/husq.queries";
import React from "react";

function LikeHusq() {
  //need to add useState for liked unliked status onClick
  const id = 12;

  const likeHusq = useLikeHusq();

  function handleClick() {
    likeHusq.mutate(id);
  }
  return <button onClick={handleClick}>Like Husq</button>;
}

export default LikeHusq;
