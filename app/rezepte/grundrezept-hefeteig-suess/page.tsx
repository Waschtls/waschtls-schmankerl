import RecipeLayout from '@/app/components/RecipeLayout';

export const metadata = {
  title: 'Glutenfreier Hefeteig (süß) – Grundrezept für Zopf, Schnecken & Co.',
  description: 'Das Grundrezept für glutenfreien süßen Hefeteig – mit Schär Mix It. Für Hefezopf, Zimtschnecken, Dampfnudeln oder Zwetschgendatschi. Schritt für Schritt erklärt.',
};

export default function GrundrezeptHefeteigSuessPage() {
  return (
    <RecipeLayout
      title="Grundrezept: Süßer Hefeteig (glutenfrei)"
      kat="Grundrezepte"
      badges={[
        { type: 'mint', label: '🧑‍🍳 Grundrezept' },
      ]}
      tagline="Glutenfreier Hefeteig ist klebrig, weich und verhält sich anders als normaler Teig – und genau das schreckt viele ab. Dabei funktioniert er wunderbar, wenn man ein paar Dinge weiß. Dieses Grundrezept ist die Basis für Hefezopf, Zimtschnecken, Dampfnudeln, Zwetschgendatschi und vieles mehr."
      useCases={['Basis für Zwetschgendatschi', 'Basis für Laugenbrezeln', 'Hefezopf', 'Zimtschnecken', 'Dampfnudeln']}
      minuten={90}
      portionen="1 Grundrezept (ca. 500 g Teig)"
      schwierigkeit="Mittel"
      infoBox="GF-Hefeteig geht weniger auf als normaler Teig – das ist kein Fehler, das ist normal. Der Teig ist nach dem Backen trotzdem fluffig. Wichtig: Die Milch muss lauwarm sein (35–40 °C). Zu heiß tötet die Hefe, zu kalt aktiviert sie nicht."
      zutaten={[
        '350 g Schär Mix It (oder Mix B)',
        '1 Päckchen Trockenhefe (7 g) – auf GF-Kennzeichnung achten!',
        '200 ml Milch, lauwarm (ca. 38 °C)',
        '2 Eier (Zimmertemperatur)',
        '60 g Zucker',
        '60 g Butter, weich (Zimmertemperatur)',
        '1 TL Salz',
        '1 TL Vanillezucker',
        '(optional: abgeriebene Schale ½ Zitrone)',
      ]}
      zubereitung={[
        'Hefe in der lauwarmen Milch auflösen. Einen TL Zucker dazugeben, umrühren und 10 Minuten stehen lassen – es soll sich ein leichter Schaum bilden. Wenn nichts passiert, ist die Hefe inaktiv oder die Milch zu heiß/kalt.',
        'Mehl, restlichen Zucker, Salz und Vanillezucker in einer Schüssel mischen.',
        'Hefemilch, Eier und weiche Butter dazugeben.',
        'Mit Küchenmaschine (Knethaken) oder Handrührgerät 5 Minuten zu einem glatten, etwas klebrigen Teig kneten. Nicht zu viel Mehl nachgeben – GF-Teig soll leicht kleben.',
        'Schüssel abdecken (Folie oder Küchentuch) und den Teig an einem warmen Ort 60 Minuten gehen lassen. Tipp: ausgeschalteter Backofen mit einer Tasse heißem Wasser drin.',
        'Teig herausnehmen und wie im Rezept weiterverarbeiten (Zopf formen, auf Blech streichen, Schnecken rollen etc.).',
        'Geformtes Gebäck nochmals 20 Minuten gehen lassen, dann backen.',
      ]}
      naehrwerte={{ kalorien: 275, kohlenhydrate: 43, protein: 6, fett: 8, ballaststoffe: 2 }}
      tipps={[
        'Dieser Teig ist klebrig – das soll so sein. Mit leicht bemehlten oder feuchten Händen arbeiten.',
        'GF-Hefeteig lässt sich nicht wie normaler Teig ausrollen – für Zopf lieber in Stränge rollen und flechten.',
        'Im Sommer reicht Raumtemperatur zum Gehen. Im Winter: Ofen auf 30 °C vorheizen, ausschalten, Teig hinein.',
        'Dieses Grundrezept passt für: Hefezopf, Dampfnudeln, Zwetschgendatschi, Zimtschnecken, süße Laugenknöpfe.',
        'Frische Hefe geht auch – dann 20 g auf 500 g Mehl, ebenfalls in lauwarmer Milch auflösen.',
      ]}
      affiliate={{ text: 'Schär Mix It oder Mix B ist die verlässlichste Basis für glutenfreien Hefeteig. Weitere Produktempfehlungen auf unserer Produktseite.' }}
      warenkundeLink={{ label: 'Xanthan & Flohsamenschalen – was sie im Teig bewirken', href: '/wissen/xanthan-flohsamenschalen' }}
      prev={{ title: 'Waffeln (klassisch)', href: '/rezepte/waffeln-klassisch' }}
      next={{ title: 'Laugenbrezeln', href: '/rezepte/laugenbrezeln-glutenfrei' }}
    />
  );
}
