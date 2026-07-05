import RecipeLayout from '../../components/RecipeLayout';

export const metadata = {
  title: 'Schokoladen-Granola (glutenfrei) | Waschtls Schmankerl',
  description: 'Knuspriges glutenfreies Granola mit Kokosfett, Ahornsirup und Schokomus – vegan, milchfrei, in 20 Minuten fertig. Perfekt mit Joghurt oder Skyr.',
};

export default function GranolaPage() {
  return (
    <RecipeLayout
      title="Schokoladen-Granola"
      kat="Frühstück"
      publishDate="2025"
      badges={[
        { type: 'mint', label: '🌱 Vegan' },
        { type: 'mint', label: 'ohne Spezialmehl' },
        { type: 'golden', label: '👶 Kleinkindgeeignet' },
      ]}
      tagline="Knuspriges Granola aus GF-Haferflocken, Kokosfett und Ahornsirup – verfeinert mit einem Löffel Schokomus. Hält problemlos eine Woche und macht das Frühstück zum Highlight."
      useCases={['Frühstück mit Joghurt', 'Snack pur', 'Mit Skyr & Früchten', 'Batch-Cooking']}
      heroImage="/images/granola.jpg"
      minuten={20}
      portionen={8}
      einheit="Portionen"
      schwierigkeit="Einfach"
      zeitplan={[
        { label: 'Vorbereitung', value: '5 Min.', icon: '🥣' },
        { label: 'Backzeit', value: '12 Min.', icon: '⏱' },
        { label: 'Abkühlen', value: '10 Min.', icon: '❄️' },
        { label: 'Gesamt', value: '~30 Min.', icon: '✅' },
      ]}
      warum="Selbstgemachtes Granola schlägt jedes Gekaufte – du weißt genau was drin ist, es ist vegan, milchfrei und glutenfrei. Die Schokolade macht es für Kinder unwiderstehlich."
      zutaten={[
        '300 g GF-Haferflocken (zertifiziert glutenfrei)',
        '30 g gehackte Mandeln',
        '— Nasse Zutaten',
        '100 g Kokosfett',
        '100 g Ahornsirup',
        '1 EL Schokomus (z.B. biop Zartbitter von DM)',
        '— Optional',
        'Kokosraspeln nach Belieben',
        'Prise Vanille gemahlen',
        'Prise Zimt',
      ]}
      zubereitung={[
        'Ofen auf 160 °C Umluft (180 °C Ober-/Unterhitze) vorheizen. Backblech mit Backpapier auslegen.',
        'Kokosfett, Ahornsirup und Schokomus in einem kleinen Topf bei niedriger Hitze schmelzen und glatt rühren.',
        'GF-Haferflocken, gehackte Mandeln und ggf. Kokosraspeln, Vanille und Zimt in einer großen Schüssel mischen.',
        'Die flüssige Schoko-Mischung über die trockenen Zutaten gießen und alles gründlich vermischen, bis jede Flocke überzogen ist.',
        'Gleichmäßig auf dem Backblech verteilen – eine dünne Schicht garantiert gleichmäßiges Knuspern.',
        'Ca. 12 Minuten backen, nach 6 Minuten einmal wenden. Das Granola sieht beim Herausnehmen noch weich aus – es wird beim Abkühlen knusprig.',
        'Vollständig auf dem Blech abkühlen lassen (ca. 10 Minuten), dann in luftdichte Gläser oder Tupper-Dosen umfüllen (z.B. Weckgläser von Ikea). Hält 1 Woche.',
      ]}
      naehrwerte={{
        kalorien: 310,
        kohlenhydrate: 34,
        protein: 5,
        fett: 17,
        ballaststoffe: 3,
      }}
      infoBox="Glutenfreie Haferflocken sind wichtig! Normale Haferflocken können durch Kreuzkontamination mit Weizen belastet sein. Achte auf die Aufschrift ‚glutenfrei' oder das durchgestrichene Ähren-Symbol."
      tipps={[
        'Nicht zu dunkel backen – lieber eine Minute früher rausnehmen, es knuspert beim Abkühlen nach.',
        'Schokomus-Alternativen: jedes vegane Nuss- oder Mandelmus funktioniert genauso.',
        'Für extra Crunch: nach dem Abkühlen noch 30 g Kakaonibs untermischen.',
        'Ideal zum Meal-Prep: doppelte Menge backen, hält locker 1–2 Wochen in einem verschlossenen Glas.',
        'Serviervorschlag: mit Joghurt oder Skyr und frischen Beeren – das Granola zieht etwas Feuchtigkeit auf und wird noch aromatischer.',
      ]}
      relatedRecipes={[
        { title: 'Apfel-Zimt Baked Oats', slug: 'apfel-zimt-baked-oats', emoji: '🍎', time: '40 Min.' },
        { title: 'Apfel-Zimt-Porridge', slug: 'apfel-zimt-porridge', emoji: '🍎', time: '10 Min.' },
        { title: 'Bananenmuffins', slug: 'bananenmuffins', emoji: '🧁', time: '30 Min.' },
      ]}
    />
  );
}
