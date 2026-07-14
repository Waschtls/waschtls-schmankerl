import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gluten – wo niemand es vermutet | Waschtls Schmankerl',
  description:
    'Von Play-Doh bis Zahnpasta, von Hostien bis Frittierfett: Wo überall Gluten drinsteckt, obwohl man es nicht erwarten würde – die vollständige Übersicht.',
};

const kategorien = [
  {
    icon: '🧸',
    kat: 'Spielzeug & Basteln',
    items: [
      {
        name: 'Knetmasse (Play-Doh)',
        detail: 'Play-Doh enthält Weizenmehl – das ist kein Geheimnis, aber viele wissen es nicht. Hände waschen danach reicht nicht: Beim Kneten gelangt Gluten an Finger, Mund und Augen. Glutenfreie Alternativen: Ailefo (bio, glutenfrei zertifiziert) oder selbst machen aus Reismehl, Salz, Wasser, Öl.',
        achtung: true,
      },
      {
        name: 'Straßenmalkreide',
        detail: 'Manche Marken – besonders günstige aus dem Schulbedarf – verwenden Weizenstärke als Binder. Markenkreide (z.B. Crayola) ist meist unbedenklich, aber im Zweifel beim Hersteller anfragen.',
        achtung: false,
      },
      {
        name: 'Fingerfarben & Bastelkleber',
        detail: 'Schulbastelstunden mit Fingerfarben auf Mehlbasis oder Kleister aus Weizenmehl sind ein unterschätztes Risiko. Mit der Kita oder Schule absprechen, welche Produkte verwendet werden – das gehört in den Musterbrief.',
        achtung: false,
      },
      {
        name: 'Papier-Maché & Kleister',
        detail: 'Klassischer Kleister wird oft aus Weizenmehl oder -stärke angerührt. Bei Schulprojekten und Bastelnachmittagen aktiv nachfragen.',
        achtung: false,
      },
    ],
  },
  {
    icon: '🪥',
    kat: 'Körperpflege',
    items: [
      {
        name: 'Zahnpasta',
        detail: 'Manche Zahnpasten – besonders aromatisierte Kinderzahnpasten – enthalten Weizenstärke als Trägerstoff. Beim Zähneputzen wird etwas geschluckt, besonders bei kleinen Kindern. Elmex Kinder und Oral-B Kids sind nach aktuellem Stand glutenfrei; im Zweifel Hersteller anfragen.',
        achtung: true,
      },
      {
        name: 'Lippenpflege & Lippenstift',
        detail: 'Alles was auf die Lippen kommt, landet irgendwann im Mund. Hydrolysiertes Weizenprotein ist ein verbreiteter Inhaltsstoff in Pflegeprodukten. Bei Kindern: auf glutenfreie Produkte achten.',
        achtung: false,
      },
      {
        name: 'Sonnencreme',
        detail: 'Enthält manchmal "Hydrolyzed Wheat Protein" (hydrolysiertes Weizenprotein). Über Hände und Gesicht kann es aufgenommen werden. Bei Kindern, die Finger in den Mund nehmen, relevant.',
        achtung: false,
      },
      {
        name: 'Shampoo & Körpercreme',
        detail: 'Weizenprotein ist in vielen Haarpflegeprodukten enthalten. Für die meisten Zöliakie-Betroffenen kein Problem, da Gluten nicht über die Haut in den Darm gelangt – aber wenn das Kind Haare lutscht oder Creme ableckt, kann es relevant werden.',
        achtung: false,
      },
    ],
  },
  {
    icon: '💊',
    kat: 'Medikamente',
    items: [
      {
        name: 'Tablettenhüllen & Kapseln',
        detail: 'Weizenstärke ist ein zugelassener Hilfsstoff in der Pharmaindustrie. Sie kann in Tablettencoatings, Kapselhüllen und als Füllstoff vorkommen. Bei jedem neuen Medikament aktiv die Apotheke fragen: „Enthält dieses Präparat Gluten oder Weizenstärke?" – das steht selten auf der Packung.',
        achtung: true,
      },
      {
        name: 'Homöopathische Globuli',
        detail: 'Globuli bestehen meist aus Lactose und Saccharose – kein Gluten. Aber manche Komplexmittel enthalten als Trägerstoff Weizenstärke. Im Zweifel Hersteller anfragen.',
        achtung: false,
      },
      {
        name: 'Vitaminpräparate & Nahrungsergänzung',
        detail: 'Gummibärchen-Vitamine, Brausetabletten und Kapseln können Weizenstärke enthalten. Auf „glutenfrei" achten oder Apotheke fragen – besonders bei Eisen- und B-Vitaminpräparaten, die bei Zöliakie häufig empfohlen werden.',
        achtung: false,
      },
    ],
  },
  {
    icon: '🍽️',
    kat: 'Essen & Trinken – die unerwarteten',
    items: [
      {
        name: 'Pommes aus geteiltem Frittierfett',
        detail: 'Das ist eine der häufigsten Glutenquellen beim Essen gehen. Pommes, die im selben Fett wie Schnitzel, Frühlingsrollen oder Chicken Nuggets frittiert werden, sind nicht glutenfrei – egal was auf der Karte steht. Immer explizit fragen ob ein separates Frittierfett verwendet wird.',
        achtung: true,
      },
      {
        name: 'Tiefkühl-Pommes mit Beschichtung',
        detail: 'Manche Tiefkühl-Pommes werden mit Weizenmehl oder -stärke vorbeschichtet für mehr Knusprigkeit. Label lesen – auf dem Glutenfrei-Symbol achten oder Zutaten prüfen.',
        achtung: false,
      },
      {
        name: 'Eiswaffeln',
        detail: 'Das Eis selbst ist oft glutenfrei. Die Waffel nicht. Im Eiscafé: immer eine Schale statt Waffel nehmen, und fragen ob die Eisschaufel auch mit Waffelresten in Kontakt kommt.',
        achtung: false,
      },
      {
        name: 'Hostien bei der Kommunion',
        detail: 'Klassische Hostien enthalten Weizen – das ist ein echtes Problem für katholische Familien. Glutenfreie Oblaten gibt es (z.B. über die DZG oder Schär), aber Pfarrer und Gemeinde müssen rechtzeitig informiert werden. Am besten beim Erstkommunion-Gespräch direkt ansprechen.',
        achtung: true,
      },
      {
        name: 'Aufschnitt & Wurstwaren',
        detail: 'Billige Wurst und Aufschnitt enthält oft Weizenstärke als Füllstoff oder Bindemittel. Qualitätsware und Markenprodukte sind meist sicherer – Label lesen, auf das Ährchen-Symbol achten.',
        achtung: false,
      },
      {
        name: 'Pudding-Pulver & Soßenbinder',
        detail: 'Klassisches Pudding-Pulver (z.B. Dr. Oetker) enthält oft Weizenstärke. Es gibt glutenfreie Alternativen (Maisstärke-basiert). Auch Soßenbinder „Mondamin" enthält Weizen – glutenfreie Maisstärke ist der Ersatz.',
        achtung: false,
      },
      {
        name: 'Chips mit Malzessig',
        detail: 'Malzessig (Malt Vinegar) enthält Gluten – betrifft besonders englische Chipssorten. In deutschen Supermärkten seltener, aber bei importierten Produkten aufpassen.',
        achtung: false,
      },
    ],
  },
  {
    icon: '✉️',
    kat: 'Sonstiges',
    items: [
      {
        name: 'Leimstreifen an Briefumschlägen',
        detail: 'Modernere selbstklebende Umschläge sind meist kein Problem. Ältere Modelle mit ableckbarem Leimstreifen können Stärke enthalten. Bei Kindern die gerne lecken: lieber befeuchten statt lecken.',
        achtung: false,
      },
      {
        name: 'Tiernahrung',
        detail: 'Hundefutter, Katzenfutter und Vogelfutter enthält oft Getreide. Wenn Kinder beim Tierfüttern helfen und danach Hände nicht waschen, kann Gluten übertragen werden. Kein Grund zur Panik – aber Händewaschen danach ist Pflicht.',
        achtung: false,
      },
    ],
  },
];

export default function GlutenVersteckteQuellenPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Versteckte Glutenquellen
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.75rem' }}>
            Gluten – wo niemand es vermutet
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '600px', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Wer denkt bei Play-Doh an Weizen? Oder bei Zahnpasta? Oder beim Frittierfett für Pommes?
            Diese Übersicht zeigt alle Stellen, die uns überrascht haben – und einige haben wir leider erst
            durch Reaktionen unseres Sohnes entdeckt.
          </p>
        </div>
      </section>

      {/* Kategorien */}
      {kategorien.map(kategorie => (
        <section key={kategorie.kat} className="section" style={{ paddingBottom: '1rem' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span>{kategorie.icon}</span> {kategorie.kat}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {kategorie.items.map(item => (
                <div
                  key={item.name}
                  className="card"
                  style={item.achtung ? { border: '1.5px solid rgba(233,196,106,0.5)', background: 'rgba(233,196,106,0.05)' } : {}}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem', gap: '1rem' }}>
                    <h4 style={{ margin: 0, color: 'var(--green-deep)' }}>{item.name}</h4>
                    {item.achtung && (
                      <span style={{
                        flexShrink: 0,
                        fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em',
                        textTransform: 'uppercase', color: 'var(--golden)',
                        background: 'rgba(233,196,106,0.15)',
                        padding: '0.2rem 0.5rem', borderRadius: '4px',
                      }}>Häufige Falle</span>
                    )}
                  </div>
                  <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Fazit / Tipp */}
      <section className="section" style={{ background: 'var(--cream-dark)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="card" style={{ background: 'rgba(149,213,178,0.08)', border: '1.5px solid rgba(149,213,178,0.3)' }}>
            <h4 style={{ marginBottom: '0.75rem', color: 'var(--green-deep)' }}>💡 Die wichtigste Faustregel</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.85 }}>
              Was in den Mund kommen kann, muss glutenfrei sein. Das gilt nicht nur für Essen – sondern für alles was Kinder anfassen, ablecken oder einatmen könnten. Im Zweifel: Hersteller anfragen, Apotheke fragen, oder weglassen. Die DZG-Produktdatenbank (für Mitglieder) hilft bei Lebensmitteln.
            </p>
          </div>
        </div>
      </section>

      {/* Medizinischer Hinweis + CTAs */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div style={{
            padding: '1rem 1.25rem',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            fontSize: '0.775rem', color: 'var(--text-light)', lineHeight: 1.75,
          }}>
            <strong>Hinweis:</strong> Diese Liste basiert auf eigenen Erfahrungen und recherchierten Informationen,
            erhebt aber keinen Anspruch auf Vollständigkeit. Inhaltsstoffe von Produkten können sich ändern –
            im Zweifel immer aktuelle Etiketten prüfen oder den Hersteller direkt anfragen.
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/wissen/kreuzkontamination" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
              Kreuzkontamination verstehen →
            </Link>
            <Link href="/wissen/erstdiagnose" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
              Zurück zur Erstdiagnose →
            </Link>
            <Link href="/wissen/produkte-einkauf" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
              Einkaufen & Produkte →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
