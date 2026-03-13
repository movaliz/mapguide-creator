import { motion } from "framer-motion";
import type { Place } from "@/lib/json-parser";
import MapPin from "./MapPin";

interface PlaceListProps {
  places: Place[];
  maxVisible?: number;
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, duration: 0.4, bounce: 0 } },
};

const PlaceList = ({ places, maxVisible }: PlaceListProps) => {
  const visible = maxVisible ? places.slice(0, maxVisible) : places;
  const hasMore = maxVisible ? places.length > maxVisible : false;

  return (
    <div>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="divide-y divide-border"
      >
        {visible.map((place, i) => (
          <motion.li
            key={i}
            variants={item}
            className="flex items-baseline gap-4 px-5 py-4 transition-colors duration-150 hover:bg-surface group"
          >
            <span className="text-sm tabular-nums text-muted-foreground font-body w-8 text-right shrink-0">
              {i + 1}
            </span>
            <div className="flex-1 min-w-0">
              <span className="font-display text-[1.25rem] leading-tight text-foreground">
                {place.title}
              </span>
              {place.address && (
                <p className="text-sm text-muted-foreground mt-0.5 truncate">{place.address}</p>
              )}
            </div>
            <MapPin className="text-primary/40 group-hover:text-primary shrink-0 transition-colors" />
          </motion.li>
        ))}
      </motion.ul>
      {hasMore && (
        <div className="text-center py-6 text-sm text-muted-foreground border-t border-border">
          Showing {maxVisible} of {places.length} places.{" "}
          <span className="text-accent">Upgrade to export your full list.</span>
        </div>
      )}
    </div>
  );
};

export default PlaceList;
