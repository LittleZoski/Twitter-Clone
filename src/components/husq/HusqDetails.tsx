//what user should see when a Husq renders
import { useGetCurrentUser, useGetUserWithId } from "@/queries/user.queries";
import { Husq } from "@/types/husq";
import { User } from "@/types/user";
import React from "react";
import LikeHusq from "./LikeHusq";

function HusqDetails(husq: Husq) {
  //we're getting the authorId from the user. We can use that id to pull username from the user type.

  const { status, data } = useGetUserWithId(husq.authorId!);
  const husqId = husq.id;

  return (
    <div>
      <div>{data?.username}</div>
      <div>{husq.text}</div>
      <LikeHusq id={husq.id}/>
    </div>
  );
}

export default HusqDetails;
