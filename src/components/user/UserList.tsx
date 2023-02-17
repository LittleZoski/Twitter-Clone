import { useGetUsers } from '@/queries/user.queries'
import { User } from '@/types/user'
import { Button } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'

function UserList() {

  const [LastItemId, setLastItemId] = useState(0)
  const {status, data} = useGetUsers(LastItemId)
  const [itemList, setItemList] =useState<User[]>([])

  useEffect(()=>{

    if(status==='success' && data!==undefined)
    setItemList((Previous)=>[...Previous, ...data])
    console.log(itemList)
  }
  ,[LastItemId])
    
  
  
  
  return (
    <div style={{textAlign:"center", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      {status === 'success' && data!==undefined && data.map((user)=>{
      return <UserCard user={user}/>
    })}

    {status==='success' && data!==undefined && <Button onClick={(event)=>{setLastItemId(data[data.length-1].id)}}>Next Page</Button>}
    {status==='success' && data!==undefined && <Button onClick={(event)=>{setLastItemId(itemList[itemList.length-6].id)}}>Previous Page</Button>}
    </div>
  )
}

export default UserList