import { useAuth } from "@/context/AuthProvider";
import { Button } from "@mantine/core";
import React from "react";

function Logout() {
  const { logout } = useAuth();

  const handleClick = () => {
    logout();
  };
  return (
    <Button mb="xl" radius="xl" onClick={handleClick}>
      Logout
    </Button>
  );
}

export default Logout;
