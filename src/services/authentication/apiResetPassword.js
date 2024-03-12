import supabase from "../supabase";

export default async function apiUpdatePassword(password) {
  const { data, error } = await supabase.auth.updateUser({
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}
