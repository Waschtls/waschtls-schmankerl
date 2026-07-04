import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreie Protein-Bagel – Waschtls Schmankerl',
  description: 'Glutenfreie Quark-Bagel mit 22g Eiweiß pro Stück – ohne Hefe, in 30 Minuten fertig. Ideal für die Brotdose.',
};

export default function ProteinBagel() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Protein-Bagel
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className="tag">Brot & Backen</span>
            <span className="tag">Frühstück</span>
            <span className="tag tag-golden">⏱ 30 Min.</span>
            <span className="tag">4 Stück</span>
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Protein-Bagel (glutenfrei)</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>
            Kein Hefe-Warten, kein Kneten – Quark-Teig formen, rein in den Ofen, fertig. 22 g Eiweiß pro Bagel.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>

          <div style={{ padding: '0.75rem 1rem', marginBottom: '1.5rem', background: 'rgba(149,213,178,0.08)', border: '1px solid rgba(149,213,178,0.25)', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--text-mid)' }}>
            💡 <strong>Proteinpulver:</strong> Neutrales Proteinpulver (Whey oder Pflanzlich) ist meist glutenfrei – immer das Etikett der konkreten Marke prüfen. Wer kein Proteinpulver will: einfach 50 g mehr Schär Mix It! nehmen.
          </div>

          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--golden)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Zutaten (4 Stück)</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.5, margin: 0 }}>
                <li>250 g Magerquark</li>
                <li>150 g Schär Mix It! (GF-Allzweckmehl)</li>
                <li>50 g neutrales Proteinpulver (GF)</li>
                <li>8 g Backpulver (GF)</li>
                <li>35 ml Wasser</li>
                <li>etwas Salz</li>
                <li><strong>Zum Bestreichen:</strong></li>
                <li>1 Eigelb</li>
                <li>2 TL Leinsamen</li>
              </ul>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.75rem' }}>Nährwerte pro Bagel</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                {[['245', 'kcal'], ['30g', 'KH'], ['22,7g', 'Eiweiß'], ['3g', 'Fett']].map(([val, label]) => (
                  <div key={label} style={{ textAlign: 'center', padding: '0.5rem', background: 'var(--cream)', borderRadius: '8px' }}>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--green-deep)' }}>{val}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>{label}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', margin: 0 }}>Enthält Milch, Ei. Glutenfrei wenn Schär Mix It! + GF-Proteinpulver.</p>
            </div>
          </div>

          <h2>Zubereitung</h2>
          <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-mid)', lineHeight: 2.2, marginBottom: '2rem' }}>
            <li>Backofen auf 180 °C Ober-/Unterhitze vorheizen. Backblech mit Backpapier belegen.</li>
            <li>Quark, GF-Mehl, Proteinpulver, Backpulver, Wasser und Salz zu einem Teig verkneten – am besten mit den Händen, der Teig ist etwas klebrig.</li>
            <li>Teig in 4 gleich große Stücke aufteilen. Jedes Stück zu einer Rolle formen und zu einem Ring schließen.</li>
            <li>Bagels auf das Backblech legen, mit Eigelb bestreichen und mit Leinsamen bestreuen.</li>
            <li>Ca. 20 Minuten backen bis sie goldbraun sind.</li>
            <li>Vollständig auskühlen lassen – warm sind sie innen noch etwas feucht.</li>
          </ol>

          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>💡 Waschtls Tipp</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Wer keinen Leinsamen mag: Sesam, Mohn oder Kürbiskerne funktionieren genauso.
              Eingefroren bleiben die Bagels bis zu 2 Monate frisch – einzeln einfrieren und morgens
              direkt in den Toaster.
            </p>
          </div>

          <hr className="divider" />
          <div className="grid-2">
            <Link href="/rezepte/quark-gemuese-fladen" className="card card-link" style={{ borderLeft: '4px solid var(--mint)' }}>
              <strong>🫓 Quark-Gemüse-Fladen</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Ähnlicher Teig, herzhaft belegt.</p>
            </Link>
            <Link href="/rezepte/laugenbrezeln-glutenfrei" className="card card-link" style={{ borderLeft: '4px solid var(--terracotta)' }}>
              <strong>🥨 Laugenbrezeln</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Bayerisch, glutenfrei.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
