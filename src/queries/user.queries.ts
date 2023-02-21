import { API } from "@/api/api";
import { Husq } from "@/types/husq";
import { User } from "@/types/user";
import { useLocalStorage } from "@mantine/hooks";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export interface users {
  id: number;
  username: string;
  name: string;
  about: string;
}

export function useGetUsers(LastItemId: number) {
  const { status, data } = useQuery({
    queryKey: ["getUsers", LastItemId],
    queryFn: () => {
      return API.get<User[]>(`/api/v1/users/?cursor=${LastItemId}`).then(
        (res) => res.data
      );
    },
    // enabled:!!LastItemId
  });
  console.log(status);
  return { status, data };
}

export function useGetUserWithId(id: number) {
  const { status, data } = useQuery({
    queryKey: ["getUserwithID", id],
    queryFn: () => {
      return API.get<User>(`/api/v1/users/${id}`).then((res) => res.data);
    },
  });

  return { status, data };
}

export function useGetCurrentUser() {
  const [userId, setUserId] = useLocalStorage<number | null>({
    key: "currentUserId",
    defaultValue: null,
  });
  const { status, data } = useQuery({
    queryKey: ["getCurrentUser"],
    queryFn: () => {
      return API.get<User>("/api/v1/users/me").then((res) => res.data);
    },
  });

  useEffect(() => {
    if (status === "success" && userId != data.id) {
      setUserId(data.id);
    }
  }, []);

  return { status, data, userId };
}

//me is the current loged in user id
export function usePatchCurrentUser() {
  const currentid = localStorage.getItem("currentUserId");
  const patchUserMutation = useMutation({
    mutationFn: ({ name, about }: { name: string; about: string }) => {
      return API.patch<User[]>(`/api/v1/users/${currentid}`, {
        name: name,
        about: about,
      }).then((res) => {
        res.data, console.log(res.data);
      });
    },
  });

  return patchUserMutation.mutate;
}

export function usegetHusqsUserLikes(id: number) {
  const { status, data } = useQuery({
    queryKey: ["getHusqsUserLikes"],
    queryFn: () => {
      return API.get<Husq[]>(`/api/v1/users/${id}/likes`).then(
        (res) => res.data
      );
    },
  });
}

export function usegetHusqsUserFollower(id: number) {
  const { status, data } = useQuery({
    queryKey: ["getHusqsUserFollower"],
    queryFn: () => {
      return API.get<User[]>(`/api/v1/users/${id}/followers`).then(
        (res) => res.data
      );
    },
  });
}

export function usefollowUser(id: number) {
  const followUserMutation = useMutation({
    mutationFn: () => {
      return API.post<User>(`/api/va/users/${id}/followers`).then(
        (res) => res.data
      );
    },
  });

  followUserMutation.mutate();
}

//me here is current login user's id
export function useunfollowUser(id: number, me: number) {
  const unfollowUserMutation = useMutation({
    mutationFn: () => {
      return API.delete(`/api/v1/users/${id}/follower/${me}`).then(
        (res) => res.data
      );
    },
  });

  unfollowUserMutation.mutate();
}

export function usegetUserFromFollowing(id: number) {
  const { status, data } = useQuery({
    queryKey: ["getUserFromFollowing"],
    queryFn: () => {
      return API.get(`/api/v1/users/${id}/follows`).then((res) => res.data);
    },
  });
}
