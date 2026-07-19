import { useEffect } from 'react'
import {
  X,
  ExternalLink,
  FileText,
  ArrowRight,
  Link2,
  Code2,
  AlertTriangle,
  ListChecks,
  Workflow,
  TrendingUp,
  Lightbulb,
  Sparkles,
} from 'lucide-react'

// Judul section dengan ikon bulat berwarna — dipakai di semua section
// biar tiap bagian punya penanda visual yang jelas, gantian primary/navy.
function SectionTitle({ icon: Icon, tone = 'primary', children }) {
  const toneClass =
    tone === 'navy'
      ? 'bg-navy text-white'
      : 'bg-primary text-white dark:bg-primary-dark'
  return (
    <div className="flex items-center gap-2.5">
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${toneClass}`}>
        <Icon size={16} />
      </span>
      <h3 className="font-display text-base font-semibold text-ink dark:text-ink-dark">
        {children}
      </h3>
    </div>
  )
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  const infoItems = project.info
    ? [
        { label: 'Role', value: project.info.role },
        { label: 'Timeline', value: project.info.timeline },
        { label: 'Type', value: project.info.type },
        { label: 'Team', value: project.info.team },
      ].filter((i) => i.value)
    : []

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/60 p-4 py-10 dark:bg-black/70"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl rounded-xl2 border border-line bg-card shadow-xl dark:border-line-dark dark:bg-card-dark"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-6 top-6 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink shadow hover:bg-white"
        >
          <X size={18} />
        </button>

        <div className="p-6 sm:p-8">
          {/* ============ 1. PROJECT OVERVIEW ============ */}
          <div className="grid gap-6 sm:grid-cols-[1.1fr_1fr]">
            <div>
              <h2 className="font-display text-xl font-bold leading-snug text-ink dark:text-ink-dark sm:text-2xl">
                {project.title}
              </h2>

              {project.categories?.length > 0 && (
                <p className="mt-1.5 text-sm font-medium text-primary dark:text-primary-dark">
                  {project.categories.join(' • ')}
                </p>
              )}

              {project.overview && (
                <p className="mt-4 text-sm leading-relaxed text-muted dark:text-muted-dark">
                  {project.overview}
                </p>
              )}
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-lg bg-line dark:bg-line-dark">
              {project.preview ? (
                <img
                  src={project.preview}
                  alt={`Preview ${project.title}`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-navy">
                  <span className="font-display text-sm font-medium text-white/80">
                    {project.title.slice(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* ============ 2. PROJECT INFO (cards) ============ */}
          {(infoItems.length > 0 || project.info?.tools?.length > 0) && (
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-line bg-paper p-3 dark:border-line-dark dark:bg-paper-dark"
                >
                  <p className="text-[11px] font-medium uppercase tracking-wide text-muted dark:text-muted-dark">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-ink dark:text-ink-dark">
                    {item.value}
                  </p>
                </div>
              ))}

              {project.info?.tools?.length > 0 && (
                <div className="col-span-2 rounded-lg border border-line bg-paper p-3 dark:border-line-dark dark:bg-paper-dark sm:col-span-4">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-muted dark:text-muted-dark">
                    Tools
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {project.info.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-card px-2.5 py-0.5 text-xs font-medium text-ink dark:bg-card-dark dark:text-ink-dark"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ============ 3. PROBLEM ============ */}
          {project.problems?.length > 0 && (
            <div className="mt-8 rounded-xl2 border border-navy/15 bg-navy/[0.06] p-5 dark:border-white/10 dark:bg-white/[0.04]">
              <SectionTitle icon={AlertTriangle} tone="navy">
                Problem
              </SectionTitle>
              <ul className="mt-4 space-y-2.5">
                {project.problems.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-muted dark:text-muted-dark">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy dark:bg-white/10 dark:text-white">
                      <AlertTriangle size={11} />
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ============ 4. RESPONSIBILITIES ============ */}
          {project.responsibilities?.length > 0 && (
            <div className="mt-6 rounded-xl2 border border-primary/15 bg-primary/[0.06] p-5 dark:border-primary-dark/15 dark:bg-primary-dark/[0.06]">
              <SectionTitle icon={ListChecks} tone="primary">
                Responsibilities
              </SectionTitle>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {project.responsibilities.map((r) => (
                  <div
                    key={r.title}
                    className="rounded-lg bg-card p-3.5 dark:bg-card-dark"
                  >
                    <p className="text-sm font-semibold text-ink dark:text-ink-dark">{r.title}</p>
                    {r.detail && (
                      <p className="mt-0.5 text-sm text-muted dark:text-muted-dark">{r.detail}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============ 5. PROCESS (numbered steps) ============ */}
          {project.process?.length > 0 && (
            <div className="mt-6 rounded-xl2 border border-navy/15 bg-navy/[0.06] p-5 dark:border-white/10 dark:bg-white/[0.04]">
              <SectionTitle icon={Workflow} tone="navy">
                Process
              </SectionTitle>
              <div className="mt-4 space-y-3">
                {project.process.map((step, i) => (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-lg bg-card p-3.5 dark:bg-card-dark"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white dark:bg-primary-dark">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink dark:text-ink-dark">
                        {step.title}
                      </p>
                      {step.detail && (
                        <p className="mt-0.5 text-sm text-muted dark:text-muted-dark">
                          {step.detail}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============ 7. IMPACT (KPI cards) ============ */}
          {project.impact?.length > 0 && (
            <div className="mt-6 rounded-xl2 border border-primary/15 bg-primary/[0.06] p-5 dark:border-primary-dark/15 dark:bg-primary-dark/[0.06]">
              <SectionTitle icon={TrendingUp} tone="primary">
                Impact
              </SectionTitle>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {project.impact.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-center dark:border-primary-dark/20 dark:bg-primary-dark/10"
                  >
                    <div className="flex flex-col items-center gap-1 text-sm font-bold">
                      <span className="text-muted line-through dark:text-muted-dark">
                        {m.before}
                      </span>
                      <ArrowRight size={14} className="rotate-90 text-primary dark:text-primary-dark" />
                      <span className="text-base text-ink dark:text-ink-dark">{m.after}</span>
                    </div>
                    <p className="mt-2 text-xs text-muted dark:text-muted-dark">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============ 9. LESSONS LEARNED ============ */}
          {project.lessonsLearned?.length > 0 && (
            <div className="mt-6 rounded-xl2 border border-navy/15 bg-navy/[0.06] p-5 dark:border-white/10 dark:bg-white/[0.04]">
              <SectionTitle icon={Lightbulb} tone="navy">
                Lessons Learned
              </SectionTitle>
              <ul className="mt-4 space-y-2.5">
                {project.lessonsLearned.map((l) => (
                  <li key={l} className="flex items-start gap-2.5 text-sm text-muted dark:text-muted-dark">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary dark:bg-primary-dark" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ============ 10. BUSINESS INSIGHT ============ */}
          {project.businessInsight && (
            <div className="mt-6 rounded-xl2 border border-primary/20 bg-gradient-to-br from-primary/10 to-navy/5 p-5 dark:border-primary-dark/20 dark:from-primary-dark/10 dark:to-navy/10">
              <SectionTitle icon={Sparkles} tone="primary">
                Business Insight
              </SectionTitle>
              <p className="mt-3 text-sm leading-relaxed text-muted dark:text-muted-dark">
                {project.businessInsight}
              </p>
            </div>
          )}

          {/* Tombol aksi */}
          <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6 dark:border-line-dark">
            {project.prototype && (
              <a
                href={project.prototype}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                <Link2 size={14} /> View Prototype
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink hover:bg-paper dark:border-line-dark dark:text-ink-dark dark:hover:bg-paper-dark"
              >
                <Code2 size={14} /> Source Code
              </a>
            )}
            {project.document && (
              <a
                href={project.document}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink hover:bg-paper dark:border-line-dark dark:text-ink-dark dark:hover:bg-paper-dark"
              >
                <FileText size={14} /> Project Documentation
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}