import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aktuelles – Neuigkeiten zu Zöliakie & Glutenunverträglichkeit',
  description:
    'Aktuelle News, Forschungsergebnisse und Neuigkeiten rund um Zöliakie, Glutenunverträglichkeit und glutenfreie Ernährung.',
};

// ── Beiträge ──────────────────────────────────────────────────────────────────
// Sebastian: Hier kannst du neue Einträge ganz oben einfügen.
// Format: { datum, tag, titel, text, quelle: { label, url }, href (optional) }

type NewsItem = {
  datum: string;
  tag: string;
  titel: string;
  text: string;
  quelle: { label: string; url: string };
  href?: string;
};

const NEWS: NewsItem[] = [
  {
    datum: 'Juni 2026',
    tag: 'Forschung',
    titel: 'Neue Erkenntnisse zur Darmheilung nach Diagnose',
    text: 'Mehrere europäische Studien deuten darauf hin, dass sich die Darmzotten bei konsequent glutenfreier Ernährung bei Kindern deutlich schneller erholen als bisher angenommen – oft schon nach 6–12 Monaten. Wichtig bleibt: Geduld und strikte Diät.',
    quelle: { label: 'Deutsche Zöliakie Gesellschaft (DZG)', url: 'https://www.dzg-online.de/zoeliakietherapie.php' },
  },
  {
    datum: 'Mai 2026',
    tag: 'Kennzeichnung',
    titel: 'EU-Kennzeichnungspflicht: Was sich 2026 ändert',
    text: 'Die EU hat die Kennzeichnungsregeln für glutenfreie Produkte präzisiert. Produkte die mit „glutenfrei" beworben werden, dürfen maximal 20 ppm Gluten enthalten – das bleibt gleich. Neu ist eine verbindlichere Dokumentationspflicht für Hersteller, die Kreuzkontamination ausschließen wollen.',
    quelle: { label: 'EU-Kommission – Lebensmittelkennzeichnung', url: 'https://food.ec.europa.eu/safety/labelling-and-nutrition_en' },
    href: '/wissen/kreuzkontamination',
  },
  {
    datum: 'April 2026',
    tag: 'Therapie',
    titel: 'Forschung zu Enzymtherapien: Hoffnung, aber kein Ersatz für Diät',
    text: 'Mehrere Pharmaunternehmen forschen an Enzymen, die Gluten im Magen-Darm-Trakt abbauen sollen. Aktuelle klinische Studien zeigen Wirksamkeit als Ergänzung – aber kein Mittel ersetzt bisher die glutenfreie Ernährung vollständig. Für Kinder mit Zöliakie gilt weiterhin: Diät first.',
    quelle: { label: 'Celiac Disease Foundation – Research', url: 'https://celiac.org/research-and-resources/celiac-disease-research/' },
  },
  {
    datum: 'März 2026',
    tag: 'Alltag',
    titel: 'Glutenfreie Produkte: Mehr Auswahl, aber Qualität prüfen',
    text: 'Das Sortiment an glutenfreien Produkten wächst – auch in regulären Supermärkten. Gleichzeitig warnen Fachgesellschaften davor, alle als „glutenfrei" angebotenen Produkte unkritisch zu kaufen. Blick auf das Zertifizierungslogo (Durchgestrichene Ähre) ist nach wie vor sicherer als allein auf die Aufschrift zu vertrauen.',
    quelle: { label: 'DZG – Produktkennzeichnung', url: 'https://www.dzg-online.de/produktkennzeichnung.php' },
    href: '/wissen/glutenfreie-lebensmittel',
  },
  {
    datum: 'Februar 2026',
    tag: 'Ernährung',
    titel: 'Nährstoffversorgung bei Kindern mit Zöliakie: Was Studien zeigen',
    text: 'Eine Metaanalyse aus 2025 bestätigt: Kinder mit Zöliakie haben ohne gezielte Planung häufiger Defizite bei Eisen, B-Vitaminen und Ballaststoffen. Die gute Nachricht: Mit einer abwechslungsreichen glutenfreien Ernährung (Hülsenfrüchte, Pseudogetreide, Gemüse) lassen sich diese Lücken gut schließen.',
    quelle: { label: 'PubMed – Nutrients in Pediatric Celiac Disease', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=celiac+disease+children+nutrient+deficiency' },
    href: '/wissen/naehrstoffe',
  },
  {
    datum: 'Januar 2026',
    tag: 'Schule',
    titel: 'Bayern aktualisiert Leitfaden für Schulen zu Nahrungsmittelallergien',
    text: 'Das Bayerische Kultusministerium hat seinen Leitfaden für Schulen aktualisiert. Neu dabei: klarere Regelungen zur Haftung und Dokumentation wenn Kinder mit Nahrungsmittelunverträglichkeiten (auch Zöliakie) in der Mensa oder bei Schulausflügen versorgt werden.',
    quelle: { label: 'Bayerisches Kultusministerium', url: 'https://www.km.bayern.de/allgemeines/meldung/8252/informationen-fuer-schulen-zum-thema-lebensmittelallergien.html' },
    href: '/wissen/schule-kita',
  },
];

const tagColors: Record<string, { bg: string; color: string }> = {
  Forschung:    { bg: 'rgba(149,213,178,0.2)',  color: 'var(--green-mid)' },
  Kennzeichnung:{ bg: 'rgba(233,196,106,0.2)',  color: '#a87f00' },
  Therapie:     { bg: 'rgba(231,111,81,0.15)',  color: 'var(--terracotta)' },
  Alltag:       { bg: 'rgba(149,213,178,0.15)', color: 'var(--green-mid)' },
  Ernährung:    { bg: 'rgba(233,196,106,0.15)', color: '#a87f00' },
  Schule:       { bg: 'rgba(149,213,178,0.2)',  color: 'var(--green-mid)' },
};

export default function AktuellesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> › Aktuelles
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.75rem' }}>Aktuelles</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px', fontSize: '1rem' }}>
            Neuigkeiten aus Forschung, Ernährungswissenschaft und Alltag rund um Zöliakie und Glutenunverträglichkeit –
            zusammengestellt für Familien, die auf dem Laufenden bleiben möchten.
          </p>
          <div style={{
            marginTop: '1.25rem', padding: '0.75rem 1rem',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '8px', maxWidth: '560px',
            fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7,
          }}>
            <strong style={{ color: 'rgba(255,255,255,0.65)' }}>Hinweis:</strong>{' '}
            Diese Zusammenfassungen basieren auf öffentlich verfügbaren Informationen und erheben keinen Anspruch auf
            Vollständigkeit. Sie ersetzen keine ärztliche Beratung. Bei gesundheitlichen Fragen bitte immer einen Arzt aufsuchen.
          </div>
        </div>
      </section>

      {/* Beiträge */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {NEWS.map((item, i) => {
              const tc = tagColors[item.tag] ?? { bg: 'var(--cream-dark)', color: 'var(--text-mid)' };
              return (
                <article key={i} className="card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--mint)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{
                      padding: '0.2rem 0.65rem', borderRadius: '999px', fontSize: '0.72rem',
                      fontWeight: 700, background: tc.bg, color: tc.color,
                    }}>{item.tag}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>{item.datum}</span>
                  </div>
                  <h2 style={{ fontSize: '1.05rem', marginBottom: '0.625rem', lineHeight: 1.4 }}>{item.titel}</h2>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.75, margin: '0 0 1rem' }}>
                    {item.text}
                  </p>
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    flexWrap: 'wrap', gap: '0.5rem',
                    paddingTop: '0.75rem', borderTop: '1px solid var(--border)',
                  }}>
                    <a
                      href={item.quelle.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.35rem',
                        fontSize: '0.75rem', color: 'var(--text-light)',
                        textDecoration: 'none',
                      }}
                    >
                      <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>📎</span>
                      <span>Quelle: {item.quelle.label}</span>
                      <span style={{ fontSize: '0.65rem', opacity: 0.5 }}>↗</span>
                    </a>
                    {item.href && (
                      <Link href={item.href} style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--green-mid)', whiteSpace: 'nowrap' }}>
                        Mehr dazu →
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Hinweis am Ende */}
          <div style={{
            marginTop: '3rem', padding: '1.25rem 1.5rem',
            background: 'var(--cream-dark)', border: '1px solid var(--border)',
            borderRadius: '12px', fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.75,
          }}>
            <strong style={{ color: 'var(--text-dark)' }}>Bleib auf dem Laufenden.</strong>{' '}
            Neue Beiträge erscheinen unregelmäßig, wann immer es relevante Neuigkeiten gibt.
            Für tiefere Hintergründe zu den einzelnen Themen schau in unseren{' '}
            <Link href="/wissen" style={{ color: 'var(--green-mid)', fontWeight: 600 }}>Wissensbereich</Link>.
          </div>
        </div>
      </section>
    </>
  );
}
