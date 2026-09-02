import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zöliakie und Genetik: Müssen meine anderen Kinder getestet werden? | Waschtls Schmankerl',
  description:
    'Was Gene mit Zöliakie zu tun haben, welches Risiko Geschwister haben und wann ein Gentest sinnvoll ist – einfach erklärt für betroffene Familien.',
};

export default function ZoeliakieGenetikPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Zöliakie & Genetik
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.75rem' }}>
            Zöliakie und Genetik
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '620px', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Müssen meine anderen Kinder auch getestet werden? Was hat Zöliakie mit Genen zu tun?
            Diese Fragen kommen bei fast jeder Familie nach der Diagnose — hier sind die Antworten.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section" style={{ paddingBottom: '1rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.75rem' }}>Zöliakie läuft in der Familie</h2>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.9 }}>
            Wenn bei einem Kind Zöliakie diagnostiziert wird, ist das für viele Eltern der Moment
            wo sie sich fragen: Haben wir das irgendwo „mitgebracht"? Könnte es mein anderes Kind
            auch treffen? Bin ich selbst vielleicht auch betroffen?
          </p>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.9 }}>
            Die kurze Antwort: Ja, Zöliakie hat eine starke genetische Komponente. Aber ein
            genetisches Risiko bedeutet nicht automatisch, dass jemand erkrankt. Und der Unterschied
            zwischen beidem ist wichtig.
          </p>
        </div>
      </section>

      {/* Gene */}
      <section className="section" style={{ background: 'var(--cream-dark)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.75rem' }}>Die Gene HLA-DQ2 und HLA-DQ8</h2>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '1rem' }}>
            Fast alle Menschen mit Zöliakie tragen eine bestimmte Genvariante — entweder
            <strong> HLA-DQ2</strong> oder <strong>HLA-DQ8</strong>. Diese Gene steuern, wie das
            Immunsystem auf Fremdstoffe reagiert. Bei Menschen mit diesen Varianten kann das
            Immunsystem Gluten fälschlicherweise als Bedrohung einstufen — und greift dann den
            eigenen Darm an.
          </p>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.9 }}>
            Wichtig zu verstehen: Diese Gene sind sehr häufig. Rund <strong>30–40 % der Bevölkerung</strong> tragen
            HLA-DQ2 oder HLA-DQ8 — aber nur etwa 1 % entwickeln tatsächlich eine Zöliakie. Die Gene
            sind also eine notwendige Voraussetzung, kein Schicksal. Warum manche Menschen trotz
            dieser Gene keine Zöliakie bekommen, ist Gegenstand aktueller Forschung.
          </p>

          <div className="card" style={{ background: 'rgba(45,106,79,0.06)', border: '1.5px solid rgba(45,106,79,0.15)', marginTop: '1.25rem' }}>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--green-deep)' }}>
              🧬 Was ein Gentest aussagt — und was nicht
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { label: 'Negatives Ergebnis (keine Risikogene)', text: 'Zöliakie ist so gut wie ausgeschlossen. Das ist beruhigend und bedeutet: kein weiteres Screening nötig.' },
                { label: 'Positives Ergebnis (Risikogene vorhanden)', text: 'Das Kind könnte Zöliakie entwickeln — muss aber nicht. Regelmäßige Antikörpertests sind sinnvoll, besonders wenn Symptome auftreten.' },
              ].map(item => (
                <div key={item.label} style={{ padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.6)', borderRadius: '8px' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--green-deep)', marginBottom: '0.25rem' }}>{item.label}</div>
                  <div style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--text-mid)' }}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Geschwisterrisiko */}
      <section className="section">
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.75rem' }}>Wie hoch ist das Risiko für Geschwister?</h2>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            Das ist die Frage die die meisten Eltern am meisten beschäftigt. Die Antwort der
            Wissenschaft ist klar: Geschwister von Zöliakie-Betroffenen haben ein deutlich
            erhöhtes Risiko.
          </p>

          <div className="grid-2" style={{ gap: '1rem' }}>
            {[
              { gruppe: 'Geschwister', risiko: '~10 %', details: 'Gegenüber ~1 % in der Allgemeinbevölkerung. Das Risiko ist etwa 10-mal höher.' },
              { gruppe: 'Elternteil mit Zöliakie', risiko: '~5–10 %', details: 'Das Kind eines betroffenen Elternteils hat ähnlich erhöhtes Risiko.' },
              { gruppe: 'Eineiige Zwillinge', risiko: '~70–80 %', details: 'Der stärkste Beleg für die genetische Komponente — aber auch hier erkranken nicht alle.' },
              { gruppe: 'Keine Verwandten mit Zöliakie', risiko: '~1 %', details: 'Das Durchschnittsrisiko in der Allgemeinbevölkerung.' },
            ].map(item => (
              <div key={item.gruppe} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-light)', marginBottom: '0.4rem' }}>{item.gruppe}</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--green-deep)', marginBottom: '0.4rem' }}>{item.risiko}</div>
                <div style={{ fontSize: '0.8rem', lineHeight: 1.7, color: 'var(--text-mid)' }}>{item.details}</div>
              </div>
            ))}
          </div>

          <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginTop: '1.5rem' }}>
            Wichtig dabei: Diese Zahlen bedeuten nicht, dass 10 von 100 Geschwistern zwangsläufig
            krank werden. Viele tragen die Gene, ohne je Symptome zu entwickeln. Aber das Risiko
            ist hoch genug, um es im Blick zu behalten.
          </p>
        </div>
      </section>

      {/* Wann testen */}
      <section className="section" style={{ background: 'var(--cream-dark)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.75rem' }}>Wann sollte man Geschwister testen lassen?</h2>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            Hier empfiehlt sich ein zweistufiger Ansatz — erst Gentest, dann bei positivem Ergebnis
            regelmäßige Antikörpertests. Das vermeidet unnötige Belastungen und gibt trotzdem
            Sicherheit.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { prio: true,  text: 'Gentest (HLA-DQ2/DQ8) bei Geschwistern ab dem Kleinkindalter — einmal, und dann weiß man, ob weiteres Screening überhaupt nötig ist.' },
              { prio: true,  text: 'Antikörpertest (tTG-IgA) regelmäßig, wenn Risikogene vorhanden sind — besonders wenn Symptome wie Bauchschmerzen, Müdigkeit, schleppende Gewichtszunahme oder Eisenmangel auftreten.' },
              { prio: false, text: 'Bei einem negativen Gentest: kein weiteres Screening nötig. Die Wahrscheinlichkeit, Zöliakie zu entwickeln, ist dann verschwindend gering.' },
              { prio: false, text: 'Auch Eltern mit einem betroffenen Kind sollten prüfen, ob bei ihnen selbst vielleicht eine unerkannte Zöliakie vorliegt — bei Erwachsenen verläuft sie oft ohne klassische Symptome.' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                padding: '0.75rem 1rem',
                background: item.prio ? 'rgba(45,106,79,0.06)' : 'rgba(255,255,255,0.5)',
                borderRadius: '8px',
                border: `1px solid ${item.prio ? 'rgba(45,106,79,0.15)' : 'var(--border)'}`,
              }}>
                <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: '0.05rem' }}>
                  {item.prio ? '✅' : '📋'}
                </span>
                <span style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--text-mid)' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warum nicht alle erkranken */}
      <section className="section">
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.75rem' }}>Warum entwickeln nicht alle Menschen mit Risikogenen Zöliakie?</h2>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '1rem' }}>
            Das ist die große offene Frage der Forschung. Klar ist: Gene allein reichen nicht.
            Es braucht einen Auslöser — und der ist von Mensch zu Mensch unterschiedlich.
          </p>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '1rem' }}>
            Diskutiert werden zum Beispiel bestimmte Infektionen in der frühen Kindheit, die
            Zusammensetzung des Darmmikrobioms, der Zeitpunkt der Gluteneinführung bei Babys oder
            Stress. Keiner dieser Faktoren ist allein entscheidend — wahrscheinlich spielen mehrere
            zusammen.
          </p>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.9 }}>
            Was das für euch bedeutet: Ihr könnt eurem Kind mit positiven Risikogenen kein Leben
            ohne Gluten „vorsorglich" zumuten — das ist medizinisch nicht sinnvoll und würde
            sogar den Antikörpertest verfälschen. Was ihr tun könnt: im Blick behalten, regelmäßig
            testen und mit dem Kinderarzt oder Kindergastroenterologen im Gespräch bleiben.
          </p>

          <div className="card" style={{ marginTop: '1.5rem', background: 'rgba(149,213,178,0.08)', border: '1.5px solid rgba(149,213,178,0.3)' }}>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--green-deep)' }}>
              🔬 Was die aktuelle Forschung beschäftigt
            </h4>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.85, color: 'var(--text-mid)' }}>
              Wissenschaftler untersuchen derzeit intensiv, welche Umweltfaktoren die Zöliakie-Entstehung
              begünstigen — darunter die Rolle des Darmmikrobioms (die Gesamtheit aller Bakterien im Darm),
              frühe Infektionen und der Zeitpunkt der Gluteneinführung bei Säuglingen. Ziel ist es,
              eines Tages vorhersagen zu können, wer von Trägern der Risikogene tatsächlich erkrankt —
              und wer nicht.{' '}
              <Link href="/wissen/neue-therapien-2026" style={{ color: 'var(--green-mid)' }}>
                Was in der Forschung gerade passiert →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Fazit */}
      <section className="section" style={{ background: 'var(--cream-dark)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.75rem' }}>Das Wichtigste in Kürze</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              'Zöliakie hat eine starke genetische Komponente — aber ein Risikogen bedeutet nicht automatisch Erkrankung.',
              'Geschwister haben ein ~10-fach erhöhtes Risiko gegenüber der Allgemeinbevölkerung.',
              'Ein Gentest kann das Risiko sicher ausschließen — das gibt Sicherheit ohne dauerhaftes Screening.',
              'Wer Risikogene trägt, sollte regelmäßige Antikörpertests machen, vor allem bei Symptomen.',
              'Glutenfreie Ernährung „vorsorglich" einzuführen ist medizinisch nicht empfohlen und verfälscht Tests.',
              'Auch Eltern eines betroffenen Kindes sollten prüfen, ob sie selbst unerkannte Zöliakie haben.',
            ].map((punkt, i) => (
              <div key={i} style={{
                display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                padding: '0.75rem 1rem',
                background: 'rgba(255,255,255,0.5)',
                borderRadius: '8px',
                border: '1px solid var(--border)',
              }}>
                <span style={{ color: 'var(--golden)', fontWeight: 800, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--text-mid)' }}>{punkt}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/wissen/diagnose-kinder" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
              ← Diagnose bei Kindern
            </Link>
            <Link href="/wissen/neue-therapien-2026" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
              Neue Therapien & Forschung →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
