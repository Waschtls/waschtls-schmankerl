import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welches glutenfreie Mehl wofür? – Der große Überblick',
  description:
    'Reismehl, Mandelmehl, Buchweizenmehl, Tapioka – welches glutenfreie Mehl eignet sich wofür? Unser Praxisführer aus dem Familienalltag.',
};

const mehle = [
  {
    name: 'Reismehl',
    emoji: '🌾',
    charakter: 'Neutral, fein, vielseitig',
    gut_fuer: 'Pfannkuchen, Kuchen, Kekse, Saucen binden, Panade',
    tipp: 'Der Allrounder – wenn du nur ein Mehl kaufst, nimm Reismehl. Es schmeckt kaum nach etwas und lässt sich gut mit anderen Mehlen kombinieren.',
    amazon: 'https://www.amazon.de/s?k=Reismehl+glutenfrei&tag=waschtl-21',
    highlight: true,
  },
  {
    name: 'Mandelmehl',
    emoji: '🥜',
    charakter: 'Nussig, feucht, proteinreich',
    gut_fuer: 'Schokokuchen, Muffins, Biskuit, Macarons',
    tipp: 'Macht Kuchen wunderbar saftig – ideal für Schokoladenkuchen. Nicht für Brot geeignet, da zu feucht. Teurer als andere Mehle, aber oft lohnt es sich.',
    amazon: 'https://www.amazon.de/s?k=Mandelmehl+blanchiert&tag=waschtl-21',
    highlight: false,
  },
  {
    name: 'Buchweizenmehl',
    emoji: '🌿',
    charakter: 'Kräftig, leicht erdig, rustikal',
    gut_fuer: 'Brot, Galettes (herzhafte Crêpes), Waffeln, Pfannkuchen',
    tipp: 'Trotz des Namens kein Weizen – 100% glutenfrei. Hat einen starken Eigengeschmack der nicht jedem Kind gefällt. Am besten mit Reismehl mischen (50/50).',
    amazon: 'https://www.amazon.de/s?k=Buchweizenmehl+glutenfrei&tag=waschtl-21',
    highlight: false,
  },
  {
    name: 'Tapiokastärke (Maniokmehl)',
    emoji: '⚪',
    charakter: 'Sehr neutral, klebrig, elastisch',
    gut_fuer: 'Pizzateig, Brot, als Bindemittel in Mehlmischungen',
    tipp: 'Macht glutenfreie Teige elastischer und verhindert das typische "Krümeln". Nie alleine verwenden – immer als Ergänzung zu anderen Mehlen (ca. 20-30% der Mehlmenge).',
    amazon: 'https://www.amazon.de/s?k=Tapiokast%C3%A4rke+glutenfrei&tag=waschtl-21',
    highlight: false,
  },
  {
    name: 'Maisfeinmehl (Maismehl)',
    emoji: '🌽',
    charakter: 'Leicht süßlich, gelblich, körnig',
    gut_fuer: 'Maisgebäck, Tortillas, Polenta, Panade',
    tipp: 'Gibt Gebäck eine schöne goldgelbe Farbe. Für Brot und Kuchen nur als Beimischung (max. 30%), sonst wird das Gebäck zu kompakt.',
    amazon: 'https://www.amazon.de/s?k=Maismehl+glutenfrei+fein&tag=waschtl-21',
    highlight: false,
  },
  {
    name: 'Kartoffelstärke',
    emoji: '🥔',
    charakter: 'Neutral, sehr fein, luftig',
    gut_fuer: 'Biskuit, luftige Kuchen, Saucen binden',
    tipp: 'Die Geheimzutat für luftigen Biskuit. Ersetzt in Kuchen-Rezepten oft die Hälfte des normalen Mehls. Auch sehr gut zum Binden von Soßen ohne Klumpen.',
    amazon: 'https://www.amazon.de/s?k=Kartoffelst%C3%A4rke&tag=waschtl-21',
    highlight: false,
  },
  {
    name: 'Kokosmehl',
    emoji: '🥥',
    charakter: 'Leicht süßlich, saugt viel Flüssigkeit',
    gut_fuer: 'Muffins, Energiebällchen, gesundes Backen',
    tipp: 'Sehr saugfähig – wenn du Kokosmehl verwendest, brauchst du deutlich mehr Flüssigkeit und Eier als im Original-Rezept. Schwierig für Anfänger. Am besten nur in Rezepten die explizit für Kokosmehl entwickelt wurden.',
    amazon: 'https://www.amazon.de/s?k=Kokosmehl+glutenfrei&tag=waschtl-21',
    highlight: false,
  },
];

const mischungen = [
  { name: 'Pfannkuchen & Waffeln', rezept: '70% Reismehl + 20% Kartoffelstärke + 10% Tapioka' },
  { name: 'Kuchen & Muffins', rezept: '60% Reismehl + 30% Mandelmehl + 10% Kartoffelstärke' },
  { name: 'Pizzateig', rezept: '50% Reismehl + 30% Tapioka + 20% Buchweizenmehl' },
  { name: 'Brot', rezept: '50% Reismehl + 25% Buchweizen + 15% Tapioka + 10% Maismehl' },
  { name: 'Mürbeteig (Kekse)', rezept: '60% Reismehl + 30% Mandelmehl + 10% Stärke' },
];

export default function WelchesMehlPage() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Welches Mehl wofür
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>
            Welches glutenfreie Mehl wofür?
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '580px' }}>
            Der Überblick über die wichtigsten glutenfreien Mehle – was sie können, wofür sie taugen, und was wir zuhause tatsächlich verwenden.
          </p>
        </div>
      </section>

      {/* Einleitung */}
      <section className="section-sm" style={{ background: 'var(--cream-dark)' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <p style={{ margin: 0, lineHeight: 1.8 }}>
            Der größte Unterschied zu normalem Backen: glutenfreie Mehle können das Gluten-Netzwerk nicht nachbilden das Weizen-Teige zusammenhält. Deshalb kombiniert man meist 2-3 verschiedene Mehle – und fügt oft noch ein Bindemittel wie Xanthan oder Flohsamenschalen hinzu. Klingt aufwändiger als es ist. Nach ein paar Versuchen wird es zur Routine.
          </p>
        </div>
      </section>

      {/* Mehl-Karten */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: '1.5rem' }}>Die wichtigsten Mehle im Überblick</h2>
          <div className="grid-2">
            {mehle.map(({ name, emoji, charakter, gut_fuer, tipp, amazon, highlight }) => (
              <div
                key={name}
                className="card"
                style={{
                  borderTop: highlight ? '3px solid var(--golden)' : '3px solid var(--border)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '2rem' }}>{emoji}</span>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1rem' }}>{name}</h3>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>{charakter}</span>
                  </div>
                  {highlight && (
                    <span style={{
                      marginLeft: 'auto',
                      background: 'var(--golden)',
                      color: 'var(--green-deep)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '999px',
                    }}>
                      Empfehlung
                    </span>
                  )}
                </div>
                <p style={{ fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                  <strong>Gut für:</strong> {gut_fuer}
                </p>
                <p style={{ fontSize: '0.85rem', marginBottom: '0.75rem', color: 'var(--text-light)', fontStyle: 'italic' }}>
                  💡 {tipp}
                </p>
                <a
                  href={amazon}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  style={{
                    display: 'inline-block',
                    fontSize: '0.78rem',
                    color: 'var(--green-mid)',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  → Bei Amazon ansehen*
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mischungsempfehlungen */}
      <section className="section-sm" style={{ background: 'var(--cream-dark)' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ marginBottom: '1rem' }}>Unsere Mehlmischungen für zuhause</h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
            Diese Kombinationen haben wir ausprobiert und für gut befunden. Kein Garant – Backen ist auch glutenfrei eine Frage des Ausprobierens.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {mischungen.map(({ name, rezept }) => (
              <div
                key={name}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  background: 'white',
                  borderRadius: '10px',
                  padding: '0.875rem 1rem',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                }}
              >
                <span style={{ fontWeight: 700, minWidth: '140px', fontSize: '0.9rem', color: 'var(--green-deep)' }}>{name}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>{rezept}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Hinweis + CTA */}
      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="affiliate-box">
            <h3 style={{ marginBottom: '0.5rem' }}>Mehle online kaufen</h3>
            <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
              Im Supermarkt ist die Auswahl oft begrenzt. Online gibt es alle Sorten in guter Qualität.
            </p>
            <a
              href="https://www.amazon.de/s?k=glutenfreie+Mehle+Set&tag=waschtl-21"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn btn-golden"
              style={{ fontSize: '0.9rem' }}
            >
              Glutenfreie Mehle bei Amazon ansehen →
            </a>
          </div>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginTop: '1rem' }}>
            * Affiliate-Links – wir erhalten eine kleine Provision wenn du über unsere Links kaufst, für dich entstehen keine Mehrkosten.
          </p>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/wissen/xanthan-flohsamenschalen" className="btn btn-outline">
              Xanthan & Flohsamenschalen →
            </Link>
            <Link href="/rezepte" className="btn btn-outline">
              Zu den Rezepten →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
