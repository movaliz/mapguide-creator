import { motion } from "framer-motion";
import { Chrome, MousePointerClick, Share2, Download, Upload, FileText, Star } from "lucide-react";
import chromeExtMockup from "@/assets/chrome-extension-mockup.png";

const optionA = [
  { icon: Chrome, title: "Install extension", desc: "Add ExportPlaces to Chrome in one click." },
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

      {/* Option A — Chrome Extension */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.6, bounce: 0 }}
        className="relative rounded-3xl border border-primary/20 bg-background p-8 sm:p-12 mb-8 shadow-elevated overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-0" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              <Star className="h-3 w-3" /> Recommended
            </span>
            <span className="text-label text-muted-foreground">Option A</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-2">
            Chrome Extension
          </h3>
          <p className="text-muted-foreground mb-10 max-w-md">
            The fastest way — works directly in Google Maps. No file downloads, no Takeout.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              {optionA.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, type: "spring", duration: 0.5, bounce: 0 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-primary">{i + 1}</span>
                      <h4 className="font-display text-lg text-foreground">{step.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 rounded-xl px-6 py-3.5 text-label bg-primary text-primary-foreground shadow-glow transition-shadow hover:shadow-[0_0_48px_-8px_hsl(var(--primary)/0.4)]"
              >
                Add to Chrome — Free
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", duration: 0.6, bounce: 0 }}
              className="hidden lg:block"
            >
              <img
                src={chromeExtMockup}
                alt="Chrome browser showing ExportPlaces extension popup on Google Maps"
                className="w-full rounded-2xl shadow-elevated"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Option B — CSV Upload */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, type: "spring", duration: 0.6, bounce: 0 }}
        className="rounded-3xl border border-border bg-background p-8 sm:p-12 shadow-soft"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="text-label text-muted-foreground">Option B</span>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-2">
          Upload CSV
        </h3>
        <p className="text-muted-foreground mb-8 max-w-md">
          Already have a Google Takeout export? Upload it and get your guide.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {optionB.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.08, type: "spring", duration: 0.5, bounce: 0 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-4">
                <div className="rounded-2xl bg-surface border border-border p-4">
                  <step.icon className="h-6 w-6 text-muted-foreground" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h4 className="font-display text-lg text-foreground mb-1">{step.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HowItWorks;
