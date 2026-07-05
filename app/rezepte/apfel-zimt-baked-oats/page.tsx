import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Apfel-Zimt Baked Oats (glutenfrei) – Waschtls Schmankerl',
  description: 'Gebackene Haferflocken mit Apfel und Zimt – glutenfreies Frühstück, 44g Eiweiß, in 40 Minuten fertig.',
};

export default function ApfelZimtBakedOats() {
  return (
    <RecipeLayout
      title="Apfel-Zimt Baked Oats"
      kat="Frühstück"
      badges={[
        { type: 'mint', label: '💪 44g Eiweiß' },
        { type: 'golden', label: '🍎 Apfel & Zimt' },
      ]}
      tagline="Warmes Frühstück wie ein Mini-Crumble aus dem Ofen – 44 g Eiweiß, macht wirklich bis zum Mittagessen satt. Abends vorbereiten, morgens backen."
      useCases={['🏫 Schultag', '☀️ Wochenende', '💪 Highprotein', '🕐 Vorbereitung möglich']}
      minuten={40}
      portionen={1}
      einheit="Portionen"
      schwierigkeit="Einfach"
      warum="Wie ein Mini-Crumble aus dem Ofen – 44 g Eiweiß und natürliche Süße durch Apfel. Macht wirklich bis zum Mittagessen satt."
      infoBox="⚠️ Wichtig bei Haferflocken: Normale Haferflocken enthalten Kreuzverunreinigungen mit Gluten. Nur zertifiziert glutenfreie Haferflocken verwenden (z.B. Schär, Purer). Manche Menschen mit Zöliakie vertragen auch GF-Hafer nicht – bei Unsicherheit mit dem Arzt besprechen."
      zutaten={[
        '250 g Magerquark',
        '1 Ei',
        '40 g GF-Haferflocken (zertifiziert)',
        '85 ml Mandelmilch (ungesüßt)',
        'Zimt nach Geschmack',
        'Süße nach Wahl (Erythrit, Honig, …)',
        '100 g Apfel, gewürfelt',
        '— Crumble-Topping',
        '15 g Butter (zimmerwarm)',
        '5 g GF-Haferflocken',
        'Zimt + 10 g Erythrit',
      ]}
      naehrwerte={{ kalorien: 544, kohlenhydrate: 53, protein: 44, fett: 14, ballaststoffe: 6 }}
      zubereitung={[
        'Backofen auf 200 °C Ober-/Unterhitze vorheizen.',
        'Quark, Ei, GF-Haferflocken, Mandelmilch, Zimt und Süße gut verrühren.',
        'Masse in eine ofenfeste Form geben (ca. 20×20 cm).',
        'Apfelwürfel gleichmäßig unterrühren oder obenauf verteilen.',
        'Für das Topping: Butter, GF-Haferflocken, Zimt und Erythrit mit den Händen zu einer krümeligen Masse verkneten und über die Form streuen.',
        'Ca. 30–35 Minuten backen bis die Oberfläche goldbraun ist.',
        'Heiß servieren – direkt aus der Form.',
      ]}
      tipps={[
        'Abends vorbereiten: Masse in die Form geben und im Kühlschrank über Nacht lassen – morgens nur noch backen.',
        'Auch kalt als Overnight Baked Oats möglich – einfach nicht backen.',
        'Für Kleinkinder: ohne Süßungsmittel, nur mit dem Apfel süßen.',
        'Nur mit zertifiziert glutenfreien Haferflocken – normaler Hafer ist in der Regel kontaminiert.',
      ]}
      affiliate={{ text: 'Zertifiziert glutenfreie Haferflocken verwenden – normaler Hafer ist in der Regel durch Kreuzverunreinigung belastet.' }}
      warenkundeLink={{ label: 'Glutenfreie Lebensmittel – worauf achten?', href: '/wissen/glutenfreie-lebensmittel' }}
      relatedRecipes={[
        { title: 'Apfel-Zimt-Porridge', slug: 'apfel-zimt-porridge', emoji: '🍎', time: '10 Min.' },
        { title: 'Bananenmuffins', slug: 'bananenmuffins', emoji: '🧁', time: '30 Min.' },
      ]}
    />
  );
}
