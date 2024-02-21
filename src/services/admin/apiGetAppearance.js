import supabase from "../supabase";

export default async function apiGetAppearance(userId) {
  const { data: appearance, error } = await supabase
    .from("appearance")
    .select("*")
    .filter("user_id", "eq", userId);

  if (error) throw new Error(error.message);

  return appearance[0];
}
