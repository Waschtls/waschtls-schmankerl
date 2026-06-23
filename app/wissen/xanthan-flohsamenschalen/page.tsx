import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Xanthan & Flohsamenschalen beim glutenfreien Backen erklärt',
  description:
    'Wofür braucht man Xanthan oder Flohsamenschalen beim glutenfreien Backen? Wie viel davon? Und was ist der Unterschied? Klar erklärt für den Familienalltag.',
};

export default function XanthanPage() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Xanthan & Flohsamenschalen
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>
            Xanthan & Flohsamenschalen
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px' }}>
            Warum braucht man diese Zutaten beim glutenfreien Backen – und wann kommt was zum Einsatz?
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>

          {/* Warum Bindemittel */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ marginBottom: '0.75rem' }}>Warum braucht glutenfreies Backen Bindemittel?</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>
              Normaler Weizenteig hält zusammen weil Gluten ein elastisches Netzwerk bildet. Es hält Luftblasen fest, macht Teig dehnbar und verhindert dass er beim Backen zerfällt. Glutenfreie Mehle können das nicht – deshalb brauchen viele Rezepte einen Ersatz.
            </p>
            <p style={{ lineHeight: 1.8, margin: 0 }}>
              Bindemittel übernehmen diese Aufgabe: Sie binden Wasser, machen Teige geschmeidiger und sorgen dafür dass das fertige Gebäck zusammenhält statt zu krümeln.
            </p>
          </div>

          {/* Xanthan */}
          <div className="card" style={{ marginBottom: '1.5rem', borderTop: '3px solid var(--golden)' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2.5rem' }}>🧪</span>
              <div>
                <h2 style={{ margin: 0, marginBottom: '0.25rem' }}>Xanthan</h2>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>Fermentiertes Verdickungsmittel (E415)</span>
              </div>
            </div>
            <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>
              Xanthan wird durch Fermentation von Zucker mit einem Bakterium (Xanthomonas campestris) hergestellt. Es ist in sehr kleinen Mengen extrem effektiv – schon ½ Teelöffel verändert die Konsistenz eines ganzen Kuchens spürbar.
            </p>

            <h3 style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>Wofür:</h3>
            <ul style={{ margin: '0 0 0.75rem 1.2rem', lineHeight: 1.8, fontSize: '0.9rem' }}>
              <li>Brot & Brötchen – hält den Teig zusammen und macht ihn nicht so bröselig</li>
              <li>Pizzateig – gibt Elastizität zum Ausrollen</li>
              <li>Hefeteige – unverzichtbar für gutes Ergebnis</li>
              <li>Gebäck das nicht krümeln soll</li>
            </ul>

            <h3 style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>Dosierung:</h3>
            <div style={{
              background: 'var(--cream-dark)',
              borderRadius: '8px',
              padding: '0.875rem 1rem',
              marginBottom: '0.75rem',
              fontSize: '0.875rem',
            }}>
              <p style={{ margin: 0, marginBottom: '0.4rem' }}>🍞 <strong>Brot:</strong> ½–1 TL pro 200g Mehl</p>
              <p style={{ margin: 0, marginBottom: '0.4rem' }}>🍕 <strong>Pizzateig:</strong> ½ TL pro 200g Mehl</p>
              <p style={{ margin: 0, marginBottom: '0.4rem' }}>🎂 <strong>Kuchen:</strong> ¼ TL pro 200g Mehl (oft weglassbar)</p>
              <p style={{ margin: 0 }}>🍪 <strong>Kekse:</strong> meist nicht nötig</p>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontStyle: 'italic', margin: '0 0 1rem' }}>
              ⚠️ Nicht überdosieren – zu viel Xanthan macht den Teig schleimig und gummiartig.
            </p>

            <a
              href="https://www.amazon.de/s?k=Xanthan+glutenfrei+backen&tag=waschtl-21"
              target="_blank"
              rel="noopener noreferrer nofollow"
              style={{ fontSize: '0.82rem', color: 'var(--green-mid)', fontWeight: 600, textDecoration: 'none' }}
            >
              → Xanthan bei Amazon ansehen*
            </a>
          </div>

          {/* Flohsamenschalen */}
          <div className="card" style={{ marginBottom: '2.5rem', borderTop: '3px solid var(--mint)' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2.5rem' }}>🌱</span>
              <div>
                <h2 style={{ margin: 0, marginBottom: '0.25rem' }}>Flohsamenschalen</h2>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>Natürliche Pflanzenfasern (Psyllium)</span>
              </div>
            </div>
            <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>
              Flohsamenschalen kommen von der Wegerich-Pflanze und sind ein natürliches Ballaststoffpulver. Sie quellen beim Kontakt mit Wasser stark auf und bilden dabei ein gelartiges Netz – ähnlich wie Gluten. Viele bevorzugen sie gegenüber Xanthan weil sie natürlicher sind und auch dem Darm gut tun.
            </p>

            <h3 style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>Wofür:</h3>
            <ul style={{ margin: '0 0 0.75rem 1.2rem', lineHeight: 1.8, fontSize: '0.9rem' }}>
              <li>Brot – macht es feuchter und gibt eine schöne Krume</li>
              <li>Wenn du Xanthan vermeiden möchtest (natürlichere Alternative)</li>
              <li>Als Verdickungsmittel in Pfannkuchen und Waffeln</li>
            </ul>

            <h3 style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>Dosierung:</h3>
            <div style={{
              background: 'var(--cream-dark)',
              borderRadius: '8px',
              padding: '0.875rem 1rem',
              marginBottom: '0.75rem',
              fontSize: '0.875rem',
            }}>
              <p style={{ margin: 0, marginBottom: '0.4rem' }}>🍞 <strong>Brot:</strong> 1–2 EL pro 250g Mehl</p>
              <p style={{ margin: 0, marginBottom: '0.4rem' }}>🥞 <strong>Pfannkuchen:</strong> 1 TL pro Rezept</p>
              <p style={{ margin: 0 }}>Gut quellen lassen! Immer mit der Flüssigkeit zuerst mischen, 5 Minuten warten.</p>
            </div>

            <a
              href="https://www.amazon.de/s?k=Flohsamenschalen+glutenfrei&tag=waschtl-21"
              target="_blank"
              rel="noopener noreferrer nofollow"
              style={{ fontSize: '0.82rem', color: 'var(--green-mid)', fontWeight: 600, textDecoration: 'none' }}
            >
              → Flohsamenschalen bei Amazon ansehen*
            </a>
          </div>

          {/* Vergleich */}
          <h2 style={{ marginBottom: '1rem' }}>Xanthan oder Flohsamenschalen – was nehmen?</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            marginBottom: '2rem',
          }}>
            <div style={{ background: 'var(--cream-dark)', borderRadius: '10px', padding: '1rem' }}>
              <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>🧪 Xanthan wenn:</p>
              <ul style={{ margin: '0 0 0 1rem', lineHeight: 1.9, fontSize: '0.875rem' }}>
                <li>du Hefeteig backst</li>
                <li>du sehr kleine Mengen brauchst</li>
                <li>das Rezept es vorgibt</li>
                <li>du auf Volumen achtest (Brot soll aufgehen)</li>
              </ul>
            </div>
            <div style={{ background: 'var(--cream-dark)', borderRadius: '10px', padding: '1rem' }}>
              <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>🌱 Flohsamenschalen wenn:</p>
              <ul style={{ margin: '0 0 0 1rem', lineHeight: 1.9, fontSize: '0.875rem' }}>
                <li>du natürlicher backen willst</li>
                <li>du Brot backst (toller Effekt)</li>
                <li>du an Ballaststoffe denkst</li>
                <li>du kein Xanthan vorrätig hast</li>
              </ul>
            </div>
          </div>

          <div className="affiliate-box">
            <h3 style={{ marginBottom: '0.5rem' }}>Unsere Empfehlung für Einsteiger</h3>
            <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
              Wir haben zuhause beides – Xanthan für Hefeteige und Pizzaboden, Flohsamenschalen fürs Brot. Für den Anfang reicht eines der beiden.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href="https://www.amazon.de/s?k=Xanthan+Flohsamenschalen+Set+glutenfrei&tag=waschtl-21"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn btn-golden"
                style={{ fontSize: '0.9rem' }}
              >
                Bindemittel bei Amazon →
              </a>
            </div>
          </div>

          <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginTop: '1rem' }}>
            * Affiliate-Links – für dich entstehen keine Mehrkosten.
          </p>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/wissen/welches-mehl-wofuer" className="btn btn-outline">← Welches Mehl wofür</Link>
            <Link href="/wissen/kreuzkontamination" className="btn btn-outline">Kreuzkontamination →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
