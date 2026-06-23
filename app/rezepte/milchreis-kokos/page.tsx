import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kokos-Milchreis glutenfrei – cremig & von Natur aus ohne Gluten',
  description:
    'Cremiger Kokos-Milchreis – von Natur aus glutenfrei, kein Spezialmehl, kleinkindtauglich. Dessert oder Mittagessen für die ganze Familie.',
};

export default function MilchreisKokosPage() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Kokos-Milchreis
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'var(--mint)', color: 'var(--green-deep)', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: '999px' }}>ohne Spezialmehl</span>
            <span style={{ background: 'var(--golden)', color: 'var(--green-deep)', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: '999px' }}>👶 kleinkindtauglich</span>
            <span className="tag">Dessert</span>
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Kokos-Milchreis</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '520px' }}>
            Macht sich fast von selbst, schmeckt wie Urlaub – und Kinder lieben ihn.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>

          {/* Meta */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem', padding: '1rem', background: 'var(--cream-dark)', borderRadius: '10px' }}>
            {[['⏱', '35 Min.', 'Zubereitungszeit'], ['👥', '4', 'Portionen'], ['📊', 'Einfach', 'Schwierigkeit']].map(([icon, val, label]) => (
              <div key={label} style={{ textAlign: 'center', minWidth: '70px' }}>
                <div style={{ fontSize: '1.25rem' }}>{icon}</div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--green-deep)' }}>{val}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>{label}</div>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(149,213,178,0.15)', border: '1.5px solid var(--mint)', borderRadius: '10px', padding: '1rem 1.25rem', marginBottom: '2rem' }}>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.7 }}>
              <strong>💚 Von Natur aus glutenfrei</strong> – Reis enthält kein Gluten. Dieses Rezept ist ohne jedes Spezialprodukt sofort glutenfrei. Perfekt wenn man sich nicht mit Ersatzmehlen beschäftigen will.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <h2 style={{ marginBottom: '0.875rem' }}>Zutaten</h2>
              <ul style={{ margin: 0, padding: '0 0 0 1.25rem', lineHeight: 2, fontSize: '0.9rem' }}>
                <li>200 g Milchreis (Rundkornreis)</li>
                <li>400 ml Kokosmilch</li>
                <li>300 ml Milch (oder laktosefrei)</li>
                <li>3 EL Zucker oder Honig</li>
                <li>1 Prise Salz</li>
                <li>1 TL Vanilleextrakt</li>
              </ul>
              <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', color: 'var(--text-light)' }}>
                Dazu: Früchte, Zimt, Apfelmus – was Kinder mögen
              </p>
            </div>
            <div>
              <h2 style={{ marginBottom: '0.875rem' }}>Zubereitung</h2>
              <ol style={{ margin: 0, padding: '0 0 0 1.25rem', lineHeight: 2, fontSize: '0.9rem' }}>
                <li>Reis, Kokosmilch, Milch und Salz in einem Topf aufkochen.</li>
                <li>Hitze reduzieren, Deckel drauf, bei niedriger Hitze 25–30 Min. köcheln. Gelegentlich umrühren damit nichts anbrennt.</li>
                <li>Vanille und Zucker einrühren.</li>
                <li>Konsistenz prüfen – soll cremig sein, nicht zu fest. Ggf. noch etwas Milch zugeben.</li>
                <li>Warm oder kalt mit Früchten servieren.</li>
              </ol>
            </div>
          </div>

          <div style={{ background: 'var(--cream-dark)', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '0.75rem', fontSize: '1rem' }}>💡 Unsere Tipps</h3>
            <ul style={{ margin: 0, padding: '0 0 0 1.2rem', lineHeight: 2, fontSize: '0.875rem' }}>
              <li>Kinder lieben ihn mit Zimt und Zucker obendrauf – klassisch und unschlagbar</li>
              <li>Mit Mango oder Erdbeeren wird er zum Dessert-Highlight</li>
              <li>Kalt schmeckt er am nächsten Tag genauso gut – ideal als vorbereitetes Mittagessen</li>
              <li>Für Kleinkinder ohne Honig süßen (unter 1 Jahr kein Honig)</li>
              <li>Wer laktoseintolerant ist: komplett mit Kokosmilch (700ml) machen – noch cremiger</li>
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/rezepte" className="btn btn-outline">← Alle Rezepte</Link>
            <Link href="/rezepte/kuerbisrisotto" className="btn btn-outline">Kürbisrisotto →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
