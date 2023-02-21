import { useGetHusqs } from "@/queries/husq.queries";
import { useGetTimeline } from "@/queries/timeline.queries";
import { useGetUserWithId } from "@/queries/user.queries";
import { Text } from "@mantine/core";
import HusqBox from "./HusqBox";

function Timeline() {
  const { status, data } = useGetTimeline();
  if (status === "error") {
    return <div>error</div>;
  }

  if (status === "loading") {
    return <div>loading</div>;
  }
  if (status === "success" && data != undefined) {
    if (data.length === 0) {
      return <Text>Follow your friends to see their husqs!</Text>;
    }
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
        {data.map((husq) => (
          <HusqBox husq={husq} key={husq.id} />
        ))}
      </div>
    );
  } else {
    return <div>else</div>;
  }
}
export default Timeline;
