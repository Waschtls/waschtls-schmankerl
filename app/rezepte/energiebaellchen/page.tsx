import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreie Energiebällchen – ohne Backen, für die Brotdose',
  description:
    'Energiebällchen glutenfrei – ohne Backen, ohne Zucker, 15 Minuten. Perfekter Snack für die Brotdose, Ausflüge und zwischendurch.',
};

export default function EnergiebaellchenPage() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Energiebällchen
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'var(--mint)', color: 'var(--green-deep)', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: '999px' }}>ohne Spezialmehl</span>
            <span style={{ background: 'var(--golden)', color: 'var(--green-deep)', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: '999px' }}>👶 kleinkindtauglich</span>
            <span className="tag">Snacks</span>
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Energiebällchen</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '520px' }}>
            Ohne Backen, ohne Zucker, 15 Minuten – der Powerschnack für Schule, Ausflüge und den Hunger zwischendurch.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>

          {/* Meta */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem', padding: '1rem', background: 'var(--cream-dark)', borderRadius: '10px' }}>
            {[['⏱', '15 Min.', '+ 30 Min. kühlen'], ['🟤', '~16 Stück', 'Menge'], ['📊', 'Einfach', 'Schwierigkeit']].map(([icon, val, label]) => (
              <div key={label} style={{ textAlign: 'center', minWidth: '80px' }}>
                <div style={{ fontSize: '1.25rem' }}>{icon}</div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--green-deep)' }}>{val}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>{label}</div>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(149,213,178,0.15)', border: '1.5px solid var(--mint)', borderRadius: '10px', padding: '1rem 1.25rem', marginBottom: '2rem' }}>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.7 }}>
              <strong>💚 Von Natur aus glutenfrei</strong> – nur zertifiziert glutenfreie Haferflocken verwenden (auf die Verpackung achten). Alle anderen Zutaten sind ohne Gluten.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <h2 style={{ marginBottom: '0.875rem' }}>Zutaten</h2>
              <ul style={{ margin: 0, padding: '0 0 0 1.25rem', lineHeight: 2, fontSize: '0.9rem' }}>
                <li>150 g zertifiziert glutenfreie Haferflocken</li>
                <li>4 EL Erdnussbutter (oder Mandelmus)</li>
                <li>3 EL Honig</li>
                <li>2 EL Kakaopulver (ungesüßt)</li>
                <li>50 g Schokodrops oder gehackte Schokolade</li>
                <li>1 Prise Salz</li>
              </ul>
              <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', color: 'var(--text-light)' }}>
                Variation: Kokosraspeln statt Kakao, Rosinen, Chiasamen
              </p>
            </div>
            <div>
              <h2 style={{ marginBottom: '0.875rem' }}>Zubereitung</h2>
              <ol style={{ margin: 0, padding: '0 0 0 1.25rem', lineHeight: 2, fontSize: '0.9rem' }}>
                <li>Alle Zutaten in einer Schüssel gut vermischen.</li>
                <li>Masse 30 Min. im Kühlschrank kalt stellen – dann lässt sie sich besser formen.</li>
                <li>Mit feuchten Händen kleine Bällchen (Walnussgröße) formen.</li>
                <li>Optional: in Kokosraspeln oder Kakaopulver wälzen.</li>
                <li>Im Kühlschrank bis zu 1 Woche haltbar.</li>
              </ol>
            </div>
          </div>

          <div style={{ background: 'var(--cream-dark)', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '0.75rem', fontSize: '1rem' }}>💡 Unsere Tipps</h3>
            <ul style={{ margin: 0, padding: '0 0 0 1.2rem', lineHeight: 2, fontSize: '0.875rem' }}>
              <li>Kinder können beim Rollen mitmachen – macht Spaß und sie essen die Bällchen danach viel lieber</li>
              <li>Für Nussallergiker: Erdnussbutter durch Sonnenblumenkernmus ersetzen</li>
              <li>In der Brotdose mit einem kleinen Kühlakku transportieren – bleiben so frisch</li>
              <li>Größere Portion machen und einfrieren – einzeln entnehmbar</li>
              <li>Weniger Süße: Honig auf 2 EL reduzieren und eine reife Banane zerdrückt zugeben</li>
            </ul>
          </div>

          {/* Affiliate */}
          <div className="affiliate-box" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>🛒 Passende Produkte</h3>
            <p style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>
              Zertifiziert glutenfreie Haferflocken und gutes Mandelmus – wir bestellen beides online.
            </p>
            <a
              href="https://www.amazon.de/s?k=glutenfreie+Haferflocken+Mandelmus&tag=waschtl-21"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn btn-golden"
              style={{ fontSize: '0.9rem' }}
            >
              Bei Amazon ansehen →
            </a>
          </div>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginBottom: '2rem' }}>* Affiliate-Link – für dich keine Mehrkosten.</p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/rezepte" className="btn btn-outline">← Alle Rezepte</Link>
            <Link href="/rezepte/bananenmuffins" className="btn btn-outline">Bananenmuffins →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
