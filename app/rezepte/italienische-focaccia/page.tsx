import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Glutenfreie Italienische Focaccia – Waschtls Schmankerl',
  description: 'Luftige glutenfreie Focaccia mit Knoblauchbutter und Parmesan – mit Caputo Fioreglut. Knusprige Kruste, weiches Inneres, kein Kneten nötig.',
};

export default function ItalienischeFocaccia() {
  return (
    <RecipeLayout
      title="Italienische Focaccia (glutenfrei)"
      kat="Brot & Hefeteig"
      badges={[
        { type: 'mint', label: '🫓 Kein Kneten' },
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="Knusprige Kruste, luftiges Inneres, Knoblauchbutter und Parmesan – wie in Italien. Mit Caputo Fioreglut kein Kneten nötig, kein Kompromiss beim Geschmack."
      useCases={['🍕 Beilage', '🥙 Sandwich-Brot', '🫓 Snack', '👨‍👩‍👧 Familie']}
      minuten="ca. 120"
      portionen={18}
      einheit="Stücke"
      schwierigkeit="Einfach"
      zeitplan={[
        { label: 'Vorbereitung', value: '15 Min.', icon: '🥣' },
        { label: 'Gehzeit', value: '1–1,5 Std.', icon: '⏳' },
        { label: 'Backzeit', value: '25 Min.', icon: '🔥' },
        { label: 'Gesamt', value: 'ca. 2 Std.', icon: '⏱' },
      ]}
      warum="Kein Kneten nötig, authentisch luftig – funktioniert nur mit Caputo Fioreglut. Das zweimalige Auftragen der Knoblauchbutter ist der entscheidende Trick."
      infoBox="⚠️ Nur mit Caputo Fioreglut: Das einzige Mehl das hier funktioniert. Es enthält glutenfreie Weizenstärke und ist für Zöliakiepatienten sicher – aber nicht für Menschen mit Weizenallergie geeignet."
      zutaten={[
        '— Knoblauchbutter',
        '40 g Butter (gesalzen)',
        '4 Knoblauchzehen, fein gehackt (nach Wunsch)',
        '40 g Olivenöl (extra vergine)',
        '2 EL frische Petersilie, gehackt',
        '— Teig',
        '520 g Caputo Fioreglut',
        '12 g Instanttrockenhefe (ca. 1,5 Päckchen)',
        '12,5 g Zucker',
        '12 g grobes Meersalz',
        '480 g warmes Wasser (50–55 °C)',
        '42 g Olivenöl (extra vergine)',
        '— Form & Topping',
        '28 g Olivenöl (für die Form)',
        '40 g Parmesan, gerieben',
        '1 TL Fleur de Sel (Flockensalz)',
      ]}
      naehrwerte={{ kalorien: 186, kohlenhydrate: 24, protein: 3, fett: 9, ballaststoffe: 1 }}
      zubereitung={[
        'Butter in einem Topf bei mittlerer Hitze schmelzen. Knoblauch (nach Wunsch) dazugeben und ca. 1 Min. anschwitzen bis er duftet. Olivenöl und Petersilie einrühren. Beiseite stellen.',
        'Caputo Fioreglut, Hefe, Zucker und Salz in einer großen Schüssel (oder Küchenmaschine mit Flachrührer) verquirlen.',
        'Warmes Wasser und Olivenöl dazugeben, 4 Min. auf mittlerer Stufe rühren. Der Teig ist sehr klebrig – wie Keksteig. Kein Mehl nachgeben!',
        'Eine 23×33 cm Backform mit 28 g Olivenöl einfetten. Teig hineingeben und mit geölten Händen in die Ecken drücken.',
        'Mit Folie abdecken und 1–1,5 Std. an einem warmen Ort gehen lassen bis sich das Volumen verdoppelt hat.',
        'In den letzten 30 Min. der Gehzeit: Backofen auf 220 °C Ober-/Unterhitze vorheizen.',
        'Den größten Teil der Knoblauchbutter über den Teig gießen (1–2 EL für später aufbewahren). Mit geölten Fingern tief in den Teig eindrücken – die typischen Focaccia-Dellen entstehen.',
        'Fleur de Sel und die Hälfte des Parmesans darüber streuen.',
        '23–26 Min. backen bis die Oberfläche goldbraun ist und sich die Ränder vom Blech lösen.',
        'Restliche Knoblauchbutter sofort nach dem Backen aufstreichen, restlichen Parmesan darüber. Kurz abkühlen lassen, dann in Stücke schneiden. Warm servieren.',
      ]}
      tipps={[
        'Zweimal Knoblauchbutter ist der Trick: vor dem Backen zieht sie in die Dellen ein, nach dem Backen gibt sie dem Rand Glanz und Geschmack.',
        'Am besten am Tag des Backens servieren – frisch ist sie am besten.',
        'Caputo Fioreglut bei Amazon.de, in italienischen Feinkostläden oder online erhältlich. Ca. 5–7 € pro kg.',
        'Ohne Knoblauch schmeckt sie auch hervorragend – einfach nur Olivenöl + Petersilie nehmen.',
      ]}
      affiliate={{ text: 'Caputo Fioreglut: Das einzige Mehl das hier funktioniert. Bei Amazon.de und in italienischen Feinkostläden erhältlich.' }}
      warenkundeLink={{ label: 'Welches Mehl wofür? Caputo Fioreglut erklärt', href: '/wissen/welches-mehl-wofuer' }}
      relatedRecipes={[
        { title: 'Hot Dog Brötchen', slug: 'hotdog-broetchen', emoji: '🌭', time: '2,5 Std.' },
        { title: 'Glutenfreie Pizza', slug: 'pizza-glutenfrei', emoji: '🍕', time: '45 Min.' },
      ]}
    />
  );
}
