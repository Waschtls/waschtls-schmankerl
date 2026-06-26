import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Glutenfreie Vorratskiste – Convenience-Produkte für Zöliakie-Familien',
  description:
    'Glutenfreie Fertigprodukte die wirklich funktionieren: Falafel, Gnocchi, Schlemmerfilet, TK-Pizza und mehr. Mit Nährwertinfos und ehrlichen Einschätzungen.',
};

type Produkt = {
  emoji: string;
  name: string;
  marke: string;
  status: 'gf' | 'check';
  statusText: string;
  sterne: number;
  desc: string;
  tipp: string;
  kaufen: string;
  naehrwerte?: string;
  amazonLink?: string;
};

type Sektion = {
  id: string;
  title: string;
  produkte: Produkt[];
};

const SEKTIONEN: Sektion[] = [
  {
    id: 'fixstarter',
    title: '⭐ Fixstarter',
    produkte: [
      {
        emoji: '🧆', name: 'Bio-Falafel', marke: 'dm dmBio',
        status: 'check', statusText: 'Kichererbsenbasiert – meist GF, Charge prüfen (Glutenspuren möglich).',
        sterne: 5,
        desc: 'Knusprige Falafel aus der Tiefkühltruhe – funktioniert hervorragend in der Pfanne oder im Backofen. Schnell, sättigend, die Kinder lieben sie.',
        tipp: 'Im Ofen bei 200 °C ca. 15 Min goldbraun – dazu Tzatziki aus GF-Jogurt. Auch kalt als Snack top.',
        kaufen: 'dm',
        naehrwerte: 'Pro 100 g ca. 200 kcal · 8 g Eiweiß · 20 g KH · enthält Sesam',
      },
      {
        emoji: '🥔', name: 'Gnocchi (getrocknet)', marke: 'Schär',
        status: 'gf', statusText: 'Offiziell glutenfrei zertifiziert.',
        sterne: 5,
        desc: 'Trockene Gnocchi von Schär – in 10 Minuten fertig, flauschig-weich, kein Geschmacksunterschied zum Original. Einer unserer Dauerbrenner.',
        tipp: 'In Butter mit Salbei anbraten bis leicht knusprig – schneller als jede Pasta. Oder mit pürierter Tomatensauce.',
        kaufen: 'Rewe, Edeka, dm, Online',
        naehrwerte: 'Pro 100 g ca. 355 kcal · 3 g Eiweiß · 79 g KH · laktosefrei',
        amazonLink: 'https://www.amazon.de/s?k=schär+gnocchi+glutenfrei&tag=waschtl-21',
      },
      {
        emoji: '🐟', name: 'Schlemmerfilet (Spinat-Käse)', marke: 'iglo',
        status: 'check', statusText: 'Nur die Spinat-Käse-Variante prüfen – nicht alle Schlemmerfilets sind GF. Rezeptur kann sich ändern.',
        sterne: 4,
        desc: 'Das Schlemmerfilet mit Spinat-Käse-Haube ist Notfall-Abendessen erster Klasse – 20 Minuten Ofen, dazu Reis oder Kartoffeln.',
        tipp: 'Immer das Etikett der aktuellen Charge kontrollieren. Wir kaufen nur die Spinat-Variante, nicht Béchamel.',
        kaufen: 'Rewe, Edeka, Kaufland, Aldi',
        naehrwerte: 'Pro 100 g ca. 130 kcal · 11 g Eiweiß · 3 g KH · enthält Milch, Fisch',
      },
      {
        emoji: '🥐', name: 'TK-Blätterteig', marke: 'Schär',
        status: 'gf', statusText: 'Glutenfrei zertifiziert.',
        sterne: 4,
        desc: 'Aus dem Tiefkühler – funktioniert fast wie normaler Blätterteig. Ideal für schnelle Tarts, Mini-Pizzas oder Käsestangen.',
        tipp: 'Mit Schinken und Käse zu Röllchen formen, einfrieren, bei Bedarf direkt in den Ofen. Perfekt für Geburtstage.',
        kaufen: 'Online, ausgewählte Rewe/Edeka, Reformhaus',
        naehrwerte: 'Pro 100 g ca. 370 kcal · 4 g Eiweiß · 38 g KH · enthält Milch, Ei',
        amazonLink: 'https://www.amazon.de/s?k=glutenfreier+blätterteig&tag=waschtl-21',
      },
      {
        emoji: '🍗', name: 'TK-Chicken Nuggets', marke: 'Schär / Rewe Bio',
        status: 'gf', statusText: 'Nur GF-gekennzeichnete Varianten kaufen – nicht alle TK-Nuggets sind GF!',
        sterne: 4,
        desc: 'Gibt es mittlerweile in guten GF-Ausführungen – Schär hat eine Version, einige Supermärkte führen GF-Nuggets in der Bio-Eigenmarke.',
        tipp: 'Aus der TK direkt in den Airfryer bei 180 °C, 12–14 Min – außen knusprig wie im Restaurant.',
        kaufen: 'Rewe Bio, Kaufland, Online',
        naehrwerte: 'Pro 100 g ca. 220 kcal · 14 g Eiweiß · 18 g KH · enthält Ei',
      },
    ],
  },
  {
    id: 'pizza',
    title: '🍕 Pizza & Fertiggerichte',
    produkte: [
      {
        emoji: '🍕', name: 'TK-Pizza', marke: 'Schär',
        status: 'gf', statusText: 'Glutenfrei zertifiziert.',
        sterne: 4,
        desc: 'Die Schär TK-Pizza ist wirklich gut – dünner Boden, ordentlicher Belag. Kein Vergleich zu billigen GF-Pizzen aus dem normalen Supermarkt.',
        tipp: 'Den Rand kurz vor Ende mit Olivenöl bepinseln – wird dann goldbraun statt blass.',
        kaufen: 'Rewe, Edeka, Online',
        naehrwerte: 'Pro Pizza (300 g) ca. 690 kcal · 28 g Eiweiß · 88 g KH · enthält Milch',
        amazonLink: 'https://www.amazon.de/s?k=schär+pizza+glutenfrei&tag=waschtl-21',
      },
      {
        emoji: '🥣', name: 'Fertig-Risotto / Reisgerichte', marke: 'verschiedene Bio-Marken',
        status: 'check', statusText: 'Etikett prüfen – Würzmischungen können Gluten enthalten.',
        sterne: 3,
        desc: 'Fertige Risottomischungen aus dem Bioladen sind oft glutenfrei und in 20 Minuten auf dem Tisch. Guter Kompromiss wenn keine Zeit zum Kochen ist.',
        tipp: 'Mit TK-Erbsen und einem Schuss Sahne aufpeppen – dann schmeckt es fast selbst gemacht.',
        kaufen: 'Bioladen, Rewe Bio, dm Bio',
        naehrwerte: 'Je nach Produkt ca. 330–380 kcal / 100 g · meist laktosefrei',
      },
      {
        emoji: '🐟', name: 'Fischstäbchen (glutenfrei)', marke: 'verschiedene',
        status: 'check', statusText: '⚠️ Standard-Fischstäbchen enthalten Weizenmehl! GF-Varianten explizit suchen.',
        sterne: 3,
        desc: 'GF-Fischstäbchen gibt es, man muss sie aber suchen. Zur Not selbst machen: Fischfilet in GF-Paniermehl wälzen und in Butter braten – 20 Minuten, deutlich besser.',
        tipp: 'Selbst gemacht: Seelachsfilet würfeln, in GF-Paniermehl (z.B. gemahlene Reiswaffeln) wälzen, in Butter braten.',
        kaufen: 'Reformhaus, vereinzelt Rewe Bio, Online',
        naehrwerte: 'Pro 100 g ca. 170 kcal · 13 g Eiweiß · 12 g KH · enthält Fisch, Ei',
      },
    ],
  },
  {
    id: 'saucen',
    title: '🫙 Saucen & Würzen',
    produkte: [
      {
        emoji: '🍅', name: 'Passierte Tomaten / Tomatensauce', marke: 'Mutti, Rewe Bio, dm Bio',
        status: 'gf', statusText: 'Passierte Tomaten sind von Natur aus glutenfrei. Fertige Saucen mit Würzmischungen prüfen.',
        sterne: 5,
        desc: 'Passierte Tomaten von Mutti oder als Bio-Eigenmarke sind unser schnellstes Grundgericht. In 10 Minuten zur vollwertigen Pasta-Sauce.',
        tipp: 'Zwiebel + Knoblauch andünsten, Tomaten rein, Oregano und Salz – fertig. Für Kinder eine Prise Zucker gegen die Säure.',
        kaufen: 'Überall (Rewe, Edeka, Lidl, Aldi, dm)',
        naehrwerte: 'Pro 100 g ca. 35 kcal · 1,5 g Eiweiß · 5 g KH · von Natur aus GF, laktosefrei, vegan',
      },
      {
        emoji: '🌿', name: 'Pesto (grün/rot)', marke: 'Barilla GF, Rewe Bio',
        status: 'check', statusText: 'Nicht alle Pestos sind GF – manche enthalten Hefe-Extrakt oder Stärke mit Gluten. Etikett prüfen.',
        sterne: 4,
        desc: 'Gutes GF-Pesto ist der schnellste Pasta-Begleiter. Barilla hat eine GF-Linie, einige Bio-Marken sind von Natur aus sauber.',
        tipp: 'Pesto + GF-Nudeln + Kirschtomaten + Parmesan = 10-Minuten-Abendessen das alle mögen.',
        kaufen: 'Rewe, Edeka, Bioladen',
        naehrwerte: 'Pro 100 g ca. 450 kcal · 5 g Eiweiß · 4 g KH · enthält Milch, Nüsse',
      },
      {
        emoji: '🫗', name: 'Tamari Sojasoße', marke: 'San-J, Kikkoman GF',
        status: 'gf', statusText: 'Tamari ist die GF-Alternative zu normaler Sojasoße – explizit GF-Version kaufen.',
        sterne: 5,
        desc: 'Normale Sojasoße enthält Weizen – Tamari nicht. Schmeckt fast identisch, ist aber sicher. Wir haben immer eine kleine Flasche im Rucksack.',
        tipp: 'Ideal fürs Restaurant mitgenommen – asiatisches Essen wird erst mit GF-Sojasoße wirklich genießbar.',
        kaufen: 'Bioladen, Rewe Bio, Reformhaus, Online',
        naehrwerte: 'Pro 100 ml ca. 60 kcal · 10 g Eiweiß · 5 g KH · enthält Soja',
        amazonLink: 'https://www.amazon.de/s?k=tamari+glutenfrei&tag=waschtl-21',
      },
      {
        emoji: '🥫', name: 'Hülsenfrüchte aus der Dose', marke: 'Rewe Bio, dm Bio, Alnatura',
        status: 'gf', statusText: 'Kichererbsen, Linsen, Bohnen aus der Dose sind von Natur aus glutenfrei.',
        sterne: 5,
        desc: 'Kichererbsen, Linsen und Kidneybohnen aus der Dose sind unser schnellstes GF-Protein. Abtropfen, kurz anbraten – fertig.',
        tipp: 'Kichererbsen in Olivenöl mit Paprikapulver und Salz rösten – 15 Min im Ofen, knusprig als Snack oder Salattopping.',
        kaufen: 'Überall – Rewe, Edeka, Lidl, Aldi, dm, Bioladen',
        naehrwerte: 'Kichererbsen pro 100 g ca. 120 kcal · 7 g Eiweiß · 14 g KH · laktosefrei, vegan',
      },
    ],
  },
  {
    id: 'brot',
    title: '🍞 Brot & Backwaren',
    produkte: [
      {
        emoji: '🍞', name: 'Toastbrot glutenfrei', marke: 'Schär',
        status: 'gf', statusText: 'Glutenfrei zertifiziert.',
        sterne: 4,
        desc: 'Das bekannteste GF-Toastbrot – weich, gut zu toasten, Grundausstattung in unserem Haushalt.',
        tipp: 'Tiefgekühlt kaufen und einzelne Scheiben direkt in den Toaster – hält sich viel länger und ist frischer.',
        kaufen: 'Rewe, Edeka, dm, Online',
        naehrwerte: 'Pro Scheibe (25 g) ca. 55 kcal · 1 g Eiweiß · 12 g KH · enthält Ei, Milchspuren',
        amazonLink: 'https://www.amazon.de/s?k=schär+toast+glutenfrei&tag=waschtl-21',
      },
      {
        emoji: '🥖', name: 'Brötchen (TK)', marke: 'Schär / Alnavit',
        status: 'gf', statusText: 'Glutenfrei zertifiziert.',
        sterne: 3,
        desc: 'TK-Brötchen aufbacken – funktioniert überraschend gut. Alnavit hat eine gute Sauerteig-Variante.',
        tipp: 'Abends antauen, morgens 10 Min bei 180 °C – schmeckt fast frisch gebacken.',
        kaufen: 'Online, Reformhaus, vereinzelt dm',
        naehrwerte: 'Pro Brötchen (60 g) ca. 145 kcal · 2 g Eiweiß · 30 g KH',
        amazonLink: 'https://www.amazon.de/s?k=glutenfreie+brötchen+tk&tag=waschtl-21',
      },
      {
        emoji: '🥞', name: 'Pancake-/Pfannkuchen-Mix', marke: 'Schär, Alnavit',
        status: 'gf', statusText: 'Glutenfrei zertifiziert – auf Fertigmixe aus dem normalen Backabteilung achten, die sind NICHT GF.',
        sterne: 4,
        desc: 'Für Sonntagsfrühstück ohne Aufwand. Die GF-Fertigmixe brauchen meist nur Milch und Ei – in 15 Minuten fertig.',
        tipp: 'Mit TK-Beeren (aufgetaut) und Ahornsirup – Kinder sind begeistert. Reste lassen sich einfrieren.',
        kaufen: 'Online, Reformhaus, dm (saisonal)',
        naehrwerte: 'Pro 100 g Mix ca. 360 kcal · 5 g Eiweiß · 75 g KH',
        amazonLink: 'https://www.amazon.de/s?k=glutenfreier+pancake+mix&tag=waschtl-21',
      },
    ],
  },
  {
    id: 'snacks',
    title: '🍪 Snacks & Unterwegs',
    produkte: [
      {
        emoji: '🫓', name: 'Reiswaffeln', marke: 'Rewe Bio, dm Bio, verschiedene',
        status: 'gf', statusText: 'Glutenfrei – aber Zertifizierungslogo beachten, nicht alle Marken sind zertifiziert.',
        sterne: 4,
        desc: 'Der GF-Snack schlechthin – überall erhältlich, kein Kind meckert. Mit Frischkäse, Erdnussbutter oder einfach pur.',
        tipp: 'Im Brotdosen-Notfall: Reiswaffel + Frischkäse + Gurke = fertig. Kein Kind fragt nach dem normalen Brot.',
        kaufen: 'Überall',
        naehrwerte: 'Pro Waffel (9 g) ca. 36 kcal · 0,7 g Eiweiß · 8 g KH · von Natur aus GF, vegan',
      },
      {
        emoji: '🌽', name: 'Tortilla Chips (Original)', marke: 'Chio, Rewe/Edeka Eigenmarke',
        status: 'check', statusText: 'Viele Chips sind von Natur aus GF, aber Würzmischungen können Gluten enthalten. Etikett prüfen.',
        sterne: 4,
        desc: 'Chio Tortilla Chips Original sind bei uns GF-bestätigt. Standardvorrat für Snack-Notfälle.',
        tipp: 'Dazu selbst gemachte Guacamole: 2 Avocados, Limette, Salz – 5 Minuten.',
        kaufen: 'Überall',
        naehrwerte: 'Pro 100 g ca. 460 kcal · 7 g Eiweiß · 60 g KH · von Natur aus GF',
      },
      {
        emoji: '🍫', name: 'Zartbitterschokolade (mind. 70%)', marke: 'Lindt, Ritter Sport Zartbitter, dm Bio',
        status: 'check', statusText: 'Reine Zartbitterschokolade ist meist GF – Milchschokolade und Pralinen immer prüfen.',
        sterne: 5,
        desc: 'Zartbitterschokolade ab 70% ist fast immer glutenfrei und ein zuverlässiger Notfall-Snack. Lindt Excellence ist bei uns dauerhaft zu Hause.',
        tipp: 'Für Kinder: Zartbitter-Stücke in selbst gemachte Kekse einbacken – kein Unterschied zu normaler Schokolade.',
        kaufen: 'Überall',
        naehrwerte: 'Pro 25 g ca. 135 kcal · 2 g Eiweiß · 12 g KH · enthält Milchspuren möglich',
      },
      {
        emoji: '🥜', name: 'Erdnussbutter (pur)', marke: 'dm Bio, Rewe Bio, Alnatura',
        status: 'gf', statusText: 'Reine Erdnussbutter ohne Zusätze ist glutenfrei – auf Zusatzstoffe/Würzungen achten.',
        sterne: 5,
        desc: 'Erdnussbutter ist unser Retter für leere Kühlschränke. Auf Reiswaffel, Brot oder als Dip für Gemüsesticks.',
        tipp: 'Bio-Varianten ohne Palmöl schmecken besser und sind meist länger haltbar. Immer 2 Gläser zu Hause.',
        kaufen: 'dm, Rewe Bio, Edeka Bio, Alnatura, Bioladen',
        naehrwerte: 'Pro 100 g ca. 600 kcal · 25 g Eiweiß · 12 g KH · enthält Erdnüsse',
      },
    ],
  },
  {
    id: 'fruehstueck',
    title: '🌅 Frühstück',
    produkte: [
      {
        emoji: '🌾', name: 'GF-Cornflakes / Reisflakes', marke: 'Schär, Rewe Bio, dm Bio',
        status: 'gf', statusText: 'Glutenfrei zertifiziert – normale Cornflakes enthalten Malzextrakt!',
        sterne: 4,
        desc: 'Normale Cornflakes enthalten Malzextrakt und sind NICHT glutenfrei. GF-Varianten von Schär oder Bio-Eigenmarken sind eine gute Alternative.',
        tipp: 'Mit laktosefreier Milch oder Hafermilch (GF-zertifiziert) servieren. Frische Beeren drauf – fertig.',
        kaufen: 'dm, Rewe Bio, Online',
        naehrwerte: 'Pro 100 g ca. 380 kcal · 6 g Eiweiß · 82 g KH · meist laktosefrei',
        amazonLink: 'https://www.amazon.de/s?k=glutenfreie+cornflakes&tag=waschtl-21',
      },
      {
        emoji: '🥣', name: 'GF-Müsli / Porridge-Mix', marke: 'Alnavit, Seitenbacher (GF), dm Bio',
        status: 'gf', statusText: 'Nur explizit GF-zertifiziertes Müsli kaufen – normale Haferflocken können Kreuzverunreinigung enthalten.',
        sterne: 4,
        desc: 'GF-Müsli oder Porridge-Mix für das schnelle Frühstück. Besonders Alnavit hat gute Mischungen.',
        tipp: 'Über Nacht mit Milch oder Joghurt quellen lassen – morgens fertig, keine Kochzeit. Mit Obst abrunden.',
        kaufen: 'Bioladen, dm, Reformhaus, Online',
        naehrwerte: 'Pro 100 g ca. 370 kcal · 8 g Eiweiß · 60 g KH · auf GF-Zertifizierung achten',
        amazonLink: 'https://www.amazon.de/s?k=glutenfreies+müsli&tag=waschtl-21',
      },
    ],
  },
];

function SterneBewertung({ n }: { n: number }) {
  return (
    <span style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
      {'⭐'.repeat(n)}{'☆'.repeat(5 - n)}
    </span>
  );
}

export default function VorratskistePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> › Vorratskiste
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.75rem' }}>⚡ Wenns mal schnell gehen muss</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', lineHeight: 1.75 }}>
            Nicht jeder Abend ist ein Kochabend. Das hier sind die glutenfreien Fertigprodukte die wirklich funktionieren –
            getestet in unserer Familie mit Zöliakie, ohne Marketing-Versprechen.
          </p>
          <div style={{
            marginTop: '1.25rem', padding: '0.75rem 1rem',
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '8px', maxWidth: '600px',
            fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7,
          }}>
            <strong style={{ color: 'rgba(255,255,255,0.65)' }}>⚠️ Wichtig:</strong>{' '}
            Rezepturen können sich ändern. Immer das aktuelle Etikett prüfen, auch bei Produkten die ihr kennt.
          </div>

          {/* Schnellnavigation */}
          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {SEKTIONEN.map(s => (
              <a key={s.id} href={`#${s.id}`} style={{
                padding: '0.35rem 0.85rem', borderRadius: '999px',
                border: '1px solid rgba(149,213,178,0.35)',
                fontSize: '0.78rem', color: 'var(--mint)', textDecoration: 'none',
                background: 'rgba(149,213,178,0.06)',
              }}>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>

          {SEKTIONEN.map(sektion => (
            <div key={sektion.id} id={sektion.id} style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.2rem', color: 'var(--green-deep)', marginBottom: '1.25rem', scrollMarginTop: '5rem' }}>
                {sektion.title}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {sektion.produkte.map(p => (
                  <div key={p.name} className="card" style={{ padding: '1.25rem 1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{p.emoji}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                          <h3 style={{ fontSize: '0.975rem', margin: 0, color: 'var(--text-dark)' }}>{p.name}</h3>
                          <span style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>{p.marke}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.3rem', flexWrap: 'wrap' }}>
                          <SterneBewertung n={p.sterne} />
                          <span style={{
                            fontSize: '0.65rem', padding: '0.1rem 0.5rem', borderRadius: '999px',
                            background: p.status === 'gf' ? 'rgba(45,106,79,0.1)' : 'rgba(233,196,106,0.2)',
                            color: p.status === 'gf' ? 'var(--green-mid)' : '#a87f00',
                            border: `1px solid ${p.status === 'gf' ? 'rgba(45,106,79,0.25)' : 'rgba(233,196,106,0.4)'}`,
                            fontWeight: 700,
                          }}>
                            {p.status === 'gf' ? '✅ Glutenfrei' : '⚠️ Etikett prüfen'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', margin: '0 0 0.75rem', fontStyle: 'italic', lineHeight: 1.55 }}>
                      {p.statusText}
                    </p>

                    <p style={{ fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.75, margin: '0 0 0.75rem' }}>
                      {p.desc}
                    </p>

                    {/* Nährwerte */}
                    {p.naehrwerte && (
                      <div style={{
                        padding: '0.45rem 0.75rem', marginBottom: '0.75rem',
                        background: 'rgba(45,106,79,0.05)', border: '1px solid rgba(45,106,79,0.12)',
                        borderRadius: '6px', fontSize: '0.75rem', color: 'var(--text-mid)',
                      }}>
                        <span style={{ fontWeight: 700, color: 'var(--green-deep)' }}>Nährwerte: </span>
                        {p.naehrwerte}
                      </div>
                    )}

                    {/* Tipp */}
                    <div style={{
                      padding: '0.6rem 0.875rem', marginBottom: '0.875rem',
                      background: 'rgba(233,196,106,0.08)', border: '1px solid rgba(233,196,106,0.25)',
                      borderRadius: '8px', fontSize: '0.825rem', color: 'var(--text-dark)', lineHeight: 1.65,
                    }}>
                      💡 <strong>Waschtls Tipp:</strong> {p.tipp}
                    </div>

                    {/* Kaufen + Amazon */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-mid)' }}>
                        📍 <strong>Wo kaufen:</strong> {p.kaufen}
                      </span>
                      {p.amazonLink && (
                        <a
                          href={p.amazonLink}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: 'var(--text-light)', textDecoration: 'none' }}
                        >
                          <span style={{
                            fontSize: '0.6rem', padding: '0.1rem 0.35rem',
                            background: 'rgba(231,111,81,0.08)', color: 'var(--terracotta)',
                            border: '1px solid rgba(231,111,81,0.2)', borderRadius: '4px', fontWeight: 700,
                          }}>Anzeige</span>
                          Auch auf Amazon →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Notfall-Vorrat Checkliste */}
          <div id="checkliste" style={{
            padding: '1.5rem', marginBottom: '3rem',
            background: 'var(--green-deep)', borderRadius: '14px',
            border: '2px solid var(--golden)',
          }}>
            <h2 style={{ color: 'var(--golden)', fontSize: '1.1rem', marginBottom: '1rem' }}>
              🧊 Unser Notfall-Vorrat (immer zu Hause)
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.4rem' }}>
              {[
                '🧆 dm Bio-Falafel (TK)',
                '🥔 Schär Gnocchi',
                '🐟 iglo Schlemmerfilet Spinat',
                '🥐 Schär TK-Blätterteig',
                '🍗 GF TK-Nuggets',
                '🍕 Schär TK-Pizza (×2)',
                '🍞 Schär Toastbrot (TK)',
                '🫓 Reiswaffeln',
                '🌽 Tortilla Chips',
                '🥫 Kichererbsen (Dose)',
                '🍅 Passierte Tomaten (×3)',
                '🫗 Tamari Sojasoße',
                '🥜 Erdnussbutter',
              ].map(item => (
                <div key={item} style={{ fontSize: '0.825rem', color: 'var(--mint)', padding: '0.2rem 0' }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div id="faq" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.15rem', color: 'var(--green-deep)', marginBottom: '1.25rem' }}>
              ❓ Häufige Fragen
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  frage: 'Warum sind normale Cornflakes nicht glutenfrei?',
                  antwort: 'Die meisten Cornflakes enthalten Gerstenmalzextrakt – das ist Gluten. Immer auf das GF-Symbol achten. Schär und einige Bio-Eigenmarken bieten sichere Varianten.',
                },
                {
                  frage: 'Kann ich normale Sojasoße verwenden?',
                  antwort: 'Nein – normale Sojasoße wird mit Weizen hergestellt. Tamari ist die GF-Alternative und schmeckt fast identisch. Explizit auf die GF-Kennzeichnung auf der Flasche achten.',
                },
                {
                  frage: 'Warum muss ich bekannte Produkte immer wieder prüfen?',
                  antwort: 'Hersteller ändern Rezepturen ohne große Ankündigung. Ein Produkt das letztes Jahr sicher war, kann heute eine andere Zutatenliste haben. Bei Zöliakie immer das aktuelle Etikett lesen – auch bei Produkten die ihr jahrelang verwendet habt.',
                },
                {
                  frage: 'Sind TK-Pommes glutenfrei?',
                  antwort: 'Reine TK-Pommes aus Kartoffeln sind von Natur aus glutenfrei – aber Würzpommes, Kartoffelwedges mit Gewürzmischung oder Pommes aus geteilten Frittierfett-Anlagen können problematisch sein. Im Supermarkt: reine Pommes ohne Würzung kaufen.',
                },
                {
                  frage: 'Was tue ich wenn das Lieblingsprodukt plötzlich nicht mehr GF ist?',
                  antwort: 'Beim Hersteller direkt nachfragen (Telefon oder E-Mail) – viele haben Verbraucherhotlines die konkrete Auskunft zu Rezepturänderungen geben. Alternativ: DZG-Produktliste konsultieren oder nach zertifizierten Alternativen suchen.',
                },
              ].map(({ frage, antwort }) => (
                <div key={frage} className="card" style={{ padding: '1.1rem 1.35rem' }}>
                  <h3 style={{ fontSize: '0.9rem', color: 'var(--green-deep)', marginBottom: '0.5rem' }}>{frage}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.75, margin: 0 }}>{antwort}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA zu Rezepten */}
          <div style={{
            padding: '1.5rem', borderRadius: '12px',
            background: 'rgba(149,213,178,0.1)', border: '1.5px solid rgba(149,213,178,0.3)',
            textAlign: 'center',
          }}>
            <p style={{ margin: '0 0 1rem', fontSize: '0.95rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>
              Wenn doch Zeit ist: unsere schnellen Rezepte zum Selbstkochen
            </p>
            <Link href="/rezepte" className="btn btn-golden">Zu den Rezepten →</Link>
          </div>

        </div>
      </section>
    </>
  );
}
