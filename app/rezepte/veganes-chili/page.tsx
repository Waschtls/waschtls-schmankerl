import RecipeLayout from '@/app/components/RecipeLayout';

export const metadata = {
  title: 'Glutenfreies veganes Chili con Carne – von Natur aus glutenfrei',
  description: 'Veganes Chili mit Hack von DM – herzhaft, sättigend, von Natur aus glutenfrei. In 35 Minuten auf dem Tisch, ideal zum Einfrieren.',
};

export default function VeganesChiliPage() {
  return (
    <RecipeLayout
      title="Veganes Chili con Carne"
      kat="Abendessen"
      badges={[
        { type: 'mint', label: '🌱 vegan' },
        { type: 'mint', label: 'ohne Spezialmehl' },
      ]}
      tagline="Von Natur aus glutenfrei, in 35 Minuten fertig und einer der günstigsten Abende im Monatsbudget. Das vegane Hack von DM macht es sättigend wie das Original."
      useCases={['Schnelles Abendessen', 'Meal Prep (hält 3 Tage)', 'Wenn viele Gäste kommen', 'Resteverwertung Bohnen']}
      minuten={35}
      portionen={4}
      schwierigkeit="Einfach"
      infoBox="Veganes Hack ist von Natur aus glutenfrei – aber bei Fertigprodukten trotzdem kurz das Etikett prüfen. Das vegane Hack von DM (z.B. alnavit oder dmBio) ist zertifiziert GF und in fast jedem dm erhältlich."
      zutaten={[
        '250 g veganes Hackfleisch (z.B. von dm / alnavit oder dmBio)',
        '1 Dose Kidneybohnen (400 g, abgegossen)',
        '1 Dose Mais (300 g, abgegossen)',
        '1 Dose gehackte Tomaten (400 g)',
        '1 Dose Tomaten passiert (400 g)',
        '1 große Zwiebel',
        '3 Knoblauchzehen',
        '1 rote Paprika',
        '2 EL Olivenöl',
        '2 TL Paprikapulver (edelsüß)',
        '1 TL Paprikapulver (scharf)',
        '1 TL Kreuzkümmel (gemahlen)',
        '½ TL Chiliflocken (nach Geschmack)',
        '1 TL Salz, Pfeffer',
        '200 ml Gemüsebrühe (glutenfrei – Etikett prüfen!)',
        '— Zum Servieren —',
        'Reis (glutenfrei) oder Tortilla-Chips (auf GF-Zertifizierung achten)',
        'Saure Sahne oder veganer Joghurt',
        'Frischer Koriander oder Schnittlauch',
      ]}
      zubereitung={[
        'Zwiebel und Knoblauch fein würfeln. Paprika in kleine Würfel schneiden.',
        'Olivenöl in einem großen Topf bei mittlerer Hitze erwärmen. Zwiebel 3–4 Minuten glasig anschwitzen, dann Knoblauch und Paprika dazugeben und weitere 2 Minuten mitgaren.',
        'Veganes Hack dazugeben und unter Rühren ca. 3–4 Minuten anbraten bis es leicht gebräunt ist.',
        'Alle Gewürze (Paprika edelsüß und scharf, Kreuzkümmel, Chili, Salz, Pfeffer) einrühren und kurz mit anrösten – 1 Minute.',
        'Tomaten (gehackt + passiert) und Gemüsebrühe dazugeben. Aufkochen.',
        'Kidneybohnen und Mais unterrühren. Bei niedriger Hitze 15–20 Minuten köcheln lassen. Gelegentlich umrühren.',
        'Abschmecken – ggf. mehr Chili oder Salz. Mit Reis oder Tortilla-Chips servieren.',
      ]}
      naehrwerte={{ kalorien: 345, kohlenhydrate: 38, protein: 21, fett: 9, ballaststoffe: 13 }}
      tipps={[
        'Je länger das Chili zieht, desto besser – am nächsten Tag schmeckt es noch intensiver.',
        'Für Kinder: Chiliflocken weglassen oder erst beim Servieren individuell dazugeben.',
        'Meal-Prep-Tipp: Doppelte Menge kochen und einfrieren – hält 3 Monate.',
        'Statt Reis: in Ofenkartoffeln servieren – macht satt und ist von Natur aus GF.',
        'Gemüsebrühe immer auf GF prüfen – viele konventionelle Brühen enthalten Maltodextrin aus Weizen.',
      ]}
      affiliate={{ text: 'Das vegane Hack von DM (alnavit oder dmBio) ist unser Favorit: günstig, GF-zertifiziert und in fast jedem Markt erhältlich. Gemüsebrühe ebenfalls auf GF-Kennzeichnung achten.' }}
      warenkundeLink={{ label: 'Welche Lebensmittel sind glutenfrei? Die große Übersicht', href: '/wissen/glutenfreie-lebensmittel' }}
      prev={{ title: 'Pfannkuchen (klassisch)', href: '/rezepte/pfannkuchen-klassisch' }}
      next={{ title: 'Schnitzel mit Kartoffelbrei', href: '/rezepte/schnitzel-kartoffelbrei' }}
    />
  );
}
