import { useRegister } from "@/queries/register.queries";
import { Box, Button, Checkbox, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import React from "react";

function Register() {
  const register = useRegister();
  const form = useForm({
    initialValues: {
      username: "",
      name: "",
      password: "",
      workspace: "mcc-cohort-4",
      termsOfService: false,
    },

    validate: {
      username: (value) =>
        /^[0-9a-zA-Z]{1,12}$/.test(value) ? null : "Invalid username",
      name: (value) =>
        /^[0-9a-zA-Z]{1,12}$/.test(value) ? null : "Invalid name",
      password: (value) =>
        /^[0-9a-zA-Z]{3,20}$/.test(value) ? null : "Invalid password",
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => register.mutate(values))}>
        <TextInput
          withAsterisk
          label="username"
          placeholder="username"
          {...form.getInputProps("username")}
        />
        <TextInput
          withAsterisk
          label="name"
          placeholder="name"
          {...form.getInputProps("name")}
        />
        <TextInput
          withAsterisk
          label="password"
          placeholder="password"
          {...form.getInputProps("password")}
        />

        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default Register;
