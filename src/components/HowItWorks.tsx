import { motion } from "framer-motion";
import { Chrome, MousePointerClick, Share2, Download, Upload, FileText, Star } from "lucide-react";

const optionA = [
  { icon: Chrome, title: "Install extension", desc: "Add to Chrome in one click." },
  { icon: MousePointerClick, title: "Open Google Maps", desc: "Go to your saved places as usual." },
  { icon: Share2, title: "Click Export", desc: "Get a shareable link instantly." },
];

const optionB = [
  { icon: Download, title: "Export from Google", desc: "Download via Google Takeout." },
  { icon: Upload, title: "Upload JSON", desc: "Drag & drop — parsed in your browser." },
  { icon: FileText, title: "Get your guide", desc: "PDF, print, or shareable link." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="w-full">
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.6, bounce: 0 }}
        className="mb-16"
      >
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">How it works</p>
        <h2 className="font-display text-4xl sm:text-5xl text-foreground max-w-2xl">
          Two ways to get your places out
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chrome Extension — featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.6, bounce: 0 }}
          className="relative rounded-2xl border-[1.5px] border-border bg-card p-8 shadow-elevated flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold tracking-wider">
              <Star className="h-3 w-3" /> Recommended
            </span>
            <span className="text-xs text-muted-foreground">No download needed</span>
          </div>
          <h3 className="font-display text-2xl text-foreground mb-2">Chrome Extension</h3>
          <p className="text-sm text-muted-foreground mb-8">
            Works directly in Google Maps — no file downloads, no Takeout.
          </p>

          <div className="space-y-5 flex-1">
            {optionA.map((step, i) => (
              <div key={step.title} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center">
                  <step.icon className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-bold text-accent">{i + 1}</span>
                    <h4 className="font-body font-semibold text-foreground text-sm">{step.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 rounded-full px-6 py-3 text-label text-sm bg-foreground text-background transition-all hover:opacity-90 self-start"
          >
            Add to Chrome — Free
          </motion.button>
        </motion.div>

        {/* JSON Upload */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, type: "spring", duration: 0.6, bounce: 0 }}
          className="rounded-2xl border border-border bg-card p-8 flex flex-col"
        >
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">Option B</p>
          <h3 className="font-display text-2xl text-foreground mb-2">Upload JSON</h3>
          <p className="text-sm text-muted-foreground mb-8">
            Already have a Google Takeout export? Upload it and get your guide.
          </p>

          <div className="space-y-5 flex-1">
            {optionB.map((step, i) => (
              <div key={step.title} className="flex items-start gap-3">
                <div className="relative flex-shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center">
                    <step.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-muted text-muted-foreground text-[9px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h4 className="font-body font-semibold text-foreground text-sm mb-0.5">{step.title}</h4>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
