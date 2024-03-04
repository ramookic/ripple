import supabase, { supabaseUrl } from "../supabase";
import apiUpdateProfile from "./apiUpdateProfile";

export default async function apiUpdateProfileImage(image, id) {
  const imageName = `${Math.random()}-${image.name.replace(/[/%\-_]/g, "")}`;

  const imagePath = `${supabaseUrl}/storage/v1/object/public/profile-images/${imageName}`;

  await apiUpdateProfile({ profileImage: imagePath }, id);

  const { error } = await supabase.storage
    .from("profile-images")
    .upload(imageName, image);

  if (error) throw new Error("Image could not be uploaded");
}
