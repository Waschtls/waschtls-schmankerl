import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Apfelküchle glutenfrei – klassisches Schmalzgebäck | Waschtls Schmankerl',
  description: 'Glutenfreie Apfelküchle wie vom Jahrmarkt – Apfelscheiben in Ausbackteig, goldbraun ausgebacken, mit Puderzucker und Zimt. Ohne Rum, kinderfreundlich.',
};

export default function Apfelkuechle() {
  return (
    <RecipeLayout
      title="Apfelküchle (glutenfrei)"
      kat="Backen"
      badges={[
        { type: 'golden', label: '🍎 Bayerischer Klassiker' },
        { type: 'golden', label: '☕ Kaffee & Kuchen' },
        { type: 'mint',   label: '🎉 Kindergeburtstag' },
      ]}
      tagline="Apfelscheiben in fluffigem Ausbackteig – goldbraun in der Pfanne, mit Puderzucker bestäubt. Ein bayerischer Klassiker für die ganze Familie."
      useCases={['🍎 Herbst & Ernte', '🎉 Kindergeburtstag', '☕ Kaffee & Kuchen', '👨‍👩‍👧 Familienklassiker']}
      portionen={16}
      einheit="Küchler"
      minuten={30}
      schwierigkeit="Einfach"
      warum="Ausbackteig ist nichts anderes als Pfannkuchenteig – wer also schon glutenfreie Pfannkuchen gebacken hat, hat das Prinzip drauf. Der Teig muss etwas dicker sein als für normale Pfannkuchen, damit er an den Apfelscheiben haftet. Ohne Rum bleibt er für Kinder geeignet – der Geschmack kommt komplett vom Apfel und dem Zimt-Zucker."
      infoBox="Frisch aus der Pfanne schmecken sie am besten. Auf Küchenpapier abtropfen lassen damit sie nicht fettig werden."
      zutaten={[
        '— Teig',
        '150 g glutenfreies Mehl (z. B. Schär Mix It Universal)',
        '2 Eier',
        '150 ml Milch (oder Hafermilch)',
        '1 EL Zucker',
        '1 TL Backpulver',
        '1 Prise Salz',
        '— Äpfel',
        '3–4 mittelgroße Äpfel (z. B. Boskop oder Braeburn – säuerliche Sorten)',
        '— Ausbacken & Servieren',
        'Neutrales Öl mit Butter oder Butterschmalz zum Ausbacken (ca. 1–2 cm hoch in der Pfanne)',
        'Puderzucker zum Bestäuben',
        'Zimt nach Geschmack',
      ]}
      zubereitung={[
        'Mehl, Backpulver, Zucker und Salz in einer Schüssel mischen. Eier und Milch zugeben und zu einem glatten, etwas dickflüssigeren Teig rühren (dicker als Pfannkuchenteig – er soll an den Scheiben haften). 10 Minuten quellen lassen.',
        'Äpfel schälen, Kerngehäuse mit einem Apfelausstecher entfernen. In Scheiben à ca. 8–10 mm schneiden.',
        'Öl in einer Pfanne auf ca. 170–180 °C erhitzen. Temperaturtest: ein Holzlöffel ins Öl halten – es bilden sich sofort kleine Bläschen.',
        'Apfelscheiben durch den Teig ziehen, überschüssigen Teig leicht abstreifen.',
        'Portionsweise (3–4 Stück) ins heiße Öl legen. Ca. 2–3 Minuten pro Seite ausbacken bis sie goldbraun sind.',
        'Mit einer Gabel oder einem Schaumlöffel herausnehmen und auf Küchenpapier abtropfen lassen.',
        'Sofort mit Puderzucker und Zimt bestäuben und warm servieren.',
      ]}
      naehrwerte={{ kalorien: 320, kohlenhydrate: 52, protein: 7, fett: 9, ballaststoffe: 4 }}
      tipps={[
        'Teig etwas dicker als Pfannkuchenteig: er soll an der Scheibe haften und nicht abtropfen – bei Bedarf noch 1–2 EL Mehl einrühren.',
        'Säuerliche Äpfel (Boskop, Braeburn, Elstar) halten besser die Form und geben mehr Geschmack als süße Sorten wie Golden Delicious.',
        'Öl-Temperatur ist entscheidend: zu kalt = fettig, zu heiß = Teig verbrennt außen bevor der Apfel weich ist. 170–180 °C ist ideal. Butter oder Butterschmalz gibt extra Geschmack – Temperatur dabei gut im Auge behalten, da Butter schneller verbrennt als reines Öl.',
        'Für Kleinkinder: etwas dünner schneiden und etwas länger backen damit der Apfel weicher wird.',
        'Vanillezucker statt normalen Zucker im Teig gibt eine extra Aromatiefe.',
        'Alle Zutaten auf Glutenfreiheit prüfen – auch Backpulver kann Spuren enthalten.',
      ]}
      affiliate={{ text: 'Schär Mix It Universal ist unser Lieblingsmehl für Ausbackteig und Pfannkuchen – ergibt einen geschmeidigen Teig ohne Körnung.' }}
      relatedRecipes={[
        { title: 'Pfannkuchen (klassisch)', slug: 'pfannkuchen-klassisch', emoji: '🥞', time: '25 Min.' },
        { title: 'Dicke Pancakes', slug: 'dicke-pfannkuchen', emoji: '🥞', time: '30 Min.' },
        { title: 'Waffeln klassisch', slug: 'waffeln-klassisch', emoji: '🧇', time: '30 Min.' },
      ]}
    />
  );
}
