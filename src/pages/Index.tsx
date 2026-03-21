import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import AppHeader from "@/components/AppHeader";
import FileDropzone from "@/components/FileDropzone";
import PlaceCardGrid from "@/components/PlaceCardGrid";

import FormatToggle, { type ViewFormat } from "@/components/FormatToggle";
import PricingModal from "@/components/PricingModal";
import HowItWorks from "@/components/HowItWorks";
import PreviewMockup from "@/components/PreviewMockup";
import PricingSection from "@/components/PricingSection";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import HeroSection from "@/components/HeroSection";
import { parseGoogleMapsJSON, type Place } from "@/lib/json-parser";
import { downloadPDF, printPlaces } from "@/lib/pdf-export";
import MapPin from "@/components/MapPin";

const FREE_LIMIT = 10;

const Index = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [viewFormat, setViewFormat] = useState<ViewFormat>("share");
  const uploadRef = useRef<HTMLDivElement>(null);

  const isPaid = false;

  const handleFile = useCallback(async (file: File) => {
    setLoading(true);
    try {
      const text = await file.text();
      const parsed = parseGoogleMapsJSON(text);
      if (parsed.length === 0) {
        toast.error("No places found in this file.");
        return;
      }
      setPlaces(parsed);
      toast.success(`Parsed ${parsed.length} places.`);
      scrollToPlaces();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Couldn't read file.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleExport = (type: "pdf" | "print" | "share") => {
    const exportPlaces = isPaid ? places : places.slice(0, FREE_LIMIT);
    const watermark = !isPaid;

    if (type === "share") {
      toast.info("Shareable links coming soon!");
      return;
    }

    if (type === "pdf") {
      downloadPDF(exportPlaces, watermark);
    } else if (type === "print") {
      printPlaces(exportPlaces);
    }
  };

  const handleFormatChange = (format: ViewFormat) => {
    if (format === "pdf") {
      handleExport("pdf");
    } else if (format === "print") {
      handleExport("print");
    } else {
      setViewFormat("share");
    }
  };

  const handleReset = () => setPlaces([]);

  const scrollToUpload = () => {
    uploadRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const placesRef = useRef<HTMLDivElement>(null);

  // Scroll to places preview after parsing
  const scrollToPlaces = () => {
    setTimeout(() => placesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  // Landing page
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader
        hasPlaces={false}
        onExportPDF={() => {}}
        onPrint={() => {}}
        onShare={() => {}}
      />

      <HeroSection onCTA={scrollToUpload} />

      <SocialProof />

      <HowItWorks />

      {/* Upload section */}
      <section ref={uploadRef} className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.5, bounce: 0 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Upload</p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-4 max-w-2xl">
            Ready? Upload your Saved Places.json
          </h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-lg">
            It takes less than 30 seconds. Your data never leaves your browser.
          </p>
          <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-xl px-5 py-3 text-sm text-muted-foreground">
            <span>📂</span>
            <span>
              Go to{" "}
              <a
                href="https://takeout.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-semibold hover:underline"
              >
                takeout.google.com
              </a>
              {" → "}Maps (your places) → <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono text-foreground">Saved Places.json</code>
            </span>
          </div>
        </motion.div>

        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-3 text-muted-foreground"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <MapPin className="text-primary" />
            </motion.div>
            <span>Parsing your map...</span>
          </motion.div>
        ) : (
          <FileDropzone onFileSelect={handleFile} />
        )}
      </section>

      {/* Inline places preview */}
      {places.length > 0 && (
        <section ref={placesRef} className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-display text-2xl text-foreground">Your Saved Places</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {places.length} places found
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FormatToggle active={viewFormat} onChange={handleFormatChange} />
                <button
                  onClick={handleReset}
                  className="text-label text-muted-foreground hover:text-foreground transition-colors"
                >
                  New file
                </button>
              </div>
            </div>

            {!isPaid && places.length > FREE_LIMIT && (
              <div className="mb-4 py-3 px-4 rounded-xl bg-muted/50 border border-border text-sm text-muted-foreground text-center">
                Showing {FREE_LIMIT} of {places.length} places.{" "}
                <a href="#pricing" className="text-accent font-medium hover:underline">
                  Upgrade to export your full list.
                </a>
              </div>
            )}

            <PlaceCardGrid
              places={places}
              maxVisible={isPaid ? undefined : FREE_LIMIT}
            />
          </motion.div>
        </section>
      )}

      <PreviewMockup />

      <PricingSection onSelectPlan={() => setPricingOpen(true)} />

      <FAQ />

      <FinalCTA onCTA={scrollToUpload} />

      <footer className="py-12 text-center text-xs text-muted-foreground border-t border-border">
        exportmymap.com — Share your saved places with anyone
      </footer>

      <PricingModal open={pricingOpen} onClose={() => setPricingOpen(false)} />
    </div>
  );
};

export default Index;
