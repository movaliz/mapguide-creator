import { motion } from "framer-motion";
import { ArrowRight, Puzzle } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";

interface HeroSectionProps {
  onCTA: () => void;
}

const HeroSection = ({ onCTA }: HeroSectionProps) => (
  <section className="relative w-full">
    <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 pt-24 pb-20 sm:pt-36 sm:pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.7, bounce: 0 }}
          className="text-left"
        >
          <h1 className="text-hero font-display text-foreground mb-8">
            Share your Google Maps{" "}
            <span className="accent-underline">saved places</span>{" "}
            with anyone
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
            Generate a beautiful shareable link or PDF from your saved places — in seconds.
            No more screenshots, no more copy-pasting.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-5">
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
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-medium">
              <Puzzle className="w-3 h-3" />
              Also available as Chrome Extension
            </span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Right: Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", duration: 0.8, bounce: 0 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl -z-10" />
            <img
              src={heroIllustration}
              alt="People sharing travel places via exportmymap.com — PDF guides, shareable links, and favorite spots"
              className="w-full rounded-2xl shadow-elevated mix-blend-multiply"
              style={{ transform: "perspective(1000px) rotateY(-2deg)" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
