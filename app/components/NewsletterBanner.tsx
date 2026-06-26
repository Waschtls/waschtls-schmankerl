// Newsletter vorübergehend deaktiviert – Formspree-ID noch nicht eingetragen.
// Wieder aktivieren: FORMSPREE_ID eintragen und 'return null' entfernen.
export default function NewsletterBanner() { return null; }

/*
'use client';

import { useState } from 'react';

// Newsletter-Banner mit Formspree-Integration.
// Formspree-Endpoint eintragen unter: https://formspree.io (kostenloser Plan reicht)
// Dann FORMSPREE_ID unten ersetzen.

const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'; // z.B. "xpwzabcd"

export default function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="newsletter-banner" style={bannerStyle}>
        <div className="container" style={{ maxWidth: '680px', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎉</div>
          <p style={{ color: 'var(--golden)', fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>
            Danke! Du bist dabei.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: '0.35rem 0 0' }}>
            Wir melden uns, wenn es neue Rezepte gibt.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="newsletter-banner" style={bannerStyle}>
      <div className="container" style={{ maxWidth: '680px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem', justifyContent: 'space-between' }}>
          {/* Text */}
          <div style={{ flex: '1 1 260px' }}>
            <p style={{
              color: 'var(--golden)', fontWeight: 700, fontSize: '1rem',
              margin: '0 0 0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem',
            }}>
              🌾 Neue Rezepte per E-Mail
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', margin: 0, lineHeight: 1.5 }}>
              Kein Spam. Nur neue glutenfreie Rezepte – direkt aus unserer Küche.
            </p>
          </div>

          {/* Formular */}
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', gap: '0.5rem', flex: '1 1 280px', flexWrap: 'wrap' }}
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="deine@email.de"
              required
              disabled={status === 'loading'}
              style={{
                flex: 1, minWidth: '180px',
                padding: '0.55rem 0.9rem', borderRadius: '8px',
                border: '1.5px solid rgba(233,196,106,0.4)',
                background: 'rgba(255,255,255,0.08)',
                color: '#fff', fontSize: '0.875rem',
                outline: 'none', fontFamily: 'inherit',
              }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                padding: '0.55rem 1.2rem', borderRadius: '8px',
                background: 'var(--golden)', color: 'var(--green-deep)',
                border: 'none', fontWeight: 700, fontSize: '0.875rem',
                cursor: 'pointer', fontFamily: 'inherit',
                whiteSpace: 'nowrap', flexShrink: 0,
              }}
            >
              {status === 'loading' ? '…' : 'Anmelden'}
            </button>
          </form>
        </div>

        {status === 'error' && (
          <p style={{ color: 'var(--terracotta)', fontSize: '0.8rem', margin: '0.5rem 0 0' }}>
            Etwas ist schiefgelaufen. Bitte versuche es später noch einmal.
          </p>
        )}

        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', margin: '0.75rem 0 0' }}>
          Mit der Anmeldung stimmst du unserer{' '}
          <a href="/datenschutz" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline' }}>Datenschutzerklärung</a>{' '}
          zu. Jederzeit abmeldbar.
        </p>
      </div>
    </div>
  );
}

const bannerStyle: React.CSSProperties = {
  background: 'var(--green-deep)',
  borderTop: '3px solid var(--golden)',
  padding: '2rem 0',
};

*/
