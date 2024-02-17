import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import apiRegister from "../../../services/authentication/apiRegister";

export function useRegister() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: register, isPending } = useMutation({
    mutationFn: apiRegister,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/admin", { replace: true });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { register, isPending };
}
