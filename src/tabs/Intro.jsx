import { INTRO } from '../proposalData'
import { useLightbox } from '../App'

export default function Intro() {
  const open = useLightbox()
  return (
    <div>
      <figure
        onClick={() => open(INTRO.hero)}
        style={{ cursor: 'zoom-in', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--line)' }}
      >
        <img src={INTRO.hero} alt="The Lost Emerald Ruins" style={{ width: '100%' }} />
      </figure>

      <div style={{ textAlign: 'center', margin: '40px 0 28px' }}>
        <div className="eyebrow">An Immersive Adventure Golf Experience</div>
        <h1 className="serif" style={{ fontSize: 40, lineHeight: 1.05, margin: '14px 0 8px' }}>
          {INTRO.heading}
        </h1>
        <p style={{ color: 'var(--gold-light)', fontStyle: 'italic', letterSpacing: '0.05em' }}>{INTRO.tagline}</p>
      </div>

      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        {INTRO.body.split('\n\n').map((p, i) => (
          <p key={i} style={{ color: 'var(--cream)', opacity: 0.92, marginBottom: 16, fontSize: 16.5 }}>
            {p}
          </p>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 36 }}>
        {INTRO.gallery.map((src) => (
          <figure
            key={src}
            className="card"
            onClick={() => open(src)}
            style={{ cursor: 'zoom-in' }}
          >
            <img src={src} alt="" style={{ width: '100%' }} />
          </figure>
        ))}
      </div>
    </div>
  )
}
