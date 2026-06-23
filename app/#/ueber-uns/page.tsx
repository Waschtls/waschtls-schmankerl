import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Über uns – Waschtls Schmankerl',
  description:
    'Warum wir diesen Blog betreiben – die Geschichte von Sebastian und seinem Sohn mit Zöliakie.',
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

          <h2>Hallo, ich bin Sebastian</h2>
          <p>
            Ich bin Vater aus Augsburg – und mein Sohn hat Zöliakie. Die Diagnose kam, als er noch klein war. Was danach folgte, war eine Flut aus Informationen, widersprüchlichen Ratschlägen und dem Gefühl, allein damit zu sein.
          </p>
          <p>
            Was mir damals gefehlt hat: ein Ort wo jemand ehrlich erzählt, was im echten Alltag funktioniert. Nicht der perfekte Ernährungsratgeber. Nicht das sterile Medizinportal. Sondern echte Tipps von jemandem, der denselben Weg gegangen ist.
          </p>
          <p>
            Genau das ist Waschtls Schmankerl geworden.
          </p>

          <hr className="divider" />

          <h2>Was „Schmankerl" bedeutet</h2>
          <p>
            In Bayern ist ein Schmankerl eine besondere Leckerei – etwas Feines, das man mit Freude isst und teilt. Der Name war ursprünglich für einen Foodblog gedacht. Dann kam die Diagnose und der Blog wurde etwas anderes: ein Ort für Schmankerl ohne Gluten.
          </p>
          <p>
            Weil es das geben soll: Essen das schmeckt, Alltag der funktioniert, und eine Familie die trotz Zöliakie genießt.
          </p>

          <hr className="divider" />

          <h2>Was ihr hier findet</h2>
          <div className="grid-2" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            {[
              { icon: '🍳', title: 'Rezepte', desc: 'Die bei uns zuhause wirklich auf den Tisch kommen.', href: '/rezepte' },
              { icon: '📚', title: 'Wissen', desc: 'Was Eltern nach der Diagnose brauchen.', href: '/wissen' },
              { icon: '🛒', title: 'Produkte', desc: 'Was wir selbst verwenden – ohne Fake-Empfehlungen.', href: '/produkte' },
              { icon: '📬', title: 'Newsletter', desc: 'Neue Rezepte und Tipps direkt ins Postfach.', href: '/#newsletter' },
            ].map(({ icon, title, desc, href }) => (
              <Link key={href} href={href} className="card card-link">
                <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{icon}</div>
                <h4 style={{ marginBottom: '0.25rem' }}>{title}</h4>
                <p style={{ margin: 0, fontSize: '0.875rem' }}>{desc}</p>
              </Link>
            ))}
          </div>

          <div className="card" style={{ background: 'var(--cream-dark)', textAlign: 'center' }}>
            <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--green-deep)', margin: '0 0 1rem' }}>
              „Glutenfrei leben bedeutet nicht auf Genuss verzichten – es bedeutet, ihn neu zu entdecken."
            </p>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-light)' }}>Sebastian, Waschtls Schmankerl</p>
          </div>
        </div>
      </section>
    </>
  );
}
