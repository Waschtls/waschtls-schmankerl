import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welche Lebensmittel sind glutenfrei? – Die große Übersicht',
  description:
    'Was darf rein, was ist tabu? Die komplette Liste glutenfreier Lebensmittel nach Kategorien – plus verstecktes Gluten, glutenfreie Mehle und was das Durchgestrichen-Ähre-Symbol bedeutet.',
};

const SICHER: { kat: string; items: string[]; hinweis?: string }[] = [
  {
    kat: 'Getreide & Pseudogetreide',
    items: ['Reis (alle Sorten)', 'Mais', 'Hirse', 'Buchweizen', 'Amaranth', 'Quinoa', 'Teff', 'Sorghum'],
    hinweis: 'GF-Hafer nur aus zertifizierter Produktion (Hinweis unten)',
  },
  {
    kat: 'Stärke & Bindemittel',
    items: ['Maisstärke', 'Kartoffelstärke', 'Tapiokastärke', 'Pfeilwurzelstärke', 'Guarkernmehl', 'Johannisbrotkernmehl', 'Xanthan', 'Flohsamenschalen'],
  },
  {
    kat: 'Glutenfreie Mehle',
    items: ['Reismehl', 'Maismehl', 'Buchweizenmehl', 'Mandelmehl', 'Kokosmehl', 'Kichererbsenmehl', 'Kastanienmehl', 'Teffmehl', 'Hirsemehl', 'Quinoamehl', 'Sojamehl', 'Hanfmehl'],
  },
  {
    kat: 'Gemüse & Hülsenfrüchte',
    items: ['Alle frischen und TK-Gemüsesorten', 'Kartoffeln, Süßkartoffeln', 'Linsen, Kichererbsen, Bohnen, Erbsen', 'Tofu (Natur & Räucher)', 'Alle frischen Kräuter'],
    hinweis: 'Achtung bei Fertiggemüse mit Würzmischungen – Etikett prüfen',
  },
  {
    kat: 'Obst',
    items: ['Alle frischen Obstsorten', 'Tiefkühlfrüchte (ohne Zusätze)', 'Trockenfrüchte ohne Mehlbesatz'],
    hinweis: 'Fertige Fruchtpürees & Füllungen können Verdickungsmittel mit Gluten enthalten',
  },
  {
    kat: 'Fleisch & Fisch',
    items: ['Alle naturbelassenen Fleischsorten', 'Geflügel, Rind, Schwein, Lamm', 'Luftgetrockneter Schinken', 'Naturbelassener & geräucherter Fisch', 'Fischkonserven im eigenen Saft', 'Garnelen, Meeresfrüchte (naturbelassen)'],
    hinweis: 'Panade, Wurstwaren & Fertigsaucen oft mit Weizen – immer prüfen',
  },
  {
    kat: 'Milch & Milchprodukte',
    items: ['Milch, Buttermilch, Sahne (pur)', 'Naturjoghurt, Quark, Skyr, Mascarpone', 'Butter, Margarine (pur)', 'Gouda, Emmentaler, Parmesan, Mozzarella, Feta', 'Frischkäse, Hüttenkäse, Ricotta'],
    hinweis: 'Joghurt mit Cerealien, Müslijoghurt oder Desserts prüfen',
  },
  {
    kat: 'Pflanzliche Milchalternativen',
    items: ['Soja-Drink', 'Mandel-Drink', 'Reis-Drink', 'Kokos-Drink', 'Glutenfreie Hafermilch (zertifiziert!)', 'Sojajoghurt & Mandeljoghurt (naturbelassen)'],
    hinweis: 'Normale Hafermilch ist NICHT sicher – nur zertifizierte GF-Hafermilch',
  },
  {
    kat: 'Eier & pflanzlicher Ersatz',
    items: ['Eier (alle)', 'Naturtofu, Räuchertofu', 'Fleischersatz auf Soja- oder Erbsenbasis'],
    hinweis: 'Fleischersatz auf Weizenbasis (Seitan) ist tabu',
  },
  {
    kat: 'Öle & Fette',
    items: ['Alle naturbelassenen Öle: Olivenöl, Rapsöl, Sonnenblumenöl, Kokosöl, Leinöl, Walnussöl, Kürbiskernöl'],
  },
  {
    kat: 'Gewürze',
    items: ['Reine Einzelgewürze (Pfeffer, Salz, Paprika, Zimt, Kurkuma, Kreuzkümmel …)'],
    hinweis: 'Gewürzmischungen und Fertig-Würzmittel oft mit Trägerstoffen aus Weizen',
  },
  {
    kat: 'Süßes & Aufstriche',
    items: ['Honig, Ahornsirup, Agavendicksaft, Reissirup', 'Haushalts- und Rohrzucker, Kokosblütenzucker', 'Konfitüre, Gelee (pur)', 'Nussnougatcreme, Nussmus', 'Kakaopulver (pur)'],
    hinweis: 'Ovomaltine enthält Malz – nicht glutenfrei',
  },
  {
    kat: 'Getränke',
    items: ['Wasser (still & Mineral)', 'Fruchtsaft (100 % Frucht)', 'Kaffee', 'Nicht aromatisierter Tee'],
    hinweis: 'Bier & Malzbier enthalten Gluten. Aromatisierte Getränke, Limonaden und Cappuccino-Pulver prüfen.',
  },
];

const TABU = [
  { name: 'Weizen', detail: 'inkl. Vollkornweizen, Weizenkeime, Weizengrieß, Bulgur, Couscous' },
  { name: 'Dinkel', detail: 'inkl. Grünkern (= unreifer Dinkel)' },
  { name: 'Roggen', detail: 'inkl. Roggenvollkorn' },
  { name: 'Gerste', detail: 'inkl. Malz, Perlgraupen, Bier' },
  { name: 'Triticale', detail: 'Kreuzung aus Roggen & Weizen' },
  { name: 'Seitan', detail: 'direkt aus Weizengluten hergestellt' },
  { name: 'Einkorn, Emmer, Kamut', detail: 'Urkornsorten – enthalten trotzdem Gluten' },
];

const VERSTECKT = [
  { label: 'Sojasoße & Würzsaucen', info: 'Klassische Sojasoße enthält Weizen – Alternative: Tamari oder glutenfreie Variante' },
  { label: 'Ketchup, Senf, BBQ-Sauce', info: 'Fertigsoßen können Weizenmehl als Verdicker enthalten' },
  { label: 'Wurst & verarbeitetes Fleisch', info: 'Leberwurst, Mortadella, Aufschnitt – oft mit Füllstoff aus Weizen' },
  { label: 'Fischstäbchen & Paniertes', info: 'Panade fast immer auf Weizenbasis' },
  { label: 'Fertiggerichte & Tiefkühlkost', info: 'Rahmspinat, Fertigsuppen, Tütensoßen oft mit Weizenmehl eingedickt' },
  { label: 'Gewürzmischungen', info: 'Lebkuchengewürz, Grillgewürze, Suppenwürze – Trägersubstanz kann Weizen enthalten' },
  { label: 'Kartoffelprodukte', info: 'Fertigpommes, Schupfnudeln, Gnocchi, Klöße oft mit Weizenanteil' },
  { label: 'Müsli & Cornflakes', info: 'Kreuzkontamination oder Malzextrakt – auf GF-Kennzeichnung achten' },
  { label: 'Süßigkeiten & Knabbergebäck', info: 'Weingummi, manche Chips, Schokoriegel mit Waffelstücken' },
  { label: 'Eis & Milchshakes', info: 'Verdickungsmittel und Emulgatoren können Gluten enthalten' },
  { label: 'Medikamente & Tabletten', info: 'Füllstoffe können Weizenstärke enthalten – Beipackzettel oder Apotheke fragen' },
];

const MEHLE: { mehl: string; gut_fuer: string }[] = [
  { mehl: 'Reismehl', gut_fuer: 'Brot, Kuchen, helle Teige, Soßen andicken' },
  { mehl: 'Buchweizenmehl', gut_fuer: 'Brot, Waffeln, Pfannkuchen, herzhafte Gerichte' },
  { mehl: 'Mandelmehl', gut_fuer: 'Kuchen, Muffins, Kekse – saftig und proteinreich' },
  { mehl: 'Kichererbsenmehl', gut_fuer: 'Herzhafte Pizza, Fladenbrote, Dips (Hummus-Basis)' },
  { mehl: 'Kokosmehl', gut_fuer: 'Kuchen, Pancakes – sehr saugfähig, wenig verwenden' },
  { mehl: 'Maismehl', gut_fuer: 'Tacos, Tortillas, Maisbrot, herzhafte Muffins' },
  { mehl: 'Kastanienmehl', gut_fuer: 'Brot, Kuchen, Kekse – leicht süßlich' },
  { mehl: 'Teffmehl', gut_fuer: 'Muffins, Waffeln, Pizza, Pasta – nussig' },
  { mehl: 'Kartoffelstärke', gut_fuer: 'Gnocchi, Knödel, Binden von Soßen' },
  { mehl: 'Maisstärke', gut_fuer: 'Soßen, Pudding, Kuchen – neutral im Geschmack' },
];

export default function GlutenfreicheLebensmittelPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Glutenfreie Lebensmittel
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>
            Welche Lebensmittel sind glutenfrei?
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '620px' }}>
            Was darf rein, was ist tabu – und wo lauert Gluten, obwohl man es nie vermuten würde.
            Die vollständige Übersicht nach Kategorien, mit Hinweisen zu Mehlen und Kennzeichnung.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>

          {/* Intro */}
          <p style={{ lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
            Nach der Diagnose Zöliakie oder Glutensensitivität stellt sich sofort die Frage: Was darf ich
            überhaupt noch essen? Die gute Nachricht: Es gibt eine Menge. Die meisten naturbelassenen
            Lebensmittel sind von Natur aus glutenfrei – das Problem steckt in verarbeiteten Produkten,
            Fertiggerichten und versteckten Zutaten. Diese Seite gibt dir den Überblick.
          </p>

          {/* Was enthält Gluten */}
          <h2 style={{ marginBottom: '1rem' }}>Was enthält Gluten? – Diese Getreidesorten sind tabu</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.65rem', marginBottom: '2rem' }}>
            {TABU.map(({ name, detail }) => (
              <div key={name} style={{
                background: 'rgba(231,111,81,0.08)',
                border: '1.5px solid rgba(231,111,81,0.3)',
                borderRadius: '10px',
                padding: '0.875rem 1rem',
              }}>
                <p style={{ fontWeight: 700, margin: '0 0 0.2rem', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                  🚫 {name}
                </p>
                <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>{detail}</p>
              </div>
            ))}
          </div>

          {/* Hafer-Box */}
          <div style={{
            background: 'rgba(233,196,106,0.12)',
            border: '1.5px solid rgba(233,196,106,0.5)',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
          }}>
            <p style={{ fontWeight: 700, margin: '0 0 0.5rem', fontSize: '0.95rem', color: 'var(--green-deep)' }}>
              🌾 Und Hafer?
            </p>
            <p style={{ margin: '0 0 0.6rem', fontSize: '0.88rem', lineHeight: 1.75 }}>
              Reiner Hafer enthält kein Gluten. Das Problem: Im normalen Anbau werden dieselben
              Maschinen, Felder und Lagerräume wie für Weizen, Gerste und Roggen verwendet –
              Kreuzkontamination ist die Regel, nicht die Ausnahme.
            </p>
            <p style={{ margin: '0 0 0.6rem', fontSize: '0.88rem', lineHeight: 1.75 }}>
              <strong>Zertifizierter GF-Hafer</strong> (z. B. von Schär, Provena oder mit der
              durchgestrichenen Ähre) darf in der Regel verwendet werden – viele Betroffene vertragen
              ihn gut. Ausnahme: Manche reagieren trotzdem auf das Hafereiweiß Avenin.
              Im Zweifel mit dem Arzt besprechen.
            </p>
            <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-mid)', fontStyle: 'italic' }}>
              → Unser <Link href="/rezepte/granola" style={{ color: 'var(--green-mid)', fontWeight: 600 }}>Granola-Rezept</Link> und{' '}
              <Link href="/rezepte/apfel-zimt-porridge" style={{ color: 'var(--green-mid)', fontWeight: 600 }}>Porridge</Link> verwenden ausschließlich zertifizierten GF-Hafer.
            </p>
          </div>

          {/* Verstecktes Gluten */}
          <h2 style={{ marginBottom: '0.5rem' }}>Verstecktes Gluten</h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.9rem', color: 'var(--text-mid)' }}>
            Das Tückische: In vielen verarbeiteten Produkten steckt Gluten als Füllstoff, Verdicker oder
            Trägerstoff – ohne dass man es auf den ersten Blick erkennt.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
            {VERSTECKT.map(({ label, info }) => (
              <div key={label} style={{
                display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.75rem',
                padding: '0.7rem 1rem',
                background: 'var(--cream-dark)',
                borderRadius: '8px',
                borderLeft: '3px solid var(--terracotta)',
                alignItems: 'start',
              }}>
                <p style={{ margin: 0, fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-dark)' }}>{label}</p>
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-mid)', lineHeight: 1.65 }}>{info}</p>
              </div>
            ))}
          </div>

          {/* Glutenfreie Mehle */}
          <h2 style={{ marginBottom: '0.75rem' }}>Glutenfreie Mehle – was eignet sich wofür?</h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.88rem', color: 'var(--text-mid)' }}>
            Glutenfreie Mehle können Weizenmehl nicht 1:1 ersetzen – das Klebereiweiß fehlt. Deshalb
            werden meist Mehlmischungen und Bindemittel (Xanthan, Flohsamenschalen) kombiniert.
            Mehr dazu: <Link href="/wissen/welches-mehl-wofuer" style={{ color: 'var(--green-mid)', fontWeight: 600 }}>Welches Mehl wofür?</Link>
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ background: 'var(--green-deep)', color: '#fff' }}>
                  <th style={{ padding: '0.65rem 1rem', textAlign: 'left', fontWeight: 600 }}>Mehl</th>
                  <th style={{ padding: '0.65rem 1rem', textAlign: 'left', fontWeight: 600 }}>Gut für …</th>
                </tr>
              </thead>
              <tbody>
                {MEHLE.map(({ mehl, gut_fuer }, i) => (
                  <tr key={mehl} style={{ background: i % 2 === 0 ? 'var(--cream-dark)' : '#fff' }}>
                    <td style={{ padding: '0.6rem 1rem', fontWeight: 600, color: 'var(--text-dark)', whiteSpace: 'nowrap' }}>{mehl}</td>
                    <td style={{ padding: '0.6rem 1rem', color: 'var(--text-mid)' }}>{gut_fuer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Große Liste */}
          <h2 style={{ marginBottom: '0.5rem' }}>Die große Liste: Was ist sicher glutenfrei?</h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.88rem', color: 'var(--text-mid)' }}>
            Alle naturbelassenen Lebensmittel in dieser Liste sind von Natur aus glutenfrei – solange
            sie nicht verarbeitet, gepaniert oder mit Würzmischungen versehen wurden. Die Hinweise geben an,
            worauf man trotzdem achten sollte.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
            {SICHER.map(({ kat, items, hinweis }) => (
              <div key={kat} style={{
                background: 'var(--cream-dark)',
                borderRadius: '12px',
                padding: '1.1rem 1.25rem',
                borderLeft: '3px solid var(--mint)',
              }}>
                <p style={{ fontWeight: 700, margin: '0 0 0.5rem', fontSize: '0.92rem', color: 'var(--green-deep)' }}>
                  ✅ {kat}
                </p>
                <p style={{ margin: hinweis ? '0 0 0.5rem' : 0, fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                  {items.join(' · ')}
                </p>
                {hinweis && (
                  <p style={{
                    margin: 0, fontSize: '0.79rem', color: 'var(--terracotta)', fontWeight: 600,
                    padding: '0.3rem 0.6rem', background: 'rgba(231,111,81,0.08)', borderRadius: '6px',
                    display: 'inline-block',
                  }}>
                    ⚠️ {hinweis}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Kennzeichnung */}
          <h2 style={{ marginBottom: '0.75rem' }}>Kennzeichnung: Woran erkennst du glutenfreie Produkte?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '0.875rem', marginBottom: '2rem' }}>
            <div style={{
              background: 'rgba(149,213,178,0.15)', border: '1.5px solid var(--mint)',
              borderRadius: '12px', padding: '1.25rem',
            }}>
              <p style={{ fontWeight: 700, margin: '0 0 0.4rem', fontSize: '0.95rem' }}>🌾 Durchgestrichene Ähre</p>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                Das Siegel der Deutschen Zöliakie Gesellschaft (DZG) – höchste Verlässlichkeit.
                Alle Produkte damit wurden geprüft und enthalten weniger als 20 mg Gluten pro kg.
              </p>
            </div>
            <div style={{
              background: 'rgba(149,213,178,0.15)', border: '1.5px solid var(--mint)',
              borderRadius: '12px', padding: '1.25rem',
            }}>
              <p style={{ fontWeight: 700, margin: '0 0 0.4rem', fontSize: '0.95rem' }}>📋 Schriftzug „glutenfrei"</p>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                Laut EU-Verordnung (Nr. 828/2014) muss jedes Produkt, das sich „glutenfrei" nennt,
                unter dem Grenzwert von <strong>20 mg Gluten pro kg</strong> liegen.
              </p>
            </div>
            <div style={{
              background: 'rgba(233,196,106,0.12)', border: '1.5px solid rgba(233,196,106,0.5)',
              borderRadius: '12px', padding: '1.25rem',
            }}>
              <p style={{ fontWeight: 700, margin: '0 0 0.4rem', fontSize: '0.95rem' }}>⚠️ Kein Symbol nötig bei …</p>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                Lebensmitteln, die von Natur aus glutenfrei sind (Äpfel, Kartoffeln, Milch usw.) –
                sie brauchen keine extra Kennzeichnung. Ein Apfel ohne GF-Siegel ist trotzdem sicher.
              </p>
            </div>
          </div>

          {/* Tipp-Box */}
          <div style={{
            background: 'rgba(149,213,178,0.12)',
            border: '1.5px solid var(--mint)',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
          }}>
            <p style={{ fontWeight: 700, margin: '0 0 0.4rem', color: 'var(--green-mid)' }}>💡 Tipp für den Alltag</p>
            <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.75 }}>
              Die DZG-App „GlutenScanner" (kostenlos) scannt Barcodes und zeigt direkt an, ob ein Produkt
              glutenfrei ist. Besonders am Anfang sehr hilfreich. Alternativ: Codecheck und Open Food Facts
              sind gute kostenlose Alternativen mit großer Produktdatenbank.
            </p>
          </div>

          {/* Quellen */}
          <div style={{
            background: 'rgba(0,0,0,0.03)', borderRadius: '10px',
            padding: '1rem 1.25rem', marginBottom: '2rem',
            fontSize: '0.8rem', color: 'var(--text-mid)',
          }}>
            <p style={{ fontWeight: 700, margin: '0 0 0.5rem', color: 'var(--text-dark)' }}>📚 Quellen</p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.9 }}>
              <li>Bundeszentrum für Ernährung: <a href="https://www.bzfe.de/ernaehrung/ernaehrungswissen/gesundheit/unvertraeglichkeiten-frei-von-im-trend/zoeliakie/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-mid)' }}>Zöliakie – glutenfreie Lebensmittel</a></li>
              <li>Deutsche Zöliakie Gesellschaft: <a href="https://www.dzg-online.de" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-mid)' }}>dzg-online.de – Kennzeichnung & Siegel</a></li>
              <li>EU-Verordnung Nr. 828/2014: <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/PDF/?uri=CELEX:32014R0828" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-mid)' }}>Kennzeichnungspflicht glutenfreier Lebensmittel</a></li>
              <li>Dr. Schär Institute: <a href="https://www.drschaer.com/de/institute/a/definition-gluten" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-mid)' }}>Was ist Gluten?</a></li>
            </ul>
          </div>

          {/* Weiterführende Links */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link href="/wissen/kreuzkontamination" className="btn btn-outline">Kreuzkontamination →</Link>
            <Link href="/wissen/welches-mehl-wofuer" className="btn btn-outline">Welches Mehl wofür? →</Link>
            <Link href="/wissen/gluten-versteckte-quellen" className="btn btn-outline">Versteckte Glutenquellen →</Link>
            <Link href="/wissen/erstdiagnose" className="btn btn-outline">← Erstdiagnose</Link>
          </div>

        </div>
      </section>
    </>
  );
}
