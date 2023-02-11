import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";

interface userRegisterInput {
  username: string;
  name: string;
  password: string;
  workspace: string;
  termsOfService: boolean;
}

interface userLoginInput {
  username: string;
  password: string;
}

export function useRegister() {
  const router = useRouter();
//   const login = useLogin();
  return useMutation({
    mutationFn: (values: userRegisterInput) => {
      return axios
        .post("https://husqr.up.railway.app/register", values)
        .then((response) => response.data);
    },
    onSuccess: (data) => console.log(data),
  });
}

// export function useLogin() {

//     //pretend please
//     const router = useRouter();
  
//     return useMutation({
//       mutationFn: (values: userRegisterInput) => {
//         return axios
//           .post("https://husqr.up.railway.app/register", values)
//           .then((response) => response.data);
//       },
//       onSuccess: (data) => router.push("/login"),
//     });
//   }


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
};
