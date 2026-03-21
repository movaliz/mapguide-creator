import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { MousePointerClick, Share2, Download, Upload, FileText, Star } from "lucide-react";
import chromeIcon from "@/assets/chrome-web-store.png";
import { toast } from "sonner";
import FileDropzone from "@/components/FileDropzone";
import PlaceCardGrid from "@/components/PlaceCardGrid";
import FormatToggle, { type ViewFormat } from "@/components/FormatToggle";
import MapPin from "@/components/MapPin";
import { parseGoogleMapsJSON, type Place } from "@/lib/json-parser";
import { downloadPDF, printPlaces } from "@/lib/pdf-export";

const FREE_LIMIT = 10;

const extensionSteps = [
  { icon: null, title: "Install extension", desc: "Add to Chrome in one click." },
  { icon: MousePointerClick, title: "Open Google Maps", desc: "Go to your saved places as usual." },
  { icon: Share2, title: "Click Export", desc: "Get a shareable link instantly." },
];

const HowItWorks = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(false);
  const [viewFormat, setViewFormat] = useState<ViewFormat>("share");
  const placesRef = useRef<HTMLDivElement>(null);
  const isPaid = false;

  const handleFile = useCallback(async (file: File) => {
    setLoading(true);
    try {
      const text = await file.text();
      const parsed = parseGoogleMapsJSON(text);
      if (parsed.length === 0) { toast.error("No places found in this file."); return; }
      setPlaces(parsed);
      toast.success(`Parsed ${parsed.length} places.`);
      setTimeout(() => placesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Couldn't read file.");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleExport = (type: "pdf" | "print" | "share") => {
    const exportPlaces = isPaid ? places : places.slice(0, FREE_LIMIT);
    const watermark = !isPaid;
    if (type === "share") { toast.info("Shareable links coming soon!"); return; }
    if (type === "pdf") downloadPDF(exportPlaces, watermark);
    else if (type === "print") printPlaces(exportPlaces);
  };

  const handleFormatChange = (format: ViewFormat) => {
    if (format === "pdf") handleExport("pdf");
    else if (format === "print") handleExport("print");
    else setViewFormat("share");
  };

  return (
    <section id="how-it-works" className="w-full">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.6, bounce: 0 }}
          className="mb-14"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">How it works</p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground max-w-2xl">
            Two ways to export your places
          </h2>
        </motion.div>

        {/* Chrome Extension — Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.6, bounce: 0 }}
          className="relative rounded-2xl border-[1.5px] border-border bg-card p-8 shadow-elevated mb-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wider text-white"
                style={{ background: "#22c55e" }}
              >
                <Star className="h-3 w-3" /> Recommended
              </span>
              <span className="text-xs text-muted-foreground">No download needed</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-muted-foreground">
              <img src={chromeIcon} alt="Chrome Web Store" className="h-7 w-7" />
              <span className="text-xs font-medium">Chrome Web Store</span>
            </div>
          </div>
          <h3 className="font-display text-2xl text-foreground mb-2">Chrome Extension</h3>
          <p className="text-sm text-muted-foreground mb-8 max-w-lg">
            Works directly in Google Maps — no file downloads, no Takeout.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {extensionSteps.map((step, i) => (
              <div key={step.title} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center">
                  {step.icon ? <step.icon className="h-4 w-4 text-foreground" /> : <img src={chromeIcon} alt="Chrome" className="h-5 w-5" />}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-bold text-accent">{i + 1}</span>
                    <h4 className="font-body font-semibold text-foreground text-sm">{step.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 rounded-full px-6 py-3 text-label text-sm bg-foreground text-background transition-all hover:opacity-90"
          >
            Add to Chrome — Free
          </motion.button>
        </motion.div>

        {/* Upload JSON — Secondary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, type: "spring", duration: 0.6, bounce: 0 }}
          className="rounded-2xl border border-border bg-card p-8"
        >
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Option B</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="font-display text-2xl text-foreground mb-2">Upload JSON</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Already have a Google Takeout export? Upload it and get your guide.
              </p>
              <div className="space-y-4 mb-6">
                {[
                  { icon: Download, title: "Export from Google", desc: "Download via Google Takeout." },
                  { icon: Upload, title: "Upload JSON", desc: "Drag & drop — parsed in your browser." },
                  { icon: FileText, title: "Get your guide", desc: "PDF, print, or shareable link." },
                ].map((step, i) => (
                  <div key={step.title} className="flex items-start gap-3">
                    <div className="relative flex-shrink-0">
                      <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center">
                        <step.icon className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-muted text-muted-foreground text-[9px] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground text-sm mb-0.5">{step.title}</h4>
                      <p className="text-xs text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-xl px-4 py-2.5 text-sm text-muted-foreground">
                <span>📂</span>
                <span>
                  Go to{" "}
                  <a href="https://takeout.google.com/" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:underline">
                    takeout.google.com
                  </a>
                  {" → "}Maps → <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono text-foreground">Saved Places.json</code>
                </span>
              </div>
            </div>

            <div>
              {loading ? (
                <div className="flex items-center justify-center gap-3 text-muted-foreground py-16">
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                    <MapPin className="text-primary" />
                  </motion.div>
                  <span>Parsing your map...</span>
                </div>
              ) : (
                <FileDropzone onFileSelect={handleFile} />
              )}
            </div>
          </div>
        </motion.div>

        {/* Inline places preview */}
        {places.length > 0 && (
          <div ref={placesRef} className="mt-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.5, bounce: 0 }}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-display text-2xl text-foreground">Your Saved Places</h2>
                  <p className="text-sm text-muted-foreground mt-1">{places.length} places found</p>
                </div>
                <div className="flex items-center gap-3">
                  <FormatToggle active={viewFormat} onChange={handleFormatChange} />
                  <button onClick={() => setPlaces([])} className="text-label text-muted-foreground hover:text-foreground transition-colors">New file</button>
                </div>
              </div>
              {!isPaid && places.length > FREE_LIMIT && (
                <div className="mb-4 py-3 px-4 rounded-xl bg-muted/50 border border-border text-sm text-muted-foreground text-center">
                  Showing {FREE_LIMIT} of {places.length} places.{" "}
                  <a href="#pricing" className="text-accent font-medium hover:underline">Upgrade to export your full list.</a>
                </div>
              )}
              <PlaceCardGrid places={places} maxVisible={isPaid ? undefined : FREE_LIMIT} />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorks;
