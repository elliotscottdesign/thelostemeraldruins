import { useState } from 'react'
import { ACCESS_CODE, PROPOSAL } from './proposalData'

const STORAGE_KEY = 'wwp_unlocked'

export function isUnlocked() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === ACCESS_CODE
  } catch {
    return false
  }
}

export default function CodeGate({ onUnlock }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (value.trim().toUpperCase() === ACCESS_CODE.toUpperCase()) {
      try {
        sessionStorage.setItem(STORAGE_KEY, ACCESS_CODE)
      } catch {}
      onUnlock()
    } else {
      setError(true)
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        background:
          'radial-gradient(120% 90% at 50% 0%, #16302440 0%, var(--ink) 55%)',
      }}
    >
      <div className="fade-up" style={{ width: '100%', maxWidth: 420, textAlign: 'center' }}>
        <div className="eyebrow" style={{ marginBottom: 18 }}>
          Wacky Works · Private Proposal
        </div>
        <h1 className="serif" style={{ fontSize: 34, lineHeight: 1.1, color: 'var(--cream)' }}>
          {PROPOSAL.title}
        </h1>
        <p style={{ color: 'var(--gold-light)', fontStyle: 'italic', marginTop: 10, letterSpacing: '0.04em' }}>
          {PROPOSAL.tagline}
        </p>

        <hr className="gold-rule" style={{ margin: '28px 0' }} />

        <form onSubmit={submit}>
          <label style={{ display: 'block', fontSize: 13, color: 'var(--cream-dim)', marginBottom: 10 }}>
            Enter your access code to view this proposal
          </label>
          <input
            autoFocus
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
              setError(false)
            }}
            placeholder="Access code"
            style={{
              width: '100%',
              padding: '14px 16px',
              fontSize: 16,
              letterSpacing: '0.18em',
              textAlign: 'center',
              textTransform: 'uppercase',
              background: 'var(--ink-2)',
              border: `1px solid ${error ? '#c2533f' : 'var(--line)'}`,
              borderRadius: 10,
              color: 'var(--cream)',
              outline: 'none',
            }}
          />
          {error && (
            <div style={{ color: '#e0876f', fontSize: 13, marginTop: 10 }}>
              That code didn’t match. Please try again.
            </div>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              marginTop: 16,
              padding: '14px 16px',
              fontSize: 14,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              background: 'var(--emerald)',
              color: '#04110b',
              border: 'none',
              borderRadius: 10,
              fontWeight: 600,
            }}
          >
            Unlock Proposal
          </button>
        </form>

        <div style={{ marginTop: 26, fontSize: 12, color: 'var(--cream-dim)' }}>
          {PROPOSAL.client}
        </div>
      </div>
    </div>
  )
}
