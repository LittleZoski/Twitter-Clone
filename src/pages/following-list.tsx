import FollowingList from "@/components/user/FollowingList";
import { useRouter } from "next/router";
import { Group, Text } from "@mantine/core";
import NumberFollowing from "@/components/user/NumberFollowing";

function FollowingListPage() {
	const router = useRouter();

	if (router.query.param !== undefined) {
		const myObject = JSON.parse(router.query.param as string);

		return (
			<div
				style={{
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Group>
					<NumberFollowing id={myObject.id} />
				</Group>{" "}
				<br />
				<FollowingList user={myObject} />
			</div>
		);
	}
}

export default FollowingListPage;
