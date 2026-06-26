import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kreuzverunreinigung bei Zöliakie – Für Eltern, Großeltern & Freunde | Waschtls Schmankerl',
  description:
    'Was ist Kreuzverunreinigung bei Zöliakie, warum reichen Spuren für eine Reaktion – und wie erklärt man das Großeltern und Freunden? Alles was Familien wissen müssen.',
};

const geraete = [
  { name: 'Toaster', problem: 'Krümel von Weizenbrot bleiben im Toaster und landen aufs nächste Brot', loesung: 'Eigener Toaster für Zöliakie-Kind – keine Ausnahme', emoji: '🍞' },
  { name: 'Holzlöffel & Holzbrett', problem: 'Holz nimmt Glutenreste in die Poren auf und gibt sie wieder ab – auch nach dem Waschen', loesung: 'Eigene Holzgeräte (farbig markieren) oder Kunststoff (leichter zu reinigen)', emoji: '🥄' },
  { name: 'Nudelsieb / Sieb', problem: 'Glutennudeln im Sieb hinterlassen Stärkereste die auf das nächste Gericht übergehen', loesung: 'Eigenes Sieb oder nach jedem Gebrauch mit Weizennudeln in Spülmaschine', emoji: '🫙' },
  { name: 'Buttertiegel / Marmeladenglas', problem: 'Messer das aufs Weizenbrot war geht ins gemeinsame Glas – schon ist es kontaminiert', loesung: 'Eigene Behälter für das Kind – oder immer sauberes Messer benutzen', emoji: '🧈' },
  { name: 'Nudelwasser', problem: 'Glutennudeln und glutenfreie Nudeln im selben Topf kochen ist nicht erlaubt', loesung: 'Immer getrennte Töpfe, oder glutenfreie Nudeln zuerst und Topf auswaschen', emoji: '🍝' },
  { name: 'Backblech & Auflaufform', problem: 'Eingebackene Glutenreste an nicht beschichteten oder zerkratzten Flächen', loesung: 'Eigenes Backblech mit Backpapier ausgelegt – oder gründlich schrubben und prüfen', emoji: '🍳' },
  { name: 'Frittierfett', problem: 'In glutenhaltigem Öl frittiert (z.B. normaler Paniermehl-Schnitzel vorher) kontaminiert alles danach', loesung: 'Nur in sauberem, noch nie für glutenhaltiges verwendetem Öl frittieren', emoji: '🫕' },
];

export default function KreuzkontaminationPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Kreuzverunreinigung
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.75rem' }}>
            Kreuzverunreinigung bei Zöliakie
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '600px', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Warum winzige Glutenspuren trotzdem schaden – und wie man das Großeltern,
            Freunden und Kita-Köchen einfach erklärt.
          </p>
        </div>
      </section>

      {/* Was ist das? */}
      <section className="section" style={{ paddingBottom: '1rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.75rem' }}>Was ist Kreuzverunreinigung?</h2>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '1rem' }}>
            Kreuzverunreinigung (oder Kreuzkontamination) entsteht wenn glutenfreie Lebensmittel
            mit Gluten in Berührung kommen – auch wenn das Gluten selbst nicht mehr sichtbar ist.
            Das können Krümel auf dem Schneidebrett sein, Mehlstaub in der Luft, ein Löffel der
            vorher in der Weizennudelsoße war, oder Nudeln die im selben Topf wie Weizennudeln
            gekocht wurden.
          </p>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '0' }}>
            Bei Menschen ohne Zöliakie ist das egal. Bei Zöliakie-Betroffenen kann schon eine
            winzige Menge Gluten – Experten sprechen von unter 50 Milligramm pro Tag,
            das sind buchstäblich Krümel – eine Immunreaktion auslösen und die Darmschleimhaut
            schädigen. Oft ohne spürbare Symptome. Das macht es so tückisch.
          </p>

          {/* Warnung-Box */}
          <div style={{
            background: 'rgba(231,111,81,0.08)',
            border: '1.5px solid rgba(231,111,81,0.35)',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            marginTop: '1.5rem',
          }}>
            <p style={{ margin: 0, fontWeight: 700, marginBottom: '0.4rem', color: 'var(--terracotta)', fontSize: '0.9rem' }}>
              ⚠️ Das Wichtigste
            </p>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.8 }}>
              Kein Bauchschmerz bedeutet nicht „ist okay". Auch eine stille Kontamination
              schadet dem Darm langfristig. Deshalb gilt: bei Zöliakie keine Ausnahmen –
              auch wenn das Kind gerade gesund aussieht.
            </p>
          </div>
        </div>
      </section>

      {/* Typische Quellen zuhause */}
      <section className="section" style={{ background: 'var(--cream-dark)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Typische Quellen zuhause</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.75rem' }}>
            Das sind die häufigsten Stellen wo Glutenspuren unbemerkt auf glutenfreies Essen gelangen.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {geraete.map(({ name, problem, loesung, emoji }) => (
              <div key={name} style={{
                display: 'grid',
                gridTemplateColumns: '2.25rem 1fr',
                gap: '0.75rem',
                background: 'rgba(255,255,255,0.6)',
                borderRadius: '10px',
                padding: '1rem',
                border: '1px solid var(--border)',
              }}>
                <span style={{ fontSize: '1.5rem', lineHeight: 1, marginTop: '0.1rem' }}>{emoji}</span>
                <div>
                  <p style={{ fontWeight: 700, margin: 0, marginBottom: '0.3rem', fontSize: '0.9rem', color: 'var(--green-deep)' }}>{name}</p>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--terracotta)', marginBottom: '0.25rem', lineHeight: 1.6 }}>
                    ✗ {problem}
                  </p>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--green-mid)', fontWeight: 600, lineHeight: 1.6 }}>
                    ✓ {loesung}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="card" style={{ marginTop: '1.25rem', background: 'rgba(45,106,79,0.06)', border: '1.5px solid rgba(45,106,79,0.2)' }}>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.85 }}>
              <strong>Unser Tipp:</strong> Wir markieren alle Geräte die nur für unseren Sohn sind
              mit einem farbigen Aufkleber (bei uns: blau). Einmal erklärt, kommt jeder
              Besucher damit klar – auch die Oma.
            </p>
          </div>
        </div>
      </section>

      {/* Für Großeltern & Freunde */}
      <section className="section">
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Wie erkläre ich das Großeltern und Freunden?</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem' }}>
            Das ist eine der schwierigsten Situationen: Alle meinen es gut, aber nicht jeder
            versteht warum „ein bisschen Krümel" ein Problem ist. Hier sind Sätze die helfen.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                situation: 'Oma will ihr normales Brot auf demselben Brett schneiden',
                erklaerung: '„Das Brett hat noch unsichtbare Weizenkrümel drauf. Kannst du bitte das blaue Brett nehmen? Das ist nur für [Name]."',
              },
              {
                situation: '„Ein bisschen Gluten macht doch nichts – er sieht doch gesund aus"',
                erklaerung: '„Leider doch. Bei Zöliakie schädigt selbst eine kleine Menge den Darm – auch wenn man nichts spürt. Der Arzt hat das ausdrücklich gesagt."',
              },
              {
                situation: 'Freunde kochen und wollen etwas für [Name] mitkochen',
                erklaerung: '„Super, danke! Am einfachsten: Nur glutenfreie Zutaten nehmen, und einen Topf/eine Pfanne die noch nie für Weizensachen benutzt wurde. Oder ruf kurz an, ich helf dir gern."',
              },
              {
                situation: 'Restaurant fragt ob GF-Speisekarte reicht',
                erklaerung: '„Wir brauchen auch sicheres Zubereitung – getrennte Töpfe, saubere Flächen. Wird das so gehandhabt? Wir fragen nicht um schwierig zu sein, sondern weil es medizinisch notwendig ist."',
              },
            ].map(s => (
              <div key={s.situation} className="card" style={{ background: 'var(--cream-dark)' }}>
                <p style={{ margin: '0 0 0.6rem', fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 600 }}>
                  Situation:
                </p>
                <p style={{ margin: '0 0 0.75rem', fontSize: '0.875rem', color: 'var(--text-mid)' }}>
                  {s.situation}
                </p>
                <p style={{ margin: '0 0 0.35rem', fontSize: '0.8rem', color: 'var(--green-mid)', fontWeight: 700 }}>
                  Was du sagen kannst:
                </p>
                <p style={{ margin: 0, fontSize: '0.875rem', fontStyle: 'italic', color: 'var(--text-dark)', lineHeight: 1.75 }}>
                  {s.erklaerung}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Im Restaurant */}
      <section className="section" style={{ background: 'var(--cream-dark)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Im Restaurant: Die richtigen Fragen stellen</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem' }}>
            „Glutenfreie Speisekarte" reicht leider nicht. Wer Zöliakie hat muss auch
            nach der Zubereitung fragen.
          </p>
          <div className="grid-2">
            {[
              {
                icon: '✅',
                titel: 'Gute Zeichen',
                punkte: [
                  'Personal weiß was Zöliakie ist',
                  'Küche hat separate Arbeitsflächen',
                  'Getrennte Töpfe und Pfannen',
                  'Frittieröl nur für GF-Gerichte',
                  'Chef kommt an den Tisch wenn man fragt',
                ],
                style: { background: 'rgba(45,106,79,0.06)', border: '1.5px solid rgba(45,106,79,0.2)' },
                textColor: 'var(--green-mid)',
              },
              {
                icon: '⚠️',
                titel: 'Warnsignale',
                punkte: [
                  'Kellner weiß es nicht und fragt nicht nach',
                  'Nur: „das ist ohne Weizen gemacht"',
                  'Gemeinsames Frittieröl',
                  'GF-Pasta wird aus Tüte abgekocht',
                  'Zögern oder Unsicherheit bei Nachfragen',
                ],
                style: { background: 'rgba(231,111,81,0.06)', border: '1.5px solid rgba(231,111,81,0.2)' },
                textColor: 'var(--terracotta)',
              },
            ].map(k => (
              <div key={k.titel} className="card" style={k.style}>
                <h4 style={{ marginBottom: '0.75rem', color: k.textColor, fontSize: '0.9rem' }}>
                  {k.icon} {k.titel}
                </h4>
                <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
                  {k.punkte.map(p => (
                    <li key={p} style={{ fontSize: '0.8rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="card" style={{ marginTop: '1.25rem' }}>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--green-deep)' }}>
              💬 Was wir im Restaurant sagen
            </h4>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.85, fontStyle: 'italic', color: 'var(--text-mid)' }}>
              „Unser Kind hat Zöliakie – eine Autoimmunerkrankung. Wir brauchen nicht nur glutenfreie
              Zutaten, sondern auch sicheres Kochen: getrennte Töpfe, saubere Flächen, kein gemeinsames
              Frittieröl. Können Sie das gewährleisten, oder wäre es besser wir bestellen für das
              Kind etwas anderes?"
            </p>
          </div>
        </div>
      </section>

      {/* Häufige Irrtümer */}
      <section className="section">
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '1.25rem' }}>Häufige Irrtümer – und was wirklich stimmt</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              {
                irrtum: '„Wenn man die Pastasoße nimmt und die Nudeln weglässt, ist das glutenfrei."',
                wahrheit: 'Nicht wenn die Soße in einer Küche gekocht wurde wo gleichzeitig Weizennudeln im Topf daneben kochen. Mehlstaub, Spritzer, Kochlöffel – das reicht.',
              },
              {
                irrtum: '„Ich wasch das Schneidebrett kurz ab, dann ist es ok."',
                wahrheit: 'Bei Holz und tief gerillten Kunststoffbrettern reicht das nicht. Glutenprotein sitzt in den Poren. Entweder heißes Wasser + Spülmaschine, oder ein eigenes Brett.',
              },
              {
                irrtum: '„Er hat heute nichts gespürt, also war das ok."',
                wahrheit: 'Zöliakie-Schäden im Darm sind oft symptomlos. Keine Reaktion bedeutet nicht keine Schädigung – das ist medizinisch belegt.',
              },
              {
                irrtum: '„Dinkel ist doch ok, oder? Das ist ja was Natürliches."',
                wahrheit: 'Dinkel enthält Gluten. Ist für Zöliakie-Betroffene genauso tabu wie Weizen.',
              },
              {
                irrtum: '„Ich hab für das Toasten extra eine Alufolie reingelegt."',
                wahrheit: 'Gute Idee! Das funktioniert tatsächlich – solange die Folie komplett den Boden bedeckt und nicht rausrutscht.',
              },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '1rem 1.25rem',
                background: 'var(--cream-dark)',
                borderRadius: '10px',
                border: '1px solid var(--border)',
              }}>
                <p style={{ margin: '0 0 0.5rem', fontSize: '0.875rem', fontStyle: 'italic', color: 'var(--text-mid)' }}>
                  ❌ {item.irrtum}
                </p>
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--green-deep)', fontWeight: 600 }}>
                  ✓ {item.wahrheit}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/wissen/schule-kita" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
              ← Kita & Schule
            </Link>
            <Link href="/unterwegs" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
              Glutenfrei unterwegs →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
