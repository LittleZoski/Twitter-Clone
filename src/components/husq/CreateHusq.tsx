import { useCreateHusqs } from "@/queries/husq.queries";
import { Box, Button, Checkbox, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { ChangeEvent, useState } from "react";

function CreateHusq({ replyId }: { replyId: number | undefined }) {
  const form = useForm({});
  const createHusq = useCreateHusqs();
  const [text, setText] = useState("");

  const handleSubmit = () => {
    createHusq.mutate({ text, replyId });
  };

  const handleUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  return (
    <Box sx={{ maxWidth: 300, borderStyle: "solid 10px #00FFBF" }} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="What's on your mind..."
          placeholder="Can't go wrong with a message about corn!"
          onChange={(event) => handleUpdate(event)}
          onBlur={(event) => handleUpdate(event)}
        />

        <Group position="right" mt="md">
          <Button type="submit">Send!</Button>
        </Group>
      </form>
    </Box>
  );
}

export default CreateHusq;
