import Link from 'next/link';
import type { Metadata } from 'next';
import { REZEPTE, KAT_LABELS } from '../../data/rezepte';

export const metadata: Metadata = {
  title: 'Alle glutenfreien Rezepte von A–Z',
  description:
    'Alle glutenfreien Rezepte von Waschtls Schmankerl auf einen Blick – alphabetisch sortiert.',
};

// Nur veröffentlichte Rezepte (kein todo), alphabetisch sortiert
const alle_rezepte = REZEPTE
  .filter(r => !r.todo)
  .map(r => ({
    title: r.title,
    slug: `/rezepte/${r.slug}`,
    kat: KAT_LABELS[r.kat] ?? r.kat,
  }))
  .sort((a, b) => a.title.localeCompare(b.title, 'de'));

// Gruppiert nach Anfangsbuchstabe
const grouped = alle_rezepte.reduce<Record<string, typeof alle_rezepte>>((acc, r) => {
  const letter = r.title[0].toUpperCase();
  if (!acc[letter]) acc[letter] = [];
  acc[letter].push(r);
  return acc;
}, {});

const letters = Object.keys(grouped).sort();

export default function RezepteAllePage() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › A–Z
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Alle Rezepte A–Z</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>
            {alle_rezepte.length} Rezepte – und es werden mehr.
          </p>
        </div>
      </section>

      {/* Buchstaben-Schnellnavigation */}
      <section style={{ background: 'var(--cream-dark)', padding: '0.75rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {letters.map(l => (
              <a
                key={l}
                href={`#letter-${l}`}
                style={{
                  display: 'inline-block',
                  width: '2rem', height: '2rem', lineHeight: '2rem',
                  textAlign: 'center', borderRadius: '6px',
                  fontWeight: 700, fontSize: '0.85rem',
                  background: 'var(--green-deep)', color: 'var(--golden)',
                  textDecoration: 'none',
                }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          {letters.map(letter => (
            <div key={letter} id={`letter-${letter}`} style={{ marginBottom: '2rem' }}>
              <h2 style={{
                fontSize: '1.5rem', color: 'var(--green-deep)',
                borderBottom: '2px solid var(--golden)',
                paddingBottom: '0.3rem', marginBottom: '0.875rem',
              }}>
                {letter}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {grouped[letter].map(({ title, slug, kat }) => (
                  <Link
                    key={slug}
                    href={slug}
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '0.625rem 1rem', background: 'var(--cream-dark)',
                      borderRadius: '8px', textDecoration: 'none',
                      color: 'var(--text-dark)', fontSize: '0.9rem', transition: 'background 0.15s',
                    }}
                  >
                    <span style={{ fontWeight: 500 }}>{title}</span>
                    <span className="tag" style={{ fontSize: '0.72rem', padding: '0.2rem 0.6rem', whiteSpace: 'nowrap' }}>{kat}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div style={{
            marginTop: '2rem', textAlign: 'center', color: 'var(--text-light)',
            fontSize: '0.85rem', padding: '1.5rem', background: 'var(--cream-dark)',
            borderRadius: '12px', border: '2px dashed var(--border)',
          }}>
            <p style={{ margin: 0, marginBottom: '0.75rem' }}>Neue Rezepte kommen regelmäßig dazu.</p>
            <Link href="/rezepte" className="btn btn-outline" style={{ fontSize: '0.85rem' }}>
              Zurück zu den Kategorien
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
