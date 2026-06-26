import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Airfryer für glutenfreie Küche – Empfehlungen & Kauftipps',
  description:
    'Warum Zöliakie-Familien einen eigenen Airfryer brauchen – und welche Modelle sich lohnen. Mit Kauftipps und Affiliate-Links zu Amazon.',
};

const modelle = [
  {
    name: 'Philips Airfryer 3000 Series',
    kurz: 'Solide, intuitiv, gut für Einsteiger',
    fassungsvermoegen: 'ca. 6,2 L',
    preis: 'ca. 120–150 €',
    fuer: 'Familien mit 2–4 Personen, die einen zuverlässigen Allrounder suchen',
    hinweis: 'Sichtfenster praktisch, starke Leistung, einfache Reinigung',
    link: 'https://www.amazon.de/s?k=philips+airfryer+3000+series&tag=waschtl-21',
  },
  {
    name: 'Cosori Airfryer (Einzelkammer)',
    kurz: 'Sehr gute Ergebnisse laut unabhängigen Tests',
    fassungsvermoegen: 'ca. 5,5 L',
    preis: 'ca. 90–110 €',
    fuer: 'Familien die einen günstigen Einstieg suchen ohne Kompromisse beim Ergebnis',
    hinweis: 'In mehreren unabhängigen Tests gut bewertet, günstiger als die Konkurrenz',
    link: 'https://www.amazon.de/s?k=cosori+airfryer+heißluftfritteuse&tag=waschtl-21',
  },
  {
    name: 'Ninja Foodi Dual Zone',
    kurz: 'Zwei separate Körbe – ideal für gemischte Haushalte',
    fassungsvermoegen: '2 × 4,75 L (9,5 L gesamt)',
    preis: 'ca. 180–220 €',
    fuer: 'Haushalte wo GF und normale Küche parallel laufen – Korb 1 nur GF, Korb 2 für den Rest',
    hinweis: 'Beide Zonen können gleichzeitig mit unterschiedlichen Temperaturen laufen – kein Warten mehr',
    link: 'https://www.amazon.de/s?k=ninja+foodi+dual+zone+airfryer&tag=waschtl-21',
  },
  {
    name: 'Emerio Airfryer (Budget)',
    kurz: 'Günstiger Einstieg für kleinen Haushalt',
    fassungsvermoegen: 'ca. 3–4 L',
    preis: 'ca. 40–60 €',
    fuer: 'Wer einen kleinen separaten GF-Only-Airfryer neben dem Hauptgerät will',
    hinweis: 'Nicht für große Portionen, aber als reines GF-Gerät absolut ausreichend',
    link: 'https://www.amazon.de/s?k=heißluftfritteuse+klein+günstig&tag=waschtl-21',
  },
];

export default function AiryerPage() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/produkte" style={{ color: 'var(--mint)' }}>Produkte</Link> › Airfryer
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.75rem' }}>Airfryer für Zöliakie-Familien</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '580px', lineHeight: 1.75 }}>
            Ein Airfryer ist im glutenfreien Haushalt großartig – aber nur wenn er ausschließlich für GF genutzt wird.
            Heißluft verteilt Krümel überall im Gerät, ein einmaliger Kontakt reicht für eine Reaktion.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginTop: '0.75rem' }}>
            Affiliate-Links sind als „Anzeige" gekennzeichnet. Als Amazon-Partner verdienen wir an qualifizierten Verkäufen.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>

          {/* Warum eigenes Gerät */}
          <div style={{
            padding: '1.25rem 1.5rem', marginBottom: '2.5rem',
            background: 'rgba(231,111,81,0.07)',
            border: '1.5px solid rgba(231,111,81,0.25)',
            borderRadius: '12px', fontSize: '0.9rem', lineHeight: 1.8,
          }}>
            <strong style={{ color: 'var(--terracotta)' }}>⚠️ Wichtig:</strong>{' '}
            Heißluftfritteusen verteilen beim Betrieb feine Krümel und Partikel im gesamten Garraum.
            Ein gründliches Reinigen reicht bei Zöliakie nicht – die Rillen und Gitter lassen sich nie vollständig säubern.
            Unser Tipp: entweder ein <strong>separates Gerät nur für GF</strong>, oder die Dual-Zone-Variante
            mit einem Korb der ausschließlich für glutenfreies reserviert ist.
          </div>

          {/* Kaufkriterien */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.1rem', color: 'var(--green-deep)', marginBottom: '1rem' }}>
              Worauf wir beim Kauf geachtet haben
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
              {[
                { icon: '🧹', titel: 'Reinigbarkeit', text: 'Herausnehmbare, spülmaschinenfeste Körbe. Keine tiefen Rillen die Krümel sammeln.' },
                { icon: '🌡️', titel: 'Ober-/Unterhitze', text: 'Gute Airfryer arbeiten mit direkter Oberhitze – kein Umluft-Modus für GF-Teige.' },
                { icon: '📦', titel: 'Volumen', text: 'Für eine Familie mit Kind mindestens 5 Liter einplanen.' },
                { icon: '🔇', titel: 'Geräuschpegel', text: 'Manche Modelle sind sehr laut – relevant wenn das Kind schläft.' },
              ].map(k => (
                <div key={k.titel} style={{
                  padding: '0.875rem 1rem',
                  background: '#fff', border: '1.5px solid var(--border)',
                  borderRadius: '10px',
                }}>
                  <div style={{ fontSize: '1.25rem', marginBottom: '0.35rem' }}>{k.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--green-deep)', marginBottom: '0.25rem' }}>{k.titel}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>{k.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Modelle */}
          <h2 style={{ fontSize: '1.1rem', color: 'var(--green-deep)', marginBottom: '1rem' }}>
            Modelle die wir empfehlen
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
            {modelle.map(m => (
              <div key={m.name} className="card" style={{ padding: '1.25rem 1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '0.975rem', margin: 0, color: 'var(--green-deep)' }}>{m.name}</h3>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-mid)', whiteSpace: 'nowrap' }}>{m.preis}</span>
                </div>
                <p style={{ fontSize: '0.8rem', fontStyle: 'italic', color: 'var(--text-light)', margin: '0 0 0.6rem' }}>{m.kurz}</p>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-mid)' }}>📦 {m.fassungsvermoegen}</span>
                </div>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-mid)', lineHeight: 1.65, margin: '0 0 0.5rem' }}>
                  <strong>Für wen:</strong> {m.fuer}
                </p>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-mid)', lineHeight: 1.65, margin: '0 0 0.875rem' }}>
                  💡 {m.hinweis}
                </p>
                <a
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                    fontSize: '0.8rem', fontWeight: 700,
                    color: 'var(--green-mid)', textDecoration: 'none',
                  }}
                >
                  <span style={{
                    fontSize: '0.62rem', padding: '0.1rem 0.4rem',
                    background: 'rgba(231,111,81,0.1)', color: 'var(--terracotta)',
                    border: '1px solid rgba(231,111,81,0.25)', borderRadius: '4px',
                    fontWeight: 700, whiteSpace: 'nowrap',
                  }}>Anzeige</span>
                  Auf Amazon ansehen →
                </a>
              </div>
            ))}
          </div>

          {/* Stiftung Warentest Verweis */}
          <div style={{
            padding: '1.25rem 1.5rem', marginBottom: '2rem',
            background: 'var(--cream-dark)', border: '1px solid var(--border)',
            borderRadius: '12px', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-mid)',
          }}>
            <strong style={{ color: 'var(--text-dark)' }}>Unabhängige Tests:</strong>{' '}
            Die Stiftung Warentest hat Heißluftfritteusen getestet – die vollständigen Testergebnisse
            mit Noten und Details sind kostenpflichtig, aber öffentlich zugänglich auf{' '}
            <a
              href="https://www.test.de/Heissluftfritteusen-im-Test-5115675-0/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--green-mid)', fontWeight: 600 }}
            >
              test.de →
            </a>{' '}
            Laut öffentlich verfügbaren Zusammenfassungen haben mehrere Modelle im Test „gut" erhalten,
            darunter Cosori und Ninja. Wir geben keine Testnoten weiter – die Originaldaten gehören der Stiftung Warentest.
          </div>

          {/* Affiliate-Hinweis */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', lineHeight: 1.7 }}>
              * Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Die Links sind als „Anzeige" gekennzeichnet.
              Preisangaben sind Richtwerte und können sich ändern. Modellvarianten und Verfügbarkeit können abweichen.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
