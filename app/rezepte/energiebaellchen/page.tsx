import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Glutenfreie Energiebällchen – ohne Backen, für Brotdose & Ausflug',
  description:
    'Energiebällchen glutenfrei – ohne Backen, ohne Zucker, 15 Minuten. Perfekter Snack für Brotdose, Ausflüge und Schule.',
};

export default function EnergiebaellchenPage() {
  return (
    <RecipeLayout
      title="Energiebällchen"
      kat="Snacks"
      badges={[
        { type: 'mint',   label: '💚 ohne Spezialmehl' },
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="Kein Backen, kein Zucker, 15 Minuten – fertig. Hält eine Woche im Kühlschrank und lässt sich einfrieren. Der ideale Powerschnack für Schule, Ausflüge und den Hunger zwischendurch."
      useCases={['🎒 Brotdose', '🏕 Ausflug', '❄️ Einfrierbar', '👶 Kleinkind', '⏱ Unter 20 Min']}
      minuten="15 + 30 Min. kühlen"
      portionen="~16 Stück"
      schwierigkeit="Einfach"
      infoBox="💚 Von Natur aus glutenfrei – nur zertifiziert glutenfreie Haferflocken verwenden. Alle anderen Zutaten sind ohne Gluten."
      zutaten={[
        '150 g zertifiziert glutenfreie Haferflocken',
        '4 EL Erdnussbutter (oder Mandelmus)',
        '3 EL Honig',
        '2 EL Kakaopulver (ungesüßt)',
        '50 g Schokodrops oder gehackte Schokolade',
        '1 Prise Salz',
      ]}
      naehrwerte={{
        kalorien: 200,
        kohlenhydrate: 22,
        protein: 5,
        fett: 10,
        ballaststoffe: 3,
      }}
      zubereitung={[
        'Alle Zutaten in einer Schüssel gut vermischen.',
        'Masse 30 Minuten im Kühlschrank kalt stellen – dann lässt sie sich besser formen.',
        'Mit feuchten Händen kleine Bällchen (Walnussgröße) formen.',
        'Optional: in Kokosraspeln oder Kakaopulver wälzen.',
        'Im Kühlschrank bis zu 1 Woche haltbar.',
      ]}
      tipps={[
        'Kinder können beim Rollen mitmachen – sie essen die Bällchen danach viel lieber',
        'Für Nussallergiker: Erdnussbutter durch Sonnenblumenkernmus ersetzen',
        'In der Brotdose mit einem kleinen Kühlakku transportieren – bleibt so frisch',
        'Größere Portion machen und einfrieren – einzeln entnehmbar',
        'Weniger Süße: Honig auf 2 EL reduzieren und eine zerdrückte reife Banane zugeben',
      ]}
      affiliate={{
        text: 'Zertifiziert glutenfreie Haferflocken und gutes Mandelmus – wir bestellen beides online.',
        href: 'https://www.amazon.de/s?k=glutenfreie+Haferflocken+Mandelmus&tag=waschtl-21',
        label: 'Bei Amazon ansehen →',
      }}
      prev={{ title: 'Kokos-Milchreis', href: '/rezepte/milchreis-kokos' }}
    />
  );
}
