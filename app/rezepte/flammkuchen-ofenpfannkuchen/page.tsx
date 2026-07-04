import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreie Flammkuchen-Ofenpfannkuchen – Waschtls Schmankerl',
  description: 'Herzhafter Quark-Fladen im Flammkuchen-Stil – glutenfrei, nur 113 kcal pro Stück, in 30 Minuten fertig.',
};

export default function FlammkuchenOfenpfannkuchen() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Flammkuchen-Ofenpfannkuchen
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className="tag">Abendessen</span>
            <span className="tag">Snacks</span>
            <span className="tag tag-golden">⏱ 30 Min.</span>
            <span className="tag">8 Stück</span>
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Flammkuchen-Ofenpfannkuchen</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>
            Quark-Basis, Schinken, Frühlingszwiebel, Käse – wie ein Flammkuchen, nur ohne Rollpin und ohne Gluten.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--golden)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Zutaten (8 Stück)</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.5, margin: 0 }}>
                <li>250 g Magerquark</li>
                <li>2 Eier</li>
                <li>100 g Schär Mix It! (GF-Allzweckmehl)</li>
                <li>5 g Backpulver (GF)</li>
                <li>etwas Wasser (nach Konsistenz)</li>
                <li>35 g Schinkenwürfel light</li>
                <li>1 Frühlingszwiebel</li>
                <li>55 g Reibekäse light</li>
                <li>Salz, Pfeffer</li>
              </ul>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.75rem' }}>Nährwerte pro Stück</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                {[['113', 'kcal'], ['10,6g', 'KH'], ['10,2g', 'Eiweiß'], ['3,1g', 'Fett']].map(([val, label]) => (
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
            <li>Quark, Eier, GF-Mehl, Backpulver, Salz und etwas Wasser zu einem Teig verrühren.</li>
            <li>Frühlingszwiebel in Ringe schneiden.</li>
            <li>8 gleichmäßige Kleckse auf das Backblech geben und leicht flachdrücken.</li>
            <li>Mit Schinkenwürfeln, Frühlingszwiebeln und Reibekäse belegen.</li>
            <li>Ca. 20 Minuten backen bis der Käse goldbraun ist.</li>
          </ol>

          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>💡 Waschtls Tipp</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Wer mag, gibt noch einen Klecks Sauerrahm (laktosefrei erhältlich) auf die fertigen Fladen –
              das macht es noch flammkuchen-ähnlicher. Frisch aus dem Ofen am besten.
            </p>
          </div>

          <hr className="divider" />
          <div className="grid-2">
            <Link href="/rezepte/quark-gemuese-fladen" className="card card-link" style={{ borderLeft: '4px solid var(--mint)' }}>
              <strong>🫓 Quark-Gemüse-Fladen</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Mit Paprika und Salami.</p>
            </Link>
            <Link href="/rezepte/pizza-glutenfrei" className="card card-link" style={{ borderLeft: '4px solid var(--terracotta)' }}>
              <strong>🍕 Pizza glutenfrei</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Der Klassiker.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
