import supabase from "../supabase";

export default async function apiUpdateSocialIcon(updateData, id) {
  const { data, error } = await supabase
    .from("socialIcons")
    .update(updateData)
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}
