import { ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line py-8 dark:border-line-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div>
          <p className="font-display text-lg font-bold text-ink dark:text-ink-dark">
            {profile.initials}.
          </p>
          <p className="text-xs text-muted dark:text-muted-dark">
            © {year} {profile.name}. Seluruh hak cipta dilindungi.
          </p>
        </div>

        <div className="flex gap-5 text-sm text-muted dark:text-muted-dark">
          <a href={`mailto:${profile.email}`} className="underline-offset-4 hover:underline">
            Email
          </a>
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              {social.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Kembali ke atas"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-primary hover:text-primary dark:border-line-dark dark:text-ink-dark dark:hover:border-primary-dark dark:hover:text-primary-dark"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  )
}
