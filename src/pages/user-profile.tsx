import UserHusqList from '@/components/user/UserHusqList'
import { User } from '@/types/user'
import { useRouter } from 'next/router'
import React from 'react'

function userHusqrList() {

  const router = useRouter()
  
  if(router.query.myParam!== undefined){
    const myObject = JSON.parse(router.query.myParam as string)
    return (
    <UserHusqList user={myObject} />
  )
  }
  
  
}

export default userHusqrList