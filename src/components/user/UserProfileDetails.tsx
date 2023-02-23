import { User } from "@/types/user";
import { Card, Text, Group, Avatar, UnstyledButton } from "@mantine/core";
import { useRouter } from "next/router";
import FollowUser from "./FollowUser";
import NumberFollowers from "./NumberFollowers";
import NumberFollowing from "./NumberFollowing";

function UserProfileDetails({ user }: { user: User }) {
	const router = useRouter();

	function handleFollowingClick() {
		router.push({
			pathname: "/following-list",
			query: { param: JSON.stringify(user) },
		});
	}

	function handleFollowerClick() {
		router.push({
			pathname: "/follower-list",
			query: { Param: JSON.stringify(user) },
		});
	}
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<Card p="lg" radius="md" mb="lg" withBorder w="70%" miw="30vw" h="25vh">
				<Card.Section inheritPadding py="xs">
					<Group>
						<Avatar
							radius="xl"
							src={`https://loremflickr.com/320/240/nature?${user.id}`}
						/>
						<FollowUser user={user} />
					</Group>
					<Text fz="25px" fw={700}>
						{user?.name}
					</Text>
					<Text fz="medium">@{user?.username}</Text>
					<Text>{user.about}</Text>
					<Group>
						<UnstyledButton onClick={handleFollowingClick}>
							<Group>
								<NumberFollowing id={user.id} />
							</Group>
						</UnstyledButton>
						<UnstyledButton onClick={handleFollowerClick}>
							<Group>
								<NumberFollowers id={user.id} />
							</Group>
						</UnstyledButton>
					</Group>
				</Card.Section>
			</Card>
		</div>
	);
}

export default UserProfileDetails;
