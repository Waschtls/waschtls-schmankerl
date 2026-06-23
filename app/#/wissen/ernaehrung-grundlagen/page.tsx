import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreie Ernährung bei Kindern – Was erlaubt ist und was nicht',
  description:
    'Was Kinder mit Zöliakie essen dürfen, wo Gluten sich versteckt, wie man Kreuzverunreinigung vermeidet und welche Produkte wirklich sicher sind.',
};

const erlaubt = [
  'Reis, Mais, Hirse, Buchweizen, Quinoa, Amaranth',
  'Kartoffeln, Süßkartoffeln',
  'Alle frischen Fleisch- und Fischsorten (unverarbeitet)',
  'Eier, Milch, Naturjoghurt, Käse',
  'Alle frischen Obst- und Gemüsesorten',
  'Hülsenfrüchte (Linsen, Kichererbsen, Bohnen)',
  'Nüsse und Samen (ohne Zusätze)',
  'Speziell zertifizierte glutenfreie Produkte (Symbol: durchgestrichene Ähre)',
];

const verboten = [
  'Weizen, Dinkel, Emmer, Einkorn, Kamut',
  'Roggen, Gerste, Triticale',
  'Normales Brot, Brötchen, Toast, Croissants',
  'Pasta, Nudeln (außer explizit glutenfrei)',
  'Pizza, Kuchen, Kekse (konventionell)',
  'Bier (enthält Gerste)',
  'Viele Fertigprodukte, Saucen, Würzmischungen',
  'Haferflocken (außer zertifiziert glutenfreier Hafer)',
];

export default function ErnaehrungGrundlagen() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Glutenfreie Ernährung
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Glutenfreie Ernährung</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px' }}>
            Was erlaubt ist, was nicht – und wo Gluten sich unbemerkt versteckt.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>

          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--green-light)' }}>
              <h3 style={{ color: 'var(--green-mid)', marginBottom: '1rem' }}>✅ Erlaubt</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2, margin: 0 }}>
                {erlaubt.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="card" style={{ borderLeft: '4px solid var(--terracotta)' }}>
              <h3 style={{ color: 'var(--terra-dark)', marginBottom: '1rem' }}>❌ Kein Gluten erlaubt</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2, margin: 0 }}>
                {verboten.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

          <h2>Wo versteckt sich Gluten?</h2>
          <p>
            Das Schwierige an glutenfreier Ernährung ist nicht das offensichtliche Brot – sondern die versteckten Quellen. Gluten taucht in überraschend vielen Produkten auf:
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-mid)', lineHeight: 2, marginBottom: '1.5rem' }}>
            <li><strong>Sojasoße</strong> – enthält meist Weizen</li>
            <li><strong>Brühwürfel und Suppenpulver</strong> – oft mit Weizenstärke</li>
            <li><strong>Ketchup, Senf, Salatdressings</strong> – prüfen lohnt sich</li>
            <li><strong>Wurst und Aufschnitt</strong> – Füllstoffe können Gluten enthalten</li>
            <li><strong>Pommes frites</strong> – oft in der gleichen Fritteuse wie Paniertes</li>
            <li><strong>Medikamente und Nahrungsergänzungsmittel</strong> – Überzugsmittel prüfen</li>
            <li><strong>Knetmasse und Bastelkleber</strong> – relevant bei kleinen Kindern</li>
          </ul>

          <h2>Kreuzverunreinigung verstehen</h2>
          <p>
            Selbst wenn ein Produkt von Natur aus glutenfrei ist, kann es in der Herstellung oder Küche mit Gluten in Kontakt kommen – das nennt man Kreuzverunreinigung. Für Kinder mit Zöliakie kann schon ein Krümel zu viel sein.
          </p>
          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.75rem' }}>🏠 Zuhause: Auf diese Punkte achten</h4>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2, margin: 0 }}>
              <li>Eigenes Schneidebrett, Toaster und Nudelsieb für das Kind</li>
              <li>Butter, Marmelade & Aufschnitt nie aus gemeinsamen Gläsern nehmen, wenn schon glutenhaltig eingetaucht wurde</li>
              <li>Kochgeschirr gründlich spülen, Holzlöffel ersetzen</li>
              <li>Glutenfreie Produkte oben im Regal lagern</li>
            </ul>
          </div>

          <h2>Das durchgestrichene Ähren-Symbol</h2>
          <p>
            Produkte mit dem Symbol der durchgestrichenen Ähre sind zertifiziert glutenfrei – sie enthalten weniger als 20 ppm Gluten, was als sicher für Zöliakiebetroffene gilt. Dieses Symbol ist verlässlicher als einfache Aufschriften wie „ohne Gluten" oder „glutenfrei".
          </p>

          <div className="affiliate-box">
            <span className="affiliate-label">Anzeige</span>
            <h4>🥣 Glutenfreie Mehle für zuhause</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Unsere Lieblingsmehle zum Backen – Reismehl, Buchweizenmehl und fertige Mehlmischungen für Kinder.
            </p>
            <a
              href="https://www.amazon.de/s?k=glutenfreies+mehl+backen&tag=waschtl-21"
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
            <Link href="/rezepte" className="card card-link" style={{ borderLeft: '4px solid var(--golden)' }}>
              <strong>🍳 Zu den Rezepten</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Glutenfreie Gerichte, die Kinder wirklich essen.</p>
            </Link>
            <Link href="/wissen/produkte-einkauf" className="card card-link" style={{ borderLeft: '4px solid var(--mint)' }}>
              <strong>🛒 Einkaufen & Produkte</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Welche Marken wirklich sicher sind.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
