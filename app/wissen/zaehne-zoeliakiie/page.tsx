import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zähne & Zahnschmelz bei Zöliakie – was Eltern wissen müssen',
  description:
    'Warum Kinder mit Zöliakie häufig Zahnschmelzdefekte haben, wie man sie erkennt, was der Zahnarzt wissen sollte – und wie glutenfreie Ernährung die Zähne schützt.',
};

export default function ZaehneZoeliakiePage() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Zähne & Zahnschmelz
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>
            Zähne & Zahnschmelz bei Zöliakie
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px' }}>
            40–50 % der Kinder mit Zöliakie haben Zahnschmelzdefekte. Was dahinter steckt, warum der Zahnarzt unbedingt Bescheid wissen sollte – und warum Zöliakie manchmal zuerst am Zahn auffällt.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>

          <div style={{ marginBottom: '2rem' }}>
            <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>
              Beim Zahnarztbesuch war es das erste Mal: Die Zahnärztin sah die Verfärbungen und
              Grübchen in den Milchzähnen und fragte, ob jemand in der Familie Zöliakie habe. Für
              viele Eltern ist genau das der Moment, in dem sie zum ersten Mal hören, dass Zähne
              und Darm etwas miteinander zu tun haben.
            </p>
            <p style={{ lineHeight: 1.8, margin: 0 }}>
              Zahnschmelzdefekte durch Zöliakie sind häufig, spezifisch – und leider permanent. Das
              Wissen darum kann aber helfen: Frühere Diagnose, gezieltere Prophylaxe, und ein
              Zahnarzt, der die richtigen Fragen stellt.
            </p>
          </div>

          {/* Statistik-Box */}
          <div style={{
            background: 'rgba(149,213,178,0.15)',
            border: '1.5px solid var(--mint)',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
          }}>
            <p style={{ margin: 0, fontWeight: 700, marginBottom: '0.5rem', color: 'var(--green-mid)', fontSize: '1rem' }}>
              📊 Was Studien zeigen
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.8 }}>
              Laut einer Studie im Fachjournal <em>Nutrients</em> (PMC, 2023) haben <strong>40–50 % aller
              Kinder mit Zöliakie</strong> Zahnschmelzdefekte – verglichen mit 5–10 % in der
              Allgemeinbevölkerung. Das <strong>National Institute of Diabetes and Digestive and
              Kidney Diseases (NIDDK)</strong> der USA nennt Zahnschmelzdefekte ausdrücklich als
              klinisches Erkennungsmerkmal von Zöliakie. Die <strong>Celiac Disease Foundation</strong>
              listet Zahnprobleme als einen der häufig übersehenen, sogenannten „silent" Symptome
              der Erkrankung.
            </p>
          </div>

          <h2 style={{ marginBottom: '0.75rem' }}>Wie sehen Zahnschmelzdefekte bei Zöliakie aus?</h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Zahnschmelzdefekte durch Zöliakie haben ein charakteristisches Muster. Sie treten
            symmetrisch auf – also auf mehreren Zähnen gleichzeitig, oft spiegelbildlich – und
            betreffen vor allem die bleibenden Zähne. Die Milchzähne sind seltener betroffen,
            weil sie sich im Mutterleib entwickeln.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
            {[
              {
                icon: '⬜',
                titel: 'Weiße oder cremefarbene Flecken',
                text: 'Opake Verfärbungen auf dem Zahnschmelz, die nicht auf Karies zurückzuführen sind. Oft schon an den ersten bleibenden Schneidezähnen sichtbar.',
              },
              {
                icon: '🟡',
                titel: 'Gelb-braune Verfärbungen',
                text: 'Stärkere Farbveränderungen, die durch Schmelzhypoplasie entstehen – der Schmelz ist unterentwickelt und porös, lagert Farbstoffe leichter ein.',
              },
              {
                icon: '🕳️',
                titel: 'Grübchen und Rillen',
                text: 'Eingelassene Vertiefungen im Schmelz, horizontal verlaufend. Typisch für Zöliakie – im Unterschied zu kariösen Löchern sind sie von Anfang an da, nicht durch Zucker entstanden.',
              },
              {
                icon: '⚠️',
                titel: 'Erhöhte Kariesanfälligkeit',
                text: 'Weil der Schmelz porös ist, sind die betroffenen Zähne anfälliger für Karies. Das führt manchmal zu der falschen Erklärung "schlechte Mundhygiene" – obwohl das Grundproblem woanders liegt.',
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

          <h2 style={{ marginBottom: '0.75rem' }}>Warum passiert das – die Verbindung zwischen Darm und Zahn</h2>
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>
              Der Zahnschmelz entwickelt sich in der frühen Kindheit, zwischen dem 2. und 8.
              Lebensjahr – genau dann, wenn Zöliakie bei vielen Kindern aktiv ist, ohne dass sie
              noch diagnostiziert wurde.
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>
              Der Mechanismus: Wenn der Darm durch Zöliakie entzündet ist, werden Kalzium, Vitamin D
              und andere Mineralstoffe nicht ausreichend aufgenommen. Diese Mikronährstoffe sind
              jedoch essenziell für den Aufbau des Zahnschmelzes. Fehlen sie in der entscheidenden
              Entwicklungsphase, entsteht ein minderwertiger, dünnerer Schmelz.
            </p>
            <p style={{ lineHeight: 1.8, margin: 0 }}>
              Hinzu kommt eine direkte Immunreaktion: Ähnlich wie die Darmschleimhaut kann auch
              das Mundepithel von der Immunantwort auf Gluten betroffen sein. Aphten (schmerzhafte
              Mundschleimhautläsionen) sind ein weiteres orales Symptom, das bei Menschen mit
              Zöliakie deutlich häufiger auftritt.
            </p>
          </div>

          {/* Diagnose-Hinweis-Box */}
          <div style={{
            background: 'rgba(149,213,178,0.15)',
            border: '1.5px solid var(--mint)',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
          }}>
            <p style={{ margin: 0, fontWeight: 600, marginBottom: '0.4rem', color: 'var(--green-mid)' }}>
              🔍 Zähne als Frühwarnzeichen
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.75 }}>
              Die Celiac Disease Foundation weist darauf hin, dass Zahnschmelzdefekte in manchen
              Fällen das <strong>erste und einzige äußerlich sichtbare Zeichen</strong> einer Zöliakie
              sein können – noch bevor Bauchbeschwerden auftreten. Zahnarzt, Kieferorthopäde oder
              Kinderzahnarzt können so eine wichtige Rolle in der Früherkennung spielen – wenn sie
              wissen, worauf sie achten müssen.
            </p>
          </div>

          <h2 style={{ marginBottom: '0.75rem' }}>Was bedeutet das konkret – für Eltern und Zahnarzt</h2>
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>
              Der entscheidende Punkt: Die Schäden am Zahnschmelz sind <strong>nicht reparierbar</strong>.
              Einmal unterentwickelter Schmelz wächst nicht nach. Was man aber sehr wohl tun kann:
            </p>
          </div>

          <div style={{
            background: 'var(--cream-dark)',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
            borderLeft: '4px solid var(--golden)',
          }}>
            <p style={{ margin: 0, fontWeight: 600, marginBottom: '0.75rem' }}>
              💡 Was jetzt hilft
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                'Den Zahnarzt informieren: "Mein Kind hat Zöliakie" sollte beim ersten Termin gesagt werden. Viele Zahnärzte wissen um die Verbindung, aber nicht alle fragen danach.',
                'Fluorid-Prophylaxe konsequent umsetzen: Fluorid stärkt den vorhandenen Schmelz. Bei Kindern mit Zöliakiie-bedingten Schmelzdefekten ist Fluorid besonders wichtig.',
                'Spezielle Versiegelung der betroffenen Zähne besprechen: Schützende Versiegelungen können anfällige Stellen absichern.',
                'Glutenfreie Ernährung so früh wie möglich – neue Zähne, die nach der Diagnose wachsen, sind besser geschützt, weil der Nährstoffmangel behoben wird.',
                'Aphten im Mund ernst nehmen: Wenn das Kind immer wieder Mundschleimhautgeschwüre hat, ist das ein Hinweis auf unzureichende Glutenkontrolle.',
              ].map((tipp, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--green-mid)', fontWeight: 700, flexShrink: 0, fontSize: '0.85rem', marginTop: '0.1rem' }}>→</span>
                  <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--text-mid)' }}>{tipp}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Erfahrung */}
          <div style={{
            background: 'var(--cream-dark)',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
            borderLeft: '4px solid var(--golden)',
          }}>
            <p style={{ margin: 0, fontWeight: 600, marginBottom: '0.4rem' }}>
              Unsere Erfahrung
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.75, fontStyle: 'italic', color: 'var(--text-mid)' }}>
              Für uns waren das tatsächlich neue Informationen. Wir werden das Thema beim nächsten
              Zahnarztbesuch gezielt ansprechen und fragen, worauf bei Zöliakie-Kindern besonders zu
              achten ist. Die Rückmeldung und etwaige Empfehlungen posten wir dann hier.
            </p>
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
                Celiac Disease Foundation: <a href="https://celiac.org/about-celiac-disease/related-conditions/oral-health/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-mid)' }}>Oral Health and Celiac Disease</a>
              </li>
              <li>
                Beyond Celiac: <a href="https://www.beyondceliac.org/celiac-disease/symptoms/dental-defects/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-mid)' }}>Dental Defects as a Symptom of Celiac Disease</a>
              </li>
              <li>
                NIDDK (National Institute of Diabetes): <a href="https://www.niddk.nih.gov/health-information/professionals/clinical-tools-patient-management/digestive-diseases/dental-enamel-defects-celiac-disease" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-mid)' }}>Dental Enamel Defects and Celiac Disease – Klinischer Leitfaden</a>
              </li>
              <li>
                Nutrients Journal / PubMed Central (2023): <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10144097/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-mid)' }}>Oral Manifestations in Celiac Disease – Peer-reviewed Studie</a>
              </li>
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/wissen/psychologische-auswirkungen" className="btn btn-outline">← Psychologische Auswirkungen</Link>
            <Link href="/wissen/naehrstoffe" className="btn btn-outline">Nährstoffe bei Zöliakie →</Link>
          </div>

        </div>
      </section>
    </>
  );
}
