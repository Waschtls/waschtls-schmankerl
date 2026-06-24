import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreie Pfannkuchen aus Reismehl – Waschtls Schmankerl',
  description:
    'Fluffige Pfannkuchen aus Reismehl – glutenfrei, schnell gemacht und bei Kindern genauso beliebt wie das Original.',
};

export default function Pfannkuchen() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Pfannkuchen
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className="tag">Frühstück</span>
            <span className="tag tag-golden">⏱ 20 Min.</span>
            <span className="tag">Für Kinder</span>
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Pfannkuchen aus Reismehl</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>
            Unser Sonntagsklassiker – kein Unterschied zum Original, versprochen.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--golden)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Zutaten (für 4 Personen)</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.2, margin: 0 }}>
                <li>200 g Reismehl (fein gemahlen)</li>
                <li>2 Eier (Größe M)</li>
                <li>300 ml Milch (oder Haferdrink GF)</li>
                <li>1 Prise Salz</li>
                <li>1 TL Vanillezucker (optional)</li>
                <li>Butter oder Kokosöl zum Braten</li>
              </ul>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '1rem' }}>Nährwerte (ca. pro Portion)</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                {[
                  ['Kalorien', '220 kcal'], ['Kohlenhydrate', '38 g'],
                  ['Eiweiß', '7 g'], ['Fett', '5 g'],
                  ['Gluten', '0 g ✓'], ['Laktose', 'mit GF-Drink 0 g'],
                ].map(([label, val]) => (
                  <div key={label}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{label}</div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h2>Zubereitung</h2>
          <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-mid)', lineHeight: 2.2, marginBottom: '2rem' }}>
            <li>Reismehl, Salz und Vanillezucker in einer Schüssel mischen.</li>
            <li>Eier aufschlagen und zur Mehlmischung geben, gut verrühren.</li>
            <li>Milch nach und nach einrühren bis ein glatter, dünnflüssiger Teig entsteht. Mindestens 10 Minuten quellen lassen.</li>
            <li>Eine beschichtete Pfanne auf mittlere Hitze erhitzen, etwas Butter darin schmelzen.</li>
            <li>Eine Kelle Teig in die Pfanne geben, schwenken bis der Boden bedeckt ist.</li>
            <li>2–3 Minuten backen bis die Ränder leicht braun werden, dann wenden.</li>
            <li>Weitere 1–2 Minuten backen. Mit Ahornsirup, frischen Beeren oder Apfelmus servieren.</li>
          </ol>

          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>💡 Unser Tipp</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Den Teig etwas dicker lassen als bei normalen Pfannkuchen – Reismehl braucht etwas mehr Bindung. Wer mag, gibt einen Esslöffel Tapiokastärke dazu, das macht den Pfannkuchen elastischer.
            </p>
          </div>

          <div className="affiliate-box">
            <span className="affiliate-label">Anzeige</span>
            <h4>🛒 Reismehl in guter Qualität</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Wir verwenden feines Reismehl mit dem Ähren-Symbol – für Pfannkuchen, Waffeln und vieles mehr.
            </p>
            <a
              href="/produkte"
              
              
              className="btn btn-golden"
              style={{ fontSize: '0.875rem' }}
            >
              Unsere Empfehlungen →
            </a>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginTop: '0.75rem', marginBottom: 0 }}>
              Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.
            </p>
          </div>

          <hr className="divider" />
          <h3 style={{ marginBottom: '1rem' }}>Weitere Rezepte</h3>
          <div className="grid-2">
            <Link href="/rezepte/bananenmuffins" className="card card-link" style={{ borderLeft: '4px solid var(--golden)' }}>
              <strong>🧁 Bananenmuffins</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Schnell, gesund, ohne Zucker.</p>
            </Link>
            <Link href="/rezepte/schokoladenkuchen-mandelmehl" className="card card-link" style={{ borderLeft: '4px solid var(--terracotta)' }}>
              <strong>🍫 Schokoladenkuchen</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Der saftigste GF-Kuchen.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
