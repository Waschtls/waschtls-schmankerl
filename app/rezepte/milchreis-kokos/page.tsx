import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Kokos-Milchreis glutenfrei – cremig & kleinkindtauglich',
  description:
    'Cremiger Kokos-Milchreis – von Natur aus glutenfrei, kein Spezialmehl, kleinkindtauglich. Dessert oder Mittagessen für die ganze Familie.',
};

export default function MilchreisKokosPage() {
  return (
    <RecipeLayout
      title="Kokos-Milchreis"
      kat="Dessert"
      badges={[
        { type: 'mint',   label: '💚 ohne Spezialmehl' },
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="Macht sich fast von selbst, schmeckt wie Urlaub und Kinder lieben ihn. Funktioniert warm als Mittagessen oder kalt als Dessert – und schmeckt am nächsten Tag genauso gut."
      useCases={['🍽 Mittagessen oder Dessert', '❄️ Kalt genauso lecker', '👶 Kleinkind', '🍱 Vorbereiten']}
      minuten={35}
      portionen={4}
      schwierigkeit="Einfach"
      infoBox="💚 Von Natur aus glutenfrei – Reis enthält kein Gluten. Dieses Rezept kommt ohne jedes Spezialprodukt aus."
      zutaten={[
        '200 g Milchreis (Rundkornreis)',
        '400 ml Kokosmilch',
        '300 ml Milch (oder laktosefrei)',
        '3 EL Zucker oder Honig',
        '1 Prise Salz',
        '1 TL Vanilleextrakt',
      ]}
      naehrwerte={{
        kalorien: 345,
        kohlenhydrate: 53,
        protein: 6,
        fett: 12,
        ballaststoffe: 1,
      }}
      zubereitung={[
        'Reis, Kokosmilch, Milch und Salz in einem Topf aufkochen.',
        'Hitze reduzieren, Deckel drauf, bei niedriger Hitze 25–30 Minuten köcheln. Gelegentlich umrühren damit nichts anbrennt.',
        'Vanille und Zucker einrühren.',
        'Konsistenz prüfen – soll cremig sein, nicht zu fest. Ggf. noch etwas Milch zugeben.',
        'Warm oder kalt mit Früchten, Zimt oder Apfelmus servieren.',
      ]}
      tipps={[
        'Kinder lieben ihn mit Zimt und Zucker obendrauf – klassisch und unschlagbar',
        'Mit Mango oder Erdbeeren wird er zum Dessert-Highlight',
        'Für Kleinkinder unter 1 Jahr: keinen Honig verwenden',
        'Laktoseintolerant? Komplett mit Kokosmilch (700 ml) machen – noch cremiger',
        'Reste im Kühlschrank bis zu 3 Tage haltbar – beim Aufwärmen etwas Milch zugeben',
      ]}
      affiliate={{
        text: 'Kokosmilch aus der Dose (mind. 17% Fett) macht diesen Milchreis besonders cremig – auf glutenfreie Zertifizierung achten.',
      }}
      prev={{ title: 'Kürbisrisotto', href: '/rezepte/kuerbisrisotto' }}
      next={{ title: 'Energiebällchen', href: '/rezepte/energiebaellchen' }}
    />
  );
}
