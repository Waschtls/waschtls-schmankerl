import Link from 'next/link';

// ── Typen ─────────────────────────────────────────────────────────────────────

export type Naehrwerte = {
  kalorien: number;
  kohlenhydrate: number;
  protein: number;
  fett: number;
  ballaststoffe: number;
};

export type RecipeBadge =
  | { type: 'mint';       label: string }
  | { type: 'golden';     label: string }
  | { type: 'tag';        label: string };

export type RecipeLayoutProps = {
  // Kopf
  title: string;
  kat: string;
  badges: RecipeBadge[];
  breadcrumbParent?: { label: string; href: string };

  // Warum dieses Rezept
  tagline: string;             // 1–2 Sätze: warum gut, wo einsetzbar
  useCases: string[];          // z.B. ['🎒 Brotdose', '🏕 Ausflug', '❄️ Einfrierbar']

  // Meta
  minuten: number | string;
  portionen: number | string;
  schwierigkeit?: string;

  // Zutaten & Zubereitung
  zutaten: string[];
  zubereitung: string[];

  // Nährwerte (pro Portion, Schätzwerte)
  naehrwerte: Naehrwerte;

  // Optional
  infoBox?: string;             // grüne Info-Box (naturalGf-Hinweis etc.)
  tipps?: string[];
  affiliate?: { text: string; href: string; label: string };
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
};

// ── Hilfsstile ────────────────────────────────────────────────────────────────

const card: React.CSSProperties = {
  background: 'var(--cream-dark)',
  borderRadius: '12px',
  padding: '1.375rem 1.5rem',
};

// ── Nährwert-Zeile ────────────────────────────────────────────────────────────

function NwRow({ label, value, unit, highlight }: {
  label: string; value: number; unit: string; highlight?: boolean
}) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '0.5rem 0',
      borderBottom: '1px solid var(--border)',
    }}>
      <span style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>{label}</span>
      <span style={{
        fontSize: '0.875rem', fontWeight: highlight ? 700 : 500,
        color: highlight ? 'var(--green-deep)' : 'var(--text-dark)',
      }}>
        {value} {unit}
      </span>
    </div>
  );
}

// ── Haupt-Komponente ──────────────────────────────────────────────────────────

export default function RecipeLayout({
  title,
  kat,
  badges,
  breadcrumbParent,
  tagline,
  useCases,
  minuten,
  portionen,
  schwierigkeit = 'Einfach',
  zutaten,
  zubereitung,
  naehrwerte,
  infoBox,
  tipps,
  affiliate,
  prev,
  next,
}: RecipeLayoutProps) {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: 'var(--green-deep)', padding: '2.75rem 0 2.25rem' }}>
        <div className="container">
          {/* Breadcrumb */}
          <div className="breadcrumb" style={{ color: 'var(--mint)', marginBottom: '0.875rem' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link>
            {breadcrumbParent && (
              <> › <Link href={breadcrumbParent.href} style={{ color: 'var(--mint)' }}>{breadcrumbParent.label}</Link></>
            )}
            {' '}› {title}
          </div>

          {/* Badges */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            {badges.map((b, i) => {
              const style: React.CSSProperties =
                b.type === 'mint'
                  ? { background: 'var(--mint)', color: 'var(--green-deep)' }
                  : b.type === 'golden'
                  ? { background: 'var(--golden)', color: 'var(--green-deep)' }
                  : { background: 'rgba(255,255,255,0.12)', color: 'var(--mint)' };
              return (
                <span key={i} style={{
                  ...style,
                  fontSize: '0.72rem', fontWeight: 700,
                  padding: '0.2rem 0.7rem', borderRadius: '999px',
                }}>
                  {b.label}
                </span>
              );
            })}
            <span className="tag" style={{ fontSize: '0.72rem', padding: '0.2rem 0.7rem' }}>{kat}</span>
          </div>

          <h1 style={{ color: 'var(--golden)', marginBottom: '0', lineHeight: 1.2 }}>{title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>

          {/* ── Tagline + Use Cases ── */}
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '0.875rem' }}>
              {tagline}
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {useCases.map(uc => (
                <span key={uc} style={{
                  padding: '0.3rem 0.8rem',
                  borderRadius: '999px',
                  border: '1.5px solid var(--border)',
                  background: 'var(--cream-dark)',
                  fontSize: '0.78rem',
                  color: 'var(--text-mid)',
                  fontWeight: 500,
                }}>
                  {uc}
                </span>
              ))}
            </div>
          </div>

          {/* ── Info-Box ── */}
          {infoBox && (
            <div style={{
              background: 'rgba(149,213,178,0.15)',
              border: '1.5px solid var(--mint)',
              borderRadius: '10px',
              padding: '0.875rem 1.25rem',
              marginBottom: '1.75rem',
              fontSize: '0.875rem',
              lineHeight: 1.7,
            }}>
              {infoBox}
            </div>
          )}

          {/* ── Zwei-Spalten: Zutaten+Meta | Nährwerte ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.25rem',
            marginBottom: '2rem',
          }}
          className="recipe-cols"
          >
            {/* Links: Meta + Zutaten */}
            <div style={card}>
              {/* Meta-Kacheln */}
              <div style={{
                display: 'flex', gap: '0', marginBottom: '1.25rem',
                background: 'var(--cream)', borderRadius: '8px',
                overflow: 'hidden',
              }}>
                {[
                  ['⏱', typeof minuten === 'number' ? `${minuten} Min.` : minuten, 'Zeit'],
                  ['👥', String(portionen), 'Portionen'],
                  ['📊', schwierigkeit, 'Niveau'],
                ].map(([icon, val, label]) => (
                  <div key={label} style={{
                    flex: 1, textAlign: 'center', padding: '0.625rem 0.25rem',
                    borderRight: '1px solid var(--border)',
                  }}>
                    <div style={{ fontSize: '1rem' }}>{icon}</div>
                    <div style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--green-deep)', lineHeight: 1.2 }}>{val}</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-light)' }}>{label}</div>
                  </div>
                ))}
              </div>

              {/* Zutaten */}
              <h3 style={{ fontSize: '0.9rem', marginBottom: '0.75rem', color: 'var(--green-deep)' }}>Zutaten</h3>
              <ul style={{ margin: 0, padding: '0 0 0 1.1rem', lineHeight: 2.1, fontSize: '0.875rem', color: 'var(--text-dark)' }}>
                {zutaten.map((z, i) => <li key={i}>{z}</li>)}
              </ul>
            </div>

            {/* Rechts: Nährwerte */}
            <div style={card}>
              <h3 style={{ fontSize: '0.9rem', marginBottom: '0.25rem', color: 'var(--green-deep)' }}>Nährwerte</h3>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', margin: '0 0 1rem' }}>
                Pro Portion (Schätzwert)
              </p>
              <NwRow label="Kalorien"       value={naehrwerte.kalorien}      unit="kcal" highlight />
              <NwRow label="Kohlenhydrate"  value={naehrwerte.kohlenhydrate} unit="g" />
              <NwRow label="Eiweiß"         value={naehrwerte.protein}       unit="g" />
              <NwRow label="Fett"           value={naehrwerte.fett}          unit="g" />
              <NwRow label="Ballaststoffe"  value={naehrwerte.ballaststoffe} unit="g" />
              <p style={{ fontSize: '0.68rem', color: 'var(--text-light)', marginTop: '0.75rem', lineHeight: 1.5, marginBottom: 0 }}>
                Angaben sind Richtwerte und können je nach Zutaten variieren.
              </p>
            </div>
          </div>

          {/* ── Zubereitung ── */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Zubereitung</h2>
            <ol style={{ margin: 0, padding: '0 0 0 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {zubereitung.map((step, i) => (
                <li key={i} style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--text-dark)', paddingLeft: '0.25rem' }}>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* ── Tipps ── */}
          {tipps && tipps.length > 0 && (
            <div style={{ ...card, marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>💡 Unsere Tipps</h3>
              <ul style={{ margin: 0, padding: '0 0 0 1.1rem', lineHeight: 2, fontSize: '0.875rem' }}>
                {tipps.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          )}

          {/* ── Affiliate ── */}
          {affiliate && (
            <>
              <div className="affiliate-box" style={{ marginBottom: '0.75rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>🛒 Passende Produkte</h3>
                <p style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>{affiliate.text}</p>
                <a
                  href={affiliate.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="btn btn-golden"
                  style={{ fontSize: '0.9rem' }}
                >
                  {affiliate.label}
                </a>
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
                * Affiliate-Link – für dich keine Mehrkosten.
              </p>
            </>
          )}

          {/* ── Navigation ── */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/rezepte" className="btn btn-outline">← Alle Rezepte</Link>
            {prev && <Link href={prev.href} className="btn btn-outline">← {prev.title}</Link>}
            {next && <Link href={next.href} className="btn btn-outline">{next.title} →</Link>}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .recipe-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
