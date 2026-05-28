import { EXTRAS } from '../proposalData'
import { useLightbox } from '../App'

export default function Extras() {
  const open = useLightbox()
  return (
    <div>
      <div style={{ marginBottom: 26 }}>
        <div className="eyebrow">Fittings & Equipment</div>
        <h2 className="serif" style={{ fontSize: 32, margin: '8px 0' }}>
          {EXTRAS.heading}
        </h2>
        <p style={{ color: 'var(--cream-dim)', maxWidth: 720 }}>{EXTRAS.intro}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18 }}>
        {EXTRAS.items.map((x) => (
          <figure key={x.title} className="card" onClick={() => open(x.img)} style={{ cursor: 'zoom-in' }}>
            <img src={x.img} alt={x.title} style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover' }} />
            <figcaption style={{ padding: '16px 18px' }}>
              <h3 className="serif" style={{ fontSize: 19, color: 'var(--gold-light)' }}>
                {x.title}
              </h3>
              <p style={{ fontSize: 12, color: 'var(--gold)', margin: '4px 0 8px', letterSpacing: '0.04em' }}>
                {x.caption}
              </p>
              <p style={{ fontSize: 14, color: 'var(--cream-dim)' }}>{x.detail}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
