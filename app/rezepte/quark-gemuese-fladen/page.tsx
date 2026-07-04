import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreie Quark-Gemüse-Fladen – Waschtls Schmankerl',
  description: 'Saftige Quark-Fladen mit Paprika und Käse – hochprotein, glutenfrei und in 30 Minuten fertig. Perfekt als schnelles Abendessen oder Snack.',
};

export default function QuarkGemuseFladen() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Quark-Gemüse-Fladen
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className="tag">Snacks</span>
            <span className="tag">Abendessen</span>
            <span className="tag tag-golden">⏱ 30 Min.</span>
            <span className="tag">9 Stück</span>
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Quark-Gemüse-Fladen</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>
            Fluffig, herzhaft, hochprotein – und kein Kind merkt, dass kein Weizen drin ist.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--golden)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Zutaten (9 Stück)</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.5, margin: 0 }}>
                <li>300 g Magerquark</li>
                <li>2 Eier</li>
                <li>100 g Schär Mix It! (GF-Allzweckmehl)</li>
                <li>8 g Backpulver (GF)</li>
                <li>80 ml Wasser</li>
                <li>Italienische Kräuter, Salz</li>
                <li><strong>Belag:</strong></li>
                <li>~130 g Paprika (gemischt)</li>
                <li>~50 g Geflügelsalami</li>
                <li>100 g Reibekäse light</li>
              </ul>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.75rem' }}>Nährwerte pro Stück</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                {[['128', 'kcal'], ['10,7g', 'KH'], ['11,2g', 'Eiweiß'], ['4g', 'Fett']].map(([val, label]) => (
                  <div key={label} style={{ textAlign: 'center', padding: '0.5rem', background: 'var(--cream)', borderRadius: '8px' }}>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--green-deep)' }}>{val}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>{label}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', margin: 0 }}>Enthält Milch, Ei. Glutenfrei wenn Schär Mix It! verwendet.</p>
            </div>
          </div>

          <h2>Zubereitung</h2>
          <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-mid)', lineHeight: 2.2, marginBottom: '2rem' }}>
            <li>Backofen auf 180 °C Ober-/Unterhitze vorheizen. Backblech mit Backpapier belegen.</li>
            <li>Quark, Eier, GF-Mehl, Backpulver, Wasser und Kräuter zu einem glatten Teig verrühren.</li>
            <li>9 Kleckse auf das Backblech geben und leicht flachdrücken (ca. 1 cm dick).</li>
            <li>Mit Paprikastreifen, Salami und Reibekäse belegen.</li>
            <li>Ca. 20 Minuten backen bis der Käse goldbraun ist.</li>
            <li>Kurz abkühlen lassen – sie lassen sich dann besser vom Papier lösen.</li>
          </ol>

          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>💡 Waschtls Tipp</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Belag nach Belieben variieren – Zucchini, Oliven oder Tomaten funktionieren genauso gut.
              Wer mag, macht eine süße Variante: Apfelscheiben + Zimt + etwas Honig statt Käse und Salami.
            </p>
          </div>

          <hr className="divider" />
          <div className="grid-2">
            <Link href="/rezepte/flammkuchen-ofenpfannkuchen" className="card card-link" style={{ borderLeft: '4px solid var(--mint)' }}>
              <strong>🧀 Flammkuchen-Pfannkuchen</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Die herzhafte Schwester.</p>
            </Link>
            <Link href="/rezepte/pfannkuchen-reismehl" className="card card-link" style={{ borderLeft: '4px solid var(--terracotta)' }}>
              <strong>🥞 Pfannkuchen (klassisch)</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Der Sonntagsklassiker.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
