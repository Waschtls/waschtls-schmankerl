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
            E-Mail: <a href="mailto:contact@waschtls-schmankerl.de" style={{ color: 'var(--green-mid)' }}>contact@waschtls-schmankerl.de</a>
          </p>

          <h2>2. Hosting</h2>
          <p>
            Diese Website wird über <strong>Vercel Inc.</strong> (440 N Barranca Ave #4133, Covina, CA 91723, USA) gehostet. Beim Aufruf der Website werden serverseitig Zugriffsdaten (IP-Adresse, Datum, Uhrzeit, aufgerufene Seite) protokolliert. Diese Daten werden zur Gewährleistung des Betriebs benötigt und nach spätestens 30 Tagen gelöscht. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          <h2>3. Cookies & Tracking</h2>
          <p>
            Diese Website verwendet <strong>keine Marketing-Cookies</strong> und kein Cross-Site-Tracking. Es wird kein Google Analytics oder ähnliches Tracking eingesetzt. Es ist kein Cookie-Banner erforderlich.
          </p>

          <h2>4. Newsletter</h2>
          <p>
            Falls Sie sich für den Newsletter anmelden, wird Ihre E-Mail-Adresse gespeichert und ausschließlich zum Versand des Newsletters verwendet. Sie können sich jederzeit abmelden. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
          </p>

          <h2>5. Affiliate-Links (Amazon)</h2>
          <p>
            Diese Website nimmt am Amazon-Partnerprogramm teil. Beim Klick auf einen Amazon-Affiliate-Link wird ein Cookie von Amazon gesetzt, das Amazon ermöglicht, den Kauf Ihrem Klick zuzuordnen. Informationen zur Datenverarbeitung durch Amazon: <a href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-mid)' }}>Amazon Datenschutzerklärung</a>.
          </p>

          <h2>6. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenden Sie sich dazu an die oben genannte E-Mail-Adresse. Sie haben außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
          </p>

          <h2>7. Externe Links</h2>
          <p>
            Diese Website enthält Links zu externen Websites. Für deren Inhalte und Datenschutzpraktiken sind die jeweiligen Betreiber verantwortlich.
          </p>

          <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'var(--text-light)' }}>
            Stand: Juni 2026
          </p>
        </div>
      </section>
    </>
  );
}
