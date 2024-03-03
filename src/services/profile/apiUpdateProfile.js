import supabase from "../supabase";

export default async function apiUpdateProfile(updateData, id) {
  const { data, error } = await supabase
    .from("profile")
    .update(updateData)
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}
