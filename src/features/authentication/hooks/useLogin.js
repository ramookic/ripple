import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import apiLogin from "../../../services/authentication/apiLogin";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: apiLogin,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/admin", { replace: true });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { login, isPending };
}
