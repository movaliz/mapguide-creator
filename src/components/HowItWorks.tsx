import { motion } from "framer-motion";
import { Download, Upload, FileText } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Export from Google",
    description: "Go to Google Takeout and download your Saved Places as a CSV file.",
  },
  {
    icon: Upload,
    title: "Upload your CSV",
    description: "Drag & drop the file here. We parse it instantly in your browser.",
  },
  {
    icon: FileText,
    title: "Get your guide",
    description: "Download a beautiful PDF, print it, or share a link with friends.",
  },
];

const HowItWorks = () => (
  <section className="w-full bg-surface/50 border-y border-border">
    <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.5, bounce: 0 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-3">
          How it works
        </h2>
        <p className="text-muted-foreground">Three steps. Under 60 seconds.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", duration: 0.5, bounce: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative mb-5">
              <div className="rounded-2xl bg-background border border-border p-5">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <h3 className="font-display text-xl text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[260px]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
