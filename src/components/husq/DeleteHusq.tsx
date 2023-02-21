import { useDeleteHusq } from "@/queries/husq.queries";
import { Group, UnstyledButton } from "@mantine/core";
import { BsFillTrashFill } from "react-icons/bs";

function DeleteHusq({ id }: { id: number }) {
  const deletePost = useDeleteHusq();

  function handleClick() {
    deletePost.mutate(id);
  }
  return (
    <UnstyledButton onClick={handleClick}>
      <Group>
        <BsFillTrashFill color="#00acee" />
      </Group>
    </UnstyledButton>
  );
}

export default DeleteHusq;
