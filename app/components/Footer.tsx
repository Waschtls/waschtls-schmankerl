import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--green-deep)',
      color: 'var(--mint)',
      padding: '2.5rem 0 1.5rem',
      marginTop: '4rem',
      borderTop: '3px solid var(--golden)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: '3rem',
          marginBottom: '1.5rem',
          alignItems: 'start',
        }}>
          {/* Brand */}
          <div style={{ maxWidth: '260px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '1.4rem' }}>🌾</span>
              <span style={{ fontWeight: 700, color: 'var(--golden)', fontSize: '1rem' }}>
                Waschtls Schmankerl
              </span>
            </div>
            <p style={{ color: 'var(--mint)', fontSize: '0.85rem', lineHeight: 1.6, margin: '0 0 0.75rem', opacity: 0.8 }}>
              Glutenfreie Rezepte und ehrliche Tipps von einer Familie, die Zöliakie kennt.
            </p>
            <a
              href="https://www.instagram.com/waschtls_schmankerl"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.82rem', color: 'var(--golden)', opacity: 0.9,
                textDecoration: 'none', fontWeight: 600,
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
              @waschtls_schmankerl
            </a>
          </div>

          {/* Navigation – horizontal */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem', alignItems: 'center', paddingTop: '0.25rem' }}>
            {[
              ['Vorratskiste', '/vorratskiste'],
              ['Aktuelles', '/aktuelles'],
              ['Unterwegs', '/unterwegs'],
              ['Produkte', '/produkte'],
              ['Über uns', '/ueber-uns'],
            ].map(([label, href]) => (
              <Link key={href} href={href} style={{ fontSize: '0.85rem', color: 'var(--mint)', opacity: 0.85, whiteSpace: 'nowrap' }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(149,213,178,0.15)',
          paddingTop: '0.875rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem 1.5rem',
          alignItems: 'center',
        }}>
          <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--mint)', opacity: 0.55 }}>
            © {year} Waschtls Schmankerl · Sebastian Klug · Augsburg
          </p>
          <Link href="/impressum" style={{ fontSize: '0.75rem', color: 'var(--mint)', opacity: 0.55 }}>Impressum</Link>
          <Link href="/datenschutz" style={{ fontSize: '0.75rem', color: 'var(--mint)', opacity: 0.55 }}>Datenschutz</Link>
          <p style={{ margin: 0, fontSize: '0.72rem', color: 'var(--mint)', opacity: 0.4 }}>
            Affiliate-Links sind als „Anzeige" gekennzeichnet.
          </p>
        </div>
      </div>
    </footer>
  );
}
