import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NCGS – Glutenunverträglichkeit ohne Zöliakie',
  description:
    'Was ist Non-Celiac Gluten Sensitivity? Wie unterscheidet sie sich von Zöliakie und Weizenallergie? Und was bedeutet das für den Alltag?',
};

export default function NcgsPage() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › NCGS
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>
            NCGS – Glutenunverträglichkeit ohne Zöliakie
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px' }}>
            "Ich vertrage kein Gluten, aber Zöliakie hab ich nicht." Was steckt dahinter – und warum ist die Antwort komplizierter als gedacht.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>

          <div style={{ marginBottom: '2rem' }}>
            <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>
              Es gibt Menschen, die nach dem Essen von Weizenprodukten Bauchschmerzen, Müdigkeit,
              Kopfschmerzen oder Denkträgheit haben – aber im Bluttest keine Zöliakie-Antikörper
              zeigen und bei der Darmspiegelung keine Zottenatrophie. Trotzdem geht es ihnen besser,
              wenn sie kein Gluten essen.
            </p>
            <p style={{ lineHeight: 1.8, margin: 0 }}>
              Diese Konstellation heißt <strong>Non-Celiac Gluten Sensitivity</strong>, kurz
              NCGS – auf Deutsch: Glutensensitivität ohne Zöliakie, oder Glutenunverträglichkeit.
              Sie ist real, aber schwer fassbar – und oft missverstanden.
            </p>
          </div>

          {/* Definition-Box */}
          <div style={{
            background: 'rgba(149,213,178,0.15)',
            border: '1.5px solid var(--mint)',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
          }}>
            <p style={{ margin: 0, fontWeight: 700, marginBottom: '0.5rem', color: 'var(--green-mid)', fontSize: '1rem' }}>
              📌 Was NCGS ist – und was nicht
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.8 }}>
              NCGS ist <strong>keine Allergie</strong> (keine IgE-Reaktion wie bei Weizenallergie),
              <strong> keine Autoimmunerkrankung</strong> (kein messbarer Darmschaden wie bei Zöliakie),
              und <strong>kein Trend</strong>. Es ist ein klinisch anerkanntes Phänomen, das seit
              2011 in der medizinischen Literatur beschrieben wird. Was genau dahinter steckt,
              ist noch Gegenstand der Forschung.
            </p>
          </div>

          {/* Vergleichstabelle */}
          <h2 style={{ marginBottom: '0.75rem' }}>Der Unterschied: Zöliakie – NCGS – Weizenallergie</h2>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ background: 'var(--green-deep)', color: '#fff' }}>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600 }}>Merkmal</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600 }}>Zöliakie</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600 }}>NCGS</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600 }}>Weizenallergie</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Ursache', 'Autoimmun', 'Nicht autoimmun; Mechanismus ungeklärt', 'Allergie (IgE)'],
                  ['Darmschaden', 'Ja (Zottenatrophie)', 'Nein', 'Nein'],
                  ['Antikörper im Blut', 'Ja (tTGA, EMA)', 'Nein', 'IgE-Antikörper'],
                  ['Diagnose durch', 'Bluttest + Biopsie', 'Ausschluss', 'Allergietest'],
                  ['Auslöser', 'Gluten', 'Gluten / evtl. FODMAPs', 'Weizenproteine'],
                  ['Langzeitschäden', 'Ja, ohne GF-Diät', 'Bisher nicht bekannt', 'Anaphylaxie möglich'],
                  ['Therapie', 'Lebenslang GF', 'GF (oft temporär hilfreich)', 'Weizenfreie Ernährung'],
                ].map(([m, z, n, w], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'var(--cream-dark)' : '#fff' }}>
                    <td style={{ padding: '0.65rem 1rem', fontWeight: 600, color: 'var(--text-dark)' }}>{m}</td>
                    <td style={{ padding: '0.65rem 1rem', color: 'var(--text-mid)' }}>{z}</td>
                    <td style={{ padding: '0.65rem 1rem', color: 'var(--text-mid)' }}>{n}</td>
                    <td style={{ padding: '0.65rem 1rem', color: 'var(--text-mid)' }}>{w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ marginBottom: '0.75rem' }}>Wie äußert sich NCGS?</h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Die Symptome von NCGS überlappen sich mit Zöliakie und Reizdarmsyndrom – was die Diagnose
            erschwert. Typisch sind:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
            {[
              { icon: '🤢', symptom: 'Bauchschmerzen & Blähungen', info: 'Oft kurz nach Glutenkonsum' },
              { icon: '😴', symptom: 'Erschöpfung & Müdigkeit', info: 'Auch ohne körperliche Anstrengung' },
              { icon: '🌫️', symptom: 'Brain Fog', info: 'Konzentrationsprobleme, Vergesslichkeit' },
              { icon: '🤕', symptom: 'Kopfschmerzen', info: 'Häufig nach glutenhaltigen Mahlzeiten' },
              { icon: '💪', symptom: 'Muskel- & Gelenkschmerzen', info: 'Diffuse Schmerzen ohne klare Ursache' },
              { icon: '😟', symptom: 'Stimmungsschwankungen', info: 'Reizbarkeit, Angst, niedergeschlagen' },
            ].map(({ icon, symptom, info }) => (
              <div key={symptom} style={{
                background: 'var(--cream-dark)',
                borderRadius: '10px',
                padding: '0.875rem 1rem',
              }}>
                <p style={{ fontWeight: 700, margin: '0 0 0.2rem', fontSize: '0.88rem' }}>{icon} {symptom}</p>
                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-mid)' }}>{info}</p>
              </div>
            ))}
          </div>

          <h2 style={{ marginBottom: '0.75rem' }}>Das Diagnoseproblem: Wie wird NCGS festgestellt?</h2>
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>
              Das ist der schwierigste Teil: Es gibt <strong>keinen Test für NCGS</strong>.
              Die Diagnose ist eine Ausschlussdiagnose – alle anderen Ursachen werden
              ausgeschlossen, und dann beobachtet man, ob Symptome bei glutenfreier Ernährung
              verschwinden und bei Gluten-Wiedereinführung zurückkehren.
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>
              Der offizielle Diagnoseweg laut Forschungskonsens (Catassi et al., 2015):
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.75rem' }}>
              {[
                'Zöliakie per Bluttest ausschließen (wichtig: Gluten vorher NICHT weglassen, sonst verfälscht das das Ergebnis)',
                'Weizenallergie ausschließen (IgE-Allergietest)',
                '6 Wochen strikte glutenfreie Ernährung – Symptombeobachtung',
                'Kontrollierte Wiedereinführung von Gluten – kommen die Symptome zurück?',
                'Wenn ja: NCGS wahrscheinlich',
              ].map((schritt, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{
                    background: 'var(--green-mid)', color: '#fff',
                    borderRadius: '50%', width: '1.4rem', height: '1.4rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.7rem', fontWeight: 700, flexShrink: 0,
                  }}>{i + 1}</span>
                  <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--text-mid)', paddingTop: '0.1rem' }}>{schritt}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FODMAP-Box */}
          <div style={{
            background: 'rgba(149,213,178,0.15)',
            border: '1.5px solid var(--mint)',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
          }}>
            <p style={{ margin: 0, fontWeight: 600, marginBottom: '0.5rem', color: 'var(--green-mid)' }}>
              🔬 Ist es wirklich das Gluten – oder die FODMAPs?
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.75 }}>
              Eine aktuelle Forschungsrichtung zeigt, dass viele NCGS-Symptome möglicherweise
              gar nicht durch Gluten ausgelöst werden, sondern durch <strong>FODMAPs</strong> –
              fermentierbare Kohlenhydrate, die ebenfalls in Weizen vorkommen (vor allem Fructane).
              Wer Weizen meidet, meidet beides gleichzeitig. In Doppelblindstudien konnten nur
              wenige Personen tatsächlich auf reines Gluten reagieren, wenn die FODMAPs
              kontrolliert wurden. Das bedeutet nicht, dass NCGS nicht existiert – aber es erklärt,
              warum die Reaktionen bei manchen Menschen so variabel sind.
            </p>
          </div>

          <h2 style={{ marginBottom: '0.75rem' }}>Was bedeutet das für den Alltag?</h2>
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>
              Wer unter NCGS leidet, profitiert in der Regel von einer <strong>glutenfreien oder
              zumindest glutenreduzierten Ernährung</strong>. Der wichtige Unterschied zur Zöliakie:
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
            {[
              {
                icon: '✅',
                titel: 'Kein nachgewiesener Darmschaden',
                text: 'Eine gelegentliche Glutenpanne ist bei NCGS nicht mit dem gleichen medizinischen Risiko verbunden wie bei Zöliakie. Trotzdem sollte man Symptome ernst nehmen.',
              },
              {
                icon: '📉',
                titel: 'Kann sich mit der Zeit bessern',
                text: 'Manche Menschen mit NCGS berichten, dass sie nach ein bis zwei Jahren ohne Gluten wieder kleine Mengen tolerieren. Bei Zöliakie ist das nicht der Fall.',
              },
              {
                icon: '🧪',
                titel: 'Zöliakie erst ausschließen lassen',
                text: 'Das ist wirklich wichtig: Wer "einfach mal" glutenfrei lebt ohne Test, kann eine Zöliakie nicht mehr sauber nachweisen – die Antikörper verschwinden. Erst testen, dann diät.',
              },
              {
                icon: '👨‍⚕️',
                titel: 'Mit dem Arzt sprechen',
                text: 'NCGS gehört in ärztliche Begleitung. Nicht wegen der Diät – die kann man selbst umsetzen – sondern um sicherzustellen, dass nichts Ernstes dahintersteckt.',
              },
            ].map(({ icon, titel, text }) => (
              <div key={titel} style={{
                background: 'var(--cream-dark)',
                borderRadius: '10px',
                padding: '1rem 1.1rem',
                borderLeft: '3px solid var(--mint)',
              }}>
                <p style={{ fontWeight: 700, margin: '0 0 0.35rem', fontSize: '0.95rem' }}>
                  {icon} {titel}
                </p>
                <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--text-mid)' }}>
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Quellen */}
          <div style={{
            background: 'rgba(0,0,0,0.03)',
            borderRadius: '10px',
            padding: '1rem 1.25rem',
            marginBottom: '2rem',
            fontSize: '0.8rem',
            color: 'var(--text-mid)',
          }}>
            <p style={{ fontWeight: 700, margin: '0 0 0.5rem', color: 'var(--text-dark)' }}>📚 Quellen & weiterführende Infos</p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.9 }}>
              <li>
                Canadian Celiac Association: <a href="https://www.celiac.ca/gluten-related-disorders/non-celiac-gluten-sensitivity/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-mid)' }}>Non-Celiac Gluten Sensitivity – Überblick</a>
              </li>
              <li>
                Gluten Intolerance Group (GIG): <a href="https://gluten.org/faq/what-is-non-celiac-gluten-sensitivity-or-ncgs-is-it-same-thing-as-gluten-intolerance/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-mid)' }}>What is NCGS?</a>
              </li>
              <li>
                PubMed Central / Nutrients (2018): <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6182669/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-mid)' }}>Non-Celiac Gluten Sensitivity: A Review – Peer-reviewed Studie</a>
              </li>
              <li>
                Medical Daily: <a href="https://www.medicaldaily.com/celiac-disease-vs-nonceliac-gluten-sensitivity-how-theyre-diagnosed-managed-474590" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-mid)' }}>Celiac Disease vs. NCGS – How They&apos;re Diagnosed and Managed</a>
              </li>
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/wissen/was-ist-zoeliakiie" className="btn btn-outline">← Was ist Zöliakie?</Link>
            <Link href="/wissen/diagnose-kinder" className="btn btn-outline">Diagnose bei Kindern →</Link>
          </div>

        </div>
      </section>
    </>
  );
}
