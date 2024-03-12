import { useMutation } from "@tanstack/react-query";
import apiUpdatePassword from "../../../services/authentication/apiResetPassword";
import toast from "react-hot-toast";

export function useUpdatePassword() {
  const { mutate: update, isPending } = useMutation({
    mutationFn: ({ password }) => apiUpdatePassword(password),

    onSuccess: () => {
      toast.success("Password Updated");
    },

    onError: () => {
      toast.error("Password could not be updated!");
    },
  });

  return { update, isPending };
}
