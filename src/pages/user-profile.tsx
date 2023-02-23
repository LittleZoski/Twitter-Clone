import FollowUser from '@/components/user/FollowUser'
import UserHusqList from '@/components/user/UserHusqList'
import UserProfileDetails from '@/components/user/UserProfileDetails'
import { User } from '@/types/user'
import { Stack } from '@mantine/core'
import { useRouter } from 'next/router'
import React from 'react'

function userHusqrList() {

  const router = useRouter()
  
  if(router.query.myParam!== undefined){
    const myObject = JSON.parse(router.query.myParam as string)
    return (
      <Stack>
    <UserProfileDetails user={myObject} />
    <UserHusqList user={myObject} />
    </Stack>
  )
  }
  
  
}

export default userHusqrList