// src/components/SkillPill.jsx
// Satu badge skill dengan tooltip (nama + deskripsi) pas di-hover.
// Tooltip-nya pure CSS (pakai `group` + `group-hover`), jadi gak butuh state.
//
// variant:
// - 'outline' -> dipakai buat Core Competencies (border, transparan)
// - 'solid'   -> dipakai buat Tools & Technologies (background navy)

const variantStyles = {
  outline:
    'border border-line px-3 py-1.5 text-ink dark:border-line-dark dark:text-ink-dark',
  solid: 'bg-navy px-3 py-1.5 font-medium text-white',
}

export default function SkillPill({ skill, variant = 'outline' }) {
  return (
    <div className="group relative">
      <span
        className={`inline-flex cursor-default items-center rounded-full text-xs transition-colors ${variantStyles[variant]}`}
      >
        {skill.name}
      </span>

      {skill.description && (
        <div
          role="tooltip"
          className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-52 -translate-x-1/2 scale-95 rounded-xl2 border border-line bg-card p-3 text-left opacity-0 shadow-lg transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 dark:border-line-dark dark:bg-card-dark"
        >
          <p className="font-display text-xs font-semibold text-ink dark:text-ink-dark">
            {skill.name}
          </p>
          <p className="mt-1 text-[11px] leading-relaxed text-muted dark:text-muted-dark">
            {skill.description}
          </p>
          {/* Panah kecil nunjuk ke badge-nya */}
          <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-card dark:border-t-card-dark" />
        </div>
      )}
    </div>
  )
}