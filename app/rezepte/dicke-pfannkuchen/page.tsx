import RecipeLayout from '@/app/components/RecipeLayout';

export const metadata = {
  title: 'Dicke Pfannkuchen (American Pancakes) glutenfrei – Waschtls Schmankerl',
  description: 'Fluffige, dicke Pancakes – glutenfrei und in 20 Minuten fertig. Mit Erdbeeren, Blaubeeren und Ahornsirup der perfekte Sonntagsmorgen.',
};

export default function DickePfannkuchenPage() {
  return (
    <RecipeLayout
      title="Dicke Pfannkuchen"
      kat="Frühstück"
      badges={[
        { type: 'golden', label: '👶 kleinkindtauglich' },
        { type: 'mint', label: '☀️ Sonntagsfrühstück' },
      ]}
      tagline="Nicht die dünnen, die man zusammenrollt – sondern die dicken, fluffigen, die man aufeinander stapelt. Mit glutenfreiem Mehl werden sie genauso luftig wie das Original. Erdbeeren, Blaubeeren, Puderzucker, Ahornsirup. Fertig ist der beste Sonntagmorgen."
      useCases={['Sonntagsfrühstück', 'Kindergeburtstag-Buffet', 'Brunch', 'Dessert']}
      minuten={20}
      portionen="8–10 Pancakes"
      schwierigkeit="Einfach"
      infoBox="Dicke Pancakes brauchen Backpulver für den Auftrieb. Glutenfreies Mehl funktioniert hier gut – wichtig ist, den Teig nicht zu lange zu rühren (Klümpchen sind okay) und die Pfanne nicht zu heiß zu machen."
      zutaten={[
        '200 g glutenfreies Mehl (Schär Mix It oder Mix B)',
        '2 TL Backpulver (GF)',
        '1 EL Zucker',
        '1 Prise Salz',
        '2 Eier (Gr. M)',
        '200 ml Milch (oder Hafermilch)',
        '2 EL Butter, geschmolzen',
        '1 TL Vanilleextrakt',
        '— Zum Servieren —',
        'Erdbeeren, Blaubeeren',
        'Puderzucker, Ahornsirup',
      ]}
      zubereitung={[
        'Trockene Zutaten (Mehl, Backpulver, Zucker, Salz) in einer Schüssel mischen.',
        'In einer zweiten Schüssel: Eier verquirlen, Milch, geschmolzene Butter und Vanille dazugeben.',
        'Flüssiges zu Trockenem geben und nur kurz verrühren – es dürfen Klümpchen bleiben. Nicht übermixen, sonst werden die Pancakes zäh.',
        'Teig 5 Minuten ruhen lassen.',
        'Beschichtete Pfanne bei mittlerer Hitze erhitzen (nicht zu heiß!). Einen Klecks Butter oder Öl hinein.',
        'Je 2–3 EL Teig pro Pancake hineingeben. Sobald die Oberfläche Blasen bildet und die Ränder fest werden (ca. 2 Min.), wenden.',
        'Weitere 1–2 Minuten backen, bis die Unterseite goldbraun ist.',
        'Warm halten im Ofen bei 80 °C oder sofort servieren.',
      ]}
      naehrwerte={{ kalorien: 165, kohlenhydrate: 24, protein: 5, fett: 5, ballaststoffe: 1 }}
      tipps={[
        'Mittlere Hitze ist entscheidend: zu heiß = außen verbrannt, innen roh. Die Pfanne sollte nach dem Einbuttern nicht rauchen.',
        'Den Teig nicht zu dünn machen – er soll dickflüssig sein. Dann werden die Pancakes automatisch dick und fluffig.',
        'Für Kleinkinder: ohne Zucker, als Finger-Food mit weichen Früchten anbieten.',
        'Reste lassen sich gut einfrieren und im Toaster aufwärmen.',
      ]}
      affiliate={undefined}
      warenkundeLink={{ label: 'Welches glutenfreie Mehl wofür – die große Übersicht', href: '/wissen/welches-mehl-wofuer' }}
      prev={{ title: 'Waffeln (klassisch)', href: '/rezepte/waffeln-klassisch' }}
      next={{ title: 'Granola', href: '/rezepte/granola' }}
    />
  );
}
