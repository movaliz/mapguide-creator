import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const PreviewMockup = () => (
  <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 py-32">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.6, bounce: 0 }}
      className="mb-16"
    >
      <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Output</p>
      <h2 className="font-display text-4xl sm:text-5xl text-foreground max-w-2xl">
        Beautiful output, every time
      </h2>
      <p className="text-muted-foreground text-lg mt-4 max-w-lg">
        Your saved places transformed into elegant, shareable formats.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Shareable Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.5, bounce: 0 }}
        className="rounded-2xl border border-border bg-card p-6"
      >
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Shareable Link</p>
        <div className="space-y-3">
          {[
            { name: "Café Lomi", addr: "3 Rue Marcadet, Paris" },
            { name: "Shakespeare & Co", addr: "37 Rue de la Bûcherie" },
          ].map((p, i) => (
            <div key={i} className="rounded-xl border border-border bg-surface p-3">
              <p className="text-sm font-semibold text-foreground">{p.name}</p>
              <p className="text-xs text-muted-foreground mb-2">{p.addr}</p>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-accent bg-accent/10 rounded-full px-2 py-0.5">
                <ExternalLink className="w-2.5 h-2.5" />
                Open in Maps
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* PDF Guide */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, type: "spring", duration: 0.5, bounce: 0 }}
        className="rounded-2xl border border-border bg-card p-6"
      >
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">PDF Guide</p>
        <div className="rounded-xl border border-border bg-surface p-4 space-y-3">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">My Paris Guide</p>
          <div className="w-8 h-px bg-border" />
          {[
            { n: 1, name: "Café Lomi", cat: "Coffee" },
            { n: 2, name: "Shakespeare & Co", cat: "Bookstore" },
            { n: 3, name: "Le Marais", cat: "District" },
            { n: 4, name: "Musée d'Orsay", cat: "Museum" },
          ].map((p) => (
            <div key={p.n} className="flex items-start gap-2">
              <span className="text-xs font-bold text-accent mt-0.5">{p.n}.</span>
              <div>
                <p className="text-sm font-semibold text-foreground leading-tight">{p.name}</p>
                <p className="text-[10px] text-muted-foreground">{p.cat}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Print View */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring", duration: 0.5, bounce: 0 }}
        className="rounded-2xl border border-border bg-card p-6"
      >
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">Print View</p>
        <div className="rounded-xl border border-border bg-white p-4 space-y-2.5 font-mono">
          {[
            "Café Lomi — 3 Rue Marcadet",
            "Shakespeare & Co — 37 Rue de la Bûcherie",
            "Le Marais — Historic District",
            "Musée d'Orsay — 1 Rue de la Légion",
            "Jardin du Luxembourg — 6th Arr.",
          ].map((place, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-foreground">
              <span className="font-bold w-4 text-right">{i + 1}.</span>
              <span>{place}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default PreviewMockup;
