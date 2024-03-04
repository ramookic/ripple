import supabase, { supabaseUrl } from "../supabase";
import apiUpdateAppearance from "./apiUpdateAppearance";

export default async function apiUpdateBackgroundMedia(media, type, id) {
  const mediaName = `${Math.random()}-${media.name.replace(/[/%\-_]/g, "")}`;

  const mediaPath = `${supabaseUrl}/storage/v1/object/public/backgrounds/${mediaName}`;

  await apiUpdateAppearance(
    { backgroundMedia: mediaPath, backgroundType: type },
    id
  );

  const { error } = await supabase.storage
    .from("backgrounds")
    .upload(mediaName, media);

  if (error) throw new Error("Media could not be uploaded");
}
