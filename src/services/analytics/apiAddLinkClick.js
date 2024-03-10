import getDeviceType from "../../utils/getDeviceType";
import supabase from "../supabase";

export default async function apiAddLinkClick(userId, linkId) {
  const deviceType = getDeviceType(navigator.userAgent);

  const locationReq = await fetch("https://freeipapi.com/api/json");
  const locationRes = await locationReq.json();

  const { countryName, countryCode } = locationRes;

  const { data, error } = await supabase.from("linkClicks").upsert([
    {
      user_id: userId,
      linkId,
      device: deviceType,
      countryName,
      countryCode,
    },
  ]);

  if (error) throw new Error(error.message);

  return data;
}
