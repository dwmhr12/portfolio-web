import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Work from './pages/Work'
import Blog from './pages/Blog'

// Home, About, Resume, Work tetap ditumpuk jadi satu halaman yang
// dinavigasi dengan scroll + anchor (#home, #about, dst).
//
// Blog beda: dia BUKAN bagian dari tumpukan scroll itu. Blog hanya
// muncul kalau hash URL persis '#blog' (artinya link "Blog" di Navbar
// diklik). Selain itu, tampilan yang jalan adalah tumpukan scroll biasa.
// Efeknya: Blog nggak akan pernah "kelewat scroll" gara-gara section lain
// (misalnya CTA di Work.jsx), karena dia memang bukan bagian dari urutan itu.
function App() {
  const [showBlog, setShowBlog] = useState(
    () => window.location.hash === '#blog'
  )

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      setShowBlog(hash === '#blog')

      if (hash === '#blog') {
        window.scrollTo({ top: 0 })
      } else if (hash) {
        // beri waktu section-nya muncul dulu (setelah showBlog jadi false)
        requestAnimationFrame(() => {
          const el = document.getElementById(hash.slice(1))
          el?.scrollIntoView({ behavior: 'smooth' })
        })
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="min-h-screen bg-paper dark:bg-paper-dark">
      <Navbar />
      <main>
        {showBlog ? (
          <Blog />
        ) : (
          <>
            <section id="home">
              <Home />
            </section>
            <section id="about" className="scroll-mt-20">
              <About />
            </section>
            <section id="resume" className="scroll-mt-20">
              <Resume />
            </section>
            <section id="work" className="scroll-mt-20">
              <Work />
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App