import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Waschtl's Schmankerl – Glutenfrei & aus Augsburg",
  description:
    'Glutenfreie Rezepte und ehrliche Alltagstipps von einer Augsburger Familie mit Zöliakie. Bayerisch-schwäbisch, bodenständig, lecker.',
};

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        background: 'var(--green-deep)',
        padding: '4.5rem 0 3.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: '-2rem', top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '14rem', opacity: 0.035,
          pointerEvents: 'none', userSelect: 'none',
        }}>🌲</div>

        <div className="container" style={{ position: 'relative', maxWidth: '680px' }}>
          <span className="tag tag-golden" style={{ marginBottom: '1.25rem', display: 'inline-block' }}>
            🌲 Aus Augsburg. Glutenfrei. Aus dem Herzen.
          </span>
          <h1 style={{ color: 'var(--golden)', marginBottom: '1rem', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.2 }}>
            Kochen ohne Gluten –<br />für Kinder, die trotzdem alles essen wollen.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '520px' }}>
            Unser Sohn hat Zöliakie. Was uns geholfen hat – Rezepte, Tipps und ehrlicher Alltag aus Augsburg.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link href="/rezepte" className="btn btn-golden" style={{ fontSize: '0.95rem' }}>
              Alle Rezepte →
            </Link>
            <Link href="/wochenplan" className="btn btn-outline" style={{ fontSize: '0.95rem', borderColor: 'var(--mint)', color: 'var(--mint)' }}>
              Speiseplan erstellen →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3 Kacheln ── */}
      <section className="section">
        <div className="container">
          <div className="grid-3">

            {/* Rezepte */}
            <Link href="/rezepte" className="card card-link" style={{ borderTop: '4px solid var(--golden)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.875rem' }}>🍽</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Rezepte</h3>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-mid)' }}>
                Von Frühstück bis Dessert – glutenfrei, kinderfreundlich, ohne Kompromisse.
              </p>
            </Link>

            {/* Wochenplan */}
            <Link href="/wochenplan" className="card card-link" style={{ borderTop: '4px solid var(--mint)', position: 'relative' }}>
              <div style={{
                position: 'absolute', top: '-1px', right: '1rem',
                background: 'var(--mint)', color: 'var(--green-deep)',
                fontSize: '0.68rem', fontWeight: 700,
                padding: '0.2rem 0.6rem', borderRadius: '0 0 6px 6px',
                letterSpacing: '0.04em',
              }}>
                NEU
              </div>
              <div style={{ fontSize: '2rem', marginBottom: '0.875rem' }}>📅</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Speiseplan</h3>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-mid)' }}>
                Präferenzen einstellen – wir stellen deinen persönlichen Plan zusammen.
              </p>
            </Link>

            {/* Wissen */}
            <Link href="/wissen" className="card card-link" style={{ borderTop: '4px solid var(--terracotta)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.875rem' }}>📖</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Wissen</h3>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-mid)' }}>
                Zöliakie verstehen, Alltag meistern – von der Diagnose bis zur Schulbrotdose.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* ── Wochenplan Feature ── */}
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2.5rem',
            alignItems: 'center',
          }}
          className="wochenplan-grid"
          >
            {/* Text */}
            <div>
              <span style={{
                display: 'inline-block', marginBottom: '0.875rem',
                background: 'var(--mint)', color: 'var(--green-deep)',
                fontSize: '0.72rem', fontWeight: 700, padding: '0.25rem 0.75rem',
                borderRadius: '999px', letterSpacing: '0.05em',
              }}>
                SPEISEPLANER
              </span>
              <h2 style={{ color: 'var(--golden)', marginBottom: '0.875rem', fontSize: '1.5rem' }}>
                Was koche ich diese Woche?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.925rem' }}>
                Kleinkind dabei? Nur Rezepte ohne Spezialmehl? Lieber schnell unter 30 Minuten? Stell ein was passt – wir generieren deinen Plan.
              </p>
              <Link href="/wochenplan" className="btn btn-golden">
                Plan erstellen →
              </Link>
            </div>

            {/* Preview-Box */}
            <div style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1.5px solid rgba(149,213,178,0.25)',
              borderRadius: '14px',
              padding: '1.25rem',
            }}>
              {[
                ['Montag',     'Apfel-Zimt-Porridge',   'Kürbisrisotto',        'Energiebällchen'],
                ['Dienstag',  'Pfannkuchen',            'Nudeln mit Tomaten',   'Kokos-Milchreis'],
                ['Mittwoch',  'Apfel-Zimt-Porridge',   'Pizza glutenfrei',     'Bananenmuffins'],
              ].map(([tag, f, m, s]) => (
                <div key={tag} style={{
                  display: 'grid', gridTemplateColumns: '72px 1fr',
                  gap: '0.5rem', alignItems: 'start',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(149,213,178,0.12)',
                }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--mint)', paddingTop: '0.1rem' }}>{tag}</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    {[f, m, s].map((r, i) => (
                      <span key={i} style={{
                        fontSize: '0.75rem',
                        color: i === 0 ? 'rgba(255,255,255,0.65)' : i === 1 ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)',
                      }}>
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <p style={{ margin: '0.75rem 0 0', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
                Beispielplan – deiner sieht anders aus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Persönliche Note ── */}
      <section className="section-sm" style={{ background: 'var(--cream-dark)' }}>
        <div className="container" style={{ maxWidth: '620px', textAlign: 'center' }}>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--text-mid)', fontStyle: 'italic', margin: '0 0 1rem' }}>
            „Kein großes Portal, kein Ernährungsmissionar – sondern eine Familie aus Augsburg, die teilt was sie selbst erlebt hat."
          </p>
          <Link href="/ueber-uns" style={{ fontSize: '0.875rem', color: 'var(--green-mid)', fontWeight: 600 }}>
            Über uns →
          </Link>
        </div>
      </section>

      {/* ── Affiliate-Hinweis ── */}
      <section style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: '680px', padding: '1.25rem 1rem', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', textAlign: 'center', lineHeight: 1.75, margin: 0 }}>
            Einige Links auf dieser Website sind Affiliate-Links (z.B. zu Amazon). Wenn du darüber einkaufst, verdienen wir eine kleine Provision –
            für dich entstehen keine Mehrkosten. Das hilft uns, die Website zu finanzieren. Wir empfehlen ausschließlich Produkte, die wir selbst nutzen.{' '}
            <a href="/produkte" style={{ color: 'var(--green-mid)', fontWeight: 600 }}>Zu unseren Empfehlungen →</a>
          </p>
        </div>
      </section>

      {/* Newsletter – TODO: implementieren sobald Agent für automatisches Schreiben + Versand steht */}

      <style>{`
        @media (max-width: 640px) {
          .wochenplan-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
