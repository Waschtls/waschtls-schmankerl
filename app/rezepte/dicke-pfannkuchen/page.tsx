import RecipeLayout from '@/app/components/RecipeLayout';

export const metadata = {
  title: 'Pancakes glutenfrei – Waschtls Schmankerl',
  description: 'Fluffige, dicke Pancakes – glutenfrei, mit steif geschlagenem Eiweiß extra luftig. Mit Erdbeeren, Blaubeeren und Ahornsirup.',
};

export default function DickePfannkuchenPage() {
  return (
    <RecipeLayout
      title="Pancakes"
      kat="Frühstück"
      badges={[
        { type: 'golden', label: '👶 kleinkindtauglich' },
        { type: 'mint', label: '☀️ Sonntagsfrühstück' },
      ]}
      tagline="Dick, fluffig, goldbraun – und der Trick steckt im Eiweiß. Wer es steif schlägt und am Schluss unterhebt, bekommt Pancakes die sich kaum vom Original unterscheiden. Mit Erdbeeren, Blaubeeren und Ahornsirup der perfekte Sonntagmorgen."
      useCases={['Sonntagsfrühstück', 'Kindergeburtstag-Buffet', 'Brunch', 'Dessert']}
      heroImage="/images/dicke-pfannkuchen.jpg"
      minuten={25}
      portionen={10}
      einheit="Pancakes"
      portionenSchritt={5}
      schwierigkeit="Einfach"
      infoBox="Der Trick für extra fluffige Pancakes: Eigelb und Eiweiß trennen, das Eiweiß steif schlagen und am Schluss vorsichtig unterheben. Das bringt Luft in den Teig – ohne Übermixen, das macht sie zäh."
      zutaten={[
        '150 g glutenfreies Mehl (Schär Mix It)',
        '2 TL Backpulver (GF)',
        '1 EL Zucker',
        '1 Prise Salz',
        '2 Eier (Gr. M), getrennt',
        '200 ml Milch (oder Hafermilch GF)',
        '2 EL Butterschmalz (oder Butter), geschmolzen',
        '1 TL Vanilleextrakt',
        '— Zum Servieren —',
        'Erdbeeren, Blaubeeren oder anderes Obst',
        'Ahornsirup, Puderzucker',
      ]}
      zubereitung={[
        'Trockene Zutaten (Mehl, Backpulver, Zucker, Salz) in einer großen Schüssel mischen.',
        'Eigelb, Milch, geschmolzenes Butterschmalz und Vanille verrühren – zu den trockenen Zutaten geben und nur kurz vermengen. Klümpchen sind okay.',
        'Eiweiß in einer sauberen, fettfreien Schüssel mit dem Mixer steif schlagen – es soll schnittfeste Spitzen bilden.',
        'Eischnee in zwei Portionen vorsichtig unter den Teig heben – nicht rühren, sondern mit einem Teigschaber von unten nach oben falten. Luft erhalten!',
        'Pfanne bei niedriger bis mittlerer Hitze erhitzen, etwas Butterschmalz darin schmelzen.',
        'Je 2–3 EL Teig pro Pancake hineingeben. Warten bis sich an der Oberfläche kleine Luftbläschen bilden und die Ränder fest werden – erst dann wenden (ca. 2–3 Min.).',
        'Weitere 1–2 Minuten backen bis die Unterseite goldbraun ist.',
        'Sofort servieren mit frischen Früchten und Ahornsirup.',
      ]}
      naehrwerte={{ kalorien: 120, kohlenhydrate: 18, protein: 4, fett: 4, ballaststoffe: 1 }}
      tipps={[
        'Teig zu zäh? Einfach etwas Milch nachschütten und kurz verrühren – der Teig soll dickflüssig fließen, nicht klumpen.',
        'Niedrige Temperatur ist entscheidend: die Pfanne darf nach dem Einfetten nicht rauchen. Lieber länger warten als zu heiß.',
        'Pancakes schmecken frisch am besten – am Tisch stapeln und sofort essen. Wer warten muss: bei 80 °C im Ofen warm halten, aber nicht länger als 15 Minuten.',
        'Butterschmalz hat einen höheren Rauchpunkt als Butter und gibt den Pancakes einen leicht nussigen Geschmack – sehr empfehlenswert.',
        'Reste lassen sich einfrieren und im Toaster aufwärmen.',
      ]}
      affiliate={undefined}
      warenkundeLink={{ label: 'Welches glutenfreie Mehl wofür – die große Übersicht', href: '/wissen/welches-mehl-wofuer' }}
      prev={{ title: 'Waffeln (klassisch)', href: '/rezepte/waffeln-klassisch' }}
      next={{ title: 'Granola', href: '/rezepte/granola' }}
    />
  );
}
