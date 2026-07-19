// Filter berbentuk pill (kapsul) — tab aktif berwarna navy solid,
// sisanya abu-abu lembut. Gaya ini yang dipakai di seluruh halaman Work.

export default function FilterTabs({ tracks, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter proyek berdasarkan bidang">
      {tracks.map((track) => {
        const isActive = active === track.key
        return (
          <button
            key={track.key}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(track.key)}
            className={[
              'rounded-full px-4 py-2 text-sm font-medium transition-colors',
              isActive
                ? 'bg-navy text-white'
                : 'bg-line text-muted hover:text-ink dark:bg-line-dark dark:text-muted-dark dark:hover:text-ink-dark',
            ].join(' ')}
          >
            {track.label}
          </button>
        )
      })}
    </div>
  )
}
