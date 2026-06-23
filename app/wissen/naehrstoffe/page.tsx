import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nährstoffmangel bei Zöliakie – Was Eltern wissen müssen',
  description:
    'Welche Nährstoffe bei Kindern mit Zöliakie häufig fehlen, warum das so ist und wie ihr gegensteuert.',
};

export default function Naehrstoffe() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Nährstoffe
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Nährstoffmangel & Gesundheit</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px' }}>
            Warum Zöliakie oft zu Mangelerscheinungen führt – und was ihr dagegen tun könnt.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>

          <h2>Warum entsteht Nährstoffmangel?</h2>
          <p>
            Bei unbehandelter Zöliakie sind die Darmzotten geschädigt – die kleinen Ausstülpungen, die Nährstoffe aus der Nahrung aufnehmen. Dadurch gelangt weniger von dem, was euer Kind isst, wirklich ins Blut. Das kann über Monate oder Jahre zu Mangelerscheinungen führen, selbst wenn die Ernährung gut ist.
          </p>
          <p>
            Nach der Diagnose und mit glutenfreier Ernährung erholen sich die Darmzotten – aber das dauert. Besonders in den ersten Monaten nach der Umstellung lohnen sich regelmäßige Blutkontrollen.
          </p>

          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '1rem' }}>🩸 Häufige Mangelwerte bei Kindern mit Zöliakie</h4>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {[
                { name: 'Eisen', why: 'Wird im oberen Dünndarm aufgenommen – genau dort, wo die Schäden am größten sind.', sign: 'Müdigkeit, Blässe, Konzentrationsprobleme' },
                { name: 'Vitamin D', why: 'Fettlösliche Vitamine werden bei Darmproblemen schlechter aufgenommen.', sign: 'Knochenschmerzen, häufige Infekte' },
                { name: 'Kalzium', why: 'Eng mit Vitamin D verbunden – wichtig für Knochen und Zähne.', sign: 'Krämpfe, langsames Wachstum' },
                { name: 'Folsäure (B9)', why: 'Wird im Dünndarm aufgenommen, oft defizitär.', sign: 'Blutarmut, Erschöpfung' },
                { name: 'Zink', why: 'Wichtig für Immunsystem und Wachstum, häufig erniedrigt.', sign: 'Häufige Erkrankungen, Wachstumsverzögerung' },
              ].map(({ name, why, sign }) => (
                <div key={name} style={{ borderLeft: '3px solid var(--golden)', paddingLeft: '1rem' }}>
                  <strong>{name}</strong>
                  <p style={{ margin: '0.25rem 0 0.1rem', fontSize: '0.875rem' }}>{why}</p>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-light)' }}>Zeichen: {sign}</p>
                </div>
              ))}
            </div>
          </div>

          <h2>Was ihr tun könnt</h2>
          <p>
            Regelmäßige Blutkontrollen (alle 3–6 Monate in der Anfangsphase, danach jährlich) sind das wichtigste Mittel. So seht ihr frühzeitig, wo Defizite entstehen.
          </p>
          <p>
            Ernährungsmäßig hilft eine abwechslungsreiche, naturbelassene glutenfreie Kost – viel Gemüse, Hülsenfrüchte, Nüsse, Fisch und Fleisch. Stark verarbeitete glutenfreie Fertigprodukte sind oft nährstoffärmer als ihre glutenhaltigen Pendants.
          </p>
          <p>
            Nahrungsergänzung nur nach Rücksprache mit dem Arzt – aber gerade Vitamin D und Eisen werden von Kinderärzten bei Zöliakie häufig empfohlen.
          </p>

          <div className="affiliate-box">
            <span className="affiliate-label">Anzeige</span>
            <h4>💊 Vitamin D & Eisen für Kinder</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Kindgerechte Präparate, die wir selbst verwenden – aber immer in Absprache mit dem Kinderarzt einsetzen.
            </p>
            <a
              href="https://www.amazon.de/s?k=vitamin+d+eisen+kinder+tropfen&tag=waschtl-21"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn btn-golden"
              style={{ fontSize: '0.875rem' }}
            >
              Auf Amazon ansehen →
            </a>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginTop: '0.75rem', marginBottom: 0 }}>
              Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Kein Ersatz für ärztlichen Rat.
            </p>
          </div>

          <hr className="divider" />
          <div className="grid-2">
            <Link href="/wissen/ernaehrung-grundlagen" className="card card-link" style={{ borderLeft: '4px solid var(--green-light)' }}>
              <strong>🥗 Ernährungsgrundlagen</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Was ihr täglich auf den Tisch bringen könnt.</p>
            </Link>
            <Link href="/wissen/diagnose-kinder" className="card card-link" style={{ borderLeft: '4px solid var(--golden)' }}>
              <strong>🩺 Diagnose & Kontrollen</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Wie oft zur Kontrolle – und was gemessen wird.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
