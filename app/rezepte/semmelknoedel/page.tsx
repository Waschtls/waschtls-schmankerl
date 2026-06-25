import RecipeLayout from '@/app/components/RecipeLayout';

export const metadata = {
  title: 'Glutenfreie Semmelknödel – das bayerische Grundrezept',
  description: 'Glutenfreie Semmelknödel aus GF-Brot – fluffig, saftig und ohne Auseinanderfallen. Das bayerische Grundrezept für die perfekte Beilage zu Gulasch, Braten und Pilzsoße.',
};

export default function SemmelknoedelPage() {
  return (
    <RecipeLayout
      title="Semmelknödel (glutenfrei)"
      kat="Grundrezepte"
      badges={[
        { type: 'mint', label: '🧑‍🍳 Grundrezept' },
      ]}
      tagline="Semmelknödel sind für viele Zöliakie-Familien das erste, was sie nach der Diagnose vermissen. Wir machen sie seit Jahren mit altem GF-Toast – und sie sind genauso rund, saftig und zufriedenstellend wie die Originale. Das Geheimnis: Wasser darf nie kochen, nur sanft simmern."
      useCases={['Beilage zu Rindergulasch', 'Beilage zu Schweinebraten', 'Zu Pilzrahmsoße', 'Einfrieren für schnelle Abende']}
      minuten={35}
      portionen="4 (8 Knödel)"
      schwierigkeit="Mittel"
      infoBox="Glutenfreies Brot bindet etwas weniger als normales Weißbrot. Falls der Teig zu weich ist: 1–2 EL GF-Mehl oder Kartoffelstärke einarbeiten. Wichtig: Knödel nur bei sanft siedendem Wasser garen – sprudelnd kochendes Wasser lässt sie auseinanderfallen."
      zutaten={[
        '250 g glutenfreies Toastbrot oder Weißbrot (vom Vortag, in Würfel)',
        '150 ml Milch, lauwarm',
        '2 Eier (Gr. M)',
        '1 kleine Zwiebel',
        '1 EL Butter',
        '3 EL frische Petersilie, fein gehackt',
        'Salz, Pfeffer',
        '1 Prise Muskatnuss',
        '(bei Bedarf: 1–2 EL GF-Mehl oder Kartoffelstärke)',
      ]}
      zubereitung={[
        'Brot in ca. 1 cm große Würfel schneiden und in eine große Schüssel geben.',
        'Lauwarme Milch gleichmäßig darübergießen. 15 Minuten einweichen lassen – das Brot soll vollständig weich werden.',
        'Zwiebel fein würfeln und in Butter bei mittlerer Hitze glasig dünsten (ca. 3 Min.). Abkühlen lassen.',
        'Eier, abgekühlte Zwiebeln, Petersilie, Salz, Pfeffer und Muskat zur Brotmasse geben. Alles gründlich mit den Händen verkneten.',
        'Teig 5 Minuten ruhen lassen. Wenn er zu weich zum Formen ist, 1–2 EL Mehl einarbeiten.',
        'Mit nassen Händen 8 gleichmäßige Knödel formen – fest andrücken, damit sie halten.',
        'Gesalzenes Wasser in einem weiten Topf zum Sieden bringen (nicht kochen – ca. 85–90 °C).',
        'Knödel vorsichtig einlegen und 20 Minuten sanft gar ziehen lassen. Nicht umrühren.',
        'Mit einem Schaumlöffel herausheben und sofort servieren.',
      ]}
      naehrwerte={{ kalorien: 200, kohlenhydrate: 28, protein: 8, fett: 6, ballaststoffe: 2 }}
      tipps={[
        'Brot vom Vortag gibt die besten Knödel – frisches Brot macht den Teig zu nass und klebrig.',
        'Einen Probeknödel machen: ersten Knödel einlegen, 5 Minuten warten. Hält er zusammen? Perfekt. Fällt er auseinander? Mehr Mehl in den restlichen Teig.',
        'Zum Einfrieren: fertige Knödel abkühlen lassen, einzeln einfrieren. Direkt gefroren in heißem Wasser auftauen und erwärmen.',
        'Passt zu: Rindergulasch, Schweinebraten, Pilzrahmsoße, Zwiebelrostbraten.',
      ]}
      affiliate={{ text: 'Schär Kastenweißbrot oder Toast eignen sich am besten. Weitere Empfehlungen auf unserer Produktseite.' }}
      warenkundeLink={{ label: 'Rindergulasch (glutenfrei) – passt perfekt dazu', href: '/rezepte/rindergulasch' }}
      prev={{ title: 'Brownies', href: '/rezepte/brownies-schokolade' }}
      next={{ title: 'Rindergulasch', href: '/rezepte/rindergulasch' }}
    />
  );
}
