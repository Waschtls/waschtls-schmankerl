import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisen mit Zöliakie – Tipps für Familien',
  description:
    'Im Urlaub glutenfrei essen mit Kind: Hotels, Restaurants, Ausland – was ihr beachten müsst und wie ihr entspannt reist.',
};

export default function Reisen() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Reisen
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Reisen mit Zöliakie</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px' }}>
            Mit der richtigen Vorbereitung ist Urlaub auch mit Zöliakie entspannt möglich.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>

          <h2>Vorbereitung ist alles</h2>
          <p>
            Je besser ihr vorbereitet seid, desto weniger Stress habt ihr vor Ort. Glutenfreies Reisen bedeutet nicht auf Urlaub verzichten – es bedeutet mehr planen.
          </p>

          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.75rem' }}>✅ Packliste für glutenfreies Reisen</h4>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2, margin: 0 }}>
              <li>Glutenfreie Snacks und Notfallverpflegung für unterwegs</li>
              <li>Reisekarten (Cards) mit „Ich habe Zöliakie" in Landessprache</li>
              <li>Glutenfreie Sojasauce in kleinen Tütchen (für Asien-Reisen)</li>
              <li>Ärztliches Attest auf Englisch (nützlich bei Zoll/Flugzeug)</li>
              <li>App: „Find Me Gluten Free" – für glutenfreie Restaurants weltweit</li>
            </ul>
          </div>

          <h2>Hotel & Unterkunft</h2>
          <p>
            Kontaktiert das Hotel vorab per E-Mail (schriftlich, damit es dokumentiert ist) und erklärt die Situation. Seriöse Hotels mit eigenem Koch können oft glutenfreie Optionen anbieten. Frühstücksbuffets sind oft das größere Problem als Abendessen – wegen Kreuzverunreinigung durch gemeinsame Zangen und Löffel.
          </p>
          <p>
            Ferienwohnungen mit eigener Küche sind für Familien mit Zöliakie oft die beste Wahl – ihr kocht selbst, habt volle Kontrolle und spart nebenbei Geld.
          </p>

          <h2>Im Restaurant</h2>
          <p>
            Reisekarten auf Landessprache sind Gold wert – kleine Karten, die erklären: „Ich habe Zöliakie und darf kein Gluten essen. Bitte kein Weizen, Roggen, Gerste." Gibt es in vielen Sprachen zum Ausdrucken (z.B. über celiactravel.com).
          </p>
          <p>
            Fragt immer nach Kreuzverunreinigung – nicht nur nach Zutaten. In vielen Restaurants wird Pasta in demselben Wasser gekocht wie normale Nudeln, oder die Fritteuse ist geteilt.
          </p>

          <h2>Reiseziele</h2>
          <p>
            Manche Länder sind glutenfreundlicher als andere. <strong>Italien</strong> überrascht viele – als Heimat der Zöliakie-Forschung gibt es dort in fast jedem Restaurant glutenfreie Pasta und Pizza. <strong>Skandinavien</strong> ist sehr aufgeklärt. <strong>Asien</strong> ist schwieriger wegen der allgegenwärtigen Sojasoße.
          </p>

          <div className="affiliate-box">
            <span className="affiliate-label">Anzeige</span>
            <h4>🧳 Reisesnacks glutenfrei</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Praktische, reisefeste Snacks für lange Fahrten und Flüge – glutenfrei und kinderfreundlich.
            </p>
            <a
              href="https://www.amazon.de/s?k=glutenfreie+reisesnacks&tag=waschtl-21"
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
            <Link href="/wissen/ernaehrung-grundlagen" className="card card-link" style={{ borderLeft: '4px solid var(--golden)' }}>
              <strong>🥗 Ernährungsgrundlagen</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Was darf mein Kind essen?</p>
            </Link>
            <Link href="/wissen/produkte-einkauf" className="card card-link" style={{ borderLeft: '4px solid var(--mint)' }}>
              <strong>🛒 Produkte & Einkauf</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Sichere Marken und wo ihr sie findet.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
