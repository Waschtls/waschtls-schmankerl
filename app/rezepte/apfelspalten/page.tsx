import type { Metadata } from 'next';
import RecipeLayout from '../../components/RecipeLayout';

export const metadata: Metadata = {
  title: 'Gedünstete Apfelspalten – erstes Beikost-Fingerfood glutenfrei',
  description:
    'Weiche gedünstete Apfelspalten als erstes Fingerfood – 1 Zutat, 8 Minuten, von Natur aus glutenfrei. Perfekt als Beikost ab 6–8 Monaten.',
};

export default function ApfelspaltenPage() {
  return (
    <RecipeLayout
      title="Gedünstete Apfelspalten"
      kat="Snack / Beikost"
      badges={[
        { type: 'mint',   label: '💚 ohne Spezialmehl' },
        { type: 'golden', label: '👶 Beikost ab 6 Mon.' },
      ]}
      tagline="Eine Zutat, acht Minuten – und das erste Fingerfood ist fertig. Weich gedünstet lassen sich Apfelspalten sicher greifen und kauen, auch wenn noch keine richtigen Zähne da sind."
      useCases={['👶 Erstes Fingerfood', '💚 1 Zutat', '⏱ 8 Minuten', '❄️ Einfrierbar']}
      minuten={8}
      portionen={2}
      schwierigkeit="Einfach"
      infoBox="💚 Von Natur aus glutenfrei – ein Apfel, kein Zusatz, kein Gluten. Wichtig: Apfel schälen und in kindgerechte Spalten schneiden. Nie alleine lassen beim Essen."
      zutaten={[
        '1–2 mittelgroße Äpfel (z. B. Elstar, Gala oder Boskop)',
        'Optional: 1 Prise Zimt',
        '2–3 EL Wasser',
      ]}
      naehrwerte={{
        kalorien: 55,
        kohlenhydrate: 13,
        protein: 0,
        fett: 0,
        ballaststoffe: 2,
      }}
      zubereitung={[
        'Apfel schälen, vierteln und Kerngehäuse entfernen.',
        'In gleichmäßige Spalten (ca. 1 cm dick) schneiden.',
        'Wasser in einen kleinen Topf oder Dampfgarer geben.',
        'Apfelspalten bei mittlerer Hitze mit Deckel 6–8 Minuten dünsten, bis sie weich sind – die Gabel sollte mühelos durchgehen.',
        'Abkühlen lassen und Temperatur prüfen bevor du sie dem Baby gibst.',
        'Optional: mit einer Prise Zimt bestreuen.',
      ]}
      tipps={[
        'Für jüngere Babys (ab 6 Mon.): länger dünsten bis sehr weich, oder als Brei pürieren',
        'Ab 8–9 Monaten: kürzere Garzeit für etwas mehr Biss – gutes Kautraining',
        'Zimt weglassen für den allerersten Versuch – erst einen Geschmack einführen',
        'Im Dampfgarer werden Nährstoffe besser erhalten als im Wasserbad',
        'Reste einfrieren: flach einfrieren, dann in Beutel – Portionen einzeln auftauen',
        'Auch mit Birne funktioniert dieses Rezept genauso gut',
      ]}
      prev={{ title: 'Kürbisrisotto', href: '/rezepte/kuerbisrisotto' }}
      next={{ title: 'Avocado-Schoko-Creme', href: '/rezepte/avocado-schoko-creme' }}
    />
  );
}
