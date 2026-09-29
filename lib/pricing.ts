export type Region =
  | "lk"
  | "uk"
  | "us"
  | "japan"
  | "canada"
  | "europe"
  | "australia"
  | "south_korea"
  | "default";

export type RegionPrice = { amount: number; currency: string };

export const PUBLISH_PLAN_MONTHS = 3;

export const PUBLISH_PRICES: Record<Region, RegionPrice> = {
  lk: { amount: 500, currency: "LKR" },
  uk: { amount: 3, currency: "GBP" },
  us: { amount: 3, currency: "USD" },
  japan: { amount: 475, currency: "JPY" },
  canada: { amount: 4.5, currency: "CAD" },
  europe: { amount: 3, currency: "EUR" },
  australia: { amount: 4.5, currency: "AUD" },
  south_korea: { amount: 4100, currency: "KRW" },
  default: { amount: 3, currency: "USD" },
};

// Region shown before the visitor's region is detected (static export / first paint).
export const DEFAULT_REGION: Region = "lk";

const CANADA_TZ =
  /^(Canada\/|America\/(Toronto|Montreal|Vancouver|Edmonton|Winnipeg|Regina|Halifax|St_Johns|Moncton|Glace_Bay|Goose_Bay|Whitehorse|Dawson|Dawson_Creek|Yellowknife|Iqaluit|Rankin_Inlet|Resolute|Cambridge_Bay|Inuvik|Swift_Current|Fort_Nelson|Creston|Atikokan|Blanc-Sablon|Nipigon|Thunder_Bay|Rainy_River|Pangnirtung))/;
const US_TZ =
  /^(US\/|Pacific\/Honolulu|America\/(New_York|Chicago|Denver|Los_Angeles|Phoenix|Anchorage|Juneau|Sitka|Yakutat|Nome|Metlakatla|Adak|Boise|Detroit|Menominee|Indiana\/|Kentucky\/|North_Dakota\/|Indianapolis|Louisville))/;

function regionFromTimeZone(tz: string): Region | null {
  if (tz === "Asia/Colombo") return "lk";
  if (tz === "Europe/London" || tz === "Europe/Belfast" || tz === "GB") return "uk";
  if (tz === "Asia/Tokyo" || tz === "Japan") return "japan";
  if (tz === "Asia/Seoul" || tz === "ROK") return "south_korea";
  if (tz.startsWith("Australia/")) return "australia";
  if (CANADA_TZ.test(tz)) return "canada";
  if (US_TZ.test(tz)) return "us";
  if (tz.startsWith("Europe/")) return "europe";
  return null;
}

const EURO_COUNTRIES = new Set([
  "AT", "BE", "HR", "CY", "EE", "FI", "FR", "DE", "GR", "IE", "IT", "LV",
  "LT", "LU", "MT", "NL", "PT", "SK", "SI", "ES",
]);

function regionFromCountry(cc: string): Region | null {
  switch (cc) {
    case "LK": return "lk";
    case "GB": return "uk";
    case "US": return "us";
    case "JP": return "japan";
    case "CA": return "canada";
    case "AU": return "australia";
    case "KR": return "south_korea";
  }
  return EURO_COUNTRIES.has(cc) ? "europe" : null;
}

export function detectRegion(): Region {
  if (typeof window === "undefined") return DEFAULT_REGION;
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const fromTz = tz ? regionFromTimeZone(tz) : null;
    if (fromTz) return fromTz;
  } catch {}
  for (const lang of navigator.languages ?? [navigator.language]) {
    const cc = lang.split("-")[1]?.toUpperCase();
    const fromLang = cc ? regionFromCountry(cc) : null;
    if (fromLang) return fromLang;
  }
  return "default";
}

export function formatPrice({ amount, currency }: RegionPrice): string {
  const whole = Number.isInteger(amount);
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: whole ? 0 : 2,
  }).format(amount);
}
