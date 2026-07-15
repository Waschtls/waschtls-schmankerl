import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Apfelspalten mit Himbeer-Dip – glutenfreier Kleinkind-Snack',
  description:
    'Apfelspalten als "Pommes" mit selbstgemachtem Himbeer-Dip – glutenfrei, ohne Zucker, von Natur aus. Der Snack der bei Kleinkindern nie langweilig wird.',
};

export default function ApfelspaltenHimbeerDipPage() {
  return (
    <RecipeLayout
      title="Apfelspalten mit Himbeer-Dip"
      kat="Snacks"
      badges={[
        { type: 'mint',   label: '💚 von Natur aus glutenfrei' },
        { type: 'golden', label: '👶 ab 1 Jahr' },
        { type: 'mint',   label: '🫐 ohne Zucker' },
      ]}
      tagline="Apfelspalten als Pommes, Himbeer-Dip als Ketchup – der Trick funktioniert. Kleinkinder greifen begeistert zu, der Dip ist in 2 Minuten fertig und besteht nur aus Beeren. Kein Zucker, kein Gluten, kein Aufwand."
      useCases={['👶 Ab 1 Jahr', '⏱ 5 Minuten', '💚 Ohne Zucker', '🍎 Ohne Backen', '🎒 Brotdose']}
      minuten="5 Min."
      portionen="1–2 Portionen"
      schwierigkeit="Sehr einfach"
      infoBox="💚 Von Natur aus glutenfrei – Äpfel und Himbeeren enthalten kein Gluten. Kein Zusatz nötig."
      zutaten={[
        '1–2 Äpfel',
        '100 g Himbeeren (tiefgekühlt oder frisch)',
        'Optional: Spritzer Zitronensaft',
        'Optional: 1 TL Honig (erst ab 1 Jahr)',
      ]}
      naehrwerte={{
        kalorien: 90,
        kohlenhydrate: 20,
        protein: 1,
        fett: 0,
        ballaststoffe: 4,
      }}
      zubereitung={[
        'Himbeeren (tiefgekühlt kurz auftauen lassen oder frisch verwenden) in ein Schälchen geben.',
        'Mit einer Gabel zerdrücken bis ein Püree entsteht – für eine glattere Konsistenz kurz mit dem Stabmixer pürieren.',
        'Optional einen Spritzer Zitronensaft unterrühren – macht den Dip etwas spritziger.',
        'Äpfel waschen, entkernen und in pommes-große Spalten schneiden.',
        'Apfelspalten mit dem Himbeer-Dip servieren – Kinder tunken sie gern selbst.',
      ]}
      tipps={[
        'TK-Himbeeren eignen sich perfekt – immer vorrätig, günstig und nährstoffreich',
        'Auch mit Erdbeeren oder Blaubeeren funktioniert der Dip wunderbar',
        'Für die Brotdose: Dip in ein kleines Schraubglas füllen, Apfelspalten separat – mit Zitronensaft beträufeln gegen Bräunen',
        'Ältere Kinder können mitzerdrücken – macht Spaß und steigert die Bereitschaft zu essen',
        'Als Dessert nach dem Mittagessen: kleines Schälchen Dip + Apfelspalten sind eine gute Alternative zu Süßem',
      ]}
      prev={{ title: 'Apfelringe mit Frischkäse', href: '/rezepte/apfelringe-frischkaese' }}
      next={{ title: 'Energiebällchen', href: '/rezepte/energiebaellchen' }}
    />
  );
}
