import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreie Produktempfehlungen – Waschtls Schmankerl',
  description:
    'Unsere ehrlichen Empfehlungen: Mehle, Nudeln, Snacks, Backzutaten und Küchenzubehör – was wir zuhause wirklich verwenden.',
};

const kategorien = [
  {
    title: 'Mehle & Backen',
    emoji: '🌾',
    produkte: [
      {
        name: 'Reismehl (fein gemahlen)',
        desc: 'Unser Allround-Mehl für Pfannkuchen, Waffeln und Kuchen. Wichtig: fein gemahlen kaufen.',
        link: 'https://www.amazon.de/s?k=reismehl+glutenfrei+fein+gemahlen&tag=waschtl-21',
      },
      {
        name: 'Mandelmehl (blanchiert)',
        desc: 'Für besonders saftige Kuchen. Macht den Schokoladenkuchen zum Star.',
        link: 'https://www.amazon.de/s?k=mandelmehl+blanchiert+glutenfrei&tag=waschtl-21',
      },
      {
        name: 'Glutenfreie Allzweck-Backmischung',
        desc: 'Wenn es schnell gehen muss – für Brot, Brötchen und Kuchen.',
        link: 'https://www.amazon.de/s?k=glutenfreie+backmischung+allzweck&tag=waschtl-21',
      },
    ],
  },
  {
    title: 'Nudeln & Pasta',
    emoji: '🍝',
    produkte: [
      {
        name: 'Reisnudeln (verschiedene Formen)',
        desc: 'Am ähnlichsten zu normalen Nudeln – Kinder merken kaum einen Unterschied.',
        link: 'https://www.amazon.de/s?k=reisnudeln+glutenfrei&tag=waschtl-21',
      },
      {
        name: 'Linsennudeln',
        desc: 'Mehr Eiweiß, leicht nussig – super für Kinder die mehr Proteine brauchen.',
        link: 'https://www.amazon.de/s?k=linsennudeln+glutenfrei&tag=waschtl-21',
      },
    ],
  },
  {
    title: 'Snacks & Unterwegs',
    emoji: '🍪',
    produkte: [
      {
        name: 'Glutenfreie Kekse (Kinderpackung)',
        desc: 'Immer in der Schultasche – für Geburtstage, Ausflüge, Notfälle.',
        link: 'https://www.amazon.de/s?k=glutenfreie+kekse+kinder&tag=waschtl-21',
      },
      {
        name: 'Reiswaffeln ohne Salz',
        desc: 'Der zuverlässige Snack für jede Situation – auch Kleinkinder lieben sie.',
        link: 'https://www.amazon.de/s?k=reiswaffeln+glutenfrei+ohne+salz&tag=waschtl-21',
      },
      {
        name: 'Glutenfreie Müsliriegel',
        desc: 'Für längere Ausflüge und Schulpausen.',
        link: 'https://www.amazon.de/s?k=glutenfreie+müsliriegel+kinder&tag=waschtl-21',
      },
    ],
  },
  {
    title: 'Küche & Zubehör',
    emoji: '🍳',
    produkte: [
      {
        name: 'Eigenes Sieb (feinmaschig)',
        desc: 'Pflicht! Eigenes Sieb für glutenfreie Nudeln – kein Teilen mit normalen Nudeln.',
        link: 'https://www.amazon.de/s?k=küchensieb+feinmaschig+edelstahl&tag=waschtl-21',
      },
      {
        name: 'Schneidebrett (eigenes für das Kind)',
        desc: 'Kreuzverunreinigung vermeiden – ein separates Brett für glutenfreie Zubereitung.',
        link: 'https://www.amazon.de/s?k=schneidebrett+antibakteriell+küche&tag=waschtl-21',
      },
    ],
  },
  {
    title: 'Bücher & Wissen',
    emoji: '📚',
    produkte: [
      {
        name: 'Zöliakie – Das Selbsthilfebuch',
        desc: 'Eines der besten deutschsprachigen Bücher – besonders nach der Erstdiagnose hilfreich.',
        link: 'https://www.amazon.de/s?k=zöliakie+buch+ratgeber&tag=waschtl-21',
      },
      {
        name: 'Glutenfreies Kochbuch für Kinder',
        desc: 'Für Kinder die selbst kochen wollen – mit einfachen Rezepten und bunten Bildern.',
        link: 'https://www.amazon.de/s?k=glutenfreies+kochbuch+kinder&tag=waschtl-21',
      },
    ],
  },
];

export default function ProdukteSeite() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> › Produkte
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Unsere Produktempfehlungen</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px' }}>
            Nur was wir selbst verwenden und für gut befunden haben. Keine Werbung ohne Überzeugung.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
            Affiliate-Links sind als „Anzeige" gekennzeichnet. Als Amazon-Partner verdienen wir an qualifizierten Verkäufen.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* Hinweisbox */}
          <div style={{
            marginBottom: '2.5rem', padding: '1rem 1.5rem',
            background: 'rgba(149,213,178,0.1)',
            border: '1.5px solid rgba(149,213,178,0.35)', borderRadius: '12px',
            fontSize: '0.875rem', color: 'var(--text-dark)', lineHeight: 1.75,
          }}>
            <strong>Hinweis:</strong> Alle Empfehlungen basieren auf unserer eigenen Erfahrung als glutenfreie Familie.
            Gleichartige Produkte anderer Hersteller sind natürlich genauso geeignet – schau einfach was in deinem Supermarkt,
            Bioladen oder Reformhaus verfügbar ist. Die mit „Anzeige" markierten Links sind Affiliate-Links zu Amazon:
            wir verdienen eine kleine Provision wenn du darüber kaufst, für dich entstehen <strong>keine Mehrkosten</strong>.
          </div>

          {kategorien.map(({ title, emoji, produkte }) => (
            <div key={title} style={{ marginBottom: '3rem' }}>
              <h2 style={{ marginBottom: '1.25rem' }}>{emoji} {title}</h2>
              <div className="grid-3">
                {produkte.map(({ name, desc, link }) => (
                  <div key={name} className="card" style={{ position: 'relative' }}>
                    <span className="affiliate-label">Anzeige</span>
                    <h4 style={{ marginBottom: '0.5rem', paddingRight: '3rem' }}>{name}</h4>
                    <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>{desc}</p>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="btn btn-golden"
                      style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
                    >
                      Auf Amazon →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginTop: '1rem' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
              * Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Die Links sind als „Anzeige" gekennzeichnet. Ich empfehle nur Produkte, die ich selbst kenne und für gut befunden habe.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
