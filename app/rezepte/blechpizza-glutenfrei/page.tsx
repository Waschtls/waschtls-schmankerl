import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Glutenfreie Blechpizza – 4 Bleche | Waschtls Schmankerl',
  description: 'Glutenfreie Blechpizza – Teig gemeinsam gehen lassen, dann teilen und mit dem Edelstahlroller ausrollen. 210 °C, 15–20 Minuten. Einfacher als die runde Variante.',
};

export default function Blechpizza() {
  return (
    <RecipeLayout
      title="Blechpizza glutenfrei"
      kat="Abendessen"
      badges={[
        { type: 'golden', label: '🍕 Freitagsklassiker' },
        { type: 'golden', label: '👶 kleinkindtauglich' },
        { type: 'mint',   label: '👨‍👩‍👧 für die ganze Familie' },
      ]}
      tagline="Der einfachere Weg zur glutenfreien Pizza: Teig als Ganzes gehen lassen, dann portionieren und ausrollen. Kein Ooni nötig – gelingt im normalen Backofen perfekt."
      useCases={['🍕 Freitagsabend', '👨‍👩‍👧 Familie', '🎉 Kindergeburtstag', '❄️ Einfrieren & Vorrat']}
      portionen={4}
      einheit="Bleche (à ca. 30×40 cm)"
      minuten={30}
      schwierigkeit="Einfach"
      warum="Bei der Blechpizza geht der Teig als eine große Portion – das ist einfacher zu handhaben als viele einzelne Ballen. Danach aufteilen und portionsweise mit dem Teigroller ausrollen. Packpapier auf die Arbeitsfläche und GF-Mehl drauf verhindert Ankleben ohne dass der Teig reißt. Im Normalofen bei 210 °C – kein Hochtemperatur-Gerät nötig."
      infoBox="Fertige ausgerollte Böden auf dem Backpapier einfrieren – einfach mit Belag belegen und direkt aus dem Gefrierfach in den vorgeheizten Ofen schieben."
      zutaten={[
        '— Teig (für 4 Bleche)',
        '1320 g glutenfreies Mehl (z. B. Schär Mix B oder Mix Pane)',
        '1122 g Wasser (lauwarm, ca. 30 °C)',
        '26 g Salz',
        'Olivenöl (zum Kneten – nach Bedarf)',
        '— Hefe (Trockenhefe, je nach Gehzeit)',
        '5 g → heute Abend backen (4–6 Std. Raumtemperatur)',
        '3 g → 8–12 Std.',
        '1 g → 24 Std. oder länger im Kühlschrank',
        '— Belag (gesamt für alle 4 Bleche)',
        '640 ml passierte Tomaten',
        'Salz, Oregano',
        '800 g Mozzarella (Fior di Latte oder gerieben)',
        'Belag nach Wahl: Salami, Schinken, Paprika, Champignons …',
      ]}
      zubereitung={[
        'Mehl, Hefe und Salz trocken mischen.',
        'Wasser zugeben und mit dem Knethaken der Küchenmaschine auf mittlerer Stufe kneten. Nach und nach Olivenöl hinzufügen. Insgesamt 8–10 Minuten kneten bis der Teig glatt und homogen ist.',
        'Den gesamten Teig in einer leicht geölten Schüssel abdecken und gehen lassen (Gehzeit je nach Hefemenge, s. Zutaten).',
        'Nach der Gehzeit: Teig auf eine bemehlte Fläche geben und in 4 gleiche Portionen teilen (ca. 620 g pro Stück).',
        'Backblech mit Backpapier auslegen. Packpapier auf die Arbeitsfläche legen, mit GF-Mehl (Reismehl oder Maismehl) bestäuben.',
        'Jede Portion auf dem bemehlten Packpapier mit dem Edelstahl-Teigroller ausrollen – von der Mitte nach außen, gleichmäßig dünn. Dicke ca. 3–4 mm. Die einstellbaren Ringe am Teigroller helfen dabei, überall gleich dick zu bleiben.',
        'Ausgerollten Boden vorsichtig auf das Backblech heben (Packpapier kann direkt mitgebacken werden).',
        'Ofen auf 210 °C Ober-/Unterhitze vorheizen.',
        'Pizzaboden dünn mit passierten Tomaten bestreichen, salzen und mit Oregano würzen. Mozzarella und Belag nach Wahl drauf.',
        'Im vorgeheizten Ofen 15–20 Minuten backen bis der Rand goldbraun und der Käse blasig ist.',
      ]}
      naehrwerte={{ kalorien: 390, kohlenhydrate: 64, protein: 12, fett: 10, ballaststoffe: 3 }}
      tipps={[
        'Packpapier statt Backpapier auf der Arbeitsfläche: klebt weniger an als Frischhaltefolie und lässt sich leichter anheben.',
        'GF-Teig ist klebriger als normaler Hefeteig – ruhig großzügig mit Mehl bestäuben. Zu wenig Mehl = Teig reißt beim Anheben.',
        'Einstellbarer Teigroller: die abnehmbaren Ringe geben gleichmäßige Dicke vor – damit wird der Boden überall gleich dünn und bäckt gleichmäßig durch.',
        'Nicht zu viel Belag: Blechpizza neigt schneller zu matschigen Stellen als die runde Variante. Tomatensauce und Käse dünn auftragen.',
        'Alle Beläge auf Glutenfreiheit prüfen: Salami, Schinken und Fertigsaucen können Gluten enthalten.',
        'Vorbacken möglich: Boden 8–10 Min. vorbacken, abkühlen lassen, einfrieren. Dann nach Bedarf belegen und fertig backen – 12–15 Min. aus dem Gefrierfach.',
      ]}
      affiliate={{ text: 'Schär Mix B oder Mix Pane ergibt eine gute Struktur für Blechpizza. Den einstellbaren Edelstahl-Teigroller findest du in unseren Produkt-Empfehlungen.' }}
      warenkundeLink={{ label: 'Welches Mehl wofür? Reismehl & Stärken erklärt', href: '/wissen/welches-mehl-wofuer' }}
      relatedRecipes={[
        { title: 'Neapolitanische Pizza', slug: 'pizza-glutenfrei', emoji: '🍕', time: '30 Min.' },
        { title: 'Flammkuchen-Ofenpfannkuchen', slug: 'flammkuchen-ofenpfannkuchen', emoji: '🧀', time: '30 Min.' },
        { title: 'Quark-Gemüse-Fladen', slug: 'quark-gemuese-fladen', emoji: '🥙', time: '30 Min.' },
      ]}
    />
  );
}
