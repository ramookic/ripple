import { useQuery } from "@tanstack/react-query";
import apiGetAnalytics from "../../../services/analytics/apiGetAnalytics";

export function useGetAnalytics(userId, timeSpan) {
  const { data, isPending, refetch } = useQuery({
    queryKey: ["analytics", timeSpan],
    queryFn: () => apiGetAnalytics(userId, timeSpan),
  });

  return { data, isPending, refetch };
}
