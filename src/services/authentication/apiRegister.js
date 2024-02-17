import supabase from "../supabase";

export default async function apiRegister({ email, password, username }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  const { data: profileData, error: profileError } = await supabase
    .from("profile")
    .upsert([
      {
        username,
        profileTitle: "@" + username,
        user_id: data?.session?.user.id,
      },
    ]);

  if (profileError) throw new Error(profileError.message);

  const { error: appearanceError } = await supabase.from("appearance").upsert([
    {
      user_id: data?.session?.user.id,
    },
  ]);

  if (appearanceError) throw new Error(appearanceError.message);

  return { ...data, profileData };
}
