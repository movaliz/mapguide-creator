import { Search } from "lucide-react";
import { useMemo } from "react";
import { getCountryCode, countryFlag } from "@/lib/country-utils";
import type { Place } from "@/lib/json-parser";

// Map of known country codes to display names
const COUNTRY_NAMES: Record<string, string> = {
  DE: "Germany", FR: "France", ES: "Spain", IT: "Italy", TR: "Turkey",
  US: "United States", GB: "United Kingdom", NL: "Netherlands", PT: "Portugal",
  GR: "Greece", JP: "Japan", AU: "Australia", CA: "Canada", MX: "Mexico",
  BR: "Brazil", AT: "Austria", CH: "Switzerland", BE: "Belgium", SE: "Sweden",
  NO: "Norway", DK: "Denmark", FI: "Finland", PL: "Poland", CZ: "Czechia",
  HU: "Hungary", HR: "Croatia", IE: "Ireland", IS: "Iceland", RO: "Romania",
  BG: "Bulgaria", KR: "South Korea", TH: "Thailand", VN: "Vietnam",
  ID: "Indonesia", IN: "India", CN: "China", SG: "Singapore", NZ: "New Zealand",
  AR: "Argentina", CO: "Colombia", CL: "Chile", PE: "Peru", MA: "Morocco",
  EG: "Egypt", ZA: "South Africa", IL: "Israel", AE: "UAE", RU: "Russia",
  UA: "Ukraine", GE: "Georgia", MY: "Malaysia", PH: "Philippines", TW: "Taiwan",
  SA: "Saudi Arabia", QA: "Qatar", JO: "Jordan", LB: "Lebanon", ME: "Montenegro",
  RS: "Serbia", BA: "Bosnia", SI: "Slovenia", SK: "Slovakia", LT: "Lithuania",
  LV: "Latvia", EE: "Estonia", MT: "Malta", LU: "Luxembourg", CY: "Cyprus",
  AL: "Albania", MK: "N. Macedonia", CU: "Cuba", CR: "Costa Rica", PA: "Panama",
  EC: "Ecuador", UY: "Uruguay", BO: "Bolivia", PY: "Paraguay", DO: "Dominican Rep.",
  GT: "Guatemala", HN: "Honduras", NI: "Nicaragua", SV: "El Salvador",
  KE: "Kenya", TZ: "Tanzania", NG: "Nigeria", GH: "Ghana", ET: "Ethiopia",
  TN: "Tunisia", SN: "Senegal", KH: "Cambodia", MM: "Myanmar", LK: "Sri Lanka",
  NP: "Nepal", BD: "Bangladesh", PK: "Pakistan", OM: "Oman", BH: "Bahrain",
  KW: "Kuwait",
};

interface PlaceFiltersProps {
  places: Place[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCountries: Set<string>;
  onToggleCountry: (code: string) => void;
}

export function extractCountries(places: Place[]): { code: string; name: string; flag: string }[] {
  const codes = new Set<string>();
  for (const p of places) {
    const cc = getCountryCode(p.address);
    if (cc) codes.add(cc);
  }
  return Array.from(codes)
    .map((code) => ({
      code,
      name: COUNTRY_NAMES[code] || code,
      flag: countryFlag(code),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

const PlaceFilters = ({ places, searchQuery, onSearchChange, selectedCountries, onToggleCountry }: PlaceFiltersProps) => {
  const countries = useMemo(() => extractCountries(places), [places]);

  return (
    <div className="space-y-3 mb-4">
      {/* Search bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search places by name or address…"
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition-shadow"
        />
      </div>

      {/* Country pills */}
      {countries.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none -mx-1 px-1">
          <button
            onClick={() => onToggleCountry("ALL")}
            className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              selectedCountries.size === 0
                ? "bg-accent text-accent-foreground border-accent"
                : "bg-card text-foreground border-border hover:border-accent/40"
            }`}
          >
            All
          </button>
          {countries.map((c) => (
            <button
              key={c.code}
              onClick={() => onToggleCountry(c.code)}
              className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                selectedCountries.has(c.code)
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-card text-foreground border-border hover:border-accent/40"
              }`}
            >
              <span>{c.flag}</span>
              {c.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlaceFilters;
