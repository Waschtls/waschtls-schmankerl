import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zöliakie in Schule & Kita – Tipps für Eltern',
  description:
    'Wie ihr Lehrer, Erzieherinnen und andere Eltern über Zöliakie informiert – ohne Drama, aber mit klaren Ansagen.',
};

export default function SchuleKita() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Schule & Kita
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Zöliakie in Schule & Kita</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px' }}>
            Damit euer Kind sicher und selbstbewusst im Alltag zurecht kommt.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>

          <h2>Das Gespräch mit der Einrichtung</h2>
          <p>
            Das erste Gespräch mit dem Kindergarten oder der Schule ist entscheidend. Geht es sachlich an – ohne Panik, aber mit klaren Erwartungen. Die meisten Einrichtungen sind kooperativ, wenn man ihnen konkret erklärt, was zu tun ist.
          </p>
          <p>
            Nehmt zum Gespräch eine kurze schriftliche Information mit, die ihr hinterlassen könnt – für alle Betreuer und Lehrer, nicht nur für die Leiterin.
          </p>

          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.75rem' }}>📄 Was ins Informationsblatt gehört</h4>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2, margin: 0 }}>
              <li>Kurze Erklärung was Zöliakie ist (keine Allergie, Autoimmunerkrankung)</li>
              <li>Was passiert, wenn das Kind Gluten bekommt (auch kleine Mengen)</li>
              <li>Was das Kind essen darf – und was nicht</li>
              <li>Hinweis auf versteckte Quellen (Knete, Bastelkleber, Geburtstagsfeier)</li>
              <li>Eure Kontaktdaten für Rückfragen</li>
              <li>Name des behandelnden Arztes (optional)</li>
            </ul>
          </div>

          <h2>Schulkantine & Mittagessen</h2>
          <p>
            Viele Kantinen bieten auf Anfrage glutenfreie Alternativen an – aber verlasst euch nicht blind darauf. Fragt konkret nach: Werden separate Utensilien verwendet? Gibt es eine Kreuzverunreinigung durch gemeinsame Tresen, Zangen oder Schöpflöffel?
          </p>
          <p>
            Eine sichere Alternative: Das Kind bringt sein Mittagessen mit. Das ist anfangs mehr Aufwand, aber gibt euch volle Kontrolle. Mit der Zeit lernt das Kind selbst, was es essen kann und was nicht.
          </p>

          <h2>Geburtstagsfeiern in der Klasse</h2>
          <p>
            Das klassische Problem: Jemand bringt Kuchen mit, und euer Kind steht daneben. Unsere Lösung: Wir haben immer ein kleines Päckchen glutenfreier Kekse oder Muffins in der Schultasche – dann kann das Kind trotzdem mitfeiern, ohne auf etwas verzichten zu müssen.
          </p>
          <p>
            Es lohnt sich auch, die Klassenlehrerin vorab zu bitten, euch kurz zu informieren wenn ein Geburtstag ansteht – dann könnt ihr etwas Passendes mitschicken.
          </p>

          <h2>Das Kind stärken</h2>
          <p>
            Je selbstbewusster das Kind mit seiner Zöliakie umgeht, desto leichter wird der Alltag. Übt zuhause kurze Sätze: „Ich darf das leider nicht essen, ich hab Zöliakie" – einfach, klar, ohne Entschuldigung. Kinder die das selbst erklären können, sind viel weniger auf elterliche Absicherung angewiesen.
          </p>

          <div className="affiliate-box">
            <span className="affiliate-label">Anzeige</span>
            <h4>🍪 Glutenfreie Snacks für die Schultasche</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Praktische, leckere Snacks die ihr immer dabei haben könnt – für Geburtstage, Ausflüge und Pausen.
            </p>
            <a
              href="https://www.amazon.de/s?k=glutenfreie+snacks+kinder&tag=waschtl-21"
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
            <Link href="/wissen/geburtstage" className="card card-link" style={{ borderLeft: '4px solid var(--golden)' }}>
              <strong>🎂 Geburtstage glutenfrei</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Tipps für Feiern zuhause und auswärts.</p>
            </Link>
            <Link href="/wissen/kindern-erklaeren" className="card card-link" style={{ borderLeft: '4px solid var(--mint)' }}>
              <strong>🧠 Kindern Zöliakie erklären</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Auf Augenhöhe – ohne Angst zu machen.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
