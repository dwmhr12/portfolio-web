import { useState, useEffect, Fragment } from 'react'
import {
  X,
  FileText,
  Link2,
  Code2,
  AlertTriangle,
  Workflow,
  ExternalLink,
  Lightbulb,
  Settings2,
  Target,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Gauge,
  Clock,
  Eye,
  Database,
  CheckCircle2,
  Expand,
  Sparkles,
  Layers,
  GitBranch,
  RefreshCw,
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

// Render teks bullet dengan dukungan **kata kunci** -> <strong>. Dipakai
// biar list panjang (Problem/Solution/Outcomes) tetap bisa di-skim cepat:
// 1-2 kata paling penting di tiap baris ditonjolkan, sisanya teks biasa.
// Kalau item tidak punya "**...**" sama sekali, dirender apa adanya
// (backward-compatible dengan data lama yang belum dikasih penanda bold).
function BoldableText({ text }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  if (parts.length === 1) return <>{text}</>
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-ink dark:text-ink-dark">
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  )
}

// List sederhana dengan bullet ikon — dipakai untuk Problem, Solution Approach,
// dan Expected Outcomes biar konsisten stylenya.
function IconList({ items, icon: Icon, tone = 'navy' }) {
  const dotClass =
    tone === 'navy'
      ? 'bg-navy/10 text-navy dark:bg-white/10 dark:text-white'
      : 'bg-primary/10 text-primary dark:bg-primary-dark/10 dark:text-primary-dark'

  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-muted dark:text-muted-dark">
          <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${dotClass}`}>
            <Icon size={11} />
          </span>
          <span><BoldableText text={item} /></span>
        </li>
      ))}
    </ul>
  )
}

// ============ OUTCOME STAT CARDS ============
// Dipakai khusus di Expected Outcomes untuk metric yang punya angka.
// Mendukung DUA mode data:
//   1) Comparison mode: { before, after }  -> tampil "3-5 hari -> < 1 hari"
//      dengan panah, dipakai kalau project memang punya perbandingan
//      sebelum/sesudah.
//   2) Value mode: { value }               -> tampil angka/teks tunggal
//      TANPA panah, dipakai kalau project cuma punya metric mentah
//      (mis. "7 pipelines", "Incremental") yang nggak punya pembanding.
//
// Desain v2: dibikin lebih flat & rapi dibanding versi sebelumnya —
// versi lama pakai border-l tebal + gradient + glow blob dekoratif yang
// bentrok sama sudut rounded card (border-l lurus ketemu corner
// melengkung jadi keliatan "patah"/aneh). Sekarang pakai accent bar tipis
// di ATAS card (full-width, jadi nyatu sama rounded-top, nggak ada sudut
// yang keliatan ganjil), badge label duduk di kanan atas biar nggak
// nabrak baris angka, dan before/after ditata dalam 1 baris rapi dengan
// jarak yang konsisten.
const OUTCOME_ICONS = {
  clock: Clock,
  gauge: Gauge,
  eye: Eye,
  database: Database,
  check: CheckCircle2,
  layers: Layers,
  source: GitBranch,
  refresh: RefreshCw,
}

function OutcomeStatCard({ label, before, after, value, icon }) {
  const Icon = OUTCOME_ICONS[icon] ?? Gauge
  // comparison mode aktif hanya kalau before & after dua-duanya diisi.
  // kalau project cuma kasih "value", otomatis jatuh ke value mode
  // (angka besar tanpa panah, konten di-center biar gak "kosong" di
  // kanan waktu card ikut melebar mengisi grid).
  const hasComparison = before !== undefined && after !== undefined

  return (
    <div className="overflow-hidden rounded-xl2 border border-line bg-card shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-line-dark dark:bg-card-dark">
      {/* accent bar tipis full-width di atas — nyatu rapi sama rounded-top,
          tidak ada sudut "patah" seperti border-l versi sebelumnya */}
      <div className="h-1 w-full bg-primary dark:bg-primary-dark" />

      <div
        className={`p-4 ${
          hasComparison
            ? 'min-w-[220px]'
            : 'flex min-w-[130px] flex-col items-center text-center'
        }`}
      >
        <div className={`flex items-center gap-2 ${hasComparison ? '' : 'justify-center'}`}>
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary-dark/15 dark:text-primary-dark">
            <Icon size={14} />
          </span>
          <p className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-wide text-muted dark:text-muted-dark">
            {label}
          </p>
        </div>

        <div className={`mt-3 flex items-center gap-2 ${hasComparison ? '' : 'justify-center'}`}>
          {hasComparison ? (
            <>
              <span className="text-sm text-muted line-through decoration-1 decoration-muted/60 dark:text-muted-dark dark:decoration-muted-dark/60">
                {before}
              </span>
              <ArrowRight size={14} className="shrink-0 text-muted/60 dark:text-muted-dark/60" />
              <span className="font-display text-lg font-bold leading-none text-primary dark:text-primary-dark">
                {after}
              </span>
            </>
          ) : (
            <span className="font-display text-xl font-bold leading-none text-primary dark:text-primary-dark">
              {value}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

// flex-wrap (bukan grid) supaya lebar tiap card ngikutin isinya sendiri
// (via min-w di dalam card) — card dengan teks pendek jadi ramping,
// tidak dipaksa sama lebar dengan card lain seperti kalau pakai grid
// kolom sama rata.
function OutcomeStatGrid({ stats }) {
  if (!stats?.length) return null
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-3">
      {stats.map((stat) => (
        <OutcomeStatCard key={stat.label} {...stat} />
      ))}
    </div>
  )
}

// ============ PROCESS FLOW ============
// Menggantikan tabel "Process | Output" dengan diagram alir bergaris yang
// menunjukkan bahwa 7 dokumen itu adalah SATU alur analisis yang berurutan
// (Business Problem → ... → Odoo), bukan sekadar daftar file lepas-lepas.
//
// Ditata dalam beberapa BARIS TETAP (bukan horizontal-scroll, bukan juga
// flex-wrap bebas) — supaya garis penghubung antar node selalu nyambung
// rapi di dalam satu baris, tanpa ada garis "menggantung" di awal baris
// baru seperti yang terjadi kalau mengandalkan wrap otomatis dari browser.
// Antar baris disambung garis vertikal pendek, jadi tetap kebaca sebagai
// satu alur meskipun terpisah baris.
//
// Jumlah node per baris responsif: 4 per baris di layar lebar, 2 per baris
// di layar sempit (mobile) — supaya label yang cukup panjang tidak
// berdesakan di HP.
//
// Klik salah satu node tetap membuka card detail di bawah (title, detail,
// dan link output) — opsional untuk yang mau lihat lebih dalam, tapi
// seluruh alur sudah kebaca sekilas tanpa perlu klik apa pun.
function useIsWideScreen(breakpoint = 640) {
  const [isWide, setIsWide] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= breakpoint : true
  )
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia(`(min-width: ${breakpoint}px)`)
    const handler = (e) => setIsWide(e.matches)
    setIsWide(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [breakpoint])
  return isWide
}

function ProcessFlow({ steps }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const isWide = useIsWideScreen(640)

  // reset ke node pertama tiap kali daftar step berganti (mis. modal
  // dipakai ulang untuk project lain tanpa unmount)
  useEffect(() => {
    setActiveIndex(0)
  }, [steps])

  if (!steps?.length) return null
  const active = steps[activeIndex]

  // Bagi steps jadi baris-baris tetap. rowSize berubah sesuai lebar layar
  // (lewat useIsWideScreen), tapi tiap baris selalu berisi node yang utuh
  // beserta garis penghubungnya sendiri.
  const rowSize = isWide ? 4 : 2
  const rows = []
  for (let i = 0; i < steps.length; i += rowSize) {
    rows.push(
      steps.slice(i, i + rowSize).map((step, j) => ({ step, index: i + j }))
    )
  }

  return (
    <div className="mt-4">
      <div className="flex flex-col items-center gap-1">
        {rows.map((row, rowIdx) => {
          const isLastRow = rowIdx === rows.length - 1
          const rowReachedEnd = activeIndex >= row[row.length - 1].index
          return (
            <Fragment key={rowIdx}>
              {/* satu baris: node + garis horizontal, hanya di dalam baris ini */}
              <div className="flex items-start justify-center">
                {row.map(({ step, index }, j) => {
                  const isActive = index === activeIndex
                  const isPast = index < activeIndex
                  return (
                    <Fragment key={step.title}>
                      {j > 0 && (
                        <div
                          className={`mt-4 h-px w-6 shrink-0 transition-colors sm:w-10 ${
                            isPast || isActive
                              ? 'bg-primary dark:bg-primary-dark'
                              : 'bg-line dark:bg-line-dark'
                          }`}
                        />
                      )}
                      <button
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className="flex shrink-0 flex-col items-center gap-2 px-0.5"
                        aria-pressed={isActive}
                      >
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-colors ${
                            isActive
                              ? 'bg-primary text-white dark:bg-primary-dark'
                              : isPast
                              ? 'bg-primary/20 text-primary dark:bg-primary-dark/25 dark:text-primary-dark'
                              : 'bg-ink/10 text-muted dark:bg-white/10 dark:text-muted-dark'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={`w-[72px] text-center text-[11px] font-medium leading-tight sm:w-24 ${
                            isActive ? 'text-ink dark:text-ink-dark' : 'text-muted dark:text-muted-dark'
                          }`}
                        >
                          {step.title}
                        </span>
                      </button>
                    </Fragment>
                  )
                })}
              </div>

              {/* Penghubung antar baris — garis vertikal pendek, jadi alur
                  tetap kebaca "nyambung" walau pindah baris */}
              {!isLastRow && (
                <div
                  className={`h-4 w-px transition-colors ${
                    rowReachedEnd ? 'bg-primary dark:bg-primary-dark' : 'bg-line dark:bg-line-dark'
                  }`}
                />
              )}
            </Fragment>
          )
        })}
      </div>

      {/* Card detail untuk node yang sedang aktif */}
      {active && (
        <div className="mt-3 rounded-lg border border-line bg-paper p-4 dark:border-line-dark dark:bg-paper-dark">
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white dark:bg-primary-dark">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-ink dark:text-ink-dark">{active.title}</p>
              {active.detail && (
                <p className="mt-1 text-sm text-muted dark:text-muted-dark">{active.detail}</p>
              )}
              {active.output &&
                (active.outputLink ? (
                  <a
                    href={active.outputLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline dark:text-primary-dark"
                  >
                    <span>{active.output}</span>
                    <ExternalLink size={11} className="mt-0.5 shrink-0" />
                  </a>
                ) : (
                  <p className="mt-3 text-sm font-medium text-ink dark:text-ink-dark">{active.output}</p>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


// Carousel visual story — dipasang antara judul dan overview supaya
// recruiter langsung lihat "bentuk" project sebelum baca teksnya.
// Tiap slide: gambar + nomor urut + label singkat + caption.
// Klik gambar -> buka versi full-size di lightbox (dikelola oleh parent).
// Interval auto-scroll dalam milidetik. Cukup lama biar sempat dibaca
// labelnya, tapi tetap terasa "hidup".
const AUTOPLAY_DELAY = 4500

function ImageCarousel({ images, onExpand }) {
  const [index, setIndex] = useState(0)
  // dijeda saat: kursor hover di atas carousel, ATAU user baru saja
  // klik panah/dot secara manual (biar nggak langsung "direbut" lagi
  // oleh auto-scroll sesaat setelah user berinteraksi).
  const [isHovering, setIsHovering] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const total = images?.length ?? 0

  // Auto-scroll: jalan terus tiap AUTOPLAY_DELAY, kecuali sedang di-hover,
  // sedang dijeda karena interaksi manual, atau gambarnya cuma satu.
  useEffect(() => {
    if (total <= 1 || isHovering || isPaused) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, AUTOPLAY_DELAY)
    return () => clearInterval(timer)
  }, [total, isHovering, isPaused])

  if (!images?.length) return null

  const current = images[index]

  // Navigasi manual: pindah slide + jeda auto-scroll sebentar biar nggak
  // langsung geser lagi begitu jari lepas dari tombol.
  const goTo = (i) => {
    setIndex((i + total) % total)
    setIsPaused(true)
    window.clearTimeout(goTo._resumeTimer)
    goTo._resumeTimer = window.setTimeout(() => setIsPaused(false), AUTOPLAY_DELAY)
  }

  return (
    <div
      className="mt-5"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="group relative overflow-hidden rounded-xl2 border border-line bg-paper dark:border-line-dark dark:bg-paper-dark">
        <button
          type="button"
          onClick={() => onExpand(current)}
          className="block aspect-video w-full max-h-[440px] cursor-zoom-in overflow-hidden bg-ink/5 dark:bg-white/5"
          aria-label={`Perbesar gambar: ${current.label ?? 'preview'}`}
        >
          <img
            src={current.src}
            alt={current.alt ?? current.label ?? ''}
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </button>

        {/* tombol perbesar, muncul di hover */}
        <button
          type="button"
          onClick={() => onExpand(current)}
          aria-label="Perbesar gambar"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink/60 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
        >
          <Expand size={14} />
        </button>

        {/* navigasi kiri/kanan, hanya kalau ada lebih dari 1 gambar */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Gambar sebelumnya"
              className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow hover:bg-white dark:bg-ink/70 dark:text-white"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Gambar berikutnya"
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow hover:bg-white dark:bg-ink/70 dark:text-white"
            >
              <ChevronRight size={16} />
            </button>

            {/* progress bar tipis di tepi bawah gambar, nunjukkin kapan
                slide berikutnya akan tampil (reset tiap kali index/pause berubah) */}
            {!isHovering && !isPaused && (
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white/30">
                <div
                  key={index}
                  className="h-full bg-primary dark:bg-primary-dark"
                  style={{ animation: `carousel-progress ${AUTOPLAY_DELAY}ms linear forwards` }}
                />
              </div>
            )}
          </>
        )}
      </div>

      {/* label + caption di bawah gambar */}
      {(current.label || current.caption) && (
        <div className="mt-3">
          {current.label && (
            <p className="text-sm font-semibold text-ink dark:text-ink-dark">{current.label}</p>
          )}
          {current.caption && (
            <p className="mt-0.5 text-sm text-muted dark:text-muted-dark">{current.caption}</p>
          )}
        </div>
      )}

      {/* dot indicator */}
      {total > 1 && (
        <div className="mt-3 flex items-center justify-center gap-1.5">
          {images.map((img, i) => (
            <button
              key={img.src + i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ke gambar ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? 'w-5 bg-primary dark:bg-primary-dark'
                  : 'w-1.5 bg-ink/15 hover:bg-ink/30 dark:bg-white/20 dark:hover:bg-white/35'
              }`}
            />
          ))}
        </div>
      )}

      <style>{`
        @keyframes carousel-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  )
}

// Lightbox full-size — overlay terpisah di atas modal, klik luar atau X untuk tutup.
function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-4 dark:bg-black/90"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup"
        className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow hover:bg-white"
      >
        <X size={18} />
      </button>
      <figure className="max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={image.fullSrc ?? image.src}
          alt={image.alt ?? image.label ?? ''}
          className="max-h-[85vh] w-auto rounded-lg object-contain"
        />
        {(image.label || image.caption) && (
          <figcaption className="mt-3 text-center text-sm text-white/80">
            {[image.label, image.caption].filter(Boolean).join(' — ')}
          </figcaption>
        )}
      </figure>
    </div>
  )
}

export default function ProjectModal({ project, onClose }) {
  const [expandedImage, setExpandedImage] = useState(null)

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && !expandedImage) onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose, expandedImage])

  if (!project) return null

  // "Key Insight" pakai project.businessInsight — sekarang mendukung
  // array of paragraf, tapi string tunggal (format lama) tetap jalan.
  const insightParagraphs = Array.isArray(project.businessInsight)
    ? project.businessInsight
    : project.businessInsight
    ? [project.businessInsight]
    : []

  // "Overview" juga mendukung array of paragraf (biar ada jarak antar
  // paragraf), tapi string tunggal (format lama) tetap jalan.
  const overviewParagraphs = Array.isArray(project.overview)
    ? project.overview
    : project.overview
    ? [project.overview]
    : []

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/60 p-4 py-10 dark:bg-black/70"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-xl2 border border-line bg-card shadow-xl dark:border-line-dark dark:bg-card-dark"
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
          {/* ============ 1. OVERVIEW ============ */}
          <div>
            <h2 className="font-display text-xl font-bold leading-snug text-ink dark:text-ink-dark sm:text-2xl">
              {project.title}
            </h2>

            {project.categories?.length > 0 && (
              <p className="mt-1.5 text-sm font-medium text-primary dark:text-primary-dark">
                {project.categories.join(' • ')}
              </p>
            )}

            {/* Hook / ringkasan satu baris: "peran + hasil utama".
                Dikasih box terpisah (bukan cuma teks tebal nempel di
                bawah judul) biar nggak numpuk sama title/categories,
                dan tetap jadi hal pertama yang kebaca sebelum carousel
                & overview. */}
            {project.hook && (
              <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-primary/20 bg-primary/[0.06] px-4 py-3 dark:border-primary-dark/20 dark:bg-primary-dark/[0.08]">
                <Sparkles size={16} className="mt-0.5 shrink-0 text-primary dark:text-primary-dark" />
                <p className="text-sm font-semibold leading-snug text-ink dark:text-ink-dark">
                  {project.hook}
                </p>
              </div>
            )}

            {/* ============ VISUAL STORY CAROUSEL ============ */}
            {project.gallery?.length > 0 && (
              <ImageCarousel images={project.gallery} onExpand={setExpandedImage} />
            )}

            {overviewParagraphs.length > 0 && (
              <div className="mt-4 space-y-3">
                {overviewParagraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed text-muted dark:text-muted-dark"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {project.note && (
              <div className="mt-4 rounded-lg border-l-4 border-primary/40 bg-primary/[0.05] py-3 pl-4 pr-4 dark:border-primary-dark/40 dark:bg-primary-dark/[0.06]">
                <p className="text-sm italic leading-relaxed text-muted dark:text-muted-dark">
                  {project.note}
                </p>
              </div>
            )}
          </div>

          {/* ============ 2. PROBLEM ============ */}
          {project.problems?.length > 0 && (
            <div className="mt-8 rounded-xl2 border border-navy/15 bg-navy/[0.06] p-5 dark:border-white/10 dark:bg-white/[0.04]">
              <SectionTitle icon={AlertTriangle} tone="navy">
                Problem
              </SectionTitle>
              <IconList items={project.problems} icon={AlertTriangle} tone="navy" />
            </div>
          )}

          {/* ============ 3. PROCESS (diagram alir horizontal, bisa di-scroll) ============ */}
          {project.process?.length > 0 && (
            <div className="mt-6 rounded-xl2 border border-primary/15 bg-primary/[0.06] p-5 dark:border-primary-dark/15 dark:bg-primary-dark/[0.06]">
              <SectionTitle icon={Workflow} tone="primary">
                Business Analysis Approach
              </SectionTitle>
              <ProcessFlow steps={project.process} />
            </div>
          )}

          {/* ============ 4. SOLUTION APPROACH ============ */}
          {/* Tone navy (bukan primary lagi) — biar nggak nempel sama warna
              "Business Analysis Approach" di atasnya yang juga primary.
              Problem(navy) → Process(primary) → Solution(navy) → Key
              Insight(gradient) → Outcomes(navy): tiap section yang
              bersebelahan sekarang gantian warna, jadi nggak keliatan
              "1 warna semua" waktu di-scroll. */}
          {(project.solutionIntro?.length > 0 || project.solutions?.length > 0) && (
            <div className="mt-6 rounded-xl2 border border-navy/15 bg-navy/[0.06] p-5 dark:border-white/10 dark:bg-white/[0.04]">
              <SectionTitle icon={Settings2} tone="navy">
                Solution Approach
              </SectionTitle>

              {project.solutionIntro?.length > 0 && (
                <div className="mt-4 space-y-3">
                  {project.solutionIntro.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-sm leading-relaxed text-muted dark:text-muted-dark"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {project.solutions?.length > 0 && (
                <IconList items={project.solutions} icon={Settings2} tone="navy" />
              )}
            </div>
          )}

          {/* ============ 5. KEY INSIGHT (mendukung banyak paragraf) ============ */}
          {/* Tone primary (pink) — lanjutan pola selang-seling warna:
              Problem(navy) → Process(primary) → Solution(navy) →
              Key Insight(primary) → Outcomes(navy). Flat, samain style-nya
              sama section lain, nggak pakai gradient/border tebal lagi. */}
          {insightParagraphs.length > 0 && (
            <div className="mt-6 rounded-xl2 border border-primary/15 bg-primary/[0.06] p-5 dark:border-primary-dark/15 dark:bg-primary-dark/[0.06]">
              <SectionTitle icon={Lightbulb} tone="primary">
                Key Insight
              </SectionTitle>
              <div className="mt-3 space-y-3">
                {insightParagraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed text-muted dark:text-muted-dark"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* ============ 6. EXPECTED OUTCOMES ============ */}
          {(project.outcomeIntro?.length > 0 ||
            project.outcomeStats?.length > 0 ||
            project.outcomes?.length > 0) && (
            <div className="mt-6 rounded-xl2 border border-navy/15 bg-navy/[0.06] p-5 dark:border-white/10 dark:bg-white/[0.04]">
              <SectionTitle icon={Target} tone="navy">
                Implementation Highlights
              </SectionTitle>

              {/* Metric yang punya angka before -> after (atau value tunggal)
                  ditaruh PALING ATAS, sebelum kalimat pengantar & bullet —
                  biar recruiter yang cuma scroll sekilas langsung kena angka
                  duluan, baru turun ke detail kualitatif di bawahnya. */}
              <OutcomeStatGrid stats={project.outcomeStats} />

              {project.outcomeIntro?.length > 0 && (
                <div className="mt-4 space-y-3">
                  {project.outcomeIntro.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-sm leading-relaxed text-muted dark:text-muted-dark"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {/* Poin kualitatif (tidak berupa angka) tetap sebagai bullet */}
              {project.outcomes?.length > 0 && (
                <IconList items={project.outcomes} icon={Target} tone="navy" />
              )}
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

          {/* CTA penutup — ajakan lanjut ngobrol, muncul kalau project.contact diisi */}
          {project.contact?.url && (
            <p className="mt-4 text-center text-sm text-muted dark:text-muted-dark">
              Tertarik diskusi lebih lanjut soal project ini?{' '}
              <a
                href={project.contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline dark:text-primary-dark"
              >
                {project.contact.label ?? 'Hubungi saya'}
              </a>
            </p>
          )}
        </div>
      </div>

      <ImageLightbox image={expandedImage} onClose={() => setExpandedImage(null)} />
    </div>
  )
}