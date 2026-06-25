import Link from 'next/link';
import type { Metadata } from 'next';
import NewsletterBanner from '@/app/components/NewsletterBanner';

export const metadata: Metadata = {
  title: "Waschtl's Schmankerl – Glutenfreie Rezepte aus Augsburg",
  description:
    'Glutenfreie Rezepte und ehrliche Alltagstipps von einer Augsburger Familie mit Zöliakie. Echter Alltag, echte Küche – bayerisch, bodenständig, ohne Gluten.',
};

const HERO_REZEPTE = [
  { emoji: '🥞', title: 'Pfannkuchen',    href: '/rezepte/pfannkuchen-klassisch',   zeit: '25 Min' },
  { emoji: '🍖', title: 'Fleischküchler', href: '/rezepte/fleischkuechle',           zeit: '30 Min' },
  { emoji: '🍕', title: 'Pizza',          href: '/rezepte/pizza-glutenfrei',         zeit: '60 Min' },
  { emoji: '🧆', title: 'Schnellküche',   href: '/schnellkueche',                    zeit: 'neu ⚡', highlight: true },
];

const NEUE_REZEPTE = [
  { emoji: '🫓', title: 'Zwetschgendatschi',   href: '/rezepte/zwetschgendatschi',            kat: 'Backen · 100 Min' },
  { emoji: '🍗', title: 'Chicken Nuggets',      href: '/rezepte/chicken-nuggets-selbstgemacht', kat: 'Mittagessen · 30 Min' },
  { emoji: '🥐', title: 'Laugenbrezeln',        href: '/rezepte/laugenbrezeln-glutenfrei',      kat: 'Backen · 120 Min' },
  { emoji: '🍫', title: 'Brownies',             href: '/rezepte/brownies-schokolade',           kat: 'Backen · 40 Min' },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: 'var(--green-deep)', padding: '3.5rem 0 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '2.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
          >
            {/* Text-Seite */}
            <div style={{ paddingBottom: '3rem' }}>
              <span style={{
                display: 'inline-block', marginBottom: '1rem',
                fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.07em',
                textTransform: 'uppercase', color: 'var(--mint)',
              }}>
                Unser Sohn hat Zöliakie
              </span>
              <h1 style={{
                color: 'var(--golden)',
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                lineHeight: 1.2, marginBottom: '1rem',
              }}>
                Kochen ohne Gluten –<br />trotzdem alles essen.
              </h1>
              <p style={{
                color: 'rgba(255,255,255,0.72)',
                fontSize: '0.975rem', lineHeight: 1.8,
                marginBottom: '1.75rem', maxWidth: '440px',
              }}>
                Echte Rezepte aus unserem Alltag. Keine Diät-Küche,
                keine Kompromisse beim Geschmack.
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

            {/* 2×2 Rezept-Grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '0.5rem', alignSelf: 'flex-end',
            }}>
              {HERO_REZEPTE.map(r => (
                <Link key={r.href} href={r.href} style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '0.875rem 1rem',
                    background: r.highlight ? 'var(--golden)' : 'rgba(255,255,255,0.06)',
                    border: `1.5px solid ${r.highlight ? 'transparent' : 'rgba(149,213,178,0.2)'}`,
                    borderRadius: '10px 10px 0 0',
                    minWidth: '130px',
                    transition: 'background 0.15s',
                  }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.35rem' }}>{r.emoji}</div>
                    <div style={{
                      fontSize: '0.85rem', fontWeight: 600,
                      color: r.highlight ? 'var(--green-deep)' : '#fff',
                      marginBottom: '0.15rem',
                    }}>{r.title}</div>
                    <div style={{
                      fontSize: '0.7rem',
                      color: r.highlight ? 'rgba(27,67,50,0.65)' : 'rgba(255,255,255,0.45)',
                    }}>{r.zeit}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Neue Rezepte ── */}
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'baseline', marginBottom: '1.25rem',
          }}>
            <h2 style={{ fontSize: '1.1rem', color: 'var(--green-deep)' }}>Neue Rezepte</h2>
            <Link href="/rezepte" style={{ fontSize: '0.85rem', color: 'var(--green-mid)', fontWeight: 600 }}>
              Alle anzeigen →
            </Link>
          </div>
          <div className="grid-4">
            {NEUE_REZEPTE.map(r => (
              <Link key={r.href} href={r.href} className="card card-link" style={{ padding: '1.1rem', gap: '0' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.6rem' }}>{r.emoji}</div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--green-deep)', marginBottom: '0.3rem', lineHeight: 1.3 }}>
                  {r.title}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{r.kat}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Speiseplan Feature ── */}
      <section style={{ background: 'var(--green-deep)', padding: '2.5rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}
            className="wochenplan-grid">
            <div>
              <span style={{
                display: 'inline-block', marginBottom: '0.75rem',
                background: 'var(--mint)', color: 'var(--green-deep)',
                fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.7rem',
                borderRadius: '999px', letterSpacing: '0.05em',
              }}>SPEISEPLANER</span>
              <h2 style={{ color: 'var(--golden)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                Was koche ich diese Woche?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, marginBottom: '1.25rem', fontSize: '0.9rem' }}>
                Kleinkind dabei? Nur schnelle Gerichte? Lieber ohne Spezialmehl? Einmal einstellen – wir generieren deinen Plan.
              </p>
              <Link href="/wochenplan" className="btn btn-golden">Plan erstellen →</Link>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1.5px solid rgba(149,213,178,0.2)',
              borderRadius: '12px', padding: '1.1rem',
            }}>
              {[
                ['Montag',    'Apfel-Zimt-Porridge',  'Kürbisrisotto'],
                ['Dienstag',  'Pfannkuchen',           'Spaghetti Bolognese'],
                ['Mittwoch',  'French Toast',          'Fleischküchler'],
              ].map(([tag, f, m]) => (
                <div key={tag} style={{
                  display: 'grid', gridTemplateColumns: '70px 1fr',
                  gap: '0.5rem', padding: '0.45rem 0',
                  borderBottom: '1px solid rgba(149,213,178,0.1)',
                }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--mint)', paddingTop: '0.1rem' }}>{tag}</span>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)' }}>{f}</div>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{m}</div>
                  </div>
                </div>
              ))}
              <p style={{ margin: '0.6rem 0 0', fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', textAlign: 'center' }}>
                Beispielplan – deiner sieht anders aus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Story-Teaser ── */}
      <section style={{
        background: 'var(--cream-dark)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '1.5rem 0',
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '2.25rem', flexShrink: 0 }}>👨‍👦</span>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--green-deep)', margin: '0 0 0.25rem' }}>
                Unser Sohn hat Zöliakie – das hat unsere Küche verändert.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-mid)', margin: 0, lineHeight: 1.65 }}>
                Nicht zum Schlechteren. Wir kochen jetzt bewusster, mehr, und haben gelernt dass glutenfrei nicht gleichzusetzen ist mit geschmacklos.
              </p>
            </div>
            <Link href="/ueber-uns" className="btn btn-outline" style={{ flexShrink: 0, fontSize: '0.85rem' }}>
              Unsere Geschichte →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <NewsletterBanner />

      {/* ── Affiliate-Hinweis ── */}
      <section style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: '680px', padding: '1.1rem 1rem', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', textAlign: 'center', lineHeight: 1.75, margin: 0 }}>
            Einige Links auf dieser Website sind Affiliate-Links (z.B. zu Amazon). Wenn du darüber einkaufst, verdienen wir eine kleine Provision –
            für dich entstehen keine Mehrkosten.{' '}
            <a href="/produkte" style={{ color: 'var(--green-mid)', fontWeight: 600 }}>Zu unseren Empfehlungen →</a>
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { display: none; }
          .wochenplan-grid { grid-template-columns: 1fr !important; }
          .grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
