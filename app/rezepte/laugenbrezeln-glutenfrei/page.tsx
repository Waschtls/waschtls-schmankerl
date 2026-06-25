import RecipeLayout from '@/app/components/RecipeLayout';

export const metadata = {
  title: 'Glutenfreie Laugenbrezeln – weich, salzig, original bayerisch',
  description: 'Glutenfreie Laugenbrezeln aus dem eigenen Ofen – mit Schär Mix It und Natron-Lauge. Knusprige Kruste, weicher Kern. Einfrierbar. Das beste bayerische GF-Backprojekt.',
};

export default function LaugenbrezelnGlutenfreibPage() {
  return (
    <RecipeLayout
      title="Laugenbrezeln (glutenfrei)"
      kat="Backen"
      badges={[
        { type: 'mint', label: '🥨 Hefeteig' },
      ]}
      tagline="Eine frische Brezel in Bayern zu bekommen ist einfach. Eine glutenfreie Brezel in Bayern zu bekommen – schwieriger. Also backen wir sie selbst. Das Ergebnis ist so nah am Original, dass wir sie seitdem regelmäßig machen. Einfrieren und im Ofen aufbacken klappt auch prima."
      useCases={['Sonntagsfrühstück', 'Brotzeit', 'Einfrieren', 'Zu Obazda oder Weißwurst']}
      minuten={120}
      portionen="8 Brezeln"
      schwierigkeit="Fortgeschritten"
      infoBox="Statt echter Natronlauge (die Bäcker verwenden, aber zu Hause gefährlich ist) nehmen wir Backnatron in kochendem Wasser. Das Ergebnis kommt dem Original sehr nah – dunkle Kruste, leicht bitteres Laugenaroma, weicher Kern."
      zutaten={[
        '— Für den Teig —',
        '350 g Schär Mix It',
        '7 g Trockenhefe (1 Päckchen, GF)',
        '200 ml Wasser, lauwarm',
        '1 Ei (Gr. M)',
        '40 g Butter, weich',
        '1 TL Salz',
        '1 TL Zucker',
        '— Für die Lauge —',
        '1 Liter Wasser',
        '40 g Backnatron (Natron)',
        '— Zum Bestreuen —',
        'Grobes Brezelsalz',
      ]}
      zubereitung={[
        'Hefe in lauwarmem Wasser mit dem Zucker auflösen und 10 Minuten stehen lassen bis Schaum entsteht.',
        'Mehl und Salz mischen. Hefewasser, Ei und weiche Butter dazugeben. 5 Minuten zu einem glatten, leicht klebrigen Teig kneten.',
        'Teig abdecken und 60 Minuten an einem warmen Ort gehen lassen.',
        'Teig in 8 Portionen teilen. Jede Portion mit leicht bemehlten Händen zu einem ca. 40–50 cm langen Strang rollen – in der Mitte dicker, zu den Enden hin dünner.',
        'Strang zur Brezelform legen, enden zweimal umschlingen und andrücken. Auf ein mit Backpapier belegtes Blech legen.',
        'Brezeln nochmals 20 Minuten gehen lassen.',
        'Wasser mit Natron in einem breiten Topf aufkochen (Vorsicht: schäumt stark!). Hitze auf mittlere Stufe reduzieren.',
        'Brezeln einzeln mit einem Schaumlöffel 20–30 Sekunden in die Natronlauge tauchen, herausnehmen und zurück aufs Blech legen.',
        'Mit grobem Salz bestreuen. Bei 200 °C (Ober-/Unterhitze) ca. 20–22 Minuten backen bis sie dunkelbraun sind.',
      ]}
      naehrwerte={{ kalorien: 225, kohlenhydrate: 38, protein: 5, fett: 6, ballaststoffe: 2 }}
      tipps={[
        'GF-Teig ist klebriger als normaler – mit bemehlten oder leicht angefeuchteten Händen rollen.',
        'Wer Anfänger ist: einfach runde Laugenknöpfe oder Laugenstangen formen statt der klassischen Brezelform.',
        'Natron-Lauge unbedingt stark aufkochen und dann auf mittlere Hitze – nur so entsteht die typische Farbe.',
        'Frisch am besten. Am nächsten Tag: 5 Minuten bei 180 °C aufbacken.',
        'Zum Einfrieren: vollständig auskühlen, einfrieren, dann direkt (ohne Auftauen) bei 180 °C ca. 10 Minuten backen.',
        'Zu Obazda, Weißwurst oder einfach mit Butter – typisch bayerisch.',
      ]}
      affiliate={{ text: 'Schär Mix It ist unsere erste Wahl für Hefegebäck. Weitere Empfehlungen auf unserer Produktseite.' }}
      warenkundeLink={{ label: 'Grundrezept süßer Hefeteig – Basis für viele Rezepte', href: '/rezepte/grundrezept-hefeteig-suess' }}
      prev={{ title: 'Grundrezept Hefeteig', href: '/rezepte/grundrezept-hefeteig-suess' }}
      next={{ title: 'Zwetschgendatschi', href: '/rezepte/zwetschgendatschi' }}
    />
  );
}
