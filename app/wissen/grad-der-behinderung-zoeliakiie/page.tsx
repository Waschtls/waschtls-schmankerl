import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GdB bei Zöliakie – was bringt der Antrag wirklich? | Waschtls Schmankerl',
  description:
    'GdB 20 bei Zöliakie – was steckt dahinter, was bringt er konkret (Spoiler: weniger als erwartet), und wie lief der Antrag bei uns in Bayern. Ehrlicher Erfahrungsbericht, kein Rechtsrat.',
};

export default function GdBPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › GdB bei Zöliakie
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.75rem' }}>
            GdB bei Zöliakie – lohnt sich der Antrag?
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '600px', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Wir haben den Antrag beim ZBFS Bayern gestellt. Hier erfährst du ehrlich, was dabei rausgekommen ist,
            was ein GdB 20 wirklich bringt – und was er nicht bringt.
          </p>
        </div>
      </section>

      {/* Sprungmarken */}
      <section style={{ background: 'var(--cream-dark)', padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '0.5rem' }}>
            {[
              { href: '#was-ist-gdb',     emoji: '📋', label: 'Was ist der GdB?' },
              { href: '#was-bringt-er',   emoji: '💶', label: 'Was bringt er?' },
              { href: '#was-nicht',       emoji: '🚫', label: 'Was er nicht bringt' },
              { href: '#diagnose',        emoji: '🔬', label: 'Diagnose-Grundlage' },
              { href: '#antrag',          emoji: '📝', label: 'Antrag stellen' },
              { href: '#widerspruch',     emoji: '⚖️', label: 'Widerspruch' },
              { href: '#fazit',           emoji: '✅', label: 'Unser Fazit' },
            ].map(({ href, emoji, label }) => (
              <a key={href} href={href} style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.5rem 0.75rem', background: '#fff',
                borderRadius: '8px', border: '1px solid var(--border)',
                textDecoration: 'none', fontSize: '0.82rem', color: 'var(--text-mid)', fontWeight: 500,
              }}>
                <span>{emoji}</span><span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Einstieg */}
      <section className="section" style={{ paddingBottom: '1rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <div className="card" style={{ background: 'rgba(149,213,178,0.08)', border: '1.5px solid rgba(149,213,178,0.3)' }}>
            <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-mid)', fontStyle: 'italic' }}>
              „Beim Versorgungsamt anrufen macht ihr jetzt gleich" – das war einer der ersten Ratschläge
              nach der Diagnose unseres Sohnes. Also haben wir's gemacht. Was dabei herauskam,
              war weder Enttäuschung noch Überraschung – weil wir vorher verstanden hatten, was der Antrag
              eigentlich bedeutet und was nicht."
            </p>
          </div>
        </div>
      </section>

      {/* Was ist der GdB */}
      <section id="was-ist-gdb" className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Was ist der GdB bei Zöliakie?</h2>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Der Grad der Behinderung (GdB) ist eine amtliche Einschätzung, wie stark eine Erkrankung
            das Leben einer Person dauerhaft beeinträchtigt. Für Zöliakie gibt es dafür eine klare
            rechtliche Grundlage.
          </p>

          <div className="card" style={{ borderLeft: '4px solid var(--golden)', marginBottom: '1.5rem' }}>
            <p style={{ margin: '0 0 0.5rem', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-light)' }}>
              VersMedV Teil B, Nr. 10.2.2
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.85, color: 'var(--text-dark)' }}>
              „Zöliakie, Sprue: ohne wesentliche Folgeerscheinungen unter diätetischer Therapie — <strong>GdB 20</strong>.
              Bei andauerndem, ungenügendem Ansprechen auf glutenfreie Kost sind je nach Beeinträchtigung
              des Kräfte- und Ernährungszustands höhere Werte angemessen."
            </p>
          </div>

          <p style={{ color: 'var(--text-mid)', lineHeight: 1.85 }}>
            Das bedeutet: Wer Zöliakie hat, gut diätisch eingestellt ist und keine schweren Folgeerkrankungen
            hat, bekommt einen GdB von 20. Das ist festgeschrieben – kein Ermessen des Sachbearbeiters.
            Wer schlechter eingestellt ist oder schwerwiegende Komplikationen hat, kann höher eingestuft werden,
            aber das ist die Ausnahme.
          </p>
        </div>
      </section>

      {/* Was bringt er */}
      <section id="was-bringt-er" className="section" style={{ background: 'rgba(149,213,178,0.05)', paddingTop: '2.5rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Was bringt ein GdB 20 konkret?</h2>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            Die ehrliche Antwort: genau eine Sache.
          </p>

          <div className="card" style={{ border: '2px solid var(--golden)', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <span style={{ fontSize: '2rem', flexShrink: 0 }}>💶</span>
              <div>
                <h3 style={{ color: 'var(--green-deep)', margin: '0 0 0.5rem', fontSize: '1.05rem' }}>
                  Behinderten-Pauschbetrag: 384 € pro Jahr
                </h3>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.85, color: 'var(--text-mid)' }}>
                  Seit dem Veranlagungszeitraum 2021 gibt es für GdB 20 einen steuerlichen Pauschbetrag von
                  384 Euro pro Person und Jahr. Bei einem Kind ist dieser Betrag auf die Eltern übertragbar.
                  Was das in Euro bedeutet, hängt von eurem Grenzsteuersatz ab – realistisch sind
                  <strong> rund 130 bis 160 Euro tatsächliche Steuerersparnis im Jahr</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="card" style={{ background: 'rgba(220,53,69,0.04)', border: '1.5px solid rgba(220,53,69,0.2)', marginBottom: '1.25rem' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.85, color: 'var(--text-dark)' }}>
              <strong>⚠️ Wichtig:</strong> Die glutenfreien Mehrkosten selbst – also was ihr im Monat mehr ausgebt
              als für normale Lebensmittel – sind <em>nicht</em> als außergewöhnliche Belastungen absetzbar.
              § 33 Abs. 2 Satz 3 EStG schließt „Aufwendungen für Diätverpflegung" ausdrücklich aus.
              Der Pauschbetrag ersetzt das nicht – er ist einfach pauschal, unabhängig von den tatsächlichen Kosten.
            </p>
          </div>

          <p style={{ color: 'var(--text-light)', fontSize: '0.82rem', lineHeight: 1.7, fontStyle: 'italic' }}>
            Diese Information stammt aus unserem eigenen Rechercheprozess und erhebt keinen Anspruch auf
            steuerrechtliche Vollständigkeit. Vor dem nächsten Steuerbescheid lohnt sich ein kurzer Check
            beim Steuerberater oder Lohnsteuerhilfeverein.
          </p>
        </div>
      </section>

      {/* Was er NICHT bringt */}
      <section id="was-nicht" className="section" style={{ paddingTop: '2.5rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Was er nicht bringt</h2>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Das wird in vielen Posts nicht klar genug gesagt:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              {
                nein: 'Kein Schwerbehindertenausweis',
                text: 'Der beginnt erst ab GdB 50. Mit GdB 20 bekommt man keinen Ausweis – nur den Bescheid.',
              },
              {
                nein: 'Keine Gleichstellung',
                text: 'Gleichstellung beim Arbeitgeber (= ähnliche Rechte wie Schwerbehinderte) ist erst ab GdB 30 auf Antrag beim Arbeitsamt möglich.',
              },
              {
                nein: 'Keine Merkzeichen',
                text: 'Parkausweis, Freifahrt im ÖPNV, kostenlose Begleitperson – all das gibt es nur bei bestimmten Merkzeichen, die man erst ab GdB 50+ und mit spezifischen Einschränkungen bekommt.',
              },
              {
                nein: 'Kein Nachteilsausgleich in der Schule',
                text: 'Ein GdB 20 berechtigt nicht automatisch zu Nachteils­ausgleich (mehr Zeit bei Prüfungen, etc.). Das ist Sache der Schule und des Bundeslandes, unabhängig vom GdB.',
              },
              {
                nein: 'Keine Kostenerstattung für glutenfreie Lebensmittel',
                text: 'Früher gab es Krankenkassen, die Kosten erstattet haben. Das ist seit Jahren vorbei. Einzelne Kassen haben freiwillige Leistungen – nachfragen lohnt sich, aber nicht erwarten.',
              },
            ].map(item => (
              <div key={item.nein} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0, fontWeight: 800, color: 'rgba(220,53,69,0.7)', fontSize: '1rem', marginTop: '0.15rem' }}>✕</span>
                <div>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--green-deep)' }}>{item.nein}</strong>
                  <p style={{ margin: '0.2rem 0 0', fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--text-mid)' }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnose-Grundlage */}
      <section id="diagnose" className="section" style={{ background: 'var(--cream-dark)', paddingTop: '2.5rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Diagnose-Grundlage: Das ist der kritische Punkt</h2>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Wer keinen GdB bekommt oder abgelehnt wird, liegt es fast nie daran, dass das Amt
            die Rechtsgrundlage nicht kennt. Meistens ist es die Diagnose selbst, die nicht
            wasserdicht ist.
          </p>

          <div className="card" style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ color: 'var(--green-deep)', marginBottom: '0.75rem' }}>Der klassische Weg (alle Altersgruppen)</h4>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.85, color: 'var(--text-mid)' }}>
              Serologie (tTG-IgA im Blut) plus Dünndarmbiopsie (Gastroskopie). Beides zusammen,
              idealerweise bevor glutenfrei angefangen wurde. Wer mit dem Essen umgestellt hat, bevor
              die Biopsie gemacht wurde, hat oft sinkende Antikörper und ein unauffälliges Biopsiebild –
              und steht dann ohne klaren Befund da.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '4px solid var(--mint)', marginBottom: '1.25rem' }}>
            <h4 style={{ color: 'var(--green-deep)', marginBottom: '0.75rem' }}>Der biopsiefreie Weg für Kinder (ESPGHAN 2020)</h4>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.85, color: 'var(--text-mid)' }}>
              Seit den aktualisierten ESPGHAN-Leitlinien 2020 reicht bei Kindern unter bestimmten
              Voraussetzungen auch der Blutweg:
              <strong> tTG-IgA über dem Zehnfachen des Grenzwerts</strong> aus der ersten Probe, plus
              <strong> positives EMA (Endomysium-Antikörper)</strong> aus einer zweiten, unabhängigen Blutabnahme.
              Wenn diese Bedingungen erfüllt sind, ist die Diagnose ohne Biopsie medizinisch anerkannt –
              und damit auch als Grundlage für den GdB-Antrag verwendbar.
            </p>
            <p style={{ margin: '0.75rem 0 0', fontSize: '0.82rem', color: 'var(--text-light)', lineHeight: 1.7 }}>
              Wichtig: Den Kinderarzt oder Kindergastroenterologen fragen, ob diese Kriterien in eurem Fall
              dokumentiert sind. Das sind die Sätze, die in den Antrag gehören.
            </p>
          </div>

          <div style={{
            padding: '0.875rem 1.1rem', background: 'rgba(220,53,69,0.05)',
            border: '1.5px solid rgba(220,53,69,0.2)', borderRadius: '10px',
          }}>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.85 }}>
              <strong>Unser Fall:</strong> Unser Sohn erfüllte die ESPGHAN-2020-Kriterien – tTG-IgA deutlich über
              dem Zehnfachen, EMA positiv aus zweiter Probe, Kindergastroenterologe hat das schriftlich bestätigt.
              Das war die Grundlage für den Antrag. Ohne dieses Schreiben wäre es wacklig geworden.
            </p>
          </div>
        </div>
      </section>

      {/* Antrag stellen */}
      <section id="antrag" className="section" style={{ paddingTop: '2.5rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Den Antrag stellen – wie es bei uns lief</h2>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            In Bayern ist das Bayerische Amt für Versorgung und Familienförderung (ZBFS) zuständig.
            In anderen Bundesländern gibt es ähnliche Versorgungsämter.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              {
                nr: '01',
                titel: 'Antrag herunterladen oder online stellen',
                text: 'Das ZBFS hat einen Online-Antrag auf ihrer Website. Ihr könnt auch einen Papierantrag anfordern. Wir haben den Online-Weg genommen – hat funktioniert.',
              },
              {
                nr: '02',
                titel: 'Arztbericht beilegen',
                text: 'Das Wichtigste: ein ärztlicher Befundbericht der die Diagnose klar belegt. Kein Arztbrief-Bruchstück – ein vollständiger Bericht mit Antikörperwerten, Datum, ggf. ESPGHAN-Kriterien-Bestätigung. Den bekommt ihr vom Kindergastroenterologen.',
              },
              {
                nr: '03',
                titel: 'Keine Symptom-Dokumentation nötig (wenn gut eingestellt)',
                text: 'Manche raten zu einem Symptomtagebuch. Bei einem gut diätkontrollierten Kind ist das leeres Papier – es beweist nur, dass die Diät funktioniert. Genau dafür gibt es den GdB 20. Den Arztbericht durch ein tagelang leeres Symptomheft zu ergänzen bringt nichts.',
              },
              {
                nr: '04',
                titel: 'Warten',
                text: 'Wir haben etwa 8 Wochen gewartet. Das kann je nach Auslastung des Amts variieren. Man kann den Stand schriftlich anfragen, wenn es länger dauert.',
              },
              {
                nr: '05',
                titel: 'Bescheid prüfen',
                text: 'Den Bescheid sorgfältig lesen: Wie hoch ist der GdB? Stimmt die Bezeichnung der Erkrankung? Gibt es eine Rechtsmittelbelehrung? Diese Angaben bestimmen auch die Widerspruchsfrist.',
              },
            ].map(s => (
              <div key={s.nr} className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0, fontWeight: 800, fontSize: '1.3rem', color: 'var(--green-mid)', lineHeight: 1, marginTop: '0.15rem' }}>{s.nr}</span>
                <div>
                  <h4 style={{ marginBottom: '0.3rem', color: 'var(--green-deep)' }}>{s.titel}</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Widerspruch */}
      <section id="widerspruch" className="section" style={{ background: 'rgba(233,196,106,0.06)', paddingTop: '2.5rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Ablehnung oder falscher GdB – was dann?</h2>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Widerspruch einlegen ist das Mittel – aber nur mit Substanz.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <div className="card">
              <h4 style={{ color: 'var(--green-deep)', marginBottom: '0.4rem' }}>Frist: 1 Monat</h4>
              <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>
                Ab Zustellung des Bescheids habt ihr einen Monat Zeit, Widerspruch einzulegen. Der Widerspruch muss
                nicht sofort begründet werden – ihr könnt erst Widerspruch einlegen und die Begründung nachreichen.
              </p>
            </div>
            <div className="card">
              <h4 style={{ color: 'var(--green-deep)', marginBottom: '0.4rem' }}>Fehlt die Rechtsbehelfsbelehrung?</h4>
              <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>
                Wenn der Bescheid keine oder eine fehlerhafte Belehrung enthält, verlängert sich die Widerspruchsfrist
                auf ein Jahr (§ 66 SGG). Das ist selten, aber es kommt vor.
              </p>
            </div>
            <div className="card">
              <h4 style={{ color: 'var(--green-deep)', marginBottom: '0.4rem' }}>Warum eine Ablehnung meistens die Diagnose meint</h4>
              <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>
                Der häufigste echte Ablehnungsgrund ist nicht, dass das Amt die Rechtslage nicht kennt,
                sondern dass die Diagnose nicht eindeutig belegt ist – etwa wenn glutenfrei begonnen wurde,
                bevor Serologie und Biopsie abgeschlossen waren. Im Widerspruch helfen dann keine
                Schilderungen des Alltags, sondern fehlende ärztliche Befunde.
              </p>
            </div>
          </div>

          <div style={{
            marginTop: '1.25rem', padding: '0.875rem 1.1rem',
            background: 'rgba(255,255,255,0.5)', border: '1px solid var(--border)',
            borderRadius: '10px', fontSize: '0.8rem', color: 'var(--text-light)', lineHeight: 1.75,
          }}>
            <strong>Hinweis:</strong> Das ist kein Rechtsrat. Wer einen Widerspruch erwägt, sollte das
            mit dem Versorgungsamt oder einem Sozialrechts-Beratungsangebot (z.B. VdK, SoVD) klären.
            Viele bieten kostenlose Erstberatung an.
          </div>
        </div>
      </section>

      {/* Fazit */}
      <section id="fazit" className="section" style={{ paddingTop: '2.5rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Unser Fazit</h2>

          <div className="card" style={{ border: '2px solid var(--mint)', marginBottom: '1.25rem' }}>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--text-dark)' }}>
              Antrag stellen: <strong>ja</strong>. Der Aufwand ist überschaubar (ein Antrag, ein Arztbericht),
              und der Pauschbetrag läuft dann dauerhaft – ohne dass ihr jedes Jahr neu beantragen müsst.
              130 bis 160 Euro im Jahr sind kein Lebensunterhalt, aber sie sind besser als nichts,
              und einmal beantragt läuft es.
            </p>
            <p style={{ margin: '0.75rem 0 0', fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--text-dark)' }}>
              Den Antrag als <em>Anerkennung</em> aufladen oder mit dem GdB Schnittstellen zu Nachteilsausgleich
              oder Steuerabzug der Mehrkosten verbinden: <strong>nein</strong>. Das kommt nicht. Wer das erwartet,
              wird vom Bescheid enttäuscht sein – obwohl er rechtlich korrekt ist.
            </p>
          </div>

          <div className="card" style={{ background: 'rgba(149,213,178,0.08)', border: '1.5px solid rgba(149,213,178,0.3)' }}>
            <h4 style={{ color: 'var(--green-deep)', marginBottom: '0.5rem' }}>Was wirklich mehr bringt</h4>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.85, color: 'var(--text-mid)' }}>
              Mehr Hebel als der GdB haben gute Absprachen mit Kita und Schule, ein funktionierendes
              Netzwerk aus Ärzten und Ernährungsberatung, und ein solides glutenfreies Alltagssystem zuhause.
              Das kostet Zeit, keine Gebühren – und macht den größten Unterschied.
            </p>
          </div>
        </div>
      </section>

      {/* Hinweis & Links */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <div style={{
            padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--border)', borderRadius: '8px',
            fontSize: '0.775rem', color: 'var(--text-light)', lineHeight: 1.75,
            marginBottom: '2rem',
          }}>
            <strong>Hinweis:</strong> Alle Angaben hier basieren auf unserem persönlichen Erfahrungsbericht
            in Bayern (ZBFS) und öffentlich zugänglichen Quellen (VersMedV, EStG, SGG). Das ist kein Rechts- oder
            Steuerrat. Für konkrete Entscheidungen bitte einen Steuerberater, Lohnsteuerhilfeverein oder
            Sozialrechts-Beratungsstelle (VdK, SoVD) einschalten.
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/wissen/erstdiagnose" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
              Erstdiagnose: Was jetzt? →
            </Link>
            <Link href="/wissen/schule-kita" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
              Schule & Kita →
            </Link>
            <Link href="/wissen" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
              Alle Wissensartikel →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
