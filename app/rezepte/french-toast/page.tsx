import RecipeLayout from '@/app/components/RecipeLayout';

export const metadata = {
  title: 'Glutenfreier French Toast – knusprig, schnell, familientauglich',
  description: 'French Toast mit glutenfreiem Brot – in 20 Minuten fertig, perfekt zum Frühstück oder als süßes Mittagessen. Kleinkindtauglich ab dem ersten Geburtstag.',
};

export default function FrenchToastPage() {
  return (
    <RecipeLayout
      title="French Toast"
      kat="Frühstück"
      badges={[
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="Weiches Brot, Ei, Milch – und eine Pfanne. Fertig ist eines der einfachsten Frühstücke der Welt. Bei uns landet der French Toast auch mittags auf dem Tisch, wenn's schnell gehen muss und die Kinder mal wieder nur Süßes wollen."
      useCases={['Schnelles Frühstück', 'Süßes Mittagessen', 'Resteverwertung altes Brot', 'Kindergeburtstag-Buffet']}
      minuten={20}
      portionen={2}
      schwierigkeit="Einfach"
      infoBox="Wichtig: Etwas festeres GF-Brot verwenden – weiches Sandwichbrot fällt beim Einweichen auseinander. Schär Meisterbäcker Classic oder Kastenbrot vom Vortag funktionieren sehr gut."
      zutaten={[
        '4 Scheiben glutenfreies Weißbrot oder Kastenbrot (vom Vortag)',
        '3 Eier (Gr. M)',
        '80 ml Vollmilch',
        '1 TL Vanillezucker',
        '½ TL Zimt',
        '1 Prise Salz',
        '1 EL Butter zum Braten',
        '— Zum Servieren —',
        'Puderzucker zum Bestäuben',
        'Ahornsirup oder Honig',
        'Frische Beeren oder Apfelmus',
      ]}
      zubereitung={[
        'Eier, Milch, Vanillezucker, Zimt und Salz in einem tiefen Teller oder einer flachen Schüssel glatt verquirlen.',
        'Brotscheiben einzeln in die Eiermischung legen. Pro Seite ca. 20–30 Sekunden einweichen lassen – das Brot soll die Flüssigkeit aufnehmen, aber nicht zerfallen.',
        'Butter in einer beschichteten Pfanne bei mittlerer Hitze schmelzen lassen.',
        'Brotscheiben nebeneinander in die Pfanne geben und von jeder Seite 2–3 Minuten goldbraun braten.',
        'Mit Puderzucker bestäuben und sofort mit Sirup und Beeren servieren.',
      ]}
      naehrwerte={{ kalorien: 295, kohlenhydrate: 36, protein: 13, fett: 10, ballaststoffe: 2 }}
      tipps={[
        'Brot vom Vortag gibt den besten French Toast – frisches Brot saugt sich zu voll und wird matschig.',
        'Für ein herzhaftes Mittagessen: Zimt und Vanille weglassen, dafür Salz, Pfeffer und Schnittlauch – passt zu Frischkäse oder Lachs.',
        'Für Kleinkinder ab 1 Jahr: ohne Vanillezucker, mit etwas weniger Salz, und in kleine Streifen schneiden.',
        'Doppelte Menge einplanen – die sind schneller weg als man denkt.',
      ]}
      affiliate={{ text: 'Glutenfreies Kastenbrot oder Meisterbäcker-Brot von Schär ist ideal: es hält beim Einweichen die Form und gibt dem French Toast eine gute Konsistenz. Weitere Produktempfehlungen auf unserer Produktseite.' }}
      warenkundeLink={{ label: 'Kreuzkontamination: Was beim Braten in fremden Pfannen gilt', href: '/wissen/kreuzkontamination' }}
      prev={{ title: 'Pfannkuchen (klassisch)', href: '/rezepte/pfannkuchen-klassisch' }}
      next={{ title: 'Waffeln (klassisch)', href: '/rezepte/waffeln-klassisch' }}
    />
  );
}
