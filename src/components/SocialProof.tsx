import { motion } from "framer-motion";

const SocialProof = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 py-6"
  >
    <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-3 flex-wrap">
      <span><strong className="text-foreground font-semibold">2,400+</strong> places exported</span>
      <span className="text-border">·</span>
      <span><strong className="text-foreground font-semibold">500+</strong> travelers</span>
      <span className="text-border">·</span>
      <span className="tracking-tight">★★★★★</span>
    </p>
  </motion.div>
);

export default SocialProof;
