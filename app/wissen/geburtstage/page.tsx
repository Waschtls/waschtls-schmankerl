import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreie Geburtstage für Kinder mit Zöliakie',
  description:
    'Damit kein Kind leer ausgeht: Tipps für glutenfreie Geburtstagskuchen, Partysnacks und wie ihr andere Eltern informiert.',
};

export default function Geburtstage() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Geburtstage
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Geburtstage glutenfrei</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px' }}>
            Mit ein bisschen Vorbereitung wird jede Feier zum Genuss – auch für Kinder mit Zöliakie.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>

          <h2>Der eigene Geburtstag</h2>
          <p>
            Hier habt ihr volle Kontrolle – und das ist gut so. Ein glutenfreier Geburtstagskuchen muss nicht weniger lecker sein als ein normaler. Viele unserer Lieblingsrezepte basieren auf Mandelmehl oder Reismehl und sind sogar saftig als klassische Varianten.
          </p>
          <p>
            Wenn ihr Freunde einladet: Einfach alle Snacks glutenfrei gestalten. Chips, Obst, glutenfreie Mini-Pizzen, Popcorn – kein Kind wird vermissen, dass kein normales Brot dabei ist.
          </p>

          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.75rem' }}>🎂 Unsere liebsten glutenfreien Kuchen</h4>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2, margin: 0 }}>
              <li><Link href="/rezepte" style={{ color: 'var(--green-mid)', fontWeight: 600 }}>Schokoladenkuchen mit Mandelmehl</Link> – saftig, gelingt immer</li>
              <li><Link href="/rezepte" style={{ color: 'var(--green-mid)', fontWeight: 600 }}>Zitronen-Joghurt-Kuchen</Link> – leicht, frisch, auch für Sommerfeste</li>
              <li><Link href="/rezepte" style={{ color: 'var(--green-mid)', fontWeight: 600 }}>Regenbogen-Muffins</Link> – perfekt für Kindergeburtstage</li>
            </ul>
          </div>

          <h2>Eingeladen sein – bei anderen Kindern</h2>
          <p>
            Das ist die größere Herausforderung. Ihr könnt nicht kontrollieren, was auf der Party steht. Unsere bewährte Strategie:
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-mid)', lineHeight: 2, marginBottom: '1.5rem' }}>
            <li><strong>Vorab die Eltern informieren</strong> – kurze, freundliche Nachricht: „Unser Kind hat Zöliakie, darf ich etwas beisteuern?"</li>
            <li><strong>Eigenen Kuchen mitbringen</strong> – in einem schönen Behälter, damit es nicht nach „Sonderbehandlung" aussieht</li>
            <li><strong>Snack-Päckchen mitgeben</strong> – kleine Tüte mit sicheren Knabbereien, die das Kind diskret nutzen kann</li>
            <li><strong>Das Kind vorbereiten</strong> – kurzes Gespräch vorher: „Was kannst du essen, was lieber nicht?"</li>
          </ul>

          <h2>Was ist meist sicher auf Partys?</h2>
          <p>
            Ohne Nachfragen relativ sicher: frisches Obst, Gemüsesticks, Naturjoghurt, viele Chips-Sorten (Zutatenliste prüfen), Popcorn (ohne Würzmischung), Gummibärchen (Marke prüfen). Alles andere – Kuchen, Sandwiches, Mini-Quiches – immer nachfragen oder meiden.
          </p>

          <div className="affiliate-box">
            <span className="affiliate-label">Anzeige</span>
            <h4>🎁 Glutenfreies Gebäck & Party-Snacks</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Fertige glutenfreie Snacks für unterwegs – wenn keine Zeit zum Backen bleibt.
            </p>
            <a
              href="https://www.amazon.de/s?k=glutenfreies+gebäck+kinder&tag=waschtl-21"
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
              <strong>🍰 Rezepte für Geburtstagskuchen</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Glutenfreie Kuchen die wirklich gelingen.</p>
            </Link>
            <Link href="/wissen/reisen" className="card card-link" style={{ borderLeft: '4px solid var(--mint)' }}>
              <strong>✈️ Reisen mit Zöliakie</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Auch im Urlaub sicher essen.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
