import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiCreateSocialIcon from "../../../services/socialIcons/apiCreateSocialIcon";
import toast from "react-hot-toast";

export function useCreateSocialIcon() {
  const queryClient = useQueryClient();

  const { mutate: createIcon, isPending } = useMutation({
    mutationFn: apiCreateSocialIcon,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["socialIcons"] });
      toast.success("Social Icon Created");
    },

    onError: () => {
      toast.error("Social Icon Cannot be Created");
    },
  });

  return { createIcon, isPending };
}
