import { useState } from 'react'
import { ACCESS_CODE, PROPOSAL, LANDING_IMAGE } from './proposalData'

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
        position: 'fixed',
        inset: 0,
        background: 'var(--ink)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Centered landing image */}
      <img
        src={LANDING_IMAGE}
        alt=""
        aria-hidden
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
        }}
      />

      {/* Form card, floated in the middle of the page */}
      <form
        onSubmit={submit}
        className="fade-up"
        style={{
          position: 'relative',
          zIndex: 1,
          width: 'min(360px, 88vw)',
          padding: '26px 26px 24px',
          background: 'rgba(8, 16, 12, 0.82)',
          backdropFilter: 'blur(8px)',
          border: '1px solid var(--line)',
          borderRadius: 14,
          textAlign: 'center',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.55)',
        }}
      >
        <div className="eyebrow" style={{ marginBottom: 8 }}>
          Wacky Works · Private Proposal
        </div>
        <div className="serif" style={{ fontSize: 18, color: 'var(--gold-light)', marginBottom: 18 }}>
          {PROPOSAL.title}
        </div>

        <label
          htmlFor="access-code"
          style={{ display: 'block', fontSize: 12, color: 'var(--cream-dim)', marginBottom: 10 }}
        >
          Enter your access code
        </label>
        <input
          id="access-code"
          autoFocus
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setError(false)
          }}
          placeholder="Access code"
          style={{
            width: '100%',
            padding: '13px 14px',
            fontSize: 15,
            letterSpacing: '0.18em',
            textAlign: 'center',
            textTransform: 'uppercase',
            background: 'var(--ink-2)',
            border: `1px solid ${error ? '#c2533f' : 'var(--line)'}`,
            borderRadius: 10,
            color: 'var(--cream)',
            outline: 'none',
            fontFamily: 'inherit',
          }}
        />
        {error && (
          <div style={{ color: '#e0876f', fontSize: 12.5, marginTop: 8 }}>
            That code didn’t match. Please try again.
          </div>
        )}
        <button
          type="submit"
          style={{
            width: '100%',
            marginTop: 14,
            padding: '13px 14px',
            fontSize: 13,
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

        <div style={{ marginTop: 16, fontSize: 11, color: 'var(--cream-dim)' }}>
          {PROPOSAL.client}
        </div>
      </form>
    </div>
  )
}
