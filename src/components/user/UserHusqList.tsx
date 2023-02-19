import { useGetHusqs } from '@/queries/husq.queries'

import { User } from '@/types/user'
import React from 'react'
import HusqBox from '../husq/HusqBox'


function UserHusqList({user}:{user:User}) {


  const {status, data} = useGetHusqs(user.id)
  
  return (
    <div style={{textAlign:"center", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
    {status === 'success' && data!==undefined && data.map((item)=>{
      return <HusqBox husq={item} key={item.id}/>
    })}
    </div>
    
  )
    
}

export default UserHusqList