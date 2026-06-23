import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wissen – Zöliakie bei Kindern verstehen',
  description:
    'Alles was Eltern über Zöliakie wissen müssen: Diagnose, Ernährung, Schule, Alltag und mehr – einfach und ehrlich erklärt.',
};

const themen = [
  {
    icon: '🔬',
    title: 'Was ist Zöliakie?',
    desc: 'Wie Zöliakie entsteht, was im Körper passiert und warum lebenslang glutenfrei essen so wichtig ist.',
    href: '/wissen/was-ist-zoeliakiie',
    tag: 'Grundlagen',
  },
  {
    icon: '🩺',
    title: 'Diagnose bei Kindern',
    desc: 'Welche Symptome auf Zöliakie hindeuten, wie die Diagnose abläuft und was danach kommt.',
    href: '/wissen/diagnose-kinder',
    tag: 'Diagnose',
  },
  {
    icon: '🥗',
    title: 'Glutenfreie Ernährung',
    desc: 'Was erlaubt ist, was nicht, wo sich Gluten versteckt und wie man Kreuzverunreinigung vermeidet.',
    href: '/wissen/ernaehrung-grundlagen',
    tag: 'Ernährung',
  },
  {
    icon: '🏫',
    title: 'Schule & Kita',
    desc: 'Wie ihr das Thema mit Lehrern, Erzieherinnen und anderen Eltern kommuniziert – ohne Drama.',
    href: '/wissen/schule-kita',
    tag: 'Alltag',
  },
  {
    icon: '🎂',
    title: 'Geburtstage glutenfrei',
    desc: 'Damit kein Kind auf der Party leer ausgeht: Tipps für glutenfreie Kuchen, Snacks und Einladungen.',
    href: '/wissen/geburtstage',
    tag: 'Alltag',
  },
  {
    icon: '✈️',
    title: 'Reisen mit Zöliakie',
    desc: 'Im Urlaub glutenfrei essen – was in Restaurants, Hotels und im Ausland zu beachten ist.',
    href: '/wissen/reisen',
    tag: 'Alltag',
  },
  {
    icon: '🛒',
    title: 'Einkaufen & Produkte',
    desc: 'Welche Produkte zuverlässig glutenfrei sind, was Labels bedeuten und wo man am besten einkauft.',
    href: '/wissen/produkte-einkauf',
    tag: 'Einkauf',
  },
  {
    icon: '💊',
    title: 'Nährstoffmangel & Gesundheit',
    desc: 'Welche Nährstoffe bei Zöliakie oft fehlen und wie ihr das ausgleicht.',
    href: '/wissen/naehrstoffe',
    tag: 'Gesundheit',
  },
  {
    icon: '🧠',
    title: 'Kindern Zöliakie erklären',
    desc: 'Wie ihr eurem Kind auf Augenhöhe erklärt warum es anders essen muss – ohne Angst zu machen.',
    href: '/wissen/kindern-erklaeren',
    tag: 'Familie',
  },
  {
    icon: '🌾',
    title: 'Welches Mehl wofür?',
    desc: 'Reismehl, Mandelmehl, Buchweizenmehl – welches glutenfreie Mehl eignet sich wofür und wie kombiniert man sie?',
    href: '/wissen/welches-mehl-wofuer',
    tag: 'Warenkunde',
  },
  {
    icon: '🧪',
    title: 'Xanthan & Flohsamenschalen',
    desc: 'Warum braucht glutenfreies Backen Bindemittel – und was ist der Unterschied zwischen Xanthan und Flohsamenschalen?',
    href: '/wissen/xanthan-flohsamenschalen',
    tag: 'Warenkunde',
  },
  {
    icon: '⚠️',
    title: 'Kreuzkontamination',
    desc: 'Was ist Kontamination, warum reichen Spuren für eine Reaktion – und wie schützt man das Kind zuhause und unterwegs?',
    href: '/wissen/kreuzkontamination',
    tag: 'Sicherheit',
  },
  {
    icon: '🥛',
    title: 'Laktoseintoleranz bei Zöliakie',
    desc: 'Viele Kinder vertragen nach der Diagnose auch keine Milch mehr. Was dahinter steckt und warum das oft nur vorübergehend ist.',
    href: '/wissen/laktoseintoleranz-kinder',
    tag: 'Gesundheit',
  },
  {
    icon: '✅',
    title: 'Welche Lebensmittel sind glutenfrei?',
    desc: 'Die große Übersicht – was ist von Natur aus erlaubt, was ist tabu, und wo versteckt sich Gluten wo man es nicht erwartet.',
    href: '/wissen/glutenfreie-lebensmittel',
    tag: 'Grundlagen',
  },
];

export default function WissenPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'var(--green-deep)',
        color: 'var(--white)',
        padding: '3.5rem 0 3rem',
      }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> › Wissen
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.75rem' }}>Zöliakie verstehen</h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '580px', fontSize: '1.05rem' }}>
            Was Eltern nach der Diagnose wirklich wissen müssen – von den Grundlagen bis zum Alltag.
          </p>
        </div>
      </section>

      {/* Themen */}
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {themen.map(({ icon, title, desc, href, tag }) => (
              <Link key={href} href={href} className="card card-link">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.75rem' }}>{icon}</span>
                  <span className="tag">{tag}</span>
                </div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.05rem' }}>{title}</h3>
                <p style={{ margin: 0, fontSize: '0.875rem' }}>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
