import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Über uns – Waschtls Schmankerl',
  description:
    'Eine Augsburger Familie, ein Kind mit Zöliakie – wie wir gelernt haben das glutenfreie Leben in Küche, Kita, Schule und Urlaub zu meistern.',
};

export default function UeberUns() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> › Über uns
          </div>
          <span style={{
            display: 'inline-block', marginBottom: '0.75rem',
            fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.07em',
            textTransform: 'uppercase', color: 'var(--mint)',
          }}>
            Kein Ratgeber. Eine Familie.
          </span>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.75rem' }}>Über uns</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.8, margin: 0 }}>
            Wie aus einer ganz normalen Familienküche ein glutenfreier Alltag wurde –
            der trotzdem fein schmeckt, Schule funktioniert und Urlaub möglich ist.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '680px' }}>

          <h2>Hallo, ich bin Waschtl</h2>
          <p>
            Ich bin Vater aus Augsburg und Fan von gutem Essen – egal ob klassisch bayerisch oder
            international. Bei uns zuhause gab es die Armen Ritter die die Oma uns Kindern immer
            gemacht hat, Schnitzel mit Kartoffelbrei, Fleischküchler, Spaghetti Bolognese, Pizza
            vom Blech. Eine echte Familienküche – bunt, unkompliziert, immer mit Herzblut gekocht.
          </p>
          <p>
            Dann kam die Diagnose: Mein Sohn hat Zöliakie. Er war noch klein als wir es herausfanden –
            und mit der Diagnose kam das große Umdenken. Kein Weizen mehr. Kein normaler Knödel.
            Keine Brezel vom Bäcker. Kein Schnitzel ohne Nachfragen.
          </p>
          <p>
            Was danach kam war gleichzeitig mühsam und überraschend schön: Wir haben nicht einfach
            auf Genuss verzichtet – wir haben ihn neu entdeckt. Rezept für Rezept, Zutat für Zutat.
            Und wir haben festgestellt, dass glutenfrei kochen nicht bedeutet auf Geschmack zu
            verzichten. Es bedeutet nur, anders zu denken.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '2rem 0' }} />

          <h2>Warum diese Website mehr ist als ein Rezeptblog</h2>
          <p>
            Am Anfang dachten wir: wir brauchen neue Rezepte. Stimmt – aber das war nur ein
            Bruchteil des Lebens das sich verändert hat.
          </p>
          <p>
            Wir mussten verstehen wie Kreuzkontamination funktioniert und warum „die nehmen einfach
            kein Mehl" nicht reicht. Wir mussten der Kita erklären was Zöliakie ist –
            und zwar so, dass es beim Geburtstagskuchen der anderen Kinder auch wirklich umgesetzt
            wird. Wir mussten lernen wie man im Restaurant fragt ohne jeden Kellner zu überfordern.
            Und wir mussten herausfinden wie Urlaub mit einem Zöliakie-Kind geht, ohne ständig
            Angst zu haben.
          </p>
          <p>
            All das steht hier – nicht als Ratgeber von Experten, sondern als ehrliche
            Erfahrungssammlung einer Familie die es selbst täglich lebt.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0.85rem',
            margin: '1.75rem 0',
          }}>
            {([
              { icon: '🍳', titel: 'Küche', text: 'Rezepte, Mehlkunde, Kreuzverunreinigung vermeiden', href: '/rezepte' },
              { icon: '🏫', titel: 'Kita & Schule', text: 'Musterbrief, Checkliste, Geburtstagstipps', href: '/wissen/schule-kita' },
              { icon: '🍽', titel: 'Restaurant', text: 'Wie wir fragen, worauf wir achten', href: '/unterwegs' },
              { icon: '✈️', titel: 'Reisen', text: 'Packliste, Hotel-Mail, was wir einpacken', href: '/unterwegs' },
              { icon: '🆘', titel: 'Erstdiagnose', text: 'Was sofort zu tun ist – Schritt für Schritt', href: '/wissen/erstdiagnose' },
              { icon: '🧺', titel: 'Vorratskiste', text: 'Welche Produkte wir wirklich empfehlen', href: '/vorratskiste' },
            ] as { icon: string; titel: string; text: string; href: string }[]).map(item => (
              <Link key={item.titel} href={item.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '1rem 1.1rem',
                  background: 'var(--cream-dark)',
                  border: '1.5px solid var(--border)',
                  borderRadius: '10px', height: '100%',
                }}>
                  <div style={{ fontSize: '1.3rem', marginBottom: '0.35rem' }}>{item.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--green-deep)', marginBottom: '0.25rem' }}>
                    {item.titel}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-mid)', lineHeight: 1.55 }}>
                    {item.text}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '2rem 0' }} />

          <h2>Warum „Waschtl" – und warum „Schmankerl"?</h2>
          <p>
            Waschtl ist mein Spitzname – den hab ich von meinen Kumpels bekommen. Ein Schmankerl
            ist im Bayerischen eine besondere Gaumenfreude, etwas Feines das man mit Herzblut kocht
            und gerne teilt. Der Name war eigentlich für einen klassischen Foodblog gedacht.
            Die Diagnose hat den Blog zu etwas anderem gemacht.
          </p>
          <p>
            Mittlerweile isst die ganze Familie glutenfrei. Nicht weil wir müssen – sondern weil
            wir gemerkt haben, dass es einfacher und schöner ist wenn alle das Gleiche essen.
            Keine zwei Töpfe. Kein Aufpassen am Tisch. Einfach Essen.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '2rem 0' }} />

          <blockquote style={{
            margin: '0 0 2rem',
            padding: '1.25rem 1.5rem',
            borderLeft: '4px solid var(--golden)',
            background: 'var(--cream-dark)',
            borderRadius: '0 10px 10px 0',
            fontSize: '1rem',
            fontStyle: 'italic',
            color: 'var(--text-dark)',
            lineHeight: 1.8,
          }}>
            „Glutenfrei kochen bedeutet nicht auf Genuss verzichten – es bedeutet, die Küche die
            man liebt neu zu entdecken."
          </blockquote>

          <div className="card" style={{ background: 'var(--green-deep)', border: 'none', textAlign: 'center' }}>
            <p style={{ margin: '0 0 0.75rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
              Rezepte, Alltag und Neues aus der glutenfreien Familienküche – auch auf Instagram.
            </p>
            <a
              href="https://www.instagram.com/waschtls__schmankerl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-golden"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
              @waschtls__schmankerl folgen
            </a>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '2rem 0' }} />

          <div className="card" style={{ background: 'var(--cream-dark)' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--green-deep)' }}>
              🔗 Transparenz: Affiliate-Links
            </h3>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.75, margin: 0, color: 'var(--text-mid)' }}>
              Einige Produktlinks auf dieser Website führen zu Amazon und sind Affiliate-Links –
              erkennbar am Hinweis „Anzeige". Wenn ihr über diese Links einkauft, erhalten wir eine
              kleine Provision. Für euch entstehen dabei keine Mehrkosten. Wir empfehlen
              ausschließlich Produkte die wir selbst im Einsatz haben.
              Produktnennungen ohne „Anzeige"-Kennzeichnung (z.&nbsp;B. Mehlmarken in Rezepten)
              sind redaktionelle Empfehlungen ohne Gegenleistung.
            </p>
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link href="/kontakt" className="btn btn-golden">Schreib uns →</Link>
          </div>

        </div>
      </section>
    </>
  );
}
