import FollowerList from "@/components/user/FollowerList";
import NumberFollowers from "@/components/user/NumberFollowers";
import { Group } from "@mantine/core";
import { useRouter } from "next/router";

function FollowerListPage() {
  const router = useRouter()
  
  if(router.query.Param!== undefined){
    const myObject = JSON.parse(router.query.Param as string)

    return (<div style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    }}>
      <Group>
        <NumberFollowers id={myObject.id}/>
      </Group> <br/>
      <FollowerList user={myObject} />
    </div>)
  
  }
}

export default FollowerListPage;