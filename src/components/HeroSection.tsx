import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";

interface HeroSectionProps {
  onCTA: () => void;
}

const HeroSection = ({ onCTA }: HeroSectionProps) => (
  <section className="relative w-full">
    <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 pt-24 pb-20 sm:pt-36 sm:pb-32">
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
        {/* Left: Text — left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.7, bounce: 0 }}
          className="flex-1 text-left"
        >
          <h1 className="text-hero font-display text-foreground mb-8">
            Share your Google Maps{" "}
            <span className="accent-underline">saved places</span>{" "}
            with anyone
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-lg leading-relaxed">
            Generate a beautiful shareable link or PDF from your saved places — in seconds.
            No more screenshots, no more copy-pasting.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <motion.button
              onClick={onCTA}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full px-8 py-4 text-label bg-foreground text-background transition-all flex items-center gap-2 shadow-elevated hover:opacity-90"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.02 }}
              className="rounded-full px-8 py-4 text-label text-muted-foreground hover:text-foreground border border-border transition-colors"
            >
              See How It Works
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Illustration with realistic styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ delay: 0.2, type: "spring", duration: 0.8, bounce: 0 }}
          className="flex-1 max-w-lg lg:max-w-xl"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl -z-10" />
            <img
              src={heroIllustration}
              alt="People sharing travel places via exportmymap.com — PDF guides, shareable links, and favorite spots"
              className="w-full rounded-2xl shadow-elevated"
              style={{ transform: "perspective(1000px) rotateY(-2deg)" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
