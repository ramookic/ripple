import supabase from "../supabase";

async function query(queryStr, userId, startDate) {
  const { data, error } = await supabase
    .from(queryStr)
    .select("*")
    .eq("user_id", userId)
    .gte("created_at", startDate.toISOString())
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data;
}

function getStartDate(timeSpan) {
  let startDate;

  switch (timeSpan) {
    case "today":
      startDate = new Date();
      startDate.setHours(0, 0, 0, 0);
      break;
    case "last7days":
      startDate = new Date();
      startDate.setDate(startDate.getDate() - 7);
      break;
    case "lastMonth":
      startDate = new Date();
      startDate.setMonth(startDate.getMonth() - 1);
      startDate.setDate(1);
      startDate.setHours(0, 0, 0, 0);
      break;
    case "last3Months":
      startDate = new Date();
      startDate.setMonth(startDate.getMonth() - 3);
      startDate.setDate(1);
      startDate.setHours(0, 0, 0, 0);
      break;
    case "last6Months":
      startDate = new Date();
      startDate.setMonth(startDate.getMonth() - 6);
      startDate.setDate(1);
      startDate.setHours(0, 0, 0, 0);
      break;
    case "lastYear":
      startDate = new Date();
      startDate.setFullYear(startDate.getFullYear() - 1);
      startDate.setMonth(0);
      startDate.setDate(1);
      startDate.setHours(0, 0, 0, 0);
      break;
    default:
      throw new Error("Invalid time span provided");
  }

  return startDate;
}

export default async function apiGetAnalytics(userId, timeSpan) {
  const startDate = getStartDate(timeSpan);

  const visitData = await query("pageVisit", userId, startDate);

  const linksData = await query("linkClicks", userId, startDate);

  const socialIconsData = await query("socialIconClicks", userId, startDate);

  return { visits: visitData, links: linksData, socialIcons: socialIconsData };
}
