import { Mail, Link as LinkIcon, Code2, Download } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'

// Ikon untuk tiap tombol kontak — dicocokkan lewat label socialnya
// (pola sama seperti di About.jsx, biar konsisten di seluruh halaman)
const socialIcons = {
  LinkedIn: LinkIcon,
  GitHub: Code2,
  Instagram: LinkIcon,
}

export default function CallToAction() {
  return (
    <div className="rounded-xl2 bg-navy px-6 py-14 text-center sm:px-16">
      <Reveal>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Let's Connect
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-white/70">
          Feel free to reach out if you'd like to discuss opportunities, collaborations, or simply connect.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
        <Reveal delay={0.1}>
          <a
            href={`mailto:${profile.email}`}
            className="flex flex-col gap-3 rounded-xl2 bg-white/10 p-4 text-left text-white transition-transform duration-300 hover:-translate-y-1 hover:bg-white/20"
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
            <Reveal key={social.label} delay={0.15 + i * 0.08}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-3 rounded-xl2 bg-white/10 p-4 text-left text-white transition-transform duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                <Icon size={18} />
                <span className="text-xs">
                  {social.label}
                  <br />
                  <span className="font-medium">{social.handle}</span>
                </span>
              </a>
            </Reveal>
          )
        })}

        {profile.cvUrl && (
          <Reveal delay={0.4}>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-3 rounded-xl2 bg-primary p-4 text-left text-white transition-transform duration-300 hover:-translate-y-1 hover:opacity-90"
            >
              <Download size={18} />
              <span className="text-xs">
                Unduh
                <br />
                <span className="font-medium">CV Saya</span>
              </span>
            </a>
          </Reveal>
        )}
      </div>
    </div>
  )
}