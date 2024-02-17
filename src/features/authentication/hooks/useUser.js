import { useQuery } from "@tanstack/react-query";
import { apiUser } from "../../../services/authentication/apiUser";

export function useUser() {
  const { data: user, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: apiUser,
  });

  return {
    user,
    isAuthenticated: user?.role === "authenticated",
    isPending,
  };
}
