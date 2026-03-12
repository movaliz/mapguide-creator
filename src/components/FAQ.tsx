import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Google Takeout?",
    a: "Google Takeout is a free service from Google that lets you download your data — including saved places from Google Maps. Go to takeout.google.com, select 'Saved' under Maps, and export. You'll get a CSV file with all your saved places.",
  },
  {
    q: "What formats can I export?",
    a: "ExportPlaces supports three output formats: a beautiful PDF guide you can download, a print-optimized layout that opens in your browser's print dialog, and a shareable link you can send to anyone (paid plans only).",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. Your CSV file is parsed entirely in your browser — your data never leaves your device. We don't upload, store, or share your places unless you explicitly create a shared link.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes, you can cancel anytime. Your access continues until the end of your current billing period. No questions asked.",
  },
];

const FAQ = () => (
  <section className="w-full max-w-[700px] mx-auto px-4 sm:px-6 py-20">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.5, bounce: 0 }}
      className="text-center mb-12"
    >
      <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-3">
        Frequently asked questions
      </h2>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, type: "spring", duration: 0.5, bounce: 0 }}
    >
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border border-border rounded-xl px-5 bg-background"
          >
            <AccordionTrigger className="font-display text-lg text-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  </section>
);

export default FAQ;
