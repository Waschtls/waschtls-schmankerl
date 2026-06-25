import RecipeLayout from '@/app/components/RecipeLayout';

export const metadata = {
  title: 'Glutenfreier Zwetschgendatschi – bayerischer Pflaumenkuchen vom Blech',
  description: 'Echter bayerischer Zwetschgendatschi glutenfrei – mit Hefeteig aus Schär Mix It. Saisonal, familientauglich, mit oder ohne Streusel. Das Herbstrezept schlechthin.',
};

export default function ZwetschgendatschiPage() {
  return (
    <RecipeLayout
      title="Zwetschgendatschi (glutenfrei)"
      kat="Backen"
      badges={[
        { type: 'mint', label: '🍑 Saisonal (Aug–Okt)' },
      ]}
      tagline="Ein echter Zwetschgendatschi braucht drei Dinge: reife Zwetschgen, einen ordentlichen Hefeteig und Geduld beim Gehen lassen. Den Rest macht der Ofen. Bei uns kommt er jedes Jahr im August, wenn die Zwetschgen am Baum hängen – und er ist jedes Mal weg, bevor er kalt wird."
      useCases={['Kaffeetafel', 'Saisonal im Herbst', 'Familienbesuch', 'Reste einfrieren']}
      minuten={100}
      portionen="1 Blech (ca. 12 Stücke)"
      schwierigkeit="Mittel"
      infoBox="Reife Zwetschgen sind entscheidend. Unreife werden im Ofen sauer und wässrig. Die besten Datschi entstehen mit Zwetschgen, die am Baum fast überreif sind – süß, aromatisch, ein bisschen weich."
      zutaten={[
        '— Für den Hefeteig —',
        '350 g Schär Mix It',
        '7 g Trockenhefe (GF)',
        '180 ml Milch, lauwarm',
        '2 Eier (Zimmertemperatur)',
        '70 g Zucker',
        '70 g Butter, weich',
        '1 Prise Salz',
        '1 TL Vanillezucker',
        '— Für den Belag —',
        '1 kg Zwetschgen (reif)',
        '2 EL Zucker',
        '1 TL Zimt',
        '— Optional: Streusel —',
        '60 g Butter (kalt)',
        '60 g Mehl (GF)',
        '60 g Zucker',
      ]}
      zubereitung={[
        'Hefeteig nach Grundrezept zubereiten: Hefe in lauwarmer Milch mit 1 TL Zucker auflösen (10 Min.), dann alle Zutaten zu einem glatten Teig kneten. 60 Minuten abgedeckt gehen lassen.',
        'Zwetschgen waschen, trocknen, entsteinen. Entweder halbieren oder aufschneiden und aufklappen (Fächerschnitt).',
        'Optional: Streusel zubereiten – Butter in Stücke, Mehl und Zucker dazugeben, mit den Fingern zu krümeligen Streuseln verreiben.',
        'Backblech (ca. 30×40 cm) fetten oder mit Backpapier auslegen.',
        'Hefeteig auf dem Blech gleichmäßig ausdrücken – ca. 1 cm dick. Mit leicht feuchten Händen arbeiten.',
        'Nochmals 20 Minuten gehen lassen.',
        'Zwetschgen dicht schuppenartig auf den Teig legen. Zucker und Zimt darüberstreuen. Wer möchte, verteilt noch Streusel obendrauf.',
        'Im vorgeheizten Ofen bei 180 °C (Ober-/Unterhitze) 30–35 Minuten backen bis der Rand goldbraun ist und die Zwetschgen weich.',
        'Leicht abkühlen lassen, mit Schlagsahne oder Vanilleeis servieren.',
      ]}
      naehrwerte={{ kalorien: 285, kohlenhydrate: 47, protein: 5, fett: 8, ballaststoffe: 3 }}
      tipps={[
        'Klassisch bayerisch: ohne Streusel, nur Zimt-Zucker. Wer's knuspriger mag: Streusel drauf.',
        'Teig muss nicht glatt wie ein Spiegel sein – rustikale Oberfläche ist typisch und schön.',
        'Zum Einfrieren: in Stücke schneiden, einzeln einfrieren. Im Ofen bei 160 °C ca. 15 Minuten aufbacken.',
        'Mit Tiefkühlzwetschgen geht's auch – gut abtauen und gut abtropfen lassen, sonst wird der Teig nass.',
        'Wenn Zwetschgen nicht Saison haben: Pflaumen funktionieren genauso gut.',
      ]}
      affiliate={{ text: 'Schär Mix It ist unsere Basis für den Hefeteig – verlässlich und mit gutem Ergebnis. Weitere Empfehlungen auf unserer Produktseite.' }}
      warenkundeLink={{ label: 'Grundrezept süßer Hefeteig (glutenfrei)', href: '/rezepte/grundrezept-hefeteig-suess' }}
      prev={{ title: 'Laugenbrezeln', href: '/rezepte/laugenbrezeln-glutenfrei' }}
      next={{ title: 'Brownies', href: '/rezepte/brownies-schokolade' }}
    />
  );
}
