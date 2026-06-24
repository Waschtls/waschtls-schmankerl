import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreie Bananenmuffins ohne Mehl – Waschtls Schmankerl',
  description:
    'Bananenmuffins ohne Mehl und ohne Zucker – nur 4 Zutaten, glutenfrei und bei Kindern ein Hit.',
};

export default function Bananenmuffins() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Bananenmuffins
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className="tag">Snacks</span>
            <span className="tag tag-golden">⏱ 30 Min.</span>
            <span className="tag">4 Zutaten</span>
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Bananenmuffins (ohne Mehl)</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>
            Perfekte Schulmause – ohne Gluten, ohne Zucker, ohne Stress.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--golden)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Zutaten (12 Muffins)</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.5, margin: 0 }}>
                <li>3 reife Bananen (sehr reif = süßer)</li>
                <li>2 Eier</li>
                <li>150 g glutenfreie Haferflocken</li>
                <li>1 TL Backpulver (GF)</li>
                <li><em style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Optional: Schokostückchen GF, Blaubeeren oder Zimt</em></li>
              </ul>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.75rem' }}>Warum dieses Rezept?</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.2, margin: 0 }}>
                <li>Kein Zucker nötig</li>
                <li>Kein normales Mehl</li>
                <li>In 30 Minuten fertig</li>
                <li>Kinder können mithelfen</li>
                <li>Ideal für die Brotdose</li>
              </ul>
            </div>
          </div>

          <h2>Zubereitung</h2>
          <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-mid)', lineHeight: 2.2, marginBottom: '2rem' }}>
            <li>Backofen auf 180°C Ober-/Unterhitze vorheizen. Muffinform mit Papierförmchen auslegen.</li>
            <li>Bananen in einer Schüssel mit einer Gabel zerdrücken – je reifer, desto süßer und sämiger.</li>
            <li>Eier aufschlagen und unter die Bananenmasse rühren.</li>
            <li>Haferflocken und Backpulver unterrühren. Optional: Schokostückchen oder Blaubeeren unterheben.</li>
            <li>Teig in die Förmchen füllen (¾ voll).</li>
            <li>Ca. 18–20 Minuten backen bis die Oberfläche leicht gebräunt ist. Stäbchenprobe.</li>
            <li>10 Minuten abkühlen lassen – dann sind sie perfekt.</li>
          </ol>

          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>💡 Tipp: Immer eine Portion einfrieren</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Wir backen doppelte Menge und frieren die Hälfte ein. Morgens rausnehmen – mittags in der Brotdose aufgetaut. Hält 2 Monate im Gefrierer.
            </p>
          </div>

          <div className="affiliate-box">
            <span className="affiliate-label">Anzeige</span>
            <h4>🥣 Glutenfreie Haferflocken</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Zertifiziert glutenfreie Haferflocken – wichtig, da normale Haferflocken oft durch Kreuzverunreinigung belastet sind.
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
          <div className="grid-2">
            <Link href="/rezepte/pfannkuchen-reismehl" className="card card-link" style={{ borderLeft: '4px solid var(--mint)' }}>
              <strong>🥞 Pfannkuchen</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Der Sonntagsklassiker.</p>
            </Link>
            <Link href="/rezepte/schokoladenkuchen-mandelmehl" className="card card-link" style={{ borderLeft: '4px solid var(--terracotta)' }}>
              <strong>🍫 Schokoladenkuchen</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Für besondere Anlässe.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
