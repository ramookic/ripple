import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiCreateLink from "../../../services/links/apiCreateLink";
import toast from "react-hot-toast";

export function useCreateLink() {
  const queryClient = useQueryClient();

  const { mutate: createLink, isPending } = useMutation({
    mutationFn: apiCreateLink,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
      toast.success("Link Created");
    },

    onError: () => {
      toast.error("Link Cannot be Created");
    },
  });

  return { createLink, isPending };
}
