import { motion } from "framer-motion";
import shareMockup from "@/assets/share-mockup.png";
import guideMockup from "@/assets/guide-mockup.png";

const PreviewMockup = () => (
  <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 py-32">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.6, bounce: 0 }}
      className="mb-20"
    >
      <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Output</p>
      <h2 className="font-display text-4xl sm:text-5xl text-foreground max-w-2xl">
        Beautiful output, every time
      </h2>
      <p className="text-muted-foreground text-lg mt-4 max-w-lg">
        Your saved places transformed into elegant, shareable formats.
      </p>
    </motion.div>

    {/* Shareable Link — Asymmetric layout */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.6, bounce: 0 }}
      className="relative mb-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        <div className="lg:col-span-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold tracking-wider mb-4">
            Most popular
          </span>
          <h3 className="font-display text-3xl text-foreground mb-3">Shareable Link</h3>
          <p className="text-muted-foreground max-w-sm">
            A beautiful public page anyone can open — no app needed. Share via text, email, or social.
          </p>
        </div>
        <div className="lg:col-span-3">
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl -z-10" />
            <img
              src={shareMockup}
              alt="Phone and laptop showing a beautiful shareable travel guide page with saved places"
              className="w-full rounded-2xl shadow-elevated"
              style={{ transform: "perspective(1000px) rotateY(-2deg) rotateX(1deg)" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </motion.div>

    {/* PDF + Print — offset grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, type: "spring", duration: 0.5, bounce: 0 }}
        className="rounded-2xl border border-border bg-card p-8 hover:shadow-elevated transition-all duration-300"
      >
        <h3 className="font-display text-2xl text-foreground mb-2">PDF Guide</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Download a beautiful travel guide with elegant typography.
        </p>
        <div className="relative">
          <div className="absolute -inset-2 bg-foreground/[0.02] rounded-xl blur-lg -z-10" />
          <img
            src={guideMockup}
            alt="Example PDF guide showing a list of saved places"
            className="w-full rounded-xl shadow-soft border border-border"
            style={{ transform: "perspective(600px) rotateY(1deg)" }}
            loading="lazy"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring", duration: 0.5, bounce: 0 }}
        className="rounded-2xl border border-border bg-card p-8 hover:shadow-elevated transition-all duration-300 md:mt-12"
      >
        <h3 className="font-display text-2xl text-foreground mb-2">Print View</h3>
        <p className="text-sm text-muted-foreground mb-6">
          A clean, print-optimized layout. Hit print and take it anywhere.
        </p>
        <div className="rounded-xl border border-border bg-surface p-6 space-y-3">
          {["Café Lomi — 3 Rue Marcadet, Paris", "Shakespeare & Co — 37 Rue de la Bûcherie", "Le Marais — Historic District, Paris", "Musée d'Orsay — 1 Rue de la Légion d'Honneur"].map((place, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-foreground">
              <span className="w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
              {place}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default PreviewMockup;
