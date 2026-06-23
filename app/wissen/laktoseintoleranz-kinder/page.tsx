import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Laktoseintoleranz bei Zöliakie-Kindern – Was steckt dahinter?',
  description:
    'Viele Kinder mit Zöliakie vertragen nach der Diagnose auch keine Milch mehr. Was dahinter steckt, wie lange das dauert – und was man tun kann.',
};

export default function LaktosePage() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Laktoseintoleranz bei Zöliakie
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>
            Laktoseintoleranz bei Zöliakie-Kindern
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '580px' }}>
            "Jetzt auch noch kein Käse?" – was viele Eltern kurz nach der Diagnose erleben, und warum das oft nur vorübergehend ist.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '0.75rem' }}>Warum Zöliakie und Laktoseintoleranz oft zusammen auftreten</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>
              Das Enzym das Laktose (Milchzucker) verdaut – die Laktase – wird in den Spitzen der Darmzotten produziert. Bei Zöliakie werden genau diese Zotten durch die Immunreaktion geschädigt oder abgebaut. Ergebnis: der Darm kann vorübergehend keine Laktase mehr in ausreichender Menge bilden.
            </p>
            <p style={{ lineHeight: 1.8, margin: 0 }}>
              Das bedeutet: Milchprodukte werden schlecht vertragen – nicht weil eine echte Laktoseintoleranz vorliegt, sondern weil der Darm gerade im Heilungsprozess ist. Man nennt das eine <em>sekundäre Laktoseintoleranz</em>.
            </p>
          </div>

          {/* Info-Box */}
          <div style={{
            background: 'rgba(149,213,178,0.15)',
            border: '1.5px solid var(--mint)',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
          }}>
            <p style={{ margin: 0, fontWeight: 600, marginBottom: '0.4rem', color: 'var(--green-mid)' }}>
              💚 Die gute Nachricht
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.7 }}>
              In den meisten Fällen ist die Laktoseintoleranz nach einigen Monaten strikt glutenfreier Ernährung wieder weg – der Darm erholt sich, die Zotten regenerieren sich, und die Laktaseproduktion normalisiert sich. Viele Kinder vertragen Milchprodukte nach 6-12 Monaten wieder problemlos.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '0.75rem' }}>Was tun in der Übergangszeit?</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
              In der Phase nach der Diagnose kann es sinnvoll sein, Milchprodukte vorübergehend zu reduzieren oder auf laktosefreie Alternativen umzusteigen. Ein Kinderarzt oder Gastroenterologe kann durch einen Atemtest feststellen ob und wie stark eine Laktoseintoleranz vorliegt.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Laktosefreie Milch', desc: 'Gleicher Geschmack, kein Unterschied für Kinder spürbar', tipp: 'Einfachste Lösung für Übergangszeit' },
                { label: 'Pflanzenmilch', desc: 'Hafermilch (GF-zertifiziert!), Reismilch, Mandelmilch', tipp: 'Hafer nur wenn explizit als glutenfrei gekennzeichnet' },
                { label: 'Hart- und Schnittküse', desc: 'Enthalten kaum noch Laktose – oft gut verträglich', tipp: 'Parmesan, Emmentaler, Gouda (reif) – meist kein Problem' },
                { label: 'Laktase-Tabletten', desc: 'Enzym zum Einnehmen vor dem Essen', tipp: 'Kurzfristige Lösung für besondere Anlässe (z.B. Kindergeburtstag)' },
              ].map(({ label, desc, tipp }) => (
                <div key={label} style={{
                  background: 'var(--cream-dark)',
                  borderRadius: '10px',
                  padding: '0.875rem 1rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.5rem',
                }}>
                  <div>
                    <p style={{ fontWeight: 700, margin: 0, marginBottom: '0.2rem', fontSize: '0.9rem' }}>{label}</p>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-mid)' }}>{desc}</p>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--green-mid)', fontStyle: 'italic', alignSelf: 'center' }}>
                    💡 {tipp}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '0.75rem' }}>Primäre vs. sekundäre Laktoseintoleranz</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>
              Es gibt auch eine <strong>primäre Laktoseintoleranz</strong> – die entsteht unabhängig von Zöliakie und ist dauerhaft. Sie ist genetisch bedingt und tritt häufig im Jugend- und Erwachsenenalter auf. Wer schon vor der Zöliakie-Diagnose keine Milch vertragen hat, hat möglicherweise diese Form.
            </p>
            <p style={{ lineHeight: 1.8, margin: 0 }}>
              Den Unterschied zeigt die Zeit: Wenn die Laktoseunverträglichkeit nach Monaten glutenfreier Ernährung wieder verschwindet, war sie sekundär und durch Zöliakie verursacht. Bleibt sie bestehen, lohnt sich ein Gespräch mit dem Arzt.
            </p>
          </div>

          <div style={{
            background: 'var(--cream-dark)',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
            borderLeft: '4px solid var(--golden)',
          }}>
            <p style={{ margin: 0, fontWeight: 600, marginBottom: '0.4rem' }}>
              Unser Erfahrungsbericht
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.7, fontStyle: 'italic', color: 'var(--text-mid)' }}>
              Bei unserem Sohn hat es ca. 4 Monate gedauert bis er Milch wieder ohne Probleme vertragen hat. In dieser Zeit haben wir laktosefreie Milch verwendet – er hat gar keinen Unterschied bemerkt. Heute isst er alles ohne Einschränkung, solange es glutenfrei ist.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/wissen/ernaehrung-grundlagen" className="btn btn-outline">← Ernährungsgrundlagen</Link>
            <Link href="/faq" className="btn btn-outline">Zurück zur FAQ →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
