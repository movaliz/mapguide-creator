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
  <section id="pricing" className="w-full">
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.6, bounce: 0 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl sm:text-5xl text-foreground mb-4">
          Simple, honest pricing
        </h2>
        <p className="text-muted-foreground text-lg">No hidden fees. Cancel anytime.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", duration: 0.5, bounce: 0 }}
            className={`relative rounded-3xl bg-card p-6 flex flex-col border transition-all duration-300 ${
              tier.recommended
                ? "border-primary shadow-glow"
                : "border-border shadow-soft hover:shadow-elevated hover:border-primary/20"
            }`}
          >
            {tier.recommended && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold tracking-wider">
                <Star className="h-3 w-3" /> Most Popular
              </span>
            )}
            <h3 className="font-display text-xl text-foreground mt-1">{tier.name}</h3>
            <div className="mt-3 mb-1">
              <span className="text-4xl font-body font-bold text-foreground">{tier.price}</span>
              {tier.period && (
                <span className="text-muted-foreground text-sm ml-1">{tier.period}</span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
            <ul className="space-y-2.5 mb-8 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={tier.name === "Free" ? undefined : onSelectPlan}
              className={`w-full rounded-full py-3.5 text-label transition-all ${
                tier.recommended
                  ? "bg-primary text-primary-foreground shadow-glow hover:shadow-[0_0_48px_-8px_hsl(var(--primary)/0.45)]"
                  : "bg-surface text-foreground border border-border hover:border-primary/30 hover:bg-primary-soft"
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
