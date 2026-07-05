import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreie Hamburger Brötchen – Waschtls Schmankerl',
  description:
    'Weiche, goldbraune Hamburger Brötchen ohne Gluten – mit Flohsamenschalen und Vollkornreismehl. Mit Sesam, einfrierbar.',
};

export default function HamburgerBroetchen() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Hamburger Brötchen
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className="tag">Brot & Hefeteig</span>
            <span className="tag tag-golden">⏱ 3 Std.</span>
            <span className="tag">6 Stück</span>
            <span className="tag">Grill</span>
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Hamburger Brötchen (glutenfrei)</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>
            Weich, rund, mit Sesam – der Burger kann kommen.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>

          <div className="card" style={{ background: 'rgba(233,196,106,0.08)', border: '1.5px solid rgba(233,196,106,0.3)', marginBottom: '2rem' }}>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>
              <strong>Hinweis:</strong> Hot Dog Brötchen nutzen denselben Teig –
              nur die Form (Zylinder statt Scheibe) und der Belag (Mohn statt Sesam) unterscheiden sich.
              Einfach doppelte Menge ansetzen und beide variieren.
            </p>
          </div>

          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--golden)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Zutaten (6 Stück)</h3>

              <p style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.5rem' }}>Psyllium-Gel (zuerst)</p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.3, margin: '0 0 1rem' }}>
                <li>15 g ganze Flohsamenschalen</li>
                <li>160 g warmes Wasser (ca. 40°C)</li>
              </ul>

              <p style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.5rem' }}>Trockene Zutaten</p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.3, margin: '0 0 1rem' }}>
                <li>160 g Vollkornreismehl</li>
                <li>115 g Tapiokastärke</li>
                <li>75 g Kartoffelstärke</li>
                <li>50 g Zucker</li>
                <li>8 g grobes Meersalz</li>
                <li>7 g Instanttrockenhefe (1 Päckchen)</li>
                <li>6 g Xanthan</li>
                <li>8 g Backpulver</li>
              </ul>

              <p style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.5rem' }}>Feuchte Zutaten</p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.3, margin: '0 0 1rem' }}>
                <li>160 g warme Vollmilch (40–45°C)</li>
                <li>1 Ei (L)</li>
                <li>57 g Avocadoöl (oder neutrales Pflanzenöl)</li>
                <li>5 g Apfelessig</li>
              </ul>

              <p style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.5rem' }}>Topping</p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.3, margin: 0 }}>
                <li>1 Ei, verquirlt (Eistreiche)</li>
                <li>Sesam</li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ marginBottom: '0.75rem' }}>Warum dieses Rezept?</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.2, margin: '0 0 1.5rem' }}>
                <li>Weich und hält beim Belegen</li>
                <li>Einfrierbar – Grill-Vorrat anlegen</li>
                <li>Gleicher Teig wie die Hot Dog Brötchen</li>
                <li>Kinder mögen sie – auch ohne Burger</li>
                <li>Keine Fertigbrötchen mehr nötig</li>
              </ul>
              <div style={{ padding: '0.875rem 1rem', background: 'var(--cream-dark)', borderRadius: '8px', fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                <strong>Zutaten finden:</strong> Vollkornreismehl und Flohsamenschalen im Reformhaus, dm oder Bioladen. Tapioka- und Kartoffelstärke im Supermarkt.
              </div>
            </div>
          </div>

          <h2>Zubereitung</h2>
          <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-mid)', lineHeight: 2.2, marginBottom: '2rem' }}>
            <li>Flohsamenschalen mit dem warmen Wasser verrühren und <strong>5–10 Min. quellen lassen</strong> bis ein festes Gel entsteht.</li>
            <li>Alle trockenen Zutaten in einer großen Schüssel gut vermengen.</li>
            <li>Milch, Ei, Öl und Apfelessig dazugeben, dann das Flohsamengel einarbeiten. Alles ca. 2–3 Min. zu einem gleichmäßigen, leicht klebrigen Teig kneten.</li>
            <li>Teig in <strong>6 gleiche Portionen (je ca. 140 g)</strong> aufteilen, zu runden Scheiben von ca. 2,5 cm Höhe formen und auf ein mit Backpapier belegtes Blech legen.</li>
            <li>Mit einem leicht feuchten Tuch abdecken und <strong>1,5–2 Std.</strong> bei Raumtemperatur (24–27°C) gehen lassen.</li>
            <li>Backofen auf <strong>200°C Ober-/Unterhitze</strong> vorheizen.</li>
            <li>Brötchen mit Eistreiche bestreichen und mit Sesam bestreuen.</li>
            <li><strong>16–17 Min.</strong> backen bis sie goldbraun sind. Auf einem Gitter vollständig abkühlen lassen.</li>
          </ol>

          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>💡 Tipp: Einfrieren und aufbacken</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Komplett abgekühlt einfrieren. Zum Aufbacken 10 Min. bei 180°C Ober-/Unterhitze –
              schmecken wie frisch. Ideal um immer einen Vorrat für spontane Grillabende zu haben.
            </p>
          </div>

          <div className="affiliate-box">
            <span className="affiliate-label">Anzeige</span>
            <h4>🌾 Vollkornreismehl &amp; Flohsamenschalen</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Für dieses Rezept braucht ihr braunes Reismehl und ganze Flohsamenschalen –
              beides zertifiziert glutenfrei kaufen.
            </p>
            <a href="/vorratskiste" className="btn btn-golden" style={{ fontSize: '0.875rem' }}>
              Unsere Empfehlungen →
            </a>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginTop: '0.75rem', marginBottom: 0 }}>
              Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.
            </p>
          </div>

          <hr className="divider" />
          <div className="grid-2">
            <Link href="/rezepte/hotdog-broetchen" className="card card-link" style={{ borderLeft: '4px solid var(--mint)' }}>
              <strong>🌭 Hot Dog Brötchen</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Gleicher Teig, längliche Form, Mohn.</p>
            </Link>
            <Link href="/rezepte/italienische-focaccia" className="card card-link" style={{ borderLeft: '4px solid var(--terracotta)' }}>
              <strong>🫓 Italienische Focaccia</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Mit Knoblauchbutter und Parmesan.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
