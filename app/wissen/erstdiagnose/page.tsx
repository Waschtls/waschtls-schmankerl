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
    text: 'Alle glutenhaltigen Grundnahrungsmittel entweder in eine separate Ecke räumen oder – wenn ihr komplett umstellt – aussortieren.',
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
];

const erstausstattung: { kat: string; items: string[]; note?: string }[] = [
  {
    kat: 'Mehl',
    items: ['Schär Mix It – für Pfannkuchen, Kuchen, Saucen, fast alles'],
    note: 'Das reicht für den Start. Macht nicht den Fehler und kauft 7 verschiedene Mehle auf einmal – das überfordert und die meisten verstauben. In den kommenden Wochen werdet ihr von selbst merken was ihr noch braucht.',
  },
  { kat: 'Bindemittel', items: ['Xanthan (Tipp: nur kleine Mengen nötig)', 'Flohsamenschalen (für Brot)'] },
  { kat: 'Grundnahrung', items: ['Glutenfreie Pasta (Schär, Barilla GF, Reispasta)', 'Glutenfreies Toastbrot – hält im Kühlschrank länger und bleibt frischer als normales GF-Brot', 'Müsli & Cornflakes gegen glutenfreie Versionen tauschen – oder selbst machen (→ unser Granola-Rezept)', 'Tamari oder glutenfreie Sojasoße', 'Glutenfreie Brühwürfel'] },
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
  {
    nr: '05',
    titel: 'Geschwister und Eltern testen lassen',
    text: 'Erstgradige Verwandte (Eltern, Geschwister) haben ein bis zu 10-fach erhöhtes Risiko, ebenfalls Zöliakie zu entwickeln – auch ohne Symptome. Eine einfache Blutuntersuchung beim Kinder- oder Hausarzt reicht als Screening. Fragt aktiv danach.',
    link: undefined,
    linkText: undefined,
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
          <h2 style={{ marginBottom: '0.4rem' }}>Was sofort aus dem Speiseplan fliegt</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '2rem' }}>
            Diese Lebensmittel müssen sofort aussortiert oder klar getrennt aufbewahrt werden –
            alles andere darf bleiben.
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

        </div>
      </section>

      {/* Gluten versteckt sich auch hier */}
      <section className="section" style={{ background: 'rgba(233,196,106,0.06)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.4rem' }}>Gluten steckt auch hier – das überrascht fast alle</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.75rem' }}>
            Nicht nur Essen. Gluten taucht an Stellen auf, an die niemand sofort denkt.
          </p>
          <div className="grid-2">
            {[
              { icon: '🧸', titel: 'Knetmasse (Play-Doh)', text: 'Play-Doh enthält Weizenmehl. Hände danach waschen reicht nicht – Gluten kann beim Spielen über Mund und Augen aufgenommen werden. Glutenfreie Knete gibt es (z.B. von Ailefo) oder selbst machen aus Reismehl.' },
              { icon: '🎨', titel: 'Straßenmalkreide & Fingerfarben', text: 'Manche Marken enthalten Weizenstärke als Binder, besonders günstiger Schulbedarf. Bei unbekannten Produkten Hersteller anfragen oder auf zertifiziert glutenfreie Alternativen setzen.' },
              { icon: '💊', titel: 'Medikamente & Kapseln', text: 'Tablettenhüllen und Kapselkörper können Weizenstärke als Hilfsstoff enthalten. Immer die Apotheke aktiv fragen: „Enthält dieses Medikament Gluten?" – das steht nicht immer drauf.' },
              { icon: '👄', titel: 'Zahnpasta & Lippenpflege', text: 'Was auf die Lippen kommt, wird geschluckt. Manche Zahnpasten (v.a. Kinder-Zahnpasten mit Aromastoffen) enthalten Weizenstärke. Lippenpflege bei Kindern ebenfalls prüfen.' },
              { icon: '🍟', titel: 'Pommes aus geteiltem Frittierfett', text: 'Eines der häufigsten Fallen beim Essen gehen. Pommes die im selben Fett wie paniertes Schnitzel oder Frühlingsrollen frittiert wurden sind nicht glutenfrei – egal was auf der Karte steht.' },
              { icon: '⛪', titel: 'Hostien bei der Kommunion', text: 'Klassische Hostien enthalten Weizen. Glutenfreie Oblaten gibt es (z.B. über die DZG), aber die Gemeinde muss rechtzeitig informiert und das mit dem Pfarrer besprochen werden.' },
            ].map(item => (
              <div key={item.titel} className="card">
                <div style={{ fontSize: '1.75rem', marginBottom: '0.6rem' }}>{item.icon}</div>
                <h4 style={{ marginBottom: '0.4rem', color: 'var(--green-deep)' }}>{item.titel}</h4>
                <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.75 }}>{item.text}</p>
              </div>
            ))}
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
                      {item.includes('→ unser Granola-Rezept') ? (
                        <>
                          {item.replace('→ unser Granola-Rezept', '')}
                          <Link href="/rezepte/granola" style={{ color: 'var(--green-mid)', fontWeight: 600 }}>→ unser Granola-Rezept</Link>
                        </>
                      ) : item}
                    </li>
                  ))}
                </ul>
                {k.note && (
                  <p style={{ margin: '0.75rem 0 0', fontSize: '0.8rem', lineHeight: 1.8, color: 'var(--text-light)', fontStyle: 'italic' }}>
                    {k.note}
                  </p>
                )}
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

      {/* Küche einrichten Checkliste */}
      <section className="section" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.4rem' }}>
            <h2 style={{ margin: 0 }}>Küche einrichten – die Checkliste</h2>
            <a
              href="/downloads/kueche-checkliste.pdf"
              download
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.5rem 1rem', borderRadius: '8px',
                background: 'var(--golden)', color: 'var(--green-deep)',
                fontWeight: 700, fontSize: '0.82rem', textDecoration: 'none',
                flexShrink: 0,
              }}
            >
              ↓ Als PDF herunterladen
            </a>
          </div>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.75rem' }}>
            Was in den ersten Tagen wirklich umgestellt werden muss – und was bleiben kann.
          </p>

          <div className="grid-2" style={{ gap: '1rem' }}>

            {/* GF-Versionen anschaffen */}
            <div className="card" style={{ borderLeft: '3px solid #dc3545' }}>
              <h4 style={{ color: 'var(--green-deep)', marginBottom: '0.4rem' }}>➕ GF-Version dazukaufen</h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginBottom: '0.75rem', lineHeight: 1.5 }}>
                Nichts wegwerfen – aber für glutenfreie Zubereitung braucht ihr eigene Utensilien, die klar getrennt bleiben.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'Toaster → eigenen GF-Toaster (Krümel lassen sich nicht entfernen)',
                  'Holzschneidebrett → neues GF-Brett kaufen & markieren',
                  'Nudelsiebe & Abtropfgitter → eigene GF-Version',
                  'Teflonpfannen mit tiefen Kratzern → ersetzen (Rückstände in Rillen)',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--text-mid)' }}>
                    <span style={{ flexShrink: 0, marginTop: '0.05rem' }}>☐</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Was bleiben kann */}
            <div className="card" style={{ borderLeft: '3px solid var(--mint)' }}>
              <h4 style={{ color: 'var(--green-deep)', marginBottom: '0.875rem' }}>✅ Kann bleiben</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'Töpfe & Pfannen (ohne tiefe Kratzer)',
                  'Backofen (einmal heiß ausgebrannt)',
                  'Glasschüsseln & Edelstahl',
                  'Gewürze (nur wenn kein Füllstoff)',
                  'Öle, Essig, die meisten Milchprodukte',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--text-mid)' }}>
                    <span style={{ flexShrink: 0, marginTop: '0.05rem' }}>☐</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Farbsystem */}
            <div className="card" style={{ borderLeft: '3px solid var(--green-mid)' }}>
              <h4 style={{ color: 'var(--green-deep)', marginBottom: '0.875rem' }}>🎨 Farbsystem einrichten</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'GF-Utensilien farbig markieren (z.B. grün)',
                  'Eigene Butter-/Marmeladendose für GF',
                  'GF-Fach im Kühlschrank festlegen',
                  'Eigene Brotdose fürs Kind (Schule/Kita)',
                  'Snacks immer in separatem GF-Behälter',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--text-mid)' }}>
                    <span style={{ flexShrink: 0, marginTop: '0.05rem' }}>☐</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'center' }}>
            <a
              href="/downloads/kueche-checkliste.pdf"
              download
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.7rem 1.5rem', borderRadius: '8px',
                background: 'var(--green-deep)', color: 'var(--golden)',
                fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
              }}
            >
              ↓ Checkliste als PDF herunterladen
            </a>
          </div>
        </div>
      </section>

      {/* Häufige Anfängerfehler */}
      <section className="section" style={{ paddingTop: '0', paddingBottom: '2.5rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <div className="card" style={{ background: 'rgba(220,53,69,0.04)', border: '1.5px solid rgba(220,53,69,0.2)' }}>
            <h4 style={{ marginBottom: '1rem', color: 'var(--green-deep)' }}>⚠️ Häufige Fehler in den ersten Wochen</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { fehler: '„Einmal ist keinmal"', erklaerung: 'Gibt es bei Zöliakie nicht. Schon kleinste Mengen reichen aus, um die Darmschleimhaut zu reizen – selbst wenn keine sofortigen Symptome spürbar sind.' },
                { fehler: '„Ich hab die Soße abgemacht"', erklaerung: 'Kreuzkontamination reicht. Ein Löffel der vorher in normaler Pasta war, kontaminiert die ganze Soße. Nicht abmachen – separat kochen.' },
                { fehler: 'Im Restaurant nur „glutenfrei" fragen', erklaerung: 'Viele Köche denken „wenig" ist okay. Immer explizit sagen: „Mein Kind hat Zöliakie – das ist eine Erkrankung, keine Diät. Kreuzkontamination muss ausgeschlossen sein."' },
                { fehler: '„Spuren von Weizen" ignorieren', erklaerung: '„Enthält Weizen" ist klares No-Go. „Kann Spuren enthalten" ist ein Hinweis auf Produktionsbedingungen – individuell unterschiedlich, Ernährungsberatung fragen.' },
              ].map(f => (
                <div key={f.fehler} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'rgba(220,53,69,0.8)', flexShrink: 0, marginTop: '0.2rem', minWidth: '16px' }}>✕</span>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: '0.875rem' }}>{f.fehler}: </span>
                    <span style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--text-mid)' }}>{f.erklaerung}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

      {/* Was wird sich bessern */}
      <section className="section" style={{ background: 'rgba(149,213,178,0.06)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.4rem' }}>Was wird sich bessern – und wann?</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.75rem' }}>
            Das ist die Frage die uns am meisten beschäftigt hat. Die kurze Antwort: ja, es wird besser.
            Und zwar schneller als man denkt.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {[
              { zeit: 'Erste 1–2 Wochen', text: 'Bauchschmerzen, Blähungen und Erschöpfung lassen spürbar nach. Das Verdauungssystem erholt sich schnell wenn kein Gluten mehr reinkommt.' },
              { zeit: '1–3 Monate', text: 'Energie kommt zurück, Appetit steigt, die allgemeine Stimmung verbessert sich. Bei Kleinkindern fällt der Unterschied oft am deutlichsten auf.' },
              { zeit: '6–12 Monate', text: 'Die Antikörperwerte (TTG-IgA) normalisieren sich – das zeigt die erste Kontrolluntersuchung beim Gastroenterologen. Die Darmschleimhaut ist weitgehend regeneriert.' },
              { zeit: '1–2 Jahre', text: 'Bei Kindern oft vollständige Erholung: Wachstum, Gewicht und Nährstoffaufnahme normalisieren sich komplett. Je früher die Diagnose, desto vollständiger die Erholung.' },
            ].map(s => (
              <div key={s.zeit} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span className="tag" style={{ flexShrink: 0, marginTop: '0.1rem', background: 'rgba(149,213,178,0.2)', color: 'var(--green-deep)' }}>{s.zeit}</span>
                <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.8 }}>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="card" style={{ marginTop: '1.25rem', background: 'rgba(149,213,178,0.1)', border: '1.5px solid rgba(149,213,178,0.35)' }}>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.85 }}>
              <strong>Wichtig:</strong> Das funktioniert nur bei konsequent glutenfreier Ernährung. „Meistens glutenfrei" reicht nicht – die Darmschleimhaut kann sich nicht erholen, wenn immer wieder kleine Mengen dazukommen.
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
