import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
    features: ["Full place list (no limit)", "PDF download", "Print-ready layout", "No watermark"],
    cta: "Buy One Export",
    recommended: false,
  },
  {
    name: "Unlimited Monthly",
    price: "$10",
    period: "/month",
    description: "Unlimited lists, all formats",
    features: ["Unlimited lists", "PDF, Print & Share Link", "No watermark", "Saved to your account"],
    cta: "Start Monthly",
    recommended: true,
  },
  {
    name: "Unlimited Annual",
    price: "$45",
    period: "/year",
    description: "Save 62% with annual billing",
    features: ["Everything in Monthly", "62% savings", "Priority support", "Early access features"],
    cta: "Start Annual",
    recommended: false,
  },
];

const PricingSection = ({ onSelectPlan }: PricingSectionProps) => (
  <section className="w-full bg-surface/50 border-y border-border">
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.5, bounce: 0 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-3">
          Simple, honest pricing
        </h2>
        <p className="text-muted-foreground">No hidden fees. Cancel anytime.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", duration: 0.5, bounce: 0 }}
            className={`rounded-2xl bg-background p-6 flex flex-col border ${
              tier.recommended
                ? "border-accent shadow-[0_0_24px_-4px_hsl(var(--accent)/0.3)]"
                : "border-border"
            }`}
          >
            {tier.recommended && (
              <span className="text-label text-accent mb-3 block">Most Popular</span>
            )}
            <h3 className="font-display text-xl text-foreground">{tier.name}</h3>
            <div className="mt-2 mb-1">
              <span className="text-3xl font-body font-semibold text-foreground">{tier.price}</span>
              {tier.period && (
                <span className="text-muted-foreground text-sm ml-1">{tier.period}</span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-5">{tier.description}</p>
            <ul className="space-y-2 mb-6 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={tier.name === "Free" ? undefined : onSelectPlan}
              className={`w-full rounded-lg py-3 text-label transition-all ${
                tier.recommended
                  ? "bg-primary text-primary-foreground hover:shadow-[0_0_16px_-2px_hsl(var(--primary)/0.4)]"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
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
