import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreie Hot Dog Brötchen – Waschtls Schmankerl',
  description:
    'Weiche, luftige Hot Dog Brötchen ohne Gluten – mit Flohsamenschalen und Vollkornreismehl. Perfekt für den Grill.',
};

export default function HotdogBroetchen() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Hot Dog Brötchen
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className="tag">Brot & Hefeteig</span>
            <span className="tag tag-golden">⏱ 2,5 Std.</span>
            <span className="tag">8 Stück</span>
            <span className="tag">Grill</span>
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Hot Dog Brötchen (glutenfrei)</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>
            Weich, leicht, mit Mohn – endlich Hot Dog ohne Kompromiss.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>

          {/* Zeitplan */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '0.65rem',
            marginBottom: '2rem',
          }}>
            {[
              { label: 'Vorbereitung', value: '15 Min.', icon: '🥣' },
              { label: 'Gehzeit', value: '1,5–2 Std.', icon: '⏳' },
              { label: 'Backzeit', value: '17 Min.', icon: '🔥' },
              { label: 'Gesamt', value: 'ca. 2,5 Std.', icon: '⏱' },
            ].map(({ label, value, icon }) => (
              <div key={label} style={{
                padding: '0.875rem 0.75rem',
                background: 'var(--cream-dark)',
                borderRadius: '10px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{icon}</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>{label}</div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--green-deep)' }}>{value}</div>
              </div>
            ))}
          </div>

          <div className="card" style={{ background: 'rgba(233,196,106,0.08)', border: '1.5px solid rgba(233,196,106,0.3)', marginBottom: '2rem' }}>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>
              <strong>Hinweis:</strong> Hamburger Brötchen nutzen denselben Teig –
              nur die Form (rund statt lang) unterscheidet sich.
              Einfach doppelte Menge ansetzen und beide Varianten backen.
            </p>
          </div>

          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--golden)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Zutaten (8 Stück)</h3>

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
                <li>Mohn</li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ marginBottom: '0.75rem' }}>Warum dieses Rezept?</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.2, margin: '0 0 1.25rem' }}>
                <li>Weich wie echte Brötchen</li>
                <li>Halten beim Belegen nicht auseinander</li>
                <li>Einfrierbar – Vorrat anlegen</li>
                <li>Funktioniert auch als Hamburger-Bun</li>
                <li>Kinder nehmen den Unterschied kaum wahr</li>
              </ul>
              <div style={{ padding: '0.875rem 1rem', background: 'var(--cream-dark)', borderRadius: '8px', fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                <strong>Zutaten finden:</strong> Vollkornreismehl und Flohsamenschalen im Reformhaus, dm oder Bioladen. Tapioka- und Kartoffelstärke im Supermarkt.
              </div>
              <div style={{ padding: '0.875rem 1rem', background: 'var(--cream-dark)', borderRadius: '8px', fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                <strong>Pro Brötchen (ca.):</strong> 270 kcal · 43 g KH · 2 g Eiweiß · 9 g Fett
              </div>
            </div>
          </div>

          <h2>Zubereitung</h2>
          <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-mid)', lineHeight: 2.2, marginBottom: '2rem' }}>
            <li>Flohsamenschalen mit dem warmen Wasser verrühren und <strong>5–10 Min. quellen lassen</strong> bis ein festes Gel entsteht. Nicht überspringen – das ist der Kleber.</li>
            <li>Alle trockenen Zutaten in einer großen Schüssel gut vermengen.</li>
            <li>Milch, Ei, Öl und Apfelessig dazugeben, dann das Flohsamengel einarbeiten. Alles ca. 2–3 Min. zu einem gleichmäßigen, leicht klebrigen Teig kneten.</li>
            <li>Teig in <strong>8 gleiche Portionen (je ca. 100 g)</strong> aufteilen und zu Zylindern von ca. 13 cm Länge formen. Auf ein mit Backpapier belegtes Blech legen.</li>
            <li>Mit einem leicht feuchten Tuch abdecken und <strong>1,5–2 Std.</strong> bei Raumtemperatur (24–27°C) gehen lassen, bis das Volumen deutlich zugenommen hat.</li>
            <li>Backofen auf <strong>200°C Ober-/Unterhitze</strong> vorheizen.</li>
            <li>Brötchen mit Eistreiche bestreichen und mit Mohn bestreuen.</li>
            <li><strong>16–17 Min.</strong> backen bis sie goldbraun sind. Auf einem Gitter vollständig abkühlen lassen.</li>
          </ol>

          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>💡 Tipp: Gehzeit ist entscheidend</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Kein Schnellrezept – aber die Geduld lohnt sich. Wer die volle Zeit gehen lässt,
              bekommt luftige Brötchen. Ein Backofen mit eingeschaltetem Licht (ca. 25°C)
              ist ideal. Doppelte Menge ansetzen und die Hälfte einfrieren.
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
            <Link href="/rezepte/hamburger-broetchen" className="card card-link" style={{ borderLeft: '4px solid var(--mint)' }}>
              <strong>🍔 Hamburger Brötchen</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Gleicher Teig, runde Form, Sesam.</p>
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
