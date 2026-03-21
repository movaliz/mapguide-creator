import { motion } from "framer-motion";
import { Link, FileText, Printer } from "lucide-react";

const formats = [
  {
    label: "Shareable Link",
    icon: Link,
    desc: "Anyone can open your places in their browser.",
  },
  {
    label: "PDF Guide",
    icon: FileText,
    desc: "A beautiful, downloadable travel guide.",
  },
  {
    label: "Print View",
    icon: Printer,
    desc: "A clean, paper-friendly layout.",
  },
];

const PreviewMockup = () => (
  <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 py-28">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.6, bounce: 0 }}
      className="mb-14"
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
      {formats.map((fmt, i) => (
        <motion.div
          key={fmt.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, type: "spring", duration: 0.5, bounce: 0 }}
          className="rounded-2xl border border-border bg-card p-8 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
            <fmt.icon className="w-8 h-8 text-accent" />
          </div>
          <h3 className="font-display text-lg text-foreground mb-2">{fmt.label}</h3>
          <p className="text-sm text-muted-foreground">{fmt.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default PreviewMockup;
