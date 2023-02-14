//See a timeline of husqs from users that I currently follow

import { useGetHusqs } from "@/queries/husq.queries";
import { Husq } from "@/types/husq";
import { useQuery } from "@tanstack/react-query";
import HusqDetails from "./HusqDetails";

function HusqList() {
  const query = useGetHusqs();
  if (query.isSuccess) {
    return (
      <div>
        {query.data.map((husq) => (
          <HusqDetails {...husq} key={husq.id} />
        ))}
      </div>
    );
  }
}

export default HusqList;
