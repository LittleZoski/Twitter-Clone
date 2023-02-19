import { Husq } from "@/types/husq";
import { useMutation, useQuery } from "@tanstack/react-query";
import { User } from "@/types/user";
import { API } from "@/api/api";


export function useGetHusqs(userId: User["id"]) {
  return useQuery({
    queryKey: ["husqs"],
    queryFn: () => {
      return API.get<Husq[]>(`api/v1/husqs/?userId=${userId}`).then(
        (response) => response.data
      );
    },
  });
}

export function useGetHusqsById(id: Husq["id"]) {
  return useQuery({
    queryKey: ["husq", id],
    queryFn: () => {
      return API.get<Husq>(`api/v1/husqs/${id}`).then((response) => {
        return response.data;
      });
    },
  });
}

//need to be able to update husq deleted to true
export function useDeleteHusq() {
  return useMutation({
    mutationFn: (id: Husq["id"]) => {
      return API.delete(`api/v1/husqs/${id}`).then((response) => response.data);
    },
  });
}

export function useGetHusqReplies(id: Husq["id"]) {
  return useQuery({
    queryKey: ["replies", id],
    queryFn: () => {
      return API.get<number>(`api/v1/husqs/${id}/replies`).then((response) => {
        return response.data;
      });
    },
  });
}

export function useGetHusqLikes(id: Husq["id"]) {
  return useQuery({
    queryKey: ["likes", id],
    queryFn: () => {
      return API.get<number>(`api/v1/husqs/${id}/likes`).then((response) => {
        return response.data;
      });
    },
  });
}

export function useLikeHusq() {
  return useMutation({
    mutationFn: (id: number) => {
      return API.post(`api/v1/husqs/${id}/likes`).then(
        (response) => response.data
      );
    },
    onSuccess: (data) => console.log(data),
  });
}

export function useDeleteLike(me: User["id"]) {
  return useMutation({
    mutationFn: (id: Husq["id"]) => {
      return API.delete(`api/v1/husqs/${id}/likes/${me}`).then(
        (response) => response.data
      );
    },
  });
}


