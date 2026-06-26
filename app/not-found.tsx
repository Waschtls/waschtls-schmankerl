import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '4rem 0 3.5rem' }}>
        <div className="container" style={{ maxWidth: '580px', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌾</div>
          <h1 style={{ color: 'var(--golden)', fontSize: 'clamp(1.75rem, 4vw, 2.4rem)', marginBottom: '1rem' }}>
            Seite nicht gefunden
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            Das Rezept oder die Seite die du suchst gibt es hier nicht – vielleicht wurde sie umgezogen
            oder der Link ist veraltet.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-golden">Zur Startseite</Link>
            <Link href="/rezepte" className="btn btn-outline"
              style={{ borderColor: 'var(--mint)', color: 'var(--mint)' }}>
              Alle Rezepte
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '580px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Vielleicht suchst du das?
          </h2>
          <div className="grid-2">
            {[
              { icon: '🔬', label: 'Zöliakie verstehen',  href: '/wissen' },
              { icon: '🆘', label: 'Erstdiagnose',         href: '/wissen/erstdiagnose' },
              { icon: '🏫', label: 'Kita & Schule',        href: '/wissen/schule-kita' },
              { icon: '🧺', label: 'Vorratskiste',         href: '/vorratskiste' },
              { icon: '📅', label: 'Wochenplan',           href: '/wochenplan' },
              { icon: '📍', label: 'Unterwegs',            href: '/unterwegs' },
            ].map(item => (
              <Link key={item.href} href={item.href} className="card card-link"
                style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}