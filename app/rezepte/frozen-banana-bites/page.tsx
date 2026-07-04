import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frozen Banana Bites – glutenfreies Eis ohne Maschine | Waschtls Schmankerl',
  description: 'Gefrorene Quark-Bananen-Häppchen mit Schokolade – nur 83 kcal, glutenfrei, kein Backofen, kein Eis-Maker. Kinder lieben sie.',
};

export default function FrozenBananaBites() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Frozen Banana Bites
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className="tag">Dessert</span>
            <span className="tag">Snacks</span>
            <span className="tag tag-golden">⏱ 15 Min. + 4h einfrieren</span>
            <span className="tag">7 Stück</span>
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Frozen Banana Bites</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>
            Eis ohne Eismaschine – Quark trifft Banane trifft Schokolade. 83 kcal pro Stück, glutenfrei, Kinder flippen aus.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--golden)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Zutaten (7 Stück)</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.5, margin: 0 }}>
                <li>250 g Magerquark</li>
                <li>30 ml Milch (oder Mandelmilch)</li>
                <li>Süße nach Wahl (Erythrit, Honig, …)</li>
                <li>1 reife Banane</li>
                <li>70 g Vollmilch-Schokodrops (GF-zertifiziert)</li>
                <li>5 g Kokosöl</li>
              </ul>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.75rem' }}>Nährwerte pro Stück</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                {[['83', 'kcal'], ['7,7g', 'KH'], ['4,9g', 'Eiweiß'], ['4,4g', 'Fett']].map(([val, label]) => (
                  <div key={label} style={{ textAlign: 'center', padding: '0.5rem', background: 'var(--cream)', borderRadius: '8px' }}>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--green-deep)' }}>{val}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>{label}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', margin: 0 }}>Enthält Milch. Von Natur aus glutenfrei – GF-Schokodrops verwenden.</p>
            </div>
          </div>

          <h2>Zubereitung</h2>
          <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-mid)', lineHeight: 2.2, marginBottom: '2rem' }}>
            <li>Quark, Milch und Süße cremig verrühren.</li>
            <li>Banane in kleine Stücke schneiden und unter die Quarkmasse heben.</li>
            <li>7 gleichmäßige Kleckse auf ein mit Backpapier belegtes Tablett geben.</li>
            <li>Schokodrops mit Kokosöl in der Mikrowelle (30-Sekunden-Intervalle) oder im Wasserbad schmelzen.</li>
            <li>Je einen Löffel flüssige Schokolade auf jeden Quark-Klecks geben.</li>
            <li>Über Nacht oder mindestens 4 Stunden einfrieren.</li>
            <li>Direkt aus dem Gefrierer servieren – nach 5 Minuten werden sie weich.</li>
          </ol>

          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>💡 Waschtls Tipp</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Im Sommer perfekt für Geburtstage als GF-Eis-Alternative – Kinder können selbst Kleckse machen.
              Wer keine Milchschokolade mag: Zartbitter (mind. 70%) ist meist GF und macht sie weniger süß.
              Hält 2–3 Wochen im Gefrierer.
            </p>
          </div>

          <hr className="divider" />
          <div className="grid-2">
            <Link href="/rezepte/milchreis-kokos" className="card card-link" style={{ borderLeft: '4px solid var(--mint)' }}>
              <strong>🥥 Kokos-Milchreis</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Cremig, ohne Gluten.</p>
            </Link>
            <Link href="/rezepte/bananenmuffins" className="card card-link" style={{ borderLeft: '4px solid var(--terracotta)' }}>
              <strong>🍌 Bananenmuffins</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Schnell und ohne Mehl.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
