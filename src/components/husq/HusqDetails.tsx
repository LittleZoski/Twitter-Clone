//what user should see when a Husq renders
import { Husq } from "@/types/husq";
import { User } from "@/types/user";
import React from "react";
import LikeHusq from "./LikeHusq";

function HusqDetails(husq: Husq) {
  //we're getting the authorId from the user. We can use that id to pull username from the user type.

  return (
    <div>
      <div>Author username</div>
      <div>{husq.text}</div>
      <LikeHusq></LikeHusq>
    </div>
  );
}

export default HusqDetails;
