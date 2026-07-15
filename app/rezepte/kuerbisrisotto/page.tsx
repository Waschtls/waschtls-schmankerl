import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Kürbisrisotto glutenfrei – cremig, von Natur aus ohne Gluten',
  description:
    'Glutenfreies Kürbisrisotto – ohne Spezialmehl, 40 Minuten, 4 Portionen. Cremig, sättigend und Kinder lieben die goldene Farbe.',
};

export default function KuerbisrisottoPage() {
  return (
    <RecipeLayout
      title="Kürbisrisotto"
      kat="Mittagessen"
      badges={[
        { type: 'mint',   label: '💚 ohne Spezialmehl' },
        { type: 'golden', label: '👶 Beikost' },
      ]}
      tagline="Cremig ohne Sahne, von Natur aus glutenfrei – und Kinder mögen die goldene Farbe des Kürbis. Lässt sich gut vorkochen und schmeckt aufgewärmt genauso gut."
      useCases={['🍂 Herbst & Winter', '❄️ Einfrierbar', '🍱 Vorkochen', '💚 Ohne Spezialmehl']}
      minuten={40}
      portionen={4}
      schwierigkeit="Mittel"
      infoBox="💚 Von Natur aus glutenfrei – Reis enthält kein Gluten. Wichtig: eine glutenfreie Gemüsebrühe verwenden, da manche Brühwürfel Gluten enthalten können."
      zutaten={[
        '300 g Risottoreis (Arborio)',
        '500 g Hokkaido-Kürbis, gewürfelt (mit Schale)',
        '1 Zwiebel, fein gehackt',
        '2 Knoblauchzehen, gehackt',
        '1 l zertifizierte glutenfreie Gemüsebrühe',
        '100 ml trockener Weißwein (oder mehr Brühe)',
        '50 g Parmesan, gerieben',
        '2 EL Olivenöl',
        'Salz, Pfeffer, Muskatnuss',
        'Frische Petersilie zum Garnieren',
      ]}
      naehrwerte={{
        kalorien: 390,
        kohlenhydrate: 62,
        protein: 10,
        fett: 10,
        ballaststoffe: 4,
      }}
      zubereitung={[
        'Brühe in einem kleinen Topf warm halten. Kürbis würfeln.',
        'Olivenöl in einem großen Topf erhitzen, Zwiebel und Knoblauch 3 Minuten glasig andünsten.',
        'Kürbis zugeben, 5 Minuten mitdünsten bis er weich wird.',
        'Reis zugeben, 1–2 Minuten unter Rühren anrösten.',
        'Mit Weißwein ablöschen und einkochen lassen.',
        'Brühe schöpfkellenweise zugeben – immer erst wenn die vorherige Portion aufgesogen ist. 20–25 Minuten rühren.',
        'Parmesan einrühren, mit Salz, Pfeffer und Muskatnuss abschmecken.',
        'Etwas Kürbis zur Seite stellen und als Topping verwenden, mit Petersilie garnieren.',
      ]}
      tipps={[
        'Hokkaido-Kürbis muss nicht geschält werden – die Schale wird beim Kochen weich',
        'Für cremigeres Risotto: am Ende einen Löffel kalte Butter einrühren (Mantecatura)',
        'Einfrieren: portionsweise einfrieren, beim Aufwärmen etwas Wasser oder Brühe zugeben',
        'Kinder mögen ihn mit weniger Parmesan und mehr Kürbis – süßer und milder',
        'Vegane Variante: Hefeflocken statt Parmesan verwenden',
      ]}
      affiliate={{
        text: 'Auf glutenfreie Gemüsebrühe achten – viele konventionelle Brühen enthalten versteckte Glutenspuren.',
      }}
      warenkundeLink={{ label: 'Glutenfreie Lebensmittel: Die große Übersicht', href: '/wissen/glutenfreie-lebensmittel' }}
      prev={{ title: 'Apfel-Zimt-Porridge', href: '/rezepte/apfel-zimt-porridge' }}
      next={{ title: 'Kokos-Milchreis', href: '/rezepte/milchreis-kokos' }}
    />
  );
}
