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
            <Link href="/wissen/erstdiagnose" className="btn btn-outline"
              style={{ borderColor: 'var(--mint)', color: 'var(--mint)' }}>
              Gerade diagnostiziert? →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Was du hier findest ── */}
      <section style={{ background: '#fff', padding: '2.5rem 0 2rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p style={{
            fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.07em',
            textTransform: 'uppercase', color: 'var(--green-mid)',
            margin: '0 0 1.25rem',
          }}>
            Was du hier findest
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
            {[
              {
                emoji: '🍝',
                title: 'Rezepte',
                desc: 'Echte Alltagsküche – vom schnellen Mittagessen bis zum Kindergeburtstagskuchen. Mit Filter nach Kategorie, Ernährung und Alter.',
                href: '/rezepte',
              },
              {
                emoji: '📚',
                title: 'Wissen',
                desc: 'Gerade diagnostiziert? Hier bekommst du ehrliche Antworten: Erstdiagnose, Kreuzkontamination, Schule & Kita, und mehr.',
                href: '/wissen',
              },
              {
                emoji: '🥦',
                title: 'Glutenfreie Lebensmittel',
                desc: 'Was darf rein, was muss raus? Alle sicheren Lebensmittel, Mehle, verstecktes Gluten und die große Übersicht.',
                href: '/wissen/glutenfreie-lebensmittel',
              },
              {
                emoji: '📅',
                title: 'Wochenplan',
                desc: 'Keine Lust, jeden Tag neu zu überlegen? Ein fertiger glutenfreier Speiseplan für die Woche.',
                href: '/wochenplan',
              },
              {
                emoji: '✈️',
                title: 'Unterwegs',
                desc: 'Restaurants, Reisen, Urlaub – wie wir das mit Zöliakie angehen und was uns wirklich hilft.',
                href: '/unterwegs',
              },
              {
                emoji: '🛒',
                title: 'Produkte',
                desc: 'Welche glutenfreien Produkte wir wirklich kaufen – ehrlich und ohne Werbung.',
                href: '/produkte',
              },
            ].map(({ emoji, title, desc, href }) => (
              <Link key={href + title} href={href} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'var(--cream-dark)', borderRadius: '12px',
                  padding: '1.1rem 1.25rem', height: '100%',
                  border: '1.5px solid var(--border)',
                  transition: 'border-color 0.15s',
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{emoji}</div>
                  <p style={{ fontWeight: 700, margin: '0 0 0.3rem', fontSize: '0.95rem', color: 'var(--green-deep)' }}>{title}</p>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.65 }}>{desc}</p>
                </div>
              </Link>
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

      {/* ── Etwas fehlt? ── */}
      <section style={{ background: 'var(--green-deep)', padding: '2.5rem 0' }}>
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <p style={{ fontSize: '1.5rem', margin: '0 0 0.5rem' }}>💬</p>
          <h2 style={{ color: 'var(--golden)', fontSize: '1.3rem', margin: '0 0 0.6rem' }}>
            Etwas fehlt?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.8, margin: '0 0 1.5rem' }}>
            Kein Rezept für deine Lieblingsküche? Eine Frage, die noch nicht beantwortet ist?
            Schreib uns – wir freuen uns über jedes Feedback und versuchen, die Lücken zu füllen.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://www.instagram.com/waschtls__schmankerl"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.6rem 1.25rem', borderRadius: '999px',
                background: 'var(--golden)', color: 'var(--green-deep)',
                fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none',
              }}
            >
              📸 Instagram
            </a>
            <Link
              href="/kontakt"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.6rem 1.25rem', borderRadius: '999px',
                border: '1.5px solid var(--mint)', color: 'var(--mint)',
                fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none',
              }}
            >
              ✉️ Kontakt
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
