import RecipeLayout from '@/app/components/RecipeLayout';

export const metadata = {
  title: 'Fleischküchle glutenfrei – bayerische Frikadellen klassisch',
  description: 'Bayerische Fleischküchle glutenfrei – saftig, würzig, mit GF-Brot gebunden. In 30 Minuten fertig, perfekt für Kinder, einfrierbar und auch als Mini-Version für Kindergeburtstage.',
};

export default function FleischkuechlePage() {
  return (
    <RecipeLayout
      title="Fleischküchle (bayerische Frikadellen)"
      kat="Mittagessen"
      badges={[
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="Fleischküchle haben bei uns einen festen Platz im Wochenplan – schon immer. Nach der Zöliakie-Diagnose einfach das Paniermehl durch altes GF-Toast ersetzt, und seither merkt keiner mehr den Unterschied. Außen goldbraun, innen saftig. Kinder lieben sie."
      useCases={['Schnelles Mittagessen', 'Kindergeburtstag (als Minigröße)', 'Meal Prep – einfrieren', 'Als Burger-Patty']}
      minuten={30}
      portionen="4 (ca. 12 Stück)"
      schwierigkeit="Einfach"
      zutaten={[
        '600 g gemischtes Hackfleisch (Rind und Schwein)',
        '2 Scheiben glutenfreies Toastbrot, in 4 EL Milch eingeweicht',
        '1 Ei (Gr. M)',
        '1 mittelgroße Zwiebel',
        '2 Knoblauchzehen',
        '2 EL frische Petersilie, fein gehackt',
        '1 TL Senf (auf GF prüfen!)',
        '1 TL Salz',
        '½ TL schwarzer Pfeffer',
        '2 EL Öl zum Braten',
      ]}
      zubereitung={[
        'Toast in die Milch einweichen bis er komplett weich ist, dann kräftig ausdrücken.',
        'Zwiebel sehr fein reiben (nicht hacken!) – das macht die Fleischküchle saftiger.',
        'Knoblauch pressen.',
        'Alle Zutaten in einer großen Schüssel mit den Händen gründlich verkneten – mindestens 3 Minuten. Je besser die Masse verbunden ist, desto besser hält sie beim Braten.',
        'Mit nassen Händen ca. 12 ovale oder runde Fleischküchle formen, etwa 1,5 cm dick.',
        'Öl in einer großen Pfanne bei mittlerer bis starker Hitze erhitzen.',
        'Fleischküchle portionsweise braten – nicht zu viele auf einmal. Ca. 4–5 Minuten je Seite bei mittlerer Hitze, bis sie goldbraun und durch sind.',
        'Auf Küchenpapier kurz abtropfen lassen.',
      ]}
      naehrwerte={{ kalorien: 290, kohlenhydrate: 8, protein: 25, fett: 17, ballaststoffe: 1 }}
      tipps={[
        'Zwiebel reiben statt hacken – das ist der größte Trick für saftige Fleischküchle.',
        'Nicht zu heiß braten: außen dunkel, innen roh ist das häufigste Problem. Lieber mittlere Hitze, dafür länger.',
        'Für Kleinkinder: etwas kleiner formen und gut durchbraten. Als Streifen für kleine Hände schneiden.',
        'Für Kindergeburtstage: kleine Nugget-Größe formen und mit Dip servieren – immer ein Hit.',
        'Einfrieren: roh oder gebraten. Roh einfrieren ist praktischer – direkt aus dem Gefrierschrank in die Pfanne (etwas länger braten).',
        'Passt zu: Kartoffelsalat, Kartoffelpüree, als Burger-Patty oder einfach mit Senf.',
      ]}
      affiliate={{ text: 'GF-Senf und GF-Toastbrot findet ihr auf unserer Produktseite – auf Etikett achten, beides ist oft doch nicht glutenfrei.' }}
      warenkundeLink={{ label: 'Kreuzkontamination: Worauf man beim Einkauf achten muss', href: '/wissen/kreuzkontamination' }}
      prev={{ title: 'Spaghetti Bolognese', href: '/rezepte/spaghetti-bolognese' }}
      next={{ title: 'Chicken Nuggets', href: '/rezepte/chicken-nuggets-selbstgemacht' }}
    />
  );
}
