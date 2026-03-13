import { motion } from "framer-motion";

interface FinalCTAProps {
  onCTA: () => void;
}

const FinalCTA = ({ onCTA }: FinalCTAProps) => (
  <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 py-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.6, bounce: 0 }}
      className="relative text-center rounded-3xl bg-hero-gradient border border-border p-12 sm:p-16 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-0" />
      <div className="relative z-10">
        <h2 className="font-display text-3xl sm:text-5xl text-foreground mb-5" style={{ textWrap: "balance" as never }}>
          Your saved places deserve to be shared.
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Turn them into a beautiful guide in seconds — free to start.
        </p>
        <motion.button
          onClick={onCTA}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-xl px-10 py-5 text-label text-lg bg-primary text-primary-foreground shadow-glow hover:shadow-[0_0_48px_-8px_hsl(var(--primary)/0.4)] transition-shadow"
        >
          Export My Places Free
        </motion.button>
      </div>
    </motion.div>
  </section>
);

export default FinalCTA;
