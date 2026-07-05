import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Glutenfreie Lebkuchen-Plätzchen – Waschtls Schmankerl',
  description: 'Weiche, würzige Lebkuchen-Plätzchen zum Ausstechen – glutenfrei mit Schär Mix It!. Perfekt für die Weihnachtsbäckerei mit Kindern.',
};

export default function LebkuchenPlaetzchen() {
  return (
    <RecipeLayout
      title="Lebkuchen-Plätzchen (glutenfrei)"
      kat="Backen"
      badges={[
        { type: 'mint', label: '🎄 Weihnachten' },
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="Würzig, weich, hält die Form beim Ausstechen – ideal zum Verzieren mit Kindern. Mit Schär Mix It! genauso gut wie das Original, kein Unterschied zu merken."
      useCases={['🎄 Weihnachten', '🍪 Ausstechen', '👶 Kinder backen mit', '🎁 Verschenken']}
      minuten="ca. 40"
      portionen={24}
      einheit="Stücke"
      schwierigkeit="Einfach"
      zeitplan={[
        { label: 'Vorbereitung', value: '30 Min.', icon: '🥣' },
        { label: 'Kühlzeit', value: 'mind. 3 Std.', icon: '❄️' },
        { label: 'Backzeit', value: '10 Min./Blech', icon: '🔥' },
        { label: 'Gesamt', value: 'ca. 4 Std.', icon: '⏱' },
      ]}
      warum="Hält exakt die Form beim Backen – ideal zum Ausstechen und Verzieren. Teig 3 Tage im Kühlschrank haltbar, fertige Plätzchen eine Woche in der Dose."
      infoBox="Wichtig: Der Teig braucht mindestens 3 Stunden Kühlzeit. Am besten abends ansetzen und am nächsten Tag ausstechen – dann ist der Teig perfekt fest."
      zutaten={[
        '— Trockene Zutaten',
        '420 g Schär Mix It! Universal',
        '2 TL Ingwer, gemahlen',
        '1 TL Zimt, gemahlen',
        '½ TL Nelken, gemahlen',
        '½ TL Muskatnuss, gemahlen',
        '1 TL feines Meersalz',
        '½ TL Backpulver',
        '— Feuchte Zutaten',
        '110 g Butter (zimmerwarm, ungesalzen)',
        '150 g brauner Zucker',
        '170 g Zuckerrübensirup',
        '1 Ei (L)',
        '2 TL Vanilleextrakt',
        '— Zum Verzieren',
        'Royal Icing (Puderzucker + Eiweiß + Zitronensaft)',
        'Puderzucker zum Ausrollen',
      ]}
      naehrwerte={{ kalorien: 135, kohlenhydrate: 23, protein: 2, fett: 5, ballaststoffe: 1 }}
      zubereitung={[
        'Mehl, Gewürze, Salz und Backpulver in einer Schüssel verquirlen und beiseite stellen.',
        'Butter und braunen Zucker mit dem Handmixer 2–3 Min. cremig schlagen.',
        'Zuckerrübensirup, Ei und Vanilleextrakt dazugeben, weitere 2 Min. rühren. Die Masse sieht anfangs geronnen aus – das ist normal.',
        'Mehlmischung portionsweise einrühren bis kein Mehl mehr zu sehen ist.',
        'Teig auf Backpapier zu einer flachen Scheibe formen, einwickeln und mindestens 3 Std. (oder über Nacht) im Kühlschrank kühlen.',
        'Backofen auf 175 °C Ober-/Unterhitze vorheizen, zwei Bleche mit Backpapier belegen.',
        'Arbeitsfläche und Nudelholz mit Puderzucker (kein Mehl) bestäuben, Teig ca. 5–6 mm dick ausrollen.',
        'Formen ausstechen, auf die Bleche legen (2–3 cm Abstand). Restlichen Teig im Kühlschrank lassen.',
        '9–11 Min. backen bis die Mitte nicht mehr glänzt. Nicht zu lange – sie werden beim Abkühlen noch fester.',
        '5 Min. auf dem Blech abkühlen lassen, dann auf ein Gitter umsetzen. Erst wenn vollständig ausgekühlt verzieren.',
      ]}
      tipps={[
        'Puderzucker statt Mehl zum Ausrollen verhindert Ankleben ohne den Teig zu trocken zu machen.',
        'Zuckerrübensirup (dm, Aldi, Rewe) gibt den typischen süddeutschen Lebkuchen-Geschmack. Wer es intensiver mag: Melasse aus dem Reformhaus.',
        'Royal Icing trocknet hart und ist ideal für Transport und Verschenken.',
        'Teig bis zu 3 Tage im Kühlschrank, fertige Plätzchen bis 1 Woche in der Dose.',
      ]}
      affiliate={{ text: 'Schär Mix It! Universal ist das Mehl für dieses Rezept – enthält bereits Xanthan. Bei dm, Rewe und online erhältlich.' }}
      warenkundeLink={{ label: 'Welches Mehl wofür? Schär Mix It! & Co.', href: '/wissen/welches-mehl-wofuer' }}
      relatedRecipes={[
        { title: 'Bananenbrot mit Nutella', slug: 'bananenbrot-nutella', emoji: '🍌', time: '60 Min.' },
        { title: 'Brownies', slug: 'brownies-schokolade', emoji: '🍫', time: '40 Min.' },
      ]}
    />
  );
}
