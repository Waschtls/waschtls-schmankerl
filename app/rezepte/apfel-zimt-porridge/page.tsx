import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Apfel-Zimt-Porridge glutenfrei – 10 Minuten, warm & sättigend',
  description:
    'Glutenfreier Apfel-Zimt-Porridge – in 10 Minuten fertig, von Natur aus ohne Gluten, kleinkindtauglich. Perfektes Schul-Frühstück.',
};

export default function ApfelZimtPorridgePage() {
  return (
    <RecipeLayout
      title="Apfel-Zimt-Porridge"
      kat="Frühstück"
      badges={[
        { type: 'mint',   label: '💚 ohne Spezialmehl' },
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="Warm, sättigend und in 10 Minuten auf dem Tisch – perfekt für Schultage wenn es schnell gehen muss. Der Apfel sorgt für natürliche Süße, kein zusätzlicher Zucker nötig."
      useCases={['🏫 Schultag', '⏱ Unter 15 Min', '👶 Kleinkind', '❄️ Vorbereiten möglich']}
      minuten={10}
      portionen={2}
      schwierigkeit="Einfach"
      infoBox="💚 Von Natur aus glutenfrei – nur zertifiziert glutenfreie Haferflocken verwenden. Normaler Hafer kann mit Weizen verunreinigt sein."
      zutaten={[
        '100 g zertifiziert glutenfreie Haferflocken',
        '300 ml Milch (oder Hafer-/Mandelmilch)',
        '1 Apfel, geschält und gerieben',
        '1 TL Zimt',
        '1 TL Honig oder Ahornsirup (optional)',
        '1 Prise Salz',
      ]}
      naehrwerte={{
        kalorien: 280,
        kohlenhydrate: 46,
        protein: 9,
        fett: 5,
        ballaststoffe: 5,
      }}
      zubereitung={[
        'Haferflocken, Milch und Salz in einem Topf bei mittlerer Hitze aufkochen.',
        'Hitze reduzieren und unter Rühren 3–4 Minuten köcheln lassen, bis die Masse cremig wird.',
        'Geriebenen Apfel und Zimt einrühren, nochmals 1 Minute erwärmen.',
        'Mit Honig süßen nach Geschmack und servieren.',
        'Optional: mit Apfelscheiben, Zimt-Zucker oder Nüssen toppen.',
      ]}
      tipps={[
        'Abends vorbereiten: Haferflocken über Nacht in Milch einweichen (Overnight Oats) – morgens nur kurz erwärmen',
        'Für Kleinkinder unter 1 Jahr: keinen Honig verwenden, stattdessen zerdrückte reife Banane',
        'Reste im Kühlschrank aufbewahren – am nächsten Tag mit etwas Milch aufwärmen',
        'Wer es nussig mag: ein EL Mandelmus einrühren macht es noch cremiger',
      ]}
      affiliate={{
        text: 'Zertifiziert glutenfreie Haferflocken – wir bestellen sie regelmäßig online, da die Auswahl im Supermarkt oft begrenzt ist.',
        href: 'https://www.amazon.de/s?k=glutenfreie+Haferflocken&tag=waschtl-21',
        label: 'Glutenfreie Haferflocken bei Amazon →',
      }}
      next={{ title: 'Kürbisrisotto', href: '/rezepte/kuerbisrisotto' }}
    />
  );
}
