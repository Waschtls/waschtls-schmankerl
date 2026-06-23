import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zöliakie-Diagnose bei Kindern – Schritt für Schritt',
  description:
    'Wie läuft die Diagnose bei Kindern ab? Bluttest, Magenspiegelung, was die Werte bedeuten – und was nach der Diagnose kommt.',
};

export default function DiagnoseKinder() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Diagnose bei Kindern
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Diagnose bei Kindern</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px' }}>
            Der Weg zur Diagnose kann lang sein. Hier erfahrt ihr, was euch erwartet.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>

          <div className="card" style={{ borderLeft: '4px solid var(--terracotta)', marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>⚠️ Wichtig: Nicht vorab glutenfrei essen</h3>
            <p style={{ margin: 0 }}>
              Bevor die Diagnose gestellt wurde, sollte das Kind weiterhin normal Gluten essen. Wer vorab aufhört, verfälscht die Testergebnisse – und die Diagnose wird unmöglich.
            </p>
          </div>

          <h2>Schritt 1: Bluttest beim Kinderarzt</h2>
          <p>
            Der erste Schritt ist ein Bluttest. Der Kinderarzt bestimmt dabei die sogenannten Transglutaminase-Antikörper (tTG-IgA) – das sind Abwehrstoffe, die der Körper bei Zöliakie gegen das eigene Darmgewebe bildet. Zusätzlich wird der Gesamt-IgA-Wert bestimmt, weil manche Kinder einen IgA-Mangel haben, der das Ergebnis verfälschen kann.
          </p>
          <p>
            Ein erhöhter tTG-IgA-Wert ist ein starkes Indiz für Zöliakie – aber noch keine Diagnose.
          </p>

          <h2>Schritt 2: Überweisung zum Kindergastroenterologen</h2>
          <p>
            Bei auffälligem Blutbefund überweist der Kinderarzt an einen Spezialisten – einen Kindergastroenterologen (Kindermagen-Darm-Arzt). Dort wird entschieden, ob eine Magenspiegelung (Gastroskopie) nötig ist.
          </p>
          <p>
            Laut aktuellen Leitlinien kann bei Kindern mit sehr hohen Antikörperwerten (≥10-facher Normwert) und bestimmten Voraussetzungen auf die Spiegelung verzichtet werden – die Diagnose gilt dann als gesichert.
          </p>

          <h2>Schritt 3: Magenspiegelung (falls nötig)</h2>
          <p>
            Bei der Gastroskopie wird ein dünner Schlauch mit Kamera durch den Mund in den Dünndarm geführt. Es werden kleine Gewebeproben (Biopsien) entnommen und unter dem Mikroskop untersucht. Bei Kindern wird das in Kurznarkose durchgeführt – das klingt schlimmer als es ist.
          </p>
          <p>
            Die Probe zeigt, ob und wie stark die Darmzotten geschädigt sind. Der Befund wird nach der sogenannten Marsh-Klassifikation eingeteilt (Marsh 1–4).
          </p>

          <h2>Nach der Diagnose</h2>
          <p>
            Wenn die Diagnose feststeht, beginnt die glutenfreie Ernährung – ab sofort und lebenslang. In den ersten Monaten sind regelmäßige Blutkontrollen wichtig, um zu sehen, ob sich die Antikörperwerte normalisieren.
          </p>
          <p>
            Viele Familien fühlen sich nach der Diagnose überrumpelt. Das ist normal. Unser Tipp: Nehmt euch Zeit, fragt nach einer Ernährungsberatung mit Zöliakie-Erfahrung, und vernetzt euch mit anderen betroffenen Familien.
          </p>

          <div className="card" style={{ background: 'var(--cream-dark)', border: '1px solid var(--border)', marginBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.75rem' }}>📋 Checkliste nach der Diagnose</h4>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2, margin: 0 }}>
              <li>Kinderarzt und Spezialisten über die Diagnose informieren</li>
              <li>Schule / Kita informieren (schriftlich)</li>
              <li>Ernährungsberatung mit GF-Erfahrung aufsuchen</li>
              <li>Küche zuhause auf Kreuzverunreinigung prüfen</li>
              <li>Deutsche Zöliakie Gesellschaft (DZG) kontaktieren</li>
              <li>Blutkontrollen nach 3 und 6 Monaten einplanen</li>
            </ul>
          </div>

          <div className="affiliate-box">
            <span className="affiliate-label">Anzeige</span>
            <h4>📋 Zöliakie-Tagebuch für die ersten Monate</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Symptome, Ernährung und Laborwerte dokumentieren – besonders in den ersten Monaten nach der Diagnose sehr hilfreich.
            </p>
            <a
              href="https://www.amazon.de/s?k=ernährungstagebuch+kinder&tag=waschtl-21"
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
              <strong>🥗 Jetzt: Ernährung umstellen</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Was glutenfrei bedeutet – im Detail.</p>
            </Link>
            <Link href="/wissen/schule-kita" className="card card-link" style={{ borderLeft: '4px solid var(--green-light)' }}>
              <strong>🏫 Schule & Kita informieren</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Wie ihr das Gespräch führt.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
