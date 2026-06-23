import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Waschtl's Schmankerl – Glutenfrei & aus Augsburg",
  description:
    'Glutenfreie Rezepte und ehrliche Alltagstipps von einer Augsburger Familie mit Zöliakie. Bayerisch-schwäbisch, bodenständig, lecker.',
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: `linear-gradient(135deg, var(--green-deep) 0%, var(--green-mid) 100%)`,
        color: 'var(--white)',
        padding: '5rem 0 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Zirbelnuss-Dekoration */}
        <div style={{
          position: 'absolute',
          right: '-2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '12rem',
          opacity: 0.04,
          pointerEvents: 'none',
          userSelect: 'none',
        }}>
          🌲
        </div>

        <div className="container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: '640px' }}>
              <div style={{ marginBottom: '1rem' }}>
                <span className="tag tag-golden">🌲 Aus Augsburg. Glutenfrei. Aus dem Herzen.</span>
              </div>
              <h1 style={{ color: 'var(--golden)', marginBottom: '1.5rem' }}>
                Kochen mit Herz –<br />ohne Gluten, ohne Kompromisse
              </h1>
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.88)',
                marginBottom: '1rem',
                lineHeight: 1.8,
              }}>
                Unser Sohn hat Zöliakie. Was uns dabei geholfen hat – ehrlich, praktisch, aus dem echten Augsburger Familienalltag – das teilen wir hier. Kein Hochglanz-Ratgeber, kein Ernährungsdogma. Nur was wirklich funktioniert.
              </p>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.65)',
                marginBottom: '2rem',
              }}>
                Rezepte die Kinder essen wollen. Tipps die den Alltag leichter machen. Empfehlungen die wir selbst vertrauen.
              </p>
              <Link href="/rezepte" className="btn btn-golden" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                Zu den Rezepten →
              </Link>
          </div>
        </div>
      </section>

      {/* Persönliche Note */}
      <section className="section-sm" style={{ background: 'var(--cream-dark)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{
              fontSize: '3.5rem',
              background: 'var(--green-deep)',
              borderRadius: '12px',
              width: '72px',
              height: '72px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              🌲
            </div>
            <div style={{ flex: 1, minWidth: '260px' }}>
              <h2 style={{ marginBottom: '0.75rem' }}>
                A Schmankerl ist was Bsonderes –<br />
                <span style={{ color: 'var(--green-mid)' }}>auch ohne Gluten.</span>
              </h2>
              <p style={{ marginBottom: '0.5rem' }}>
                „Schmankerl" – das kennt man in Bayerisch-Schwaben als etwas Feines, Besonderes. Wie die Zirbelnuss auf dem Augsburger Wappen: klein, aber unverwechselbar.
              </p>
              <p style={{ margin: 0 }}>
                Genau das wollen wir sein. Kein großes Portal, kein Ernährungsmissionar – sondern eine Familie aus Augsburg, die teilt was sie selbst erlebt hat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Einzige Kachel */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Wo fange ich an?</h2>
          <p style={{ marginBottom: '1.75rem', color: 'var(--text-mid)' }}>
            Frisch diagnostiziert oder schon länger dabei – hier ist der beste Einstieg:
          </p>
          <Link href="/wissen/was-ist-zoeliakiie" className="card card-link" style={{
            borderLeft: '6px solid var(--golden)',
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
          }}>
            <div style={{ fontSize: '3rem', flexShrink: 0 }}>🔬</div>
            <div>
              <h3 style={{ marginBottom: '0.4rem' }}>Was ist Zöliakie? – Der beste Startpunkt</h3>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                Verstehe was im Körper passiert, warum glutenfrei so wichtig ist – und was das im Alltag wirklich bedeutet. Einfach, ehrlich, ohne Fachchinesisch.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Newsletter – TODO: implementieren sobald Agent für automatisches Schreiben + Versand steht */}
    </>
  );
}
