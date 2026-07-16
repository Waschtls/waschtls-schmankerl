import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt – Waschtls Schmankerl',
  description: 'Fragen, Feedback oder eine Empfehlung für unsere Unterwegs-Liste? Schreib uns einfach.',
};

export default function KontaktPage() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> › Kontakt
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Kontakt</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '520px' }}>
            Fragen, Anmerkungen, Rezeptvorschläge oder Restaurantempfehlungen für Augsburg –
            wir freuen uns über jede Nachricht.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '680px' }}>
          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            {[
              {
                icon: '✉️',
                titel: 'E-Mail',
                text: 'Für alle Anfragen – wir antworten so schnell wie es der Alltag mit Kids zulässt.',
                action: <a href="mailto:waschtls.schmankerl@web.de"
                  style={{ display: 'inline-block', marginTop: '0.75rem', fontWeight: 700, color: 'var(--green-mid)', fontSize: '0.9rem' }}>
                  waschtls.schmankerl@web.de
                </a>,
              },
              {
                icon: '📍',
                titel: 'Wir sind aus Augsburg',
                text: 'Lokale Restaurantempfehlungen, Händler mit gutem GF-Sortiment oder Events in der Region – gerne her damit.',
                action: null,
              },
            ].map(k => (
              <div key={k.titel} className="card">
                <div style={{ fontSize: '1.75rem', marginBottom: '0.6rem' }}>{k.icon}</div>
                <h3 style={{ marginBottom: '0.4rem', fontSize: '1rem' }}>{k.titel}</h3>
                <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--text-mid)' }}>{k.text}</p>
                {k.action}
              </div>
            ))}
          </div>

          <div className="card" style={{ background: 'var(--cream-dark)' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1rem', color: 'var(--green-deep)' }}>
              Womit du uns kontaktieren kannst
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { icon: '🍽', text: 'Restaurantempfehlung für die Unterwegs-Liste' },
                { icon: '🍰', text: 'Rezeptvorschlag oder eine Variante die bei euch super funktioniert hat' },
                { icon: '❓', text: 'Frage zu einem Rezept oder Produkt' },
                { icon: '✍️', text: 'Feedback zur Website – was fehlt, was nervt, was ihr euch wünscht' },
                { icon: '🤝', text: 'Kooperation oder Themen rund ums Leuchtturmprojekt' },
              ].map(item => (
                <div key={item.text} style={{
                  display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                  padding: '0.6rem 0.875rem', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.5)', border: '1px solid var(--border)',
                }}>
                  <span style={{ fontSize: '1rem', flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            marginTop: '1.5rem', padding: '1rem 1.25rem',
            background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)',
            borderRadius: '8px', fontSize: '0.775rem', color: 'var(--text-light)', lineHeight: 1.75,
          }}>
            <strong>Datenschutz:</strong> Deine E-Mail-Adresse wird ausschließlich zur Beantwortung
            deiner Anfrage verwendet und danach nicht gespeichert oder weitergegeben.{' '}
            <Link href="/datenschutz" style={{ color: 'var(--green-mid)' }}>Datenschutzerklärung</Link>
          </div>
        </div>
      </section>
    </>
  );
}