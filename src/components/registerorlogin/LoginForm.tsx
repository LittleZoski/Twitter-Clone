import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { useForm } from "@mantine/form";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/router";

export function LoginForm({ switchMode }: any) {
  const { login } = useAuth();
  const router = useRouter();

  const form = useForm<{
    username: string;
    password: string;
  }>({
    initialValues: {
      username: "",
      password: "",
    },
  });

  const handleLogin = (username: string, password: string) => {
    login(username, password);
    router.push("/");
  };

  return (
    <>
      {/* Header */}
      <h1>Sign in to Husqr</h1>

      {/* Form */}
      <form>
        <TextInput
          label="Username"
          placeholder="Username"
          {...form.getInputProps("username")}
          style={{ marginTop: "10px" }}
        />

        <PasswordInput
          label="Password"
          placeholder="Password"
          visibilityToggleIcon={({ reveal }) =>
            reveal ? <BsEyeSlashFill /> : <BsEyeFill />
          }
          {...form.getInputProps("password")}
        />

        <Group position="right" mt="md" className="login">
          <Button
            onClick={() =>
              handleLogin(form.values.username, form.values.password)
            }
            style={{ width: "200px" }}
            radius="xl"
          >
            Sign in
          </Button>
        </Group>

        <Group position="right" mt="md" className="register">
          <Button
            type="button"
            onClick={switchMode}
            style={{ width: "200px" }}
            radius="xl"
          >
            Create Account
          </Button>
        </Group>
      </form>
    </>
  );
}
