import RecipeLayout from '@/app/components/RecipeLayout';

export const metadata = {
  title: 'Glutenfreie Brownies – saftig, schokoladig, für Kindergeburtstag',
  description: 'Die besten glutenfreien Brownies – saftig, dunkel, mit echter Schokolade. Einfach zu backen, einfrierbar und perfekt für Kindergeburtstage. Rezept ohne Spezialmehl möglich.',
};

export default function BrowniesSchokoladePage() {
  return (
    <RecipeLayout
      title="Brownies (Schokolade)"
      kat="Backen"
      badges={[
        { type: 'mint', label: '🎂 Kindergeburtstag' },
      ]}
      tagline="Der beste Brownie ist außen leicht knusprig, innen noch ein bisschen klebrig – und schmeckt so intensiv nach Schokolade, dass man ihn am liebsten warm aus der Form isst. Und ja: der glutenfreie Brownie ist genauso gut wie der normale. Wir versprechen's."
      useCases={['Kindergeburtstag', 'Kuchenverkauf in der Schule', 'Dessert mit Eis', 'Einfrieren und bei Bedarf auftauen']}
      minuten={40}
      portionen="16 Stücke"
      schwierigkeit="Einfach"
      infoBox="Zartbitterschokolade immer auf Glutenfreiheit prüfen – viele Sorten werden auf Anlagen mit Weizen produziert. Beim Backen gilt: lieber 2 Minuten zu kurz als zu lang. Der Brownie zieht nach dem Abkühlen noch nach – und wird dabei fester und saftiger."
      zutaten={[
        '200 g Zartbitterschokolade (mind. 60 %, GF-Kennzeichnung prüfen)',
        '150 g Butter',
        '180 g Zucker',
        '3 Eier (Gr. M)',
        '1 TL Vanilleextrakt oder Vanillezucker',
        '100 g glutenfreies Mehl (Schär Mix Patisserie oder Mandelmehl)',
        '30 g Kakaopulver (ungesüßt)',
        '1 Prise Salz',
        '(optional: 50 g Walnüsse oder Schokodrops)',
      ]}
      zubereitung={[
        'Backofen auf 175 °C (Ober-/Unterhitze) vorheizen. Eine quadratische Backform (ca. 20×20 cm) mit Backpapier auslegen.',
        'Schokolade und Butter im Wasserbad schmelzen – Schüssel über heißem Wasser, nicht kochen lassen. Vom Herd nehmen und 5 Minuten abkühlen lassen.',
        'Eier, Zucker und Vanille in einer Schüssel mit dem Handrührgerät 2–3 Minuten aufschlagen bis die Masse heller und cremiger wird.',
        'Schokoladen-Butter-Mischung unter die Eiermasse rühren.',
        'Mehl, Kakao und Salz darübersieben und mit einem Gummispatel vorsichtig unterheben – nicht zu lange rühren.',
        'Wer möchte: Nüsse oder Schokodrops unterrühren.',
        'Teig in die Form füllen und gleichmäßig glattstreichen.',
        '20–22 Minuten backen. Stäbchentest: Teig soll leicht am Stäbchen haften – nicht komplett sauber! Das ist das Geheimnis saftiger Brownies.',
        'Komplett abkühlen lassen, dann in gleichmäßige Quadrate schneiden.',
      ]}
      naehrwerte={{ kalorien: 225, kohlenhydrate: 26, protein: 3, fett: 12, ballaststoffe: 2 }}
      tipps={[
        'Der häufigste Fehler: zu lange backen. Lieber etwas kürzer – der Brownie wird beim Abkühlen fester.',
        'Im Kühlschrank aufbewahren – dort werden Brownies kompakter und intensiver im Geschmack.',
        'Für Kindergeburtstage: nach dem Abkühlen mit Puderzucker bestäuben oder Schokoladenglasur drüber. Mit Ausstecher Herzchen oder Sterne ausstechen.',
        'Einfrieren geht gut – einzeln einwickeln und bis zu 2 Monate einfrieren. Auftauen bei Zimmertemperatur ca. 1 Stunde.',
        'Mit Vanilleeis servieren: warm + kalt = unschlagbare Kombination.',
      ]}
      affiliate={{ text: 'Schär Mix Patisserie eignet sich sehr gut für feines Backwerk wie Brownies. Wer es nussig mag: Mit Mandelmehl (von Natur aus GF) gelingen sie besonders saftig. Weitere Empfehlungen auf unserer Produktseite.' }}
      warenkundeLink={{ label: 'Glutenfreie Lebensmittel: Was ist sicher, was muss ich prüfen?', href: '/wissen/glutenfreie-lebensmittel' }}
      prev={{ title: 'Zwetschgendatschi', href: '/rezepte/zwetschgendatschi' }}
      next={{ title: 'Semmelknödel', href: '/rezepte/semmelknoedel' }}
    />
  );
}
