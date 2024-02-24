import supabase from "../supabase";

export default async function apiGetSocialIcons(userId) {
  let { data: socialIcons, error } = await supabase
    .from("socialIcons")
    .select("*")
    .filter("user_id", "eq", userId)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return socialIcons;
}
