import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";

interface PricingModalProps {
  open: boolean;
  onClose: () => void;
}

const tiers = [
  {
    name: "Guide",
    price: "$5",
    period: "one-time",
    description: "Export one beautiful guide",
    features: ["Full place list (no limit)", "PDF download", "Print-ready layout", "No watermark"],
    recommended: false,
  },
  {
    name: "Unlimited Monthly",
    price: "$10",
    period: "/month",
    description: "Unlimited lists, all formats",
    features: [
      "Unlimited lists",
      "PDF, Print & Share Link",
      "No watermark",
      "Saved to your account",
    ],
    recommended: true,
  },
  {
    name: "Unlimited Annual",
    price: "$45",
    period: "/year",
    description: "Save 62% with annual billing",
    features: [
      "Everything in Monthly",
      "62% savings",
      "Priority support",
      "Early access to new features",
    ],
    recommended: false,
  },
];

const PricingModal = ({ open, onClose }: PricingModalProps) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="relative w-full max-w-3xl rounded-2xl bg-surface p-6 md:p-8"
              style={{ boxShadow: "0 0 0 1px hsl(var(--border)), 0 8px 32px -8px rgba(0,0,0,.5)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                Unlock your full guide
              </h2>
              <p className="text-muted-foreground mb-8">
                Choose the plan that works for you.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`rounded-2xl bg-background p-6 flex flex-col ${
                      tier.recommended
                        ? "outline outline-2 outline-accent outline-offset-2"
                        : ""
                    }`}
                    style={{
                      boxShadow:
                        "0 0 0 1px hsl(var(--border)), 0 8px 32px -8px rgba(0,0,0,.5)",
                    }}
                  >
                    {tier.recommended && (
                      <span className="text-label text-accent mb-3 block">
                        Recommended
                      </span>
                    )}
                    <h3 className="font-display text-xl text-foreground">{tier.name}</h3>
                    <div className="mt-2 mb-1">
                      <span className="text-3xl font-body font-semibold text-foreground">
                        {tier.price}
                      </span>
                      <span className="text-muted-foreground text-sm ml-1">
                        {tier.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-5">
                      {tier.description}
                    </p>
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
                      className={`w-full rounded-lg py-3 text-label transition-shadow ${
                        tier.recommended
                          ? "bg-primary text-primary-foreground hover:shadow-[0_0_0_1px_hsla(0,0%,100%,.1),0_4px_8px_-2px_hsla(140,50%,20%,.4)]"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      Get {tier.name}
                    </motion.button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PricingModal;
