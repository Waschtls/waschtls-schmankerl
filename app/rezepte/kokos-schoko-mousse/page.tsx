import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Kokos-Schoko-Mousse (glutenfrei, zuckerfrei) | Waschtls Schmankerl',
  description:
    'Cremiges Schokoladen-Mousse aus nur 3 Zutaten – Kokosmilch, Datteln und Backkakao. Vegan, glutenfrei, ohne raffinierten Zucker. In 5 Minuten gemacht, 2 Stunden kühlen.',
};

export default function KokosSchokoMoussePage() {
  return (
    <RecipeLayout
      title="Kokos-Schoko-Mousse"
      kat="Dessert"
      badges={[
        { type: 'mint',   label: '🌱 Vegan' },
        { type: 'mint',   label: '💚 ohne Spezialmehl' },
        { type: 'golden', label: '🍫 ohne raffinierten Zucker' },
        { type: 'golden', label: '👶 Kleinkindgeeignet' },
      ]}
      tagline="Drei Zutaten, fünf Minuten Arbeit – und dann zwei Stunden Geduld. Das Ergebnis ist ein cremiges Schoko-Mousse, das sich anfühlt wie Naschen ohne Kompromiss. Von Natur aus glutenfrei, ohne Zucker, ohne Zusätze."
      useCases={['🍫 Dessert für die ganze Familie', '👶 Kleinkindgeeignet', '🌱 Vegan', '⏱ 5 Min. Aufwand']}
      minuten={5}
      portionen={4}
      einheit="Portionen"
      schwierigkeit="Einfach"
      zeitplan={[
        { label: 'Vorbereitung', value: '5 Min.', icon: '🥣' },
        { label: 'Kühlzeit',     value: '2 Std.', icon: '❄️' },
        { label: 'Gesamt',       value: '~2 Std.', icon: '✅' },
      ]}
      warum="Datteln süßen auf natürliche Weise – kein Zucker, kein Sirup. Kokosmilch sorgt für die cremige Konsistenz. Das Mousse ist von Natur aus glutenfrei, braucht kein Spezialmehl und schmeckt trotzdem wie ein richtiges Dessert."
      zutaten={[
        '400 g Kokosmilch (Vollfett, aus der Dose)',
        '90 g Datteln (entsteint, weich)',
        '45 g Backkakao (ungesüßt, naturreines Kakaopulver)',
      ]}
      zubereitung={[
        'Datteln falls nötig 10 Minuten in warmem Wasser einweichen, damit sie weich genug zum Pürieren sind.',
        'Kokosmilch, Datteln und Backkakao in einen Hochleistungsmixer oder Stabmixer geben.',
        'Alles zusammen glatt pürieren, bis keine Dattelstücke mehr sichtbar sind – das dauert ca. 1–2 Minuten.',
        'Die Masse in kleine Gläser oder Schälchen füllen.',
        'Mindestens 2 Stunden im Kühlschrank kalt stellen, damit das Mousse fest wird.',
        'Vor dem Servieren nach Belieben mit frischen Beeren oder Kokosflocken toppen.',
      ]}
      naehrwerte={{
        kalorien: 265,
        kohlenhydrate: 22,
        protein: 4,
        fett: 18,
        ballaststoffe: 4,
      }}
      infoBox="Alle drei Zutaten sind von Natur aus glutenfrei – kein Mehl, kein Getreide, keine versteckten Zusätze. Beim Backkakao trotzdem kurz aufs Etikett schauen: manche günstigen Varianten werden auf Anlagen mit Getreide verarbeitet. Naturreiner Backkakao ohne Zusätze ist immer sicher."
      tipps={[
        'Vollfett-Kokosmilch ist wichtig – fettarme Varianten werden nicht fest genug.',
        'Je länger im Kühlschrank, desto fester das Mousse. Über Nacht ist ideal.',
        'Für eine intensivere Schokolade: 1–2 EL extra Backkakao zugeben.',
        'Mit einem Spritzer Vanille oder einer Prise Zimt bekommt das Mousse mehr Tiefe.',
        'Für Kinder unter 1 Jahr: Dattelmenge auf 50 g reduzieren – das Mousse wird etwas weniger süß.',
        'Hält luftdicht abgedeckt bis zu 3 Tage im Kühlschrank.',
      ]}
      relatedRecipes={[
        { title: 'Avocado-Schoko-Creme',      slug: 'avocado-schoko-creme',      emoji: '💚', time: '5 Min.' },
        { title: 'Brownies (Mandelmehl)',       slug: 'brownies-schokolade',       emoji: '🍫', time: '35 Min.' },
        { title: 'Frozen Banana Bites',         slug: 'frozen-banana-bites',       emoji: '🍌', time: '10 Min.' },
      ]}
    />
  );
}
