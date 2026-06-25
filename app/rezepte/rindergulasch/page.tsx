import RecipeLayout from '@/app/components/RecipeLayout';

export const metadata = {
  title: 'Glutenfreier Rindergulasch – sämig, herzhaft, ohne Stärke',
  description: 'Echter Rindergulasch glutenfrei – ohne Stärkebindung, mit viel Zwiebel und Paprika. Schmort sich von selbst. Das perfekte Wintergericht zu Semmelknödeln oder Nudeln.',
};

export default function RindergulaschPage() {
  return (
    <RecipeLayout
      title="Rindergulasch"
      kat="Mittagessen"
      badges={[
        { type: 'mint', label: '🥣 ohne Spezialmehl' },
      ]}
      tagline="Echter Gulasch braucht keine Stärke, kein Mehl, keine Tricks. Er braucht Zeit, viele Zwiebeln und gutes Paprikapulver. Die Zwiebeln lösen sich beim langen Schmoren fast vollständig auf und binden die Soße ganz von alleine – sämig, dunkel, intensiv."
      useCases={['Wintergericht', 'Meal Prep (wird am nächsten Tag besser)', 'Einfrieren', 'Zu Semmelknödeln oder Nudeln']}
      minuten={120}
      portionen={4}
      schwierigkeit="Einfach"
      infoBox="Rinderbrühe und Brühwürfel unbedingt auf GF prüfen – viele konventionelle Sorten enthalten Maltodextrin oder Weizenmehl. Alternativ: Wasser mit etwas Salz verwenden und die Soße durch die Zwiebeln und das Fleisch selbst Geschmack entwickeln lassen."
      zutaten={[
        '800 g Rindfleisch (Schulter oder Rinderwade), in 3–4 cm Würfel',
        '3 große Zwiebeln',
        '2 EL Schmalz oder neutrales Öl',
        '2 Knoblauchzehen, fein gehackt',
        '2 EL Tomatenmark',
        '3 TL Paprikapulver edelsüß',
        '1 TL Paprikapulver scharf',
        '1 TL Kümmel, gemahlen',
        '1 Lorbeerblatt',
        '200 ml Rotwein (oder mehr Brühe)',
        '400 ml Rinderbrühe (GF – Etikett prüfen!)',
        'Salz, Pfeffer',
      ]}
      zubereitung={[
        'Zwiebeln in dünne Streifen schneiden. Im heißen Schmalz bei mittlerer Hitze 15–18 Minuten langsam glasig-golden schmoren – nicht bräunen. Das ist der Schlüssel.',
        'Fleisch in 2–3 Portionen aufteilen und portionsweise in einer separaten Pfanne bei starker Hitze rundum kräftig anbraten. Beiseitestellen. (Zu viel Fleisch auf einmal = Dünsten statt Braten.)',
        'Knoblauch und Tomatenmark zu den Zwiebeln geben, 2 Minuten mitrösten.',
        'Paprikapulver (edelsüß + scharf) einrühren und sofort mit dem Rotwein ablöschen – Paprika verbrennt schnell!',
        'Fleisch zurück in den Topf geben. Brühe, Kümmel und Lorbeer dazugeben. Aufkochen.',
        'Hitze auf minimum reduzieren, Deckel schräg auflegen: 90 Minuten sachte schmoren. Gelegentlich umrühren.',
        'Lorbeer entfernen. Abschmecken mit Salz, Pfeffer und ggf. mehr Paprika.',
        'Mit Semmelknödeln, Kartoffelknödeln oder GF-Nudeln servieren.',
      ]}
      naehrwerte={{ kalorien: 415, kohlenhydrate: 11, protein: 43, fett: 18, ballaststoffe: 3 }}
      tipps={[
        'Gulasch schmeckt am nächsten Tag besser. Gerne auf Vorrat kochen.',
        'Je länger er schmort, desto besser – wer Zeit hat: 2,5 Stunden bei ganz schwacher Hitze.',
        'Soße zu dünn? Deckel die letzten 20 Minuten abnehmen und einkochen lassen.',
        'Zum Einfrieren: ohne Beilage einfrieren, hält 3 Monate.',
        'Wer keinen Rotwein möchte: einfach durch mehr Brühe ersetzen – schmeckt etwas milder, aber auch sehr gut.',
      ]}
      affiliate={{ text: 'GF-Brühe ist der häufigste Stolperstein beim Gulasch. Auf unserer Produktseite findet ihr verlässliche glutenfreie Brühen und Würzmittel.' }}
      warenkundeLink={{ label: 'Glutenfreie Semmelknödel – die perfekte Beilage', href: '/rezepte/semmelknoedel' }}
      prev={{ title: 'Semmelknödel', href: '/rezepte/semmelknoedel' }}
      next={{ title: 'Spaghetti Bolognese', href: '/rezepte/spaghetti-bolognese' }}
    />
  );
}
