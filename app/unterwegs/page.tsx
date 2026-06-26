import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Glutenfrei Unterwegs – Augsburg, Bayern & Restaurants',
  description:
    'Restaurants, Bäckereien und Supermärkte in Augsburg, die zuverlässig glutenfrei kochen oder einkaufen lassen. Unsere Familienerfahrungen.',
};

// ── Typen ─────────────────────────────────────────────────────────────────────

type Ort = {
  name: string;
  beschreibung: string;
  adresse?: string;
  tipp?: string;
  todo?: boolean;
};

type Kategorie = {
  icon: string;
  titel: string;
  beschreibung: string;
  orte: Ort[];
};

// ── Daten ─────────────────────────────────────────────────────────────────────
// ⚠️ Sebastian: Alle "todo: true"-Einträge bitte mit echten Erfahrungen füllen!
// Einfach name, adresse, beschreibung, tipp ergänzen und todo entfernen.

const KATEGORIEN: Kategorie[] = [
  {
    icon: '🍽',
    titel: 'Restaurants in Augsburg',
    beschreibung: 'Restaurants wo wir mit unserem Sohn problemlos essen können – d.h. die das Thema ernst nehmen und nicht nur "weglassen".',
    orte: [
      {
        name: 'Dein Lieblings-Restaurant hier',
        beschreibung: 'Hier kommt ein konkretes Restaurant mit Erfahrungsbericht. Z.B.: "Auf Anfrage bereiten sie glutenfreie Pasta zu, extra Pfanne, super nettes Personal."',
        adresse: 'Musterstraße 1, 86150 Augsburg',
        tipp: 'Am besten vorher anrufen und nachfragen, ob sie an dem Tag GF kochen können.',
        todo: true,
      },
      {
        name: 'Weiteres Restaurant',
        beschreibung: 'Dein nächster Erfahrungsbericht hier.',
        todo: true,
      },
    ],
  },
  {
    icon: '🥐',
    titel: 'Bäckereien & Cafés',
    beschreibung: 'Frisches glutenfreies Brot und Gebäck ist schwer zu finden – hier die, die es bei uns gibt.',
    orte: [
      {
        name: 'Glutenfreie Bäckerei / Café',
        beschreibung: 'Deine Empfehlung für eine Bäckerei oder ein Café in Augsburg, das glutenfrei anbietet.',
        adresse: 'Adresse hier eintragen',
        tipp: 'Tipp hier eintragen, z.B. "Am Samstag früh kommen, dann ist noch mehr Auswahl."',
        todo: true,
      },
    ],
  },
  {
    icon: '🛒',
    titel: 'Einkaufen in Augsburg',
    beschreibung: 'Wo wir unseren glutenfreien Wocheneinkauf erledigen – inklusive Spezialprodukte die man sonst nicht findet.',
    orte: [
      {
        name: 'Reformhaus / Bioladen',
        beschreibung: 'Deine Empfehlung für einen Laden mit besonders guter GF-Auswahl.',
        adresse: 'Adresse hier',
        tipp: 'Was du dort besonders empfiehlst.',
        todo: true,
      },
      {
        name: 'Rewe / Edeka mit besonders guter GF-Abteilung',
        beschreibung: 'Wenn du einen Supermarkt mit besonders gutem GF-Sortiment kennst.',
        todo: true,
      },
    ],
  },
  {
    icon: '🏖',
    titel: 'Urlaub & Reisen',
    beschreibung: 'Unsere Erfahrungen mit glutenfreiem Reisen – Österreich, Italien, und was wir uns für lange Fahrten mitnehmen.',
    orte: [
      {
        name: 'Reisetipps für GF-Familien',
        beschreibung: 'Was wir immer einpacken: eigene Reiswaffeln, Energiebällchen, zertifizierte Snacks. So muss man an Raststätten nicht improvisieren.',
        tipp: 'Unser Brotrezept (Sauerteig, kommt bald) hält 3–4 Tage und ist perfekt für Roadtrips.',
        todo: true,
      },
      {
        name: 'Glutenfrei in Italien',
        beschreibung: 'Italien hat eine starke GF-Kultur – viele Restaurants haben explizit GF-Pasta. Was wir erlebt haben kommt hier.',
        todo: true,
      },
    ],
  },
  {
    icon: '🍕',
    titel: 'Bestell-Dienste & Lieferung',
    beschreibung: 'Wenn man keine Lust hat zu kochen: welche Lieferdienste zuverlässig glutenfrei liefern.',
    orte: [
      {
        name: 'Lieferdienst-Empfehlung',
        beschreibung: 'Deine Erfahrungen mit einem Lieferdienst der GF ernst nimmt.',
        todo: true,
      },
    ],
  },
];

// ── Online-Quellen ─────────────────────────────────────────────────────────────

const ONLINE_TIPPS = [
  {
    label: 'Find Me Gluten Free',
    href: 'https://www.findmeglutenfree.com',
    desc: 'App & Website mit von der Community bewerteten Restaurants weltweit – auch viele Einträge für Augsburg.',
  },
  {
    label: 'Zöliakiezentrum Augsburg',
    href: 'https://www.zoeliakie-zentrum-augsburg.de',
    desc: 'Lokale Anlaufstelle für Diagnose und Beratung – hat auch eine Restaurantliste für die Region.',
    todo: true,
  },
  {
    label: 'Deutsche Zöliakie Gesellschaft (DZG)',
    href: 'https://www.dzg-online.de',
    desc: 'Offizielle Gesellschaft mit Produktliste, Restaurantführer und Reiseinformationen.',
  },
];

// ── Komponente ────────────────────────────────────────────────────────────────

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
            Als Familie mit Zöliakie-Kind haben wir Augsburg und Bayern ziemlich gründlich auf glutenfreie
            Tauglichkeit getestet. Hier teilen wir, was wirklich funktioniert.
          </p>
          <div style={{
            marginTop: '1.25rem', padding: '0.75rem 1rem',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '8px', maxWidth: '600px',
            fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7,
          }}>
            🚧 <strong style={{ color: 'rgba(255,255,255,0.65)' }}>Im Aufbau:</strong>{' '}
            Diese Seite füllen wir mit echten Erfahrungsberichten aus unserem Alltag.
            Wenn du eine Empfehlung hast, schreib uns gerne!
          </div>
        </div>
      </section>

      {/* Schnell-Tipps Banner */}
      <section style={{ background: 'var(--cream-dark)', padding: '1.25rem 0', borderBottom: '2px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
              <span style={{ fontSize: '1.2rem' }}>☎️</span>
              <span style={{ color: 'var(--text-mid)' }}>Immer vorher anrufen</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
              <span style={{ fontSize: '1.2rem' }}>🏷</span>
              <span style={{ color: 'var(--text-mid)' }}>Auf die durchgestrichene Ähre achten</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
              <span style={{ fontSize: '1.2rem' }}>🍱</span>
              <span style={{ color: 'var(--text-mid)' }}>Im Zweifel selbst einpacken</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
              <span style={{ fontSize: '1.2rem' }}>📱</span>
              <span style={{ color: 'var(--text-mid)' }}>Find Me Gluten Free App nutzen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Kategorien */}
      <section className="section">
        <div className="container">

          {KATEGORIEN.map((kat, ki) => (
            <div key={ki} style={{ marginBottom: '3.5rem' }}>
              <h2 style={{
                fontSize: '1.35rem', color: 'var(--green-deep)',
                marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                {kat.icon} {kat.titel}
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '1.5rem', maxWidth: '600px' }}>
                {kat.beschreibung}
              </p>

              <div className="grid-2">
                {kat.orte.map((ort, oi) => (
                  <div key={oi} className="card" style={{
                    padding: '1.35rem 1.5rem',
                    border: ort.todo ? '2px dashed var(--border)' : undefined,
                    opacity: ort.todo ? 0.65 : 1,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '0.95rem', margin: 0, color: ort.todo ? 'var(--text-light)' : 'var(--text-dark)' }}>
                        {ort.name}
                      </h3>
                      {ort.todo && (
                        <span style={{
                          flexShrink: 0, fontSize: '0.65rem', padding: '0.12rem 0.45rem',
                          borderRadius: '999px', border: '1.5px dashed var(--border)',
                          color: 'var(--text-light)', whiteSpace: 'nowrap',
                        }}>kommt bald</span>
                      )}
                    </div>
                    {ort.adresse && (
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', margin: '0 0 0.5rem', fontStyle: 'italic' }}>
                        📍 {ort.adresse}
                      </p>
                    )}
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.65, margin: ort.tipp ? '0 0 0.75rem' : 0 }}>
                      {ort.beschreibung}
                    </p>
                    {ort.tipp && (
                      <div style={{
                        padding: '0.6rem 0.875rem', borderRadius: '8px',
                        background: 'rgba(233,196,106,0.1)',
                        border: '1px solid rgba(233,196,106,0.3)',
                        fontSize: '0.8rem', color: 'var(--text-dark)', lineHeight: 1.65,
                      }}>
                        💡 {ort.tipp}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* ── Restaurant anfragen ── */}
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

          {/* ── Hotel anfragen ── */}
          <div style={{ borderTop: '2px solid var(--border)', paddingTop: '2.5rem', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--green-deep)', marginBottom: '0.4rem' }}>
              🏨 Hotel mit Zöliakie: Muster-E-Mail
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', marginBottom: '1.25rem', maxWidth: '620px', lineHeight: 1.75 }}>
              Bei Buchung einfach mitschicken – die meisten Hotels sind sehr kooperativ wenn man früh genug fragt.
            </p>
            <div className="card" style={{ background: 'var(--cream-dark)', border: '1.5px solid var(--border)' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '1rem', marginTop: 0 }}>
                — Kopiervorlage —
              </p>
              <div style={{ fontSize: '0.9rem', lineHeight: 2, color: 'var(--text-dark)' }}>
                <p style={{ margin: '0 0 0.75rem' }}>
                  Betreff: Buchung [Datum] – glutenfreie Ernährung für Kind mit Zöliakie
                </p>
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

          {/* ── Reise-Packungsliste ── */}
          <div style={{ borderTop: '2px solid var(--border)', paddingTop: '2.5rem', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--green-deep)', marginBottom: '0.4rem' }}>
              🧳 Was wir immer mitpacken
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', marginBottom: '1.5rem', maxWidth: '620px', lineHeight: 1.75 }}>
              Für Tagesausflüge, Raststätten, lange Autofahrten und Urlaubstage wo die Küche unsicher ist.
            </p>
            <div className="grid-2">
              {[
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
              ].map(k => (
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

          {/* Online-Quellen */}
          <div style={{ borderTop: '2px solid var(--border)', paddingTop: '2.5rem' }}>
            <h2 style={{ fontSize: '1.2rem', color: 'var(--green-deep)', marginBottom: '1.25rem' }}>
              🔗 Nützliche Links & Apps
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {ONLINE_TIPPS.map((link, i) => (
                <div key={i} className="card" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                  <div>
                    <p style={{ fontWeight: 700, margin: '0 0 0.25rem', fontSize: '0.9rem', color: 'var(--text-dark)' }}>{link.label}</p>
                    <p style={{ margin: 0, fontSize: '0.825rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>{link.desc}</p>
                  </div>
                  {!link.todo && (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--green-mid)', whiteSpace: 'nowrap', flexShrink: 0 }}
                    >
                      Zur Website →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div style={{
            marginTop: '2.5rem', padding: '1.5rem',
            background: 'rgba(149,213,178,0.1)', border: '1.5px solid rgba(149,213,178,0.3)',
            borderRadius: '12px',
          }}>
            <h3 style={{ margin: '0 0 0.5rem', color: 'var(--green-deep)' }}>📬 Du kennst eine Empfehlung?</h3>
            <p style={{ margin: '0 0 1rem', fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
              Wenn du ein Restaurant, eine Bäckerei oder einen Laden kennst, der es verdient hier zu stehen –
              schreib uns! Wir freuen uns über jede Empfehlung aus der Community.
            </p>
            <a
              href="mailto:contact@waschtls-schmankerl.de"
              style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--green-mid)' }}
            >
              contact@waschtls-schmankerl.de →
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
