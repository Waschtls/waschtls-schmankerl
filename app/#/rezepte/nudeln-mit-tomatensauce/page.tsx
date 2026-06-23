import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreie Nudeln mit Tomatensauce – Waschtls Schmankerl',
  description:
    'Der glutenfreie Alltagsklassiker: Reisnudeln mit selbstgemachter Tomatensauce – schnell, lecker, kinderfreundlich.',
};

export default function Nudeln() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Nudeln mit Tomatensauce
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className="tag">Mittagessen</span>
            <span className="tag tag-golden">⏱ 25 Min.</span>
            <span className="tag">Alltagsklassiker</span>
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Nudeln mit Tomatensauce</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>
            Der Lieblingsklassiker – mit Reisnudeln genauso gut wie das Original.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--terracotta)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Zutaten (4 Personen)</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.2, margin: 0 }}>
                <li>400 g glutenfreie Pasta (Reisnudeln oder Linsennudeln)</li>
                <li>1 Dose gehackte Tomaten (400 g)</li>
                <li>2 EL Tomatenmark</li>
                <li>1 Zwiebel</li>
                <li>2 Knoblauchzehen</li>
                <li>2 EL Olivenöl</li>
                <li>Salz, Pfeffer, Oregano, Basilikum</li>
                <li>Parmesan zum Servieren (optional)</li>
              </ul>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.75rem' }}>Nudeln im Vergleich</h3>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                {[
                  { name: 'Reisnudeln', note: 'Mildster Geschmack, am ähnlichsten zu Weizennudeln' },
                  { name: 'Linsennudeln', note: 'Mehr Eiweiß, leicht erdiger Geschmack' },
                  { name: 'Kichererbsennudeln', note: 'Fester, nussiger Geschmack' },
                  { name: 'Buchweizennudeln', note: 'Kräftiger, für Ältere' },
                ].map(({ name, note }) => (
                  <div key={name} style={{ fontSize: '0.85rem' }}>
                    <strong>{name}</strong>
                    <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.8rem' }}>{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h2>Zubereitung</h2>
          <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-mid)', lineHeight: 2.2, marginBottom: '2rem' }}>
            <li>Zwiebel fein würfeln, Knoblauch pressen.</li>
            <li>Olivenöl in einem Topf erhitzen. Zwiebel glasig dünsten (ca. 3 Min.), Knoblauch dazugeben.</li>
            <li>Tomatenmark unterrühren, kurz anschwitzen (1 Min.).</li>
            <li>Dosentomaten dazugeben. Mit Salz, Pfeffer, Oregano und etwas Zucker abschmecken.</li>
            <li>Bei mittlerer Hitze 15 Minuten köcheln lassen. Am Ende frisches Basilikum unterrühren.</li>
            <li>Parallel die Nudeln nach Packungsanleitung in Salzwasser kochen. <strong>Achtung:</strong> Glutenfreie Nudeln werden schneller weich – lieber 1 Minute früher probieren.</li>
            <li>Nudeln abgießen (eigenes Sieb!), sofort mit der Sauce servieren.</li>
          </ol>

          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>⚠️ Kreuzverunreinigung beim Kochen</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Immer ein eigenes Sieb für glutenfreie Nudeln verwenden. Wer noch normale Nudeln im Haushalt hat: nach der Benutzung gründlich spülen reicht nicht – besser eigenes Kochgeschirr für das Kind.
            </p>
          </div>

          <div className="affiliate-box">
            <span className="affiliate-label">Anzeige</span>
            <h4>🍝 Unsere liebsten glutenfreien Nudeln</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Reisnudeln, Linsennudeln und mehr – in verschiedenen Formen für jeden Anlass.
            </p>
            <a
              href="https://www.amazon.de/s?k=glutenfreie+nudeln+pasta+reisnudeln&tag=waschtl-21"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn btn-golden"
              style={{ fontSize: '0.875rem' }}
            >
              Auf Amazon ansehen →
            </a>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginTop: '0.75rem', marginBottom: 0 }}>
              Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.
            </p>
          </div>

          <hr className="divider" />
          <div className="grid-2">
            <Link href="/rezepte/pizza-glutenfrei" className="card card-link" style={{ borderLeft: '4px solid var(--terracotta)' }}>
              <strong>🍕 Glutenfreie Pizza</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Der Freitagsklassiker.</p>
            </Link>
            <Link href="/rezepte" className="card card-link" style={{ borderLeft: '4px solid var(--golden)' }}>
              <strong>🍳 Alle Rezepte</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Mehr glutenfreie Ideen.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
