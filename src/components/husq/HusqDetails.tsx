//what user should see when a Husq renders
import { useGetCurrentUser, usegetUserWithId } from "@/queries/user.queries";
import { Husq } from "@/types/husq";
import { User } from "@/types/user";
import React from "react";
import LikeHusq from "./LikeHusq";

function HusqDetails(husq: Husq) {
  //we're getting the authorId from the user. We can use that id to pull username from the user type.

  const user = usegetUserWithId(husq.authorId!);
  const husqId = husq.id;

  return (
    <div>
      <div>{user?.username}</div>
      <div>{husq.text}</div>
      <LikeHusq />
    </div>
  );
}

export default HusqDetails;
