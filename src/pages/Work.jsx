import { useState, useMemo } from 'react'
import { projects, tracks } from '../data/projects'
import FilterTabs from '../components/Projects/FilterTabs'
import ProjectCard from '../components/Projects/ProjectCard'
import ProjectModal from '../components/Projects/ProjectModal'
import CallToAction from '../components/CallToAction'
import Reveal from '../components/Reveal'

export default function Work() {
  const [activeTrack, setActiveTrack] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null) // proyek yang lagi dibuka di modal

  // Saring proyek sesuai tab yang aktif
  const filteredProjects = useMemo(() => {
    if (activeTrack === 'all') return projects
    return projects.filter((p) => p.track.includes(activeTrack))
  }, [activeTrack])

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl font-bold text-ink dark:text-ink-dark">
            Projects
          </h1>
          <p className="mt-2 max-w-lg text-sm text-muted dark:text-muted-dark">
            A collection of projects showcasing business analysis, system design, and data-driven solutions
          </p>
        </div>
        <FilterTabs tracks={tracks} active={activeTrack} onChange={setActiveTrack} />
      </Reveal>

      <hr className="my-6 border-line dark:border-line-dark" />

      <div className="grid gap-6 sm:grid-cols-2">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, i) => (
            // Efek hover (lift + zoom gambar + highlight teks) dipasang
            // langsung di ProjectCard, bukan di sini — karena Reveal ini
            // motion.div yang juga ngatur `transform` buat animasi muncul,
            // jadi kalau hover:-translate-y-1 dipasang di sini, dia ketimpa
            // sama inline style dari Framer Motion dan gak akan kelihatan.
            <Reveal key={project.title} delay={i * 0.1}>
              <ProjectCard project={project} onOpen={setSelectedProject} />
            </Reveal>
          ))
        ) : (
          <p className="col-span-2 py-12 text-center text-sm text-muted dark:text-muted-dark">
            Belum ada proyek untuk kategori ini.
          </p>
        )}
      </div>

      <div className="mt-12">
        <CallToAction />
      </div>

      {/* Modal detail proyek, cuma tampil kalau ada proyek yang dipilih */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}