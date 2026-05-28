import { THEME } from '../proposalData'
import { useLightbox } from '../App'

export default function Theme() {
  const open = useLightbox()
  return (
    <div>
      <div style={{ marginBottom: 26 }}>
        <div className="eyebrow">Look & Feel</div>
        <h2 className="serif" style={{ fontSize: 32, margin: '8px 0' }}>
          {THEME.heading}
        </h2>
        <p style={{ color: 'var(--cream-dim)', maxWidth: 720 }}>{THEME.intro}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18 }}>
        {THEME.items.map((t) => (
          <figure key={t.caption} className="card" onClick={() => open(t.img)} style={{ cursor: 'zoom-in' }}>
            <img src={t.img} alt={t.caption} style={{ width: '100%' }} />
            <figcaption style={{ padding: '12px 16px', fontSize: 13, color: 'var(--cream-dim)' }}>
              {t.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
