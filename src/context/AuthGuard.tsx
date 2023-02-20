import RegisterOrLogin from "@/components/registerorlogin/RegisterOrLogin";
import React, { useContext } from "react";
import { useAuthContext, useAuth } from "./AuthProvider";

function AuthGuard({ children }: { children: JSX.Element }) {
  const isAuth = useAuthContext();

  if (isAuth.authed) {
    return <>{children}</>;
  }

  return <RegisterOrLogin />;
}

export default AuthGuard;
