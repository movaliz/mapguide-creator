import { motion } from "framer-motion";
import { Users } from "lucide-react";

const SocialProof = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="w-full max-w-[960px] mx-auto px-4 sm:px-6 py-8"
  >
    <div className="flex items-center justify-center gap-3 text-muted-foreground">
      <Users className="h-5 w-5 text-accent" />
      <span className="text-sm font-body">
        Join <span className="text-foreground font-semibold">500+</span> travelers who already exported their maps
      </span>
    </div>
  </motion.div>
);

export default SocialProof;
