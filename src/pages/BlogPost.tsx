import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import { blogPosts } from "@/lib/blog-data";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader hasPlaces={false} onExportPDF={() => {}} onPrint={() => {}} onShare={() => {}} />

      <main className="flex-1 max-w-[720px] mx-auto px-4 sm:px-6 pt-28 pb-20 w-full">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to blog
        </Link>

        <p className="text-sm text-muted-foreground mb-3">{post.date}</p>
        <h1 className="font-display text-3xl sm:text-4xl text-foreground mb-8 leading-tight">
          {post.title}
        </h1>

        <article className="prose prose-neutral max-w-none prose-headings:font-display prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
          {post.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return <h2 key={i}>{block.replace("## ", "")}</h2>;
            }
            if (block.startsWith("- ")) {
              return (
                <ul key={i}>
                  {block.split("\n").map((li, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: formatInline(li.replace(/^- /, "")) }} />
                  ))}
                </ul>
              );
            }
            if (/^\d+\./.test(block)) {
              return (
                <ol key={i}>
                  {block.split("\n").map((li, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: formatInline(li.replace(/^\d+\.\s*/, "")) }} />
                  ))}
                </ol>
              );
            }
            return <p key={i} dangerouslySetInnerHTML={{ __html: formatInline(block) }} />;
          })}
        </article>
      </main>

      <footer className="py-12 text-center text-xs text-muted-foreground border-t border-border">
        exportmymap.com — Share your saved places with anyone
      </footer>
    </div>
  );
};

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
}

export default BlogPost;
