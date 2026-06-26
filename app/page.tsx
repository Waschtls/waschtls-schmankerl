import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Waschtl's Schmankerl – Glutenfreie Rezepte aus Augsburg",
  description:
    'Glutenfreie Rezepte und ehrliche Alltagstipps von einer Augsburger Familie mit Zöliakie. Echter Alltag, echte Küche – bayerisch, bodenständig, ohne Gluten.',
};

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: 'var(--green-deep)', padding: '3.5rem 0 3rem' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <span style={{
            display: 'inline-block', marginBottom: '1rem',
            fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.07em',
            textTransform: 'uppercase', color: 'var(--mint)',
          }}>
            Eine Familie. Eine Diagnose. Kein Drama.
          </span>
          <h1 style={{
            color: 'var(--golden)',
            fontSize: 'clamp(1.75rem, 4vw, 2.6rem)',
            lineHeight: 1.2, marginBottom: '1rem',
          }}>
            Alles über das glutenfreie Leben mit Kindern.
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.72)',
            fontSize: '1rem', lineHeight: 1.8,
            marginBottom: '2rem', maxWidth: '460px',
          }}>
            Küche, Kita, Urlaub, Alltag. Tipps von einer Familie, die es selbst tagtäglich lebt.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link href="/rezepte" className="btn btn-golden">
              Alle Rezepte →
            </Link>
            <Link href="/wochenplan" className="btn btn-outline"
              style={{ borderColor: 'var(--mint)', color: 'var(--mint)' }}>
              Speiseplan →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Für wen ist diese Website? ── */}
      <section style={{ background: 'var(--cream)', padding: '2.5rem 0 2rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '0.85rem',
          }}>
            {[
              {
                icon: '🆘',
                titel: 'Gerade diagnostiziert?',
                text: 'Was jetzt sofort zu tun ist – Schritt für Schritt.',
                href: '/wissen/erstdiagnose',
              },
              {
                icon: '🏫',
                titel: 'Kind in Kita oder Schule',
                text: 'Musterbrief, Checkliste und Tipps für Geburtstage.',
                href: '/wissen/schule-kita',
              },
              {
                icon: '🍳',
                titel: 'Glutenfrei kochen',
                text: 'Echte Rezepte, die bei uns täglich auf den Tisch kommen.',
                href: '/rezepte',
              },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '1.1rem 1.2rem',
                  background: '#fff',
                  border: '1.5px solid var(--border)',
                  borderRadius: '10px',
                  height: '100%',
                  transition: 'border-color 0.15s',
                }}>
                  <div style={{ fontSize: '1.4rem', marginBottom: '0.45rem' }}>{item.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--green-deep)', marginBottom: '0.3rem' }}>
                    {item.titel}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-mid)', lineHeight: 1.55 }}>
                    {item.text}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Was du hier findest ── */}
      <section style={{ background: '#fff', padding: '2.5rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <p style={{
            fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.07em',
            textTransform: 'uppercase', color: 'var(--green-mid)',
            marginBottom: '1.1rem', margin: '0 0 1.1rem',
          }}>
            Was du hier findest
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.25rem',
          }}>
            {[
              { icon: '🍳', titel: 'Rezepte', text: 'Alltagsrezepte die funktionieren – vom Schnellessen bis zum Geburtstagskuchen.' },
              { icon: '📚', titel: 'Wissen', text: 'Von der Erstdiagnose bis zur Kita – verständlich erklärt, kein Fachjargon.' },
              { icon: '🧳', titel: 'Unterwegs', text: 'Restaurants, Bäckereien und was wir auf Reisen immer einpacken.' },
              { icon: '📅', titel: 'Speiseplan', text: 'Kein tägliches Grübeln mehr – ein Wochenplan aus unseren Rezepten.' },
            ].map(item => (
              <div key={item.titel} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.4rem', flexShrink: 0, marginTop: '0.1rem' }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--green-deep)', marginBottom: '0.25rem' }}>{item.titel}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story-Zeile ── */}
      <section style={{
        background: 'var(--cream-dark)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '1.5rem 0',
      }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '2.25rem', flexShrink: 0 }}>👨‍👦</span>
            <p style={{ flex: 1, minWidth: '200px', margin: 0, fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
              Wie kochen wir jetzt? Was passiert im Kindergarten? Wie gehen wir ins Restaurant? Diese Fragen haben wir uns gestellt – und stellen sie uns zum Teil immer noch. Aber wir bekommen immer mehr Routine.
            </p>
            <Link href="/ueber-uns" style={{
              flexShrink: 0, fontSize: '0.85rem',
              color: 'var(--green-mid)', fontWeight: 700,
            }}>
              Über uns →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
