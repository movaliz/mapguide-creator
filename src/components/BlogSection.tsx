import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "How to Export Your Google Maps Saved Places (Step by Step)",
    desc: "A complete walkthrough of exporting your saved places using Google Takeout or our Chrome Extension.",
    date: "Mar 15, 2026",
  },
  {
    title: "5 Ways to Share Your Travel List with Friends",
    desc: "From shareable links to printed guides — discover the best ways to share your favorite spots.",
    date: "Mar 8, 2026",
  },
  {
    title: "Google Takeout: What It Is and How to Use It",
    desc: "Everything you need to know about downloading your Google data, including Maps saved places.",
    date: "Feb 28, 2026",
  },
];

const BlogSection = () => (
  <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 py-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.6, bounce: 0 }}
      className="mb-14"
    >
      <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">From the blog</p>
      <h2 className="font-display text-3xl sm:text-4xl text-foreground">
        Guides & tips
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((article, i) => (
        <motion.a
          key={i}
          href="#"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, type: "spring", duration: 0.5, bounce: 0 }}
          className="group rounded-2xl border border-border bg-card p-6 hover:shadow-elevated transition-all duration-300 flex flex-col"
        >
          <p className="text-xs text-muted-foreground mb-3">{article.date}</p>
          <h2 className="font-display text-lg text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
            {article.title}
          </h2>
          <p className="text-sm text-muted-foreground mb-4 flex-1">
            {article.desc}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
            Read more <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </motion.a>
      ))}
    </div>
  </section>
);

export default BlogSection;
