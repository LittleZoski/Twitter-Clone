import { useGetUsers } from "@/queries/user.queries";
import { User } from "@/types/user";
import { Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

function UserList() {
  const [cursorStack, setcursorStack] = useState<number[]>([0])
  const [LastItemId, setLastItemId] = useState(0);
  const { status, data } = useGetUsers(LastItemId);
  
  
  // useEffect(() => {
  //   if (status === "success" && data !== undefined && itemList[itemList.length-1]?.id < data[data.length-1].id)
  //     setItemList((Previous) => [...Previous, ...data]);
  //   console.log(itemList);
  // }, [data]);

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
      {status === "success" &&
        data !== undefined &&
        data.map((user) => {
          return <UserCard user={user} key={user.id} />;
        })}
      <br />
      {status === "success" && data !== undefined && (
        <Button
          radius="xl"
          onClick={(event) => {
            let n = data[data.length-1].id
            console.log(cursorStack)
            console.log(data)
            setcursorStack([...cursorStack, n])
            setLastItemId(n);
            
          }}
        >
          Next Page
        </Button>
      )}
      <br />
      {status === "success" && data !== undefined && (
        <Button
          radius="xl"
          onClick={(event) => {
            // console.log(cursorStack)
            // console.log(data)
            // const lastCursorId = cursorStack[cursorStack.length-1]
            const newStack = [...cursorStack]
            newStack.pop()
            console.log(newStack)
            const lastCursorId = newStack.pop()
            // console.log(newStack)
            // console.log(lastCursorId)
            if(lastCursorId){
               setcursorStack([...newStack])
                setLastItemId(lastCursorId)
            }else{
              setcursorStack([0])
              setLastItemId(0)
            }
          }}
        >
          Prev Page
        </Button>
      )}
    </div>
  );
}

export default UserList;
