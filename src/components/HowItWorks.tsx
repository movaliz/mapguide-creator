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
  <section id="how-it-works" className="w-full bg-section-gradient">
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.6, bounce: 0 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl sm:text-5xl text-foreground mb-4">
          Two ways to export
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Choose the method that works best for you.
        </p>
      </motion.div>

      {/* Two columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Option A — Chrome Extension */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.6, bounce: 0 }}
          className="relative rounded-3xl border border-primary/20 bg-card p-8 shadow-elevated overflow-hidden flex flex-col"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/[0.06] rounded-full blur-3xl -z-0" />
          <div className="relative z-10 flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold tracking-wider">
                <Star className="h-3 w-3" /> Recommended
              </span>
            </div>
            <h3 className="font-display text-2xl text-foreground mb-2">Chrome Extension</h3>
            <p className="text-muted-foreground mb-8 text-sm">
              The fastest way — works directly in Google Maps. No file downloads, no Takeout.
            </p>

            <div className="space-y-5 mb-8">
              {optionA.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, type: "spring", duration: 0.5, bounce: 0 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-bold text-primary">{i + 1}</span>
                      <h4 className="font-body font-semibold text-foreground">{step.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full px-6 py-3 text-label bg-primary text-primary-foreground shadow-glow transition-all hover:shadow-[0_0_48px_-8px_hsl(var(--primary)/0.45)]"
              >
                Add to Chrome — Free
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", duration: 0.6, bounce: 0 }}
              className="mt-8"
            >
              <img
                src={chromeExtMockup}
                alt="Chrome browser showing exportmymap.com extension popup on Google Maps"
                className="w-full rounded-2xl shadow-soft"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Option B — JSON Upload */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, type: "spring", duration: 0.6, bounce: 0 }}
          className="rounded-3xl border border-border bg-card p-8 shadow-soft flex flex-col"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold text-muted-foreground tracking-wider">Option B</span>
          </div>
          <h3 className="font-display text-2xl text-foreground mb-2">Upload JSON</h3>
          <p className="text-muted-foreground mb-8 text-sm">
            Already have a Google Takeout export? Upload it and get your guide.
          </p>

          <div className="space-y-5 flex-1">
            {optionB.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, type: "spring", duration: 0.5, bounce: 0 }}
                className="flex items-start gap-3"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-2xl bg-surface border border-border flex items-center justify-center">
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
