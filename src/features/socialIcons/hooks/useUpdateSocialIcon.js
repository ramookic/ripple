import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiUpdateSocialIcon from "../../../services/socialIcons/apiUpdateSocialIcon";
import toast from "react-hot-toast";

export function useUpdateSocialIcon() {
  const queryClient = useQueryClient();

  const { mutate: updateSocialIcon, isPending } = useMutation({
    mutationFn: ({ updateData, id }) => apiUpdateSocialIcon(updateData, id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["socialIcons"] });
    },

    onError: () => {
      toast.error("Icon Cannot be Updated");
    },
  });

  return { updateSocialIcon, isPending };
}
