import { useDeleteHusq } from "@/queries/husq.queries";
import { Husq } from "@/types/husq";
import { Group, UnstyledButton } from "@mantine/core";
import { BsFillTrashFill } from "react-icons/bs";

function DeleteHusq({ husq, userId }: { husq: Husq; userId: number }) {
  const deletePost = useDeleteHusq();

  function handleClick() {
    deletePost.mutate(husq.id);
  }
  return (
    <UnstyledButton onClick={handleClick} hidden={husq.authorId != userId}>
      <Group>
        <BsFillTrashFill color="#00acee" />
      </Group>
    </UnstyledButton>
  );
}

export default DeleteHusq;
