import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreie Rezepte für Kinder – Waschtls Schmankerl',
  description:
    'Glutenfreie Rezepte die Kinder wirklich essen: Frühstück, Mittagessen, Snacks und Backen – einfach und alltagstauglich.',
};

const rezepte = [
  {
    slug: 'pfannkuchen-reismehl',
    title: 'Pfannkuchen aus Reismehl',
    desc: 'Fluffig, schnell und ein Frühstücks-Klassiker – kein Unterschied zu normalen Pfannkuchen.',
    time: '20 Min.',
    kat: 'Frühstück',
    emoji: '🥞',
  },
  {
    slug: 'schokoladenkuchen-mandelmehl',
    title: 'Schokoladenkuchen mit Mandelmehl',
    desc: 'Der saftigste Schokokuchen den wir kennen – und zufällig glutenfrei. Gelingt garantiert.',
    time: '50 Min.',
    kat: 'Backen',
    emoji: '🍫',
  },
  {
    slug: 'bananenmuffins',
    title: 'Bananenmuffins (ohne Mehl)',
    desc: 'Nur Bananen, Eier und Haferflocken (GF) – perfekte Schulmause ohne Zuckerschock.',
    time: '30 Min.',
    kat: 'Snacks',
    emoji: '🧁',
  },
  {
    slug: 'nudeln-mit-tomatensauce',
    title: 'Nudeln mit Tomatensauce',
    desc: 'Der glutenfreie Alltags-Klassiker. Mit Reisnudeln oder Linsennudeln – Kinder merken keinen Unterschied.',
    time: '25 Min.',
    kat: 'Mittagessen',
    emoji: '🍝',
  },
  {
    slug: 'pizza-glutenfrei',
    title: 'Glutenfreie Pizza',
    desc: 'Knuspriger Boden aus Reismehl und Tapioka – für den wöchentlichen Pizza-Freitagabend.',
    time: '45 Min.',
    kat: 'Mittagessen',
    emoji: '🍕',
  },
];

const kategorien = ['Alle', 'Frühstück', 'Mittagessen', 'Snacks', 'Backen'];

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
            Gerichte die bei uns zuhause wirklich auf den Tisch kommen – und bei Kindern ankommen.
          </p>
        </div>
      </section>

      {/* Kategorien */}
      <section className="section-sm" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {kategorien.map((kat, i) => (
              <span
                key={kat}
                className={i === 0 ? 'tag tag-golden' : 'tag'}
                style={{ cursor: 'pointer', padding: '0.35rem 1rem', fontSize: '0.875rem' }}
              >
                {kat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Rezepte Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {rezepte.map(({ slug, title, desc, time, kat, emoji }) => (
              <Link key={slug} href={`/rezepte/${slug}`} className="card card-link">
                <div style={{
                  fontSize: '3rem',
                  textAlign: 'center',
                  marginBottom: '1rem',
                  background: 'var(--cream-dark)',
                  borderRadius: '8px',
                  padding: '1.25rem',
                }}>
                  {emoji}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="tag">{kat}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>⏱ {time}</span>
                </div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</h3>
                <p style={{ margin: 0, fontSize: '0.875rem' }}>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
