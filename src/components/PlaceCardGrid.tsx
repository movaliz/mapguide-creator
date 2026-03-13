import { motion } from "framer-motion";
import type { Place } from "@/lib/json-parser";
import { ExternalLink, MapPin } from "lucide-react";

interface PlaceCardGridProps {
  places: Place[];
  maxVisible?: number;
}

function getCountryCode(address: string): string | null {
  const parts = address.split(",").map((s) => s.trim());
  const last = parts[parts.length - 1];
  if (!last) return null;
  const map: Record<string, string> = {
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
    morocco: "MA", egypt: "EG", "south africa": "ZA", israel: "IL", "united arab emirates": "AE",
    "türkei": "TR", russia: "RU", ukraine: "UA", georgia: "GE",
  };
  const lower = last.toLowerCase();
  if (map[lower]) return map[lower];
  if (last.length === 2 && last === last.toUpperCase()) return last;
  return null;
}

/** Convert a 2-letter country code to flag emoji */
function countryFlag(code: string): string {
  return code
    .toUpperCase()
    .split("")
    .map((c) => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65))
    .join("");
}

function formatDate(dateStr: string | null): string | null {
  if (!dateStr) return null;
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(dateStr));
  } catch {
    return null;
  }
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, duration: 0.45, bounce: 0 } },
};

const PlaceCardGrid = ({ places, maxVisible }: PlaceCardGridProps) => {
  const visible = maxVisible ? places.slice(0, maxVisible) : places;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {visible.map((place, i) => {
        const country = getCountryCode(place.address);
        const date = formatDate(place.date);

        return (
          <motion.div
            key={i}
            variants={item}
            className="group relative bg-card rounded-3xl border border-border shadow-soft hover:shadow-elevated hover:border-primary/20 transition-all duration-300 overflow-hidden"
          >
            {/* Map area */}
            <div className="h-28 bg-primary-soft relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
              </div>
              {country && (
                <span className="absolute top-3 right-3 text-[11px] font-semibold tracking-wide bg-card/90 backdrop-blur-sm text-foreground px-2.5 py-1 rounded-full shadow-soft">
                  {country}
                </span>
              )}
            </div>

            <div className="p-4">
              <h3 className="font-display text-lg leading-tight text-foreground mb-1.5 group-hover:text-primary transition-colors">
                {place.title}
              </h3>

              {place.address && (
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                  {place.address}
                </p>
              )}

              <div className="flex items-center justify-between pt-2 border-t border-border/60">
                {date ? (
                  <span className="text-xs text-muted-foreground/70">
                    {date}
                  </span>
                ) : <span />}
                {place.url && (
                  <a
                    href={place.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors rounded-full bg-primary/[0.07] px-3 py-1.5"
                  >
                    Open in Maps
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default PlaceCardGrid;
