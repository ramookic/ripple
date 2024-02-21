import supabase from "../supabase";

export default async function apiUpdateLink(updateData, id) {
  const { data, error } = await supabase
    .from("links")
    .update(updateData)
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}
