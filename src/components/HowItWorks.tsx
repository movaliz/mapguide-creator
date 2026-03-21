import { motion } from "framer-motion";
import { Chrome, MousePointerClick, Share2, Download, Upload, FileText, Star } from "lucide-react";
import chromeExtMockup from "@/assets/chrome-extension-mockup.png";

const optionA = [
  { icon: Chrome, title: "Install extension", desc: "Add to Chrome in one click." },
  { icon: MousePointerClick, title: "Open Google Maps", desc: "Go to your saved places as usual." },
  { icon: Share2, title: "Click Export", desc: "Get a shareable link instantly. Done." },
];

const optionB = [
  { icon: Download, title: "Export from Google", desc: "Download your Saved Places.json via Takeout." },
  { icon: Upload, title: "Upload JSON", desc: "Drag & drop the file — parsed in your browser." },
  { icon: FileText, title: "Get your guide", desc: "Download a PDF, print it, or share a link." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="w-full">
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.6, bounce: 0 }}
        className="mb-20"
      >
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">How it works</p>
        <h2 className="font-display text-4xl sm:text-5xl text-foreground max-w-2xl">
          Two ways to get your places out of Google Maps
        </h2>
      </motion.div>

      {/* Editorial two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Option A — Chrome Extension — larger, featured */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.6, bounce: 0 }}
          className="relative"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold tracking-wider">
              <Star className="h-3 w-3" /> Recommended
            </span>
          </div>
          <h3 className="font-display text-3xl text-foreground mb-3">Chrome Extension</h3>
          <p className="text-muted-foreground mb-10 max-w-md">
            The fastest way — works directly in Google Maps. No file downloads, no Takeout.
          </p>

          <div className="space-y-6 mb-10">
            {optionA.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, type: "spring", duration: 0.5, bounce: 0 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center">
                  <step.icon className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-bold text-accent">{i + 1}</span>
                    <h4 className="font-body font-semibold text-foreground">{step.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full px-6 py-3 text-label bg-foreground text-background transition-all hover:opacity-90"
          >
            Add to Chrome — Free
          </motion.button>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", duration: 0.6, bounce: 0 }}
            className="mt-10"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-foreground/[0.03] rounded-2xl blur-xl -z-10" />
              <img
                src={chromeExtMockup}
                alt="Chrome browser showing exportmymap.com extension popup on Google Maps"
                className="w-full rounded-xl shadow-elevated"
                style={{ transform: "perspective(800px) rotateY(-1deg) rotateX(1deg)" }}
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Option B — JSON Upload */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, type: "spring", duration: 0.6, bounce: 0 }}
          className="lg:pt-24"
        >
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">Option B</p>
          <h3 className="font-display text-3xl text-foreground mb-3">Upload JSON</h3>
          <p className="text-muted-foreground mb-10 max-w-md">
            Already have a Google Takeout export? Upload it and get your guide.
          </p>

          <div className="space-y-6">
            {optionB.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, type: "spring", duration: 0.5, bounce: 0 }}
                className="flex items-start gap-4"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center">
                    <step.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-muted text-muted-foreground text-[10px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h4 className="font-body font-semibold text-foreground mb-0.5">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
