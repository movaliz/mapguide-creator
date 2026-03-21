import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onCTA: () => void;
}

const FinalCTA = ({ onCTA }: FinalCTAProps) => (
  <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 py-32">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.6, bounce: 0 }}
      className="text-left"
    >
      <h2 className="font-display text-5xl sm:text-7xl text-foreground mb-6 max-w-3xl" style={{ lineHeight: 1.05 }}>
        Your saved places deserve to be{" "}
        <span className="accent-underline">shared</span>
      </h2>
      <p className="text-muted-foreground text-xl mb-12 max-w-lg">
        Turn them into a beautiful guide in seconds — free to start.
      </p>
      <motion.button
        onClick={onCTA}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="rounded-full px-10 py-5 text-label text-lg bg-foreground text-background shadow-elevated hover:opacity-90 transition-all inline-flex items-center gap-2"
      >
        Export My Places Free
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  </section>
);

export default FinalCTA;
