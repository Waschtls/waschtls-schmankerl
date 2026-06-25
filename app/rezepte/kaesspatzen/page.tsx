import RecipeLayout from '@/app/components/RecipeLayout';

export const metadata = {
  title: 'Glutenfreie Kässpatzen | Waschtls Schmankerl',
  description: 'Echte bayerische Kässpatzen – mit Schär Mix It Mehl und Bergkäse. Genau so wie früher, nur glutenfrei.',
};

export default function KaesspatzenPage() {
  return (
    <RecipeLayout
      title="Kässpatzen"
      kat="Abendessen"
      badges={[
        { type: 'mint',   label: '🏔 Bayerisches Original' },
        { type: 'golden', label: '🧀 vegetarisch' },
      ]}
      tagline="Kasnockn, Kässpatzen, Kässpätzle – egal wie man sie nennt: dieses Gericht ist reine bayerische Seele. Glutenfrei mit Schär Mix It genauso cremig-käsig wie das Original."
      useCases={['Sonntag Mittag', 'Wenn Heimweh kommt', 'Schnelles Abendessen', 'Resteverwertung Käse']}
      minuten={40}
      portionen={4}
      schwierigkeit="Mittel"
      infoBox="Kässpatzen brauchen einen Spätzlehobel oder eine Spätzlepresse – ohne geht es technisch auch mit einem Löffel, aber das dauert. Der glutenfreie Teig ist etwas flüssiger als normaler Spätzleteig, das ist normal."
      zutaten={[
        '300 g Schär Mix It Universal (oder Mix C)',
        '4 Eier (Größe M)',
        '150 ml Wasser (kalt)',
        '1 TL Salz',
        '— Käse & Zwiebeln —',
        '300 g Bergkäse oder Emmentaler (frisch gerieben)',
        '2 große Zwiebeln',
        '2 EL Butter oder Butterschmalz',
        'Salz, Pfeffer',
        'Frischer Schnittlauch zum Servieren',
      ]}
      zubereitung={[
        'Mehl, Eier, Wasser und Salz in einer Schüssel mit dem Handrührer zu einem glatten, zähen Teig verarbeiten. 20 Minuten ruhen lassen.',
        'Zwiebeln in dünne Ringe schneiden. In Butter bei mittlerer Hitze langsam goldbraun rösten (ca. 15 Min.) – nicht hetzen, die Geduld lohnt sich.',
        'Salzwasser in einem großen Topf zum Kochen bringen. Spätzleteig portionsweise durch den Hobel oder die Presse direkt ins Wasser drücken.',
        'Sobald die Spatzen oben schwimmen (ca. 2–3 Min.), mit einer Schaumkelle herausnehmen und kurz kalt abschrecken.',
        'In einer ofenfesten Form abwechselnd Spatzen und Bergkäse schichten. Mit einer letzten Käseschicht abschließen.',
        'Im vorgeheizten Ofen bei 180 °C Umluft ca. 10 Minuten überbacken, bis der Käse blubbert.',
        'Mit Röstzwiebeln und Schnittlauch anrichten. Sofort servieren.',
      ]}
      naehrwerte={{ kalorien: 590, kohlenhydrate: 54, protein: 29, fett: 28, ballaststoffe: 2 }}
      tipps={[
        'Schär Mix It Universal gibt die beste Konsistenz – zu viel Reismehl allein macht die Spatzen zu fest.',
        'Den Teig wirklich 20 Minuten ruhen lassen – das Mehl quillt auf und der Teig wird bindiger.',
        'Für echte Alpenküche: Appenzeller statt Emmentaler – schärfer, nussiger.',
        'Reste am nächsten Tag in der Pfanne mit Butter anbraten – noch besser als frisch.',
      ]}
      affiliate={{ text: 'Schär Mix It Universal ist das Mehl das wir für Spätzle, Pfannkuchen und Grundteige empfehlen – auf zertifiziert glutenfreies Mehl achten.' }}
      warenkundeLink={{ label: 'Welches Mehl wofür? Reismehl, Mandelmehl & Co.', href: '/wissen/welches-mehl-wofuer' }}
      prev={{ title: 'Schnitzel mit Kartoffelbrei', href: '/rezepte/schnitzel-kartoffelbrei' }}
      next={{ title: 'Pfannkuchen (klassisch)', href: '/rezepte/pfannkuchen-klassisch' }}
    />
  );
}
