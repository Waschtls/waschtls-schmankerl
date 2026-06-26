'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

// ─── Tracking-IDs (hier eintragen wenn aktiv) ───────────────────────────────
// Google Analytics 4:  G-XXXXXXXXXX
// Google Ads:          AW-XXXXXXXXX
const GA_ID  = 'G-XXXXXXXXXX';   // TODO: echte ID eintragen
const ADS_ID = 'AW-XXXXXXXXX';   // TODO: echte ID eintragen
// ─────────────────────────────────────────────────────────────────────────────

type Consent = 'all' | 'necessary' | null;
const STORAGE_KEY = 'ws_cookie_consent';

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Consent;
    if (stored === 'all' || stored === 'necessary') {
      setConsent(stored);
    } else {
      // Kurze Verzögerung damit das Layout erst steht
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'all');
    setConsent('all');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'necessary');
    setConsent('necessary');
    setVisible(false);
  }

  function reopen() {
    setVisible(true);
  }

  // Google-Skripte nur laden wenn Zustimmung vorliegt
  const loadGoogle = consent === 'all'
    && GA_ID !== 'G-XXXXXXXXXX'   // nur wenn echte ID eingetragen
    && ADS_ID !== 'AW-XXXXXXXXX';

  return (
    <>
      {/* ── Google Scripts (nur bei Einwilligung) ── */}
      {loadGoogle && (
        <>
          <Script
            id="gtag-js"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script id="gtag-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { anonymize_ip: true });
            gtag('config', '${ADS_ID}');
          `}</Script>
        </>
      )}

      {/* ── Cookie-Banner ── */}
      {visible && (
        <div
          role="dialog"
          aria-label="Cookie-Einstellungen"
          style={{
            position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000,
            background: 'var(--green-deep)',
            borderTop: '3px solid var(--golden)',
            padding: '1rem 0',
            boxShadow: '0 -4px 24px rgba(0,0,0,0.25)',
          }}
        >
          <div className="container" style={{
            display: 'flex', alignItems: 'center', gap: '1.25rem',
            flexWrap: 'wrap', justifyContent: 'space-between',
          }}>
            <p style={{
              margin: 0, flex: '1 1 300px',
              fontSize: '0.875rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.7,
            }}>
              Wir nutzen Cookies für Werbung (Google Ads) und Analyse (Google Analytics) –
              nur mit deiner Zustimmung.{' '}
              <a href="/datenschutz" style={{ color: 'var(--mint)', textDecoration: 'underline' }}>
                Datenschutz
              </a>
            </p>
            <div style={{ display: 'flex', gap: '0.625rem', flexShrink: 0, flexWrap: 'wrap' }}>
              <button
                onClick={decline}
                style={{
                  padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer',
                  background: 'transparent', border: '1.5px solid rgba(255,255,255,0.35)',
                  color: 'rgba(255,255,255,0.75)', fontSize: '0.8rem', fontWeight: 600,
                }}
              >
                Nur notwendige
              </button>
              <button
                onClick={accept}
                style={{
                  padding: '0.5rem 1.125rem', borderRadius: '6px', cursor: 'pointer',
                  background: 'var(--golden)', border: 'none',
                  color: 'var(--green-deep)', fontSize: '0.8rem', fontWeight: 700,
                }}
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Kleiner "Cookie-Einstellungen"-Button im Footer-Bereich ── */}
      {!visible && consent !== null && (
        <button
          onClick={reopen}
          aria-label="Cookie-Einstellungen öffnen"
          style={{
            position: 'fixed', bottom: '1rem', left: '1rem', zIndex: 999,
            background: 'var(--green-deep)', border: '1px solid rgba(149,213,178,0.3)',
            borderRadius: '999px', padding: '0.375rem 0.75rem',
            fontSize: '0.7rem', color: 'var(--mint)', cursor: 'pointer',
            opacity: 0.7,
          }}
        >
          🍪 Cookies
        </button>
      )}
    </>
  );
}
