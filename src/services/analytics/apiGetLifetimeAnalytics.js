import supabase from "../supabase";

export default async function apiGetLifetimeAnalytics(userId) {
  const { data: visitData, error: visitError } = await supabase
    .from("pageVisit")
    .select("*")
    .filter("user_id", "eq", userId);

  if (visitError) throw new Error(visitError.message);

  const { data: linksData, error: linksError } = await supabase
    .from("linkClicks")
    .select("*")
    .filter("user_id", "eq", userId);

  if (linksError) throw new Error(linksError.message);

  const { data: socialIconsData, error: socialIconsError } = await supabase
    .from("socialIconClicks")
    .select("*")
    .filter("user_id", "eq", userId);

  if (socialIconsError) throw new Error(socialIconsError.message);

  return {
    views: visitData.length === 0 ? "N/A" : visitData.length,
    clicks:
      linksData.length === 0 && socialIconsData.length === 0
        ? "N/A"
        : linksData.length + socialIconsData.length,
  };
}
