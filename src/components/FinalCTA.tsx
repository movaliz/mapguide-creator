import { motion } from "framer-motion";

interface FinalCTAProps {
  onCTA: () => void;
}

const FinalCTA = ({ onCTA }: FinalCTAProps) => (
  <section className="w-full max-w-[960px] mx-auto px-4 sm:px-6 py-20">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.5, bounce: 0 }}
      className="text-center"
    >
      <h2 className="font-display text-3xl sm:text-5xl text-foreground mb-5" style={{ textWrap: "balance" }}>
        Your saved places deserve better than a buried list.
      </h2>
      <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
        Export them into a guide you'll actually use — and share.
      </p>
      <motion.button
        onClick={onCTA}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="rounded-xl px-10 py-5 text-label text-lg bg-primary text-primary-foreground hover:shadow-[0_0_32px_-4px_hsl(var(--primary)/0.5)] transition-shadow"
      >
        Export My Places Free
      </motion.button>
    </motion.div>
  </section>
);

export default FinalCTA;
