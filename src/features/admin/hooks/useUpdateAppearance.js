import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiUpdateAppearance from "../../../services/admin/apiUpdateAppearance";
import toast from "react-hot-toast";

export function useUpdateAppearance() {
  const queryClient = useQueryClient();

  const { mutate: updateAppearance, isPending } = useMutation({
    mutationFn: ({ updateData, id }) => apiUpdateAppearance(updateData, id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appearance"] });
    },

    onError: () => {
      toast.error("Appearance Cannot be Updated");
    },
  });

  return { updateAppearance, isPending };
}
