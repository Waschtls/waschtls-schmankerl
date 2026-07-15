import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Gebackene Apfelringe – glutenfreies Beikost-Fingerfood aus dem Ofen',
  description:
    'Weiche Apfelringe aus dem Ofen – mit Zimt, ohne Zucker, von Natur aus glutenfrei. Als Beikost ab 8 Monaten und Snack für die ganze Familie.',
};

export default function ApfelringePage() {
  return (
    <RecipeLayout
      title="Gebackene Apfelringe"
      kat="Snack / Beikost"
      badges={[
        { type: 'mint',   label: '💚 ohne Spezialmehl' },
        { type: 'golden', label: '👶 Beikost ab 8 Mon.' },
      ]}
      tagline="Im Ofen werden Apfelringe weich, leicht karamellig und duften nach Zimt. Kinder können sie selbst greifen – perfektes Kautraining, ohne dass man ihnen Stücke abschneiden muss."
      useCases={['👶 Beikost & Fingerfood', '🍎 Ohne Zucker', '💚 Ohne Spezialmehl', '🎒 Brotdose & Snack']}
      minuten={20}
      portionen={2}
      schwierigkeit="Einfach"
      infoBox="💚 Von Natur aus glutenfrei. Die Apfelringe sind nach dem Backen weich genug für Babys mit Zahnansatz – aber immer beim Essen dabei sein und auf Ringdicke achten."
      zutaten={[
        '2 mittelgroße Äpfel',
        '1 TL Zimt',
        'Optional: 1 TL Kokosöl oder etwas Butter zum Bestreichen',
      ]}
      naehrwerte={{
        kalorien: 70,
        kohlenhydrate: 17,
        protein: 0,
        fett: 1,
        ballaststoffe: 3,
      }}
      zubereitung={[
        'Backofen auf 180 °C Umluft vorheizen. Backblech mit Backpapier auslegen.',
        'Äpfel waschen und schälen. Mit einem Apfelausstecher oder Messer das Kerngehäuse entfernen.',
        'In ca. 5–7 mm dicke Ringe schneiden.',
        'Ringe auf dem Blech verteilen. Wer mag: mit geschmolzenem Kokosöl bestreichen.',
        'Gleichmäßig mit Zimt bestreuen.',
        '15–18 Minuten backen, bis die Ringe weich sind und leicht goldbraun werden.',
        'Vollständig abkühlen lassen – Apfel hält Hitze gut, immer Temperatur prüfen!',
      ]}
      tipps={[
        'Säuerliche Sorten (Boskop, Braeburn) werden im Ofen intensiver im Geschmack als süße',
        'Für jüngere Babys: dicker schneiden und länger backen bis sehr weich',
        'Für ältere Kinder: dünner und kürzer backen für mehr Biss (fast wie Apfelchips)',
        'Im Kühlschrank 2 Tage haltbar – schmecken auch kalt gut',
        'Mit einem Apfelentkerner aus dem Supermarkt geht das Vorbereiten in 2 Minuten',
      ]}
      prev={{ title: 'Avocado-Schoko-Creme', href: '/rezepte/avocado-schoko-creme' }}
      next={{ title: 'Kokos-Milchreis', href: '/rezepte/milchreis-kokos' }}
    />
  );
}
