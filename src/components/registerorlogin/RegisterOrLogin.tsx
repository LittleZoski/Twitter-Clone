import { Box } from "@mantine/core";
import React, { useState } from "react";
import { useForm } from "@mantine/form";

import { AwesomeBird } from "./AwesomeBird";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

function RegisterOrLogin() {
  const [newUser, setNewUser] = useState(false);
  const switchMode = () => {
    setNewUser(!newUser);
  };

  const activePage = newUser ? (
    <RegisterForm switchMode={switchMode} />
  ) : (
    <LoginForm switchMode={switchMode} />
  );

  return (
    <>
      <Box sx={{ maxWidth: 700 }} mx="auto" className="form">
        <AwesomeBird />
        {activePage}
      </Box>
    </>
  );
}

export default RegisterOrLogin;
