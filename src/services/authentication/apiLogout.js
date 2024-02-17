import supabase from "../supabase";

export default async function apiLogout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
