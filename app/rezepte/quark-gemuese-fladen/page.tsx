import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Glutenfreie Quark-Gemüse-Fladen – Waschtls Schmankerl',
  description: 'Saftige Quark-Fladen mit Paprika und Käse – hochprotein, glutenfrei und in 30 Minuten fertig.',
};

export default function QuarkGemuseFladen() {
  return (
    <RecipeLayout
      title="Quark-Gemüse-Fladen"
      kat="Abendessen"
      badges={[
        { type: 'mint', label: '💪 Hochprotein' },
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="Fluffig, herzhaft, hochprotein – und kein Kind merkt, dass kein Weizen drin ist. Belag nach Wunsch, schnell variierbar, in 30 Minuten auf dem Tisch."
      useCases={['🌆 Schnelles Abendessen', '🎒 Brotdose', '👶 Kleinkind', '💪 Highprotein']}
      minuten={30}
      portionen={9}
      einheit="Stücke"
      schwierigkeit="Einfach"
      warum="Fluffig, herzhaft, 30 Minuten – kein Kind merkt den Unterschied. Belag lässt sich beliebig variieren, Teig bleibt immer gleich."
      zutaten={[
        '300 g Magerquark',
        '2 Eier',
        '100 g Schär Mix It! (GF-Allzweckmehl)',
        '8 g Backpulver (glutenfrei)',
        '80 ml Wasser',
        'Italienische Kräuter, Salz',
        '— Belag',
        'ca. 130 g Paprika (gemischt)',
        'ca. 50 g Geflügelsalami',
        '100 g Reibekäse light',
      ]}
      naehrwerte={{ kalorien: 128, kohlenhydrate: 11, protein: 11, fett: 4, ballaststoffe: 1 }}
      zubereitung={[
        'Backofen auf 180 °C Ober-/Unterhitze vorheizen. Backblech mit Backpapier belegen.',
        'Quark, Eier, GF-Mehl, Backpulver, Wasser und Kräuter zu einem glatten Teig verrühren.',
        '9 Kleckse auf das Backblech geben und leicht flachdrücken (ca. 1 cm dick).',
        'Mit Paprikastreifen, Salami und Reibekäse belegen.',
        'Ca. 20 Minuten backen bis der Käse goldbraun ist.',
        'Kurz abkühlen lassen – sie lassen sich dann besser vom Papier lösen.',
      ]}
      tipps={[
        'Belag nach Belieben variieren – Zucchini, Oliven oder Tomaten funktionieren genauso.',
        'Süße Variante: Apfelscheiben + Zimt + etwas Honig statt Käse und Salami.',
        'Frisch am besten – am nächsten Tag kurz im Ofen aufwärmen.',
        'Für die Brotdose: komplett abkühlen lassen, dann einpacken.',
      ]}
      affiliate={{ text: 'Schär Mix It! Universal ist das Mehl für diese Fladen – erhältlich bei dm, Rewe und online.' }}
      warenkundeLink={{ label: 'Welches Mehl wofür?', href: '/wissen/welches-mehl-wofuer' }}
      relatedRecipes={[
        { title: 'Flammkuchen-Ofenpfannkuchen', slug: 'flammkuchen-ofenpfannkuchen', emoji: '🧀', time: '30 Min.' },
        { title: 'Protein-Bagel', slug: 'protein-bagel', emoji: '🥯', time: '30 Min.' },
        { title: 'Glutenfreie Pizza', slug: 'pizza-glutenfrei', emoji: '🍕', time: '45 Min.' },
      ]}
    />
  );
}
