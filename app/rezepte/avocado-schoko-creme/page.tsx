import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Avocado-Schoko-Creme – glutenfreier Kleinkind-Snack ohne Zucker',
  description:
    'Cremige Schoko-Creme aus Avocado und Banane – von Natur aus glutenfrei, ohne Zucker, in 5 Minuten fertig. Perfekt für Kleinkinder ab 1 Jahr.',
};

export default function AvocadoSchokoCremePage() {
  return (
    <RecipeLayout
      title="Avocado-Schoko-Creme"
      kat="Snacks"
      badges={[
        { type: 'mint',   label: '💚 von Natur aus glutenfrei' },
        { type: 'golden', label: '👶 ab 1 Jahr' },
        { type: 'mint',   label: '🍫 ohne Zucker' },
      ]}
      tagline="Klingt ungewöhnlich – schmeckt wie Schokomousse. Avocado macht die Creme unglaublich cremig, Banane bringt die natürliche Süße, Kakao den Geschmack. Fertig in 5 Minuten, kein Kochen, kein Backen."
      useCases={['👶 Ab 1 Jahr', '⏱ 5 Minuten', '💚 Ohne Zucker', '🥑 Ohne Backen', '🚫 Kein Gluten']}
      minuten="5 Min."
      portionen="1–2 Portionen"
      schwierigkeit="Sehr einfach"
      infoBox="💚 Von Natur aus glutenfrei – alle Zutaten dieses Rezepts enthalten kein Gluten. Kakaopulver immer auf GF-Kennzeichnung prüfen."
      zutaten={[
        '1 reife Banane (ca. 80 g)',
        '½ reife Avocado (ca. 60 g)',
        '1–2 TL ungesüßtes Kakaopulver',
        'Optional: 1 Prise Zimt oder Vanille',
        'Optional zum Toppen: Blaubeeren, Kokosraspeln oder Hanfsamen',
      ]}
      naehrwerte={{
        kalorien: 180,
        kohlenhydrate: 22,
        protein: 3,
        fett: 9,
        ballaststoffe: 5,
      }}
      zubereitung={[
        'Banane schälen und in grobe Stücke schneiden. Avocado halbieren, Kern entfernen, Fruchtfleisch mit einem Löffel herauslösen.',
        'Alles zusammen mit dem Kakaopulver in eine Schüssel geben.',
        'Mit einer Gabel gründlich zerdrücken und glatt rühren – oder mit einem Stabmixer pürieren für eine besonders cremige Konsistenz.',
        'Nach Geschmack mit einer Prise Zimt oder Vanille verfeinern.',
        'In ein Schälchen füllen und optional mit Blaubeeren, Kokosraspeln oder Hanfsamen toppen.',
        'Sofort servieren – die Creme verfärbt sich nach ca. 30 Minuten leicht braun (ist aber noch gut).',
      ]}
      tipps={[
        'Je reifer die Banane, desto süßer die Creme – überreife Bananen mit brauner Schale sind ideal',
        'Auch ohne Mixer möglich – einfach besonders gründlich mit der Gabel zerdrücken',
        'Für ältere Kinder: als Aufstrich auf glutenfreiem Toast oder Reiswaffel',
        'Als Topping auf Porridge oder Baked Oats – gibt Schokoladengeschmack ohne Zucker',
        'Nicht einfrieren – die Textur leidet. Frisch zubereiten dauert nur 5 Minuten',
      ]}
      prev={{ title: 'Energiebällchen', href: '/rezepte/energiebaellchen' }}
      next={{ title: 'Apfelringe mit Frischkäse', href: '/rezepte/apfelringe-frischkaese' }}
    />
  );
}
