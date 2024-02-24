import supabase from "../supabase";

export default async function apiGetLinks(userId) {
  const { data: links, error } = await supabase
    .from("links")
    .select("*")
    .filter("user_id", "eq", userId)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return links;
}
