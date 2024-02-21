import { useQuery } from "@tanstack/react-query";

import apiGetLinks from "../../../services/admin/apiGetLinks";

export function useGetLinks(userId) {
  const { data: links, isPending } = useQuery({
    queryKey: ["links"],
    queryFn: () => apiGetLinks(userId),
  });

  return { links, isPending };
}
