
import { useGetCurrentUser } from "@/queries/user.queries";
import Timeline from "@/components/husq/Timeline";
import React from "react";
import UserCard from "@/components/user/UserCard";

function myprofile() {
  const { status, data } = useGetCurrentUser();

  if (status === "loading") {
    // Render a loading spinner or placeholder while the data is being fetched
    return <div>Loading...</div>;
  }

  if (status === "error") {
    // Handle the case when there's an error fetching the data
    return <div>Error fetching user data</div>;
  }

  // Render the UserCard component with the retrieved user data
  return (
    <div>
      <UserCard user={data!} />
    </div>
  );
}

export default myprofile;
