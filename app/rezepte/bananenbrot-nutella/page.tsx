import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreies Bananenbrot mit Nutella-Füllung – Waschtls Schmankerl',
  description: 'Saftiges glutenfreies Bananenbrot mit Nutella-Kern und Schokodrops – 10 Stück, perfekt für die Brotdose.',
};

export default function BananenbrotNutella() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Bananenbrot mit Nutella
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className="tag">Backen</span>
            <span className="tag">Dessert</span>
            <span className="tag tag-golden">⏱ 60 Min.</span>
            <span className="tag">10 Stück</span>
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Bananenbrot mit Nutella-Füllung</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>
            Der Kuchen-Ersatz der wirklich satt macht – mit Nutella-Kern, glutenfrei, für Groß und Klein.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>

          <div style={{ padding: '0.75rem 1rem', marginBottom: '1.5rem', background: 'rgba(233,196,106,0.1)', border: '1px solid rgba(233,196,106,0.3)', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--text-mid)' }}>
            ✅ <strong>Nutella ist glutenfrei</strong> – laut Ferrero-Angabe unter 20 ppm. Trotzdem aktuelle Packung prüfen. GF-Schokodrops z.B. von Schär oder zertifizierten Bio-Marken verwenden.
          </div>

          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--golden)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Zutaten (10 Stück)</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.5, margin: 0 }}>
                <li>2 sehr reife Bananen (~220 g)</li>
                <li>200 g Hüttenkäse light</li>
                <li>200 g Magerquark</li>
                <li>2 Eier</li>
                <li>80 ml Mandelmilch (ungesüßt)</li>
                <li>200 g Schär Mix It! (GF-Allzweckmehl)</li>
                <li>5 g Backpulver (GF)</li>
                <li>Süße nach Wahl (Erythrit, Honig, …)</li>
                <li><strong>Füllung:</strong></li>
                <li>80 g Nutella</li>
                <li>25 g Schokodrops (GF-zertifiziert)</li>
              </ul>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.75rem' }}>Nährwerte pro Stück</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                {[['191', 'kcal'], ['25,8g', 'KH'], ['9,5g', 'Eiweiß'], ['4,9g', 'Fett']].map(([val, label]) => (
                  <div key={label} style={{ textAlign: 'center', padding: '0.5rem', background: 'var(--cream)', borderRadius: '8px' }}>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--green-deep)' }}>{val}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>{label}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', margin: 0 }}>Enthält Milch, Ei, Nüsse (Nutella). Glutenfrei wenn Schär Mix It! + GF-Schokodrops.</p>
            </div>
          </div>

          <h2>Zubereitung</h2>
          <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-mid)', lineHeight: 2.2, marginBottom: '2rem' }}>
            <li>Backofen auf 180 °C Ober-/Unterhitze vorheizen. Kastenform (ca. 25 cm) einfetten oder mit Backpapier auslegen.</li>
            <li>Bananen zerdrücken. Mit Hüttenkäse, Quark, Eiern, Mandelmilch und Süße verrühren – am besten mit dem Mixer cremig schlagen.</li>
            <li>GF-Mehl und Backpulver unterrühren bis ein glatter Teig entsteht.</li>
            <li>Die Hälfte des Teiges in die Kastenform geben und glattstreichen.</li>
            <li>Nutella gleichmäßig auf dem Teig verteilen.</li>
            <li>Restlichen Teig draufgeben, glattstreichen und mit GF-Schokodrops bestreuen.</li>
            <li>45–55 Minuten backen. Nach 30 Minuten mit Alufolie abdecken damit die Oberfläche nicht zu dunkel wird.</li>
            <li>Vollständig auskühlen lassen, dann aus der Form nehmen und in 10 Stücke schneiden.</li>
          </ol>

          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>💡 Waschtls Tipp</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Unbedingt vollständig auskühlen lassen – warm lässt es sich schlecht schneiden und ist innen noch zu feucht.
              Eingefroren hält es 2 Monate. Einzelne Scheiben einfrieren, morgens rauslegen – nachmittags fertig.
            </p>
          </div>

          <hr className="divider" />
          <div className="grid-2">
            <Link href="/rezepte/bananenmuffins" className="card card-link" style={{ borderLeft: '4px solid var(--mint)' }}>
              <strong>🍌 Bananenmuffins</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Schneller, ohne Mehl.</p>
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
