import { ArrowDownRight, ChevronDown } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from '../components/Reveal'

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="grid gap-6 sm:grid-cols-[1fr_1.4fr]">
        {/* Panel kiri: hashtag minat + tombol lanjut ke About */}
        <Reveal className="flex min-h-[420px] flex-col justify-between rounded-xl2 border border-line bg-card p-8 dark:border-line-dark dark:bg-card-dark sm:min-h-[520px]">
          {/* Blok atas: ikon panah + hashtag, jaraknya dekat */}
          <div className="flex flex-col gap-4">
            <ArrowDownRight className="text-ink dark:text-ink-dark" size={28} />

            <div className="flex flex-wrap gap-2">
              {profile.tags.map((tag, i) => (
                <Reveal key={tag} delay={0.15 + i * 0.08}>
                  <span className="rounded-full border border-line px-3 py-1.5 text-xs font-medium text-muted dark:border-line-dark dark:text-muted-dark">
                    {tag}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>

          <a
            href="#about"
            className="flex w-fit items-center gap-3 font-display text-lg font-semibold text-ink dark:text-ink-dark"
          >
            Lihat Selengkapnya
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white transition-transform hover:translate-y-0.5">
              <ChevronDown size={18} />
            </span>
          </a>
        </Reveal>

        {/* Panel kanan: judul besar dengan background titik-titik */}
        <Reveal
          delay={0.15}
          className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-xl2 bg-primary p-8 dark:bg-navy sm:min-h-[520px] sm:p-12"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)',
              backgroundSize: '18px 18px',
            }}
          />
          <h1 className="relative font-display text-6xl font-bold uppercase leading-[0.95] text-white sm:text-8xl">
            {profile.heroWord}
          </h1>
          <span className="relative mt-2 self-end font-display text-3xl font-bold text-white sm:text-5xl">
            {profile.heroYear}
          </span>
        </Reveal>
      </div>

      <Reveal delay={0.3}>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted dark:text-muted-dark">
          {profile.shortTagline} {profile.tagline}
        </p>
      </Reveal>
    </section>
  )
}