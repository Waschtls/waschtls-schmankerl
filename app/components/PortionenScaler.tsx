'use client';

import { useState } from 'react';

type Props = {
  portionen: number | string;
  zutaten: string[];
};

// Skaliert eine Zutatenzeile anhand eines Faktors.
// Erkennt Zahlen am Zeilenanfang (z.B. "800 g", "3 Eier", "2,5 EL").
function scaleIngredient(text: string, factor: number): string {
  if (factor === 1) return text;
  // Abschnitts-Trenner und optionale Hinweise unverändert lassen
  if (text.startsWith('—') || text.startsWith('(')) return text;

  return text.replace(
    /^(\d+(?:[,\.]\d+)?)/,
    (_match, num) => {
      const val = parseFloat(num.replace(',', '.'));
      const scaled = val * factor;
      // Auf halbe Einheiten runden (0.5er-Schritte)
      const rounded = Math.round(scaled * 2) / 2;
      if (rounded === Math.floor(rounded)) return String(Math.floor(rounded));
      return String(rounded).replace('.', ',');
    }
  );
}

export default function PortionenScaler({ portionen, zutaten }: Props) {
  const isNumeric = typeof portionen === 'number';
  const base = isNumeric ? (portionen as number) : 1;
  const [count, setCount] = useState(base);
  const factor = count / base;

  const scaled = zutaten.map(z => scaleIngredient(z, factor));

  return (
    <div>
      {/* Portionen-Steuerung – nur bei numerischen Portionen */}
      {isNumeric && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          marginBottom: '1.25rem',
          padding: '0.6rem 0.9rem',
          background: 'var(--cream)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          width: 'fit-content',
        }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-mid)', marginRight: '0.25rem' }}>
            Portionen:
          </span>
          <button
            onClick={() => setCount(c => Math.max(1, c - 1))}
            aria-label="Weniger Portionen"
            style={{
              width: 28, height: 28, borderRadius: '50%',
              background: 'var(--green-deep)', color: 'var(--golden)',
              border: 'none', cursor: 'pointer',
              fontWeight: 800, fontSize: '1rem', lineHeight: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >−</button>
          <span style={{
            minWidth: '1.75rem', textAlign: 'center',
            fontWeight: 800, fontSize: '1.05rem', color: 'var(--green-deep)',
          }}>{count}</span>
          <button
            onClick={() => setCount(c => Math.min(c + 1, base * 4))}
            aria-label="Mehr Portionen"
            style={{
              width: 28, height: 28, borderRadius: '50%',
              background: 'var(--green-deep)', color: 'var(--golden)',
              border: 'none', cursor: 'pointer',
              fontWeight: 800, fontSize: '1rem', lineHeight: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >+</button>
          {factor !== 1 && (
            <button
              onClick={() => setCount(base)}
              style={{
                marginLeft: '0.25rem', fontSize: '0.72rem', color: 'var(--text-light)',
                background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline',
              }}
            >
              zurücksetzen
            </button>
          )}
        </div>
      )}

      {/* Zutaten-Liste */}
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
        {scaled.map((z, i) => (
          <li key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: '0.65rem',
            fontSize: '0.88rem', color: 'var(--text-dark)', lineHeight: 1.55,
          }}>
            {z.startsWith('—') ? (
              // Abschnitts-Trenner
              <span style={{
                width: '100%', fontWeight: 700, fontSize: '0.75rem',
                color: 'var(--text-light)', letterSpacing: '0.05em',
                textTransform: 'uppercase', paddingTop: '0.5rem',
                borderTop: '1px solid var(--border)', marginTop: '0.25rem',
              }}>
                {z.replace(/^—\s*/, '')}
              </span>
            ) : (
              <>
                <span style={{
                  flexShrink: 0, width: '16px', height: '16px',
                  marginTop: '0.18rem', borderRadius: '4px',
                  background: 'rgba(149,213,178,0.2)',
                  border: '1.5px solid var(--mint)',
                  display: 'inline-block',
                }} />
                {z}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
