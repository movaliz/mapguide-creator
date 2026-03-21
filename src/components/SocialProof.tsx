import { motion } from "framer-motion";

const SocialProof = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="w-full py-3"
    style={{ background: "#f0f0ee" }}
  >
    <p className="text-center text-[15px] text-muted-foreground flex items-center justify-center gap-3 flex-wrap">
      <span><strong className="text-foreground font-semibold">2,400+</strong> places exported</span>
      <span className="text-border">·</span>
      <span><strong className="text-foreground font-semibold">500+</strong> travelers</span>
      <span className="text-border">·</span>
      <span>⭐⭐⭐⭐⭐</span>
    </p>
  </motion.div>
);

export default SocialProof;
