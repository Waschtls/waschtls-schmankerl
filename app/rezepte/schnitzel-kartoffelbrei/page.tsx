import RecipeLayout from '@/app/components/RecipeLayout';

export const metadata = {
  title: 'Glutenfreies Schnitzel mit Kartoffelbrei | Waschtls Schmankerl',
  description: 'Knuspriges Schnitzel mit glutenfreiem Paniermehl und cremigem Kartoffelbrei – bei uns der absolute Lieblingsfreitag.',
};

export default function SchnitzelPage() {
  return (
    <RecipeLayout
      title="Schnitzel mit Kartoffelbrei"
      kat="Abendessen"
      badges={[
        { type: 'golden', label: '👶 kleinkindtauglich' },
        { type: 'mint',   label: '🏡 Familienklassiker' },
      ]}
      tagline="Das Schnitzel das jeder kennt – glutenfrei genauso knusprig, genauso lecker. Mit selbstgemachtem Kartoffelbrei der cremiger ist als jedes Pulver."
      useCases={['Freitagsessen', 'Wochenendfavorit', 'Wenn Oma kommt', 'Kindergeburtstag']}
      heroImage="/images/schnitzel-kartoffelbrei.jpg"
      minuten={35}

      portionen={4}
      schwierigkeit="Einfach"
      zutaten={[
        '4 Schweineschnitzel (je ca. 150 g, dünn geklopft)',
        '100 g glutenfreies Paniermehl (z.B. Schär oder Bezgluten)',
        '2 Eier (Größe M)',
        '2 EL glutenfreies Mehl (z.B. Schär Mix It) zum Wenden',
        'Salz, Pfeffer',
        'Reichlich neutrales Öl oder Butterschmalz zum Braten',
        '— Kartoffelbrei —',
        '800 g mehligkochende Kartoffeln',
        '100 ml Milch (warm, ggf. laktosefrei)',
        '30 g Butter',
        'Salz, Muskatnuss',
      ]}
      zubereitung={[
        'Kartoffeln schälen, in gleichmäßige Stücke schneiden und in Salzwasser ca. 20 Minuten weich kochen.',
        'Schnitzel zwischen Frischhaltefolie dünn klopfen (ca. 5 mm). Salzen und pfeffern.',
        'Drei flache Teller bereitstellen: Mehl, verquirlte Eier, Paniermehl. Schnitzel nacheinander durch Mehl, Ei und Paniermehl ziehen. Gut andrücken.',
        'Öl oder Butterschmalz in einer großen Pfanne auf mittlerer bis hoher Hitze erhitzen (ausreichend – das Schnitzel soll schwimmen). Schnitzel portionsweise 2–3 Minuten je Seite goldbraun braten.',
        'Auf Küchenpapier abtropfen lassen.',
        'Kartoffeln abgießen, ausdämpfen lassen. Warme Milch und Butter dazugeben, stampfen. Mit Salz und Muskat abschmecken.',
      ]}
      naehrwerte={{ kalorien: 530, kohlenhydrate: 38, protein: 40, fett: 22, ballaststoffe: 3 }}
      tipps={[
        'Das Geheimnis: Genug Fett in der Pfanne. Ein zu sparsames Schnitzel wird nicht knusprig, sondern fettig.',
        'Glutenfreies Paniermehl hat weniger Bindung als normales – die Panade fest andrücken und das Schnitzel sofort in die heiße Pfanne.',
        'Wer möchte: Zitronenspalte dazu – klassisch bayerisch.',
        'Für den Kartoffelbrei: mehligkochende Kartoffeln (z.B. Bintje, Linda) sind Pflicht. Mit festkochenden wird er klumpig.',
      ]}
      affiliate={{ text: 'Glutenfreies Paniermehl gibt es von Schär, Bezgluten oder alnavit – darauf achten dass es zertifiziert GF ist (Kreuzverunreinigung in normaler Bäckerei ist ein echtes Risiko).' }}
      warenkundeLink={{ label: 'Kreuzkontamination: Wie Spuren entstehen und wie man sie vermeidet', href: '/wissen/kreuzkontamination' }}
      prev={{ title: 'Kürbisrisotto', href: '/rezepte/kuerbisrisotto' }}
      next={{ title: 'Kässpatzen', href: '/rezepte/kaesspatzen' }}
    />
  );
}
