import { API } from "@/api/api";
import { Husq } from "@/types/husq";
import { User } from "@/types/user";
import { useMutation, useQuery } from "@tanstack/react-query";

export interface users {
  id: number;
  username: string;
  name: string;
  about: string;
}

export function getUsers(){
  const {status, data} = useQuery({
    queryKey:['getUsers'],
    queryFn:()=>{
      return API.get<User[]>('/api/v1/users/').then(res=>res.data)
    }
  })
}

export function getUserWithId(id:number){
  const {status, data} = useQuery({
    queryKey:['getUserwithID'],
    queryFn:(id)=>{
      return API.get<User>('/api/v1/users/'+id).then(res=>res.data)
    }
  })
}


export function getCurrentUser(){
  const {status, data} = useQuery({
    queryKey:['getCurrentUser'],
    queryFn:()=>{
      return API.get<User>('/api/v1/users/me').then(res=>res.data)
    }
  })
}


export function patchCurrentUser(id:number, name:string, about:string ){

  const patchUserMutation = useMutation({
    mutationFn:({id, name, about }:{id:number, name:string, about:string})=>{
      return API.patch<User[]>('/api/v1/users/'+id, {"name":name, "about":about}).then(res=>res.data)
    }
  
  })

  patchUserMutation.mutate({id,name,about})
}

export function getHusqsUserLiked(id:number){
  const {status, data} = useQuery({
    queryKey:['getHusqsUserLiked'],
    queryFn:()=>{
      return API.get<Husq[]>(`/api/v1/users/${id}/likes`).then(res=>res.data)
    }
  })
}
