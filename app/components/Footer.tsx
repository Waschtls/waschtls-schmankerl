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
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '1.4rem' }}>🌾</span>
              <span style={{ fontWeight: 700, color: 'var(--golden)', fontSize: '1rem' }}>
                Waschtls Schmankerl
              </span>
            </div>
            <p style={{ color: 'var(--mint)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
              Glutenfreie Rezepte und ehrliche Tipps von einer Familie, die Zöliakie kennt.
            </p>
          </div>

          {/* Rezepte */}
          <div>
            <h4 style={{ color: 'var(--golden)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>Rezepte</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {[
                ['Frühstück', '/rezepte#fruehstueck'],
                ['Mittagessen', '/rezepte#mittagessen'],
                ['Snacks & Backen', '/rezepte#snacks'],
                ['Alle Rezepte A–Z', '/rezepte/alle'],
                ['Alle Rezepte', '/rezepte'],
              ].map(([label, href]) => (
                <Link key={href} href={href} style={{ fontSize: '0.85rem', color: 'var(--mint)', opacity: 0.85 }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Wissen */}
          <div>
            <h4 style={{ color: 'var(--golden)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>Wissen</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {[
                ['Was ist Zöliakie?', '/wissen/was-ist-zoeliakiie'],
                ['Diagnose bei Kindern', '/wissen/diagnose-kinder'],
                ['Schule & Kita', '/wissen/schule-kita'],
                ['Reisen glutenfrei', '/wissen/reisen'],
                ['Alle Infos', '/wissen'],
              ].map(([label, href]) => (
                <Link key={href} href={href} style={{ fontSize: '0.85rem', color: 'var(--mint)', opacity: 0.85 }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Meta */}
          <div>
            <h4 style={{ color: 'var(--golden)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>Mehr</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {[
                ['FAQ', '/faq'],
                ['Über uns', '/ueber-uns'],
                ['Produkte', '/produkte'],
                ['Impressum', '/impressum'],
                ['Datenschutz', '/datenschutz'],
              ].map(([label, href]) => (
                <Link key={href} href={href} style={{ fontSize: '0.85rem', color: 'var(--mint)', opacity: 0.85 }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(149,213,178,0.2)',
          paddingTop: '1rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--mint)', opacity: 0.7 }}>
            © {year} Waschtls Schmankerl · Sebastian Klug · Friedrich-Ebert-Str. 15a, 86199 Augsburg
          </p>
          <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--mint)', opacity: 0.6 }}>
            Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Affiliate-Links sind als „Anzeige" gekennzeichnet.
          </p>
        </div>
      </div>
    </footer>
  );
}
