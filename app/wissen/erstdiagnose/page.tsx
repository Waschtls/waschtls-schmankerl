import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zöliakie Erstdiagnose – Was jetzt? | Waschtls Schmankerl',
  description:
    'Dein Kind hat gerade die Diagnose Zöliakie bekommen – und du weißt nicht wo anfangen? Hier bekommst du ehrliche, praktische Antworten von einer Familie die genau da war.',
};

const sofortmassnahmen = [
  {
    icon: '🍞',
    titel: 'Brot, Nudeln, Mehl',
    text: 'Alle glutenhaltigen Grundnahrungsmittel entweder in eine separate Ecke räumen oder – wenn ihr komplett umstellt – aussortieren. Wichtig: eigene Schneidbretter, eigener Toaster.',
  },
  {
    icon: '🧴',
    titel: 'Saucen und Würzmittel',
    text: 'Sojasoße (enthält Weizen), viele Fertigsaucen, Worcestershire-Sauce, Brühwürfel. Labels lesen – Gluten versteckt sich unter "Weizenstärke", "Malzextrakt" oder "Mehl". Auch Malzgetränke wie Vitamalz oder Gerstenmalz-Limonaden enthalten Gluten.',
  },
  {
    icon: '🥣',
    titel: 'Getreide & Müsli',
    text: 'Haferflocken (auch wenn "reiner Hafer" viel diskutiert wird – am Anfang erstmal weglassen und mit Arzt besprechen), normale Cornflakes, Müslis mit Weizen oder Gerste.',
  },
  {
    icon: '🔪',
    titel: 'Küche & Utensilien',
    text: 'Eigenes Schneidbrett (am besten markieren oder eine andere Farbe), eigener Toaster (Krümel!), eigenes Nudelsieb, eigene Butter damit niemand mit dem Messer nach dem Brotschneiden reingeht. Pfannen und Töpfe können bleiben – solange sie keine tiefen Kratzer haben und gründlich gespült werden.',
  },
];

const erstausstattung = [
  { kat: 'Mehle', items: ['Reismehl (universal einsetzbar)', 'Maismehl / Polenta', 'Buchweizenmehl (für herzhafte Sachen)', 'Mandelmehl (fürs Backen)', 'Glutenfreie Mehlmischung (z.B. Schär Mix)'] },
  { kat: 'Bindemittel', items: ['Xanthan (Tipp: nur kleine Mengen nötig)', 'Flohsamenschalen (für Brot)'] },
  { kat: 'Grundnahrung', items: ['Glutenfreie Pasta (Schär, Barilla GF, Reispasta)', 'Glutenfreies Brot (anfangs Fertigware ok)', 'Glutenfreie Haferflocken (zertifiziert, nach Rücksprache Arzt)', 'Tamari statt Sojasoße', 'Glutenfreie Brühwürfel'] },
  { kat: 'Küche', items: ['Eigenes Schneidbrett (markieren!)', 'Eigener Toaster', 'Eigene Nudelsiebe / Abtropfgitter', 'Alufolie für den Grill'] },
];

const naechsteSchritte = [
  {
    nr: '01',
    titel: 'Ernährungsberatung',
    text: 'So schnell wie möglich einen Termin bei einer auf Zöliakie spezialisierten Ernährungsberaterin machen. Die Krankenkasse übernimmt das in vielen Fällen. Die DZG vermittelt Kontakte.',
    link: 'https://www.dzg-online.de/ernaehrungsfachkraefte',
    linkText: 'Ernährungsfachkräfte DZG',
  },
  {
    nr: '02',
    titel: 'DZG-Mitgliedschaft prüfen',
    text: 'Die Deutsche Zöliakie Gesellschaft bietet Mitgliedern Zugang zur Produktdatenbank, telefonische Ernährungs- und Arztsprechstunden, und ein Netzwerk vor Ort.',
    link: 'https://www.dzg-online.de/mitgliedschaft',
    linkText: 'DZG Mitglied werden',
  },
  {
    nr: '03',
    titel: 'Gastroenterologen finden',
    text: 'Nach der Diagnose regelmäßige Kontrolluntersuchungen (AK-Werte) – idealerweise bei einem Arzt der Erfahrung mit Zöliakie hat. Kinderärzte können überweisen.',
  },
  {
    nr: '04',
    titel: 'Kita und Schule informieren',
    text: 'Je früher die Einrichtung Bescheid weiß, desto besser. Wir haben einen Musterbrief und eine Checkliste für euch vorbereitet.',
    link: '/wissen/schule-kita',
    linkText: 'Zu Kita & Schule →',
  },
];

export default function ErstdiagnosePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Erstdiagnose
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.75rem' }}>
            Dein Kind hat Zöliakie – was jetzt?
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '600px', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Wir waren genau da. Die Diagnose kommt, und gleichzeitig dreht sich die Küche, der Alltag,
            die ganze Planung gefühlt auf den Kopf. Hier erfährst du was wirklich wichtig ist –
            und was warten kann.
          </p>
        </div>
      </section>

      {/* Einstieg – emotional */}
      <section className="section" style={{ paddingBottom: '1rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <div className="card" style={{ background: 'rgba(149,213,178,0.08)', border: '1.5px solid rgba(149,213,178,0.3)' }}>
            <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-mid)', fontStyle: 'italic' }}>
              „Bei uns war die erste Reaktion: Erleichterung, dass wir endlich wissen was los ist –
              und gleichzeitig komplette Überforderung. Was kann er noch essen? Was nicht? Muss das
              ganze Geschirr weg? Darf er zu Freunden essen gehen? – All diese Fragen auf einmal.
              Atmen. Schritt für Schritt. Es wird."
            </p>
          </div>
        </div>
      </section>

      {/* Was sofort raus muss */}
      <section className="section">
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.4rem' }}>Was sofort weg muss – und was warten kann</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '2rem' }}>
            Keine Panik – ihr müsst nicht die ganze Küche neu kaufen. Aber ein paar Dinge sollten
            sofort aussortiert oder getrennt aufbewahrt werden.
          </p>
          <div className="grid-2">
            {sofortmassnahmen.map(m => (
              <div key={m.titel} className="card">
                <div style={{ fontSize: '1.75rem', marginBottom: '0.6rem' }}>{m.icon}</div>
                <h4 style={{ marginBottom: '0.4rem', color: 'var(--green-deep)' }}>{m.titel}</h4>
                <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.75 }}>{m.text}</p>
              </div>
            ))}
          </div>

          <div className="card" style={{ marginTop: '1.5rem', background: 'var(--cream-dark)', border: '1.5px solid var(--border)' }}>
            <h4 style={{ marginBottom: '0.5rem', color: 'var(--green-deep)' }}>🍳 Was kann bleiben?</h4>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.85 }}>
              Alle Töpfe und Pfannen die ihr gründlich spülen kannst (Teflonpfannen ohne
              Kratzer halten). Dosen mit natürlich glutenfreien Inhalten (Tomaten, Hülsenfrüchte,
              Fisch in Öl). Alle Gewürze die nur Gewürz enthalten. Öle, Essig, die meisten
              Milchprodukte. Das meiste bleibt – der Schrank muss nicht leer.
            </p>
          </div>
        </div>
      </section>

      {/* Erste Einkaufsliste */}
      <section className="section" style={{ background: 'var(--cream-dark)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.4rem' }}>Die erste Einkaufsliste</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '2rem' }}>
            Was ihr in der ersten Woche braucht – für eine funktionierende glutenfreie Grundküche.
          </p>
          <div className="grid-2">
            {erstausstattung.map(k => (
              <div key={k.kat} className="card">
                <h4 style={{ marginBottom: '0.75rem', color: 'var(--green-deep)', fontSize: '0.95rem' }}>
                  {k.kat}
                </h4>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  {k.items.map(item => (
                    <li key={item} style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'var(--text-mid)' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: 'var(--text-light)' }}>
            Tipp: Im dm, Edeka, Rewe und Kaufland gibt es mittlerweile gute glutenfreie Grundausstattung.
            Online (z.B. glutenfreier.de) ist das Sortiment breiter – aber am Anfang erstmal schauen was
            lokal verfügbar ist.
          </p>
        </div>
      </section>

      {/* Dem Kind erklären */}
      <section className="section">
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.4rem' }}>Was sagen wir dem Kind?</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem' }}>
            Das ist eine der ersten Fragen die viele Eltern umtreibt – und keine hat eine perfekte
            Antwort. Was wir gelernt haben:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                alter: 'Kleinkind (2–4 Jahre)',
                text: 'Sehr konkret, sehr einfach: „Du hast einen Bauch der Weizen nicht mag. Wenn du das isst, tut der Bauch weh." Kinder in dem Alter verstehen das. Nicht überladen.',
              },
              {
                alter: 'Kindergartenalter (4–6 Jahre)',
                text: 'Ihr könnt schon etwas mehr erklären: „Dein Körper kann Gluten nicht verdauen – das ist kein Magen-Weh, das ist einfach so bei dir. Deshalb essen wir zuhause anders." Wichtig: nicht dramatisieren.',
              },
              {
                alter: 'Schulkind (ab 7 Jahren)',
                text: 'Kinder in dem Alter wollen verstehen. Erklärt kurz was Autoimmunerkrankung bedeutet. Zeigt ihnen das Ährchen auf der Packung. Und gebt ihnen Antworten auf die Frage die kommt: „Warum darf ICH das nicht?" – damit sie selbst antworten können wenn Freunde fragen.',
              },
            ].map(a => (
              <div key={a.alter} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span className="tag" style={{ flexShrink: 0, marginTop: '0.1rem' }}>{a.alter}</span>
                <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.8 }}>{a.text}</p>
              </div>
            ))}
          </div>

          <div className="card" style={{ marginTop: '1.5rem', background: 'rgba(233,196,106,0.08)', border: '1.5px solid rgba(233,196,106,0.3)' }}>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.85 }}>
              <strong>Was wirklich hilft:</strong> Zeigen dass glutenfrei nicht Verzicht bedeutet.
              Das erste selbst gebackene glutenfreie Pizzabrot, der erste Schokokuchen der genauso gut schmeckt –
              das sind Momente die mehr bewirken als jede Erklärung.
            </p>
          </div>
        </div>
      </section>

      {/* Nächste Schritte */}
      <section className="section" style={{ background: 'var(--cream-dark)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.4rem' }}>Die nächsten Schritte</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '2rem' }}>
            Was in den ersten Wochen nach der Diagnose wirklich wichtig ist – in sinnvoller Reihenfolge.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {naechsteSchritte.map(s => (
              <div key={s.nr} className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <span style={{
                  flexShrink: 0, fontWeight: 800, fontSize: '1.3rem',
                  color: 'var(--green-mid)', lineHeight: 1, marginTop: '0.15rem',
                }}>{s.nr}</span>
                <div>
                  <h4 style={{ marginBottom: '0.3rem', color: 'var(--green-deep)' }}>{s.titel}</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>
                    {s.text}
                  </p>
                  {s.link && (
                    <a
                      href={s.link}
                      target={s.link.startsWith('http') ? '_blank' : undefined}
                      rel={s.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{ display: 'inline-block', marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--green-mid)', fontWeight: 700 }}
                    >
                      {s.linkText}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medizinischer Hinweis */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <div style={{
            padding: '1rem 1.25rem',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            fontSize: '0.775rem', color: 'var(--text-light)', lineHeight: 1.75,
          }}>
            <strong>Hinweis:</strong> Alle Inhalte hier basieren auf unserer persönlichen Erfahrung
            und sorgfältig recherchierten Informationen. Sie ersetzen keine ärztliche oder
            ernährungsmedizinische Beratung. Bei allen Fragen rund um Diagnose, Therapie und
            Ernährung bitte immer einen Arzt oder eine Ernährungsberatung einbeziehen.
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/wissen/schule-kita" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
              Kita & Schule informieren →
            </Link>
            <Link href="/wissen/kreuzkontamination" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
              Kreuzverunreinigung verstehen →
            </Link>
            <Link href="/rezepte" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
              Erste Rezepte →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
