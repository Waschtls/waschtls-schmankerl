import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreie Pizza mit knusprigem Boden – Waschtls Schmankerl',
  description:
    'Glutenfreie Pizza mit Reismehl-Tapioka-Boden – knusprig, lecker und perfekt für den Freitagsabend mit Kindern.',
};

export default function Pizza() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Pizza
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className="tag">Mittagessen</span>
            <span className="tag tag-golden">⏱ 45 Min.</span>
            <span className="tag">Familienklassiker</span>
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Glutenfreie Pizza</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>
            Knuspriger Boden, voller Belag – Freitagabend gerettet.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--terracotta)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Zutaten Boden (2 Pizzen)</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.2, margin: 0 }}>
                <li>200 g Reismehl (fein)</li>
                <li>50 g Tapiokastärke</li>
                <li>1 TL Trockenhefe</li>
                <li>1 TL Salz</li>
                <li>1 TL Zucker</li>
                <li>150 ml lauwarmes Wasser</li>
                <li>2 EL Olivenöl</li>
                <li>1 TL Flohsamenschalen (optional, für Bindung)</li>
              </ul>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '1rem' }}>Für den Belag</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.2, margin: 0 }}>
                <li>150 ml passierte Tomaten</li>
                <li>Oregano, Salz, Pfeffer</li>
                <li>150 g Mozzarella</li>
                <li>Nach Wahl: Schinken, Pilze, Paprika, Oliven</li>
                <li><em style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Alle Beläge auf Glutenfreiheit prüfen!</em></li>
              </ul>
            </div>
          </div>

          <h2>Zubereitung</h2>
          <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-mid)', lineHeight: 2.2, marginBottom: '2rem' }}>
            <li>Hefe mit Zucker im lauwarmen Wasser auflösen und 5 Minuten stehen lassen bis es schäumt.</li>
            <li>Reismehl, Tapioka, Salz (und Flohsamenschalen) mischen.</li>
            <li>Hefewasser und Olivenöl zu den trockenen Zutaten geben. Gut verkneten – der Teig ist etwas klebriger als normaler Pizzateig.</li>
            <li>Abgedeckt 30 Minuten an einem warmen Ort gehen lassen.</li>
            <li>Backofen auf 220°C vorheizen (Umluft: 200°C). Backblech mit Backpapier auslegen.</li>
            <li>Teig mit feuchten Händen oder bemehltem Nudelholz (GF-Mehl) auf das Backpapier drücken/rollen.</li>
            <li>10 Minuten vorbacken bis der Boden leicht fest wird.</li>
            <li>Mit Tomatensauce bestreichen, belegen, Käse drauf.</li>
            <li>Weitere 10–12 Minuten backen bis der Käse blubbert und der Rand goldbraun ist.</li>
          </ol>

          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>💡 Knusprig-Tipp</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Für extra Knusprigkeit: Boden auf einem vorgeheizten Backstein oder umgedrehtem Backblech backen. Die Hitze von unten macht den Unterschied. Alternativ: Boden nach dem Vorbacken kurz wenden, dann belegen.
            </p>
          </div>

          <div className="affiliate-box">
            <span className="affiliate-label">Anzeige</span>
            <h4>🍕 Glutenfreie Pizzaboden-Fertigmischung</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Für Abende wenn keine Zeit zum Selbermachen bleibt – unsere liebste Fertigmischung.
            </p>
            <a
              href="https://www.amazon.de/s?k=glutenfreier+pizzateig+backmischung&tag=waschtl-21"
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
            <Link href="/rezepte/nudeln-mit-tomatensauce" className="card card-link" style={{ borderLeft: '4px solid var(--terracotta)' }}>
              <strong>🍝 Nudeln mit Tomatensauce</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Der schnellere Alltagsklassiker.</p>
            </Link>
            <Link href="/rezepte" className="card card-link" style={{ borderLeft: '4px solid var(--golden)' }}>
              <strong>🍳 Alle Rezepte</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Mehr glutenfreie Ideen.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
