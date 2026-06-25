import { MetadataRoute } from 'next';

const BASE = 'https://www.waschtls-schmankerl.de';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const rezepte = [
    'apfel-zimt-porridge',
    'pfannkuchen-reismehl',
    'pfannkuchen-klassisch',
    'french-toast',
    'waffeln-klassisch',
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
    'pizza-glutenfrei',
    'bananenmuffins',
    'energiebaellchen',
    'milchreis-kokos',
    'schokoladenkuchen-mandelmehl',
    'brownies-schokolade',
    'zwetschgendatschi',
    'grundrezept-hefeteig-suess',
    'semmelknoedel',
    'laugenbrezeln-glutenfrei',
  ];

  const wissen = [
    'was-ist-zoeliakiie',
    'diagnose-kinder',
    'schule-kita',
    'welches-mehl-wofuer',
    'xanthan-flohsamenschalen',
    'kreuzkontamination',
    'laktoseintoleranz-kinder',
    'glutenfreie-lebensmittel',
    'naehrstoffe',
    'kindern-erklaeren',
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
    { url: `${BASE}/produkte`,       lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/wochenplan`,     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/aktuelles`,      lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE}/unterwegs`,      lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/ueber-uns`,      lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/faq`,            lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

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
