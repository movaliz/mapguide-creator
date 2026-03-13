import { motion } from "framer-motion";
import { Users, Star } from "lucide-react";

const SocialProof = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 py-10"
  >
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
      <div className="flex items-center gap-2.5 text-muted-foreground">
        <Users className="h-5 w-5 text-primary" />
        <span className="text-sm font-body">
          <span className="text-foreground font-semibold">2,400+</span> places exported this month
        </span>
      </div>
      <div className="hidden sm:block w-px h-5 bg-border" />
      <div className="flex items-center gap-2.5 text-muted-foreground">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
          ))}
        </div>
        <span className="text-sm font-body">
          Loved by <span className="text-foreground font-semibold">500+</span> travelers
        </span>
      </div>
    </div>
  </motion.div>
);

export default SocialProof;
