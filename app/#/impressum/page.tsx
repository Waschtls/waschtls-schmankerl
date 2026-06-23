import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impressum – Waschtls Schmankerl',
  robots: { index: false, follow: false },
};

export default function Impressum() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '2.5rem 0 2rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> › Impressum
          </div>
          <h1 style={{ color: 'var(--golden)' }}>Impressum</h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '680px' }}>
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Sebastian Klug<br />
            Friedrich-Ebert-Str. 15a<br />
            86199 Augsburg<br />
            Deutschland
          </p>

          <h3>Kontakt</h3>
          <p>
            E-Mail: <a href="mailto:contact@waschtls-schmankerl.de" style={{ color: 'var(--green-mid)' }}>contact@waschtls-schmankerl.de</a>
          </p>

          <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
          <p>
            Sebastian Klug<br />
            Friedrich-Ebert-Str. 15a<br />
            86199 Augsburg
          </p>

          <hr className="divider" />

          <h2>Affiliate-Hinweis</h2>
          <p>
            Diese Website enthält Affiliate-Links, insbesondere Links zum Amazon-Partnerprogramm. Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Alle Affiliate-Links sind auf der Website deutlich als „Anzeige" gekennzeichnet.
          </p>

          <h2>Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website dienen ausschließlich der allgemeinen Information und ersetzen keine ärztliche Beratung oder Behandlung. Bei gesundheitlichen Fragen wenden Sie sich bitte an einen Arzt oder eine Ärztin.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors.
          </p>
        </div>
      </section>
    </>
  );
}
