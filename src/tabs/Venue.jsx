import { VENUE } from '../proposalData'
import { useLightbox } from '../App'

export default function Venue() {
  const open = useLightbox()
  return (
    <div>
      <div style={{ marginBottom: 26 }}>
        <div className="eyebrow">The Site</div>
        <h2 className="serif" style={{ fontSize: 32, margin: '8px 0' }}>
          {VENUE.heading}
        </h2>
        <p style={{ color: 'var(--cream-dim)', maxWidth: 720 }}>{VENUE.intro}</p>
      </div>

      <figure
        className="card"
        onClick={() => open(VENUE.plan)}
        style={{ cursor: 'zoom-in' }}
      >
        <img src={VENUE.plan} alt="Floor plan / new layout" style={{ width: '100%' }} />
        <figcaption style={{ padding: '12px 16px', fontSize: 13, color: 'var(--cream-dim)' }}>
          New layout — full guest journey through the ruins.
        </figcaption>
      </figure>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 16 }}>
        {VENUE.gallery.map((src) => (
          <figure key={src} className="card" onClick={() => open(src)} style={{ cursor: 'zoom-in' }}>
            <img src={src} alt="" style={{ width: '100%' }} />
          </figure>
        ))}
      </div>
    </div>
  )
}
