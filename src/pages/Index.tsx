import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import AppHeader from "@/components/AppHeader";
import FileDropzone from "@/components/FileDropzone";
import PlaceList from "@/components/PlaceList";
import PricingModal from "@/components/PricingModal";
import HowItWorks from "@/components/HowItWorks";
import PreviewMockup from "@/components/PreviewMockup";
import PricingSection from "@/components/PricingSection";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import { parseGoogleMapsCSV, type Place } from "@/lib/csv-parser";
import { downloadPDF, printPlaces } from "@/lib/pdf-export";
import MapPin from "@/components/MapPin";

const FREE_LIMIT = 10;

const Index = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const uploadRef = useRef<HTMLDivElement>(null);

  const isPaid = false;

  const handleFile = useCallback(async (file: File) => {
    setLoading(true);
    try {
      const text = await file.text();
      const parsed = parseGoogleMapsCSV(text);
      if (parsed.length === 0) {
        toast.error("No places found in this file.");
        return;
      }
      setPlaces(parsed);
      toast.success(`Parsed ${parsed.length} places.`);
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

    if (!isPaid && places.length > FREE_LIMIT && type !== "print") {
      setPricingOpen(true);
      return;
    }

    if (type === "share") {
      setPricingOpen(true);
      return;
    }

    if (type === "pdf") {
      downloadPDF(exportPlaces, watermark);
    } else if (type === "print") {
      printPlaces(exportPlaces, watermark);
    }
  };

  const handleReset = () => {
    setPlaces([]);
  };

  const scrollToUpload = () => {
    uploadRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // If user has uploaded places, show the list view
  if (places.length > 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <AppHeader
          hasPlaces
          onExportPDF={() => handleExport("pdf")}
          onPrint={() => handleExport("print")}
          onShare={() => handleExport("share")}
        />
        <main className="flex-1 w-full max-w-[960px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          >
            <div className="flex items-center justify-between py-6">
              <div>
                <h2 className="font-display text-2xl text-foreground">Your Saved Places</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {places.length} places found
                </p>
              </div>
              <button
                onClick={handleReset}
                className="text-label text-muted-foreground hover:text-foreground transition-colors"
              >
                Upload new file
              </button>
            </div>

            <div className="flex gap-2 mb-4 sm:hidden">
              <button
                onClick={() => handleExport("pdf")}
                className="flex-1 rounded-lg py-2.5 text-label bg-primary text-primary-foreground"
              >
                PDF
              </button>
              <button
                onClick={() => handleExport("print")}
                className="flex-1 rounded-lg py-2.5 text-label bg-secondary text-secondary-foreground"
              >
                Print
              </button>
              <button
                onClick={() => handleExport("share")}
                className="flex-1 rounded-lg py-2.5 text-label bg-secondary text-secondary-foreground"
              >
                Share
              </button>
            </div>

            <div className="rounded-xl border border-border overflow-hidden">
              <PlaceList
                places={places}
                maxVisible={isPaid ? undefined : FREE_LIMIT}
              />
            </div>
          </motion.div>
        </main>
        <footer className="py-6 text-center text-xs text-muted-foreground/60">
          ExportPlaces — Transform your saved places into guides
        </footer>
        <PricingModal open={pricingOpen} onClose={() => setPricingOpen(false)} />
      </div>
    );
  }

  // Landing page
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader
        hasPlaces={false}
        onExportPDF={() => {}}
        onPrint={() => {}}
        onShare={() => {}}
      />

      {/* Hero */}
      <section className="w-full max-w-[960px] mx-auto px-4 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.6, bounce: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-hero font-display text-foreground mb-5" style={{ textWrap: "balance" }}>
            Turn your Google Maps saved places into a beautiful guide.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Google Maps doesn't let you export or share your saved places. ExportPlaces fixes that in seconds.
          </p>
          <motion.button
            onClick={scrollToUpload}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl px-8 py-4 text-label bg-primary text-primary-foreground hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.5)] transition-shadow"
          >
            Export My Places Free
          </motion.button>
        </motion.div>
      </section>

      {/* Social proof bar */}
      <SocialProof />

      {/* How it works */}
      <HowItWorks />

      {/* Upload section */}
      <section ref={uploadRef} className="w-full max-w-[960px] mx-auto px-4 sm:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.5, bounce: 0 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-3">
            Ready? Upload your CSV.
          </h2>
          <p className="text-muted-foreground">
            It takes less than 30 seconds. Your data never leaves your browser.
          </p>
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

      {/* Preview mockup */}
      <PreviewMockup />

      {/* Pricing */}
      <PricingSection onSelectPlan={() => setPricingOpen(true)} />

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <FinalCTA onCTA={scrollToUpload} />

      <footer className="py-8 text-center text-xs text-muted-foreground/60">
        ExportPlaces — Transform your saved places into guides
      </footer>

      <PricingModal open={pricingOpen} onClose={() => setPricingOpen(false)} />
    </div>
  );
};

export default Index;
