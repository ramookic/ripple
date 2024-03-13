import getDeviceType from "../../utils/getDeviceType";
import supabase from "../supabase";

localStorage.setItem("lastVisitTime", new Date().getTime());

export default async function apiAddVisit(userId) {
  const deviceType = getDeviceType(navigator.userAgent);

  const lastVisitTime = localStorage.getItem("lastVisitTime");
  const timeDifference = new Date().getTime() - parseInt(lastVisitTime);
  const timeThresholdForTabSwitch = 120000;

  if (timeDifference > timeThresholdForTabSwitch) {
    const locationReq = await fetch("https://freeipapi.com/api/json");
    const locationRes = await locationReq.json();

    const { ipAddress, countryName, countryCode, latitude, longitude } =
      locationRes;

    let { data, error } = await supabase.from("pageVisit").upsert([
      {
        user_id: userId,
        ip: ipAddress,
        countryName,
        countryCode,
        latitude,
        longitude,
        device: deviceType,
      },
    ]);

    if (error) throw new Error(error.message);

    return data;
  }
}
