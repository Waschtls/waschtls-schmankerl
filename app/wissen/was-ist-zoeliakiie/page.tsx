import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Was ist Zöliakie? – Einfach erklärt für Eltern',
  description:
    'Zöliakie ist keine Allergie, sondern eine Autoimmunerkrankung. Was das bedeutet, wie sie entsteht und warum lebenslang glutenfrei essen so wichtig ist.',
};

export default function WasIstZoeliakiie() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Was ist Zöliakie?
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Was ist Zöliakie?</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px' }}>
            Keine Allergie, keine Mode-Diät – sondern eine ernst zu nehmende Autoimmunerkrankung.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>

          <div className="card" style={{ borderLeft: '4px solid var(--golden)', marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Kurz zusammengefasst</h3>
            <p style={{ margin: 0 }}>
              Bei Zöliakie löst Gluten – ein Protein in Weizen, Roggen und Gerste – eine Immunreaktion aus, die den Dünndarm schädigt. Die einzige Behandlung: lebenslang strikt glutenfrei essen.
            </p>
          </div>

          <h2>Was passiert im Körper?</h2>
          <p>
            Der Dünndarm ist mit winzigen Zotten ausgekleidet, die Nährstoffe aus der Nahrung aufnehmen. Bei Menschen mit Zöliakie erkennt das Immunsystem Gluten fälschlicherweise als Feind – und greift dabei auch die eigenen Darmzotten an.
          </p>
          <p>
            Mit der Zeit werden diese Zotten flacher oder verschwinden ganz. Das Ergebnis: Der Körper kann Nährstoffe nicht mehr richtig aufnehmen, auch wenn man eigentlich genug isst.
          </p>

          <h2>Zöliakie ist keine Allergie</h2>
          <p>
            Das ist ein wichtiger Unterschied. Bei einer Weizenallergie reagiert das Immunsystem mit Antikörpern (IgE) auf Weizen-Proteine – das kann sich in Minuten zeigen und klingt auch wieder ab. Bei Zöliakie ist die Reaktion anders: Das Immunsystem greift dauerhaft das eigene Gewebe an (Autoimmunreaktion). Selbst kleine Mengen Gluten – ein Krümel Brot – können Wochen nach der Reaktion noch Schäden im Darm hinterlassen, auch wenn man es nicht spürt.
          </p>

          <h2>Welche Symptome gibt es?</h2>
          <p>Zöliakie zeigt sich sehr unterschiedlich – besonders bei Kindern. Häufige Zeichen sind:</p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-mid)', lineHeight: 2 }}>
            <li>Bauchschmerzen, Blähungen, Durchfall</li>
            <li>Wachstumsverzögerung oder Untergewicht</li>
            <li>Müdigkeit und Antriebslosigkeit</li>
            <li>Eisenmangel trotz ausreichender Ernährung</li>
            <li>Hautausschlag (Dermatitis herpetiformis)</li>
            <li>Stimmungsschwankungen, Konzentrationsprobleme</li>
          </ul>
          <p>
            Manchmal gibt es gar keine offensichtlichen Symptome – die Erkrankung wird dann zufällig entdeckt, z.B. bei Blutuntersuchungen wegen anderer Beschwerden.
          </p>

          <h2>Wie häufig ist Zöliakie?</h2>
          <p>
            Etwa 1 von 100 Menschen in Europa hat Zöliakie – viele davon wissen es nicht. Bei Verwandten ersten Grades (Eltern, Geschwister) steigt das Risiko auf etwa 1 zu 10. Wenn also ein Kind in der Familie betroffen ist, lohnt sich ein Test für alle.
          </p>

          <h2>Gibt es eine Heilung?</h2>
          <p>
            Nein – aber die gute Nachricht: Eine konsequent glutenfreie Ernährung stoppt die Entzündung. Die Darmzotten erholen sich in der Regel innerhalb von Monaten bis Jahren. Kinder, die früh diagnostiziert werden und konsequent glutenfrei leben, können völlig normal aufwachsen.
          </p>

          <div className="affiliate-box">
            <span className="affiliate-label">Anzeige</span>
            <h4>📖 Buchtipp: Zöliakie – Das Selbsthilfebuch</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Eines der besten deutschsprachigen Bücher zum Thema – von Betroffenen für Betroffene. Besonders hilfreich nach der Erstdiagnose.
            </p>
            <a
              href="https://www.amazon.de/s?k=zöliakie+buch+kinder&tag=waschtl-21"
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

          <h3>Nächste Schritte</h3>
          <div className="grid-2" style={{ marginTop: '1rem' }}>
            <Link href="/wissen/diagnose-kinder" className="card card-link" style={{ borderLeft: '4px solid var(--green-light)' }}>
              <strong>🩺 Diagnose bei Kindern</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Wie läuft die Diagnose ab und was kommt danach?</p>
            </Link>
            <Link href="/wissen/ernaehrung-grundlagen" className="card card-link" style={{ borderLeft: '4px solid var(--golden)' }}>
              <strong>🥗 Glutenfreie Ernährung</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Was darf mein Kind essen – und was nicht?</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
