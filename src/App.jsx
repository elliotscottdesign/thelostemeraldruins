import { useState, useEffect, createContext, useContext } from 'react'
import { X } from 'lucide-react'
import CodeGate, { isUnlocked } from './CodeGate'
import { TABS, PROPOSAL } from './proposalData'
import Intro from './tabs/Intro'
import Venue from './tabs/Venue'
import Holes from './tabs/Holes'
import Extras from './tabs/Extras'
import Theme from './tabs/Theme'
import Costs from './tabs/Costs'
import Timeline from './tabs/Timeline'

const tabComponents = {
  intro: Intro,
  venue: Venue,
  holes: Holes,
  extras: Extras,
  theme: Theme,
  costs: Costs,
  timeline: Timeline,
}

// ── Lightbox context: any image can open a full-screen view ──
const LightboxContext = createContext(() => {})
export const useLightbox = () => useContext(LightboxContext)

export default function App() {
  const [unlocked, setUnlocked] = useState(isUnlocked())
  const [active, setActive] = useState('intro')
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setLightbox(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!unlocked) return <CodeGate onUnlock={() => setUnlocked(true)} />

  const Active = tabComponents[active]

  return (
    <LightboxContext.Provider value={setLightbox}>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header active={active} setActive={setActive} />

        <main style={{ flex: 1, width: '100%', maxWidth: 1180, margin: '0 auto', padding: '32px 20px 80px' }}>
          <div key={active} className="fade-up">
            <Active />
          </div>
        </main>

        <Footer />
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(4, 10, 7, 0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            zIndex: 100,
            cursor: 'zoom-out',
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: 18,
              right: 18,
              background: 'transparent',
              border: 'none',
              color: 'var(--cream)',
            }}
          >
            <X size={28} />
          </button>
          <img
            src={lightbox}
            alt=""
            style={{ maxWidth: '100%', maxHeight: '92vh', borderRadius: 8, boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
          />
        </div>
      )}
    </LightboxContext.Provider>
  )
}

function Header({ active, setActive }) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'rgba(12, 20, 16, 0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, minWidth: 0 }}>
          <span className="serif" style={{ fontSize: 18, color: 'var(--cream)', whiteSpace: 'nowrap' }}>
            {PROPOSAL.title}
          </span>
          <span style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            {PROPOSAL.version}
          </span>
        </div>
        <span style={{ fontSize: 11, color: 'var(--cream-dim)', whiteSpace: 'nowrap' }}>Wacky Works Ltd</span>
      </div>

      <nav
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '0 12px',
          display: 'flex',
          gap: 4,
          overflowX: 'auto',
        }}
      >
        {TABS.map((t) => {
          const on = t.id === active
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className="tab-label"
              style={{
                background: 'transparent',
                border: 'none',
                color: on ? 'var(--gold-light)' : 'var(--cream-dim)',
                padding: '12px 14px',
                borderBottom: `2px solid ${on ? 'var(--gold)' : 'transparent'}`,
                whiteSpace: 'nowrap',
                transition: 'color 0.2s',
              }}
            >
              {t.label}
            </button>
          )
        })}
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: '22px 20px', textAlign: 'center' }}>
      <span className="serif" style={{ color: 'var(--gold)', fontSize: 14, letterSpacing: '0.06em' }}>
        Adventure Lies Within
      </span>
      <div style={{ fontSize: 11, color: 'var(--cream-dim)', marginTop: 6 }}>
        {PROPOSAL.client} · Confidential proposal
      </div>
    </footer>
  )
}
