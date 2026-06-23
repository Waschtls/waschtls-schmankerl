import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apfel-Zimt-Porridge glutenfrei – 10 Minuten Frühstück',
  description:
    'Cremiger Apfel-Zimt-Porridge aus glutenfreien Haferflocken – fertig in 10 Minuten, kleinkindtauglich und von Natur aus glutenfrei.',
};

export default function ApfelZimtPorridgePage() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Apfel-Zimt-Porridge
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'var(--mint)', color: 'var(--green-deep)', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: '999px' }}>ohne Spezialmehl</span>
            <span style={{ background: 'var(--golden)', color: 'var(--green-deep)', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: '999px' }}>👶 kleinkindtauglich</span>
            <span className="tag">Frühstück</span>
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Apfel-Zimt-Porridge</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '520px' }}>
            Warm, cremig, fertig in 10 Minuten – unser liebstes Schulmorgen-Frühstück.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>

          {/* Meta */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem', padding: '1rem', background: 'var(--cream-dark)', borderRadius: '10px' }}>
            {[['⏱', '10 Min.', 'Zubereitungszeit'], ['👥', '2', 'Portionen'], ['📊', 'Einfach', 'Schwierigkeit']].map(([icon, val, label]) => (
              <div key={label} style={{ textAlign: 'center', minWidth: '70px' }}>
                <div style={{ fontSize: '1.25rem' }}>{icon}</div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--green-deep)' }}>{val}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Wichtiger Hinweis Hafer */}
          <div style={{ background: 'rgba(233,196,106,0.15)', border: '1.5px solid var(--golden)', borderRadius: '10px', padding: '1rem 1.25rem', marginBottom: '2rem' }}>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.7 }}>
              <strong>🌾 Wichtig bei Zöliakie:</strong> Haferflocken sind nur bei ausdrücklicher Aufschrift <em>„glutenfreier Hafer"</em> sicher. Normale Haferflocken sind durch Kontamination in der Mühle oft belastet. Wir verwenden zertifiziert glutenfreie Haferflocken – erhältlich im Reformhaus oder online.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            {/* Zutaten */}
            <div>
              <h2 style={{ marginBottom: '0.875rem' }}>Zutaten</h2>
              <ul style={{ margin: 0, padding: '0 0 0 1.25rem', lineHeight: 2, fontSize: '0.9rem' }}>
                <li>100 g zertifiziert glutenfreie Haferflocken</li>
                <li>300 ml Milch (oder laktosefreie/Pflanzenmilch)</li>
                <li>1 Apfel</li>
                <li>1 TL Zimt</li>
                <li>1 TL Honig oder Ahornsirup</li>
                <li>1 Prise Salz</li>
              </ul>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '0.75rem' }}>
                Optional: Nüsse, Rosinen, Apfelmus obendrauf
              </p>
            </div>

            {/* Zubereitung */}
            <div>
              <h2 style={{ marginBottom: '0.875rem' }}>Zubereitung</h2>
              <ol style={{ margin: 0, padding: '0 0 0 1.25rem', lineHeight: 2, fontSize: '0.9rem' }}>
                <li>Apfel schälen, entkernen, in kleine Würfel schneiden.</li>
                <li>Milch in einem Topf bei mittlerer Hitze warm werden lassen.</li>
                <li>Haferflocken, Apfelwürfel, Zimt und Salz einrühren.</li>
                <li>5–7 Minuten unter Rühren köcheln bis der Porridge cremig ist.</li>
                <li>Mit Honig abschmecken und servieren.</li>
              </ol>
            </div>
          </div>

          {/* Tipps */}
          <div style={{ background: 'var(--cream-dark)', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '0.75rem', fontSize: '1rem' }}>💡 Unsere Tipps</h3>
            <ul style={{ margin: 0, padding: '0 0 0 1.2rem', lineHeight: 2, fontSize: '0.875rem' }}>
              <li>Apfel auch roh geraspelt drauflegen – gibt mehr Frische</li>
              <li>Für Kleinkinder: Haferflocken vor dem Kochen kurz im Mixer zerkleinern – dann wird der Porridge noch weicher</li>
              <li>Lässt sich gut vorbereiten: Abends kochen, morgens mit etwas Milch aufwärmen</li>
              <li>Variante: statt Apfel Banane zerdrücken und einrühren – braucht dann keinen Zucker mehr</li>
            </ul>
          </div>

          {/* Affiliate */}
          <div className="affiliate-box" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>🛒 Glutenfreie Haferflocken</h3>
            <p style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>
              Wir verwenden zertifiziert glutenfreie Haferflocken – in gut sortierten Supermärkten manchmal schwer zu finden, online zuverlässig.
            </p>
            <a
              href="https://www.amazon.de/s?k=glutenfreie+Haferflocken&tag=waschtl-21"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn btn-golden"
              style={{ fontSize: '0.9rem' }}
            >
              Glutenfreie Haferflocken bei Amazon →
            </a>
          </div>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginBottom: '2rem' }}>* Affiliate-Link – für dich keine Mehrkosten.</p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/rezepte" className="btn btn-outline">← Alle Rezepte</Link>
            <Link href="/rezepte/pfannkuchen-reismehl" className="btn btn-outline">Pfannkuchen →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
