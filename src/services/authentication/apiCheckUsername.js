import supabase from "../supabase";

export default async function apiCheckUsername(username) {
  const { data, error } = await supabase
    .from("profile")
    .select("*")
    .filter("username", "eq", username);

  if (error) throw new Error(error.message);

  return data[0].username;
}
