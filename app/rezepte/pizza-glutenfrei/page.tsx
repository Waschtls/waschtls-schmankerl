import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Glutenfreie Neapolitanische Pizza – 8 Ballen | Waschtls Schmankerl',
  description: 'Glutenfreie Pizza im neapolitanischen Stil – 8 Ballen à 310 g, echter Hefeteig, mit dem Ooni gebacken. Ausgebreitet mit den Händen, kein Nudelholz.',
};

export default function Pizza() {
  return (
    <RecipeLayout
      title="Neapolitanische Pizza (glutenfrei)"
      kat="Abendessen"
      badges={[
        { type: 'golden', label: '🍕 Freitagsklassiker' },
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="Echter neapolitanischer Stil – nur mit den Händen ausbreiten, keine Teigrolle. Luftiger Rand, dünne Mitte, hohe Hitze. Mit dem Ooni geht das auch glutenfrei perfekt."
      useCases={['🍕 Freitagsabend', '👨‍👩‍👧 Familie', '🎉 Kindergeburtstag', '❄️ Einfrieren & Vorrat']}
      heroImage="/images/pizza-glutenfrei.jpg"
      minuten={30}
      portionen="8 Pizzen"
      schwierigkeit="Mittel"
      warum="Neapolitanische Pizza lebt von drei Dingen: langer Gehzeit, viel Hitze und dem Ausbreiten mit den Händen. Kein Nudelholz – das drückt die Luft raus. Glutenfreier Teig braucht etwas mehr Wasser und Olivenöl beim Kneten, damit er nicht klebt."
      infoBox="Rezept ergibt 8 Pizzaballen à 310 g. Nicht benötigte Ballen in der Pittaballen-Box oder in Frischhaltefolie einzeln einwickeln und einfrieren. Auftauen im Kühlschrank über Nacht."
      zutaten={[
        '— Teig (8 Ballen à 310 g)',
        '1.320 g glutenfreies Mehl (z. B. Schär Mix B oder Mix Pane)',
        '1.122 g Wasser (lauwarm, ca. 30 °C)',
        '26 g Salz',
        'Olivenöl (zum Kneten – nach Bedarf, ca. 40–50 g)',
        '— Trockenhefe je nach Gehzeit:',
        '5–6 g → heute Abend backen (4–6 Std. Raumtemperatur)',
        '3–4 g → 8–12 Std.',
        '1–2 g → 24 Std. oder länger im Kühlschrank',
        '— Belag pro Pizza',
        '80 ml passierte Tomaten',
        'Salz, Oregano',
        '100 g Mozzarella (Fior di Latte oder Büffelmozzarella)',
        'Frisches Basilikum, ein Schuss Olivenöl',
      ]}
      zubereitung={[
        'Mehl, Hefe und Salz trocken mischen.',
        'Wasser zugeben und mit dem Knethaken der Küchenmaschine auf mittlerer Stufe kneten. Nach und nach Olivenöl hinzufügen – das Öl dient als Gleitmittel, damit der Teig nicht an Händen und Schüssel klebt. Insgesamt 8–10 Minuten kneten bis der Teig glatt und homogen ist.',
        'Teig in einer leicht geölten Schüssel abgedeckt gehen lassen (Gehzeit laut Hefemenge, s. Zutaten).',
        'Nach der Gehzeit: Teig auf eine bemehlte Arbeitsfläche geben und in 8 gleiche Portionen à ca. 310 g teilen. Jeden Ballen rundwirken (falten und unter der Hand drehen) bis er eine glatte, straffe Oberfläche hat.',
        'Ballen in die Pittaballen-Box legen oder einzeln in Frischhaltefolie wickeln. 30–60 Minuten entspannen lassen.',
        'Nicht benötigte Ballen jetzt einfrieren.',
        'Ofen (oder Ooni) auf höchster Stufe vorheizen: Haushaltsbackofen mindestens 45 Min. bei 250–280 °C mit Backstein oder Pizzastahl. Ooni auf ca. 430–470 °C.',
        'Ballen auf einer bemehlten Fläche (Reismehl oder Maismehl) mit den Fingern flach drücken. Dann neapolitanisch ausbreiten: Pizza auf die Fingerknöchel legen und vorsichtig von innen nach außen dehnen – dabei den Rand stehen lassen. Nicht ziehen, sondern dehnen.',
        'Auf den Pizzaschieber legen, schnell belegen (Tomatensauce dünn, Mozzarella, Basilikum zum Schluss) und zügig in den Ofen schieben.',
        'Im Ooni: 60–90 Sekunden, dabei einmal wenden. Im Haushaltsbackofen: 10–13 Minuten bis der Rand goldbraun ist.',
      ]}
      naehrwerte={{ kalorien: 420, kohlenhydrate: 68, protein: 10, fett: 11, ballaststoffe: 3 }}
      tipps={[
        'Ooni: glutenfreier Teig verträgt die hohe Hitze gut – aber im Auge behalten, er kann schneller verbrennen als normaler Teig. Bei 430 °C und einmal wenden ist er perfekt.',
        'Ausbreiten will geübt sein: lieber beim ersten Mal etwas dicker lassen und ruhig formen. Wenn der Teig reißt, einfach zusammendrücken und neu anfangen.',
        'Pittaballen-Box: die flachen Plastikboxen aus dem Pizzeribedarf – ideal weil die Ballen nicht aneinander kleben und gleichmäßig gehen. Alternativ: jeden Ballen einzeln in Frischhaltefolie wickeln.',
        'Alle Beläge auf Glutenfreiheit prüfen: Salami, Schinken und Fertigsaucen können Gluten enthalten.',
        'Lange Gehzeit = mehr Geschmack: 24 h Kühlschrank mit 1–2 g Hefe macht den Teig deutlich aromatischer als kurze Gehzeit.',
      ]}
      affiliate={{ text: 'Schär Mix B oder Mix Pane sind unsere Mehle der Wahl für Pizzateig – gute Struktur und zuverlässiges Ergebnis.' }}
      warenkundeLink={{ label: 'Welches Mehl wofür? Reismehl & Stärken erklärt', href: '/wissen/welches-mehl-wofuer' }}
      relatedRecipes={[
        { title: 'Laugenbrezeln (glutenfrei)', slug: 'laugenbrezeln-glutenfrei', emoji: '🥨', time: '2 Std.' },
        { title: 'Italienische Focaccia', slug: 'italienische-focaccia', emoji: '🫓', time: '2 Std.' },
        { title: 'Flammkuchen-Ofenpfannkuchen', slug: 'flammkuchen-ofenpfannkuchen', emoji: '🧀', time: '30 Min.' },
      ]}
    />
  );
}
