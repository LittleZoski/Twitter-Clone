
import UserCard from '@/components/user/UserCard'
import { useGetCurrentUser } from '@/queries/user.queries'
import React from 'react'

function myprofile() {


  const {status, data} = useGetCurrentUser()


 
  if (status === 'loading') {
    // Render a loading spinner or placeholder while the data is being fetched
    return <div>Loading...</div>
  }

  if (status === 'error') {
    // Handle the case when there's an error fetching the data
    return <div>Error fetching user data</div>
  }

  // Render the UserCard component with the retrieved user data
  return <UserCard user={data!} />
}



export default myprofile