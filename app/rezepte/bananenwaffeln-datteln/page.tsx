import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Bananenwaffeln mit Datteln (glutenfrei, ohne Zucker) | Waschtls Schmankerl',
  description:
    'Glutenfreie Waffeln aus gemahlenen Haferflocken und Mandeln – natürlich gesüßt mit Datteln und Banane, ohne raffinierten Zucker. In 30 Minuten fertig.',
};

export default function BananenwaffelnDattelnPage() {
  return (
    <RecipeLayout
      title="Bananenwaffeln mit Datteln"
      kat="Frühstück / Dessert"
      badges={[
        { type: 'mint',   label: '💚 ohne Spezialmehl' },
        { type: 'mint',   label: '🍌 ohne raffinierten Zucker' },
        { type: 'golden', label: '👶 Kleinkindgeeignet' },
      ]}
      tagline="Waffeln ohne Mehl aus der Backabteilung und ohne Zucker – dafür mit Banane, Datteln und gemahlenen Haferflocken. Schmecken wie ein richtiges Frühstück und kommen bei Kindern genauso gut an wie die klassische Variante."
      useCases={['🍌 Frühstück am Wochenende', '🧇 Dessert mit Joghurt', '💚 Ohne Zucker', '⏱ 30 Minuten']}
      minuten={30}
      portionen={4}
      einheit="Portionen"
      schwierigkeit="Einfach"
      zeitplan={[
        { label: 'Vorbereitung', value: '10 Min.', icon: '🥣' },
        { label: 'Backzeit',     value: '20 Min.', icon: '🧇' },
        { label: 'Gesamt',       value: '~30 Min.', icon: '✅' },
      ]}
      warum="Keine Fertigmischung, kein Weißmehl, kein Zucker – und trotzdem echte Waffeln. Die Süße kommt von Datteln und Banane, die Struktur von gemahlenen Haferflocken und Mandeln. Wer keine Hafermilch hat, nimmt einfach normale Milch."
      zutaten={[
        '120 g gemahlene Haferflocken (zertifiziert glutenfrei)',
        '50 g gemahlene Mandeln',
        '1 TL Backpulver',
        'Zimt nach Geschmack',
        '— Nasse Zutaten',
        '1 reife Banane',
        '70 g Datteln (entsteint, weich)',
        '2 Eier',
        '120 g Hafermilch oder normale Milch',
        '— Zum Toppen',
        'Veganer Joghurt oder normaler Joghurt',
        'Frische Erdbeeren',
        'Gehobelte Mandeln',
      ]}
      zubereitung={[
        'Datteln falls nötig 10 Minuten in warmem Wasser einweichen, damit sie weich genug zum Pürieren sind.',
        'Banane, Eier, Datteln und Hafermilch (oder normale Milch) in den Mixer geben und glatt pürieren.',
        'Gemahlene Haferflocken, gemahlene Mandeln, Backpulver und Zimt in einer großen Schüssel mischen.',
        'Die pürierte Masse zu den trockenen Zutaten geben und alles zu einem gleichmäßigen Teig verrühren. Der Teig darf ruhig etwas dicker sein.',
        'Waffeleisen vorheizen und leicht einfetten (Kokosöl oder etwas Butter).',
        'Je nach Waffeleisen ca. 4–5 Minuten backen, bis die Waffeln goldbraun und knusprig sind.',
        'Mit Joghurt, frischen Erdbeeren und gehobelten Mandeln servieren.',
      ]}
      naehrwerte={{
        kalorien: 280,
        kohlenhydrate: 32,
        protein: 9,
        fett: 12,
        ballaststoffe: 5,
      }}
      infoBox="Gemahlene Haferflocken müssen zertifiziert glutenfrei sein – Hafer wird oft auf denselben Maschinen wie Weizen verarbeitet. Entweder zertifizierte GF-Haferflocken kaufen und selbst mahlen (Blender oder Mixer), oder fertige gemahlene GF-Haferflocken verwenden. Das durchgestrichene Ähren-Symbol auf der Packung ist das entscheidende Kriterium."
      tipps={[
        'Haferflocken selbst mahlen: einfach in den Mixer geben und ca. 30 Sekunden auf höchster Stufe zu feinem Mehl verarbeiten.',
        'Je reifer die Banane, desto süßer der Teig – braune Stellen auf der Schale sind perfekt.',
        'Normale Milch funktioniert genauso gut wie Hafermilch – beides gibt die gleiche Konsistenz.',
        'Waffeln nicht zu früh aus dem Eisen nehmen – lieber 1 Minute länger backen, dann werden sie außen knuspriger.',
        'Der Teig hält sich bis zu einem Tag im Kühlschrank – einfach vor dem Backen nochmal kurz umrühren.',
        'Einfrieren klappt gut: abgekühlte Waffeln in Gefrierbeutel, auftoasten wenn gewünscht.',
      ]}
      relatedRecipes={[
        { title: 'Waffeln (klassisch)',    slug: 'waffeln-klassisch',       emoji: '🧇', time: '25 Min.' },
        { title: 'Dicke Pfannkuchen',      slug: 'dicke-pfannkuchen',       emoji: '🥞', time: '20 Min.' },
        { title: 'Apfel-Zimt Baked Oats', slug: 'apfel-zimt-baked-oats',   emoji: '🍎', time: '40 Min.' },
      ]}
    />
  );
}
