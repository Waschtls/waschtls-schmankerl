import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Glutenfreie Pizza mit knusprigem Boden – Waschtls Schmankerl',
  description: 'Glutenfreie Pizza mit Reismehl-Tapioka-Boden – knusprig, lecker und perfekt für den Freitagsabend mit Kindern.',
};

export default function Pizza() {
  return (
    <RecipeLayout
      title="Glutenfreie Pizza"
      kat="Abendessen"
      badges={[
        { type: 'golden', label: '🍕 Freitagsklassiker' },
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="Knuspriger Boden aus Reismehl und Tapioka – der Freitagsabend-Klassiker, endlich glutenfrei. Der Teig gelingt zuverlässig, kein Spezialmix nötig."
      useCases={['🍕 Freitagsabend', '👨‍👩‍👧 Familie', '👶 Kleinkind', '🎉 Kindergeburtstag']}
      minuten={45}
      portionen={4}
      einheit="Portionen"
      schwierigkeit="Einfach"
      warum="Kein Fertigmix nötig – Reismehl und Tapioka ergeben einen echten knusprigen Boden. Belag nach Wunsch, alle Zutaten im Supermarkt erhältlich."
      zutaten={[
        '— Pizzaboden (2 Pizzen)',
        '200 g Reismehl (fein)',
        '50 g Tapiokastärke',
        '1 TL Trockenhefe',
        '1 TL Salz',
        '1 TL Zucker',
        '150 ml lauwarmes Wasser',
        '2 EL Olivenöl',
        '1 TL Flohsamenschalen (optional, für Bindung)',
        '— Belag',
        '150 ml passierte Tomaten',
        'Oregano, Salz, Pfeffer',
        '150 g Mozzarella',
        'Nach Wahl: Schinken, Pilze, Paprika, Oliven',
      ]}
      naehrwerte={{ kalorien: 380, kohlenhydrate: 55, protein: 12, fett: 12, ballaststoffe: 2 }}
      zubereitung={[
        'Hefe mit Zucker im lauwarmen Wasser auflösen und 5 Minuten stehen lassen bis es schäumt.',
        'Reismehl, Tapioka, Salz (und Flohsamenschalen) mischen.',
        'Hefewasser und Olivenöl zu den trockenen Zutaten geben. Gut verkneten – der Teig ist etwas klebriger als normaler Pizzateig.',
        'Abgedeckt 30 Minuten an einem warmen Ort gehen lassen.',
        'Backofen auf 220 °C vorheizen (Umluft: 200 °C). Backblech mit Backpapier auslegen.',
        'Teig mit feuchten Händen oder bemehltem Nudelholz (GF-Mehl) auf das Backpapier drücken und formen.',
        '10 Minuten vorbacken bis der Boden leicht fest wird.',
        'Mit Tomatensauce bestreichen, belegen, Käse drauf.',
        'Weitere 10–12 Minuten backen bis der Käse blubbert und der Rand goldbraun ist.',
      ]}
      tipps={[
        'Für extra Knusprigkeit: Boden auf einem vorgeheizten Backstein oder umgedrehtem Backblech backen.',
        'Boden nach dem Vorbacken kurz wenden, dann belegen – macht die Unterseite besonders knusprig.',
        'Alle Beläge auf Glutenfreiheit prüfen – Salami, Schinken und Fertigsaucen können Gluten enthalten.',
        'Teig lässt sich roh einfrieren – Vorrat für spontane Pizzaabende anlegen.',
      ]}
      affiliate={{ text: 'Feines Reismehl und Tapiokastärke zertifiziert glutenfrei kaufen – im Reformhaus oder online.' }}
      warenkundeLink={{ label: 'Welches Mehl wofür? Reismehl & Stärken erklärt', href: '/wissen/welches-mehl-wofuer' }}
      relatedRecipes={[
        { title: 'Flammkuchen-Ofenpfannkuchen', slug: 'flammkuchen-ofenpfannkuchen', emoji: '🧀', time: '30 Min.' },
        { title: 'Quark-Gemüse-Fladen', slug: 'quark-gemuese-fladen', emoji: '🫓', time: '30 Min.' },
        { title: 'Italienische Focaccia', slug: 'italienische-focaccia', emoji: '🫓', time: '2 Std.' },
      ]}
    />
  );
}
