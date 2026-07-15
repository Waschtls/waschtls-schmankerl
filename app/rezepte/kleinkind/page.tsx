import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Glutenfreie Rezepte für Kleinkinder ab 1 Jahr | Waschtls Schmankerl',
  description:
    'Glutenfreie Rezepte für Kleinkinder – ohne Zucker, schnell und alltagstauglich. Snacks, Frühstück und Hauptgerichte für Kinder ab 1 Jahr.',
};

type KleinrezeptEntry = {
  slug?: string;
  title: string;
  emoji: string;
  desc: string;
  time: string;
  tipp?: string;
  naturalGf?: boolean;
  todo?: boolean;
};

const SNACKS: KleinrezeptEntry[] = [
  { slug: 'avocado-schoko-creme', title: 'Avocado-Schoko-Creme', emoji: '🥑', desc: 'Avocado + Banane + Kakao = cremige Schoko-Creme ohne Zucker. In 5 Minuten fertig.', time: '5 Min.', tipp: 'Überreife Bananen nehmen – die sind süßer und machen die Creme besonders cremig.', naturalGf: true },
  { slug: 'apfelringe-frischkaese', title: 'Apfelringe mit Frischkäse', emoji: '🍎', desc: 'Apfel in Ringe, Frischkäse drauf, Blaubeeren als Topping. Der Brotdosen-Snack für zwischendurch.', time: '5 Min.', tipp: 'Mit Zitronensaft beträufeln – dann bleiben die Ringe auch in der Brotdose schön weiß.', naturalGf: true },
  { slug: 'apfelspalten-himbeer-dip', title: 'Apfelspalten mit Himbeer-Dip', emoji: '🍓', desc: 'Apfelspalten als Pommes, Himbeer-Dip als Ketchup – das Konzept zieht bei Kleinkindern immer.', time: '5 Min.', tipp: 'TK-Himbeeren immer im Tiefkühler haben – der Dip ist in 2 Minuten fertig.', naturalGf: true },
  { slug: 'energiebaellchen', title: 'Energiebällchen', emoji: '🟤', desc: 'Kein Backen, kein Zucker, nur GF-Haferflocken und Nussmus. Hält eine Woche im Kühlschrank.', time: '15 Min.', tipp: 'Kinder können beim Rollen mitmachen – dann essen sie sie noch lieber.' },
  { slug: 'frozen-banana-bites', title: 'Frozen Banana Bites', emoji: '🍌', desc: 'Gefrorene Bananenstücke in Schokolade – das gesündeste Eis das es gibt.', time: '15 Min. + Einfrieren', tipp: 'Im Sommer ein Muss – immer ein paar im Tiefkühler haben.', naturalGf: true },
];

const FRUEHSTUECK: KleinrezeptEntry[] = [
  { slug: 'apfel-zimt-porridge', title: 'Apfel-Zimt-Porridge', emoji: '🍎', desc: 'Cremiger Porridge mit Apfelstücken – warm und sättigend, 10 Minuten.', time: '10 Min.', tipp: 'Apfelmus statt frischem Apfel geht auch – dann noch schneller.', naturalGf: true },
  { slug: 'pfannkuchen-klassisch', title: 'Pfannkuchen', emoji: '🫓', desc: 'Hauchdünne Pfannkuchen mit Schär Mix It – der Klassiker für das Wochenend-Frühstück.', time: '25 Min.', tipp: 'Kleinkinder lieben Mini-Pfannkuchen – einfach kleinere Portionen in die Pfanne.' },
  { slug: 'dicke-pfannkuchen', title: 'Pancakes', emoji: '🥞', desc: 'Fluffig durch Eischnee – der American-Style Pancake für besondere Frühstücke.', time: '25 Min.', tipp: 'Mit Erdbeeren und Ahornsirup – die Kinder sind begeistert.' },
  { slug: 'bananenmuffins', title: 'Bananenmuffins', emoji: '🧁', desc: 'Nur 4 Zutaten, kein Mehl, kein Zucker – von Natur aus glutenfrei. Auch für die Brotdose.', time: '30 Min.', tipp: 'Am Vortag backen – werden über Nacht noch besser.', naturalGf: true },
];

const HAUPTGERICHTE: KleinrezeptEntry[] = [
  { slug: 'nudeln-mit-tomatensauce', title: 'Nudeln mit Tomatensauce', emoji: '🍝', desc: 'GF-Pasta mit einfacher Tomatensauce – das Kleinkind-Gericht schlechthin. 25 Minuten.', time: '25 Min.', tipp: 'Gemüse fein pürieren und in die Sauce mischen – kein Kind merkt es.' },
  { slug: 'schnitzel-kartoffelbrei', title: 'Schnitzel mit Kartoffelbrei', emoji: '🍖', desc: 'Paniert in GF-Semmelbrösel – das klassische Familienessen, glutenfrei.', time: '35 Min.', tipp: 'Kartoffelbrei ohne Salz für Kleinkinder – die Panade bringt genug Geschmack.' },
  { slug: 'milchreis-kokos', title: 'Kokos-Milchreis', emoji: '🥥', desc: 'Cremig, mild, leicht süß – perfekt für Kleinkinder. Von Natur aus glutenfrei.', time: '35 Min.', naturalGf: true },
];

function RezeptKarte({ r }: { r: KleinrezeptEntry }) {
  if (r.todo) {
    return (
      <div style={{ background: 'var(--cream-dark)', border: '1.5px dashed var(--border)', borderRadius: '12px', padding: '1.1rem 1.25rem', opacity: 0.6 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '1.6rem' }}>{r.emoji}</span>
          <span className="tag">Kommt bald</span>
        </div>
        <p style={{ fontWeight: 700, margin: '0 0 0.25rem', fontSize: '0.95rem', color: 'var(--text-mid)' }}>{r.title}</p>
        <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-light)' }}>{r.desc}</p>
      </div>
    );
  }
  return (
    <Link href={`/rezepte/${r.slug}`} style={{ textDecoration: 'none' }}>
      <div style={{ background: '#fff', border: '1.5px solid var(--border)', borderRadius: '12px', padding: '1.1rem 1.25rem', height: '100%' }} className="card-link">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '1.6rem' }}>{r.emoji}</span>
          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <span className="tag" style={{ fontSize: '0.68rem' }}>⏱ {r.time}</span>
            {r.naturalGf && <span className="tag" style={{ fontSize: '0.68rem', background: 'rgba(149,213,178,0.2)', color: 'var(--green-mid)' }}>💚 natur. GF</span>}
          </div>
        </div>
        <p style={{ fontWeight: 700, margin: '0 0 0.3rem', fontSize: '0.95rem', color: 'var(--green-deep)' }}>{r.title}</p>
        <p style={{ margin: '0 0 0.5rem', fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>{r.desc}</p>
        {r.tipp && (
          <p style={{ margin: 0, fontSize: '0.76rem', color: 'var(--green-mid)', fontStyle: 'italic' }}>
            💡 {r.tipp}
          </p>
        )}
      </div>
    </Link>
  );
}

export default function KleinkindPage() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Für Kleinkinder
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.75rem' }}>
            Glutenfreie Rezepte für Kleinkinder
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '580px', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Snacks, Frühstück und Hauptgerichte für Kinder ab 1 Jahr – ohne Gluten, ohne Zucker wo es geht, und schnell genug für den Alltag.
          </p>
        </div>
      </section>

      <section style={{ background: 'rgba(149,213,178,0.08)', padding: '1.25rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>
            <strong style={{ color: 'var(--green-mid)' }}>💡 Rezepte mit „💚 natur. GF"</strong> sind von Natur aus glutenfrei – kein Getreide, keine Spezialzutaten.
            Alle anderen Rezepte werden mit GF-zertifizierten Zutaten zubereitet.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: '1.5rem' }}>
        <div className="container">
          <h2 style={{ marginBottom: '0.35rem' }}>Snacks & Süßes</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Für die Brotdose, zwischendurch, als Dessert.</p>
          <div className="grid-3">
            {SNACKS.map(r => <RezeptKarte key={r.slug ?? r.title} r={r} />)}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', background: 'var(--cream-dark)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '0.35rem' }}>Frühstück</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Warm, kalt, süß oder herzhaft – glutenfrei frühstücken mit Kindern.</p>
          <div className="grid-3">
            {FRUEHSTUECK.map(r => <RezeptKarte key={r.slug ?? r.title} r={r} />)}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          <h2 style={{ marginBottom: '0.35rem' }}>Hauptgerichte</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Mittagessen und Abendessen die die ganze Familie essen kann.</p>
          <div className="grid-3">
            {HAUPTGERICHTE.map(r => <RezeptKarte key={r.slug ?? r.title} r={r} />)}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--green-deep)', padding: '2.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem', fontSize: '0.95rem' }}>Alle Rezepte – nicht nur für Kleinkinder</p>
          <Link href="/rezepte" className="btn btn-golden">Alle Rezepte →</Link>
        </div>
      </section>
    </>
  );
}
