'use client';

import { useState } from 'react';
import Link from 'next/link';

const TAG = 'waschtls-schmankerl-21';
const amz = (asin: string) => `https://www.amazon.de/dp/${asin}/?tag=${TAG}`;

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
    title: 'Mehle',
    emoji: '🌾',
    produkte: [
      {
        name: 'Das Mehl Glutenfrei – für Pizza',
        desc: 'Das Mehl das wir für neapolitanische Pizza verwenden. Ergibt einen elastischen Teig der sich gut von Hand ausbreiten lässt – auch mit dem Ooni ein Ergebnis das sich sehen lassen kann.',
        bezugsquellen: 'Online (Amazon) – in normalen Supermärkten selten erhältlich. Preisvergleich lohnt sich.',
        link: amz('B0G59X5BLP'),
        internerLink: '/rezepte/pizza-glutenfrei',
        internerLinkLabel: 'Zum Pizza-Rezept',
      },
      {
        name: 'Schär Mix It Universal – für Spätzle, Waffeln & Pfannkuchen',
        desc: 'Unser meistgenutztes Mehl. Funktioniert für alles was einen flüssigen oder halbfesten Teig braucht: Spätzle, Waffeln, Pfannkuchen, Pancakes, Fladen. Enthält bereits Xanthan.',
        bezugsquellen: 'dm, Rewe, Edeka, Kaufland, Rossmann – lokal meist günstiger als auf Amazon. Im 1 kg-Beutel kaufen wenn möglich.',
        link: amz('B00RCOCU00'),
      },
      {
        name: 'Schär Mix Patisserie – für Kuchen, Muffins & Brownies',
        desc: 'Für feines Backwerk: Muffins, Kuchen, Brownies, Kekse. Ergibt eine zartere Struktur als das Mix It Universal – lohnt sich für Rezepte wo Textur wichtig ist.',
        bezugsquellen: 'dm, Rewe, Edeka – lokal günstiger. Manchmal auch bei Aldi/Lidl als Sonderposten.',
        link: amz('B00SYDK2LM'),
      },
      {
        name: 'Schär Mix B / Mix Pane – für Brot, Hefeteig & Brötchen',
        desc: 'Das Mehl das wir für Hefeteig-Rezepte verwenden: Laugenbrezeln, Focaccia, Hotdog-Brötchen, Hamburgerbrötchen. Gibt eine festere Kruste und guten Biss.',
        bezugsquellen: 'dm, Rewe, Edeka, Kaufland – lokal meist günstiger als auf Amazon. Im Großpack kaufen wenn regelmäßig gebacken wird.',
        link: amz('B00SYDAG36'),
        internerLink: '/rezepte/laugenbrezeln-glutenfrei',
        internerLinkLabel: 'Zum Laugenbrezeln-Rezept',
      },
      {
        name: 'Mandelmehl (blanchiert)',
        desc: 'Für besonders saftige Kuchen – macht den Schokoladenkuchen zum Star. Von Natur aus glutenfrei und eiweißreich.',
        bezugsquellen: 'Bioladen, Reformhaus, Rewe/Edeka Bio-Regal. Online oft günstiger in größeren Mengen (500 g+).',
        link: `https://www.amazon.de/s?k=mandelmehl+blanchiert+glutenfrei&tag=${TAG}`,
      },
    ],
  },
  {
    title: 'Brot & Paniermehl',
    emoji: '🍞',
    produkte: [
      {
        name: 'Schär Weißbrot / Toast',
        desc: 'Für French Toast, Semmelknödel und alles wo Weißbrot im Rezept steht. Hält beim Einweichen gut die Form – besser als die meisten anderen GF-Brote.',
        bezugsquellen: 'dm, Rewe, Edeka, Kaufland – lokal oft günstiger. Kühl lagern, hält nicht so lange wie normales Brot.',
        link: amz('B0F38LBN47'),
        internerLink: '/rezepte/french-toast',
        internerLinkLabel: 'Zum French Toast-Rezept',
      },
      {
        name: 'Schär Semmelbrösel glutenfrei',
        desc: 'Für Schnitzel, Chicken Nuggets und Fleischküchle. Glutenfreies Paniermehl hat weniger Bindung – fest andrücken und sofort in die heiße Pfanne.',
        bezugsquellen: 'dm, Rewe, Edeka – lokal suchen lohnt sich, oft deutlich günstiger als online.',
        link: amz('B01LF16XB2'),
        internerLink: '/rezepte/schnitzel-kartoffelbrei',
        internerLinkLabel: 'Zum Schnitzel-Rezept',
      },
    ],
  },
  {
    title: 'Nudeln & Pasta',
    emoji: '🍝',
    produkte: [
      {
        name: 'Barilla Glutenfrei Spaghetti',
        desc: 'Kommen dem Original am nächsten – gute Konsistenz, kein Kleben wenn al dente gekocht. Unser Favorit für Bolognese.',
        bezugsquellen: 'Rewe, Edeka, Kaufland – meist im normalen Nudelregal und lokal günstiger als online.',
        link: `https://www.amazon.de/s?k=barilla+glutenfrei+spaghetti&tag=${TAG}`,
        internerLink: '/rezepte/spaghetti-bolognese',
        internerLinkLabel: 'Zum Bolognese-Rezept',
      },
      {
        name: 'Reisnudeln (verschiedene Formen)',
        desc: 'Am ähnlichsten zu normalen Nudeln – Kinder merken kaum einen Unterschied. Nicht zu lang kochen, werden sonst matschig.',
        bezugsquellen: 'Rewe, Edeka, Kaufland, dm, Bioladen – fast überall erhältlich und lokal günstiger.',
        link: `https://www.amazon.de/s?k=reisnudeln+glutenfrei&tag=${TAG}`,
      },
    ],
  },
  {
    title: 'Küche & Zubehör',
    emoji: '🍳',
    produkte: [
      {
        name: 'Ooni Koda – Pizzaofen',
        desc: 'Unser Pizzaofen – macht glutenfreie Pizza zu einem echten Erlebnis. Erreicht über 430 °C, backt eine Pizza in 60–90 Sekunden. GF-Teig verträgt die hohe Hitze gut und bekommt einen authentischen Rand.',
        bezugsquellen: 'Amazon, ooni.com (manchmal mit Aktionen), große Gartenmärkte. Stationär bei Weber-Händlern.',
        link: amz('B0F4Y33QDW'),
        internerLink: '/rezepte/pizza-glutenfrei',
        internerLinkLabel: 'Zum Pizza-Rezept',
      },
      {
        name: 'Braun Multigrill mit Waffelplatten',
        desc: 'Unser Waffeleisen – Wechselplatten für Kontaktgrill und Waffeln in einem Gerät. Gleichmäßige Hitzeverteilung ist entscheidend damit glutenfreie Waffeln auch innen durchbacken.',
        bezugsquellen: 'MediaMarkt, Saturn, Expert, Kaufland – Preisvergleich lohnt sich, lokal oft günstiger.',
        link: amz('B0DFYY8VGL'),
        internerLink: '/rezepte/waffeln-klassisch',
        internerLinkLabel: 'Zum Waffeln-Rezept',
      },
      {
        name: 'Toasttaschen (wiederverwendbar)',
        desc: 'Glutenfreies Brot in eine Toasttasche stecken und im normalen Toaster toasten – keine Kreuzverunreinigung durch Krümel, kein Extra-Gerät.',
        bezugsquellen: 'dm, Rossmann, Kaufland – lokal fast immer günstiger als online.',
        link: `https://www.amazon.de/s?k=toasttaschen+wiederverwendbar&tag=${TAG}`,
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
        bezugsquellen: 'dm, Rossmann, Rewe, Edeka – lokal kaufen, Preise variieren stark.',
        link: `https://www.amazon.de/s?k=glutenfreie+kekse+kinder&tag=${TAG}`,
      },
      {
        name: 'Reiswaffeln ohne Salz',
        desc: 'Der zuverlässige Snack für jede Situation. Auf das GF-Logo achten – nicht alle Reiswaffeln sind zertifiziert glutenfrei.',
        bezugsquellen: 'Überall: Rewe, Edeka, dm, Aldi, Lidl – hier ist lokal immer günstiger.',
        link: `https://www.amazon.de/s?k=reiswaffeln+glutenfrei+ohne+salz&tag=${TAG}`,
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
        link: `https://www.amazon.de/s?k=zöliakie+buch+ratgeber&tag=${TAG}`,
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

          <div style={{
            padding: '0.5rem 0.75rem', marginBottom: '0.875rem',
            background: 'rgba(149,213,178,0.08)',
            border: '1px solid rgba(149,213,178,0.25)',
            borderRadius: '8px', fontSize: '0.8rem', color: 'var(--text-mid)', lineHeight: 1.65,
          }}>
            <span style={{ fontWeight: 700, color: 'var(--green-deep)', marginRight: '0.35rem' }}>📍 Wo kaufen:</span>
            {bezugsquellen}
          </div>

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
          Alle Empfehlungen basieren auf eigener Erfahrung. <strong>Schär-Produkte und die meisten GF-Artikel gibt es im Supermarkt, dm oder Reformhaus – oft günstiger als auf Amazon.</strong> Amazon ist praktisch für größere Mengen oder wenn etwas lokal nicht zu finden ist. Affiliate-Links sind mit „Anzeige" gekennzeichnet – für dich entstehen keine Mehrkosten.
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
            * Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Links sind als „Anzeige" gekennzeichnet.
            Ich empfehle nur Produkte die ich selbst kenne und für gut befunden habe.
          </p>
        </div>
      </div>
    </section>
  );
}
