import RecipeLayout from '@/app/components/RecipeLayout';

export const metadata = {
  title: 'Glutenfreie Waffeln – klassisch, knusprig, familientauglich',
  description: 'Knusprige glutenfreie Waffeln mit Schär Mix It – in 25 Minuten fertig, einfrierbar und bei Kindern garantiert beliebt. Das Grundrezept für jedes Waffeleisen.',
};

export default function WaffelnKlassischPage() {
  return (
    <RecipeLayout
      title="Waffeln (klassisch)"
      kat="Frühstück"
      badges={[
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="Die Waffel ist bei uns Frühstück, Dessert und Kindergeburtstag in einem. Mit glutenfreiem Mehl gelingen sie genauso knusprig wie früher – und weil man sie gut einfrieren kann, lohnt sich immer eine Doppelportion."
      useCases={['Sonntagsfrühstück', 'Kindergeburtstag-Buffet', 'Dessert mit Eis', 'Einfrieren und auftoasten']}
      minuten={25}
      portionen={4}
      schwierigkeit="Einfach"
      zutaten={[
        '250 g glutenfreies Mehl (z. B. Schär Mix It oder Mix Patisserie)',
        '2 Eier (Gr. M)',
        '200 ml Milch (oder Hafermilch)',
        '80 g Butter, geschmolzen und leicht abgekühlt',
        '2 EL Zucker',
        '1 TL Vanillezucker',
        '1 Päckchen Backpulver (GF – Etikett prüfen)',
        '1 Prise Salz',
        'Etwas Öl oder Butter für das Waffeleisen',
        '— Zum Servieren —',
        'Puderzucker + Zimt',
        'Frische Erdbeeren, Ahornsirup oder Apfelmus',
      ]}
      zubereitung={[
        'Butter schmelzen und etwas abkühlen lassen.',
        'Eier mit Zucker und Vanillezucker in einer Schüssel 2 Minuten aufschlagen, bis die Masse leicht schaumig ist.',
        'Mehl, Backpulver und Salz mischen. Abwechselnd mit der Milch unter die Eiermasse rühren.',
        'Geschmolzene Butter unterrühren – der Teig soll dickflüssig sein, nicht dünn wie Pfannkuchenteig.',
        'Waffeleisen auf höchster Stufe vorheizen und leicht einfetten.',
        'Pro Waffel einen großzügigen Schöpflöffel Teig hineingeben, Deckel schließen.',
        'Ca. 4 Minuten backen bis die Waffel goldbraun ist und nicht mehr dampft – dann aufmachen.',
        'Sofort servieren oder auf einem Gitter abkühlen lassen (damit sie knusprig bleiben).',
      ]}
      naehrwerte={{ kalorien: 345, kohlenhydrate: 43, protein: 9, fett: 14, ballaststoffe: 2 }}
      tipps={[
        'Waffeln direkt aus dem Eisen servieren – stehende Waffeln verlieren schnell die Knusprigkeit. Wer mehrere macht: Ofen auf 80 °C, Waffeln warm halten.',
        'Zum Einfrieren: vollständig auskühlen lassen, dann in Gefrierbeutel. Im Toaster oder kurz im Ofen wieder knusprig machen – klappt perfekt.',
        'Für Kleinkinder: ohne Zucker backen, mit Apfelmus servieren.',
        'Schär Mix It Universal gibt besonders goldbraune Waffeln mit gutem Biss.',
      ]}
      affiliate={{ text: 'Schär Mix It (Universal oder Patisserie) ist unser Mehl der Wahl für Waffeln – gibt gute Struktur und goldbraune Kruste. Weitere Produktempfehlungen auf unserer Produktseite.' }}
      warenkundeLink={{ label: 'Welches glutenfreie Mehl wofür – die große Übersicht', href: '/wissen/welches-mehl-wofuer' }}
      prev={{ title: 'French Toast', href: '/rezepte/french-toast' }}
      next={{ title: 'Grundrezept süßer Hefeteig', href: '/rezepte/grundrezept-hefeteig-suess' }}
    />
  );
}
