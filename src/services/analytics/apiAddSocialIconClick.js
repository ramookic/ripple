import getDeviceType from "../../utils/getDeviceType";
import supabase from "../supabase";

export default async function apiAddSocialIconClick(
  userId,
  socialLinkId,
  icon
) {
  const deviceType = getDeviceType(navigator.userAgent);

  const { data, error } = await supabase.from("socialIconClicks").upsert([
    {
      user_id: userId,
      socialLinkId,
      device: deviceType,
      icon,
    },
  ]);

  if (error) throw new Error(error.message);

  return data;
}
