import { MetadataRoute } from 'next';

const BASE = 'https://www.waschtls-schmankerl.de';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const rezepte = [
    'apfel-zimt-baked-oats',
    'apfel-zimt-porridge',
    'pfannkuchen-klassisch',
    'pfannkuchen-reismehl',
    'french-toast',
    'waffeln-klassisch',
    'dicke-pfannkuchen',
    'granola',
    'nudeln-mit-tomatensauce',
    'kuerbisrisotto',
    'rindergulasch',
    'spaghetti-bolognese',
    'fleischkuechle',
    'chicken-nuggets-selbstgemacht',
    'reiberdatschi-kartoffelpuffer',
    'schnitzel-kartoffelbrei',
    'kaesspatzen',
    'veganes-chili',
    'quark-gemuese-fladen',
    'flammkuchen-ofenpfannkuchen',
    'pizza-glutenfrei',
    'bananenmuffins',
    'energiebaellchen',
    'frozen-banana-bites',
    'milchreis-kokos',
    'schokoladenkuchen-mandelmehl',
    'brownies-schokolade',
    'zwetschgendatschi',
    'grundrezept-hefeteig-suess',
    'semmelknoedel',
    'laugenbrezeln-glutenfrei',
    'hotdog-broetchen',
    'hamburger-broetchen',
    'italienische-focaccia',
    'bananenbrot-nutella',
    'lebkuchen-plaetzchen',
    'protein-bagel',
  ];

  const wissen = [
    'erstdiagnose',
    'gluten-versteckte-quellen',
    'schule-kita',
    'kreuzkontamination',
    'kindern-erklaeren',
    'was-ist-zoeliakiie',
    'diagnose-kinder',
    'welches-mehl-wofuer',
    'xanthan-flohsamenschalen',
    'laktoseintoleranz-kinder',
    'glutenfreie-lebensmittel',
    'naehrstoffe',
    'ernaehrung-grundlagen',
    'geburtstage',
    'reisen',
    'produkte-einkauf',
  ];

  return [
    // Startseite
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    // Hauptseiten
    { url: `${BASE}/rezepte`,        lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/wissen`,         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/vorratskiste`,   lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/wochenplan`,     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/unterwegs`,      lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/aktuelles`,      lastModified: now, changeFrequency: 'weekly',  priority: 0.6 },
    { url: `${BASE}/ueber-uns`,      lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/kontakt`,        lastModified: now, changeFrequency: 'yearly',  priority: 0.4 },
    { url: `${BASE}/produkte`,       lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/faq`,            lastModified: now, changeFrequency: 'monthly', priority: 0.5 },

    // Rezept-Unterseiten
    { url: `${BASE}/rezepte/alle`,             lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/rezepte/nach-zutaten`,     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/rezepte/feste-geburtstage`,lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // Einzelne Rezepte
    ...rezepte.map(slug => ({
      url: `${BASE}/rezepte/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Wissen-Artikel
    ...wissen.map(slug => ({
      url: `${BASE}/wissen/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
