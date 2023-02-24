import { FaRegComment } from "react-icons/fa";
import { useGetHusqReplies } from "@/queries/husq.queries";
import { ActionIcon, Loader } from "@mantine/core";
import HusqBox from "./HusqBox";

export const HusqReplies = ({ id }: { id: number }) => {
  const { status, data } = useGetHusqReplies(id);

  if (status == "loading") {
    return <Loader color="indigo" size="xl" />;
  } else {
    return (
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {data.map((data) => (
          <HusqBox husq={data} key={data.id} />
        ))}
      </div>
    );
  }
};

const handleClick = () => {};
export const Reply = () => {
  return (
    <ActionIcon variant="transparent" onClick={handleClick}>
      <FaRegComment color="#00acee" />
    </ActionIcon>
  );
};
