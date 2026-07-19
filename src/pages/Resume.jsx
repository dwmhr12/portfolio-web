import { useState, useRef, useEffect, useCallback } from 'react'
import { profile, experience, leadership } from '../data/profile'
import { coreCompetencies, tools } from '../data/skills'
import { Award, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import SkillPill from '../components/SkillPill'

export default function Resume() {
  const certifications = profile.certifications ?? []
  // Simpan title item mana saja yang description-nya lagi dibuka full
  const [expanded, setExpanded] = useState({})
  const toggleExpand = (title) =>
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }))

  // Scroll horizontal untuk kartu Certifications
  const certScrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollButtons = useCallback(() => {
    const el = certScrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    updateScrollButtons()
    const el = certScrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollButtons, { passive: true })
    window.addEventListener('resize', updateScrollButtons)
    return () => {
      el.removeEventListener('scroll', updateScrollButtons)
      window.removeEventListener('resize', updateScrollButtons)
    }
  }, [updateScrollButtons, certifications.length])

  const scrollCerts = (direction) => {
    const el = certScrollRef.current
    if (!el) return
    const cardWidth = el.firstElementChild?.offsetWidth ?? 288
    el.scrollBy({ left: direction * (cardWidth + 16), behavior: 'smooth' })
  }

  // Samain tinggi semua kartu Certifications secara manual pakai JS.
  // Ini dipakai karena flexbox `items-stretch` doang kadang gak cukup
  // (misal ke-override style lain), jadi ukur tinggi kartu paling tinggi
  // lalu paksa semua kartu pakai tinggi itu (minHeight).
  const certCardRefs = useRef([])
  const [certCardHeight, setCertCardHeight] = useState(null)

  useEffect(() => {
    const measure = () => {
      const heights = certCardRefs.current
        .filter(Boolean)
        .map((el) => el.scrollHeight)
      if (heights.length > 0) setCertCardHeight(Math.max(...heights))
    }

    // Ukur setelah render, dan sekali lagi setelah font/asset settle
    measure()
    const t = setTimeout(measure, 100)

    window.addEventListener('resize', measure)
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', measure)
    }
  }, [certifications])

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      {/* Sembunyikan scrollbar container certifications, ditulis di sini biar gak perlu edit CSS global */}
      <style>{`
        .cert-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .cert-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <Reveal>
        <h1 className="font-display text-4xl font-bold text-ink dark:text-ink-dark">Resume</h1>
        <p className="mt-2 max-w-xl text-sm text-muted dark:text-muted-dark">
          Explore my projects, professional experience, technical expertise, and educational background
        </p>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Kolom Pengalaman */}
        <Reveal delay={0.1} className="rounded-xl2 border border-line bg-card p-6 dark:border-line-dark dark:bg-card-dark">
          <h2 className="font-display text-xl font-semibold text-ink dark:text-ink-dark">
            Professional Experience
          </h2>
          <ol className="mt-6 space-y-5 border-l border-line pl-5 dark:border-line-dark">
            {experience.map((item, i) => (
              <li key={item.title} className="relative">
                <span
                  className={[
                    'absolute -left-[26px] top-1 h-3 w-3 rounded-full',
                    item.current ? 'bg-primary dark:bg-primary-dark' : 'bg-line dark:bg-line-dark',
                  ].join(' ')}
                />
                <Reveal delay={i * 0.08}>
                  <span className="inline-block rounded-full bg-navy px-3 py-1 text-xs font-medium text-white">
                    {item.period}
                  </span>
                  <p className="mt-2 font-display text-base font-semibold text-ink dark:text-ink-dark">
                    {item.title}
                  </p>
                  <p className="text-sm text-muted dark:text-muted-dark">{item.place}</p>
                  {item.description && (
                    <>
                      {expanded[item.title] && (
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed text-muted marker:text-primary dark:text-muted-dark dark:marker:text-primary-dark">
                          {item.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      )}
                      <button
                        type="button"
                        onClick={() => toggleExpand(item.title)}
                        className="mt-1 text-xs font-medium text-primary hover:underline dark:text-primary-dark"
                      >
                        {expanded[item.title] ? 'Show Less' : 'View More'}
                      </button>
                    </>
                  )}
                </Reveal>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Kolom Skill */}
        <Reveal delay={0.2} className="rounded-xl2 border border-line bg-card p-6 dark:border-line-dark dark:bg-card-dark">
          <h2 className="font-display text-xl font-semibold text-ink dark:text-ink-dark">Skill</h2>

          <p className="mt-6 font-mono text-xs uppercase tracking-wide text-muted dark:text-muted-dark">
            Core Competencies
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {coreCompetencies.map((skill, i) => (
              <Reveal key={skill.name} delay={0.05 + i * 0.05}>
                <SkillPill skill={skill} variant="outline" />
              </Reveal>
            ))}
          </div>

          <hr className="my-6 border-line dark:border-line-dark" />

          <p className="font-mono text-xs uppercase tracking-wide text-muted dark:text-muted-dark">
            Tools &amp; Technologies
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <Reveal key={tool.name} delay={0.05 + i * 0.05}>
                <SkillPill skill={tool} variant="solid" />
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Kolom Pendidikan & Leadership */}
        <Reveal delay={0.3} className="rounded-xl2 border border-line bg-card p-6 dark:border-line-dark dark:bg-card-dark">
          <h2 className="font-display text-xl font-semibold text-ink dark:text-ink-dark">
            Education &amp; Leadership
          </h2>

          <p className="mt-6 font-mono text-xs uppercase tracking-wide text-muted dark:text-muted-dark">
            Education
          </p>
          <div className="mt-3 space-y-4">
            {profile.education.map((edu, i) => (
              <Reveal key={edu.title} delay={i * 0.08}>
                <div className="rounded-xl2 bg-paper p-4 dark:bg-paper-dark">
                  <span className="inline-block rounded-full bg-navy px-3 py-1 text-xs font-medium text-white">
                    {edu.period}
                  </span>
                  <p className="mt-2 font-display text-base font-semibold text-ink dark:text-ink-dark">
                    {edu.title}
                  </p>
                  <p className="text-sm text-muted dark:text-muted-dark">{edu.place}</p>
                  {edu.score && (
                    <p className="mt-1 text-sm font-medium text-primary dark:text-primary-dark">
                      {edu.score}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {leadership?.length > 0 && (
            <>
              <hr className="my-6 border-line dark:border-line-dark" />

              <p className="font-mono text-xs uppercase tracking-wide text-muted dark:text-muted-dark">
                Leadership
              </p>
              <div className="mt-3 space-y-4">
                {leadership.map((role, i) => {
                  const key = `leadership-${role.title}`
                  return (
                    <Reveal key={role.title} delay={i * 0.08}>
                      <p className="font-display text-sm font-semibold text-ink dark:text-ink-dark">
                        {role.title}
                      </p>
                      <p className="text-sm text-muted dark:text-muted-dark">{role.place}</p>
                      {role.points?.length > 0 && (
                        <>
                          {expanded[key] && (
                            <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs leading-relaxed text-muted marker:text-primary dark:text-muted-dark dark:marker:text-primary-dark">
                              {role.points.map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                            </ul>
                          )}
                          <button
                            type="button"
                            onClick={() => toggleExpand(key)}
                            className="mt-1 text-xs font-medium text-primary hover:underline dark:text-primary-dark"
                          >
                            {expanded[key] ? 'Show Less' : 'View More'}
                          </button>
                        </>
                      )}
                    </Reveal>
                  )
                })}
              </div>
            </>
          )}
        </Reveal>
      </div>

      {/* Sertifikasi — penting buat fresh grad, nutupin kurangnya pengalaman kerja formal */}
      {certifications.length > 0 && (
        <Reveal delay={0.4} className="mt-6 rounded-xl2 border border-line bg-card p-6 dark:border-line-dark dark:bg-card-dark">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-semibold text-ink dark:text-ink-dark">
              Certifications
            </h2>

            {/* Tombol navigasi panah kiri/kanan */}
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollCerts(-1)}
                disabled={!canScrollLeft}
                aria-label="Scroll ke kiri"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-card text-ink transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-line disabled:hover:text-ink dark:border-line-dark dark:bg-card-dark dark:text-ink-dark dark:hover:border-primary-dark dark:hover:text-primary-dark dark:disabled:hover:border-line-dark dark:disabled:hover:text-ink-dark"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => scrollCerts(1)}
                disabled={!canScrollRight}
                aria-label="Scroll ke kanan"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-card text-ink transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-line disabled:hover:text-ink dark:border-line-dark dark:bg-card-dark dark:text-ink-dark dark:hover:border-primary-dark dark:hover:text-primary-dark dark:disabled:hover:border-line-dark dark:disabled:hover:text-ink-dark"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Wrapper relative untuk fade gradient di kiri & kanan */}
          <div className="relative mt-6">
            {/* Fade kiri, cuma muncul kalau masih bisa discroll ke kiri */}
            <div
              className={[
                'pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-card to-transparent transition-opacity duration-300 dark:from-card-dark',
                canScrollLeft ? 'opacity-100' : 'opacity-0',
              ].join(' ')}
            />
            {/* Fade kanan, cuma muncul kalau masih ada konten di kanan */}
            <div
              className={[
                'pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-card to-transparent transition-opacity duration-300 dark:from-card-dark',
                canScrollRight ? 'opacity-100' : 'opacity-0',
              ].join(' ')}
            />

            {/* Row horizontal-scroll: card dikasih lebar tetap (w-72 shrink-0) biar gak numpuk ke bawah,
                dan items-stretch biar semua card ikut tinggi yang paling tinggi di baris itu */}
            <div
              ref={certScrollRef}
              className="cert-scrollbar flex items-stretch gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory"
            >
              {certifications.map((cert, i) => (
                <Reveal
                  key={cert.title}
                  delay={i * 0.08}
                  className="w-72 shrink-0 snap-start"
                >
                  <div
                    ref={(el) => (certCardRefs.current[i] = el)}
                    style={certCardHeight ? { minHeight: certCardHeight } : undefined}
                    className="flex gap-3 rounded-xl2 bg-paper p-4 transition hover:-translate-y-0.5 hover:shadow-md dark:bg-paper-dark"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                      <Award size={18} />
                    </div>
                    <div className="flex min-w-0 flex-col">
                      <p className="font-display text-sm font-semibold leading-snug text-ink dark:text-ink-dark">
                        {cert.title}
                      </p>
                      <p className="text-xs text-muted dark:text-muted-dark">
                        {cert.issuer}
                        {cert.date ? ` • ${cert.date}` : ''}
                      </p>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto inline-flex items-center gap-1 pt-1.5 text-xs font-medium text-primary dark:text-primary-dark"
                        >
                          Lihat sertifikat <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      )}
    </section>
  )
}