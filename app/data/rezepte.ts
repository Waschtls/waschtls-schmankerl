// ── Geteilte Rezept-Daten ─────────────────────────────────────────────────────
// Beide Seiten importieren hieraus:
//   • app/rezepte/page.tsx       (Übersicht mit Filtern)
//   • app/rezepte/alle/page.tsx  (A–Z-Liste, automatisch aktuell)
//
// Neues Rezept? Hier eintragen – fertig.

export type Rezept = {
  slug: string;
  title: string;
  desc: string;
  time: string;
  kat: string;
  tags: string[];
  emoji: string;
  image?: string;
  naturalGf: boolean;
  kleinkind: boolean;
  vegetarisch: boolean;
  vegan: boolean;
  zuckerfrei: boolean;
  milchfrei: boolean;
  eierfrei: boolean;
  todo?: boolean;
};

export const KAT_LABELS: Record<string, string> = {
  fruehstueck:      'Frühstück',
  mittagessen:      'Mittagessen',
  abendessen:       'Abendessen',
  backen:           'Backen & Kuchen',
  hefeteig:         'Brot & Hefeteig',
  snacks:           'Snacks',
  dessert:          'Dessert',
  grundrezepte:     'Grundrezepte',
  kindergeburtstag: 'Kindergeburtstag',
  saisonal:         'Saisonal',
};

export const REZEPTE: Rezept[] = [
  // ── Frühstück ──
  {
    slug: 'apfel-zimt-baked-oats',
    title: 'Apfel-Zimt Baked Oats',
    desc: 'Warmes Frühstück wie ein Mini-Crumble – 44 g Eiweiß, nur GF-Haferflocken.',
    time: '40 Min.', kat: 'fruehstueck', tags: ['snacks'],
    emoji: '🍎', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'protein-bagel',
    title: 'Protein-Bagel',
    desc: 'Quark-Teig, kein Hefe-Warten – 22 g Eiweiß pro Bagel.',
    time: '30 Min.', kat: 'fruehstueck', tags: ['hefeteig'],
    emoji: '🥯', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'pfannkuchen-klassisch',
    title: 'Pfannkuchen (klassisch)',
    desc: 'Mit Schär Mix It – hauchdünn, goldbraun, hält beim Wenden.',
    time: '25 Min.', kat: 'fruehstueck', tags: ['kindergeburtstag'],
    emoji: '🫓', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'pfannkuchen-reismehl',
    title: 'Pfannkuchen aus Reismehl',
    desc: 'Hauchdünn, goldbraun – kein Unterschied zum Original, nur mit feinem Reismehl.',
    time: '25 Min.', kat: 'fruehstueck', tags: ['kindergeburtstag'],
    emoji: '🥞', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'apfel-zimt-porridge',
    title: 'Apfel-Zimt-Porridge',
    desc: 'Cremig, warm, 10 Minuten – perfekt für den Schulmorgen.',
    time: '10 Min.', kat: 'fruehstueck', tags: [],
    emoji: '🍎', naturalGf: true, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: true,
  },
  {
    slug: 'french-toast',
    title: 'French Toast',
    desc: 'Goldbraun, vanillig – Frühstück und süßes Mittagessen in einem.',
    time: '20 Min.', kat: 'fruehstueck', tags: ['mittagessen', 'kindergeburtstag'],
    emoji: '🍞', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'waffeln-klassisch',
    title: 'Waffeln (klassisch)',
    desc: 'Knusprig, einfrierbar, mit jedem Waffeleisen – immer ein Erfolg.',
    time: '25 Min.', kat: 'fruehstueck', tags: ['dessert', 'kindergeburtstag'],
    emoji: '🧇', image: '/images/waffeln-klassisch.jpg', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'dicke-pfannkuchen',
    title: 'Pancakes',
    desc: 'Fluffige amerikanische Pancakes – glutenfrei, mit Früchten und Ahornsirup.',
    time: '20 Min.', kat: 'fruehstueck', tags: ['dessert', 'kindergeburtstag'],
    emoji: '🥞', image: '/images/dicke-pfannkuchen.jpg', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'granola',
    title: 'Schokoladen-Granola',
    desc: 'Knuspriges GF-Granola mit Kokosfett, Ahornsirup & Schokomus – hält 1 Woche.',
    time: '20 Min.', kat: 'fruehstueck', tags: ['snacks'],
    emoji: '🥣', image: '/images/granola.jpg', naturalGf: true, kleinkind: true,
    vegetarisch: true, vegan: true, zuckerfrei: false, milchfrei: true, eierfrei: true,
  },
  // ── Mittagessen ──
  {
    slug: 'rindergulasch',
    title: 'Rindergulasch',
    desc: 'Sämig, ohne Stärke – schmort sich von selbst. Zu Semmelknödeln ein Traum.',
    time: '2 Std.', kat: 'mittagessen', tags: ['abendessen'],
    emoji: '🥘', naturalGf: true, kleinkind: false,
    vegetarisch: false, vegan: false, zuckerfrei: true, milchfrei: true, eierfrei: true,
  },
  {
    slug: 'spaghetti-bolognese',
    title: 'Spaghetti Bolognese',
    desc: 'Der Familienklassiker – Soße einfrieren, Pasta frisch kochen.',
    time: '45 Min.', kat: 'mittagessen', tags: ['abendessen', 'kindergeburtstag'],
    emoji: '🍝', naturalGf: false, kleinkind: true,
    vegetarisch: false, vegan: false, zuckerfrei: true, milchfrei: true, eierfrei: true,
  },
  {
    slug: 'fleischkuechle',
    title: 'Fleischküchle',
    desc: 'Bayerische Frikadellen – saftig, würzig, einfrierbar.',
    time: '30 Min.', kat: 'mittagessen', tags: ['abendessen', 'kindergeburtstag'],
    emoji: '🍖', naturalGf: false, kleinkind: true,
    vegetarisch: false, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'chicken-nuggets-selbstgemacht',
    title: 'Chicken Nuggets (selbstgemacht)',
    desc: 'Aus dem Ofen, knuspriger als tiefgekühlt – Kindergeburtstagsgarant.',
    time: '30 Min.', kat: 'mittagessen', tags: ['kindergeburtstag'],
    emoji: '🐔', naturalGf: false, kleinkind: true,
    vegetarisch: false, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'reiberdatschi-kartoffelpuffer',
    title: 'Reiberdatschi',
    desc: 'Bayerische Kartoffelpuffer – von Natur aus GF, knusprig, mit Apfelmus.',
    time: '30 Min.', kat: 'mittagessen', tags: ['snacks', 'abendessen'],
    emoji: '🥔', image: '/images/reiberdatschi.jpg', naturalGf: true, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: true, milchfrei: true, eierfrei: false,
  },
  {
    slug: 'nudeln-mit-tomatensauce',
    title: 'Nudeln mit Tomatensauce',
    desc: 'Der Alltagsklassiker – mit Reisnudeln genauso lecker.',
    time: '25 Min.', kat: 'mittagessen', tags: ['abendessen'],
    emoji: '🍝', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: true, zuckerfrei: true, milchfrei: true, eierfrei: true,
  },
  {
    slug: 'kuerbisrisotto',
    title: 'Kürbisrisotto',
    desc: 'Cremig, herbstlich, von Natur aus glutenfrei.',
    time: '40 Min.', kat: 'mittagessen', tags: ['abendessen'],
    emoji: '🎃', naturalGf: true, kleinkind: false,
    vegetarisch: true, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: true,
  },
  // ── Abendessen ──
  {
    slug: 'quark-gemuese-fladen',
    title: 'Quark-Gemüse-Fladen',
    desc: 'Fluffig, herzhaft, hochprotein – mit Paprika, Salami und Käse.',
    time: '30 Min.', kat: 'abendessen', tags: ['snacks'],
    emoji: '🫓', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'flammkuchen-ofenpfannkuchen',
    title: 'Flammkuchen-Ofenpfannkuchen',
    desc: 'Quark-Basis, Schinken und Käse – wie ein Flammkuchen, nur einfacher.',
    time: '30 Min.', kat: 'abendessen', tags: ['snacks'],
    emoji: '🧀', naturalGf: false, kleinkind: true,
    vegetarisch: false, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'pizza-glutenfrei',
    title: 'Neapolitanische Pizza (glutenfrei)',
    desc: 'Echter Hefeteig, 8 Ballen à 310 g – mit dem Ooni oder Backofen.',
    time: '45 Min.', kat: 'abendessen', tags: ['hefeteig', 'kindergeburtstag'],
    emoji: '🍕', image: '/images/pizza-glutenfrei.jpg', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'schnitzel-kartoffelbrei',
    title: 'Schnitzel mit Kartoffelbrei',
    desc: 'Knusprig paniert, cremiger Brei – der Lieblings-Freitag.',
    time: '35 Min.', kat: 'abendessen', tags: ['mittagessen', 'kindergeburtstag'],
    emoji: '🥩', image: '/images/schnitzel-kartoffelbrei.jpg', naturalGf: false, kleinkind: true,
    vegetarisch: false, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'kaesspatzen',
    title: 'Kässpatzen',
    desc: 'Echtes bayerisches Schmankerl – mit Schär Mix It genauso cremig.',
    time: '40 Min.', kat: 'abendessen', tags: ['mittagessen'],
    emoji: '🧀', naturalGf: false, kleinkind: false,
    vegetarisch: true, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'veganes-chili',
    title: 'Veganes Chili con Carne',
    desc: 'Mit DM veganem Hack – herzhaft, sättigend, glutenfrei.',
    time: '35 Min.', kat: 'abendessen', tags: ['mittagessen'],
    emoji: '🌶', naturalGf: true, kleinkind: false,
    vegetarisch: true, vegan: true, zuckerfrei: true, milchfrei: true, eierfrei: true,
  },
  // ── Backen & Kuchen ──
  {
    slug: 'bananenbrot-nutella',
    title: 'Bananenbrot mit Nutella-Füllung',
    desc: 'Saftiger Kuchen mit Nutella-Kern – einfrierbar, für die Brotdose.',
    time: '60 Min.', kat: 'backen', tags: ['dessert', 'snacks'],
    emoji: '🍌', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'brownies-schokolade',
    title: 'Brownies (Schokolade)',
    desc: 'Saftig, dunkel, mit echter Schokolade – Kindergeburtstagsklassiker.',
    time: '40 Min.', kat: 'backen', tags: ['kindergeburtstag', 'dessert'],
    emoji: '🍫', naturalGf: false, kleinkind: false,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'zwetschgendatschi',
    title: 'Zwetschgendatschi',
    desc: 'Echter bayerischer Pflaumenkuchen – saisonal, auf Hefeteig.',
    time: '100 Min.', kat: 'backen', tags: ['saisonal', 'dessert', 'hefeteig'],
    emoji: '🍑', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'schokoladenkuchen-mandelmehl',
    title: 'Schokoladenkuchen (Mandelmehl)',
    desc: 'Der saftigste Schokokuchen – garantiert gelingend.',
    time: '50 Min.', kat: 'backen', tags: ['kindergeburtstag'],
    emoji: '🍫', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'lebkuchen-plaetzchen',
    title: 'Lebkuchen-Plätzchen',
    desc: 'Würzig, weich, hält die Form beim Ausstechen – ideal zum Verzieren mit Kindern.',
    time: '4 Std.', kat: 'backen', tags: ['saisonal', 'kindergeburtstag'],
    emoji: '🎄', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  // ── Brot & Hefeteig ──
  {
    slug: 'hotdog-broetchen',
    title: 'Hot Dog Brötchen',
    desc: 'Weich, luftig, einfrierbar – gleicher Teig wie die Hamburger Brötchen.',
    time: '2,5 Std.', kat: 'hefeteig', tags: ['snacks'],
    emoji: '🌭', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'hamburger-broetchen',
    title: 'Hamburger Brötchen',
    desc: 'Goldbraun, mit Sesam, einfrierbar – der Burger kann kommen.',
    time: '2,5 Std.', kat: 'hefeteig', tags: ['snacks'],
    emoji: '🍔', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'italienische-focaccia',
    title: 'Italienische Focaccia',
    desc: 'Luftig, knusprig, mit Knoblauchbutter und Parmesan – kein Kneten.',
    time: '2 Std.', kat: 'hefeteig', tags: ['abendessen', 'backen'],
    emoji: '🫓', naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'laugenbrezeln-glutenfrei',
    title: 'Laugenbrezeln (glutenfrei)',
    desc: 'Weich, salzig, original bayerisch – mit Natron-Lauge.',
    time: '2 Std.', kat: 'hefeteig', tags: ['backen', 'snacks'],
    emoji: '🥨', naturalGf: false, kleinkind: false,
    vegetarisch: true, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: false,
  },
  // ── Snacks & Brotdose ──
  {
    slug: 'bananenmuffins',
    title: 'Bananenmuffins (ohne Mehl)',
    desc: 'Nur 4 Zutaten, kein Zucker – perfekte Schulmause.',
    time: '30 Min.', kat: 'snacks', tags: ['kindergeburtstag'],
    emoji: '🧁', naturalGf: true, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: true, milchfrei: true, eierfrei: false,
  },
  {
    slug: 'energiebaellchen',
    title: 'Energiebällchen',
    desc: 'Ohne Backen, ohne Zucker – der Powerschnack.',
    time: '15 Min.', kat: 'snacks', tags: ['kindergeburtstag'],
    emoji: '🟤', naturalGf: true, kleinkind: true,
    vegetarisch: true, vegan: true, zuckerfrei: false, milchfrei: true, eierfrei: true,
  },
  // ── Desserts ──
  {
    slug: 'frozen-banana-bites',
    title: 'Frozen Banana Bites',
    desc: 'Eis ohne Eismaschine – Quark, Banane, Schokolade. Nur 83 kcal.',
    time: '15 Min. + 4h', kat: 'dessert', tags: ['snacks', 'kindergeburtstag'],
    emoji: '🍫', naturalGf: true, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: true,
  },
  {
    slug: 'milchreis-kokos',
    title: 'Kokos-Milchreis',
    desc: 'Cremig, leicht süß – macht sich fast von selbst.',
    time: '35 Min.', kat: 'dessert', tags: [],
    emoji: '🥥', naturalGf: true, kleinkind: true,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: true,
  },
  // ── Grundrezepte ──
  {
    slug: 'grundrezept-hefeteig-suess',
    title: 'Grundrezept: Süßer Hefeteig',
    desc: 'Die Basis für Zopf, Dampfnudeln, Schnecken und Zwetschgendatschi.',
    time: '90 Min.', kat: 'grundrezepte', tags: ['hefeteig', 'backen'],
    emoji: '🧑‍🍳', naturalGf: false, kleinkind: false,
    vegetarisch: true, vegan: false, zuckerfrei: false, milchfrei: false, eierfrei: false,
  },
  {
    slug: 'semmelknoedel',
    title: 'Semmelknödel',
    desc: 'Das bayerische Grundrezept – zu Gulasch, Braten, Pilzsoße.',
    time: '35 Min.', kat: 'grundrezepte', tags: ['mittagessen', 'abendessen'],
    emoji: '🥟', naturalGf: false, kleinkind: false,
    vegetarisch: true, vegan: false, zuckerfrei: true, milchfrei: false, eierfrei: false,
  },
];
