import supabase from "../supabase";

export default async function apiCreateLink({ title, link, userId }) {
  let { data, error } = await supabase.from("links").upsert([
    {
      title,
      link,
      user_id: userId,
    },
  ]);

  if (error) throw new Error(error.message);

  return data;
}
