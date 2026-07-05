import RecipeLayout from '@/app/components/RecipeLayout';

export const metadata = {
  title: 'Reiberdatschi – glutenfreie Kartoffelpuffer bayerisch',
  description: 'Reiberdatschi (Kartoffelpuffer) von Natur aus glutenfrei – knusprig, herzhaft, bayerisch. Mit Schmalz gebraten und Apfelmus serviert. Das einfachste und beste Gericht der Welt.',
};

export default function ReiberdatschiPage() {
  return (
    <RecipeLayout
      title="Reiberdatschi (Kartoffelpuffer)"
      kat="Mittagessen"
      badges={[
        { type: 'mint', label: '🥔 ohne Spezialmehl' },
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="In Bayern heißen sie Reiberdatschi, im Rest von Deutschland Kartoffelpuffer – das Rezept ist dasselbe, der Dialekt nicht. Kartoffeln, Zwiebel, Ei, Stärke. Fertig. Von Natur aus glutenfrei, in 30 Minuten auf dem Tisch und einer der wenigen Momente, wo man beim Essen an nix anderes denken muss."
      useCases={['Schnelles Mittagessen', 'Abendessen', 'Beilage', 'Kleinkindessen']}
      heroImage="/images/reiberdatschi.jpg"
      minuten={30}
      portionen="4 (ca. 12 Puffer)"
      schwierigkeit="Einfach"
      infoBox="Reiberdatschi sind von Natur aus glutenfrei, wenn man Kartoffelstärke statt Weizenmehl zum Binden nimmt – was für dieses Rezept ohnehin die bessere Wahl ist. Kartoffelstärke ist in jedem Supermarkt erhältlich und eindeutig GF."
      zutaten={[
        '1 kg mehligkochende Kartoffeln',
        '1 mittelgroße Zwiebel',
        '2 Eier (Gr. M)',
        '3 EL Kartoffelstärke',
        '1 TL Salz',
        'Pfeffer',
        '1 Prise Muskatnuss',
        'Schmalz oder Öl zum Braten',
        '— Zum Servieren —',
        'Apfelmus (klassisch süß)',
        'Saure Sahne + Schnittlauch (herzhaft)',
      ]}
      zubereitung={[
        'Kartoffeln schälen und mit einer groben Reibe fein raspeln.',
        'Geraspelte Kartoffeln in ein sauberes Küchentuch geben und kräftig ausdrücken – je mehr Flüssigkeit raus, desto knuspriger die Puffer. Das ist der wichtigste Schritt.',
        'Zwiebel ebenfalls fein reiben und unter die Kartoffelmasse mischen.',
        'Eier, Kartoffelstärke, Salz, Pfeffer und Muskat dazugeben und alles gut vermengen.',
        'Schmalz (oder Öl) in einer Pfanne bei mittlerer bis starker Hitze erhitzen – das Fett muss wirklich heiß sein.',
        'Je 2–3 EL Masse in die Pfanne geben und sofort flach drücken auf ca. 1 cm Dicke.',
        'Pro Seite 3–4 Minuten braten bis die Puffer goldbraun und knusprig sind. Nicht zu früh wenden!',
        'Auf Küchenpapier kurz abtropfen lassen und sofort servieren.',
      ]}
      naehrwerte={{ kalorien: 218, kohlenhydrate: 33, protein: 5, fett: 7, ballaststoffe: 3 }}
      tipps={[
        'Mehligkochende Kartoffeln (z. B. Bintje, Agria) geben bessere Puffer als festkochende – mehr Stärke, besseres Ergebnis.',
        'Ausdrücken nicht überspringen – nasse Kartoffeln = matschige Puffer, die nicht bräunen.',
        'Schmalz statt Öl: gibt den typisch bayerischen Geschmack. Butterschmalz ist eine feinere Alternative.',
        'Für Kleinkinder: etwas kleiner formen, sehr knusprig braten (damit keine weichen, schlecht kaubaren Stellen) und in Streifen schneiden.',
        'Wer die Puffer nicht alle sofort essen kann: im Ofen bei 80 °C warm halten. Im Toaster aufgewärmt werden sie wieder knusprig.',
      ]}
      affiliate={undefined}
      warenkundeLink={{ label: 'Glutenfreie Lebensmittel: Was ist sicher?', href: '/wissen/glutenfreie-lebensmittel' }}
      prev={{ title: 'Chicken Nuggets', href: '/rezepte/chicken-nuggets-selbstgemacht' }}
      next={{ title: 'Veganes Chili', href: '/rezepte/veganes-chili' }}
    />
  );
}
