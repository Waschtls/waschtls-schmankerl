import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Glutenfrei Unterwegs – Augsburg, Bayern & Restaurants',
  description:
    'Restaurants, Bäckereien und Tipps für glutenfreies Essen in Augsburg und auf Reisen – echte Erfahrungen einer Zöliakie-Familie.',
};

// ── Typen ─────────────────────────────────────────────────────────────────────

type Ort = {
  name: string;
  beschreibung: string;
  adresse?: string;
  tipp?: string;
  badge?: string;
  website?: string;
};

// ── Daten ─────────────────────────────────────────────────────────────────────

const RESTAURANTS: Ort[] = [
  {
    name: 'Osteria Il Castagno',
    beschreibung: 'Kleine italienische Osteria in Stadtbergen – seit Jahren die Anlaufstelle für Zöliakiker in der Region. Pizza und Pasta werden glutenfrei angeboten, das Personal weiß was das bedeutet.',
    adresse: 'Brunnenplatz 1, 86391 Stadtbergen',
    tipp: 'Unbedingt vorher reservieren, es ist oft sehr voll. Beim Reservieren gleich Zöliakie erwähnen.',
    badge: 'Empfohlen',
    website: 'https://castagno-leitershofen.de',
  },
  {
    name: 'Michelangelo Pizzeria',
    beschreibung: 'Die gesamte Pizzakarte kann glutenfrei bestellt werden – mit separatem Ofen. Von der GF-Community in Augsburg hoch bewertet, kaum Reaktionen laut Berichten.',
    adresse: 'Donauwörther Str. 47, 86154 Augsburg',
    tipp: 'Beim Bestellen klar "Zöliakie, nicht nur glutenfrei" sagen – dann wissen sie was nötig ist.',
    badge: 'Bewährt',
  },
  {
    name: 'Pizzeria Trattoria Crudo',
    beschreibung: 'Pizza und Pasta glutenfrei möglich (3 € Aufpreis). Gut bewertet auf Find Me Gluten Free, Lieferung möglich. Terrasse vorhanden.',
    adresse: 'Am Pfannenstiel 20, 86153 Augsburg',
    tipp: 'Vorher anrufen und Zöliakie ankündigen – sie sind gut vorbereitet wenn sie es wissen.',
  },
  {
    name: 'Nude Food',
    beschreibung: 'Veganes Restaurant in der Innenstadt mit klar gekennzeichneten GF-Gerichten. Fast alles glutenfrei, Schüsseln und Salate – gut für Mittag mit Kind.',
    adresse: 'Schaezlerstraße 3, 86150 Augsburg',
    badge: 'Innenstadt',
  },
  {
    name: 'Restaurant Il Giardino da Peppino',
    beschreibung: 'Der Inhaber hat selbst Zöliakie – das merkt man. Pizza, Pasta, Gnocchi glutenfrei, Kreuzkontamination wird ernst genommen.',
    adresse: 'Hornungstraße 44, 86161 Augsburg',
    tipp: 'Familiäre Atmosphäre, gut für Kinder.',
  },
];

const BAECKEREIEN: Ort[] = [
  {
    name: 'Konditorei Schenkel – Glutenfreie Leckereien',
    beschreibung: 'Komplett glutenfreie Konditorei – kein Weizen im Haus. Brot, Brezen, Semmeln, Torten, Kuchen – alles ohne Gluten. DZG-Mitglied, ca. 15 Minuten von Augsburg entfernt.',
    adresse: 'Martinstraße 29, 86551 Aichach',
    tipp: 'Mi–Sa 9–17 Uhr, So 12–17 Uhr. Mo/Di Ruhetag. Am Samstag früh kommen – manche Sachen sind schnell weg.',
    badge: '100% GF',
    website: 'https://glutenfreie-leckereien.de',
  },
  {
    name: 'Eiscafé Eiswerk54',
    beschreibung: 'Hausgemachtes Gelato ohne Kreuzrisiko durch Waffeltüten – die GF-Eiskugeln werden separat gehandhabt. Sicher auch für Kinder mit Zöliakie.',
    adresse: 'Weiße Gasse 8, 86150 Augsburg',
    badge: 'Innenstadt',
  },
];

const REISE_PACKLISTE = [
  {
    icon: '🍞',
    kategorie: 'Brot & Beilage',
    items: [
      'Selbst gebackenes GF-Brot (hält 3–4 Tage)',
      'GF-Reiswaffeln oder Maiskekse',
      'Toastbrot Schär (einzeln verpackt)',
      'GF-Cracker als Beilage',
    ],
  },
  {
    icon: '🍫',
    kategorie: 'Snacks unterwegs',
    items: [
      'Zertifizierte GF-Schokoriegel',
      'Reiswaffelpackungen',
      'Nüsse und Trockenfrüchte (ohne Zusätze)',
      'Energiebällchen selbst gemacht (Datteln/Nüsse)',
    ],
  },
  {
    icon: '🍝',
    kategorie: 'Für die Ferienwohnung',
    items: [
      'GF-Nudeln (1–2 Packungen)',
      'Tomatensoße in der Dose (rein)',
      'GF-Brühwürfel',
      'Reisbeutel (kocht überall)',
    ],
  },
  {
    icon: '🫙',
    kategorie: 'Küchen-Basics',
    items: [
      'Eigenes Schneidebrett (faltbar)',
      'Kleines eigenes Sieb',
      'Alufolie für den Grill',
      'Tamari-Sojasoße (kleines Fläschchen)',
    ],
  },
];

// ── Komponente ────────────────────────────────────────────────────────────────

function OrtCard({ ort }: { ort: Ort }) {
  return (
    <div className="card" style={{ padding: '1.35rem 1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-dark)' }}>{ort.name}</h3>
        {ort.badge && (
          <span style={{
            flexShrink: 0, fontSize: '0.65rem', padding: '0.15rem 0.5rem',
            borderRadius: '999px', background: 'rgba(45,106,79,0.1)',
            border: '1px solid rgba(45,106,79,0.25)', color: 'var(--green-mid)',
            fontWeight: 700, whiteSpace: 'nowrap',
          }}>{ort.badge}</span>
        )}
      </div>
      {ort.adresse && (
        <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', margin: '0 0 0.5rem', fontStyle: 'italic' }}>
          📍 {ort.adresse}
        </p>
      )}
      <p style={{ fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.65, margin: (ort.tipp || ort.website) ? '0 0 0.75rem' : 0 }}>
        {ort.beschreibung}
      </p>
      {ort.tipp && (
        <div style={{
          padding: '0.6rem 0.875rem', borderRadius: '8px',
          background: 'rgba(233,196,106,0.1)', border: '1px solid rgba(233,196,106,0.3)',
          fontSize: '0.8rem', color: 'var(--text-dark)', lineHeight: 1.65,
          marginBottom: ort.website ? '0.6rem' : 0,
        }}>
          💡 {ort.tipp}
        </div>
      )}
      {ort.website && (
        <a href={ort.website} target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--green-mid)' }}>
          Website →
        </a>
      )}
    </div>
  );
}

export default function UnterwegsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> › Unterwegs
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.75rem' }}>Glutenfrei unterwegs</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Restaurants in Augsburg die es ernst nehmen, die einzige komplett glutenfreie Konditorei der Region,
            und was wir auf jede Reise einpacken. Alles aus eigener Erfahrung.
          </p>
        </div>
      </section>

      {/* Schnell-Tipps Banner */}
      <section style={{ background: 'var(--cream-dark)', padding: '1.25rem 0', borderBottom: '2px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { icon: '☎️', text: 'Immer vorher anrufen' },
              { icon: '🏷', text: 'Auf die durchgestrichene Ähre achten' },
              { icon: '🍱', text: 'Im Zweifel selbst einpacken' },
              { icon: '📱', text: 'Find Me Gluten Free App nutzen' },
            ].map(t => (
              <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                <span style={{ fontSize: '1.2rem' }}>{t.icon}</span>
                <span style={{ color: 'var(--text-mid)' }}>{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps + Find Me GF */}
      <section style={{ background: 'var(--cream)', padding: '2rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2 style={{ fontSize: '1.2rem', color: 'var(--green-deep)', marginBottom: '0.35rem' }}>
            🗺 Glutenfreie Restaurants auf der Karte
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-mid)', marginBottom: '1.1rem', lineHeight: 1.7 }}>
            Google Maps Suche nach glutenfreien Restaurants in der Umgebung – einfach Standort aktivieren oder Stadt eingeben.
          </p>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1.5px solid var(--border)', marginBottom: '1rem' }}>
            <iframe
              src="https://maps.google.com/maps?q=glutenfreie+Restaurant&output=embed&hl=de&z=12"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Glutenfreie Restaurants in der Umgebung"
            />
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="https://www.google.com/maps/search/glutenfreie+Restaurants/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block', padding: '0.55rem 1.1rem',
                background: 'var(--green-deep)', color: '#fff',
                borderRadius: '8px', fontSize: '0.875rem', fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              In Google Maps öffnen →
            </a>
            <a
              href="https://www.findmeglutenfree.com/de/augsburg"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block', padding: '0.55rem 1.1rem',
                background: 'transparent', color: 'var(--green-mid)',
                border: '1.5px solid var(--green-mid)',
                borderRadius: '8px', fontSize: '0.875rem', fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Find Me Gluten Free →
            </a>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.6rem', lineHeight: 1.6 }}>
            Find Me Gluten Free: Community-App mit Sicherheitsbewertungen von echten Zöliakikern – unser täglicher Begleiter vor jedem Restaurantbesuch.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* Restaurants */}
          <div style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--green-deep)', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              🍽 Restaurants in Augsburg
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '1.5rem', maxWidth: '600px' }}>
              Restaurants, wo wir mit unserem Sohn problemlos essen können – d.h. die das Thema ernst nehmen
              und nicht nur „weglassen".
            </p>
            <div className="grid-2">
              {RESTAURANTS.map(ort => <OrtCard key={ort.name} ort={ort} />)}
            </div>
          </div>

          {/* Bäckereien */}
          <div style={{ marginBottom: '3.5rem', borderTop: '2px solid var(--border)', paddingTop: '2.5rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--green-deep)', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              🥐 Bäckereien & Eis
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '1.5rem', maxWidth: '600px' }}>
              Frisches glutenfreies Gebäck ist schwer zu finden – Konditorei Schenkel ist ein echter Schatz.
            </p>
            <div className="grid-2">
              {BAECKEREIEN.map(ort => <OrtCard key={ort.name} ort={ort} />)}
            </div>
          </div>

          {/* Restaurant anfragen */}
          <div style={{ borderTop: '2px solid var(--border)', paddingTop: '2.5rem', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--green-deep)', marginBottom: '0.4rem' }}>
              📞 So fragen wir im Restaurant an
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', marginBottom: '1.25rem', maxWidth: '620px', lineHeight: 1.75 }}>
              Ein kurzer Anruf vorher spart viel Stress am Tisch. Das sagen wir – einfach kopieren und anpassen:
            </p>
            <div className="card" style={{ background: 'var(--cream-dark)', border: '1.5px solid var(--border)', marginBottom: '1.25rem' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '1rem', marginTop: 0 }}>
                — Vorlage Telefonat / E-Mail —
              </p>
              <div style={{ fontSize: '0.9rem', lineHeight: 2, color: 'var(--text-dark)' }}>
                <p style={{ margin: '0 0 0.75rem' }}>
                  „Guten Tag, wir möchten mit unserer Familie zu Ihnen kommen – unser Kind hat Zöliakie,
                  eine Autoimmunerkrankung. Es darf kein Gluten essen, und das bedeutet auch keine
                  Kreuzverunreinigung. Haben Sie Gerichte die sicher glutenfrei zubereitet werden –
                  also getrennte Töpfe, saubere Flächen, kein gemeinsames Frittieröl?"
                </p>
                <p style={{ margin: 0 }}>
                  Wenn ja: „Super, darf ich kurz fragen was genau möglich ist? Dann weiß ich was
                  mein Kind bestellen kann, und Sie wissen vorher Bescheid."
                </p>
              </div>
            </div>
            <div className="card" style={{ background: 'rgba(149,213,178,0.06)', border: '1.5px solid rgba(149,213,178,0.25)' }}>
              <h4 style={{ fontSize: '0.875rem', marginBottom: '0.6rem', color: 'var(--green-deep)' }}>
                💡 Was eine gute Antwort ist
              </h4>
              <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: 1.85, color: 'var(--text-mid)' }}>
                Wenn der Kellner sofort weiß was Zöliakie ist und konkrete Antworten gibt – gut.
                Wenn er sagt „wir machen das Gericht einfach ohne Mehl" aber keine Ahnung von
                Kreuzverunreinigung hat – lieber woanders hingehen oder selbst einpacken.
              </p>
            </div>
          </div>

          {/* Hotel-Mail */}
          <div style={{ borderTop: '2px solid var(--border)', paddingTop: '2.5rem', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--green-deep)', marginBottom: '0.4rem' }}>
              🏨 Hotel mit Zöliakie: Muster-E-Mail
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', marginBottom: '1.25rem', maxWidth: '620px', lineHeight: 1.75 }}>
              Bei Buchung einfach mitschicken – die meisten Hotels sind sehr kooperativ wenn man früh genug fragt.
            </p>
            <div className="card" style={{ background: 'var(--cream-dark)', border: '1.5px solid var(--border)' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '1rem', marginTop: 0 }}>— Kopiervorlage —</p>
              <div style={{ fontSize: '0.9rem', lineHeight: 2, color: 'var(--text-dark)' }}>
                <p style={{ margin: '0 0 0.75rem' }}>Betreff: Buchung [Datum] – glutenfreie Ernährung für Kind mit Zöliakie</p>
                <p style={{ margin: '0 0 0.75rem' }}>Sehr geehrte Damen und Herren,</p>
                <p style={{ margin: '0 0 0.75rem' }}>
                  wir freuen uns auf unseren Aufenthalt vom [Datum] bis [Datum]. Unser Kind [Alter]
                  hat Zöliakie und muss streng glutenfrei essen. Glutenfrei bedeutet für uns: kein
                  Weizen, Roggen, Gerste, Dinkel – und keine Kreuzverunreinigung beim Kochen.
                </p>
                <p style={{ margin: '0 0 0.5rem' }}>Dürfen wir fragen:</p>
                <ul style={{ margin: '0 0 0.75rem', paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.3rem' }}>Kann die Küche glutenfreie Gerichte mit getrennten Utensilien zubereiten?</li>
                  <li style={{ marginBottom: '0.3rem' }}>Gibt es beim Frühstück glutenfreie Optionen (Brot, Müsli)?</li>
                  <li style={{ marginBottom: '0.3rem' }}>Können wir das Küchenpersonal kurz darüber informieren wenn wir ankommen?</li>
                </ul>
                <p style={{ margin: 0 }}>
                  Herzlichen Dank – wir freuen uns auf eine Rückmeldung.<br />
                  Mit freundlichen Grüßen, [Euer Name]
                </p>
              </div>
            </div>
          </div>

          {/* Packliste */}
          <div style={{ borderTop: '2px solid var(--border)', paddingTop: '2.5rem', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--green-deep)', marginBottom: '0.4rem' }}>
              🧳 Was wir immer mitpacken
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', marginBottom: '1.5rem', maxWidth: '620px', lineHeight: 1.75 }}>
              Für Tagesausflüge, Raststätten, lange Autofahrten und Urlaubstage wo die Küche unsicher ist.
            </p>
            <div className="grid-2">
              {REISE_PACKLISTE.map(k => (
                <div key={k.kategorie} className="card">
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{k.icon}</div>
                  <h4 style={{ fontSize: '0.875rem', marginBottom: '0.6rem', color: 'var(--green-deep)' }}>{k.kategorie}</h4>
                  <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
                    {k.items.map(item => (
                      <li key={item} style={{ fontSize: '0.8rem', lineHeight: 1.85, color: 'var(--text-mid)' }}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="card" style={{ marginTop: '1.25rem', background: 'rgba(233,196,106,0.08)', border: '1.5px solid rgba(233,196,106,0.3)' }}>
              <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.85 }}>
                <strong>Unser Grundprinzip:</strong> Im Zweifel selbst einpacken. Lieber die Reiswaffel
                aus dem Rucksack als die Panik am Raststätten-Buffet. Mit einem gut bestückten
                „GF-Notfallrucksack" fahren wir seit Jahren entspannt durch jeden Urlaub.
              </p>
            </div>
          </div>

          {/* Links */}
          <div style={{ borderTop: '2px solid var(--border)', paddingTop: '2.5rem', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.2rem', color: 'var(--green-deep)', marginBottom: '1.25rem' }}>
              🔗 Nützliche Links & Apps
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  label: 'Find Me Gluten Free',
                  href: 'https://www.findmeglutenfree.com/de/augsburg',
                  desc: 'App & Website mit von der Community bewerteten Restaurants – auch viele Einträge für Augsburg mit Sicherheitsbewertungen von echten Zöliakikern.',
                },
                {
                  label: 'Deutsche Zöliakie Gesellschaft (DZG)',
                  href: 'https://www.dzg-online.de',
                  desc: 'Offizielle Gesellschaft mit Produktliste, Restaurantführer und Reiseinformationen.',
                },
                {
                  label: 'Konditorei Schenkel – Glutenfreie Leckereien',
                  href: 'https://glutenfreie-leckereien.de',
                  desc: 'Online-Shop und Infos zur komplett glutenfreien Konditorei in Aichach.',
                },
              ].map(link => (
                <div key={link.label} className="card" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                  <div>
                    <p style={{ fontWeight: 700, margin: '0 0 0.25rem', fontSize: '0.9rem', color: 'var(--text-dark)' }}>{link.label}</p>
                    <p style={{ margin: 0, fontSize: '0.825rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>{link.desc}</p>
                  </div>
                  <a href={link.href} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--green-mid)', whiteSpace: 'nowrap', flexShrink: 0 }}>
                    Zur Website →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div style={{
            padding: '1.5rem',
            background: 'rgba(149,213,178,0.1)', border: '1.5px solid rgba(149,213,178,0.3)',
            borderRadius: '12px',
          }}>
            <h3 style={{ margin: '0 0 0.5rem', color: 'var(--green-deep)' }}>📬 Du kennst eine Empfehlung?</h3>
            <p style={{ margin: '0 0 1rem', fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
              Wenn du ein Restaurant, eine Bäckerei oder einen Laden kennst der es verdient hier zu stehen –
              schreib uns! Wir freuen uns über jede Empfehlung aus der Community.
            </p>
            <a href="mailto:waschtls.schmankerl@web.de"
              style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--green-mid)' }}>
              waschtls.schmankerl@web.de →
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
