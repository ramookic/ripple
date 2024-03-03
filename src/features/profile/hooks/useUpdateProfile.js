import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import apiUpdateProfile from "../../../services/profile/apiUpdateProfile";

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  const { mutate: updateProfile, isPending } = useMutation({
    mutationFn: ({ updateData, id }) => apiUpdateProfile(updateData, id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },

    onError: () => {
      toast.error("Profile Cannot be Updated");
    },
  });

  return { updateProfile, isPending };
}
