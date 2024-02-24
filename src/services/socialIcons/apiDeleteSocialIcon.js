import supabase from "../supabase";

export default async function apiDeleteSocialIcon(linkId) {
  const { error } = await supabase
    .from("socialIcons")
    .delete()
    .eq("id", linkId);

  if (error) throw new Error(error.message);
}
