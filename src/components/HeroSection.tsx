import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";

interface HeroSectionProps {
  onCTA: () => void;
}

const HeroSection = ({ onCTA }: HeroSectionProps) => (
  <section className="relative w-full overflow-hidden bg-hero-gradient">
    <div className="absolute top-16 left-[10%] w-64 h-64 bg-primary/[0.06] rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-[5%] w-80 h-80 bg-primary/[0.04] rounded-full blur-3xl" />

    <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.7, bounce: 0 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-hero font-display text-foreground mb-6" style={{ textWrap: "balance" as never }}>
            Share your Google Maps saved places with anyone
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Generate a beautiful shareable link or PDF from your saved places — in seconds.
            No more screenshots, no more copy-pasting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <motion.button
              onClick={onCTA}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full px-8 py-4 text-label bg-primary text-primary-foreground shadow-glow hover:shadow-[0_0_48px_-8px_hsl(var(--primary)/0.45)] transition-all flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.02 }}
              className="rounded-full px-8 py-4 text-label text-muted-foreground hover:text-foreground border border-border bg-card backdrop-blur-sm transition-colors"
            >
              See How It Works
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", duration: 0.8, bounce: 0 }}
          className="flex-1 max-w-lg lg:max-w-xl"
        >
          <img
            src={heroIllustration}
            alt="People sharing travel places via exportmymap.com — PDF guides, shareable links, and favorite spots"
            className="w-full mix-blend-multiply"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
