import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – Waschtls Schmankerl',
  robots: { index: false, follow: false },
};

export default function Datenschutz() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '2.5rem 0 2rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> › Datenschutz
          </div>
          <h1 style={{ color: 'var(--golden)' }}>Datenschutzerklärung</h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '680px' }}>

          <h2>1. Verantwortlicher</h2>
          <p>
            Sebastian Klug, Friedrich-Ebert-Str. 15a, 86199 Augsburg<br />
            E-Mail: <a href="mailto:hallo@waschtls-schmankerl.de" style={{ color: 'var(--green-mid)' }}>hallo@waschtls-schmankerl.de</a>
          </p>

          <h2>2. Hosting</h2>
          <p>
            Diese Website wird über <strong>Vercel Inc.</strong> (440 N Barranca Ave #4133, Covina, CA 91723, USA) gehostet. Beim Aufruf der Website werden serverseitig Zugriffsdaten (IP-Adresse, Datum, Uhrzeit, aufgerufene Seite) protokolliert. Diese Daten werden zur Gewährleistung des Betriebs benötigt und nach spätestens 30 Tagen gelöscht. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          <h2>3. Cookies & Einwilligung</h2>
          <p>
            Diese Website zeigt beim ersten Besuch einen Cookie-Banner. Solange Sie keine Einwilligung erteilen,
            werden keine Marketing- oder Analyse-Cookies gesetzt. Ihre Wahl wird im lokalen Speicher Ihres Browsers
            (localStorage) hinterlegt und kann jederzeit über den Schalter unten links auf der Seite widerrufen werden.
          </p>
          <p>
            Technisch notwendige Verarbeitungen (z.&nbsp;B. Hosting-Logs durch Vercel, siehe Abschnitt&nbsp;2) sind
            von der Einwilligung unabhängig und erfordern keine Zustimmung.
          </p>

          <h2>4. Google Ads</h2>
          <p>
            <strong>Nur bei Einwilligung</strong> setzt diese Website Google Ads (Google LLC, 1600 Amphitheatre
            Parkway, Mountain View, CA 94043, USA) ein, um Werbeanzeigen zu schalten und deren Wirksamkeit zu messen.
            Dabei können Cookies verwendet werden, die Google das Erkennen von Wiederholt-Besuchen und die
            Conversion-Messung ermöglichen. Rechtsgrundlage: Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO (Einwilligung).
            Datenschutzrichtlinie Google:{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--green-mid)' }}>policies.google.com/privacy</a>.
          </p>

          <h2>5. Google Analytics</h2>
          <p>
            <strong>Nur bei Einwilligung</strong> verwenden wir Google Analytics&nbsp;4 (Google LLC) zur
            anonymisierten Analyse des Nutzungsverhaltens (aufgerufene Seiten, Verweildauer, Gerätekategorie).
            IP-Adressen werden anonymisiert (IP-Anonymisierung aktiv). Google verarbeitet Daten auf Servern,
            die nach dem EU-US Data Privacy Framework zertifiziert sind.
            Rechtsgrundlage: Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO (Einwilligung).
          </p>
          <p>
            Einwilligung widerrufen: Cookie-Banner über den Schalter unten links erneut öffnen und
            „Nur notwendige" wählen. Alternativ:{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--green-mid)' }}>Google Analytics Opt-out Add-on</a>.
          </p>

          <h2>6. Affiliate-Links (Amazon)</h2>
          <p>
            Diese Website nimmt am Amazon-Partnerprogramm teil. Beim Klick auf einen Amazon-Affiliate-Link
            kann Amazon ein Cookie setzen, das den Kauf dem Klick zuordnet. Dies erfolgt unabhängig von der
            Cookie-Einwilligung auf unserer Seite und unterliegt der Datenschutzrichtlinie von Amazon:{' '}
            <a href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010"
              target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-mid)' }}>
              Amazon Datenschutzerklärung
            </a>.
          </p>

          <h2>7. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit und Widerspruch. Kontakt: die oben genannte E-Mail-Adresse. Sie haben
            außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren (für Bayern:
            Bayerisches Landesamt für Datenschutzaufsicht, <a href="https://www.lda.bayern.de"
              target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-mid)' }}>lda.bayern.de</a>).
          </p>

          <h2>8. Externe Links</h2>
          <p>
            Diese Website enthält Links zu externen Websites. Für deren Inhalte und Datenschutzpraktiken
            sind die jeweiligen Betreiber verantwortlich.
          </p>

          <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'var(--text-light)' }}>
            Stand: Juni 2026
          </p>
        </div>
      </section>
    </>
  );
}
