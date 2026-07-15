import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Avocado-Schoko-Creme – glutenfreier Beikost-Brei ab 6 Monaten',
  description:
    'Cremige Avocado-Schoko-Creme aus 3 Zutaten – ohne Zucker, von Natur aus glutenfrei. Als Beikost, Dessert oder Aufstrich für die ganze Familie.',
};

export default function AvocadoSchokoCreméPage() {
  return (
    <RecipeLayout
      title="Avocado-Schoko-Creme"
      kat="Dessert / Beikost"
      badges={[
        { type: 'mint',   label: '💚 ohne Spezialmehl' },
        { type: 'golden', label: '👶 Beikost ab 6 Mon.' },
      ]}
      tagline="Drei Zutaten, fünf Minuten, kein Zucker – und trotzdem schokoladig cremig. Als erster Schokoladen-Moment für Babys, als Dessert für Kleinkinder oder einfach als Aufstrich fürs Brot."
      useCases={['👶 Beikost ab 6 Monaten', '🍫 Schokoladig ohne Zucker', '💚 Ohne Spezialmehl', '⏱ 5 Minuten']}
      minuten={5}
      portionen={2}
      schwierigkeit="Einfach"
      infoBox="💚 Von Natur aus glutenfrei – alle drei Zutaten enthalten von Natur aus kein Gluten. Für Babys unter 1 Jahr keinen Honig verwenden."
      zutaten={[
        '1 reife Avocado',
        '1 reife Banane',
        '1 EL ungesüßtes Kakaopulver (naturreines, ohne Zusätze)',
        'Optional: 1 EL Kokosmilch für dünnere Konsistenz',
      ]}
      naehrwerte={{
        kalorien: 195,
        kohlenhydrate: 22,
        protein: 3,
        fett: 12,
        ballaststoffe: 7,
      }}
      zubereitung={[
        'Avocado halbieren, Kern entfernen, Fruchtfleisch herausholen.',
        'Banane schälen.',
        'Avocado, Banane und Kakaopulver in den Mixer oder in eine Schüssel geben.',
        'Pürieren oder mit der Gabel gründlich zerdrücken, bis eine glatte Creme entsteht.',
        'Nach Bedarf mit Kokosmilch verdünnen.',
        'Sofort servieren oder in einem luftdichten Behälter max. 4 Stunden im Kühlschrank aufbewahren.',
      ]}
      tipps={[
        'Je reifer die Banane, desto süßer die Creme – braune Flecken auf der Schale sind perfekt',
        'Für Babys ab 6 Monaten: etwas Kokosmilch zugeben, damit die Konsistenz löffelbar ist',
        'Ab ~8 Monaten auch als dickere Creme als Fingerfood (auf Reiswaffel oder Toast)',
        'Für ältere Kinder: mit etwas Ahornsirup oder Honig (ab 1 Jahr) süßen',
        'Avocado oxidiert schnell – mit Zitronensaft beträufeln wenn du sie aufbewahrst',
      ]}
      prev={{ title: 'Gedünstete Apfelspalten', href: '/rezepte/apfelspalten' }}
      next={{ title: 'Gebackene Apfelringe', href: '/rezepte/apfelringe' }}
    />
  );
}
