import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiUpdateLink from "../../../services/links/apiUpdateLink";
import toast from "react-hot-toast";

export function useUpdateLink() {
  const queryClient = useQueryClient();

  const { mutate: updateLink, isPending } = useMutation({
    mutationFn: ({ updateData, id }) => apiUpdateLink(updateData, id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },

    onError: () => {
      toast.error("Link Cannot be Updated");
    },
  });

  return { updateLink, isPending };
}
