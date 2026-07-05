import Link from 'next/link';
import PortionenScaler from './PortionenScaler';
import SocialShare from './SocialShare';

const SITE_URL = 'https://www.waschtls-schmankerl.de';

// ── Typen ─────────────────────────────────────────────────────────────────────

export type RecipeBadge = { type: 'mint' | 'golden'; label: string };

type Naehrwerte = {
  kalorien: number;
  kohlenhydrate: number;
  protein: number;
  fett: number;
  ballaststoffe: number;
};

type ZeitplanItem = { label: string; value: string; icon: string };

type RelatedRecipe = { title: string; slug: string; emoji: string; time: string };

type RecipeLayoutProps = {
  title: string;
  kat: string;
  badges: RecipeBadge[];
  breadcrumbParent?: { label: string; href: string };
  tagline: string;
  useCases: string[];
  minuten: number | string;
  portionen: number | string;
  einheit?: string;              // 'Stücke' | 'Muffins' | 'Portionen' (default)
  schwierigkeit?: string;
  publishDate?: string;
  zeitplan?: ZeitplanItem[];     // Vorbereitung / Gehzeit / Backzeit / Gesamt
  warum?: string;                // Kurzer Text im rechten Spalte unter Nährwerte
  heroImage?: string;            // z.B. '/images/granola.jpg' – wird zwischen Tagline und Inhalt angezeigt
  zutaten: string[];
  zubereitung: string[];
  naehrwerte: Naehrwerte;
  infoBox?: string;
  tipps?: string[];
  affiliate?: { text: string };
  warenkundeLink?: { label: string; href: string };
  relatedRecipes?: RelatedRecipe[];
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
};

type MetaItem = { icon: string; label: string };
type NwItem   = { label: string; value: string; accent?: boolean };

// ── Komponente ────────────────────────────────────────────────────────────────

export default function RecipeLayout({
  title, kat, badges, breadcrumbParent, tagline, useCases,
  minuten, portionen, einheit = 'Portionen', schwierigkeit, publishDate,
  zeitplan, warum, heroImage,
  zutaten, zubereitung, naehrwerte, infoBox, tipps,
  affiliate, warenkundeLink, relatedRecipes, prev, next,
}: RecipeLayoutProps) {

  // ── JSON-LD: Schema.org Recipe ────────────────────────────────────────────
  const recipeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: title,
    description: tagline,
    author: { '@type': 'Person', name: 'Waschtl', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Waschtls Schmankerl', url: SITE_URL },
    ...(publishDate ? { datePublished: publishDate } : {}),
    recipeCategory: kat,
    recipeCuisine: 'Glutenfrei',
    keywords: `glutenfrei, ${kat.toLowerCase()}, glutenfreie Rezepte, Zöliakie`,
    cookTime: typeof minuten === 'number' ? `PT${minuten}M` : undefined,
    totalTime: typeof minuten === 'number' ? `PT${minuten}M` : undefined,
    recipeYield: `${portionen} ${einheit}`,
    recipeIngredient: zutaten.filter(z => !z.startsWith('—')),
    recipeInstructions: zubereitung.map((schritt, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      text: schritt,
    })),
    nutrition: {
      '@type': 'NutritionInformation',
      calories: `${naehrwerte.kalorien} kcal`,
      carbohydrateContent: `${naehrwerte.kohlenhydrate} g`,
      proteinContent: `${naehrwerte.protein} g`,
      fatContent: `${naehrwerte.fett} g`,
      fiberContent: `${naehrwerte.ballaststoffe} g`,
    },
    suitableForDiet: 'https://schema.org/GlutenFreeDiet',
  };

  // ── JSON-LD: BreadcrumbList ───────────────────────────────────────────────
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: breadcrumbParent?.label ?? 'Rezepte', item: `${SITE_URL}${breadcrumbParent?.href ?? '/rezepte'}` },
      { '@type': 'ListItem', position: 3, name: title },
    ],
  };

  // Meta-Zeile
  const metaItems: MetaItem[] = [
    { icon: '⏱', label: `${minuten} Min.` },
    { icon: '👥', label: `${portionen} ${einheit}` },
  ];
  if (schwierigkeit) metaItems.push({ icon: '📊', label: schwierigkeit });

  // Nährwerte-Kacheln
  const nwItems: NwItem[] = [
    { label: 'Kalorien',      value: `${naehrwerte.kalorien} kcal`, accent: true },
    { label: 'Kohlenhydrate', value: `${naehrwerte.kohlenhydrate} g` },
    { label: 'Protein',       value: `${naehrwerte.protein} g` },
    { label: 'Fett',          value: `${naehrwerte.fett} g` },
    { label: 'Ballaststoffe', value: `${naehrwerte.ballaststoffe} g` },
  ];

  // "Warum dieses Rezept?" – explizit oder erste 1-2 Sätze aus tagline
  const warumText = warum ?? tagline.split(/(?<=\.)\s+/)[0];

  return (
    <div style={heroImage ? {
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    } : {}}>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ── HERO ── */}
      <section style={{
        background: heroImage ? 'rgba(27,67,50,0.78)' : 'var(--green-deep)',
        backdropFilter: heroImage ? 'blur(12px)' : undefined,
        WebkitBackdropFilter: heroImage ? 'blur(12px)' : undefined,
        padding: '2.75rem 0 2.25rem',
      }}>
        <div className="container">
          {/* Breadcrumb */}
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            {breadcrumbParent ? (
              <><Link href={breadcrumbParent.href} style={{ color: 'var(--mint)' }}>{breadcrumbParent.label}</Link> › </>
            ) : (
              <><Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › </>
            )}
            {title}
          </div>

          {/* Kategorie + Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', margin: '1rem 0 0.875rem' }}>
            <span style={{
              fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.7rem',
              borderRadius: '999px', background: 'rgba(149,213,178,0.2)',
              color: 'var(--mint)', letterSpacing: '0.05em', textTransform: 'uppercase',
            }}>{kat}</span>
            {badges.map(b => (
              <span key={b.label} style={{
                fontSize: '0.72rem', fontWeight: 700,
                padding: '0.2rem 0.7rem', borderRadius: '999px',
                background: b.type === 'mint' ? 'rgba(149,213,178,0.2)' : 'rgba(233,196,106,0.2)',
                color: b.type === 'mint' ? 'var(--mint)' : 'var(--golden)',
              }}>{b.label}</span>
            ))}
          </div>

          {/* Titel */}
          <h1 style={{
            color: 'var(--golden)', fontSize: 'clamp(1.7rem, 4vw, 2.5rem)',
            lineHeight: 1.15, marginBottom: '0.75rem',
          }}>
            {title}
          </h1>

          {/* Autorenzeile */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>
              Von <strong style={{ color: 'var(--mint)' }}>Waschtl</strong>
              {publishDate && <> · {publishDate}</>}
            </span>
            <a
              href="#zutaten"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                padding: '0.3rem 0.85rem', borderRadius: '999px',
                background: 'var(--golden)', color: 'var(--green-deep)',
                fontSize: '0.78rem', fontWeight: 700, textDecoration: 'none',
              }}
            >
              ↓ Direkt zum Rezept
            </a>
          </div>
        </div>
      </section>

      {/* ── TAGLINE + USE CASES ── */}
      <section style={{
        background: heroImage ? 'rgba(245,240,208,0.82)' : 'var(--cream-dark)',
        backdropFilter: heroImage ? 'blur(12px)' : undefined,
        WebkitBackdropFilter: heroImage ? 'blur(12px)' : undefined,
        padding: '1.75rem 0 1.5rem',
        borderBottom: '3px solid var(--golden)',
      }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <p style={{
            fontSize: 'clamp(0.98rem, 2vw, 1.15rem)',
            lineHeight: 1.8, color: 'var(--text-dark)',
            fontStyle: 'italic', margin: '0 0 1.1rem',
          }}>
            {tagline}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {useCases.map(u => (
              <span key={u} style={{
                padding: '0.3rem 0.85rem', borderRadius: '999px',
                background: 'var(--cream)', border: '1.5px solid var(--border)',
                fontSize: '0.8rem', color: 'var(--text-mid)', fontWeight: 500,
              }}>{u}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── INHALT ── */}
      <section className="section" style={heroImage ? {
        background: 'rgba(254,250,224,0.82)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      } : {}}>
        <div className="container" style={{ maxWidth: '800px' }}>

          {/* Info-Box */}
          {infoBox && (
            <div style={{
              padding: '0.9rem 1.25rem', marginBottom: '2rem',
              borderRadius: '10px', borderLeft: '4px solid var(--mint)',
              background: 'rgba(149,213,178,0.1)',
              fontSize: '0.9rem', color: 'var(--green-deep)', lineHeight: 1.75,
            }}>
              {infoBox}
            </div>
          )}

          {/* Meta-Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginBottom: '1.5rem' }}>
            {metaItems.map(({ icon, label }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: '0.45rem',
                padding: '0.45rem 1rem', borderRadius: '8px',
                background: 'var(--cream-dark)', border: '1px solid var(--border)',
                fontSize: '0.875rem', color: 'var(--text-dark)', fontWeight: 500,
              }}>
                <span>{icon}</span><span>{label}</span>
              </div>
            ))}
          </div>

          {/* Zeitplan-Grid (optional) */}
          {zeitplan && zeitplan.length > 0 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${zeitplan.length}, 1fr)`,
              gap: '0.65rem',
              marginBottom: '2rem',
            }}>
              {zeitplan.map(({ label, value, icon }) => (
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
          )}

          {/* 2-Spalten: Zutaten + Nährwerte */}
          <div className="recipe-cols" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem', marginBottom: '2.5rem',
          }}>
            {/* Links: Zutaten + Scaler */}
            <div id="zutaten" className="card" style={{ padding: '1.5rem', scrollMarginTop: '120px' }}>
              <h2 style={{
                fontSize: '1rem', fontWeight: 700, marginBottom: '1rem',
                color: 'var(--green-deep)',
              }}>
                🧺 Zutaten
              </h2>
              <PortionenScaler portionen={portionen} zutaten={zutaten} einheit={einheit} />
            </div>

            {/* Rechts: Nährwerte + Warum */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--green-deep)' }}>
                📊 Nährwerte{' '}
                <span style={{ fontSize: '0.7rem', color: 'var(--text-light)', fontWeight: 400 }}>
                  pro {einheit === 'Portionen' ? 'Portion' : einheit.replace(/en$/, '')}
                </span>
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                {nwItems.map(({ label, value, accent }) => (
                  <div key={label} style={{
                    padding: '0.6rem 0.75rem', borderRadius: '8px',
                    background: accent ? 'rgba(233,196,106,0.15)' : 'var(--cream-dark)',
                    border: `1px solid ${accent ? 'rgba(233,196,106,0.4)' : 'var(--border)'}`,
                  }}>
                    <div style={{
                      fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em',
                      textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '0.2rem',
                    }}>{label}</div>
                    <div style={{
                      fontSize: '1rem', fontWeight: 700,
                      color: accent ? 'var(--green-deep)' : 'var(--text-dark)',
                    }}>{value}</div>
                  </div>
                ))}
              </div>
              <p style={{ margin: '0.75rem 0 0', fontSize: '0.68rem', color: 'var(--text-light)', lineHeight: 1.5 }}>
                Richtwerte, ohne Toppings/Beilagen.
              </p>

              {/* Warum dieses Rezept? */}
              <div style={{
                marginTop: '1.1rem', paddingTop: '1rem',
                borderTop: '1px solid var(--border)',
              }}>
                <div style={{
                  fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.05em', color: 'var(--text-light)', marginBottom: '0.45rem',
                }}>
                  Warum dieses Rezept?
                </div>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-dark)', lineHeight: 1.75 }}>
                  {warumText}
                </p>
              </div>
            </div>
          </div>

          {/* Zubereitung */}
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>Zubereitung</h2>
          <ol style={{ margin: '0 0 2.5rem', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {zubereitung.map((schritt, i) => (
              <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{
                  flexShrink: 0, width: '32px', height: '32px', borderRadius: '50%',
                  background: 'var(--green-deep)', color: 'var(--golden)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '0.85rem', lineHeight: 1,
                  boxShadow: '0 2px 8px rgba(27,67,50,0.2)',
                }}>
                  {i + 1}
                </span>
                <p style={{ margin: 0, paddingTop: '0.35rem', fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-dark)' }}>
                  {schritt}
                </p>
              </li>
            ))}
          </ol>

          {/* Tipps */}
          {tipps && tipps.length > 0 && (
            <div style={{
              padding: '1.25rem 1.5rem', borderRadius: '12px',
              background: 'rgba(233,196,106,0.08)',
              border: '1.5px solid rgba(233,196,106,0.35)',
              marginBottom: '2rem',
            }}>
              <h3 style={{ fontSize: '0.95rem', margin: '0 0 1rem', color: 'var(--green-deep)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                💡 Tipps &amp; Tricks
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {tipps.map((t, i) => (
                  <li key={i} style={{
                    fontSize: '0.875rem', color: 'var(--text-dark)',
                    lineHeight: 1.7, paddingLeft: '1rem',
                    borderLeft: '2px solid rgba(233,196,106,0.5)',
                  }}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Warenkunde-Link */}
          {warenkundeLink && (
            <div style={{
              padding: '0.875rem 1.25rem', borderRadius: '10px',
              background: 'rgba(149,213,178,0.08)',
              border: '1.5px solid rgba(149,213,178,0.3)',
              marginBottom: '1.25rem',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: '1rem', flexWrap: 'wrap',
            }}>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-dark)' }}>📚 <strong>Mehr zum Thema</strong></div>
              <Link href={warenkundeLink.href} style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--green-mid)', whiteSpace: 'nowrap' }}>
                {warenkundeLink.label} →
              </Link>
            </div>
          )}

          {/* Produkte-Callout */}
          {affiliate && (
            <div style={{
              padding: '1rem 1.25rem', borderRadius: '10px',
              background: 'var(--cream-dark)', border: '1px solid var(--border)',
              marginBottom: '2rem',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: '1rem', flexWrap: 'wrap',
            }}>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-mid)', flex: 1 }}>
                🛒 {affiliate.text}
              </p>
              <Link href="/produkte" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--green-mid)', whiteSpace: 'nowrap', flexShrink: 0 }}>
                Unsere Empfehlungen →
              </Link>
            </div>
          )}

          {/* Social Share */}
          <div style={{ paddingTop: '1.5rem', marginBottom: '1.5rem', borderTop: '1px solid var(--border)' }}>
            <SocialShare title={title} />
          </div>

          {/* Vor/Zurück-Navigation */}
          {(prev || next) && (
            <nav aria-label="Rezept-Navigation" style={{
              display: 'flex', justifyContent: 'space-between',
              gap: '1rem', paddingTop: '1rem',
              borderTop: '1px solid var(--border)', flexWrap: 'wrap',
            }}>
              {prev ? (
                <Link href={prev.href} style={{ fontSize: '0.875rem', color: 'var(--green-mid)', fontWeight: 500 }}>← {prev.title}</Link>
              ) : <span />}
              {next ? (
                <Link href={next.href} style={{ fontSize: '0.875rem', color: 'var(--green-mid)', fontWeight: 500 }}>{next.title} →</Link>
              ) : <span />}
            </nav>
          )}

          {/* Ähnliche Rezepte */}
          {relatedRecipes && relatedRecipes.length > 0 && (
            <div style={{ marginTop: '3rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--green-deep)' }}>
                Das könnte dir auch gefallen
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.75rem' }}>
                {relatedRecipes.map(r => (
                  <Link key={r.slug} href={`/rezepte/${r.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{
                      padding: '1rem', borderRadius: '10px',
                      background: 'var(--cream-dark)', border: '1.5px solid var(--border)',
                      transition: 'border-color 0.15s',
                    }}>
                      <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{r.emoji}</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--green-deep)', lineHeight: 1.3, marginBottom: '0.25rem' }}>
                        {r.title}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>{r.time}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .recipe-cols { grid-template-columns: 1fr !important; }
        }
        @media print {
          header, footer, nav[aria-label="Rezept-Navigation"],
          a[href*="pinterest"], a[href*="wa.me"], button { display: none !important; }
          #zutaten { break-inside: avoid; }
        }
      `}</style>
    </div>
  );
}
