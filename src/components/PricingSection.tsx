import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

interface PricingSectionProps {
  onSelectPlan: () => void;
}

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Try it out instantly",
    features: ["Preview first 10 places", "PDF with watermark", "Browser-only parsing"],
    cta: "Get Started Free",
    recommended: false,
  },
  {
    name: "One-Time Export",
    price: "$5",
    period: "one-time",
    description: "Export one beautiful guide",
    features: ["Full place list (no limit)", "PDF download", "Shareable link", "No watermark"],
    cta: "Buy One Export",
    recommended: false,
  },
  {
    name: "Unlimited",
    price: "$10",
    period: "/month",
    description: "Unlimited lists, all formats",
    features: ["Unlimited lists", "PDF, Print & Share Link", "No watermark", "Priority support"],
    cta: "Start Unlimited",
    recommended: true,
  },
  {
    name: "Annual",
    price: "$45",
    period: "/year",
    description: "Save 62% — best value",
    features: ["Everything in Unlimited", "62% savings", "Early access features", "Priority support"],
    cta: "Start Annual",
    recommended: false,
  },
];

const PricingSection = ({ onSelectPlan }: PricingSectionProps) => (
  <section id="pricing" className="w-full bg-dark text-dark-foreground">
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.6, bounce: 0 }}
        className="mb-20"
      >
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Pricing</p>
        <h2 className="font-display text-4xl sm:text-5xl text-white mb-4 max-w-xl">
          Simple, honest pricing
        </h2>
        <p className="text-white/50 text-lg">No hidden fees. Cancel anytime.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", duration: 0.5, bounce: 0 }}
            className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 ${
              tier.recommended
                ? "bg-white text-foreground ring-2 ring-accent"
                : "bg-white/[0.06] text-white border border-white/10 hover:bg-white/[0.1]"
            }`}
          >
            {tier.recommended && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold tracking-wider">
                <Star className="h-3 w-3" /> Most Popular
              </span>
            )}
            <h3 className="font-display text-xl mt-1">{tier.name}</h3>
            <div className="mt-3 mb-1">
              <span className="text-4xl font-display">{tier.price}</span>
              {tier.period && (
                <span className={`text-sm ml-1 ${tier.recommended ? "text-muted-foreground" : "text-white/50"}`}>{tier.period}</span>
              )}
            </div>
            <p className={`text-sm mb-6 ${tier.recommended ? "text-muted-foreground" : "text-white/50"}`}>{tier.description}</p>
            <ul className="space-y-2.5 mb-8 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                    tier.recommended ? "bg-accent/10" : "bg-white/10"
                  }`}>
                    <Check className={`h-3 w-3 ${tier.recommended ? "text-accent" : "text-white/70"}`} />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={tier.name === "Free" ? undefined : onSelectPlan}
              className={`w-full rounded-full py-3.5 text-label transition-all ${
                tier.recommended
                  ? "bg-foreground text-background hover:opacity-90"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
              }`}
            >
              {tier.cta}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
