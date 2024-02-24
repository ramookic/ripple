import { useQuery } from "@tanstack/react-query";

import apiGetProfile from "../../../services/profile/apiGetProfile";

export function useGetProfile(userId) {
  const { data: profile, isPending } = useQuery({
    queryKey: ["profile"],
    queryFn: () => apiGetProfile(userId),
  });

  return { profile, isPending };
}
