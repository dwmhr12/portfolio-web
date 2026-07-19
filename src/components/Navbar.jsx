import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { profile } from '../data/profile'
import { useTheme } from '../hooks/useTheme'
import Reveal from './Reveal'

// Link navigasi — href-nya mengarah ke id section yang ada di App.jsx
// (contoh: '#about' -> <section id="about">). Kalau mau nambah section
// baru, tambahkan juga id yang sama di App.jsx.
const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Me' },
  { href: '#resume', label: 'Resume' },
  { href: '#work', label: 'Project' },
  { href: '#blog', label: 'Blog' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()

  // Section mana yang lagi "aktif" (lagi keliatan di layar / halaman
  // yang lagi dibuka). Default-nya ngikutin hash URL saat pertama load,
  // biar kalau user buka langsung ke '#blog' navbar-nya udah bener dari awal.
  const [activeSection, setActiveSection] = useState(
    () => window.location.hash.replace('#', '') || 'home'
  )

  useEffect(() => {
    // Simpan fungsi cleanup listener scroll yang lagi aktif, biar bisa
    // dibersihkan tiap kali kita setup ulang (misal pas ganti halaman).
    let cleanupScroll = null

    const setupScrollSpy = () => {
      if (cleanupScroll) {
        cleanupScroll()
        cleanupScroll = null
      }

      // Kalau lagi di halaman Blog, section home/about/resume/work
      // gak ada di DOM sama sekali (di-unmount total sama App.jsx),
      // jadi gak perlu scrollspy — langsung set aktif ke 'blog'.
      if (window.location.hash === '#blog') {
        setActiveSection('blog')
        return
      }

      const sections = navLinks
        .filter((link) => link.href !== '#blog')
        .map((link) => document.getElementById(link.href.slice(1)))
        .filter(Boolean)

      if (sections.length === 0) return

      let ticking = false

      const updateActiveSection = () => {
        // Garis acuan: 35% dari atas viewport. Section dianggap "aktif"
        // kalau bagian atasnya sudah lewat garis ini.
        const triggerPoint = window.innerHeight * 0.35

        let current = sections[0].id
        for (const section of sections) {
          const top = section.getBoundingClientRect().top
          if (top <= triggerPoint) {
            current = section.id
          }
        }

        // Kalau udah scroll sampai dasar halaman, paksa anggap section
        // terakhir yang aktif — penting buat section pendek yang
        // tingginya gak nyampe triggerPoint di atas.
        const isAtBottom =
          window.innerHeight + Math.ceil(window.scrollY) >=
          document.documentElement.scrollHeight - 2
        if (isAtBottom) current = sections[sections.length - 1].id

        setActiveSection(current)
        ticking = false
      }

      const handleScroll = () => {
        if (ticking) return
        ticking = true
        requestAnimationFrame(updateActiveSection)
      }

      updateActiveSection() // set posisi awal
      window.addEventListener('scroll', handleScroll, { passive: true })
      window.addEventListener('resize', handleScroll)

      cleanupScroll = () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleScroll)
      }
    }

    setupScrollSpy()

    // Tiap kali hash berubah (klik link, termasuk pindah ke/dari Blog),
    // setup ulang. Dikasih delay dikit karena App.jsx butuh waktu buat
    // re-render (unmount/mount section-section-nya) sebelum kita bisa
    // nyari elemen section yang baru.
    const handleHashChange = () => {
      setTimeout(setupScrollSpy, 50)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      if (cleanupScroll) cleanupScroll()
    }
  }, [])

  // Style helper — biar gak nulis ternary panjang dua kali (desktop & mobile)
  const linkClass = (href, { mobile = false } = {}) => {
    const isActive = activeSection === href.slice(1)
    const base = mobile
      ? 'block rounded-full px-3 py-1.5 transition-colors'
      : 'rounded-full px-4 py-2 transition-colors'

    if (isActive) {
      return `${base} border border-primary bg-primary text-white dark:border-primary-dark dark:bg-primary-dark`
    }
    return `${base} border border-line bg-card text-muted hover:bg-primary hover:text-white dark:border-line-dark dark:bg-card-dark dark:text-muted-dark dark:hover:bg-primary-dark`
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur dark:border-line-dark dark:bg-paper-dark/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Reveal y={-12} duration={0.4}>
          <a
            href="#home"
            className="flex items-center gap-2 font-display text-base font-semibold text-ink dark:text-ink-dark"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-sm text-white">
              {profile.initials}
            </span>
            {profile.name}
          </a>
        </Reveal>

        <ul className="hidden gap-2 text-sm font-medium sm:flex">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <Reveal y={-12} duration={0.4} delay={0.1 + i * 0.06}>
                <a href={link.href} className={linkClass(link.href)}>
                  {link.label}
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal y={-12} duration={0.4} delay={0.4}>
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Ganti ke mode terang' : 'Ganti ke mode gelap'}
            className="flex items-center gap-1 rounded-full border border-line bg-card p-1.5 dark:border-line-dark dark:bg-card-dark"
          >
            <span className={`rounded-full p-1 ${!isDark ? 'bg-paper' : ''}`}>
              <Sun size={16} className="text-ink dark:text-muted-dark" />
            </span>
            <span className={`rounded-full p-1 ${isDark ? 'bg-paper-dark' : ''}`}>
              <Moon size={16} className="text-muted dark:text-ink-dark" />
            </span>
          </button>
        </Reveal>
      </nav>

      {/* Navigasi versi mobile */}
      <ul className="flex flex-wrap justify-center gap-2 border-t border-line px-4 pb-3 pt-3 text-sm font-medium dark:border-line-dark sm:hidden">
        {navLinks.map((link, i) => (
          <li key={link.href}>
            <Reveal y={8} duration={0.35} delay={0.1 + i * 0.06}>
              <a href={link.href} className={linkClass(link.href, { mobile: true })}>
                {link.label}
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </header>
  )
}