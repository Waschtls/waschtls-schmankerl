import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Glutenfreie Bananenmuffins ohne Mehl – Waschtls Schmankerl',
  description: 'Bananenmuffins ohne Mehl und ohne Zucker – nur 4 Zutaten, glutenfrei und bei Kindern ein Hit.',
};

export default function Bananenmuffins() {
  return (
    <RecipeLayout
      title="Bananenmuffins (ohne Mehl)"
      kat="Snacks"
      badges={[
        { type: 'mint', label: '💚 ohne Spezialmehl' },
        { type: 'mint', label: '🚫🍬 zuckerfrei' },
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="Kein Zucker, kein normales Mehl, nur 4 Zutaten – in 30 Minuten fertig. Perfekte Schulmause die Kinder selbst machen können."
      useCases={['🎒 Brotdose', '⏱ Unter 30 Min', '👶 Kleinkind', '❄️ Einfrierbar']}
      minuten={30}
      portionen={12}
      einheit="Muffins"
      schwierigkeit="Einfach"
      warum="Kein Zucker, kein Mehl – und trotzdem lecker. Kinder können den ganzen Teig selbst machen. Doppelte Menge backen und die Hälfte einfrieren."
      zutaten={[
        '3 reife Bananen (sehr reif = süßer)',
        '2 Eier',
        '150 g zertifiziert glutenfreie Haferflocken',
        '1 TL Backpulver (glutenfrei)',
        '(optional: GF-Schokodrops, Blaubeeren oder Zimt)',
      ]}
      naehrwerte={{ kalorien: 95, kohlenhydrate: 16, protein: 3, fett: 2, ballaststoffe: 2 }}
      zubereitung={[
        'Backofen auf 180 °C Ober-/Unterhitze vorheizen. Muffinform mit Papierförmchen auslegen.',
        'Bananen in einer Schüssel mit einer Gabel zerdrücken – je reifer, desto süßer und sämiger.',
        'Eier aufschlagen und unter die Bananenmasse rühren.',
        'Haferflocken und Backpulver unterrühren. Optional: Schokodrops oder Blaubeeren unterheben.',
        'Teig in die Förmchen füllen (¾ voll).',
        'Ca. 18–20 Minuten backen bis die Oberfläche leicht gebräunt ist. Stäbchenprobe.',
        '10 Minuten abkühlen lassen – dann sind sie perfekt.',
      ]}
      tipps={[
        'Wir backen doppelte Menge und frieren die Hälfte ein. Morgens rausnehmen – mittags in der Brotdose aufgetaut.',
        'Hält 2 Monate im Gefrierer.',
        'Je reifer die Bananen, desto süßer die Muffins – schwarze Flecken auf der Schale sind ideal.',
        'Zertifiziert glutenfreie Haferflocken verwenden – normale Haferflocken können kontaminiert sein.',
      ]}
      affiliate={{ text: 'Zertifiziert glutenfreie Haferflocken verwenden – normaler Hafer ist in der Regel durch Kreuzverunreinigung belastet.' }}
      warenkundeLink={{ label: 'Glutenfreie Lebensmittel – worauf achten?', href: '/wissen/glutenfreie-lebensmittel' }}
      relatedRecipes={[
        { title: 'Energiebällchen', slug: 'energiebaellchen', emoji: '🟤', time: '15 Min.' },
        { title: 'Frozen Banana Bites', slug: 'frozen-banana-bites', emoji: '🍫', time: '15 Min.' },
        { title: 'Bananenbrot mit Nutella', slug: 'bananenbrot-nutella', emoji: '🍌', time: '60 Min.' },
      ]}
    />
  );
}
