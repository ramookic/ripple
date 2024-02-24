import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiDeleteSocialIcon from "../../../services/socialIcons/apiDeleteSocialIcon";
import toast from "react-hot-toast";

export function useDeleteSocialIcon() {
  const queryClient = useQueryClient();

  const { mutate: deleteSocialIcon, isPending } = useMutation({
    mutationFn: apiDeleteSocialIcon,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["socialIcons"] });
      toast.success("Icon Deleted");
    },

    onError: () => {
      toast.error("Icon Cannot be Deleted");
    },
  });

  return { deleteSocialIcon, isPending };
}
