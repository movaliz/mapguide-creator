import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";
import chromeIcon from "@/assets/chrome-web-store.png";

interface HeroSectionProps {
  onCTA: () => void;
}

const HeroSection = ({ onCTA }: HeroSectionProps) => (
  <section className="relative w-full">
    <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.7, bounce: 0 }}
          className="text-left"
        >
          {/* Announcement badge */}
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white mb-6 hover:opacity-90 transition-opacity"
            style={{ background: "#16a34a" }}
          >
            <Puzzle className="w-4 h-4" />
            Also available as Chrome Extension
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] text-foreground mb-6 leading-[1.1]">
            Share your Google Maps{" "}
            <span className="accent-underline">saved places</span>{" "}
            with anyone
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed">
            Generate a beautiful shareable link or PDF from your saved places — in seconds.
            No more screenshots, no more copy-pasting.
          </p>
          <motion.button
            onClick={onCTA}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full px-8 py-4 text-label bg-foreground text-background transition-all flex items-center gap-2 shadow-elevated hover:opacity-90"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </motion.button>
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
