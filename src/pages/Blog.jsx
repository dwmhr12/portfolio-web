// src/pages/Blog.jsx
import blogs from "../data/blogs";
import BlogCard from "../components/Blog/BlogCard";
import { NotebookPen } from "lucide-react";

export default function Blog() {
  const hasBlogs = blogs && blogs.length > 0;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="mb-12 max-w-2xl">
        <span className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-primary dark:text-primary-dark">
          <NotebookPen className="h-4 w-4" />
          Articles &amp; Insights
        </span>
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink dark:text-ink-dark sm:text-4xl">
          Blog
        </h1>
        <p className="mt-3 text-muted dark:text-muted-dark">
          Articles documenting what I'm learning, building, and exploring in tech
        </p>
      </div>

      {/* Grid kartu */}
      {hasBlogs ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-line p-12 text-center text-muted dark:border-line-dark dark:text-muted-dark">
          Nothing here yet. Stay tuned for upcoming articles{" "}
          <code className="rounded bg-card px-1.5 py-0.5 text-sm dark:bg-card-dark">
            src/data/blogs.js
          </code>
          .
        </div>
      )}
    </section>
  );
}