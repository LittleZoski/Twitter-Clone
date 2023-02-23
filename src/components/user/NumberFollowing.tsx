import { useGetUserFollowing } from "@/queries/user.queries";
import { Text} from "@mantine/core";

    function NumberFollowing({id}: {id: number}) {
        const numberFollowing = useGetUserFollowing(id).data?.length;
        if (numberFollowing === 1) {
          return <Text>{numberFollowing} follower</Text>;
        }
        return <Text>{numberFollowing} following</Text>;
      }
      
      export default NumberFollowing;
  
  
