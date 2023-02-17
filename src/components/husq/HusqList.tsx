import { useGetHusqs } from "@/queries/husq.queries";
import { usegetUserWithId } from "@/queries/user.queries";
import { Husq } from "@/types/husq";
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
