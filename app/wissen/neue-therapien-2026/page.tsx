import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Neue Hoffnung bei Zöliakie: Therapien & Forschung 2026 | Waschtls Schmankerl',
  description:
    'Was sich gerade in der Zöliakie-Forschung tut: neue Medikamente, klinische Studien und eine wichtige Petition — einfach erklärt für betroffene Familien.',
};

export default function NeueTherapien2026Page() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Neue Therapien & Forschung
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.75rem' }}>
            Neue Hoffnung bei Zöliakie
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '620px', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Neue Medikamente in klinischen Studien, ein möglicher Impfansatz und eine Petition
            an den Bundestag — 2026 ist in der Zöliakie-Welt einiges in Bewegung.
          </p>
          <div style={{ marginTop: '1rem', display: 'inline-block', padding: '0.3rem 0.8rem', background: 'rgba(233,196,106,0.15)', border: '1px solid rgba(233,196,106,0.4)', borderRadius: '999px', fontSize: '0.75rem', color: 'var(--golden)', fontWeight: 600 }}>
            Zuletzt aktualisiert: September 2026
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section" style={{ paddingBottom: '1rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.75rem' }}>Warum die glutenfreie Diät allein nicht genug ist</h2>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.9 }}>
            Die glutenfreie Ernährung ist und bleibt die einzige bewährte Behandlung der Zöliakie —
            aber sie ist kein perfekter Schutz. Viele Betroffene haben trotz konsequenter GF-Diät
            noch Beschwerden, weil unsichtbare Glutenspuren im Alltag kaum vollständig zu vermeiden
            sind. Und die Diät selbst ist eine dauerhafte Belastung: sozial, praktisch, emotional.
          </p>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.9 }}>
            Genau deshalb forschen Wissenschaftler weltweit an Medikamenten, die entweder Symptome
            besser kontrollieren oder den Körper langfristig toleranter gegenüber Gluten machen.
            Hier ist der aktuelle Stand — ohne übertriebene Erwartungen, aber mit echtem Optimismus.
          </p>
        </div>
      </section>

      {/* Studien */}
      <section className="section" style={{ background: 'var(--cream-dark)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Was gerade in klinischen Studien getestet wird</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* ZED 1227 */}
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--green-deep)' }}>ZED 1227</h3>
                <span style={{ padding: '0.2rem 0.65rem', background: 'var(--golden)', color: 'var(--green-deep)', borderRadius: '999px', fontSize: '0.7rem', fontWeight: 700 }}>Phase 2 · Teilnehmer gesucht</span>
              </div>
              <p style={{ margin: '0 0 0.75rem', fontSize: '0.875rem', lineHeight: 1.85, color: 'var(--text-mid)' }}>
                ZED 1227 ist ein Enzymhemmer, der Gluten im Darm „entschärfen" soll, bevor das
                Immunsystem es überhaupt erkennt. Es blockiert das Enzym Transglutaminase-2 —
                genau das Enzym, das bei Zöliakie Gluten so „reizend" für das Immunsystem macht.
              </p>
              <p style={{ margin: '0 0 0.75rem', fontSize: '0.875rem', lineHeight: 1.85, color: 'var(--text-mid)' }}>
                In der laufenden Phase-2-Studie werden bis zu 300 Teilnehmer in 14 Ländern
                gesucht — darunter auch Deutschland. Gesucht werden Menschen mit gesicherter
                Zöliakie-Diagnose, die trotz glutenfreier Ernährung noch Symptome haben.
              </p>
              <a
                href="https://www.dzg-online.de/aktuelles/studienteilnehmer-zur-klinischen-studie-zed-1227-gesucht"
                target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '0.8rem', color: 'var(--green-mid)', fontWeight: 600 }}
              >
                Mehr zur Studie auf dzg-online.de →
              </a>
            </div>

            {/* Amletilimab */}
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--green-deep)' }}>Amletilimab (DRI17963)</h3>
                <span style={{ padding: '0.2rem 0.65rem', background: 'var(--mint)', color: 'var(--green-deep)', borderRadius: '999px', fontSize: '0.7rem', fontWeight: 700 }}>Phase 2 · laufend</span>
              </div>
              <p style={{ margin: '0 0 0.75rem', fontSize: '0.875rem', lineHeight: 1.85, color: 'var(--text-mid)' }}>
                Amletilimab greift tiefer ins Immunsystem ein: Es dämpft die sogenannten
                T-Gedächtniszellen, die bei Zöliakie „einprogrammiert" haben, auf Gluten zu reagieren.
                Das Prinzip ist ähnlich wie bei modernen Biologika bei anderen Autoimmunerkrankungen.
              </p>
              <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.85, color: 'var(--text-mid)' }}>
                Das Medikament wird alle 4 oder 12 Wochen gegeben — als Ergänzung zur GF-Diät,
                nicht als Ersatz. Es ist noch nicht zugelassen; die Studienergebnisse werden
                entscheiden, ob es in größere Phase-3-Studien geht.
              </p>
            </div>

            {/* VTP-1000 */}
            <div className="card" style={{ border: '2px solid rgba(233,196,106,0.4)', background: 'rgba(233,196,106,0.04)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--green-deep)' }}>VTP-1000 — der „Impfansatz"</h3>
                <span style={{ padding: '0.2rem 0.65rem', background: 'rgba(233,196,106,0.3)', color: 'var(--green-deep)', borderRadius: '999px', fontSize: '0.7rem', fontWeight: 700 }}>Phase 1 · Ergebnisse 2026</span>
              </div>
              <p style={{ margin: '0 0 0.75rem', fontSize: '0.875rem', lineHeight: 1.85, color: 'var(--text-mid)' }}>
                Das ist der vielversprechendste Ansatz — und gleichzeitig der, bei dem die
                Erwartungen am nüchternsten bleiben sollten. VTP-1000 vom britischen Unternehmen
                Barinthus Biotherapeutics ist kein Impfstoff im klassischen Sinne. Es ist eine
                Immuntoleranz-Therapie: Der Körper soll „umtrainiert" werden, Gluten nicht mehr
                als Feind zu betrachten.
              </p>
              <p style={{ margin: '0 0 0.75rem', fontSize: '0.875rem', lineHeight: 1.85, color: 'var(--text-mid)' }}>
                Das Prinzip ist ähnlich wie bei der Desensibilisierung gegen Allergien — nur
                gezielter auf die spezifischen Gluten-Teile ausgerichtet, die bei Zöliakie
                das Immunsystem auslösen. Die Phase-1-Sicherheitsstudie läuft, Ergebnisse
                werden im zweiten Halbjahr 2026 erwartet.
              </p>
              <div style={{ padding: '0.65rem 0.875rem', background: 'rgba(233,196,106,0.1)', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--text-mid)', fontStyle: 'italic' }}>
                Realistisch betrachtet: Bis ein solches Mittel zugelassen und verfügbar ist,
                vergehen noch viele Jahre. Aber die Richtung stimmt.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Petition */}
      <section className="section">
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.75rem' }}>🗳 Die DZG-Petition — jetzt unterschreiben</h2>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '1rem' }}>
            Während die Forschung voranschreitet, kämpft die Deutsche Zöliakie-Gesellschaft auf
            politischer Ebene: Unter dem Motto <strong>„Glutenfrei? Nur wenn du Glück hast."</strong>{' '}
            läuft eine Petition an den Deutschen Bundestag.
          </p>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            Worum geht es? Glutenfreie Lebensmittel sind teuer — erheblich teurer als normale
            Produkte. In anderen europäischen Ländern gibt es Kostenerstattungen oder Zuschüsse
            für Betroffene. In Deutschland nicht. Wer Zöliakie hat, zahlt die Mehrkosten aus
            eigener Tasche — ein Leben lang, ohne Wahl.
          </p>
          <div className="card" style={{ background: 'rgba(231,111,81,0.05)', border: '1.5px solid rgba(231,111,81,0.25)' }}>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '0.75rem', color: 'var(--terracotta)' }}>
              Was die Petition fordert
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
              {[
                'Bessere Kostenerstattung für glutenfreie Lebensmittel durch die Krankenkassen',
                'Verbesserte Kennzeichnungspflicht bei Lebensmitteln — mehr Transparenz, weniger Ratestress',
                'Mehr Forschungsförderung für Zöliakie in Deutschland',
              ].map((punkt, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>
                  <span style={{ color: 'var(--terracotta)', fontWeight: 800, flexShrink: 0 }}>→</span>
                  {punkt}
                </div>
              ))}
            </div>
            <a
              href="https://www.dzg-online.de/aktuelles/mitmachen-unsere-petition-den-bundestag"
              target="_blank" rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ fontSize: '0.875rem', display: 'inline-block' }}
            >
              Zur Petition der DZG →
            </a>
          </div>
        </div>
      </section>

      {/* Was das für uns bedeutet */}
      <section className="section" style={{ background: 'var(--cream-dark)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.75rem' }}>Was das für uns als betroffene Familie bedeutet</h2>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '1rem' }}>
            Keine dieser Entwicklungen macht die glutenfreie Ernährung morgen überflüssig.
            Aber sie zeigen, dass Zöliakie endlich als das behandelt wird was sie ist: eine
            ernstzunehmende Autoimmunerkrankung, nicht eine Modeerscheinung.
          </p>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '1rem' }}>
            Was wir als Familie tun können: informiert bleiben, die Petition unterstützen,
            und — falls ihr selbst oder euer Kind trotz GF-Diät noch Symptome habt — mit dem
            Arzt über die laufenden Studien sprechen. Vielleicht kommt eine Studienteilnahme
            in Frage.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/wissen/zoeliakie-genetik" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
              ← Zöliakie & Genetik
            </Link>
            <Link href="/wissen/was-ist-zoeliakiie" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
              Was ist Zöliakie? →
            </Link>
          </div>
        </div>
      </section>

      {/* Quellen */}
      <section className="section" style={{ paddingTop: '1.5rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h3 style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Quellen</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            {[
              { label: 'Deutsche Zöliakie-Gesellschaft (DZG) – Aktuelles', href: 'https://www.dzg-online.de/aktuelles' },
              { label: 'DZG – Studie ZED 1227', href: 'https://www.dzg-online.de/aktuelles/studienteilnehmer-zur-klinischen-studie-zed-1227-gesucht' },
              { label: 'DZG – Petition an den Bundestag', href: 'https://www.dzg-online.de/aktuelles/mitmachen-unsere-petition-den-bundestag' },
              { label: 'Celiac Disease Foundation – Future Therapies', href: 'https://celiac.org/about-celiac-disease/future-therapies-for-celiac-disease/' },
            ].map(q => (
              <a key={q.href} href={q.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '0.8rem', color: 'var(--green-mid)' }}>
                {q.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
