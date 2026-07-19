import { ExternalLink } from 'lucide-react'

export default function ProjectCard({ project, onOpen }) {
  return (
    <article
      onClick={() => onOpen(project)}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl2 border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-line-dark dark:bg-card-dark"
    >
      {/* Gambar proyek — kalau belum ada, tampilkan placeholder gradient */}
      <div className="aspect-video w-full overflow-hidden bg-line dark:bg-line-dark">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-navy">
            <span className="font-display text-sm font-medium text-white/80">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-ink group-hover:text-primary dark:text-ink-dark dark:group-hover:text-primary-dark">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted dark:text-muted-dark">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full bg-paper px-2.5 py-1 text-[11px] font-medium text-muted dark:bg-paper-dark dark:text-muted-dark"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* "Lihat detail" sekarang cuma penanda visual, seluruh card sudah bisa diklik.
            mt-auto -> selalu nempel di bawah, jadi rata sama kartu lain di baris yang sama */}
        <span className="mt-auto inline-flex w-fit items-center gap-1.5 pt-4 text-sm font-medium text-primary dark:text-primary-dark">
          View Project <ExternalLink size={14} />
        </span>
      </div>
    </article>
  )
}