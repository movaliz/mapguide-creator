import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import { blogPosts } from "@/lib/blog-data";

const Blog = () => (
  <div className="min-h-screen flex flex-col">
    <AppHeader hasPlaces={false} onExportPDF={() => {}} onPrint={() => {}} onShare={() => {}} />

    <main className="flex-1 max-w-[1100px] mx-auto px-4 sm:px-6 pt-28 pb-20 w-full">
      <h1 className="font-display text-4xl sm:text-5xl text-foreground mb-4">Blog</h1>
      <p className="text-lg text-muted-foreground mb-14 max-w-lg">
        Guides, tips, and tutorials for exporting and sharing your Google Maps saved places.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group rounded-2xl border border-border bg-card p-6 hover:shadow-elevated transition-all duration-300 flex flex-col"
          >
            <p className="text-xs text-muted-foreground mb-3">{post.date}</p>
            <h2 className="font-display text-lg text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
              {post.title}
            </h2>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{post.desc}</p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
              Read more <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </main>

    <footer className="py-12 text-center text-xs text-muted-foreground border-t border-border">
      exportmymap.com — Share your saved places with anyone
    </footer>
  </div>
);

export default Blog;
