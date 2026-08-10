import RecipeLayout from '@/app/components/RecipeLayout';

export const metadata = {
  title: 'Lachsküchler glutenfrei | Waschtls Schmankerl',
  description: 'Saftige Lachsküchler aus frischem Lachs, glutenfreiem Toast und Ei – schnell in der Pfanne gebraten, perfekt für die ganze Familie.',
};

export default function LachskuechlerPage() {
  return (
    <RecipeLayout
      title="Lachsküchler"
      kat="Mittagessen"
      badges={[
        { type: 'golden', label: '👶 kleinkindtauglich' },
        { type: 'mint',   label: '🐟 ohne Spezialmehl' },
      ]}
      tagline="Saftige Lachsküchler, die auch Kinder lieben – kein Spezialmehl, kein Aufwand. Einfach alles zusammenmischen und rausbraten."
      useCases={['Schnelles Mittagessen', 'Wenn Reste eingefroren werden sollen', 'Für die ganze Familie', 'Fischfreitag']}
      minuten={35}
      portionen={4}
      schwierigkeit="Einfach"
      zutaten={[
        '500 g Lachs (aufgetaut, in kleine Würfel geschnitten)',
        '3 Scheiben glutenfreier Toast (sehr klein geschnitten oder gerieben)',
        '3 Eier (Größe M)',
        '1 gedünstete Zwiebel',
        'Frische Petersilie (gehackt)',
        'Salz, Pfeffer',
        'Kokosfett, Olivenöl oder Butter zum Braten',
      ]}
      zubereitung={[
        'Zwiebel fein würfeln und in etwas Öl glasig dünsten, beiseite stellen und abkühlen lassen.',
        'Lachs in sehr kleine Würfel schneiden (ca. 5–8 mm). Toast ebenfalls sehr fein zerkleinern oder mit den Händen zerreiben.',
        'Lachs, Toast, Eier, abgekühlte Zwiebel und Petersilie in einer Schüssel gut vermischen. Mit Salz und Pfeffer kräftig abschmecken.',
        'Aus der Masse mit feuchten Händen flache Küchler formen (ca. 8–10 Stück).',
        'Fett in einer Pfanne auf mittlerer Hitze erhitzen. Küchler portionsweise von jeder Seite ca. 3–4 Minuten goldbraun braten – nicht zu heiß, damit sie innen durchgaren.',
        'Auf Küchenpapier abtropfen lassen und heiß servieren.',
      ]}
      naehrwerte={{ kalorien: 490, kohlenhydrate: 14, protein: 38, fett: 28, ballaststoffe: 1 }}
      tipps={[
        'Die Masse sollte sich gut formen lassen – falls sie zu weich ist, noch etwas mehr Toast einarbeiten.',
        'Kokosfett gibt einen leicht nussigen Geschmack; Butter macht die Küchler besonders knusprig.',
        'Lachsküchler lassen sich super einfrieren (roh oder fertig gebraten) und später direkt in der Pfanne erhitzen.',
        'Dazu passen: Gurkensalat, Joghurt-Dip mit Dill oder einfach Kartoffeln.',
      ]}
      prev={{ title: 'Bananenwaffeln mit Datteln', href: '/rezepte/bananenwaffeln-datteln' }}
    />
  );
}
