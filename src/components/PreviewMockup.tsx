import { motion } from "framer-motion";
import guideMockup from "@/assets/guide-mockup.png";

const PreviewMockup = () => (
  <section className="w-full max-w-[960px] mx-auto px-4 sm:px-6 py-20">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.5, bounce: 0 }}
      className="text-center mb-12"
    >
      <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-3">
        Beautiful output, every time
      </h2>
      <p className="text-muted-foreground max-w-lg mx-auto">
        Your saved places transformed into an elegant, shareable travel guide.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.6, bounce: 0 }}
      className="relative mx-auto max-w-lg"
    >
      <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-3xl -z-10" />
      <img
        src={guideMockup}
        alt="Example PDF guide showing a list of saved places with elegant typography and map pin icons"
        className="w-full rounded-2xl border border-border shadow-2xl"
        loading="lazy"
      />
    </motion.div>
  </section>
);

export default PreviewMockup;
