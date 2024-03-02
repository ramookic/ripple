import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import apiLogout from "../../../services/authentication/apiLogout";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: apiLogout,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logout, isPending };
}
