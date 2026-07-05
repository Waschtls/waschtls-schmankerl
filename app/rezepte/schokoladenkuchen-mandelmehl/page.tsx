import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Saftiger Schokoladenkuchen mit Mandelmehl – glutenfrei',
  description: 'Der saftigste glutenfreie Schokoladenkuchen – aus Mandelmehl, perfekt für Geburtstage und Sonntagskaffee.',
};

export default function Schokoladenkuchen() {
  return (
    <RecipeLayout
      title="Schokoladenkuchen (Mandelmehl)"
      kat="Backen"
      badges={[
        { type: 'mint', label: '🎂 Geburtstag' },
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="Saftig, schokoladig, glutenfrei – niemand merkt den Unterschied. Mandelmehl macht diesen Kuchen von Natur aus feucht, er bleibt 3–4 Tage frisch."
      useCases={['🎂 Geburtstag', '☕ Sonntagskaffee', '🎉 Kindergeburtstag', '📦 Vorbacken möglich']}
      minuten={50}
      portionen={12}
      einheit="Stücke"
      schwierigkeit="Einfach"
      warum="Mandelmehl macht diesen Kuchen von Natur aus saftig – bleibt 3–4 Tage frisch, ideal für Geburtstagskuchen die man einen Tag vorher backt."
      zutaten={[
        '200 g Mandelmehl (blanchiert)',
        '50 g Kakaopulver (ungesüßt)',
        '1 TL Backpulver (glutenfrei)',
        '½ TL Natron',
        '1 Prise Salz',
        '3 Eier (Größe L)',
        '150 g Zucker oder Kokosblütenzucker',
        '120 ml Pflanzenöl (neutral)',
        '100 ml heißes Wasser',
        '1 TL Vanilleextrakt',
        '— Glasur (optional)',
        '150 g dunkle Schokolade (glutenfrei)',
        '3 EL Sahne oder Kokosmilch',
      ]}
      naehrwerte={{ kalorien: 265, kohlenhydrate: 15, protein: 7, fett: 21, ballaststoffe: 3 }}
      zubereitung={[
        'Backofen auf 175 °C Ober-/Unterhitze vorheizen. Backform (26 cm) einfetten.',
        'Mandelmehl, Kakao, Backpulver, Natron und Salz in einer Schüssel mischen.',
        'In einer zweiten Schüssel Eier und Zucker schaumig schlagen (ca. 3 Minuten).',
        'Öl und Vanilleextrakt unterrühren.',
        'Trockene Zutaten unter die nasse Masse heben – nicht zu lange rühren.',
        'Heißes Wasser einrühren (macht den Teig fließfähiger, das ist gewollt).',
        'In die Form füllen und 35–40 Minuten backen. Stäbchenprobe machen.',
        'Vollständig abkühlen lassen vor der Glasur.',
        'Glasur: Schokolade hacken, mit heißer Sahne verrühren bis glatt, über den Kuchen gießen.',
      ]}
      tipps={[
        'Das Öl im Mandelmehl macht den Kuchen von selbst saftig – kein Austrocknen.',
        'Einen Tag vorher backen – er schmeckt am nächsten Tag sogar noch besser.',
        'Für Kindergeburtstage: mit bunten Streuseln dekorieren (auf GF-Kennzeichnung achten).',
        'Glasur optional – pur mit Puderzucker bestäubt auch wunderschön.',
      ]}
      affiliate={{ text: 'Blanchiertes Mandelmehl zertifiziert glutenfrei kaufen – im Reformhaus, dm oder online.' }}
      warenkundeLink={{ label: 'Mandelmehl & Co. – welches Mehl wofür?', href: '/wissen/welches-mehl-wofuer' }}
      relatedRecipes={[
        { title: 'Brownies', slug: 'brownies-schokolade', emoji: '🍫', time: '40 Min.' },
        { title: 'Bananenbrot mit Nutella', slug: 'bananenbrot-nutella', emoji: '🍌', time: '60 Min.' },
        { title: 'Lebkuchen-Plätzchen', slug: 'lebkuchen-plaetzchen', emoji: '🎄', time: '4 Std.' },
      ]}
    />
  );
}
