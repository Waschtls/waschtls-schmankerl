import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welche Lebensmittel sind glutenfrei? – Die große Übersicht',
  description:
    'Welche Lebensmittel sind von Natur aus glutenfrei – und welche nicht? Die große Übersicht für Eltern von Kindern mit Zöliakie.',
};

const erlaubt = [
  { kat: '🌾 Glutenfreie Getreidealternativen', items: ['Reis (alle Sorten)', 'Mais', 'Hirse', 'Buchweizen', 'Quinoa', 'Amaranth', 'Teff', 'Kartoffelmehl', 'Tapioka / Maniok', 'Reismehl, Maismehl, Buchweizenmehl'] },
  { kat: '🥩 Fleisch & Fisch', items: ['Alle unverarbeiteten Fleischsorten', 'Alle frischen Fischsorten', 'Meeresfrüchte (frisch)', 'Aufschnitt – nur wenn ohne Zusätze/Füllstoffe'] },
  { kat: '🧀 Milchprodukte', items: ['Milch (Kuh, Ziege, Schaf)', 'Butter', 'Käse (Natur, ohne Zusätze)', 'Joghurt (Natur)', 'Quark', 'Sahne'] },
  { kat: '🥚 Eier', items: ['Alle Eier, in jeder Zubereitungsform'] },
  { kat: '🥦 Gemüse & Obst', items: ['Alle frischen Gemüsesorten', 'Alle frischen Obstsorten', 'Tiefkühlgemüse (ohne Soßen/Panade)', 'Trockenfrüchte (pur, ohne Zusätze)'] },
  { kat: '🫘 Hülsenfrüchte & Nüsse', items: ['Linsen, Bohnen, Kichererbsen', 'Erbsen', 'Alle Nüsse (pur)', 'Mandeln, Cashews, Walnüsse', 'Erdnüsse (botanisch Hülsenfrüchte)'] },
  { kat: '🫒 Öle & Fette', items: ['Alle reinen Pflanzenöle', 'Butter (pur)', 'Schmalz'] },
  { kat: '🍬 Süßungsmittel', items: ['Zucker, Puderzucker', 'Honig', 'Ahornsirup', 'Agavendicksaft', 'Stevia'] },
];

const verboten = [
  { kat: '🚫 Klar glutenhaltig', items: ['Weizen (alle Sorten)', 'Dinkel, Emmer, Einkorn, Kamut', 'Roggen', 'Gerste', 'Grünkern', 'Seitan (reines Weizengluten)'] },
  { kat: '⚠️ Vorsicht – oft verstecktes Gluten', items: ['Fertigsoßen & Würzmittel', 'Sojasauce (enthält meist Weizen)', 'Gewürzmischungen (Mehl als Rieselhilfe)', 'Fertigsuppenpulver', 'Wurst & Aufschnitt mit Füllstoffen', 'Chips mit Würzung', 'Süßigkeiten (Schokoriegel etc.)', 'Eis aus der Waffel', 'Pommes aus der Fritteuse (Kreuzkontamination)'] },
  { kat: '🤔 Sonderfall: Hafer', items: ['Hafer enthält kein Gluten, wird aber oft mit Weizen kontaminiert', 'Nur „glutenfreier Hafer" / „GF Haferflocken" ist sicher', 'Für manche Zöliakie-Betroffene auch zertifizierter Hafer problematisch – individuell testen'] },
];

export default function GlutenfreibLebensmittelPage() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Glutenfreie Lebensmittel
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>
            Welche Lebensmittel sind glutenfrei?
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '580px' }}>
            Die große Übersicht – was ist erlaubt, was ist tabu, und wo versteckt sich Gluten wo man es nicht erwartet.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '780px' }}>

          <div style={{ marginBottom: '2rem', padding: '1rem 1.25rem', background: 'rgba(149,213,178,0.15)', border: '1.5px solid var(--mint)', borderRadius: '12px' }}>
            <p style={{ margin: 0, lineHeight: 1.8, fontSize: '0.9rem' }}>
              <strong>Die gute Nachricht:</strong> Die meisten natürlichen Lebensmittel – Fleisch, Fisch, Gemüse, Obst, Hülsenfrüchte, Milchprodukte, Eier – sind von Natur aus glutenfrei. Das Problem sind verarbeitete Produkte, Fertiggerichte und versteckte Zusatzstoffe.
            </p>
          </div>

          {/* Erlaubt */}
          <h2 style={{ marginBottom: '1.25rem', color: 'var(--green-mid)' }}>✅ Von Natur aus glutenfrei</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
            {erlaubt.map(({ kat, items }) => (
              <div key={kat} style={{ background: 'var(--cream-dark)', borderRadius: '10px', padding: '1rem 1.25rem', borderLeft: '4px solid var(--mint)' }}>
                <p style={{ fontWeight: 700, margin: 0, marginBottom: '0.5rem', fontSize: '0.95rem' }}>{kat}</p>
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>
                  {items.join(' · ')}
                </p>
              </div>
            ))}
          </div>

          {/* Verboten / Vorsicht */}
          <h2 style={{ marginBottom: '1.25rem', color: 'var(--terracotta)' }}>⚠️ Glutenhaltig oder riskant</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
            {verboten.map(({ kat, items }) => (
              <div key={kat} style={{ background: 'rgba(231,111,81,0.06)', borderRadius: '10px', padding: '1rem 1.25rem', borderLeft: '4px solid var(--terracotta)' }}>
                <p style={{ fontWeight: 700, margin: 0, marginBottom: '0.5rem', fontSize: '0.95rem' }}>{kat}</p>
                <ul style={{ margin: 0, padding: '0 0 0 1.1rem', fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.9 }}>
                  {items.map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Einkaufstipps */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '0.875rem' }}>Wie erkenne ich glutenfreie Produkte im Supermarkt?</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>
              Das zuverlässigste Zeichen ist das <strong>„durchgestrichene Ähren"-Symbol</strong> 🌾 (mit Strich durch die Ähre). Es bedeutet: das Produkt enthält weniger als 20 ppm Gluten – der international anerkannte Grenzwert für Zöliakie-Betroffene.
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>
              Die Aufschrift „glutenfrei" allein ist weniger verlässlich – sie ist nicht einheitlich geregelt. Immer die Zutatenliste lesen und auf Hinweise wie „kann Spuren von Weizen enthalten" achten.
            </p>
            <p style={{ lineHeight: 1.8, margin: 0 }}>
              Im Zweifel: Online bestellen ist oft sicherer als der lokale Supermarkt – dort ist die Auswahl größer und die Produkte klarer gekennzeichnet.
            </p>
          </div>

          {/* Affiliate */}
          <div className="affiliate-box" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>🛒 Unsere Produktempfehlungen</h3>
            <p style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>
              Produkte die wir selbst verwenden und empfehlen – sortiert nach Kategorie.
            </p>
            <Link href="/produkte" className="btn btn-golden" style={{ fontSize: '0.9rem' }}>
              Zu den Produktempfehlungen →
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <Link href="/wissen/kreuzkontamination" className="btn btn-outline">Kreuzkontamination →</Link>
            <Link href="/faq" className="btn btn-outline">Zur FAQ →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
