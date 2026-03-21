const COUNTRY_MAP: Record<string, string> = {
  germany: "DE", deutschland: "DE", france: "FR", spain: "ES", españa: "ES",
  italy: "IT", italia: "IT", turkey: "TR", türkiye: "TR", "united states": "US",
  usa: "US", "united kingdom": "GB", uk: "GB", netherlands: "NL", portugal: "PT",
  greece: "GR", japan: "JP", australia: "AU", canada: "CA", mexico: "MX",
  brazil: "BR", austria: "AT", switzerland: "CH", belgium: "BE", sweden: "SE",
  norway: "NO", denmark: "DK", finland: "FI", poland: "PL", "czech republic": "CZ",
  czechia: "CZ", hungary: "HU", croatia: "HR", ireland: "IE", iceland: "IS",
  romania: "RO", bulgaria: "BG", "south korea": "KR", thailand: "TH",
  vietnam: "VN", indonesia: "ID", india: "IN", china: "CN", singapore: "SG",
  "new zealand": "NZ", argentina: "AR", colombia: "CO", chile: "CL", peru: "PE",
  morocco: "MA", egypt: "EG", "south africa": "ZA", israel: "IL",
  "united arab emirates": "AE", türkei: "TR", russia: "RU", ukraine: "UA",
  georgia: "GE", malaysia: "MY", philippines: "PH", taiwan: "TW",
  "saudi arabia": "SA", qatar: "QA", jordan: "JO", lebanon: "LB",
  montenegro: "ME", serbia: "RS", "bosnia and herzegovina": "BA",
  slovenia: "SI", slovakia: "SK", lithuania: "LT", latvia: "LV", estonia: "EE",
  malta: "MT", luxembourg: "LU", cyprus: "CY", albania: "AL",
  "north macedonia": "MK", cuba: "CU", "costa rica": "CR", panama: "PA",
  ecuador: "EC", uruguay: "UY", bolivia: "BO", paraguay: "PY",
  "dominican republic": "DO", guatemala: "GT", honduras: "HN",
  nicaragua: "NI", "el salvador": "SV", kenya: "KE", tanzania: "TZ",
  nigeria: "NG", ghana: "GH", ethiopia: "ET", tunisia: "TN",
  senegal: "SN", cambodia: "KH", myanmar: "MM", "sri lanka": "LK",
  nepal: "NP", bangladesh: "BD", pakistan: "PK", oman: "OM", bahrain: "BH",
  kuwait: "KW",
};

export function getCountryCode(address: string): string | null {
  const parts = address.split(",").map((s) => s.trim());
  const last = parts[parts.length - 1];
  if (!last) return null;
  const lower = last.toLowerCase();
  if (COUNTRY_MAP[lower]) return COUNTRY_MAP[lower];
  if (last.length === 2 && last === last.toUpperCase()) return last;
  return null;
}

/** Convert a 2-letter country code to flag emoji */
export function countryFlag(code: string): string {
  return code
    .toUpperCase()
    .split("")
    .map((c) => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65))
    .join("");
}
