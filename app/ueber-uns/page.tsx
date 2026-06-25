import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Über uns – Waschtls Schmankerl',
  description:
    'Eine Augsburger Familie mit Zöliakie – wie aus einer bunten Familienküche ein glutenfreier Alltag wurde, der trotzdem fein schmeckt.',
};

export default function UeberUns() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> › Über uns
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Über uns</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>Kein Ratgeber. Eine Familie.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>

          <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1.5rem' }}>👨‍👦</div>

          <h2>Hallo, ich bin Waschtl – aus Augsburg</h2>
          <p>
            Ich bin Vater, Augsburger und Fan von gutem Essen – egal ob klassisch bayerisch oder international.
            Bei uns zuhause gab es beides: die Kasnockn und die Leberknödelsuppe der Oma, aber genauso oft
            Schnitzel mit Kartoffelbrei, Fleischküchler, Spaghetti Bolognese, Pizza vom Blech oder ein würziges Chili.
            Eine echte Familienküche eben – nicht auf ein Einziges festgelegt, aber immer mit Herzblut gekocht.
          </p>
          <p>
            Dann kam die Diagnose: Mein Sohn hat Zöliakie. Er war noch klein, als wir es herausfanden –
            und mit der Diagnose kam das große Umdenken. Kein Weizen mehr. Kein normaler Knödel.
            Keine Brezel vom Bäcker. Kein Schnitzel ohne Nachfragen.
            Für eine Familie die so gerne und so vielfältig kocht war das erstmal ein echter Schock.
          </p>
          <p>
            Was danach kam, war gleichzeitig mühsam und überraschend schön: Wir haben nicht einfach auf
            Genuss verzichtet – wir haben ihn neu entdeckt. Rezept für Rezept, Zutat für Zutat.
            Und wir haben festgestellt, dass glutenfrei kochen nicht bedeutet auf Geschmack zu verzichten.
            Es bedeutet nur, anders zu denken. Und manchmal sogar feiner zu kochen.
          </p>

          <hr className="divider" />

          <h2>Warum „Waschtl" – und warum „Schmankerl"?</h2>
          <p>
            Waschtl ist mein Spitzname – so wie man das halt hat in Augsburg. Ein Schmankerl ist im
            Bayerischen eine besondere Gaumenfreude, etwas Feines das man mit Herzblut kocht und gerne teilt.
            Der Name war eigentlich für einen klassischen Foodblog gedacht. Die Diagnose hat den Blog
            zu etwas anderem gemacht: einem Ort für echte Schmankerl ohne Gluten.
            Ob das jetzt Kässpatzen sind oder ein veganes Chili – Hauptsache es schmeckt fein.
          </p>
          <p>
            Mittlerweile isst die ganze Familie glutenfrei. Nicht weil wir müssen – sondern weil wir
            gemerkt haben, dass es einfacher und schöner ist wenn alle das Gleiche essen.
            Keine zwei Töpfe. Kein Aufpassen am Tisch. Einfach Essen.
          </p>

          <hr className="divider" />

          <h2>Was ihr hier findet</h2>
          <div className="grid-2" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            {[
              { icon: '🍳', title: 'Rezepte', desc: 'Die bei uns zuhause wirklich auf den Tisch kommen – von bayerisch bis international, alle glutenfrei.', href: '/rezepte' },
              { icon: '📅', title: 'Speiseplan', desc: 'Personalisierter Wochenplan nach euren Präferenzen – schnell, kleinkindtauglich, als Bild speicherbar.', href: '/wochenplan' },
              { icon: '📚', title: 'Wissen', desc: 'Was Eltern nach der Diagnose wirklich brauchen – von Grundlagen bis Schule & Kita.', href: '/wissen' },
              { icon: '🛒', title: 'Produkte', desc: 'Was wir selbst verwenden – ohne Fake-Empfehlungen, mit ehrlichem Hinweis auf Affiliate-Links.', href: '/produkte' },
            ].map(({ icon, title, desc, href }) => (
              <Link key={href} href={href} className="card card-link">
                <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{icon}</div>
                <h4 style={{ marginBottom: '0.25rem' }}>{title}</h4>
                <p style={{ margin: 0, fontSize: '0.875rem' }}>{desc}</p>
              </Link>
            ))}
          </div>

          {/* Affiliate-Transparenz */}
          <div className="card" style={{ background: 'rgba(149,213,178,0.08)', border: '1.5px solid rgba(149,213,178,0.3)', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', color: 'var(--green-deep)' }}>
              🔗 Transparenz: Affiliate-Links
            </h3>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>
              Einige Produktlinks auf dieser Website führen zu Amazon und sind Affiliate-Links – erkennbar am Hinweis „Anzeige".
              Wenn ihr über diese Links einkauft, erhalten wir eine kleine Provision. Für euch entstehen dabei keine Mehrkosten.
              Die Einnahmen helfen uns, die Website, das Hosting und den Zeitaufwand für neue Rezepte und Artikel zu finanzieren.
              Wir empfehlen ausschließlich Produkte die wir selbst im Einsatz haben und für gut befunden haben.
            </p>
          </div>

          <div className="card" style={{ background: 'var(--cream-dark)', textAlign: 'center' }}>
            <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--green-deep)', margin: '0 0 1rem' }}>
              „Glutenfrei kochen bedeutet nicht auf Genuss verzichten –
              es bedeutet, die Küche die man liebt neu zu entdecken."
            </p>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-light)' }}>Waschtl, Waschtls Schmankerl – Augsburg</p>
          </div>
        </div>
      </section>
    </>
  );
}
