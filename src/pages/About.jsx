import { Mail, Link as LinkIcon, Code2, TrendingUp, Eye } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from '../components/Reveal'

// Ikon untuk tiap tombol kontak — dicocokkan lewat label socialnya
const socialIcons = {
  LinkedIn: LinkIcon,
  GitHub: Code2,
  Instagram: LinkIcon,
}

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="grid gap-6 sm:grid-cols-[1fr_1.3fr]">
        {/* Foto profil — tinggi FIXED (bukan min-h) biar foto ukuran
            berapa pun (dari HP dsb) tetap dipaksa pas di dalam box ini */}
        <Reveal className="relative h-[460px] overflow-hidden rounded-xl2 border border-line dark:border-line-dark sm:h-[600px]">
          {profile.photoUrl ? (
            <img
              src={profile.photoUrl}
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-line text-6xl font-semibold text-muted dark:bg-line-dark dark:text-muted-dark">
              {profile.initials}
            </div>
          )}
        </Reveal>

        {/* Kartu "About me" */}
        <div className="flex flex-col justify-between gap-6">
          <Reveal delay={0.1} className="rounded-xl2 border border-line bg-card p-8 dark:border-line-dark dark:bg-card-dark sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-3xl font-semibold text-primary dark:text-primary-dark sm:text-4xl">
                  {profile.greeting}
                </p>
                <p className="mt-2 text-base text-muted dark:text-muted-dark">{profile.shortTagline}</p>
              </div>

              {profile.cvUrl && (
                <a
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex shrink-0 items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:bg-primary/10 dark:border-line-dark dark:text-ink-dark"
                >
                  <Eye size={16} />
                  View CV
                </a>
              )}
            </div>

            <hr className="my-6 border-line dark:border-line-dark" />
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-ink dark:text-ink-dark sm:text-2xl">
                  {profile.aboutTitle}
                </h3>
                <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-muted dark:text-muted-dark">
                  {profile.about}
                </p>
              </div>
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-line bg-paper dark:border-line-dark dark:bg-paper-dark">
                <TrendingUp className="text-primary dark:text-primary-dark" size={26} />
              </span>
            </div>
          </Reveal>

          {/* Tombol kontak cepat */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Reveal delay={0.2}>
              <a
                href={`mailto:${profile.email}`}
                className="flex flex-col gap-3 rounded-xl2 bg-navy p-4 text-white transition-transform hover:-translate-y-1 hover:opacity-90"
              >
                <Mail size={18} />
                <span className="text-xs">
                  Email saya
                  <br />
                  <span className="font-medium">{profile.email.split('@')[0]}</span>
                </span>
              </a>
            </Reveal>

            {profile.socials.map((social, i) => {
              const Icon = socialIcons[social.label] ?? LinkIcon
              return (
                <Reveal key={social.label} delay={0.25 + i * 0.08}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-3 rounded-xl2 bg-primary/10 p-4 text-ink transition-transform hover:-translate-y-1 hover:bg-primary/20 dark:bg-primary-dark/10 dark:text-ink-dark"
                  >
                    <Icon size={18} className="text-primary dark:text-primary-dark" />
                    <span className="text-xs">
                      {social.label}
                      <br />
                      <span className="font-medium">{social.handle}</span>
                    </span>
                  </a>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}