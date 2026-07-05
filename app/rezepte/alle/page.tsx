import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alle glutenfreien Rezepte von A–Z',
  description:
    'Alle glutenfreien Rezepte von Waschtls Schmankerl auf einen Blick – alphabetisch sortiert.',
};

const alle_rezepte = [
  // Frühstück
  { title: 'Apfel-Zimt Baked Oats',            slug: '/rezepte/apfel-zimt-baked-oats',         kat: 'Frühstück' },
  { title: 'Apfel-Zimt-Porridge',               slug: '/rezepte/apfel-zimt-porridge',            kat: 'Frühstück' },
  { title: 'French Toast',                       slug: '/rezepte/french-toast',                   kat: 'Frühstück' },
  { title: 'Pfannkuchen (klassisch)',            slug: '/rezepte/pfannkuchen-klassisch',          kat: 'Frühstück' },
  { title: 'Pfannkuchen aus Reismehl',          slug: '/rezepte/pfannkuchen-reismehl',           kat: 'Frühstück' },
  { title: 'Protein-Bagel',                     slug: '/rezepte/protein-bagel',                  kat: 'Frühstück' },
  { title: 'Schokoladen-Granola',               slug: '/rezepte/granola',                        kat: 'Frühstück' },
  { title: 'Waffeln (klassisch)',               slug: '/rezepte/waffeln-klassisch',              kat: 'Frühstück' },
  // Mittagessen
  { title: 'Chicken Nuggets (selbstgemacht)',   slug: '/rezepte/chicken-nuggets-selbstgemacht',  kat: 'Mittagessen' },
  { title: 'Fleischküchle',                     slug: '/rezepte/fleischkuechle',                 kat: 'Mittagessen' },
  { title: 'Kürbisrisotto',                     slug: '/rezepte/kuerbisrisotto',                 kat: 'Mittagessen' },
  { title: 'Nudeln mit Tomatensauce',           slug: '/rezepte/nudeln-mit-tomatensauce',        kat: 'Mittagessen' },
  { title: 'Reiberdatschi',                     slug: '/rezepte/reiberdatschi-kartoffelpuffer',  kat: 'Mittagessen' },
  { title: 'Rindergulasch',                     slug: '/rezepte/rindergulasch',                  kat: 'Mittagessen' },
  { title: 'Spaghetti Bolognese',               slug: '/rezepte/spaghetti-bolognese',            kat: 'Mittagessen' },
  // Abendessen
  { title: 'Flammkuchen-Ofenpfannkuchen',      slug: '/rezepte/flammkuchen-ofenpfannkuchen',    kat: 'Abendessen' },
  { title: 'Glutenfreie Pizza',                 slug: '/rezepte/pizza-glutenfrei',               kat: 'Abendessen' },
  { title: 'Kässpatzen',                        slug: '/rezepte/kaesspatzen',                    kat: 'Abendessen' },
  { title: 'Quark-Gemüse-Fladen',              slug: '/rezepte/quark-gemuese-fladen',           kat: 'Abendessen' },
  { title: 'Schnitzel mit Kartoffelbrei',       slug: '/rezepte/schnitzel-kartoffelbrei',        kat: 'Abendessen' },
  { title: 'Veganes Chili con Carne',           slug: '/rezepte/veganes-chili',                  kat: 'Abendessen' },
  // Backen
  { title: 'Bananenbrot mit Nutella-Füllung',  slug: '/rezepte/bananenbrot-nutella',            kat: 'Backen' },
  { title: 'Brownies (Schokolade)',             slug: '/rezepte/brownies-schokolade',            kat: 'Backen' },
  { title: 'Lebkuchen-Plätzchen',              slug: '/rezepte/lebkuchen-plaetzchen',           kat: 'Backen' },
  { title: 'Schokoladenkuchen (Mandelmehl)',    slug: '/rezepte/schokoladenkuchen-mandelmehl',   kat: 'Backen' },
  { title: 'Zwetschgendatschi',                 slug: '/rezepte/zwetschgendatschi',              kat: 'Backen' },
  // Brot & Hefeteig
  { title: 'Hamburger Brötchen',               slug: '/rezepte/hamburger-broetchen',            kat: 'Brot & Hefeteig' },
  { title: 'Hot Dog Brötchen',                 slug: '/rezepte/hotdog-broetchen',               kat: 'Brot & Hefeteig' },
  { title: 'Italienische Focaccia',             slug: '/rezepte/italienische-focaccia',          kat: 'Brot & Hefeteig' },
  { title: 'Laugenbrezeln (glutenfrei)',        slug: '/rezepte/laugenbrezeln-glutenfrei',       kat: 'Brot & Hefeteig' },
  // Snacks & Dessert
  { title: 'Bananenmuffins (ohne Mehl)',        slug: '/rezepte/bananenmuffins',                 kat: 'Snacks' },
  { title: 'Energiebällchen',                   slug: '/rezepte/energiebaellchen',               kat: 'Snacks' },
  { title: 'Frozen Banana Bites',               slug: '/rezepte/frozen-banana-bites',            kat: 'Dessert' },
  { title: 'Kokos-Milchreis',                  slug: '/rezepte/milchreis-kokos',                kat: 'Dessert' },
  // Grundrezepte
  { title: 'Grundrezept: Süßer Hefeteig',      slug: '/rezepte/grundrezept-hefeteig-suess',     kat: 'Grundrezepte' },
  { title: 'Semmelknödel',                     slug: '/rezepte/semmelknoedel',                  kat: 'Grundrezepte' },
].sort((a, b) => a.title.localeCompare(b.title, 'de'));

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
                  width: '2rem',
                  height: '2rem',
                  lineHeight: '2rem',
                  textAlign: 'center',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  background: 'var(--green-deep)',
                  color: 'var(--golden)',
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
                fontSize: '1.5rem',
                color: 'var(--green-deep)',
                borderBottom: '2px solid var(--golden)',
                paddingBottom: '0.3rem',
                marginBottom: '0.875rem',
              }}>
                {letter}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {grouped[letter].map(({ title, slug, kat }) => (
                  <Link
                    key={slug}
                    href={slug}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.625rem 1rem',
                      background: 'var(--cream-dark)',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: 'var(--text-dark)',
                      fontSize: '0.9rem',
                      transition: 'background 0.15s',
                    }}
                  >
                    <span style={{ fontWeight: 500 }}>{title}</span>
                    <span className="tag" style={{ fontSize: '0.72rem', padding: '0.2rem 0.6rem' }}>{kat}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div style={{
            marginTop: '2rem',
            textAlign: 'center',
            color: 'var(--text-light)',
            fontSize: '0.85rem',
            padding: '1.5rem',
            background: 'var(--cream-dark)',
            borderRadius: '12px',
            border: '2px dashed var(--border)',
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
