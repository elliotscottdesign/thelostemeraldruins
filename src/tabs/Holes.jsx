import { HOLES, RENDER_NOTE } from '../proposalData'
import { useLightbox } from '../App'

export default function Holes() {
  const open = useLightbox()
  return (
    <div>
      <div style={{ marginBottom: 26 }}>
        <div className="eyebrow">The Course</div>
        <h2 className="serif" style={{ fontSize: 32, margin: '8px 0' }}>
          {HOLES.heading}
        </h2>
        <p style={{ color: 'var(--cream-dim)', maxWidth: 720 }}>{HOLES.intro}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 18 }}>
        {HOLES.items.map((h) => (
          <figure key={h.n} className="card" onClick={() => open(h.img)} style={{ cursor: 'zoom-in' }}>
            <div style={{ position: 'relative' }}>
              <img src={h.img} alt={`Hole ${h.n}`} style={{ width: '100%' }} />
              <span
                className="serif"
                style={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  background: 'rgba(4,17,11,0.78)',
                  color: 'var(--gold-light)',
                  border: '1px solid var(--line)',
                  borderRadius: 8,
                  padding: '4px 12px',
                  fontSize: 14,
                  letterSpacing: '0.1em',
                }}
              >
                Hole {h.n}
              </span>
            </div>
          </figure>
        ))}
      </div>

      <p style={{ fontSize: 11.5, color: 'var(--cream-dim)', marginTop: 20, fontStyle: 'italic', textAlign: 'center' }}>
        {RENDER_NOTE}
      </p>
    </div>
  )
}
