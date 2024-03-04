import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import apiUpdateBackgroundMedia from "../../../services/appearance/apiUpdateBackgroundMedia";

export function useUpdateBackgroundMedia() {
  const queryClient = useQueryClient();

  const { mutate: updateBackgroundMedia, isPending } = useMutation({
    mutationFn: ({ media, type, id }) =>
      apiUpdateBackgroundMedia(media, type, id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appearance"] });
    },

    onError: () => {
      toast.error("Background Cannot be Updated");
    },
  });

  return { updateBackgroundMedia, isPending };
}
