import { Husq } from "@/types/husq";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { User } from "@/types/user";
import { API } from "@/api/api";
import axios from "axios";

/**
 *
 * @param replyId - Determines the Husq the user is replying to. Is set to undefined if the user is creating a new Husq.
 * @returns Placeholder data.s
 */
export function useCreateHusqs() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: { text: string; replyId?: number }) =>
      API.post("api/v1/husqs/", { ...values }),
    onSuccess: () => {
      window.location.reload();
    },
  });
}

export function useReplyHusqs() {
  return useMutation({
    mutationFn: (values: { text: string; replyId: number }) =>
      API.post("api/v1/husqs/", values).then((response) => {
        response.data, console.log(response.data);
      }),
  });
}

export function useReplyHusq(userId: User["id"]) {
  return useQuery({
    queryKey: ["husqs"],
    queryFn: () => {
      return API.post<Husq[]>(`api/v1/husqs/?userId=${userId}`).then(
        (response) => response.data
      );
    },
  });
}

export function useGetHusqs(userId: User["id"]) {
  return useQuery({
    queryKey: ["getAllHusqs"],
    queryFn: () => {
      return API.get<Husq[]>(`api/v1/husqs/?userId=${userId}`).then(
        (response) => response.data
      );
    },
  });
}

export function useGetHusqsById(id: Husq["id"]) {
  return useQuery({
    queryKey: ["getHusqByID", id],
    queryFn: () => {
      return API.get<Husq>(`api/v1/husqs/${id}`).then((response) => {
        return response.data;
      });
    },
  });
}

export function useDeleteHusq() {
  return useMutation({
    mutationFn: (id: Husq["id"]) => {
      return API.delete(`api/v1/husqs/${id}`).then((response) => response.data);
    },
  });
}

export function useGetHusqReplies(id: Husq["id"]) {
  return useQuery({
    queryKey: ["getReplies", id],
    queryFn: () => {
      return API.get<Husq[]>(`api/v1/husqs/${id}/replies`).then((response) => {
        return response.data;
      });
    },
  });
}

export function useGetHusqLikes(id: Husq["id"]) {
  return useQuery({
    queryKey: ["getLikes", id],
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
