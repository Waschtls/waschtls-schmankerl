import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Glutenfreie Protein-Bagel – Waschtls Schmankerl',
  description: 'Glutenfreie Quark-Bagel mit 22g Eiweiß pro Stück – ohne Hefe, in 30 Minuten fertig. Ideal für die Brotdose.',
};

export default function ProteinBagel() {
  return (
    <RecipeLayout
      title="Protein-Bagel (glutenfrei)"
      kat="Frühstück"
      badges={[
        { type: 'mint', label: '💪 22g Eiweiß' },
        { type: 'golden', label: '⚡ 30 Min.' },
      ]}
      tagline="Kein Hefe-Warten, kein Kneten – Quark-Teig formen, rein in den Ofen, fertig. 22 g Eiweiß pro Bagel, ideal für die Brotdose."
      useCases={['🎒 Brotdose', '⏱ Unter 30 Min', '💪 Highprotein', '❄️ Einfrierbar']}
      minuten={30}
      portionen={4}
      einheit="Stücke"
      schwierigkeit="Einfach"
      warum="Kein Hefe-Warten, kein Kneten – und trotzdem echte Bagel-Form mit 22 g Eiweiß. Wer kein Proteinpulver hat: einfach 50 g mehr Schär Mix It! nehmen."
      infoBox="💡 Proteinpulver: Neutrales Proteinpulver (Whey oder Pflanzlich) ist meist glutenfrei – immer das Etikett der konkreten Marke prüfen. Wer kein Proteinpulver will: einfach 50 g mehr Schär Mix It! nehmen."
      zutaten={[
        '250 g Magerquark',
        '150 g Schär Mix It! (GF-Allzweckmehl)',
        '50 g neutrales Proteinpulver (GF)',
        '8 g Backpulver (glutenfrei)',
        '35 ml Wasser',
        'etwas Salz',
        '— Zum Bestreichen',
        '1 Eigelb',
        '2 TL Leinsamen (oder Sesam, Mohn)',
      ]}
      naehrwerte={{ kalorien: 245, kohlenhydrate: 30, protein: 23, fett: 3, ballaststoffe: 2 }}
      zubereitung={[
        'Backofen auf 180 °C Ober-/Unterhitze vorheizen. Backblech mit Backpapier belegen.',
        'Quark, GF-Mehl, Proteinpulver, Backpulver, Wasser und Salz zu einem Teig verkneten – am besten mit den Händen, der Teig ist etwas klebrig.',
        'Teig in 4 gleich große Stücke aufteilen. Jedes Stück zu einer Rolle formen und zu einem Ring schließen.',
        'Bagels auf das Backblech legen, mit Eigelb bestreichen und mit Leinsamen bestreuen.',
        'Ca. 20 Minuten backen bis sie goldbraun sind.',
        'Vollständig auskühlen lassen – warm sind sie innen noch etwas feucht.',
      ]}
      tipps={[
        'Wer keinen Leinsamen mag: Sesam, Mohn oder Kürbiskerne funktionieren genauso.',
        'Frisch am besten – am nächsten Tag kurz toasten.',
        'Einfrieren möglich – einzeln einwickeln und aufgefroren toasten.',
        'Für extra Stabilität: 10 Min. nach dem Backen im ausgeschalteten Ofen mit offener Tür lassen.',
      ]}
      affiliate={{ text: 'Schär Mix It! Universal ist die Basis für diese Bagel – erhältlich bei dm, Rewe und online.' }}
      warenkundeLink={{ label: 'Welches Mehl wofür?', href: '/wissen/welches-mehl-wofuer' }}
      relatedRecipes={[
        { title: 'Quark-Gemüse-Fladen', slug: 'quark-gemuese-fladen', emoji: '🫓', time: '30 Min.' },
        { title: 'Flammkuchen-Ofenpfannkuchen', slug: 'flammkuchen-ofenpfannkuchen', emoji: '🧀', time: '30 Min.' },
      ]}
    />
  );
}
