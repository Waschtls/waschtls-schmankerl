import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apfel-Zimt Baked Oats (glutenfrei) – Waschtls Schmankerl',
  description: 'Gebackene Haferflocken mit Apfel und Zimt – glutenfreies Frühstück für eine große Portion, 44g Eiweiß, in 40 Minuten fertig.',
};

export default function ApfelZimtBakedOats() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Apfel-Zimt Baked Oats
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className="tag">Frühstück</span>
            <span className="tag">ohne Spezialmehl</span>
            <span className="tag tag-golden">⏱ 40 Min.</span>
            <span className="tag">1 große Portion</span>
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Apfel-Zimt Baked Oats</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>
            Warmes Frühstück wie ein Mini-Crumble – 44 g Eiweiß, glutenfrei, macht wirklich satt.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>

          <div style={{ padding: '0.75rem 1rem', marginBottom: '1.5rem', background: 'rgba(231,111,81,0.08)', border: '1px solid rgba(231,111,81,0.2)', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--text-mid)' }}>
            ⚠️ <strong>Wichtig bei Haferflocken:</strong> Normale Haferflocken enthalten Kreuzverunreinigungen mit Gluten.
            Nur <strong>zertifiziert glutenfreie Haferflocken</strong> verwenden (z.B. Schär, Purer). Manche Menschen mit Zöliakie
            vertragen auch GF-Hafer nicht – bei Unsicherheit mit dem Arzt besprechen.
          </div>

          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--golden)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Zutaten (1 große Portion)</h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-mid)', lineHeight: 2.5, margin: 0 }}>
                <li>250 g Magerquark</li>
                <li>1 Ei</li>
                <li>40 g GF-Haferflocken (zertifiziert)</li>
                <li>85 ml Mandelmilch (ungesüßt)</li>
                <li>Zimt nach Geschmack</li>
                <li>Süße nach Wahl (Erythrit, Honig, …)</li>
                <li>100 g Apfel (gewürfelt)</li>
                <li><strong>Crumble-Topping:</strong></li>
                <li>15 g Butter (zimmerwarm)</li>
                <li>5 g GF-Haferflocken</li>
                <li>Zimt + 10 g Erythrit</li>
              </ul>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.75rem' }}>Nährwerte gesamt</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                {[['544', 'kcal'], ['53,4g', 'KH'], ['44,3g', 'Eiweiß'], ['14,4g', 'Fett']].map(([val, label]) => (
                  <div key={label} style={{ textAlign: 'center', padding: '0.5rem', background: 'var(--cream)', borderRadius: '8px' }}>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--green-deep)' }}>{val}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>{label}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', margin: 0 }}>Enthält Milch, Ei. Nur mit GF-zertifizierten Haferflocken glutenfrei.</p>
            </div>
          </div>

          <h2>Zubereitung</h2>
          <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-mid)', lineHeight: 2.2, marginBottom: '2rem' }}>
            <li>Backofen auf 200 °C Ober-/Unterhitze vorheizen.</li>
            <li>Quark, Ei, GF-Haferflocken, Mandelmilch, Zimt und Süße gut verrühren.</li>
            <li>Masse in eine ofenfeste Form geben (ca. 20×20 cm).</li>
            <li>Apfelwürfel gleichmäßig unterrühren oder obenauf verteilen.</li>
            <li>Für das Topping: Butter, GF-Haferflocken, Zimt und Erythrit mit den Händen zu einer krümeligen Masse verkneten und über die Form streuen.</li>
            <li>Ca. 30–35 Minuten backen bis die Oberfläche goldbraun ist.</li>
            <li>Heiß servieren – direkt aus der Form.</li>
          </ol>

          <div className="card" style={{ background: 'var(--cream-dark)', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>💡 Waschtls Tipp</h4>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Abends vorbereiten – morgens einfach in den Ofen schieben während du Kaffee kochst.
              Reste lassen sich auch kalt essen oder am nächsten Tag kurz aufwärmen (Mikrowelle 2 Min.).
              Wer keine Butter will: 15 g geschmolzenes Kokosöl funktioniert genauso.
            </p>
          </div>

          <hr className="divider" />
          <div className="grid-2">
            <Link href="/rezepte/apfel-zimt-porridge" className="card card-link" style={{ borderLeft: '4px solid var(--mint)' }}>
              <strong>🍎 Apfel-Zimt-Porridge</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Schneller, auf dem Herd.</p>
            </Link>
            <Link href="/rezepte/milchreis-kokos" className="card card-link" style={{ borderLeft: '4px solid var(--terracotta)' }}>
              <strong>🥥 Kokos-Milchreis</strong>
              <p style={{ margin: '0.4rem 0 0', fontSize: '0.875rem' }}>Cremig, ohne Gluten.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
