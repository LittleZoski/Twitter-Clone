import { useGetCurrentUser, useGetUserFollower } from "@/queries/user.queries";
import { User } from "@/types/user";
import UserCard from "./UserCard";
import { Text } from "@mantine/core";

//who is following the user
function FollowerList({ user }: { user: User }) {
	const { status, data } = useGetUserFollower(user.id);

	if (status === "error") {
		return <div>error</div>;
	}

	if (status === "loading") {
		return <div>loading</div>;
	}

	if (status === "success" && data !== undefined) {
		if (data.length === 0) {
			return <Text>No followers yet!</Text>;
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

export default FollowerList;
