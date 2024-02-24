import supabase from "../supabase";
import apiGetLinks from "../links/apiGetLinks";
import apiGetAppearance from "../appearance/apiGetAppearance";
import apiGetSocialIcons from "../socialIcons/apiGetSocialIcons";

export default async function apiUserTree(username) {
  const { data: profileData, error: profileError } = await supabase
    .from("profile")
    .select("*")
    .filter("username", "eq", username);

  if (profileError) throw new Error(profileError.message);

  if (!profileData || profileData.length === 0) {
    window.location.href = "/not-found";
  }

  const userId = profileData[0].user_id;

  const links = await apiGetLinks(userId);

  const appearance = await apiGetAppearance(userId);

  const socialIcons = await apiGetSocialIcons(userId);

  return {
    ...profileData[0],
    links: [...links],
    appearance,
    socialIcons,
  };
}
