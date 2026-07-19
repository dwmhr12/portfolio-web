import { useEffect, useState } from 'react'

// Hook kecil buat ngatur dark mode: nyimpen pilihan user di localStorage
// biar tetap kepakai walau halaman di-refresh.
export function useTheme() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return { isDark, toggleTheme: () => setIsDark((prev) => !prev) }
}
