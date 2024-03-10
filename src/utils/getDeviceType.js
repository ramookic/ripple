import { UAParser } from "ua-parser-js";

export default function getDeviceType(userAgent) {
  const parser = new UAParser();
  const result = parser.setUA(userAgent).getDevice();

  if (!result.type) return "other";

  return result.type;
}
