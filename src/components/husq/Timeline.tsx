import { useGetHusqs } from "@/queries/husq.queries";
import { useGetTimeline } from "@/queries/timeline.queries";
import { useGetUserWithId } from "@/queries/user.queries";
import { Loader, LoadingOverlay, Text } from "@mantine/core";
import HusqBox from "./HusqBox";

function Timeline() {
  const { status, data } = useGetTimeline();
  if (status == "error") {
    return <div>Page Failed to Load!</div>;
  }
  if (status == "loading") {
    return <Loader color="indigo" size="xl" />;
  }
  if (status == "success" && data != undefined) {
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
        {data.map((husq) =>
          husq.replyId == null ? <HusqBox husq={husq} key={husq.id} /> : null
        )}
      </div>
    );
  } else {
    return <div>We couldn't get your timeline, please try later!</div>;
  }
}
export default Timeline;
