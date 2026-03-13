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
    q: "Do I need Google Takeout if I use the Chrome extension?",
    a: "No! The Chrome extension works directly inside Google Maps — no file downloads or Takeout needed. Just click Export and you're done. Takeout is only needed if you prefer the CSV upload method.",
  },
  {
    q: "What formats can I export?",
    a: "ExportPlaces supports three output formats: a shareable link anyone can open in their browser, a beautiful PDF travel guide you can download, and a print-optimized layout for paper copies.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. Your CSV file is parsed entirely in your browser — your data never leaves your device. We don't upload, store, or share your places unless you explicitly create a shared link.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes, cancel anytime. Your access continues until the end of your current billing period. No questions asked.",
  },
];

const FAQ = () => (
  <section id="faq" className="w-full max-w-[720px] mx-auto px-4 sm:px-6 py-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.6, bounce: 0 }}
      className="text-center mb-14"
    >
      <h2 className="font-display text-3xl sm:text-5xl text-foreground mb-4">
        Questions & answers
      </h2>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, type: "spring", duration: 0.5, bounce: 0 }}
    >
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border border-border rounded-2xl px-6 bg-background shadow-soft"
          >
            <AccordionTrigger className="font-display text-lg text-foreground hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  </section>
);

export default FAQ;
