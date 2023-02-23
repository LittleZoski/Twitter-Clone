import { useGetUserFollowing } from "@/queries/user.queries";
import { User } from "@/types/user";
import { Loader, Text } from "@mantine/core";
import UserCard from "./UserCard";

//who the user is following
function FollowingList({user}: {user: User}) {
  const { status, data } = useGetUserFollowing(user.id);

  if (status === "error") {
    return <div>error</div>;
  }

  if (status === "loading") {
    return <div>loading</div>;
  }

  if (status === "success" && data !== undefined) {
    if (data.length === 0) {
      return <Text>Follow someone to see them on this list!</Text>;
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
        {data.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    );
  } else {
    return <div>else</div>;
  }
}

export default FollowingList;
