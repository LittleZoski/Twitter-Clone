import { useGetHusqs } from "@/queries/husq.queries";
import { Stack, Text } from "@mantine/core";
import { User } from "@/types/user";
import React from "react";
import HusqrBox from "../husq/HusqBox";
import HusqBox from "../husq/HusqBox";

function UserHusqList({ user }: { user: User }) {
  const { status, data } = useGetHusqs(user.id);

  if (status === "error") {
    return <div>error</div>;
  }

  if (status === "loading") {
    return <div>loading</div>;
  }

  if (status === "success" && data !== undefined) {
    if (data.length === 0) {
      return <Text>No husqs posted yet!</Text>;
    }
    return (
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {data.map((husq) =>
          husq.replyId == null ? <HusqBox husq={husq} key={husq.id} /> : null
        )}
      </div>
    );
  } else {
    return <div>else</div>;
  }
}

export default UserHusqList;
