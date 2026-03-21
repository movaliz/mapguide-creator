import { motion } from "framer-motion";

const SocialProof = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 py-16"
  >
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-16">
      <div>
        <span className="font-display text-6xl sm:text-7xl text-foreground tracking-tight">2,400+</span>
        <p className="text-muted-foreground text-sm mt-1">places exported this month</p>
      </div>
      <div className="w-px h-12 bg-border hidden sm:block" />
      <div>
        <span className="font-display text-6xl sm:text-7xl text-foreground tracking-tight">500+</span>
        <p className="text-muted-foreground text-sm mt-1">travelers love it</p>
      </div>
      <div className="w-px h-12 bg-border hidden sm:block" />
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-2xl">⭐</span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default SocialProof;
