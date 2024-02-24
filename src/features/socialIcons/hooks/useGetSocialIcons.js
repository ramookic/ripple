import { useQuery } from "@tanstack/react-query";
import apiGetSocialIcons from "../../../services/socialIcons/apiGetSocialIcons";

export function useGetSocialIcons(userId) {
  const { data: socialIcons, isPending } = useQuery({
    queryKey: ["socialIcons"],
    queryFn: () => apiGetSocialIcons(userId),
  });

  return { socialIcons, isPending };
}
