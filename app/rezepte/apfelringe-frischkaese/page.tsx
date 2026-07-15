import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Apfelringe mit Frischkäse – 5-Minuten Kleinkind-Snack glutenfrei',
  description:
    'Apfel in Ringe geschnitten, mit Frischkäse bestrichen – glutenfreier Snack für Kleinkinder ab 1 Jahr. Ohne Zucker, in 5 Minuten, unendlich variierbar.',
};

export default function ApfelringeFrischkaesePage() {
  return (
    <RecipeLayout
      title="Apfelringe mit Frischkäse"
      kat="Snacks"
      badges={[
        { type: 'mint',   label: '💚 von Natur aus glutenfrei' },
        { type: 'golden', label: '👶 ab 1 Jahr' },
        { type: 'mint',   label: '⏱ 5 Minuten' },
      ]}
      tagline="Der schnellste Snack in unserer Küche. Ein Apfel, ein bisschen Frischkäse, ein paar Toppings nach Lust – fertig. Funktioniert als Brotdosen-Snack, als Pausensnack und als stressfreie Alternative wenn nichts vorbereitet ist."
      useCases={['👶 Ab 1 Jahr', '⏱ 5 Minuten', '🍎 Ohne Backen', '🎒 Brotdose', '💚 Ohne Zucker']}
      minuten="5 Min."
      portionen="1 Portion"
      schwierigkeit="Sehr einfach"
      infoBox="💚 Von Natur aus glutenfrei – Apfel und Frischkäse enthalten kein Gluten. Bei industriell hergestelltem Frischkäse kurz das Etikett checken."
      zutaten={[
        '1 Apfel (mittelgroß)',
        '2–3 EL Frischkäse natur',
        'Optional Toppings: Blaubeeren, Himbeeren, Bananenscheiben',
        'Optional: Kokosraspeln, Hanfsamen oder ein Hauch Zimt',
      ]}
      naehrwerte={{
        kalorien: 130,
        kohlenhydrate: 18,
        protein: 3,
        fett: 5,
        ballaststoffe: 2,
      }}
      zubereitung={[
        'Apfel waschen. Mit einem Apfelentkerner den Kerngehäuse herauslösen – alternativ nach dem Schneiden mit einem kleinen Ausstecher oder Messer ausschneiden.',
        'Den Apfel quer in ca. 1 cm dicke Scheiben schneiden – es entstehen natürliche Ringe.',
        'Jeden Ring großzügig mit Frischkäse bestreichen.',
        'Nach Belieben mit Toppings belegen: Blaubeeren und Himbeeren machen es bunt, Kokosraspeln geben Textur, Zimt rundet den Geschmack ab.',
        'Sofort servieren oder für die Brotdose in eine Box legen (Zitronensaft auf den Apfel verhindert Bräunen).',
      ]}
      tipps={[
        'Für die Brotdose: Apfelringe mit etwas Zitronensaft beträufeln – dann bleiben sie länger frisch und weiß',
        'Kinder können die Toppings selbst drauflegen – macht das Essen viel interessanter',
        'Frischkäse-Varianten: mit Kräutern für eine herzhafte Version, mit etwas Honig (ab 1 Jahr) für mehr Süße',
        'Wer keine Ringe mag: Apfel in Spalten schneiden und Frischkäse als Dip dazu stellen',
        'Auch lecker: Erdnussbutter oder Mandelmus statt Frischkäse – für Kinder ohne Nussallergie',
      ]}
      prev={{ title: 'Avocado-Schoko-Creme', href: '/rezepte/avocado-schoko-creme' }}
      next={{ title: 'Apfelspalten mit Himbeer-Dip', href: '/rezepte/apfelspalten-himbeer-dip' }}
    />
  );
}
