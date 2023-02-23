import { useGetUserFollower } from "@/queries/user.queries";
import { Text} from "@mantine/core";

function NumberFollowers({id}: {id: number}) {
    const numberFollowers = useGetUserFollower(id).data?.length;

    return <Text>{numberFollowers}</Text>;
  }
  
  export default NumberFollowers;