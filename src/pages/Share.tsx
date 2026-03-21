import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AppHeader from "@/components/AppHeader";
import PlaceCardGrid from "@/components/PlaceCardGrid";
import { decodePlaces } from "@/lib/share-utils";
import { downloadPDF, printPlaces } from "@/lib/pdf-export";
import type { Place } from "@/lib/json-parser";

const Share = () => {
  const location = useLocation();
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash) {
      const decoded = decodePlaces(hash);
      setPlaces(decoded);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader
        hasPlaces={places.length > 0}
        onExportPDF={() => downloadPDF(places, false)}
        onPrint={() => printPlaces(places)}
        onShare={() => {
          navigator.clipboard.writeText(window.location.href);
        }}
      />

      <main className="flex-1 max-w-[1100px] mx-auto px-4 sm:px-6 pt-12 pb-20 w-full">
        {places.length === 0 ? (
          <div className="text-center py-32">
            <p className="text-2xl font-display text-foreground mb-2">No places found</p>
            <p className="text-muted-foreground">This link may be invalid or expired.</p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h1 className="font-display text-3xl text-foreground">Shared Places</h1>
              <p className="text-sm text-muted-foreground mt-1">{places.length} places</p>
            </div>
            <PlaceCardGrid places={places} />
          </>
        )}
      </main>

      <footer className="py-12 text-center text-xs text-muted-foreground border-t border-border">
        exportmymap.com — Share your saved places with anyone
      </footer>
    </div>
  );
};

export default Share;
