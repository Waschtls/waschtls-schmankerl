import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Glutenfrei feiern – Kindergeburtstag & Feste | Waschtls Schmankerl',
  description:
    'Alles für einen glutenfreien Kindergeburtstag: Rezepte, Tipps für die Party-Planung und wie wir das bei unserem Sohn gemacht haben.',
};

// ── Party-Rezepte ─────────────────────────────────────────────────────────────

type PartyRezept = {
  slug?: string;
  title: string;
  emoji: string;
  desc: string;
  tipp?: string;
  todo?: boolean;
};

const PARTY_REZEPTE: PartyRezept[] = [
  {
    slug: 'schokoladenkuchen-mandelmehl',
    title: 'Schokoladenkuchen (Mandelmehl)',
    emoji: '🍫',
    desc: 'Unser bewährtester Party-Kuchen. Saftig, kein Glutenmehl, alle lieben ihn – auch Gäste ohne Einschränkungen.',
    tipp: 'Mit Schlagsahne und Beeren dekorieren – sieht nach echtem Geburtstagskuchen aus.',
  },
  {
    slug: 'bananenmuffins',
    title: 'Bananenmuffins (ohne Mehl)',
    emoji: '🧁',
    desc: 'Nur 4 Zutaten, kein Zucker, von Natur aus glutenfrei. Perfekt für Klassenfeste – keiner merkt den Unterschied.',
    tipp: 'Backen am Vortag möglich – werden sogar besser wenn sie eine Nacht stehen.',
  },
  {
    slug: 'pfannkuchen-reismehl',
    title: 'Pfannkuchen-Buffet',
    emoji: '🥞',
    desc: 'Pfannkuchen aus Reismehl als Mini-Variante – mit verschiedenen Toppings macht das Spaß für alle Kinder.',
    tipp: 'Toppings in kleinen Schüsselchen aufstellen: Nutella, Erdbeeren, Bananenscheiben, Ahornsirup.',
  },
  {
    slug: 'pizza-glutenfrei',
    title: 'Mini-Pizzen',
    emoji: '🍕',
    desc: 'Glutenfreier Pizzateig als kleine Einzelportionen. Jedes Kind belegt seine eigene – macht sich fast von selbst.',
    tipp: 'Teig am Vortag vorbereiten und im Kühlschrank lassen – wird besser.',
  },
  {
    slug: 'energiebaellchen',
    title: 'Energiebällchen',
    emoji: '🟤',
    desc: 'Ohne Backen, ohne Zucker, perfekt für das Buffet. Kinder rollen sie gerne selbst mit.',
    tipp: 'In Kokosraspeln, Kakaopulver oder Hagelzucker wälzen – drei Varianten für Abwechslung.',
  },
  {
    title: 'Brownies (Mandelmehl)',
    emoji: '🍫',
    desc: 'Saftig, fudgy, absolutes Highlight – kommt bald.',
    todo: true,
  },
  {
    title: 'Käsekuchen ohne Boden',
    emoji: '🍰',
    desc: 'Von Natur aus glutenfrei, cremig, einfach – kommt bald.',
    todo: true,
  },
];

// ── Checklisten ────────────────────────────────────────────────────────────────

const CHECKLIST_ESSEN = [
  'Alle Zutaten: auf "glutenfrei"-Zertifizierung prüfen (durchgestrichene Ähre)',
  'Keinen gemeinsamen Löffel für GF- und normale Speisen verwenden',
  'Backbleche und Schüsseln separat halten (kein Restmehl vom letzten Backen)',
  'Snacks für Buffet: Chips nur aus Kartoffeln/Mais, keine Weizenstärke',
  'Getränke: alle Limonaden, Säfte und Wasser sind i.d.R. sicher',
  'Gummibärchen: Haribo ist glutenfrei (Stand 2025) – vor Kauf immer Etikett checken',
];

const CHECKLIST_KOMMUNIKATION = [
  'Eltern der Gäste rechtzeitig informieren: "Es gibt nur glutenfreies Essen"',
  'Mitgebrachte Speisen / Kuchen von anderen Eltern: besser absagen oder klar ausweisen',
  'Party-Location (Spielpark etc.) vorher anrufen: dürfen eigene Speisen mitgebracht werden?',
  'Kita/Schule: Geburtstagskuchen für die Klasse – Lehrer vorab informieren',
];

const CHECKLIST_EINKAUF = [
  'Reismehl (zertifiziert GF) oder fertige GF-Backmischung für Pfannkuchen/Muffins',
  'Mandelmehl (zertifiziert GF) für Kuchen und Brownies',
  'Schokolade: z.B. Zotter oder Ritter Sport (GF-Varianten) – Etikett prüfen',
  'Streusel/Dekor: Vorsicht, oft Weizen! → Bio-Läden haben GF-Varianten',
  'Kerzen, Tortendeko: kein Glutenproblem, aber Kleber von Papier kann auf Kuchen landen',
];

// ── Komponente ────────────────────────────────────────────────────────────────

export default function FesteGeburtstagePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> ›{' '}
            Feste & Geburtstage
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.75rem' }}>
            🎉 Glutenfrei feiern
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Ein Kindergeburtstag mit Zöliakie muss kein Stress sein – wenn man weiß wie.
            Hier sind alle Rezepte, Checklisten und Tipps die wir über die Jahre gesammelt haben.
          </p>
        </div>
      </section>

      {/* Unsere Geschichte */}
      <section style={{ background: 'var(--cream-dark)', padding: '2rem 0', borderBottom: '3px solid var(--golden)' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-dark)', fontStyle: 'italic', margin: 0 }}>
            Der erste Geburtstag nach der Diagnose war… anstrengend. Wir wollten dass unser Sohn
            einen ganz normalen Geburtstag hat – mit echtem Kuchen, mit Muffins, mit allem.
            Und wir wollten nicht dass er das einzige Kind ist das "nichts essen darf".
            Seitdem backen wir alles selbst – und die Gäste-Kinder fragen immer wieder nach den Rezepten.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* Party-Rezepte */}
          <h2 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>Party-Rezepte</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
            Alle erprobt – funktionieren bei Kindern und Erwachsenen ohne Einschränkung.
          </p>

          <div className="grid-3" style={{ marginBottom: '3.5rem' }}>
            {PARTY_REZEPTE.map((r, i) => (
              r.todo ? (
                <div key={i} className="card" style={{
                  padding: '1.35rem',
                  border: '2px dashed var(--border)', background: 'transparent',
                  boxShadow: 'none', opacity: 0.6,
                }}>
                  <div style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '0.75rem' }}>{r.emoji}</div>
                  <span style={{
                    fontSize: '0.65rem', padding: '0.12rem 0.45rem', borderRadius: '999px',
                    border: '1.5px dashed var(--border)', color: 'var(--text-light)',
                    display: 'inline-block', marginBottom: '0.5rem',
                  }}>kommt bald</span>
                  <h3 style={{ fontSize: '0.9rem', color: 'var(--text-mid)', margin: '0 0 0.35rem' }}>{r.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-light)', margin: 0, lineHeight: 1.6 }}>{r.desc}</p>
                </div>
              ) : (
                <Link key={i} href={`/rezepte/${r.slug}`} className="card card-link" style={{ padding: '1.35rem' }}>
                  <div style={{ fontSize: '2rem', textAlign: 'center', background: 'var(--cream-dark)', borderRadius: '8px', padding: '0.75rem', marginBottom: '0.75rem' }}>{r.emoji}</div>
                  <h3 style={{ fontSize: '0.9rem', margin: '0 0 0.35rem' }}>{r.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-mid)', margin: r.tipp ? '0 0 0.65rem' : 0, lineHeight: 1.6 }}>{r.desc}</p>
                  {r.tipp && (
                    <div style={{
                      padding: '0.5rem 0.75rem', borderRadius: '6px',
                      background: 'rgba(233,196,106,0.1)', border: '1px solid rgba(233,196,106,0.3)',
                      fontSize: '0.76rem', color: 'var(--text-dark)', lineHeight: 1.6,
                    }}>
                      💡 {r.tipp}
                    </div>
                  )}
                </Link>
              )
            ))}
          </div>

          {/* Checklisten */}
          <div className="grid-2" style={{ marginBottom: '3.5rem', gap: '1.5rem' }}>
            {/* Checkliste Essen */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1.05rem', marginBottom: '1.1rem', color: 'var(--green-deep)' }}>
                ✅ Checkliste: GF-sicheres Buffet
              </h2>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {CHECKLIST_ESSEN.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex', gap: '0.65rem', alignItems: 'flex-start',
                    fontSize: '0.86rem', color: 'var(--text-dark)', lineHeight: 1.6,
                  }}>
                    <span style={{
                      flexShrink: 0, width: '16px', height: '16px',
                      marginTop: '0.18rem', borderRadius: '4px',
                      background: 'rgba(149,213,178,0.25)', border: '1.5px solid var(--mint)',
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Checkliste Kommunikation */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1.05rem', marginBottom: '1.1rem', color: 'var(--green-deep)' }}>
                📣 Checkliste: Kommunikation
              </h2>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {CHECKLIST_KOMMUNIKATION.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex', gap: '0.65rem', alignItems: 'flex-start',
                    fontSize: '0.86rem', color: 'var(--text-dark)', lineHeight: 1.6,
                  }}>
                    <span style={{
                      flexShrink: 0, width: '16px', height: '16px',
                      marginTop: '0.18rem', borderRadius: '4px',
                      background: 'rgba(149,213,178,0.25)', border: '1.5px solid var(--mint)',
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Einkaufs-Checkliste */}
          <div className="card" style={{ padding: '1.5rem', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.05rem', marginBottom: '1.1rem', color: 'var(--green-deep)' }}>
              🛒 Einkaufs-Checkliste fürs Party-Backen
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
              {CHECKLIST_EINKAUF.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '0.65rem', alignItems: 'flex-start',
                  fontSize: '0.86rem', color: 'var(--text-dark)', lineHeight: 1.6,
                }}>
                  <span style={{
                    flexShrink: 0, width: '16px', height: '16px',
                    marginTop: '0.18rem', borderRadius: '4px',
                    background: 'rgba(149,213,178,0.25)', border: '1.5px solid var(--mint)',
                  }} />
                  {item}
                </div>
              ))}
            </div>
            <p style={{ margin: '1.25rem 0 0', fontSize: '0.78rem', color: 'var(--text-light)' }}>
              Alle unsere Produktempfehlungen findest du auf der{' '}
              <Link href="/produkte" style={{ color: 'var(--green-mid)', fontWeight: 600 }}>Produktseite →</Link>
            </p>
          </div>

          {/* Häufige Fragen */}
          <h2 style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>Häufige Fragen</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
            {[
              {
                frage: 'Was, wenn andere Eltern Kuchen mitbringen wollen?',
                antwort: 'Entweder du erklärst vorher dass alles GF sein muss (und du schickst Rezepte mit), oder du sagst freundlich: "Wir haben genug Kuchen, bring dich einfach selber mit." Klappt immer.',
              },
              {
                frage: 'Wie erkläre ich es den anderen Kindern?',
                antwort: 'Kinder verstehen "Das macht meinen Bruder krank" sofort. Kein Kind zwingt ein anderes zum Essen. Das Thema ist meistens weniger dramatisch als man denkt – die anderen Kinder finden den GF-Kuchen meist genauso lecker.',
              },
              {
                frage: 'Party in einem Spielpark / Restaurant?',
                antwort: 'Vorher anrufen und fragen: "Darf ich eigenes Essen mitbringen?" Viele erlauben das für Geburtstagskinder, besonders wenn man freundlich erklärt warum. Alternativ: Party zuhause ist sicherer.',
              },
              {
                frage: 'Sind Gummibärchen, Lollis etc. glutenfrei?',
                antwort: 'Haribo ist glutenfrei (Stand 2025). Trotzdem: immer das Etikett prüfen, Rezepte können sich ändern. Milka-Schokolade ist teilweise nicht sicher wegen gemeinsamer Produktionslinien.',
              },
            ].map(({ frage, antwort }, i) => (
              <div key={i} className="card" style={{ padding: '1.25rem 1.5rem' }}>
                <h3 style={{ fontSize: '0.95rem', margin: '0 0 0.5rem', color: 'var(--green-deep)' }}>{frage}</h3>
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>{antwort}</p>
              </div>
            ))}
          </div>

          {/* CTA zurück */}
          <div style={{
            padding: '1.25rem 1.5rem',
            background: 'rgba(233,196,106,0.08)',
            border: '1.5px solid rgba(233,196,106,0.3)',
            borderRadius: '12px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '1rem', flexWrap: 'wrap',
          }}>
            <div>
              <p style={{ fontWeight: 700, margin: '0 0 0.25rem', color: 'var(--green-deep)' }}>Alle Rezepte ansehen</p>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-mid)' }}>
                Mit dem Kategorie-Filter direkt nach Kindergeburtstag filtern.
              </p>
            </div>
            <Link href="/rezepte" style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--green-mid)', whiteSpace: 'nowrap' }}>
              Zu allen Rezepten →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
