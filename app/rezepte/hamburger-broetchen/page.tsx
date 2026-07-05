import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Glutenfreie Hamburger Brötchen – Waschtls Schmankerl',
  description: 'Weiche, goldbraune Hamburger Brötchen ohne Gluten – mit Flohsamenschalen und Vollkornreismehl. Mit Sesam, einfrierbar.',
};

export default function HamburgerBroetchen() {
  return (
    <RecipeLayout
      title="Hamburger Brötchen (glutenfrei)"
      kat="Brot & Hefeteig"
      badges={[
        { type: 'golden', label: '🍔 Grill' },
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="Weich, rund, mit Sesam – der Burger kann kommen. Gleicher Teig wie die Hot Dog Brötchen, nur die Form unterscheidet sich. Einfrierbar – Grill-Vorrat anlegen lohnt sich."
      useCases={['🔥 Grill & BBQ', '❄️ Einfrierbar', '👶 Kleinkind', '🍔 Burger']}
      minuten="ca. 150"
      portionen={6}
      einheit="Stücke"
      schwierigkeit="Mittel"
      zeitplan={[
        { label: 'Vorbereitung', value: '15 Min.', icon: '🥣' },
        { label: 'Gehzeit', value: '1,5–2 Std.', icon: '⏳' },
        { label: 'Backzeit', value: '17 Min.', icon: '🔥' },
        { label: 'Gesamt', value: 'ca. 2,5 Std.', icon: '⏱' },
      ]}
      warum="Goldbraun, weich, hält beim Belegen – kein Fertigbrötchen mehr nötig. Gleicher Teig wie die Hot Dog Brötchen: doppelte Menge ansetzen und beide Varianten backen."
      infoBox="Hinweis: Hot Dog Brötchen nutzen denselben Teig – nur die Form (länglich statt rund) unterscheidet sich. Einfach doppelte Menge ansetzen und beide Varianten backen."
      zutaten={[
        '— Psyllium-Gel (zuerst ansetzen)',
        '15 g ganze Flohsamenschalen',
        '160 g warmes Wasser (ca. 40 °C)',
        '— Trockene Zutaten',
        '160 g Vollkornreismehl',
        '115 g Tapiokastärke',
        '75 g Kartoffelstärke',
        '50 g Zucker',
        '8 g grobes Meersalz',
        '7 g Instanttrockenhefe (1 Päckchen)',
        '6 g Xanthan',
        '8 g Backpulver',
        '— Feuchte Zutaten',
        '160 g warme Vollmilch (40–45 °C)',
        '1 Ei (L)',
        '57 g Avocadoöl (oder neutrales Pflanzenöl)',
        '5 g Apfelessig',
        '— Topping',
        '1 Ei, verquirlt (Eistreiche)',
        'Sesam nach Belieben',
      ]}
      naehrwerte={{ kalorien: 360, kohlenhydrate: 57, protein: 3, fett: 11, ballaststoffe: 3 }}
      zubereitung={[
        'Flohsamenschalen mit dem warmen Wasser verrühren und 5–10 Min. quellen lassen bis ein festes Gel entsteht.',
        'Alle trockenen Zutaten in einer großen Schüssel gut vermengen.',
        'Milch, Ei, Öl und Apfelessig dazugeben, dann das Flohsamengel einarbeiten. Alles ca. 2–3 Min. zu einem gleichmäßigen, leicht klebrigen Teig kneten.',
        'Teig in 6 gleiche Portionen (je ca. 140 g) aufteilen, zu runden Scheiben von ca. 2,5 cm Höhe formen und auf ein mit Backpapier belegtes Blech legen.',
        'Mit einem leicht feuchten Tuch abdecken und 1,5–2 Std. bei Raumtemperatur (24–27 °C) gehen lassen.',
        'Backofen auf 200 °C Ober-/Unterhitze vorheizen.',
        'Brötchen mit Eistreiche bestreichen und mit Sesam bestreuen.',
        '16–17 Min. backen bis sie goldbraun sind. Auf einem Gitter vollständig abkühlen lassen.',
      ]}
      tipps={[
        'Komplett abgekühlt einfrieren. Zum Aufbacken 10 Min. bei 180 °C – schmecken wie frisch.',
        'Sesam kurz in der trockenen Pfanne rösten bevor er auf die Brötchen kommt – macht den Unterschied.',
        'Ideal um immer einen Vorrat für spontane Grillabende zu haben.',
        'Doppelte Menge ansetzen und zylindrische Formen formen für Hot Dog Brötchen.',
      ]}
      affiliate={{ text: 'Vollkornreismehl und ganze Flohsamenschalen zertifiziert glutenfrei kaufen – im Reformhaus, dm oder online.' }}
      warenkundeLink={{ label: 'Welches Mehl wofür? Reismehl, Stärke & Co.', href: '/wissen/welches-mehl-wofuer' }}
      relatedRecipes={[
        { title: 'Hot Dog Brötchen', slug: 'hotdog-broetchen', emoji: '🌭', time: '2,5 Std.' },
        { title: 'Italienische Focaccia', slug: 'italienische-focaccia', emoji: '🫓', time: '2 Std.' },
      ]}
    />
  );
}
