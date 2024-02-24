import supabase from "../supabase";

export default async function apiDeleteLink(linkId) {
  const { error } = await supabase.from("links").delete().eq("id", linkId);

  if (error) throw new Error(error.message);
}
