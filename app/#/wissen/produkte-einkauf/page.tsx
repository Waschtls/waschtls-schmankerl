import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreie Produkte kaufen – Was wirklich sicher ist',
  description:
    'Welche Marken zuverlässig glutenfrei sind, was Labels bedeuten und wo ihr am besten einkauft – mit ehrlichen Empfehlungen.',
};

export default function ProdukteEinkauf() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Einkauf & Produkte
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Einkaufen & Produkte</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px' }}>
            Labels lesen, Marken kennen, sicher einkaufen.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>

          <h2>Labels richtig lesen</h2>
          <p>
            Das Zöliakie-Symbol schlechthin: die <strong>durchgestrichene Ähre</strong>. Produkte mit diesem Zeichen sind zertifiziert und enthalten weniger als 20 mg Gluten pro kg. Das ist der international anerkannte Grenzwert für Zöliakiebetroffene.
          </p>
          <p>
            Achtung bei Aufschriften wie „ohne Glutenzusatz" oder „glutenfrei nach unserer Herstellung" – das ist keine zertifizierte Aussage und gibt keine Sicherheit über Kreuzverunreinigung.
          </p>

          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.75rem' }}>🏷️ Was bedeuten die Labels?</h4>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {[
                { label: '🌾 Durchgestrichene Ähre', desc: 'Zertifiziert glutenfrei (<20 ppm). Sicher.', color: 'var(--green-light)' },
                { label: '"Glutenfrei" (EU)', desc: 'EU-gesetzlich geregelt: <20 mg/kg. Verlässlich.', color: 'var(--green-light)' },
                { label: '"Kann Spuren von Gluten enthalten"', desc: 'Hinweis auf mögliche Kreuzverunreinigung. Vorsicht.', color: 'var(--golden)' },
                { label: '"Ohne Glutenzusatz"', desc: 'Keine Zertifizierung, keine Aussage über KV.', color: 'var(--terracotta)' },
              ].map(({ label, desc, color }) => (
                <div key={label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '10px', minWidth: '10px', height: '10px', borderRadius: '50%', background: color, marginTop: '6px' }} />
                  <div>
                    <strong style={{ fontSize: '0.9rem' }}>{label}</strong>
                    <p style={{ margin: '0.15rem 0 0', fontSize: '0.85rem' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2>Wo einkaufen?</h2>
          <p>
            Gute glutenfreie Sortimente findet ihr bei: <strong>dm</strong> und <strong>Rossmann</strong> (eigene GF-Linien), <strong>Alnatura</strong>, <strong>Bio-Supermärkte</strong>, <strong>REWE</strong> und <strong>Edeka</strong> (Eigenmarken), sowie spezialisierte Online-Shops wie glutenfreishop.de oder amazon.de.
          </p>

          <h2>Unsere Lieblings-Grundzutaten</h2>
          <div className="affiliate-box">
            <span className="affiliate-label">Anzeige</span>
            <h4>🌾 Glutenfreie Mehle & Backmischungen</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Reismehl, Buchweizenmehl, Mandelmehl und fertige Backmischungen – was wir zuhause regelmäßig verwenden.
            </p>
            <a
              href="https://www.amazon.de/s?k=glutenfreies+mehl+backmehl&tag=waschtl-21"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn btn-golden"
              style={{ fontSize: '0.875rem' }}
            >
              Auf Amazon ansehen →
            </a>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginTop: '0.75rem', marginBottom: 0 }}>
              Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.
            </p>
          </div>

          <div className="affiliate-box">
            <span className="affiliate-label">Anzeige</span>
            <h4>🍝 Glutenfreie Pasta & Brot</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Nudeln aus Reismehl, Linsen oder Kichererbsen – und unser Lieblingsbrot für den Alltag.
            </p>
            <a
              href="https://www.amazon.de/s?k=glutenfreie+pasta+brot&tag=waschtl-21"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn btn-golden"
              style={{ fontSize: '0.875rem' }}
            >
              Auf Amazon ansehen →
            </a>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginTop: '0.75rem', marginBottom: 0 }}>
              Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.
            </p>
          </div>

          <hr className="divider" />
          <div className="grid-2">
            <Link href="/produkte" className="card card-link" style={{ borderLeft: '4px solid var(--terracotta)' }}>
              <strong>🛒 Alle Produktempfehlungen</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Unsere kuratierte Produktliste.</p>
            </Link>
            <Link href="/rezepte" className="card card-link" style={{ borderLeft: '4px solid var(--golden)' }}>
              <strong>🍳 Rezepte mit diesen Zutaten</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Was ihr damit kochen könnt.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
