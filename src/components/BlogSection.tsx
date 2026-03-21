import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/lib/blog-data";

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
      {blogPosts.map((article, i) => (
        <motion.div
          key={article.slug}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, type: "spring", duration: 0.5, bounce: 0 }}
        >
          <Link
            to={`/blog/${article.slug}`}
            className="group rounded-2xl border border-border bg-card p-6 hover:shadow-elevated transition-all duration-300 flex flex-col h-full"
          >
            <p className="text-xs text-muted-foreground mb-3">{article.date}</p>
            <h2 className="font-display text-lg text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
              {article.title}
            </h2>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{article.desc}</p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
              Read more <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

export default BlogSection;
