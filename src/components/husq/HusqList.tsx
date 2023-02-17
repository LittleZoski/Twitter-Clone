import { useGetHusqs } from "@/queries/husq.queries";
import { useGetUserWithId } from "@/queries/user.queries";
import { Husq } from "@/types/husq";
import { User } from "@/types/user";
import { idText } from "typescript";
import HusqDetails from "./HusqDetails";

function HusqList(id: User["id"]) {
  const query = useGetHusqs(id);

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
