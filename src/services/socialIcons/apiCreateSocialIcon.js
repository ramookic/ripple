import supabase from "../supabase";

export default async function apiCreateSocialIcon({ social, link, userId }) {
  let { data, error } = await supabase.from("socialIcons").upsert([
    {
      social,
      link,
      user_id: userId,
    },
  ]);

  if (error) throw new Error(error.message);

  return data;
}
