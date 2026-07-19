// src/components/Blog/BlogCard.jsx
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function BlogCard({ blog }) {
  const { title, excerpt, image, date, readTime, tags, platform, url } = blog;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-line-dark dark:bg-card-dark"
    >
      {/* Gambar */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {platform && (
          <span className="absolute left-3 top-3 rounded-full bg-navy/80 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {platform}
          </span>
        )}
      </div>

      {/* Konten */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary dark:bg-primary-dark/10 dark:text-primary-dark"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display text-lg font-semibold leading-snug text-ink group-hover:text-primary dark:text-ink-dark dark:group-hover:text-primary-dark">
          {title}
        </h3>

        <p className="line-clamp-3 text-sm text-muted dark:text-muted-dark">
          {excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-line pt-3 text-xs text-muted dark:border-line-dark dark:text-muted-dark">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {readTime}
            </span>
          </div>
          <span className="flex items-center gap-1 font-medium text-primary dark:text-primary-dark">
            Baca
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </a>
  );
}