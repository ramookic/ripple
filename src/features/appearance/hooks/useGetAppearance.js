import { useQuery } from "@tanstack/react-query";
import apiGetAppearance from "../../../services/appearance/apiGetAppearance";

export function useGetAppearance(userId) {
  const { data: appearance, isPending } = useQuery({
    queryKey: ["appearance"],
    queryFn: () => apiGetAppearance(userId),
  });

  return { appearance, isPending };
}
