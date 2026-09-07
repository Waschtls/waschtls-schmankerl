import RecipeLayout from '@/app/components/RecipeLayout';

export const metadata = {
  title: 'Glutenfreie Pfannkuchen (klassisch) | Waschtls Schmankerl',
  description: 'Klassische glutenfreie Pfannkuchen mit Schär Mix It – hauchdünn, goldbraun, mit allem was drauf gehört.',
};

export default function PfannkuchenKlassischPage() {
  return (
    <RecipeLayout
      title="Pfannkuchen (klassisch)"
      kat="Frühstück"
      badges={[
        { type: 'golden', label: '👶 kleinkindtauglich' },
        { type: 'mint',   label: '⚡ schnell' },
      ]}
      heroImage="/images/pfannkuchen-klassisch.jpg"
      tagline="Der Klassiker, der bei uns samstags auf den Tisch kommt. Mit Schär Mix It werden sie hauchdünn, goldbraun und halten beim Wenden problemlos – genauso wie früher."
      useCases={['Samstagfrühstück', 'Brunch', 'Süßes Abendessen', 'Kindergeburtstag-Buffet']}
      minuten={25}
      portionen={9}
      einheit="Stücke"
      portionenSchritt={3}
      schwierigkeit="Einfach"
      infoBox="Anders als die Reismehl-Variante werden diese Pfannkuchen mit Schär Mix It etwas stabiler und klassischer im Geschmack. Ideal wenn man dünne Crepe-artige Pfannkuchen möchte."
      zutaten={[
        '200 g Schär Mix It Universal',
        '3 Eier (Größe M)',
        '1 TL Zucker',
        '1 Prise Salz',
        '400 ml Milch (ggf. laktosefrei) – bei Bedarf etwas nachschütten',
        '1 Pck. Vanillezucker (optional)',
        'Butter oder Kokosöl zum Ausbacken',
        '— Klassische Toppings —',
        'Apfelmus, Marmelade, Nutella',
        'Frische Beeren, Bananenscheiben',
        'Puderzucker, Ahornsirup',
      ]}
      zubereitung={[
        'Eier mit Zucker und einer Prise Salz in einer Schüssel mit dem Schneebesen aufschlagen bis alles gut vermischt ist.',
        'Mehl (und optional Vanillezucker) zur Ei-Zucker-Mischung geben und glatt rühren – es darf noch etwas dickflüssig sein.',
        'Milch nach und nach zugeben und dabei ständig rühren bis ein glatter, dünnflüssiger Teig entsteht. Ist er zu dick, noch etwas Milch nachschütten.',
        'Teig 5–10 Minuten ruhen lassen – das Mehl quillt leicht auf und der Teig wird geschmeidiger.',
        'Eine beschichtete Pfanne (ca. 24–26 cm) bei mittlerer Hitze erhitzen. Wenig Butter darin schmelzen.',
        'Eine Kelle Teig in die Pfanne gießen und sofort durch Schwenken gleichmäßig verteilen. Der Teig soll dünn sein.',
        'Ca. 2 Minuten backen bis die Oberfläche matt ist und die Ränder sich leicht lösen. Wenden und weitere 1 Minute backen.',
        'Fertige Pfannkuchen auf einem Teller stapeln und mit einem sauberen Küchentuch abdecken – bleiben so warm und weich.',
      ]}
      naehrwerte={{ kalorien: 285, kohlenhydrate: 40, protein: 12, fett: 9, ballaststoffe: 1 }}
      tipps={[
        'Die Pfanne muss wirklich heiß sein bevor der erste Pfannkuchen reinkommt – der erste wird fast immer zum Testen (Köchipfannkuchen).',
        'Mineralwasser statt Milch macht die Pfannkuchen noch luftiger.',
        'Für herzhafte Version: Salz erhöhen, Zucker weglassen – dann als Wrap mit Frischkäse und Lachs.',
        'Teig hält im Kühlschrank bis zu 2 Tage – einfach vor dem Backen kurz umrühren.',
      ]}
      affiliate={{ text: 'Schär Mix It Universal ist unser Favorit für alles was flüssige Teige braucht: Pfannkuchen, Spätzle, Waffeln. Auf zertifiziert glutenfreie Mehlmischungen achten.' }}
      warenkundeLink={{ label: 'Welches Mehl wofür? Reismehl, Mandelmehl & Co.', href: '/wissen/welches-mehl-wofuer' }}
      prev={{ title: 'Kässpatzen', href: '/rezepte/kaesspatzen' }}
      next={{ title: 'Veganes Chili', href: '/rezepte/veganes-chili' }}
    />
  );
}
