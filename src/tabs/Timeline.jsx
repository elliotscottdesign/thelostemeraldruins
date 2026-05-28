import { TIMELINE } from '../proposalData'

const fmt = (n) => '£' + n.toLocaleString('en-GB')

export default function Timeline() {
  return (
    <div>
      <div style={{ marginBottom: 30 }}>
        <div className="eyebrow">Schedule</div>
        <h2 className="serif" style={{ fontSize: 32, margin: '8px 0' }}>
          {TIMELINE.heading}
        </h2>
        <p style={{ color: 'var(--cream-dim)', maxWidth: 720 }}>{TIMELINE.intro}</p>
      </div>

      <div style={{ position: 'relative', paddingLeft: 8 }}>
        {TIMELINE.tranches.map((t, i) => (
          <div key={t.n} style={{ display: 'flex', gap: 18, paddingBottom: i === TIMELINE.tranches.length - 1 ? 0 : 26 }}>
            {/* rail + node */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                className="serif"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'var(--emerald-dim)',
                  border: '1px solid var(--emerald)',
                  color: 'var(--gold-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  flexShrink: 0,
                }}
              >
                {t.n}
              </div>
              {i !== TIMELINE.tranches.length - 1 && (
                <div style={{ width: 2, flex: 1, background: 'var(--line)', marginTop: 6 }} />
              )}
            </div>

            <div className="card" style={{ flex: 1, padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                  Tranche {t.n} · {t.pct}%
                </div>
                <div style={{ fontSize: 17, color: 'var(--cream)', marginTop: 2 }}>{t.label}</div>
                <div style={{ fontSize: 13, color: 'var(--cream-dim)', marginTop: 2 }}>{t.date}</div>
              </div>
              <div className="serif" style={{ fontSize: 20, color: 'var(--gold-light)', whiteSpace: 'nowrap' }}>
                {fmt(t.amount)} <span style={{ fontSize: 12, color: 'var(--cream-dim)' }}>+ VAT</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 13, color: 'var(--cream-dim)', marginTop: 24, fontStyle: 'italic', textAlign: 'center' }}>
        {TIMELINE.footnote}
      </p>
    </div>
  )
}
