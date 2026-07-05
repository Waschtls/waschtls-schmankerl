import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Glutenfreie Flammkuchen-Ofenpfannkuchen – Waschtls Schmankerl',
  description: 'Herzhafter Quark-Fladen im Flammkuchen-Stil – glutenfrei, nur 113 kcal pro Stück, in 30 Minuten fertig.',
};

export default function FlammkuchenOfenpfannkuchen() {
  return (
    <RecipeLayout
      title="Flammkuchen-Ofenpfannkuchen"
      kat="Abendessen"
      badges={[
        { type: 'mint', label: '⚡ 30 Min.' },
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="Quark-Basis, Schinken, Frühlingszwiebel, Käse – wie ein Flammkuchen, nur ohne Rollpin und ohne Gluten. Hochprotein, nur 113 kcal pro Stück."
      useCases={['🌆 Schnelles Abendessen', '🥗 Leicht & sättigend', '👶 Kleinkind', '🥩 Hochprotein']}
      minuten={30}
      portionen={8}
      einheit="Stücke"
      schwierigkeit="Einfach"
      warum="Hochprotein, nur 113 kcal pro Stück – schnelles Abendessen ohne Aufwand. Kein Rollpin, kein Kneten, einfach Kleckse auf das Blech."
      zutaten={[
        '250 g Magerquark',
        '2 Eier',
        '100 g Schär Mix It! (GF-Allzweckmehl)',
        '5 g Backpulver (glutenfrei)',
        'etwas Wasser (nach Konsistenz)',
        '— Belag',
        '35 g Schinkenwürfel light',
        '1 Frühlingszwiebel',
        '55 g Reibekäse light',
        'Salz, Pfeffer',
      ]}
      naehrwerte={{ kalorien: 113, kohlenhydrate: 11, protein: 10, fett: 3, ballaststoffe: 1 }}
      zubereitung={[
        'Backofen auf 180 °C Ober-/Unterhitze vorheizen. Backblech mit Backpapier belegen.',
        'Quark, Eier, GF-Mehl, Backpulver, Salz und etwas Wasser zu einem Teig verrühren.',
        'Frühlingszwiebel in Ringe schneiden.',
        '8 gleichmäßige Kleckse auf das Backblech geben und leicht flachdrücken.',
        'Mit Schinkenwürfeln, Frühlingszwiebeln und Reibekäse belegen.',
        'Ca. 20 Minuten backen bis der Käse goldbraun ist.',
      ]}
      tipps={[
        'Ein Klecks Sauerrahm (laktosefrei erhältlich) auf die fertigen Fladen macht es noch flammkuchen-ähnlicher.',
        'Belag nach Belieben variieren – Zucchini, Oliven oder Tomaten funktionieren genauso.',
        'Süße Variante: Apfelscheiben + Zimt + etwas Honig statt Käse und Salami.',
        'Frisch aus dem Ofen am besten – kurze Wartezeit von 2–3 Min. damit sie sich besser lösen.',
      ]}
      affiliate={{ text: 'Schär Mix It! Universal ist das Mehl für diese Fladen – erhältlich bei dm, Rewe und online.' }}
      warenkundeLink={{ label: 'Welches Mehl wofür?', href: '/wissen/welches-mehl-wofuer' }}
      relatedRecipes={[
        { title: 'Quark-Gemüse-Fladen', slug: 'quark-gemuese-fladen', emoji: '🫓', time: '30 Min.' },
        { title: 'Protein-Bagel', slug: 'protein-bagel', emoji: '🥯', time: '30 Min.' },
        { title: 'Glutenfreie Pizza', slug: 'pizza-glutenfrei', emoji: '🍕', time: '45 Min.' },
      ]}
    />
  );
}
