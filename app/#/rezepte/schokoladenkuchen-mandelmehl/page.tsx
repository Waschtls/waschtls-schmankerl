import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Saftiger Schokoladenkuchen mit Mandelmehl – glutenfrei',
  description:
    'Der saftigste glutenfreie Schokoladenkuchen – aus Mandelmehl, perfekt für Geburtstage und Sonntagskaffee.',
};

export default function Schokoladenkuchen() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Schokoladenkuchen
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className="tag">Backen</span>
            <span className="tag tag-golden">⏱ 50 Min.</span>
            <span className="tag">Geburtstag</span>
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Schokoladenkuchen mit Mandelmehl</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>
            Saftig, schokoladig, glutenfrei – niemand merkt den Unterschied.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--terracotta)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Zutaten (26 cm Form)</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.2, margin: 0 }}>
                <li>200 g Mandelmehl (blanchiert)</li>
                <li>50 g Kakaopulver (ungesüßt)</li>
                <li>1 TL Backpulver (GF)</li>
                <li>½ TL Natron</li>
                <li>1 Prise Salz</li>
                <li>3 Eier (Größe L)</li>
                <li>150 g Zucker oder Kokosblütenzucker</li>
                <li>120 ml Pflanzenöl (neutral)</li>
                <li>100 ml heißes Wasser</li>
                <li>1 TL Vanilleextrakt</li>
              </ul>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.75rem' }}>Für die Glasur (optional)</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.2, margin: 0, marginBottom: '1rem' }}>
                <li>150 g dunkle Schokolade (GF)</li>
                <li>3 EL Sahne oder Kokosmilch</li>
              </ul>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '0.25rem' }}>Backzeit</div>
                <div style={{ fontWeight: 700 }}>35–40 Min. bei 175°C</div>
              </div>
            </div>
          </div>

          <h2>Zubereitung</h2>
          <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-mid)', lineHeight: 2.2, marginBottom: '2rem' }}>
            <li>Backofen auf 175°C Ober-/Unterhitze vorheizen. Backform einfetten.</li>
            <li>Mandelmehl, Kakao, Backpulver, Natron und Salz in einer Schüssel mischen.</li>
            <li>In einer zweiten Schüssel Eier und Zucker schaumig schlagen (ca. 3 Minuten).</li>
            <li>Öl und Vanilleextrakt unterrühren.</li>
            <li>Trockene Zutaten unter die nasse Masse heben – nicht zu lange rühren.</li>
            <li>Heißes Wasser einrühren (macht den Teig fließfähiger, das ist gewollt).</li>
            <li>In die Form füllen und 35–40 Minuten backen. Stäbchenprobe machen.</li>
            <li>Vollständig abkühlen lassen vor der Glasur.</li>
            <li>Glasur: Schokolade hacken, mit heißer Sahne verrühren bis glatt, über den Kuchen gießen.</li>
          </ol>

          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>💡 Warum Mandelmehl?</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Mandelmehl macht Kuchen von Natur aus saftig – das Öl der Mandeln ersetzt einen Teil des Backfetts. Der Kuchen bleibt 3–4 Tage frisch, ohne auszutrocknen. Ideal für Geburtstagskuchen, die man einen Tag vorher backt.
            </p>
          </div>

          <div className="affiliate-box">
            <span className="affiliate-label">Anzeige</span>
            <h4>🌰 Mandelmehl in guter Qualität</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Blanchiertes Mandelmehl macht den Unterschied – fein gemahlen, ohne Schale, glutenfrei zertifiziert.
            </p>
            <a
              href="https://www.amazon.de/s?k=mandelmehl+blanchiert+glutenfrei&tag=waschtl-21"
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
            <Link href="/rezepte/bananenmuffins" className="card card-link" style={{ borderLeft: '4px solid var(--golden)' }}>
              <strong>🧁 Bananenmuffins</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Für zwischendurch – ohne Zucker.</p>
            </Link>
            <Link href="/wissen/geburtstage" className="card card-link" style={{ borderLeft: '4px solid var(--mint)' }}>
              <strong>🎂 Geburtstage mit Zöliakie</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Damit kein Kind leer ausgeht.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
