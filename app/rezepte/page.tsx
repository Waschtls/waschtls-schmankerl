import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreie Rezepte für Kinder – Waschtls Schmankerl',
  description:
    'Glutenfreie Rezepte die Kinder wirklich essen: Frühstück, Backen, Snacks, Mittagessen und mehr – einfach, alltagstauglich, aus Augsburg.',
};

const kategorien = [
  {
    id: 'fruehstueck',
    label: '🥞 Frühstück',
    desc: 'Pfannkuchen, Waffeln, Porridge – der beste Start in den Tag',
  },
  {
    id: 'backen',
    label: '🎂 Backen & Kuchen',
    desc: 'Kuchen, Muffins, Kekse – für Alltag und besondere Anlässe',
  },
  {
    id: 'hefeteig',
    label: '🍞 Brot & Hefeteig',
    desc: 'Glutenfreies Brot, Brötchen und Pizzateig selbst gemacht',
  },
  {
    id: 'mittagessen',
    label: '🍝 Mittagessen',
    desc: 'Schnelle Alltagsgerichte die die ganze Familie mag',
  },
  {
    id: 'snacks',
    label: '🍪 Snacks & Kleinigkeiten',
    desc: 'Für die Brotdose, Ausflüge und Geburtstage',
  },
  {
    id: 'herzhaft',
    label: '🥘 Herzhaftes',
    desc: 'Suppen, Aufläufe, Eintöpfe – warm und sättigend',
  },
];

const rezepte = [
  {
    slug: 'pfannkuchen-reismehl',
    title: 'Pfannkuchen aus Reismehl',
    desc: 'Fluffig, schnell – kein Unterschied zum Original.',
    time: '20 Min.',
    kat: 'fruehstueck',
    katLabel: 'Frühstück',
    emoji: '🥞',
  },
  {
    slug: 'schokoladenkuchen-mandelmehl',
    title: 'Schokoladenkuchen mit Mandelmehl',
    desc: 'Der saftigste Schokokuchen – garantiert gelingend.',
    time: '50 Min.',
    kat: 'backen',
    katLabel: 'Backen',
    emoji: '🍫',
  },
  {
    slug: 'bananenmuffins',
    title: 'Bananenmuffins (ohne Mehl)',
    desc: 'Nur 4 Zutaten, kein Zucker – perfekte Schulmause.',
    time: '30 Min.',
    kat: 'snacks',
    katLabel: 'Snacks',
    emoji: '🧁',
  },
  {
    slug: 'nudeln-mit-tomatensauce',
    title: 'Nudeln mit Tomatensauce',
    desc: 'Der Alltagsklassiker – mit Reisnudeln genauso lecker.',
    time: '25 Min.',
    kat: 'mittagessen',
    katLabel: 'Mittagessen',
    emoji: '🍝',
  },
  {
    slug: 'pizza-glutenfrei',
    title: 'Glutenfreie Pizza',
    desc: 'Knuspriger Boden – der Freitagsabend-Klassiker.',
    time: '45 Min.',
    kat: 'hefeteig',
    katLabel: 'Brot & Hefeteig',
    emoji: '🍕',
  },
];

export default function RezeptePage() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> › Rezepte
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Glutenfreie Rezepte</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px' }}>
            Was bei uns zuhause wirklich auf den Tisch kommt – und bei Kindern ankommt.
          </p>
        </div>
      </section>

      {/* Kategorien-Navigation */}
      <section className="section-sm" style={{ background: 'var(--cream-dark)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {kategorien.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="tag"
                style={{
                  padding: '0.4rem 1rem',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'background 0.15s',
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Kategorien mit Rezepten */}
      {kategorien.map(({ id, label, desc }) => {
        const kat_rezepte = rezepte.filter(r => r.kat === id);
        return (
          <section key={id} id={id} className="section" style={{ borderBottom: '1px solid var(--border)' }}>
            <div className="container">
              <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ marginBottom: '0.25rem' }}>{label}</h2>
                <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.9rem' }}>{desc}</p>
              </div>

              {kat_rezepte.length > 0 ? (
                <div className="grid-3">
                  {kat_rezepte.map(({ slug, title, desc: rDesc, time, emoji }) => (
                    <Link key={slug} href={`/rezepte/${slug}`} className="card card-link">
                      <div style={{
                        fontSize: '2.5rem',
                        textAlign: 'center',
                        background: 'var(--cream-dark)',
                        borderRadius: '8px',
                        padding: '1rem',
                        marginBottom: '0.875rem',
                      }}>
                        {emoji}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>⏱ {time}</span>
                      </div>
                      <h3 style={{ fontSize: '0.95rem', marginBottom: '0.35rem' }}>{title}</h3>
                      <p style={{ margin: 0, fontSize: '0.85rem' }}>{rDesc}</p>
                    </Link>
                  ))}

                  {/* Platzhalter-Karte */}
                  <div className="card" style={{
                    border: '2px dashed var(--border)',
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    minHeight: '180px',
                    color: 'var(--text-light)',
                    boxShadow: 'none',
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>✏️</span>
                    <span style={{ fontSize: '0.85rem' }}>Rezept kommt bald</span>
                  </div>
                </div>
              ) : (
                <div style={{
                  background: 'var(--cream-dark)',
                  border: '2px dashed var(--border)',
                  borderRadius: '12px',
                  padding: '2rem',
                  textAlign: 'center',
                  color: 'var(--text-light)',
                }}>
                  <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>✏️</span>
                  Rezepte für diese Kategorie kommen bald
                </div>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
