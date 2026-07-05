import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreie Italienische Focaccia – Waschtls Schmankerl',
  description:
    'Luftige glutenfreie Focaccia mit Knoblauchbutter und Parmesan – mit Caputo Fioreglut. Knusprige Kruste, weiches Inneres, kein Kneten nötig.',
};

export default function ItalienischeFocaccia() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Italienische Focaccia
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className="tag">Brot & Hefeteig</span>
            <span className="tag tag-golden">⏱ 2 Std.</span>
            <span className="tag">18 Stücke</span>
            <span className="tag">Kein Kneten</span>
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Italienische Focaccia (glutenfrei)</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>
            Knusprige Kruste, luftiges Inneres, Knoblauchbutter und Parmesan – wie in Italien.
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
              { label: 'Gehzeit', value: '1–1,5 Std.', icon: '⏳' },
              { label: 'Backzeit', value: '25 Min.', icon: '🔥' },
              { label: 'Gesamt', value: 'ca. 2 Std.', icon: '⏱' },
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

          <div className="card" style={{ background: 'rgba(244,162,97,0.08)', border: '1.5px solid rgba(244,162,97,0.3)', marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--terracotta)', marginBottom: '0.5rem' }}>⚠️ Wichtig: Nur mit Caputo Fioreglut</h4>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>
              Dieses Rezept funktioniert nur mit <strong>Caputo Fioreglut</strong> – das einzige glutenfreie Mehl,
              das die nötige Luftigkeit und Elastizität für echte Focaccia erzeugt. Es enthält
              glutenfreie Weizenstärke und ist für Zöliakiepatienten sicher, aber{' '}
              <strong>nicht für Menschen mit Weizenallergie</strong> geeignet.
              Erhältlich bei Amazon.de, in italienischen Feinkostläden und online.
            </p>
          </div>

          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--golden)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Zutaten (23×33 cm Form)</h3>

              <p style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.5rem' }}>Knoblauchbutter</p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.3, margin: '0 0 1rem' }}>
                <li>40 g Butter (gesalzen)</li>
                <li>4 Knoblauchzehen, fein gehackt <em style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>(nach Wunsch)</em></li>
                <li>40 g Olivenöl (extra vergine)</li>
                <li>2 EL frische Petersilie, gehackt</li>
              </ul>

              <p style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.5rem' }}>Teig</p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.3, margin: '0 0 1rem' }}>
                <li>520 g Caputo Fioreglut</li>
                <li>12 g Instanttrockenhefe (ca. 1,5 Päckchen)</li>
                <li>12,5 g Zucker</li>
                <li>12 g grobes Meersalz</li>
                <li>480 g warmes Wasser (50–55°C)</li>
                <li>42 g Olivenöl (extra vergine)</li>
              </ul>

              <p style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.5rem' }}>Form &amp; Topping</p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.3, margin: 0 }}>
                <li>28 g Olivenöl (für die Form)</li>
                <li>40 g Parmesan, gerieben</li>
                <li>1 TL Fleur de Sel (Flockensalz)</li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ marginBottom: '0.75rem' }}>Warum dieses Rezept?</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.2, margin: '0 0 1.25rem' }}>
                <li>Kein Kneten nötig</li>
                <li>Authentisch luftige Krume</li>
                <li>Knoblauchbutter vor und nach dem Backen</li>
                <li>Reicht für die ganze Familie</li>
                <li>Als Beilage, Snack oder Sandwich-Brot</li>
              </ul>
              <div style={{ padding: '0.875rem 1rem', background: 'var(--cream-dark)', borderRadius: '8px', fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                <strong>Pro Stück (ca.):</strong> 186 kcal · 24 g KH · 3 g Eiweiß · 9 g Fett
              </div>
            </div>
          </div>

          <h2>Zubereitung</h2>

          <h3 style={{ fontSize: '1rem', color: 'var(--green-deep)', marginBottom: '0.5rem' }}>1. Knoblauchbutter</h3>
          <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-mid)', lineHeight: 2.2, marginBottom: '1.5rem' }}>
            <li>Butter in einem Topf bei mittlerer Hitze schmelzen. Knoblauch (nach Wunsch) dazugeben und ca. 1 Min. anschwitzen bis er duftet.</li>
            <li>Olivenöl und Petersilie einrühren. Beiseite stellen.</li>
          </ol>

          <h3 style={{ fontSize: '1rem', color: 'var(--green-deep)', marginBottom: '0.5rem' }}>2. Teig &amp; Gehzeit</h3>
          <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-mid)', lineHeight: 2.2, marginBottom: '1.5rem' }}>
            <li>Caputo Fioreglut, Hefe, Zucker und Salz in einer großen Schüssel (oder Küchenmaschine mit Flachrührer) verquirlen.</li>
            <li>Warmes Wasser und Olivenöl dazugeben, <strong>4 Min. auf mittlerer Stufe</strong> rühren. Der Teig ist sehr klebrig – wie Keksteig. <strong>Kein Mehl nachgeben!</strong></li>
            <li>Eine 23×33 cm Backform mit 28 g Olivenöl einfetten. Teig hineingeben und mit geölten Händen in die Ecken drücken.</li>
            <li>Mit Folie abdecken und <strong>1–1,5 Std.</strong> an einem warmen Ort gehen lassen bis sich das Volumen verdoppelt hat.</li>
          </ol>

          <h3 style={{ fontSize: '1rem', color: 'var(--green-deep)', marginBottom: '0.5rem' }}>3. Backzeit</h3>
          <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-mid)', lineHeight: 2.2, marginBottom: '2rem' }}>
            <li>In den letzten 30 Min. der Gehzeit: Backofen auf <strong>220°C Ober-/Unterhitze</strong> vorheizen.</li>
            <li>Den größten Teil der Knoblauchbutter über den Teig gießen (1–2 EL für später aufbewahren). Mit geölten Fingern tief in den Teig eindrücken – die typischen Focaccia-Dellen entstehen.</li>
            <li>Fleur de Sel und die Hälfte des Parmesans darüber streuen.</li>
            <li><strong>23–26 Min.</strong> backen bis die Oberfläche goldbraun ist und sich die Ränder vom Blech lösen.</li>
            <li>Restliche Knoblauchbutter sofort nach dem Backen aufstreichen, restlichen Parmesan darüber.</li>
            <li>Kurz abkühlen lassen, dann mit einem Brotmesser in Stücke schneiden. Warm servieren.</li>
          </ol>

          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>💡 Tipp: Zwei Mal Knoblauchbutter</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Der Trick ist das zweimalige Auftragen – vor dem Backen zieht die Butter in die Dellen ein,
              nach dem Backen gibt sie dem knusprigen Rand Glanz und Geschmack. Nicht weglassen!
              Am besten am Tag des Backens servieren – frisch ist sie am besten.
            </p>
          </div>

          <div className="affiliate-box">
            <span className="affiliate-label">Anzeige</span>
            <h4>🌾 Caputo Fioreglut</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Das einzige Mehl das hier funktioniert – bei Amazon.de und italienischen Feinkostläden erhältlich.
              Ca. 5–7 € pro kg.
            </p>
            <a
              href="https://www.amazon.de/s?k=caputo+fioreglut&tag=waschtl-21"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn btn-golden"
              style={{ fontSize: '0.875rem' }}
            >
              Auf Amazon ansehen →
            </a>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginTop: '0.75rem', marginBottom: 0 }}>
              Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.
            </p>
          </div>

          <hr className="divider" />
          <div className="grid-2">
            <Link href="/rezepte/hotdog-broetchen" className="card card-link" style={{ borderLeft: '4px solid var(--mint)' }}>
              <strong>🌭 Hot Dog Brötchen</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Weich, mit Mohn – einfrierbar.</p>
            </Link>
            <Link href="/rezepte/pizza-glutenfrei" className="card card-link" style={{ borderLeft: '4px solid var(--terracotta)' }}>
              <strong>🍕 Glutenfreie Pizza</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Der Freitagsabend-Klassiker.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
