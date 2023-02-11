//See a timeline of husqs from users that I currently follow

import { Husq } from "@/types/husq";
import HusqDetails from "./HusqDetails";

function HusqList({ husqs }: { husqs: Husq[] }) {
  return (
    <div>
      {husqs.map((husq) => (
        <HusqDetails {...husq} key={husq.id} />
      ))}
    </div>
  );
}

export default HusqList;
