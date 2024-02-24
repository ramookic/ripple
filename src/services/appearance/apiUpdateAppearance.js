import supabase from "../supabase";

export default async function apiUpdateAppearance(updateData, id) {
  const { data, error } = await supabase
    .from("appearance")
    .update(updateData)
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}
