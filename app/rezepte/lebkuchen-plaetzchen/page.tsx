import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreie Lebkuchen-Plätzchen – Waschtls Schmankerl',
  description:
    'Weiche, würzige Lebkuchen-Plätzchen zum Ausstechen – glutenfrei mit Schär Mix It!. Perfekt für die Weihnachtsbäckerei mit Kindern.',
};

export default function LebkuchenPlaetzchen() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Lebkuchen-Plätzchen
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className="tag">Backen</span>
            <span className="tag tag-golden">⏱ 4 Std.</span>
            <span className="tag">ca. 24 Stück</span>
            <span className="tag">Weihnachten</span>
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Lebkuchen-Plätzchen (glutenfrei)</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>
            Würzig, weich, hält beim Ausstechen perfekt die Form – ideal zum Verzieren mit Kindern.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>

          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--golden)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Zutaten (ca. 24 Stück)</h3>

              <p style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.5rem' }}>Trockene Zutaten</p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.3, margin: '0 0 1rem' }}>
                <li>420 g Schär Mix It! Universal</li>
                <li>2 TL Ingwer, gemahlen</li>
                <li>1 TL Zimt, gemahlen</li>
                <li>½ TL Nelken, gemahlen</li>
                <li>½ TL Muskatnuss, gemahlen</li>
                <li>1 TL feines Meersalz</li>
                <li>½ TL Backpulver</li>
              </ul>

              <p style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.5rem' }}>Feuchte Zutaten</p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.3, margin: '0 0 1rem' }}>
                <li>110 g Butter (zimmerwarm, ungesalzen)</li>
                <li>150 g brauner Zucker</li>
                <li>170 g Zuckerrübensirup</li>
                <li>1 Ei (L)</li>
                <li>2 TL Vanilleextrakt</li>
              </ul>

              <p style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.5rem' }}>Zum Verzieren</p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.3, margin: 0 }}>
                <li>Royal Icing (Puderzucker + Eiweiß + Zitronensaft)</li>
                <li>Puderzucker zum Ausrollen</li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ marginBottom: '0.75rem' }}>Warum dieses Rezept?</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.2, margin: '0 0 1.5rem' }}>
                <li>Hält beim Backen exakt die Form</li>
                <li>Weich und würzig – echter Lebkuchen-Geschmack</li>
                <li>Kinderleicht auszustechen und zu verzieren</li>
                <li>Teig 3 Tage im Kühlschrank haltbar</li>
                <li>Fertige Plätzchen bis 1 Woche in der Dose</li>
              </ul>
              <div style={{ padding: '0.875rem 1rem', background: 'rgba(233,196,106,0.1)', border: '1px solid rgba(233,196,106,0.3)', borderRadius: '8px', fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                <strong>⚠️ Kühlzeit:</strong> Der Teig braucht mindestens 3 Std. im Kühlschrank – am besten abends ansetzen, am nächsten Tag ausstechen.
              </div>
            </div>
          </div>

          <h2>Zubereitung</h2>
          <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-mid)', lineHeight: 2.2, marginBottom: '2rem' }}>
            <li>Mehl, Gewürze, Salz und Backpulver in einer Schüssel verquirlen und beiseite stellen.</li>
            <li>Butter und braunen Zucker mit dem Handmixer <strong>2–3 Min. cremig schlagen</strong>.</li>
            <li>Zuckerrübensirup, Ei und Vanilleextrakt dazugeben, weitere 2 Min. rühren. Die Masse sieht anfangs geronnen aus – das ist normal.</li>
            <li>Mehlmischung portionsweise einrühren bis kein Mehl mehr zu sehen ist.</li>
            <li>Teig auf Backpapier zu einer flachen Scheibe formen, einwickeln und <strong>mindestens 3 Std.</strong> (oder über Nacht) im Kühlschrank kühlen.</li>
            <li>Backofen auf <strong>175°C Ober-/Unterhitze</strong> vorheizen, zwei Bleche mit Backpapier belegen.</li>
            <li>Arbeitsfläche und Nudelholz mit <strong>Puderzucker</strong> (kein Mehl) bestäuben, Teig ca. 5–6 mm dick ausrollen.</li>
            <li>Formen ausstechen, auf die Bleche legen (2–3 cm Abstand). Restlichen Teig im Kühlschrank lassen.</li>
            <li><strong>9–11 Min.</strong> backen bis die Mitte nicht mehr glänzt. Nicht zu lange – sie werden beim Abkühlen noch fester.</li>
            <li>5 Min. auf dem Blech abkühlen lassen, dann auf ein Gitter umsetzen. <strong>Erst wenn vollständig ausgekühlt</strong> verzieren.</li>
          </ol>

          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>💡 Tipp: Puderzucker statt Mehl zum Ausrollen</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Puderzucker verhindert Ankleben ohne den Teig zu trocken zu machen – und gibt den Plätzchen
              eine zarte Süße von außen. Klingt ungewohnt, macht aber wirklich einen Unterschied.
              Royal Icing trocknet hart und ist ideal für Transport und Verschenken.
            </p>
          </div>

          <div className="card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--green-mid)' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>🎄 Zuckerrübensirup vs. Melasse</h4>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>
              Zuckerrübensirup (dm, Aldi, Rewe) gibt den typischen süddeutschen Lebkuchen-Geschmack
              und ist leichter zu bekommen. Wer einen intensiveren, dunkleren Geschmack möchte,
              nimmt Melasse aus dem Reformhaus – funktioniert genauso.
            </p>
          </div>

          <div className="affiliate-box">
            <span className="affiliate-label">Anzeige</span>
            <h4>🌾 Schär Mix It! Universal</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Das Mehl für dieses Rezept – enthält bereits Xanthan, kein Extra nötig.
              Bei dm, Rewe und online erhältlich.
            </p>
            <a href="/vorratskiste" className="btn btn-golden" style={{ fontSize: '0.875rem' }}>
              Unsere Mehl-Empfehlungen →
            </a>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginTop: '0.75rem', marginBottom: 0 }}>
              Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.
            </p>
          </div>

          <hr className="divider" />
          <div className="grid-2">
            <Link href="/rezepte/bananenbrot-nutella" className="card card-link" style={{ borderLeft: '4px solid var(--mint)' }}>
              <strong>🍌 Bananenbrot mit Nutella</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Saftiger Kuchen, einfrierbar.</p>
            </Link>
            <Link href="/rezepte/brownies-schokolade" className="card card-link" style={{ borderLeft: '4px solid var(--terracotta)' }}>
              <strong>🍫 Brownies</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Der Kindergeburtstags-Klassiker.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
