import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Glutenfreie Hot Dog Brötchen – Waschtls Schmankerl',
  description: 'Weiche, luftige Hot Dog Brötchen ohne Gluten – mit Flohsamenschalen und Vollkornreismehl. Perfekt für den Grill, einfrierbar.',
};

export default function HotdogBroetchen() {
  return (
    <RecipeLayout
      title="Hot Dog Brötchen (glutenfrei)"
      kat="Brot & Hefeteig"
      badges={[
        { type: 'golden', label: '🌭 Grill' },
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="Weich, leicht, mit Mohn – endlich Hot Dog ohne Kompromiss. Gleicher Teig wie die Hamburger Brötchen, nur die Form unterscheidet sich. Einfrierbar lohnt sich."
      useCases={['🔥 Grill & BBQ', '❄️ Einfrierbar', '👶 Kleinkind', '🌭 Hot Dog']}
      minuten="ca. 150"
      portionen={8}
      einheit="Stücke"
      schwierigkeit="Mittel"
      zeitplan={[
        { label: 'Vorbereitung', value: '15 Min.', icon: '🥣' },
        { label: 'Gehzeit', value: '1,5–2 Std.', icon: '⏳' },
        { label: 'Backzeit', value: '17 Min.', icon: '🔥' },
        { label: 'Gesamt', value: 'ca. 2,5 Std.', icon: '⏱' },
      ]}
      warum="Kein Kind merkt den Unterschied – weich, hält beim Belegen, einfrierbar. Wer doppelte Menge ansetzt, bekommt gleichzeitig Hamburger Brötchen."
      infoBox="Hinweis: Hamburger Brötchen nutzen denselben Teig – nur die Form (rund statt lang) unterscheidet sich. Einfach doppelte Menge ansetzen und beide Varianten backen."
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
        'Mohn nach Belieben',
      ]}
      naehrwerte={{ kalorien: 270, kohlenhydrate: 43, protein: 2, fett: 9, ballaststoffe: 3 }}
      zubereitung={[
        'Flohsamenschalen mit dem warmen Wasser verrühren und 5–10 Min. quellen lassen bis ein festes Gel entsteht. Nicht überspringen – das ist der Kleber.',
        'Alle trockenen Zutaten in einer großen Schüssel gut vermengen.',
        'Milch, Ei, Öl und Apfelessig dazugeben, dann das Flohsamengel einarbeiten. Alles ca. 2–3 Min. zu einem gleichmäßigen, leicht klebrigen Teig kneten.',
        'Teig in 8 gleiche Portionen (je ca. 100 g) aufteilen und zu Zylindern von ca. 13 cm Länge formen. Auf ein mit Backpapier belegtes Blech legen.',
        'Mit einem leicht feuchten Tuch abdecken und 1,5–2 Std. bei Raumtemperatur (24–27 °C) gehen lassen, bis das Volumen deutlich zugenommen hat.',
        'Backofen auf 200 °C Ober-/Unterhitze vorheizen.',
        'Brötchen mit Eistreiche bestreichen und mit Mohn bestreuen.',
        '16–17 Min. backen bis sie goldbraun sind. Auf einem Gitter vollständig abkühlen lassen.',
      ]}
      tipps={[
        'Kein Schnellrezept – aber die Geduld lohnt sich. Wer die volle Gehzeit einhält, bekommt luftige Brötchen.',
        'Ein Backofen mit eingeschaltetem Licht (ca. 25 °C) ist ideal als Gärort.',
        'Doppelte Menge ansetzen und die Hälfte einfrieren – zum Aufbacken 10 Min. bei 180 °C.',
        'Für das optimale Hot-Dog-Erlebnis: Brötchen kurz auf dem Grill anrösten.',
      ]}
      affiliate={{ text: 'Vollkornreismehl und ganze Flohsamenschalen zertifiziert glutenfrei kaufen – im Reformhaus, dm oder online.' }}
      warenkundeLink={{ label: 'Welches Mehl wofür? Reismehl, Stärke & Co.', href: '/wissen/welches-mehl-wofuer' }}
      relatedRecipes={[
        { title: 'Hamburger Brötchen', slug: 'hamburger-broetchen', emoji: '🍔', time: '2,5 Std.' },
        { title: 'Italienische Focaccia', slug: 'italienische-focaccia', emoji: '🫓', time: '2 Std.' },
        { title: 'Laugenbrezeln', slug: 'laugenbrezeln-glutenfrei', emoji: '🥨', time: '2 Std.' },
      ]}
    />
  );
}
