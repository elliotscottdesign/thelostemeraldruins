import { COSTS } from '../proposalData'
import { useLightbox } from '../App'

const fmt = (n) => COSTS.currency + n.toLocaleString('en-GB')

export default function Costs() {
  const open = useLightbox()
  const total = COSTS.lineItems.reduce((s, l) => s + l.amount, 0)

  return (
    <div>
      <div style={{ marginBottom: 26 }}>
        <div className="eyebrow">Investment</div>
        <h2 className="serif" style={{ fontSize: 32, margin: '8px 0' }}>
          {COSTS.heading}
        </h2>
        <p style={{ color: 'var(--cream-dim)', maxWidth: 720 }}>{COSTS.intro}</p>
      </div>

      <div className="card" style={{ padding: '8px 0', marginBottom: 22 }}>
        {COSTS.lineItems.map((l) => (
          <div
            key={l.item}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: 16,
              padding: '14px 20px',
              borderBottom: '1px solid var(--line)',
            }}
          >
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 16, color: 'var(--cream)' }}>{l.item}</div>
              <div style={{ fontSize: 12.5, color: 'var(--cream-dim)' }}>{l.note}</div>
            </div>
            <div className="serif" style={{ fontSize: 18, color: 'var(--gold-light)', whiteSpace: 'nowrap' }}>
              {fmt(l.amount)}
            </div>
          </div>
        ))}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            padding: '18px 20px',
          }}
        >
          <div style={{ fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            Total
          </div>
          <div className="serif" style={{ fontSize: 26, color: 'var(--cream)' }}>
            {fmt(total)} <span style={{ fontSize: 13, color: 'var(--cream-dim)' }}>+ VAT</span>
          </div>
        </div>
      </div>

      <ul style={{ listStyle: 'none', display: 'grid', gap: 10, marginBottom: 28 }}>
        {COSTS.scopeNotes.map((n) => (
          <li key={n} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--cream-dim)' }}>
            <span style={{ color: 'var(--emerald-light)', flexShrink: 0 }}>◆</span>
            {n}
          </li>
        ))}
      </ul>

      <figure className="card" onClick={() => open(COSTS.reference)} style={{ cursor: 'zoom-in' }}>
        <img src={COSTS.reference} alt="Original price breakdown page" style={{ width: '100%' }} />
        <figcaption style={{ padding: '12px 16px', fontSize: 12, color: 'var(--cream-dim)' }}>
          Original price-breakdown page from the deck.
        </figcaption>
      </figure>
    </div>
  )
}
