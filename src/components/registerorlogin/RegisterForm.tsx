import {
  Button,
  Checkbox,
  Group,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { BsEyeSlashFill, BsEyeFill, BsX, BsCheck } from "react-icons/bs";
import React, { useState } from "react";
import { useForm } from "@mantine/form";
import { useAuth } from "@/context/AuthProvider";
import { PassWordBox } from "./PasswordBox";

export function RegisterForm({ switchMode }: any) {
  const { register } = useAuth();
  const [newUser, setNewUser] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const form = useForm<{
    username: string;
    name: string;
    password: string;
    confirmPassword: string;
    termsOfService: boolean;
  }>({
    validateInputOnBlur: true,

    initialValues: {
      username: "",
      name: "",
      password: "",
      confirmPassword: "",
      termsOfService: false,
    },

    validate: (values) => ({
      username:
        values.username == ""
          ? "Username is required"
          : values.username.length < 3
          ? "Username must contain at least 3 characters"
          : values.username.length > 20
          ? "Username must contain less than 20 characters"
          : /^[a-zA-Z]/.test(values.name)
          ? null
          : "Username cannot contain spaces or special characters",
      name:
        values.name == ""
          ? "Legal name is required"
          : /^[a-zA-Z ]/.test(values.name)
          ? null
          : "Legal Name cannot contain numbers or special characters",
      confirmPassword:
        values.confirmPassword != newPassword ? "Passwords do not match" : null,
    }),
  });

  const childToParent = (password: string) => {
    setNewPassword(password);
  };

  const handleRegister = (username: string, name: string) => {
    register(username, name, newPassword);
  };

  const handleToggle = () => {
    form.reset();
    setNewUser(!newUser);
  };

  return (
    <>
      {/* Header */}
      <p />
      <p />
      <h1>Create Account</h1>

      {/* Form */}
      <form
        onSubmit={form.onSubmit(() =>
          handleRegister(form.values.username, form.values.name)
        )}
      >
        <TextInput
          withAsterisk
          label="Legal Name"
          placeholder="Name"
          {...form.getInputProps("name")}
        />
        <TextInput
          withAsterisk
          label="Username"
          placeholder="Username"
          {...form.getInputProps("username")}
          style={{ marginTop: "10px" }}
        />

        <PassWordBox childToParent={childToParent} />

        <PasswordInput
          withAsterisk
          label="Confirm Password"
          placeholder="Confirm Password"
          visibilityToggleIcon={({ reveal }) =>
            reveal ? <BsEyeSlashFill /> : <BsEyeFill />
          }
          {...form.getInputProps("confirmPassword")}
          style={{ marginTop: "10px" }}
        />

        <Checkbox
          mt="md"
          label="I agree to sell my privacy for fun and profit."
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
          style={{ marginBottom: "40px" }}
        />

        <Group position="right" mt="md" className="register">
          <Button type="submit" style={{ width: "200px" }} radius="xl">
            Complete Registration
          </Button>
        </Group>

        <Group position="right" mt="md" className="login">
          <Button onClick={switchMode} style={{ width: "200px" }} radius="xl">
            Return to Sign In
          </Button>
        </Group>
      </form>
    </>
  );
}
