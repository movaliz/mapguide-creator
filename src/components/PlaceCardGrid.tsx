import { motion } from "framer-motion";
import type { Place } from "@/lib/json-parser";
import { ExternalLink } from "lucide-react";

interface PlaceCardGridProps {
  places: Place[];
  maxVisible?: number;
}

function getCountryCode(address: string): string | null {
  const parts = address.split(",").map((s) => s.trim());
  const last = parts[parts.length - 1];
  if (!last) return null;
  // Common country name → code mapping
  const map: Record<string, string> = {
    germany: "DE", deutschland: "DE", france: "FR", spain: "ES", españa: "ES",
    italy: "IT", italia: "IT", turkey: "TR", türkiye: "TR", "united states": "US",
    usa: "US", "united kingdom": "UK", uk: "UK", netherlands: "NL", portugal: "PT",
    greece: "GR", japan: "JP", australia: "AU", canada: "CA", mexico: "MX",
    brazil: "BR", austria: "AT", switzerland: "CH", belgium: "BE", sweden: "SE",
    norway: "NO", denmark: "DK", finland: "FI", poland: "PL", "czech republic": "CZ",
    czechia: "CZ", hungary: "HU", croatia: "HR", ireland: "IE", iceland: "IS",
    romania: "RO", bulgaria: "BG", "south korea": "KR", thailand: "TH",
    vietnam: "VN", indonesia: "ID", india: "IN", china: "CN", singapore: "SG",
    "new zealand": "NZ", argentina: "AR", colombia: "CO", chile: "CL", peru: "PE",
    morocco: "MA", egypt: "EG", "south africa": "ZA", israel: "IL", "united arab emirates": "AE",
  };
  const lower = last.toLowerCase();
  if (map[lower]) return map[lower];
  // If it's already a 2-letter code
  if (last.length === 2 && last === last.toUpperCase()) return last;
  return null;
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
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, duration: 0.5, bounce: 0 } },
};

const PlaceCardGrid = ({ places, maxVisible }: PlaceCardGridProps) => {
  const visible = maxVisible ? places.slice(0, maxVisible) : places;
  const hasMore = maxVisible ? places.length > maxVisible : false;

  return (
    <div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {visible.map((place, i) => {
          const country = getCountryCode(place.address);
          const date = formatDate(place.date);
          const hasCoords = place.lat !== null && place.lng !== null;

          return (
            <motion.div
              key={i}
              variants={item}
              className="group relative bg-background rounded-2xl border border-border shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden"
            >
              {/* Map thumbnail */}
              {hasCoords && (
                <div className="h-36 bg-muted/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl">📍</span>
                      </div>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-mono text-muted-foreground bg-background/80 px-1.5 py-0.5 rounded">
                        {place.lat!.toFixed(4)}, {place.lng!.toFixed(4)}
                      </div>
                    </div>
                  </div>
                  {/* Decorative grid lines */}
                  <div className="absolute inset-0 opacity-[0.04]" style={{
                    backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }} />
                </div>
              )}

              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg leading-tight text-foreground group-hover:text-primary transition-colors">
                    {place.title}
                  </h3>
                  {country && (
                    <span className="shrink-0 text-[11px] font-semibold tracking-wide bg-muted text-muted-foreground px-2 py-0.5 rounded-md">
                      {country}
                    </span>
                  )}
                </div>

                {place.address && (
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {place.address}
                  </p>
                )}

                <div className="flex items-center justify-between">
                  {date && (
                    <span className="text-xs text-muted-foreground/70">
                      Saved {date}
                    </span>
                  )}
                  {place.url && (
                    <a
                      href={place.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
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

    </div>
  );
};

export default PlaceCardGrid;
