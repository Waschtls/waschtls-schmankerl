import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kindern Zöliakie erklären – auf Augenhöhe',
  description:
    'Wie ihr eurem Kind erklärt warum es anders essen muss – ohne Angst zu machen, aber ehrlich und klar.',
};

export default function KindernErklaeren() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Kindern erklären
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Kindern Zöliakie erklären</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px' }}>
            Ehrlich, klar, auf Augenhöhe – ohne das Kind zu verunsichern.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>

          <h2>Warum es wichtig ist, ehrlich zu sein</h2>
          <p>
            Viele Eltern wollen ihr Kind schützen und sprechen die Diagnose nur zögerlich an. Das Gegenteil hilft mehr: Kinder, die verstehen, warum sie anders essen, entwickeln ein gesundes Selbstbewusstsein damit. Kinder die es nicht verstehen, fühlen sich ausgeschlossen – und schummeln öfter.
          </p>

          <h2>Erklärungen nach Alter</h2>

          <div className="card" style={{ borderLeft: '4px solid var(--mint)', marginBottom: '1.25rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>👶 2–4 Jahre</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              „Dein Bauch mag kein Brot. Wenn du Brot isst, tut dein Bauch weh. Deshalb essen wir unser besonderes Brot." Kurz, konkret, ohne Angst. Kinder in diesem Alter akzeptieren das überraschend einfach.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '4px solid var(--golden)', marginBottom: '1.25rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>🧒 5–8 Jahre</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              „Dein Körper hat eine besondere Reaktion auf etwas das Gluten heißt – das steckt in normalem Brot und Nudeln. Wenn du das isst, wird dein Bauch krank und kann das Essen nicht richtig verarbeiten. Deshalb essen wir glutenfreie Sachen – die sind genauso lecker, aber dein Körper versteht sie." Kinder in diesem Alter mögen Erklärungen. Zeigt ihnen ruhig das Symbol der durchgestrichenen Ähre.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '4px solid var(--terracotta)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>🧑 9+ Jahre</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Ab diesem Alter können Kinder die Autoimmunreaktion in groben Zügen verstehen. „Dein Immunsystem macht einen Fehler – es denkt, Gluten ist ein Feind und greift deshalb deinen Darm an. Das passiert bei etwa 1 von 100 Menschen. Die einzige Lösung ist glutenfrei essen – dann hört der Angriff auf und dein Darm kann sich erholen." Viele Kinder finden das sogar faszinierend.
            </p>
          </div>

          <h2>Sätze die helfen – für das Kind selbst</h2>
          <p>
            Übt mit eurem Kind kurze, selbstbewusste Antworten für Situationen mit anderen Kindern oder Erwachsenen:
          </p>
          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.5, margin: 0 }}>
              <li>„Ich darf das nicht essen, ich hab Zöliakie."</li>
              <li>„Ich kann das leider nicht essen – hast du was anderes?"</li>
              <li>„Ich bring mir immer mein eigenes Essen mit, das ist okay."</li>
              <li>„Ist das glutenfrei? Ich muss das nämlich immer fragen."</li>
            </ul>
          </div>

          <h2>Was nicht hilft</h2>
          <p>
            „Du darfst das nicht" klingt wie eine Bestrafung. Besser: „Das verträgt dein Körper nicht." Auch Drama erzeugt Angst – wenn Eltern übertrieben reagieren wenn ein Krümel draufgefallen ist, lernt das Kind: Das ist gefährlich. Stattdessen: ruhig bleiben, aufklären, weitermachen.
          </p>

          <hr className="divider" />
          <div className="grid-2">
            <Link href="/wissen/schule-kita" className="card card-link" style={{ borderLeft: '4px solid var(--green-light)' }}>
              <strong>🏫 Schule & Kita</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Lehrer und Erzieherinnen informieren.</p>
            </Link>
            <Link href="/wissen/geburtstage" className="card card-link" style={{ borderLeft: '4px solid var(--golden)' }}>
              <strong>🎂 Geburtstage</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Damit kein Kind leer ausgeht.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
