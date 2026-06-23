import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreie Rezepte für Kinder – Waschtls Schmankerl',
  description:
    'Glutenfreie Rezepte die Kinder wirklich essen: Frühstück, Mittagessen, Abendessen, Backen, Snacks und mehr – einfach, alltagstauglich, aus Augsburg.',
};

const kategorien = [
  {
    id: 'fruehstueck',
    label: '🥞 Frühstück',
    desc: 'Pfannkuchen, Waffeln, Porridge – der beste Start in den Tag',
  },
  {
    id: 'mittagessen',
    label: '🍝 Mittagessen',
    desc: 'Schnelle Alltagsgerichte die die ganze Familie mag',
  },
  {
    id: 'abendessen',
    label: '🥘 Abendessen',
    desc: 'Was koche ich heute Abend? Schnell, warm, glutenfrei',
  },
  {
    id: 'grundrezepte',
    label: '📋 Grundrezepte & Teige',
    desc: 'Pizzateig, Hefeteig, Mürbeteig – einmal lernen, viele Rezepte damit backen',
  },
  {
    id: 'backen',
    label: '🎂 Backen & Kuchen',
    desc: 'Kuchen, Muffins, Kekse – für Alltag und besondere Anlässe',
  },
  {
    id: 'hefeteig',
    label: '🍞 Brot & Hefeteig',
    desc: 'Glutenfreies Brot, Brötchen und Pizzaboden selbst gemacht',
  },
  {
    id: 'snacks',
    label: '🍪 Snacks & Brotdose',
    desc: 'Für die Brotdose, Ausflüge und Geburtstage',
  },
  {
    id: 'dessert',
    label: '🍨 Desserts & Süßes',
    desc: 'Eis, Milchreis, Mousse – süße Abschlüsse ohne Gluten',
  },
  {
    id: 'kindergeburtstag',
    label: '🎉 Kindergeburtstag',
    desc: 'Kuchen und Snacks für den großen Tag – so gut dass alle mitessen wollen',
  },
  {
    id: 'saisonal',
    label: '🎄 Ostern & Weihnachten',
    desc: 'Saisonale Backrezepte für die schönsten Feste im Jahr',
  },
];

// naturalGf = von Natur aus glutenfrei, kein Spezialmehl nötig
const rezepte = [
  {
    slug: 'pfannkuchen-reismehl',
    title: 'Pfannkuchen aus Reismehl',
    desc: 'Fluffig, schnell – kein Unterschied zum Original.',
    time: '20 Min.',
    kat: 'fruehstueck',
    emoji: '🥞',
    naturalGf: false,
    kleinkind: true,
  },
  {
    slug: 'apfel-zimt-porridge',
    title: 'Apfel-Zimt-Porridge',
    desc: 'Cremig, warm, 10 Minuten – perfekt für den Schulmorgen.',
    time: '10 Min.',
    kat: 'fruehstueck',
    emoji: '🍎',
    naturalGf: true,
    kleinkind: true,
  },
  {
    slug: 'nudeln-mit-tomatensauce',
    title: 'Nudeln mit Tomatensauce',
    desc: 'Der Alltagsklassiker – mit Reisnudeln genauso lecker.',
    time: '25 Min.',
    kat: 'mittagessen',
    emoji: '🍝',
    naturalGf: false,
    kleinkind: true,
  },
  {
    slug: 'kuerbisrisotto',
    title: 'Kürbisrisotto',
    desc: 'Cremig, herbstlich, von Natur aus glutenfrei.',
    time: '40 Min.',
    kat: 'mittagessen',
    emoji: '🎃',
    naturalGf: true,
    kleinkind: true,
  },
  {
    slug: 'pizza-glutenfrei',
    title: 'Glutenfreie Pizza',
    desc: 'Knuspriger Boden – der Freitagsabend-Klassiker.',
    time: '45 Min.',
    kat: 'hefeteig',
    emoji: '🍕',
    naturalGf: false,
    kleinkind: true,
  },
  {
    slug: 'schokoladenkuchen-mandelmehl',
    title: 'Schokoladenkuchen mit Mandelmehl',
    desc: 'Der saftigste Schokokuchen – garantiert gelingend.',
    time: '50 Min.',
    kat: 'backen',
    emoji: '🍫',
    naturalGf: false,
    kleinkind: true,
  },
  {
    slug: 'bananenmuffins',
    title: 'Bananenmuffins (ohne Mehl)',
    desc: 'Nur 4 Zutaten, kein Zucker – perfekte Schulmause.',
    time: '30 Min.',
    kat: 'snacks',
    emoji: '🧁',
    naturalGf: true,
    kleinkind: true,
  },
  {
    slug: 'energiebaellchen',
    title: 'Energiebällchen',
    desc: 'Ohne Backen, ohne Zucker – der Powerschnack für die Brotdose.',
    time: '15 Min.',
    kat: 'snacks',
    emoji: '🟤',
    naturalGf: true,
    kleinkind: true,
  },
  {
    slug: 'milchreis-kokos',
    title: 'Kokos-Milchreis',
    desc: 'Cremig, leicht süß – Kinder lieben ihn, und er macht sich fast von selbst.',
    time: '35 Min.',
    kat: 'dessert',
    emoji: '🥥',
    naturalGf: true,
    kleinkind: true,
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

      {/* Legende */}
      <section style={{ background: 'var(--cream-dark)', padding: '0.75rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-light)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{
                background: 'var(--mint)',
                color: 'var(--green-deep)',
                fontSize: '0.68rem',
                fontWeight: 700,
                padding: '0.15rem 0.5rem',
                borderRadius: '999px',
              }}>ohne Spezialmehl</span>
              von Natur aus glutenfrei
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{
                background: 'var(--golden)',
                color: 'var(--green-deep)',
                fontSize: '0.68rem',
                fontWeight: 700,
                padding: '0.15rem 0.5rem',
                borderRadius: '999px',
              }}>👶 kleinkindtauglich</span>
              auch für Kleine geeignet
            </span>
          </div>
        </div>
      </section>

      {/* Kategorien-Navigation */}
      <section className="section-sm" style={{ background: 'white', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {kategorien.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="tag"
                style={{ padding: '0.4rem 0.875rem', fontSize: '0.8rem', cursor: 'pointer', textDecoration: 'none' }}
              >
                {label}
              </a>
            ))}
            <Link
              href="/rezepte/alle"
              style={{
                padding: '0.4rem 0.875rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--green-mid)',
                textDecoration: 'none',
                borderRadius: '999px',
                border: '1.5px solid var(--green-mid)',
              }}
            >
              A–Z →
            </Link>
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
                  {kat_rezepte.map(({ slug, title, desc: rDesc, time, emoji, naturalGf, kleinkind }) => (
                    <Link key={slug} href={`/rezepte/${slug}`} className="card card-link">
                      <div style={{
                        fontSize: '2.5rem',
                        textAlign: 'center',
                        background: 'var(--cream-dark)',
                        borderRadius: '8px',
                        padding: '1rem',
                        marginBottom: '0.75rem',
                        position: 'relative',
                      }}>
                        {emoji}
                      </div>
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.5rem', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>⏱ {time}</span>
                        {naturalGf && (
                          <span style={{
                            background: 'var(--mint)',
                            color: 'var(--green-deep)',
                            fontSize: '0.65rem',
                            fontWeight: 700,
                            padding: '0.1rem 0.45rem',
                            borderRadius: '999px',
                          }}>ohne Spezialmehl</span>
                        )}
                        {kleinkind && (
                          <span style={{
                            background: 'var(--golden)',
                            color: 'var(--green-deep)',
                            fontSize: '0.65rem',
                            fontWeight: 700,
                            padding: '0.1rem 0.45rem',
                            borderRadius: '999px',
                          }}>👶</span>
                        )}
                      </div>
                      <h3 style={{ fontSize: '0.95rem', marginBottom: '0.35rem' }}>{title}</h3>
                      <p style={{ margin: 0, fontSize: '0.85rem' }}>{rDesc}</p>
                    </Link>
                  ))}

                  {/* Platzhalter */}
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
