import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Häufige Fragen zu Zöliakie – FAQ',
  description:
    'Antworten auf die häufigsten Fragen zu Zöliakie bei Kindern: Diagnose, Ernährung, Schule, Kontamination, glutenfreie Mehle und mehr.',
};

const fragen = [
  {
    frage: 'Was ist Zöliakie genau?',
    antwort:
      'Zöliakie ist eine Autoimmunerkrankung des Dünndarms. Wenn betroffene Personen Gluten essen – das Klebereiweiß in Weizen, Dinkel, Roggen und Gerste – greift das Immunsystem die Dünndarmschleimhaut an. Das beschädigt die Darmzotten, die für die Nährstoffaufnahme zuständig sind. Die einzige Behandlung ist eine lebenslang strikt glutenfreie Ernährung.',
    link: { text: 'Mehr zu Zöliakie', href: '/wissen/was-ist-zoeliakiie' },
  },
  {
    frage: 'Mein Kind wurde gerade diagnostiziert – was jetzt?',
    antwort:
      'Erstmal durchatmen. Die Diagnose ist erstmal ein Schock, aber Zöliakie ist gut beherrschbar. Der erste Schritt: alle glutenhaltigen Produkte aus der Küche, und schauen welche Lieblingsgerichte sich einfach ersetzen lassen. Die meisten Kinder merken nach wenigen Wochen glutenfrei deutliche Verbesserungen.',
    link: { text: 'Diagnose & erste Schritte', href: '/wissen/diagnose-kinder' },
  },
  {
    frage: 'Was enthält Gluten – und was nicht?',
    antwort:
      'Gluten steckt in Weizen, Dinkel, Emmer, Einkorn, Kamut, Roggen, Gerste und Grünkern. Glutenfrei sind von Natur aus: Reis, Mais, Hirse, Buchweizen, Quinoa, Amaranth, Kartoffeln, Hülsenfrüchte, alle Fleisch-, Fisch- und Milchprodukte ohne Zusätze, Eier, Obst und Gemüse. Hafer ist ein Sonderfall – nur zertifizierter glutenfreier Hafer ist für die meisten Zöliakie-Patienten verträglich.',
  },
  {
    frage: 'Was ist Kreuzkontamination und wie verhindere ich sie?',
    antwort:
      'Kreuzkontamination entsteht wenn glutenfreie Lebensmittel mit Gluten-haltigen in Berührung kommen – z.B. durch dasselbe Schneidebrett, denselben Toaster, oder glutenhaltige Krümel im Buttertiegel. Für Zöliakie-Kinder reichen schon Spuren. Eigene Küchengeräte (Toaster, Sieb, Holzlöffel), getrennte Aufbewahrung und sorgfältiges Händewaschen sind Pflicht.',
    link: { text: 'Kreuzkontamination vermeiden', href: '/wissen/kreuzkontamination' },
  },
  {
    frage: 'Welches glutenfreie Mehl eignet sich wofür?',
    antwort:
      'Reismehl ist der vielseitigste Allrounder – gut für Pfannkuchen, Kuchen und Brote. Mandelmehl macht Gebäck besonders saftig, ist aber schwerer. Buchweizenmehl hat einen kräftigen Eigengeschmack und eignet sich gut für herzhafte Teige. Tapiokastärke macht Teige elastischer. In der Regel kombiniert man 2-3 Mehle für das beste Ergebnis.',
    link: { text: 'Mehle im Detail', href: '/wissen/welches-mehl-wofuer' },
  },
  {
    frage: 'Was ist Xanthan und brauche ich es wirklich?',
    antwort:
      'Xanthan ist ein natürliches Verdickungsmittel das in glutenfreiem Backen die Klebewirkung des Glutens ersetzt – es hält den Teig zusammen. Für die meisten Kuchen und weiche Teige geht es auch ohne, aber für Brot und Pizzateig macht es einen spürbaren Unterschied. Flohsamenschalen sind eine natürlichere Alternative.',
    link: { text: 'Xanthan & Flohsamenschalen erklärt', href: '/wissen/xanthan-flohsamenschalen' },
  },
  {
    frage: 'Wie erkläre ich meinem Kind warum es kein normales Brot essen darf?',
    antwort:
      'Am besten einfach und ehrlich: "Dein Bauch verträgt einen Stoff im normalen Brot nicht – wenn du ihn isst, tut er weh und wird nicht gesund." Kinder verstehen das oft besser als man denkt. Wichtig: nie als Strafe darstellen, sondern als etwas das zum Kind gehört – wie eine Brille die man trägt weil die Augen es brauchen.',
    link: { text: 'Kindern Zöliakie erklären', href: '/wissen/kindern-erklaeren' },
  },
  {
    frage: 'Was kann mein Kind in der Schule oder im Kindergarten essen?',
    antwort:
      'Das hängt stark von der Einrichtung ab. Viele Schulen können keine glutenfreie Küche garantieren – sichere Variante ist die eigene Brotdose. Wichtig: Lehrer und Erzieher informieren, schriftlich festhalten wer Bescheid weiß, und "Notfall-Snacks" im Rucksack haben für spontane Aktivitäten.',
    link: { text: 'Schule & Kita mit Zöliakie', href: '/wissen/schule-kita' },
  },
  {
    frage: 'Was ist beim Kindergeburtstag zu beachten?',
    antwort:
      'Kuchen und Gebäck sind die größte Hürde. Optionen: eigenen glutenfreien Kuchen mitbringen (so gut dass alle davon naschen wollen!), Gastgeber vorab informieren und um eine Liste der Zutaten bitten, oder sichere Snacks zum Tauschen mitgeben. Mit einem richtig guten glutenfreien Schokokuchen will sowieso niemand mehr das Original.',
    link: { text: 'Geburtstage & Feste', href: '/wissen/geburtstage' },
  },
  {
    frage: 'Hat mein Kind auch Laktoseintoleranz?',
    antwort:
      'Das ist möglich – bei frisch diagnostizierter Zöliakie ist der Darm oft vorübergehend auch laktoseintolerant, weil die geschädigten Zotten das Enzym Laktase nicht mehr richtig produzieren. Nach einigen Monaten strikt glutenfreier Ernährung erholt sich der Darm oft und verträgt wieder Milchprodukte. Ein kurzer Test mit dem Arzt klärt das.',
    link: { text: 'Laktoseintoleranz bei Zöliakie', href: '/wissen/laktoseintoleranz-kinder' },
  },
  {
    frage: 'Welche Produkte sind sicher gekauft – worauf achte ich?',
    antwort:
      'Das "durchgestrichene Ähren"-Symbol ist das zuverlässigste Zeichen – es bedeutet unter 20 ppm Gluten (international anerkannter Grenzwert). "Glutenfrei" als Aufschrift ohne Symbol kann täuschen. Bei "kann Spuren von Gluten enthalten" ist Vorsicht geboten – für viele Zöliakie-Patienten ist das zu riskant.',
    link: { text: 'Einkaufstipps & Produktempfehlungen', href: '/wissen/produkte-einkauf' },
  },
  {
    frage: 'Kann mein Kind an Klassenausflügen und Restaurantbesuchen teilnehmen?',
    antwort:
      'Ja – mit etwas Vorbereitung. Restaurants vorab anrufen und konkret fragen (nicht nur "haben Sie glutenfreie Gerichte?" sondern auch "wie wird Kontamination in der Küche vermieden?"). Für Ausflüge sichere Snacks mitnehmen. In vielen Städten gibt es inzwischen Restaurants die sich wirklich auskennen.',
    link: { text: 'Reisen mit Zöliakie', href: '/wissen/reisen' },
  },
  {
    frage: 'Wächst sich Zöliakie aus?',
    antwort:
      'Nein. Zöliakie ist eine lebenslange Erkrankung. Kinder "wachsen sich nicht aus" – der Körper wird Gluten immer als Bedrohung einordnen. Was sich mit der Zeit verbessert ist der Alltag: glutenfrei kochen wird zur Routine, das Kind lernt selbst damit umzugehen, und das Angebot an guten Produkten wächst stetig.',
  },
  {
    frage: 'Wo finde ich gute glutenfreie Produkte?',
    antwort:
      'Im Reformhaus, in Bio-Supermärkten und in der Freifon-Abteilung großer Supermärkte. Online (z.B. Amazon) ist die Auswahl am größten. Wir haben für euch die Produkte zusammengestellt, die wir selbst zu Hause verwenden und die unserem Sohn schmecken.',
    link: { text: 'Unsere Produktempfehlungen', href: '/produkte' },
  },
];

export default function FaqPage() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> › FAQ
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Häufige Fragen</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px' }}>
            Was Eltern nach der Diagnose am häufigsten fragen – ehrlich beantwortet, aus eigener Erfahrung.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {fragen.map(({ frage, antwort, link }, i) => (
              <div
                key={i}
                className="card"
                style={{ borderLeft: '4px solid var(--golden)' }}
              >
                <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--green-deep)' }}>
                  {frage}
                </h2>
                <p style={{ margin: 0, marginBottom: link ? '0.75rem' : 0, lineHeight: 1.7, fontSize: '0.9rem' }}>
                  {antwort}
                </p>
                {link && (
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--green-mid)',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    → {link.text}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '3rem',
            background: 'var(--cream-dark)',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center',
          }}>
            <p style={{ margin: 0, marginBottom: '0.75rem', fontSize: '0.9rem' }}>
              Deine Frage ist nicht dabei?
            </p>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Wir sind eine Familie, kein Arzt – bei medizinischen Fragen immer den Kinderarzt oder Gastroenterologen fragen. Für alles andere:{' '}
              <Link href="/ueber-uns" style={{ color: 'var(--green-mid)', fontWeight: 600 }}>
                Schreib uns gerne
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
