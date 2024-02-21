import { useQuery } from "@tanstack/react-query";
import apiUserTree from "../../../services/userTree/apiUserTree";

export function useUserTree(username) {
  const { data, isPending } = useQuery({
    queryKey: [username],
    queryFn: () => apiUserTree(username),
  });

  return { data, isPending };
}
