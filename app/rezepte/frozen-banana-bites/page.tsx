import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Frozen Banana Bites – glutenfreies Eis ohne Maschine | Waschtls Schmankerl',
  description: 'Gefrorene Quark-Bananen-Häppchen mit Schokolade – nur 83 kcal, glutenfrei, kein Backofen, kein Eis-Maker. Kinder lieben sie.',
};

export default function FrozenBananaBites() {
  return (
    <RecipeLayout
      title="Frozen Banana Bites"
      kat="Dessert"
      badges={[
        { type: 'mint', label: '💚 ohne Spezialmehl' },
        { type: 'mint', label: '🚫🍬 zuckerfrei' },
        { type: 'golden', label: '👶 kleinkindtauglich' },
      ]}
      tagline="Eis ohne Eismaschine – Quark trifft Banane trifft Schokolade. Nur 83 kcal pro Stück, von Natur aus glutenfrei. Kinder flippen aus und können alles selbst machen."
      useCases={['☀️ Sommer', '🎉 Kindergeburtstag', '⏱ 15 Min. Arbeit', '❄️ Vorratsküche']}
      minuten={15}
      portionen={7}
      einheit="Stücke"
      schwierigkeit="Einfach"
      warum="Eis ohne Eismaschine und ohne Zucker – Kinder können selbst Kleckse machen und alles in den Froster. Hält 2–3 Wochen im Gefrierer."
      zutaten={[
        '250 g Magerquark',
        '30 ml Milch (oder Mandelmilch)',
        'Süße nach Wahl (Erythrit, Honig, …)',
        '1 reife Banane',
        '— Schokoladenüberzug',
        '70 g Vollmilch-Schokodrops (GF-zertifiziert)',
        '5 g Kokosöl',
      ]}
      naehrwerte={{ kalorien: 83, kohlenhydrate: 8, protein: 5, fett: 4, ballaststoffe: 1 }}
      zubereitung={[
        'Quark, Milch und Süße cremig verrühren.',
        'Banane in kleine Stücke schneiden und unter die Quarkmasse heben.',
        '7 gleichmäßige Kleckse auf ein mit Backpapier belegtes Tablett geben.',
        'Schokodrops mit Kokosöl in der Mikrowelle (30-Sekunden-Intervalle) oder im Wasserbad schmelzen.',
        'Je einen Löffel flüssige Schokolade auf jeden Quark-Klecks geben.',
        'Über Nacht oder mindestens 4 Stunden einfrieren.',
        'Direkt aus dem Gefrierer servieren – nach 5 Minuten werden sie weich.',
      ]}
      tipps={[
        'Im Sommer perfekt für Geburtstage als GF-Eis-Alternative – Kinder können selbst Kleckse machen.',
        'Zartbitter (mind. 70 %) ist meist GF und macht sie weniger süß.',
        'Hält 2–3 Wochen im Gefrierer – Vorrat anlegen.',
        'Für Kleinkinder unter 1 Jahr: keinen Honig als Süßungsmittel verwenden.',
      ]}
      affiliate={{ text: 'GF-zertifizierte Schokodrops verwenden – nicht alle Schokodrops sind glutenfrei. Auf das Etikett achten.' }}
      warenkundeLink={{ label: 'Glutenfreie Lebensmittel – worauf achten?', href: '/wissen/glutenfreie-lebensmittel' }}
      relatedRecipes={[
        { title: 'Bananenmuffins', slug: 'bananenmuffins', emoji: '🧁', time: '30 Min.' },
        { title: 'Energiebällchen', slug: 'energiebaellchen', emoji: '🟤', time: '15 Min.' },
        { title: 'Kokos-Milchreis', slug: 'milchreis-kokos', emoji: '🥥', time: '35 Min.' },
      ]}
    />
  );
}
