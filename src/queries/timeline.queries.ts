import { Husq } from "@/types/husq";
import { useMutation, useQuery } from "@tanstack/react-query";
import { API } from "@/api/api";

export function useGetTimeline() {
  return useQuery({
    queryKey: ["timeline"],
    queryFn: () => {
      return API.get<Husq[]>("api/v1/timelines").then((response) => {
        return response.data;
      });
    },
  });
}
