import RecipeLayout from '@/app/components/RecipeLayout';

export const metadata = {
  title: 'Glutenfreie Chicken Nuggets selbst gemacht – knusprig wie vom Profi',
  description: 'Selbstgemachte glutenfreie Chicken Nuggets – mit GF-Paniermehl, aus dem Ofen oder der Pfanne. Kindergeburtstag-Favorit, einfrierbar und deutlich besser als die Tiefkühlvariante.',
};

export default function ChickenNuggetsSelbstgemachtPage() {
  return (
    <RecipeLayout
      title="Chicken Nuggets (selbstgemacht)"
      kat="Mittagessen"
      badges={[
        { type: 'golden', label: '👶 kleinkindtauglich' },
        { type: 'mint', label: '🎂 Kindergeburtstag' },
      ]}
      tagline="Chicken Nuggets aus dem Ofen, mit echtem Hähnchenfleisch und GF-Paniermehl – knuspriger als die Tiefkühlvariante und in 30 Minuten auf dem Tisch. Bei Kindergeburtstagen verschwinden sie als erstes vom Buffet."
      useCases={['Mittagessen', 'Kindergeburtstag-Buffet', 'Einfrieren', 'Meal Prep für die Woche']}
      minuten={30}
      portionen="4 (ca. 20 Nuggets)"
      schwierigkeit="Einfach"
      infoBox="GF-Paniermehl ist der einzige Punkt, den man prüfen muss – Hähnchenfleisch ist von Natur aus glutenfrei. Fertige GF-Paniermehl-Sorten gibt es im Reformhaus oder online; alternativ funktioniert auch sehr fein gemahlenes GF-Toastbrot aus dem Ofen."
      zutaten={[
        '500 g Hähnchenbrust, in mundgerechte Stücke (ca. 3×3 cm)',
        '100 g GF-Paniermehl',
        '50 g glutenfreies Mehl (zum ersten Wenden)',
        '2 Eier (Gr. M)',
        '1 TL Paprikapulver edelsüß',
        '½ TL Knoblauchpulver',
        '½ TL Salz',
        '¼ TL Pfeffer',
        'Öl zum Besprühen oder Bestreichen (Ofen-Variante)',
      ]}
      zubereitung={[
        'Hähnchenstücke mit Küchenpapier trockentupfen – das ist wichtig damit die Panade haftet.',
        'Drei flache Schüsseln vorbereiten: 1. Mehl mit einer Prise Salz, 2. Eier verquirlt, 3. Paniermehl mit Paprika, Knoblauch, Salz und Pfeffer gemischt.',
        'Jedes Stück zuerst in Mehl wenden (überschüssiges abklopfen), dann durch das Ei ziehen, dann im gewürzten Paniermehl wälzen und andrücken.',
        'Ofen-Variante (empfohlen für Mengen): Backofen auf 200 °C vorheizen. Nuggets auf ein mit Backpapier belegtes Blech legen, leicht mit Öl besprühen. 18–20 Minuten backen, nach der Hälfte wenden.',
        'Pfannen-Variante: Öl in der Pfanne bei mittlerer-hoher Hitze erhitzen. Nuggets portionsweise von jeder Seite 3–4 Minuten goldbraun braten. Auf Küchenpapier abtropfen lassen.',
      ]}
      naehrwerte={{ kalorien: 295, kohlenhydrate: 23, protein: 31, fett: 8, ballaststoffe: 1 }}
      tipps={[
        'Hähnchen trockentupfen ist der wichtigste Schritt – feuchte Oberfläche = Panade fällt ab.',
        'Ofen-Variante ist praktischer für Kindergeburtstage: zwei Bleche gleichzeitig, keine Pfannen-Überwachung.',
        'Zum Dippen: glutenfreier Ketchup, Mayonnaise, BBQ-Soße (auf GF prüfen!) oder Tzatziki.',
        'Selbstgemachtes Paniermehl: altes GF-Toast im Ofen bei 100 °C 20 Minuten trocknen, dann im Mixer fein mahlen.',
        'Einfrieren: Nuggets paniert aber noch roh einfrieren. Direkt aus dem Gefrierschrank bei 200 °C 25 Minuten backen.',
      ]}
      affiliate={{ text: 'GF-Paniermehl ist im Handel nicht immer leicht zu finden. Auf unserer Produktseite zeigen wir, was wir verwenden.' }}
      warenkundeLink={{ label: 'Kreuzkontamination: Was beim Panieren und Braten gilt', href: '/wissen/kreuzkontamination' }}
      prev={{ title: 'Fleischküchle', href: '/rezepte/fleischkuechle' }}
      next={{ title: 'Reiberdatschi', href: '/rezepte/reiberdatschi-kartoffelpuffer' }}
    />
  );
}
