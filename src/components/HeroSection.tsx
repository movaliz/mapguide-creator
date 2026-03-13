import { motion } from "framer-motion";
import heroMockup from "@/assets/hero-mockup.png";

interface HeroSectionProps {
  onCTA: () => void;
}

const HeroSection = ({ onCTA }: HeroSectionProps) => (
  <section className="relative w-full overflow-hidden bg-hero-gradient">
    {/* Decorative blobs */}
    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

    <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.7, bounce: 0 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h1 className="text-hero font-display text-foreground mb-6" style={{ textWrap: "balance" as never }}>
          Share your Google Maps saved places with anyone.
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Generate a beautiful shareable link or PDF from your saved places — in seconds.
          No more screenshots, no more copy-pasting.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            onClick={onCTA}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl px-8 py-4 text-label bg-primary text-primary-foreground shadow-glow hover:shadow-[0_0_48px_-8px_hsl(var(--primary)/0.4)] transition-shadow"
          >
            Export My Places Free
          </motion.button>
          <motion.a
            href="#how-it-works"
            whileHover={{ scale: 1.02 }}
            className="rounded-xl px-8 py-4 text-label text-muted-foreground hover:text-foreground border border-border bg-background/60 backdrop-blur-sm transition-colors"
          >
            See How It Works
          </motion.a>
        </div>
      </motion.div>

      {/* Hero product mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2, type: "spring", duration: 0.8, bounce: 0 }}
        className="relative max-w-4xl mx-auto"
      >
        <div className="absolute inset-0 rounded-3xl bg-primary/8 blur-3xl -z-10 scale-95" />
        <img
          src={heroMockup}
          alt="Laptop and phone showing ExportPlaces shareable travel guide with saved places from Google Maps"
          className="w-full rounded-2xl shadow-elevated"
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
