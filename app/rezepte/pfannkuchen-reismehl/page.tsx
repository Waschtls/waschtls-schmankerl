import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Glutenfreie Pfannkuchen aus Reismehl – Waschtls Schmankerl',
  description: 'Fluffige Pfannkuchen aus Reismehl – glutenfrei, schnell gemacht und bei Kindern genauso beliebt wie das Original.',
};

export default function PfannkuchenReismehl() {
  return (
    <RecipeLayout
      title="Pfannkuchen aus Reismehl"
      kat="Frühstück"
      badges={[
        { type: 'golden', label: '🥞 Sonntagsklassiker' },
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="Hauchdünn, goldbraun, kein Unterschied zum Original – versprochen. Mit feinem Reismehl und dem richtigen Verhältnis gelingen sie ab dem ersten Versuch."
      useCases={['🌞 Sonntagsfrühstück', '👶 Kleinkind', '⏱ Unter 25 Min', '🍓 Süß oder herzhaft']}
      minuten={25}
      portionen={4}
      einheit="Portionen"
      schwierigkeit="Einfach"
      warum="Kein Unterschied zum Original – der Sonntagsklassiker, einfach mit Reismehl. Gelingt ab dem ersten Versuch, Kinder können mithelfen."
      zutaten={[
        '200 g Reismehl (fein gemahlen)',
        '2 Eier (Größe M)',
        '300 ml Milch (oder Haferdrink GF)',
        '1 Prise Salz',
        '1 TL Vanillezucker (optional)',
        'Butter oder Kokosöl zum Braten',
      ]}
      naehrwerte={{ kalorien: 220, kohlenhydrate: 38, protein: 7, fett: 5, ballaststoffe: 1 }}
      zubereitung={[
        'Reismehl, Salz und Vanillezucker in einer Schüssel mischen.',
        'Eier aufschlagen und zur Mehlmischung geben, gut verrühren.',
        'Milch nach und nach einrühren bis ein glatter, dünnflüssiger Teig entsteht. Mindestens 10 Minuten quellen lassen.',
        'Eine beschichtete Pfanne auf mittlere Hitze erhitzen, etwas Butter darin schmelzen.',
        'Eine Kelle Teig in die Pfanne geben, schwenken bis der Boden bedeckt ist.',
        '2–3 Minuten backen bis die Ränder leicht braun werden, dann wenden.',
        'Weitere 1–2 Minuten backen. Mit Ahornsirup, frischen Beeren oder Apfelmus servieren.',
      ]}
      tipps={[
        'Den Teig etwas dicker lassen als bei normalen Pfannkuchen – Reismehl braucht etwas mehr Bindung.',
        '1 EL Tapiokastärke dazu gibt dem Pfannkuchen mehr Elastizität – empfohlen.',
        'Teig 10 Minuten ruhen lassen damit das Reismehl quillt – wichtig für die Konsistenz.',
        'Für herzhafte Variante: Vanillezucker weglassen, Salz erhöhen und mit Käse und Schinken füllen.',
      ]}
      affiliate={{ text: 'Feines Reismehl zertifiziert glutenfrei kaufen – im Reformhaus, dm oder online.' }}
      warenkundeLink={{ label: 'Welches Mehl wofür? Reismehl erklärt', href: '/wissen/welches-mehl-wofuer' }}
      relatedRecipes={[
        { title: 'Pfannkuchen (klassisch)', slug: 'pfannkuchen-klassisch', emoji: '🫓', time: '25 Min.' },
        { title: 'Waffeln (klassisch)', slug: 'waffeln-klassisch', emoji: '🧇', time: '25 Min.' },
        { title: 'French Toast', slug: 'french-toast', emoji: '🍞', time: '20 Min.' },
      ]}
    />
  );
}
