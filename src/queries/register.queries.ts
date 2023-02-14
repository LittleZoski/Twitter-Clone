import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

type UserLoginInput = {
  username: string;
  password: string;
};

type UserRegisterInput = {
  name: string;
  workspace: string;
  termsOfService: boolean;
} & UserLoginInput;

export function useRegister() {
  const router = useRouter();
  const login = useLogin();
  const [userInfo, setUserInfo] = useState<UserRegisterInput>();

  return useMutation({
    mutationFn: (values: UserRegisterInput) => {
      setUserInfo(values);
      return axios
        .post("https://husqr.up.railway.app/register", values)
        .then((response) => response.data);
    },
    onSuccess: (data) => login.mutate,
  });
}

export function useLogin() {
  //pretend please
  const router = useRouter();

  return useMutation({
    mutationFn: (values: UserLoginInput) => {
      return axios
        .post("https://husqr.up.railway.app/register", values)
        .then((response) => response.data);
    },
    onSuccess: (data) => router.push("/login"),
  });
}

// export const register = async (value: userRegisterInput) => {
//   const registerPostBody = {
//     username: value.username,
//     name: value.name,
//     password: value.password,
//     workspace: value.workspace,
//   };

//   try {
//     const response = await axios.post(
//       "https://husqr.up.railway.app/register",
//       registerPostBody
//     );
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const Login = async (values: userLoginInput) => {
//   try {
//     const response = await axios.post(
//       "https://husqr.up.railway.app/login",
//       values
//     );
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
