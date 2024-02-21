import supabase from "../supabase";

export default async function apiGetProfile(userId) {
  let { data: profile, error } = await supabase
    .from("profile")
    .select("*")
    .filter("user_id", "eq", userId);

  if (error) throw new Error(error.message);

  return profile[0];
}
