import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiDeleteLink from "../../../services/admin/apiDeleteLink";
import toast from "react-hot-toast";

export function useDeleteLink() {
  const queryClient = useQueryClient();

  const { mutate: deleteLink, isPending } = useMutation({
    mutationFn: apiDeleteLink,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
      toast.success("Link Deleted");
    },

    onError: () => {
      toast.error("Link Cannot be Deleted");
    },
  });

  return { deleteLink, isPending };
}
