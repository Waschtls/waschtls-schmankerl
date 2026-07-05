import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Glutenfreies Bananenbrot mit Nutella-Füllung – Waschtls Schmankerl',
  description: 'Saftiges glutenfreies Bananenbrot mit Nutella-Kern und Schokodrops – 10 Stück, perfekt für die Brotdose.',
};

export default function BananenbrotNutella() {
  return (
    <RecipeLayout
      title="Bananenbrot mit Nutella-Füllung"
      kat="Backen"
      badges={[
        { type: 'golden', label: '👶 kleinkindtauglich' },
        { type: 'mint', label: '❄️ einfrierbar' },
      ]}
      tagline="Der Kuchen-Ersatz der wirklich satt macht – mit Nutella-Kern, glutenfrei, für Groß und Klein. Reicht für die ganze Woche und hält sich gut."
      useCases={['🎒 Brotdose', '☕ Sonntagskaffee', '❄️ Einfrierbar', '👶 Kleinkind']}
      minuten={60}
      portionen={10}
      einheit="Stücke"
      schwierigkeit="Einfach"
      warum="Saftig durch Bananen und Quark – kein Austrocknen. Der Nutella-Kern überrascht beim ersten Bissen. Lässt sich super einfrieren und scheibchenweise auftauen."
      infoBox="✅ Nutella ist glutenfrei – laut Ferrero-Angabe unter 20 ppm. Trotzdem aktuelle Packung prüfen. GF-Schokodrops z.B. von Schär oder zertifizierten Bio-Marken verwenden."
      zutaten={[
        '2 sehr reife Bananen (ca. 220 g)',
        '200 g Hüttenkäse light',
        '200 g Magerquark',
        '2 Eier',
        '80 ml Mandelmilch (ungesüßt)',
        '200 g Schär Mix It! (GF-Allzweckmehl)',
        '5 g Backpulver (glutenfrei)',
        'Süße nach Wahl (Erythrit, Honig, …)',
        '— Füllung',
        '80 g Nutella',
        '25 g Schokodrops (GF-zertifiziert)',
      ]}
      naehrwerte={{ kalorien: 191, kohlenhydrate: 26, protein: 10, fett: 5, ballaststoffe: 2 }}
      zubereitung={[
        'Backofen auf 180 °C Ober-/Unterhitze vorheizen. Kastenform (ca. 25 cm) einfetten oder mit Backpapier auslegen.',
        'Bananen zerdrücken. Mit Hüttenkäse, Quark, Eiern, Mandelmilch und Süße cremig mixen.',
        'GF-Mehl und Backpulver unterrühren bis ein glatter Teig entsteht.',
        'Die Hälfte des Teiges in die Kastenform geben und glattstreichen.',
        'Nutella gleichmäßig auf dem Teig verteilen.',
        'Restlichen Teig draufgeben, glattstreichen und mit GF-Schokodrops bestreuen.',
        '45–55 Minuten backen. Nach 30 Minuten mit Alufolie abdecken damit die Oberfläche nicht zu dunkel wird.',
        'Vollständig auskühlen lassen, dann aus der Form nehmen und in 10 Stücke schneiden.',
      ]}
      tipps={[
        'Je reifer die Bananen, desto süßer das Brot – schwarze Flecken auf der Schale sind ideal.',
        'Scheiben einfrieren und morgens einzeln rausnehmen – mittags aufgetaut.',
        'Wer kein Nutella möchte: Mandelmus oder Erdnussbutter funktionieren genauso.',
        'Stäbchenprobe nicht vergessen – der Nutella-Kern kann täuschen.',
      ]}
      affiliate={{ text: 'Schär Mix It! Universal und GF-Schokodrops sind die Basis für dieses Rezept.' }}
      warenkundeLink={{ label: 'Welches Mehl wofür?', href: '/wissen/welches-mehl-wofuer' }}
      relatedRecipes={[
        { title: 'Bananenmuffins', slug: 'bananenmuffins', emoji: '🧁', time: '30 Min.' },
        { title: 'Brownies', slug: 'brownies-schokolade', emoji: '🍫', time: '40 Min.' },
        { title: 'Lebkuchen-Plätzchen', slug: 'lebkuchen-plaetzchen', emoji: '🎄', time: '4 Std.' },
      ]}
    />
  );
}
