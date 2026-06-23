import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kreuzkontamination bei Zöliakie – Was ist das und wie vermeide ich sie?',
  description:
    'Was ist Kreuzkontamination bei Zöliakie? Wie viel Gluten ist zu viel? Welche Küchengeräte braucht man extra? Alles was Eltern wissen müssen.',
};

const geraete = [
  { name: 'Toaster', problem: 'Krümel von Glutenbrot bleiben im Toaster', loesung: 'Eigener Toaster für Zöliakie-Kind – Pflicht!', emoji: '🍞' },
  { name: 'Holzlöffel & Holzbrett', problem: 'Holz nimmt Glutenreste auf und gibt sie wieder ab', loesung: 'Eigene Holzgeräte oder Kunststoff (leichter zu reinigen)', emoji: '🥄' },
  { name: 'Nudelsieb / Sieb', problem: 'Glutennudeln im Sieb kontaminieren das nächste Gericht', loesung: 'Eigenes Sieb oder nach jedem Glutengebrauch in Spülmaschine', emoji: '🫙' },
  { name: 'Buttertiegel / Marmeladenglas', problem: 'Glutenhaltige Krümel vom Messer gelangen ins Glas', loesung: 'Eigene Behälter ODER immer sauberes Messer verwenden', emoji: '🧈' },
  { name: 'Nudelwasser', problem: 'Glutennudeln und glutenfreie Nudeln im selben Topf', loesung: 'Immer getrennte Töpfe oder glutenfreie Nudeln zuerst kochen', emoji: '🍝' },
  { name: 'Backblech / Pfanne', problem: 'Eingebackene Glutenreste bei nicht beschichteten Flächen', loesung: 'Eigenes Backblech mit Backpapier – oder gründlich schrubben', emoji: '🍳' },
];

export default function KreuzkontaminationPage() {
  return (
    <>
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Kreuzkontamination
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Kreuzkontamination</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px' }}>
            Was ist das, warum ist es bei Zöliakie so wichtig – und wie schützen wir unseren Sohn zuhause?
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>

          {/* Was ist es */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ marginBottom: '0.75rem' }}>Was ist Kreuzkontamination?</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>
              Kreuzkontamination entsteht wenn glutenfreie Lebensmittel mit Gluten in Berührung kommen – auch wenn das Gluten selbst nicht mehr sichtbar ist. Das können Krümel auf dem Schneidebrett sein, Mehlstaub in der Luft, ein Löffel der vorher in der Weizennudelsoße war, oder Glutennudeln die im selben Kochwasser gekocht wurden.
            </p>
            <p style={{ lineHeight: 1.8, margin: 0 }}>
              Bei gesunden Menschen ist das egal. Bei Zöliakie-Betroffenen kann schon eine winzige Menge Gluten – Experten sprechen von unter 50 Milligramm pro Tag, das sind buchstäblich Krümel – eine Immunreaktion auslösen und die Darmschleimhaut schädigen, auch wenn keine Symptome spürbar sind.
            </p>
          </div>

          {/* Warnung-Box */}
          <div style={{
            background: 'rgba(231,111,81,0.1)',
            border: '1.5px solid var(--terracotta)',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            marginBottom: '2.5rem',
          }}>
            <p style={{ margin: 0, fontWeight: 600, marginBottom: '0.4rem', color: 'var(--terracotta)' }}>
              ⚠️ Wichtig zu wissen
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.7 }}>
              Kontamination macht nicht immer Beschwerden – besonders bei Kindern. Aber auch stille Kontamination schadet dem Darm langfristig. Kein Bauchschmerz bedeutet nicht "ist okay". Das macht Kreuzkontamination so tückisch.
            </p>
          </div>

          {/* Typische Quellen zuhause */}
          <h2 style={{ marginBottom: '1rem' }}>Typische Kontaminationsquellen zuhause</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2.5rem' }}>
            {geraete.map(({ name, problem, loesung, emoji }) => (
              <div
                key={name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2.5rem 1fr',
                  gap: '0.75rem',
                  background: 'var(--cream-dark)',
                  borderRadius: '10px',
                  padding: '1rem',
                }}
              >
                <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{emoji}</span>
                <div>
                  <p style={{ fontWeight: 700, margin: 0, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{name}</p>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--terracotta)', marginBottom: '0.3rem' }}>
                    Problem: {problem}
                  </p>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--green-mid)', fontWeight: 600 }}>
                    Lösung: {loesung}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Draußen */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ marginBottom: '0.75rem' }}>Unterwegs und im Restaurant</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>
              Im Restaurant ist Kontamination schwerer kontrollierbar. Viele Küchen bereiten glutenfreie und glutenhaltige Gerichte auf denselben Flächen zu. Das reicht für eine Zöliakie-Reaktion aus, auch wenn das Gericht selbst glutenfrei ist.
            </p>
            <p style={{ lineHeight: 1.8, margin: 0 }}>
              Was hilft: gezielt nachfragen – nicht nur "haben Sie glutenfreie Gerichte?" sondern auch "wird das auf separaten Flächen zubereitet?" und "werden getrennte Töpfe verwendet?". Restaurants die Zöliakie wirklich ernst nehmen, wissen was man meint und können konkret antworten.
            </p>
          </div>

          {/* Empfehlung Küchengeräte */}
          <div className="affiliate-box" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>🛒 Was wir extra angeschafft haben</h3>
            <p style={{ marginBottom: '1rem', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Für unseren Sohn haben wir einen eigenen Toaster, eigene Holzlöffel und ein eigenes Schneidebrett. Das war die günstigste und sicherste Lösung. Wir markieren die Geräte mit einem farbigen Aufkleber damit sich alle in der Familie daran halten.
            </p>
            <a
              href="https://www.amazon.de/s?k=Toaster+glutenfrei+Set&tag=waschtl-21"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn btn-golden"
              style={{ fontSize: '0.9rem' }}
            >
              Küchenzubehör bei Amazon ansehen →
            </a>
          </div>

          <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
            * Affiliate-Links – für dich entstehen keine Mehrkosten.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/faq" className="btn btn-outline">← Zurück zur FAQ</Link>
            <Link href="/wissen/produkte-einkauf" className="btn btn-outline">Sicher einkaufen →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
