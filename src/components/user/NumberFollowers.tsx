import { useGetUserFollower } from "@/queries/user.queries";
import { Text } from "@mantine/core";

function NumberFollowers({ id }: { id: number }) {
	const numberFollowers = useGetUserFollower(id).data?.length;

	if (numberFollowers === 1) {
		return <Text>{numberFollowers} follower</Text>;
	}
	return <Text>{numberFollowers} followers</Text>;
}

export default NumberFollowers;
