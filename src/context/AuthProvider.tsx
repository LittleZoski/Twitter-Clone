import { API } from "@/api/api";
import { useLocalStorage } from "@mantine/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Cookies } from "react-cookie";

const AuthContext = createContext<
  { authed: boolean; setAuthed: Dispatch<SetStateAction<boolean>> } | undefined
>(undefined);

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [authed, setAuthed] = useState(false);
  const value = {
    authed,
    setAuthed,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const authContext = useContext(AuthContext);
  if (authContext) return authContext;
  throw new Error("useAuthContext must be used in a AuthProvider");
}

export function useAuth() {
  
  const { authed, setAuthed } = useAuthContext();
  const cookies = new Cookies();
  const router = useRouter();
  const queryClient = useQueryClient();
  const token = cookies.get("loginBearerToken");

  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setAuthed(true);
  }

  const loginMutation = useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) =>
      API.post<{ token: string }>("/login", { username, password }).then(
        (res) => res.data
      ),
    mutationKey: ["JWTdata"],
    onSuccess: (data) => {
      cookies.set("loginBearerToken", data.token, { path: "/" });
      API.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      setAuthed(true);
      console.log(data);
      console.log(authed);
    },
  });

  const registerMuation = useMutation({
    mutationFn: ({
      username,
      name,
      password,
      workspace,
    }: {
      username: string;
      name: string;
      password: string;
      workspace: string;
    }) =>
      API.post("/register", { username, name, password, workspace }).then(
        (res) => {
          res.data, console.log(res.data);
        }
      ),
  });
  const login = (username: string, password: string) => {
    loginMutation.mutate({ username, password });
  };

  const register = (username: string, name: string, password: string) => {
    registerMuation.mutate({
      username,
      name,
      password,
      workspace: "mcc-cohort-4",
    });
  };

  const logout = () => {
    queryClient.removeQueries({ queryKey: ["JWTdata"], exact: true });
    cookies.remove("loginBearerToken");
    localStorage.clear();
    setAuthed(false);
  };

  return { authed, login, logout, register };
}
