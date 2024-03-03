import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import apiUpdateProfileImage from "../../../services/profile/apiUpdateProfileImage";

export function useUpdateProfileImage() {
  const queryClient = useQueryClient();

  const { mutate: updateProfileImage, isPending } = useMutation({
    mutationFn: ({ image, id }) => apiUpdateProfileImage(image, id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },

    onError: () => {
      toast.error("Profile Image Cannot be Updated");
    },
  });

  return { updateProfileImage, isPending };
}
