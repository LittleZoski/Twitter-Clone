import { useGetUserFollowing } from "@/queries/user.queries";
import { Text} from "@mantine/core";

    function NumberFollowing({id}: {id: number}) {
      const numberFollowing = useGetUserFollowing(id).data?.length;
      
        return <Text fw={700}>{numberFollowing} following</Text>;
      }
      
      export default NumberFollowing;
  
  
