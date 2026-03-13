import { motion } from "framer-motion";
import shareMockup from "@/assets/share-mockup.png";
import guideMockup from "@/assets/guide-mockup.png";

const PreviewMockup = () => (
  <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 py-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.6, bounce: 0 }}
      className="text-center mb-16"
    >
      <h2 className="font-display text-3xl sm:text-5xl text-foreground mb-4">
        Beautiful output, every time
      </h2>
      <p className="text-muted-foreground text-lg max-w-lg mx-auto">
        Your saved places transformed into elegant, shareable formats.
      </p>
    </motion.div>

    {/* Shareable Link — Hero format */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.6, bounce: 0 }}
      className="relative mb-8"
    >
      <div className="absolute inset-0 rounded-3xl bg-primary/[0.04] blur-3xl -z-10" />
      <div className="rounded-3xl border border-primary/15 bg-card p-8 sm:p-10 shadow-elevated">
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold tracking-wider">
            Most popular
          </span>
        </div>
        <h3 className="font-display text-2xl text-foreground mb-2">Shareable Link</h3>
        <p className="text-muted-foreground mb-8 max-w-md text-sm">
          A beautiful public page anyone can open — no app needed. Share via text, email, or social.
        </p>
        <img
          src={shareMockup}
          alt="Phone and laptop showing a beautiful shareable travel guide page with saved places"
          className="w-full max-w-3xl mx-auto rounded-2xl shadow-soft"
          loading="lazy"
        />
      </div>
    </motion.div>

    {/* PDF + Print */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, type: "spring", duration: 0.5, bounce: 0 }}
        className="rounded-3xl border border-border bg-card p-6 shadow-soft hover:shadow-elevated transition-all duration-300"
      >
        <h3 className="font-display text-xl text-foreground mb-2">PDF Guide</h3>
        <p className="text-sm text-muted-foreground mb-5">
          Download a beautiful travel guide with map pins, elegant typography, and your branding.
        </p>
        <img
          src={guideMockup}
          alt="Example PDF guide showing a list of saved places"
          className="w-full rounded-2xl border border-border"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring", duration: 0.5, bounce: 0 }}
        className="rounded-3xl border border-border bg-card p-6 shadow-soft hover:shadow-elevated transition-all duration-300"
      >
        <h3 className="font-display text-xl text-foreground mb-2">Print View</h3>
        <p className="text-sm text-muted-foreground mb-5">
          A clean, print-optimized layout. Hit print and take your guide anywhere.
        </p>
        <div className="rounded-2xl border border-border bg-surface p-5 space-y-2.5">
          {["Café Lomi — 3 Rue Marcadet, Paris", "Shakespeare & Co — 37 Rue de la Bûcherie", "Le Marais — Historic District, Paris", "Musée d'Orsay — 1 Rue de la Légion d'Honneur"].map((place, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-foreground">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
              {place}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default PreviewMockup;
