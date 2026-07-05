import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Glutenfreie Nudeln mit Tomatensauce – Waschtls Schmankerl',
  description: 'Der glutenfreie Alltagsklassiker: Reisnudeln mit selbstgemachter Tomatensauce – schnell, lecker, kinderfreundlich.',
};

export default function NudelnMitTomatensauce() {
  return (
    <RecipeLayout
      title="Nudeln mit Tomatensauce"
      kat="Mittagessen"
      badges={[
        { type: 'mint', label: '🌿 vegan' },
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="Der Lieblingsklassiker – mit Reisnudeln genauso gut wie das Original. Die Soße lässt sich einfrieren, die Nudeln kocht man frisch dazu."
      useCases={['🏫 Schultag', '⏱ Unter 30 Min', '👶 Kleinkind', '❄️ Soße einfrieren']}
      minuten={25}
      portionen={4}
      einheit="Portionen"
      schwierigkeit="Einfach"
      warum="Soße einfrieren, Nudeln frisch kochen – der schnellste Alltagsklassiker. Reisnudeln schmecken am ähnlichsten zu Weizennudeln."
      zutaten={[
        '400 g glutenfreie Pasta (Reisnudeln oder Linsennudeln)',
        '— Tomatensauce',
        '1 Dose gehackte Tomaten (400 g)',
        '2 EL Tomatenmark',
        '1 Zwiebel',
        '2 Knoblauchzehen',
        '2 EL Olivenöl',
        'Salz, Pfeffer, Oregano, Basilikum',
        'Parmesan zum Servieren (optional)',
      ]}
      naehrwerte={{ kalorien: 380, kohlenhydrate: 62, protein: 13, fett: 8, ballaststoffe: 5 }}
      zubereitung={[
        'Zwiebel fein hacken, Knoblauch pressen.',
        'Olivenöl in einem Topf erhitzen, Zwiebel glasig dünsten (ca. 3 Min.), Knoblauch kurz mitdünsten.',
        'Tomatenmark einrühren und 1 Min. anrösten.',
        'Gehackte Tomaten dazugeben, mit Salz, Pfeffer, Oregano und Basilikum würzen. 15 Min. bei mittlerer Hitze köcheln.',
        'Parallel Salzwasser aufkochen und GF-Pasta nach Packungsanleitung kochen – meist 2–3 Min. weniger als angegeben probieren.',
        'Pasta abgießen, mit Soße vermengen, sofort servieren. Mit Parmesan bestreuen.',
      ]}
      tipps={[
        'Reisnudeln schmecken am ähnlichsten zu Weizennudeln – milder Geschmack, ähnliche Konsistenz.',
        'Linsennudeln geben mehr Eiweiß, haben einen leicht erdigen Geschmack – für Ältere oft bevorzugt.',
        'GF-Nudeln sofort nach dem Kochen servieren – sie kleben beim Stehen stärker zusammen als Weizennudeln.',
        'Soße portionsweise einfrieren – dann ist Mittagessen in 10 Min. fertig.',
        'Einen Schuss Nudelkochwasser zur Soße geben macht sie sämiger.',
      ]}
      affiliate={{ text: 'GF-Pasta zertifiziert glutenfrei kaufen – viele Marken sind im Supermarkt erhältlich.' }}
      warenkundeLink={{ label: 'Glutenfreie Lebensmittel – worauf achten?', href: '/wissen/glutenfreie-lebensmittel' }}
      relatedRecipes={[
        { title: 'Spaghetti Bolognese', slug: 'spaghetti-bolognese', emoji: '🍝', time: '45 Min.' },
        { title: 'Veganes Chili', slug: 'veganes-chili', emoji: '🌶', time: '35 Min.' },
        { title: 'Kürbisrisotto', slug: 'kuerbisrisotto', emoji: '🎃', time: '40 Min.' },
      ]}
    />
  );
}
