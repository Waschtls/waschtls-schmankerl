import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kürbisrisotto glutenfrei – cremig & von Natur aus ohne Gluten',
  description:
    'Cremiges Kürbisrisotto – von Natur aus glutenfrei, kein Spezialmehl nötig. Perfektes Herbst-Mittagessen für die ganze Familie.',
};

export default function KuerbisrisottoPage() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Kürbisrisotto
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'var(--mint)', color: 'var(--green-deep)', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: '999px' }}>ohne Spezialmehl</span>
            <span style={{ background: 'var(--golden)', color: 'var(--green-deep)', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: '999px' }}>👶 kleinkindtauglich</span>
            <span className="tag">Mittagessen</span>
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Kürbisrisotto</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '520px' }}>
            Cremig, herbstlich, braucht kein Spezialmehl – Risotto ist von Natur aus glutenfrei.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>

          {/* Meta */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem', padding: '1rem', background: 'var(--cream-dark)', borderRadius: '10px' }}>
            {[['⏱', '40 Min.', 'Zubereitungszeit'], ['👥', '4', 'Portionen'], ['📊', 'Mittel', 'Schwierigkeit']].map(([icon, val, label]) => (
              <div key={label} style={{ textAlign: 'center', minWidth: '70px' }}>
                <div style={{ fontSize: '1.25rem' }}>{icon}</div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--green-deep)' }}>{val}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>{label}</div>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(149,213,178,0.15)', border: '1.5px solid var(--mint)', borderRadius: '10px', padding: '1rem 1.25rem', marginBottom: '2rem' }}>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.7 }}>
              <strong>💚 Von Natur aus glutenfrei</strong> – Risottoreis enthält kein Gluten. Dieses Rezept kommt ohne Spezialmehl oder glutenfreie Ersatzprodukte aus. Nur beim Parmesan und der Gemüsebrühe auf "glutenfrei" achten – manche Würzmittel enthalten verstecktes Gluten.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <h2 style={{ marginBottom: '0.875rem' }}>Zutaten</h2>
              <ul style={{ margin: 0, padding: '0 0 0 1.25rem', lineHeight: 2, fontSize: '0.9rem' }}>
                <li>300 g Risottoreis (Arborio)</li>
                <li>500 g Hokkaido-Kürbis</li>
                <li>1 Liter glutenfreie Gemüsebrühe</li>
                <li>1 Zwiebel</li>
                <li>2 Knoblauchzehen</li>
                <li>100 ml Weißwein <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>(oder mehr Brühe)</span></li>
                <li>50 g Parmesan, gerieben</li>
                <li>2 EL Butter</li>
                <li>2 EL Olivenöl</li>
                <li>Salz, Pfeffer, Muskat</li>
                <li>Frische Petersilie zum Servieren</li>
              </ul>
            </div>
            <div>
              <h2 style={{ marginBottom: '0.875rem' }}>Zubereitung</h2>
              <ol style={{ margin: 0, padding: '0 0 0 1.25rem', lineHeight: 2, fontSize: '0.9rem' }}>
                <li>Kürbis schälen, in 1 cm Würfel schneiden. Die Hälfte in Olivenöl weich dünsten, die andere Hälfte beiseite stellen.</li>
                <li>Weiche Kürbiswürfel pürieren und beiseite stellen.</li>
                <li>Zwiebel und Knoblauch fein würfeln, in Butter anschwitzen.</li>
                <li>Reis zugeben, kurz mitrösten bis er glasig ist.</li>
                <li>Mit Weißwein ablöschen, einkochen lassen.</li>
                <li>Brühe schöpflöffelweise zugeben, immer wenn der Reis die Flüssigkeit aufgesogen hat – ca. 20 Min. rühren.</li>
                <li>Kürbispüree einrühren, restliche Kürbiswürfel zugeben.</li>
                <li>Parmesan einrühren, abschmecken und servieren.</li>
              </ol>
            </div>
          </div>

          <div style={{ background: 'var(--cream-dark)', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '0.75rem', fontSize: '1rem' }}>💡 Unsere Tipps</h3>
            <ul style={{ margin: 0, padding: '0 0 0 1.2rem', lineHeight: 2, fontSize: '0.875rem' }}>
              <li>Hokkaido muss nicht geschält werden – die Schale wird beim Kochen weich</li>
              <li>Für Kinder unter 3: Wein weglassen, einfach mehr Brühe verwenden</li>
              <li>Risotto mag Aufmerksamkeit – nicht weglaufen, regelmäßig rühren ist der Trick</li>
              <li>Reste? Am nächsten Tag mit etwas Brühe wieder aufwärmen – schmeckt genauso gut</li>
              <li>Auch lecker: statt Kürbis Pilze oder Spinat verwenden</li>
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/rezepte" className="btn btn-outline">← Alle Rezepte</Link>
            <Link href="/wissen/glutenfreie-lebensmittel" className="btn btn-outline">Welche Lebensmittel sind glutenfrei? →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
