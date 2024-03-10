import { useQuery } from "@tanstack/react-query";
import apiGetLifetimeAnalytics from "../../../services/analytics/apiGetLifetimeAnalytics";

export function useGetLifetimeAnalytics(userId) {
  const { data, isPending } = useQuery({
    queryKey: ["lifetimeAnalytics"],
    queryFn: () => apiGetLifetimeAnalytics(userId),
  });

  return { data, isPending };
}
