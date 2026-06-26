'use client';

import { useState } from 'react';
import Link from 'next/link';

type Produkt = {
  name: string;
  desc: string;
  bezugsquellen: string;
  link: string;
  internerLink?: string;
  internerLinkLabel?: string;
};
type Kategorie = { title: string; emoji: string; produkte: Produkt[] };

const kategorien: Kategorie[] = [
  {
    title: 'Mehle & Backen',
    emoji: '🌾',
    produkte: [
      {
        name: 'Reismehl (fein gemahlen)',
        desc: 'Unser Allround-Mehl für Pfannkuchen, Waffeln und Kuchen. Wichtig: fein gemahlen kaufen, grobes Reismehl gibt sandige Ergebnisse.',
        bezugsquellen: 'Reformhaus, Bioladen (z.B. Basic, Denns), Rewe Bio, dm – oft im Backzutaten-Regal.',
        link: 'https://www.amazon.de/s?k=reismehl+glutenfrei+fein+gemahlen&tag=waschtl-21',
      },
      {
        name: 'Mandelmehl (blanchiert)',
        desc: 'Für besonders saftige Kuchen. Macht den Schokoladenkuchen zum Star – und ist von Natur aus eiweißreich.',
        bezugsquellen: 'Bioladen, Reformhaus, Rewe/Edeka Bio-Regal, Rossmann (Eigenmarke). Online oft günstiger in größeren Mengen.',
        link: 'https://www.amazon.de/s?k=mandelmehl+blanchiert+glutenfrei&tag=waschtl-21',
      },
      {
        name: 'Glutenfreie Allzweck-Backmischung',
        desc: 'Wenn es schnell gehen muss – für Brot, Brötchen und Kuchen. Schär Mix It! ist unsere Standardwahl. Wichtig: glutenfreier Teig immer mit Ober-/Unterhitze backen, nicht Umluft – Umluft trocknet ihn aus und macht die Kruste zu hart.',
        bezugsquellen: 'Rewe, Edeka, dm, Rossmann (alle führen Schär), Bioladen. Schär Mix It! gibt es auch direkt im Schär-Onlineshop.',
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
        desc: 'Am ähnlichsten zu normalen Nudeln – Kinder merken kaum einen Unterschied. Nicht zu lang kochen, werden sonst matschig.',
        bezugsquellen: 'Rewe, Edeka, Kaufland (glutenfrei-Regal), dm, Bioladen. Meist als Eigenmarke oder Schär.',
        link: 'https://www.amazon.de/s?k=reisnudeln+glutenfrei&tag=waschtl-21',
      },
      {
        name: 'Linsennudeln',
        desc: 'Mehr Eiweiß, leicht nussig – super für Kinder die mehr Proteine brauchen. Hält auch ohne Soße gut zusammen.',
        bezugsquellen: 'Bioladen, Rewe Bio, Edeka Bio, dm Bio-Regal. Manchmal auch bei Aldi/Lidl im Sortiment.',
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
        desc: 'Immer in der Schultasche – für Geburtstage, Ausflüge, Notfälle. Einzeln verpackt praktischer als große Packungen.',
        bezugsquellen: 'dm, Rossmann (Schär-Regal), Rewe, Edeka. Schär-Kekse gibt es inzwischen fast überall.',
        link: 'https://www.amazon.de/s?k=glutenfreie+kekse+kinder&tag=waschtl-21',
      },
      {
        name: 'Reiswaffeln ohne Salz',
        desc: 'Der zuverlässige Snack für jede Situation – auch Kleinkinder lieben sie. Auf das Logo achten, nicht alle Reiswaffeln sind zertifiziert GF.',
        bezugsquellen: 'Überall: Rewe, Edeka, dm, Rossmann, Kaufland, Aldi, Lidl. Auf die durchgestrichene Ähre achten.',
        link: 'https://www.amazon.de/s?k=reiswaffeln+glutenfrei+ohne+salz&tag=waschtl-21',
      },
      {
        name: 'Glutenfreie Müsliriegel',
        desc: 'Für längere Ausflüge und Schulpausen. Immer ein paar im Rucksack – dann ist die Raststätte kein Problem mehr.',
        bezugsquellen: 'dm (viele Eigenmarken), Rossmann, Bioladen, Rewe Bio. Nakd-Riegel z.B. bei dm und Rewe.',
        link: 'https://www.amazon.de/s?k=glutenfreie+müsliriegel+kinder&tag=waschtl-21',
      },
    ],
  },
  {
    title: 'Küche & Zubehör',
    emoji: '🍳',
    produkte: [
      {
        name: 'Toasttaschen',
        desc: 'Statt einen zweiten Toaster zu kaufen: glutenfreies Brot einfach in eine Toasttasche stecken und im normalen Toaster toasten. Keine Krümel-Kreuzverunreinigung, kein Extra-Gerät. Immer wieder verwendbar, einfach abwischen.',
        bezugsquellen: 'dm, Rossmann (Haushaltsabteilung), Kaufland, Real. Manchmal auch bei Aldi/Lidl als Aktionsartikel.',
        link: 'https://www.amazon.de/s?k=toasttaschen+wiederverwendbar&tag=waschtl-21',
      },
      {
        name: 'Eigenes Sieb (feinmaschig)',
        desc: 'Pflicht! Eigenes Sieb für glutenfreie Nudeln – kein Teilen mit normalen Nudeln, sonst Kreuzverunreinigung. Tipp: GF-Nudeln immer zuerst abschütten, dann erst die normalen.',
        bezugsquellen: 'Kaufland, Rewe, Edeka (Haushaltsabteilung), Ikea, Tchibo. Jedes Küchengeschäft hat feinmaschige Siebe.',
        link: 'https://www.amazon.de/s?k=küchensieb+feinmaschig+edelstahl&tag=waschtl-21',
      },
      {
        name: 'Schneidebrett (eigenes für das Kind)',
        desc: 'Ein separates Brett für glutenfreie Zubereitung – am besten in einer anderen Farbe damit es niemand aus Versehen nimmt.',
        bezugsquellen: 'Ikea (günstig, viele Farben), Kaufland, Tchibo, jedes Küchengeschäft.',
        link: 'https://www.amazon.de/s?k=schneidebrett+antibakteriell+küche&tag=waschtl-21',
      },
      {
        name: 'Airfryer (nur für glutenfreies)',
        desc: 'Unser Airfryer ist ausschließlich für glutenfreie Lebensmittel – die Heißluft verteilt Krümel überall im Gerät, ein einmaliger Kontakt reicht für eine Reaktion. Wer in einem Haushalt mit und ohne Gluten kocht: entweder nur GF drin, oder zwei separate Geräte.',
        bezugsquellen: 'MediaMarkt, Saturn, Kaufland (Haushaltsgeräte), Tchibo (wechselndes Sortiment), Expert. Oft günstiger als online.',
        link: 'https://www.amazon.de/s?k=airfryer+heißluftfritteuse&tag=waschtl-21',
        internerLink: '/produkte/airfryer',
        internerLinkLabel: 'Welches Modell? → Unser Airfryer-Vergleich',
      },
    ],
  },
  {
    title: 'Bücher & Wissen',
    emoji: '📚',
    produkte: [
      {
        name: 'Zöliakie – Das Selbsthilfebuch',
        desc: 'Eines der besten deutschsprachigen Bücher – besonders nach der Erstdiagnose hilfreich. Klar, verständlich, ohne Fachjargon.',
        bezugsquellen: 'Jede Buchhandlung (auch auf Bestellung), Thalia, Hugendubel, Büchereien zum Ausleihen.',
        link: 'https://www.amazon.de/s?k=zöliakie+buch+ratgeber&tag=waschtl-21',
      },
      {
        name: 'Glutenfreies Kochbuch für Kinder',
        desc: 'Für Kinder die selbst kochen wollen – mit einfachen Rezepten und bunten Bildern. Ab ca. 7 Jahren gut nutzbar.',
        bezugsquellen: 'Buchhandlung, Thalia, Hugendubel, Stadtbibliothek (zum Ausleihen).',
        link: 'https://www.amazon.de/s?k=glutenfreies+kochbuch+kinder&tag=waschtl-21',
      },
    ],
  },
];

function ProduktKarte({ name, desc, bezugsquellen, link, internerLink, internerLinkLabel }: Produkt) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      border: `1.5px solid ${open ? 'var(--green-mid)' : 'var(--border)'}`,
      borderRadius: '10px',
      overflow: 'hidden',
      background: '#fff',
      transition: 'border-color 0.15s',
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', textAlign: 'left',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '0.75rem', padding: '0.7rem 1rem',
          background: open ? 'rgba(45,106,79,0.04)' : 'none',
          border: 'none', cursor: 'pointer',
        }}
      >
        <span style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-dark)', lineHeight: 1.4 }}>
          {name}
        </span>
        <span style={{
          flexShrink: 0, fontSize: '0.6rem', color: 'var(--text-light)',
          display: 'inline-block', transition: 'transform 0.15s',
          transform: open ? 'rotate(180deg)' : 'none',
        }}>▼</span>
      </button>

      {open && (
        <div style={{ padding: '0.75rem 1rem 1rem', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-mid)', lineHeight: 1.7, margin: '0 0 0.75rem' }}>
            {desc}
          </p>

          {/* Bezugsquellen prominent */}
          <div style={{
            padding: '0.5rem 0.75rem', marginBottom: '0.875rem',
            background: 'rgba(149,213,178,0.08)',
            border: '1px solid rgba(149,213,178,0.25)',
            borderRadius: '8px', fontSize: '0.8rem', color: 'var(--text-mid)', lineHeight: 1.65,
          }}>
            <span style={{ fontWeight: 700, color: 'var(--green-deep)', marginRight: '0.35rem' }}>📍 Wo kaufen:</span>
            {bezugsquellen}
          </div>

          {/* Amazon sekundär */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer sponsored"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', color: 'var(--text-light)', textDecoration: 'none',
              }}
            >
              <span style={{
                fontSize: '0.6rem', padding: '0.1rem 0.35rem',
                background: 'rgba(231,111,81,0.08)', color: 'var(--terracotta)',
                border: '1px solid rgba(231,111,81,0.2)', borderRadius: '4px',
                fontWeight: 700, whiteSpace: 'nowrap',
              }}>Anzeige</span>
              Auch auf Amazon →
            </a>
            {internerLink && (
              <Link href={internerLink} style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--green-mid)', textDecoration: 'none' }}>
                {internerLinkLabel} →
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProdukteClient() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '820px' }}>

        <div style={{
          marginBottom: '2.5rem', padding: '0.875rem 1.25rem',
          background: 'rgba(149,213,178,0.1)',
          border: '1.5px solid rgba(149,213,178,0.35)', borderRadius: '12px',
          fontSize: '0.825rem', color: 'var(--text-mid)', lineHeight: 1.75,
        }}>
          Alle Empfehlungen basieren auf eigener Erfahrung. Gleichartige Produkte anderer Hersteller sind genauso geeignet –
          schau einfach was bei dir im Supermarkt, Bioladen oder Reformhaus verfügbar ist.
          Affiliate-Links zu Amazon sind mit „Anzeige" gekennzeichnet – für dich entstehen <strong>keine Mehrkosten</strong>.
        </div>

        {kategorien.map(({ title, emoji, produkte }) => (
          <div key={title} style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', color: 'var(--green-deep)' }}>
              {emoji} {title}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {produkte.map(p => (
                <ProduktKarte key={p.name} {...p} />
              ))}
            </div>
          </div>
        ))}

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem', marginTop: '0.5rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', lineHeight: 1.7 }}>
            * Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Die Links sind als „Anzeige" gekennzeichnet.
            Ich empfehle nur Produkte, die ich selbst kenne und für gut befunden habe.
          </p>
        </div>
      </div>
    </section>
  );
}
