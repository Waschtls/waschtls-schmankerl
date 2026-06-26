'use client';

import { useState } from 'react';
import Link from 'next/link';

type Vorlage = {
  id: string;
  titel: string;
  untertitel: string;
  emoji: string;
  beschreibung: string;
  text: string;
};

const VORLAGEN: Vorlage[] = [
  {
    id: 'brief-kita',
    emoji: '🏠',
    titel: 'Brief an die Kita',
    untertitel: 'Erstinformation für Erzieher',
    beschreibung: 'Für den ersten Kontakt nach der Diagnose – erklärt was Zöliakie ist, was das Kind nicht essen darf und wie die Kita reagieren soll.',
    text: `[Ort], [Datum]

Sehr geehrte Erzieherinnen und Erzieher,

mein Kind [Name des Kindes], geboren am [Geburtsdatum], besucht seit [Datum] Ihre Einrichtung.

Im [Monat/Jahr] wurde bei [ihm/ihr] Zöliakie (Glutenunverträglichkeit) diagnostiziert. Ich möchte Sie über diese Diagnose informieren und Ihnen die wichtigsten Verhaltensregeln erläutern.

Was ist Zöliakie?
Zöliakie ist eine lebenslange Autoimmunerkrankung. Bei Kontakt mit Gluten – einem Eiweißgemisch in Weizen, Dinkel, Roggen, Gerste und Hafer – greift das Immunsystem die Darmschleimhaut an. Es gibt keine Therapie außer einer strikten, lebenslangen glutenfreien Ernährung. Schon winzige Mengen (Krümel, Besteck das mit glutenhaltigen Speisen in Kontakt war) können eine Reaktion auslösen.

Was [Name] nicht essen darf:
– Brot, Brötchen, Gebäck, Kuchen, Kekse aus normalem Weizenmehl
– Nudeln, Pizza, Knödel aus Weizen
– Cornflakes, Müsli (außer ausdrücklich glutenfreie Varianten)
– Paniertes (z.B. Schnitzel, Fischstäbchen) ohne GF-Kennzeichnung
– Soßen, Suppenwürfel, Fertiggerichte ohne GF-Prüfung

Was Sie bitte beachten:
✓ [Name] bringt sein/ihr eigenes Mittagessen / Snack mit – bitte getrennt von anderen Speisen aufbewahren
✓ Gemeinsame Mahlzeiten: bitte kein „probieren" von den Speisen anderer Kinder erlauben
✓ Basteln & Kneten: herkömmliches Mehlteig-Kneten bitte ersetzen (z.B. Salzteig nur nach Rückfrage, kinderfreundliche GF-Alternative vorhanden)
✓ Bei Geburtstagen oder Festen: ich stehe für Rückfragen jederzeit zur Verfügung und bringe gerne eine GF-Alternative mit

Was bei versehentlichem Kontakt zu tun ist:
Zöliakie ist kein sofortiger Notfall wie eine Erdnussallergie – es gibt keine anaphylaktische Reaktion. Symptome (Bauchschmerzen, Übelkeit) können Stunden später auftreten. Bitte informieren Sie uns, wenn [Name] glutenhaltiges gegessen hat oder gegessen haben könnte, damit wir es nachverfolgen können.

Bei Fragen stehe ich Ihnen gerne zur Verfügung. Ich freue mich auf ein kurzes persönliches Gespräch, um offene Fragen zu klären.

Mit freundlichen Grüßen

[Ihr Name]
[Telefon / E-Mail]`,
  },
  {
    id: 'brief-schule',
    emoji: '🏫',
    titel: 'Brief an die Schule',
    untertitel: 'Für Klassenlehrer & Schulleitung',
    beschreibung: 'Etwas formeller als der Kita-Brief – für Klassenleitung und ggf. Schulleitung, mit Hinweis auf Schulausflüge und Kochen im Unterricht.',
    text: `[Ort], [Datum]

An die Klassenlehrkraft der Klasse [X]
[Schule, Adresse]

Betreff: Zöliakie bei [Name des Kindes], Klasse [X]

Sehr geehrte/r [Frau/Herr Nachname],

mein Kind [Name], geboren am [Datum], ist Schüler/in Ihrer Klasse. Bei [ihm/ihr] besteht eine ärztlich diagnostizierte Zöliakie (Glutenunverträglichkeit), über die ich Sie und die Schule informieren möchte.

Zöliakie ist eine anerkannte Autoimmunerkrankung. Die einzige Behandlung ist eine lebenslange strikt glutenfreie Ernährung. Bereits kleinste Mengen Gluten können Beschwerden auslösen und die Darmschleimhaut dauerhaft schädigen.

Konsequenzen für den Schulalltag:

Mensa / Mittagessen:
[Name] bringt eigene Speisen mit oder wir haben uns mit der Mensa bezüglich einer glutenfreien Option abgestimmt. Bitte stellen Sie sicher, dass das Essen von [Name] nicht mit anderen Speisen vermischt wird.

Unterricht (Hauswirtschaft / Backen / Basteln):
Bitte informieren Sie mich im Voraus wenn Lebensmittel im Unterricht verwendet werden, damit ich eine geeignete Alternative mitschicken kann. Auch Basteln mit Mehlkleister sollte für [Name] angepasst werden.

Schulausflüge:
Ich bitte darum, vorab informiert zu werden, damit ich geeignete Speisen mitgeben kann. An Raststätten und in Restaurants ist eine glutenfreie Verpflegung oft schwierig.

Ich habe ein ärztliches Attest, das die Diagnose bestätigt, und stehe für ein Gespräch jederzeit zur Verfügung. Gerne spreche ich auch direkt mit dem zuständigen Fachlehrpersonal.

Mit freundlichen Grüßen

[Ihr Name]
Erziehungsberechtigte/r von [Name des Kindes]
Klasse [X]
[Telefon / E-Mail]

Beilage: Ärztliches Attest (auf Anfrage)`,
  },
  {
    id: 'notfallkarte',
    emoji: '🪪',
    titel: 'Notfallkarte fürs Kind',
    untertitel: 'Kleinkarte für Schulranzen oder Geldbörse',
    beschreibung: 'Kurze Info-Karte für das Kind selbst – zum Vorzeigen bei Ausflügen, Geburtstagen oder im Notfall. Ausdrucken, laminieren, fertig.',
    text: `╔══════════════════════════════════════════════╗
║  🌾  ZÖLIAKIE – GLUTENFREI                   ║
╠══════════════════════════════════════════════╣
║                                              ║
║  Name: [Name des Kindes]                     ║
║                                              ║
║  Ich habe Zöliakie und darf kein             ║
║  Gluten essen. Bitte nichts mit              ║
║  Weizen, Dinkel, Roggen oder                 ║
║  Gerste geben.                               ║
║                                              ║
║  Kein Brot, keine Nudeln, kein               ║
║  Kuchen – außer von zu Hause!                ║
║                                              ║
║  Im Notfall Eltern anrufen:                  ║
║  📞 [Telefonnummer]                          ║
║                                              ║
╚══════════════════════════════════════════════╝`,
  },
  {
    id: 'checkliste-gespraech',
    emoji: '✅',
    titel: 'Checkliste: Gespräch mit Erziehern',
    untertitel: 'Vor dem ersten Elterngespräch',
    beschreibung: 'Was du vor dem ersten Gespräch klären und mitbringen solltest – damit nichts vergessen wird.',
    text: `Checkliste: Erstgespräch mit Erziehern/Lehrern wegen Zöliakie

MITBRINGEN:
☐ Ärztliches Attest (Kopie – Original behalten)
☐ Kurzinfo-Blatt zu Zöliakie (z.B. von der DZG: www.dzg-online.de)
☐ Liste verbotener Lebensmittel
☐ Notfallkarte für das Kind

KLÄREN:
☐ Wie wird das Mittagessen / der Snack aufbewahrt? (getrennt!)
☐ Wer ist Ansprechpartner bei Fragen? (Name, Kontakt notieren)
☐ Wie werden Geburtstage gehandhabt? (Eltern vorher informieren?)
☐ Gibt es Feste / Feiern / Elternabende mit Essen?
☐ Kochen/Backen im Unterricht – wie wird informiert?
☐ Schulausflüge: wie früh wird informiert?
☐ Notfallkontakt hinterlegen

FRAGEN DIE OFT VERGESSEN WERDEN:
☐ Wie reagieren Mitschüler / andere Kinder? (Teilen von Essen)
☐ Was passiert bei Verwechslung / versehentlichem Kontakt?
☐ Gibt es eine Schulküche – und wer reinigt das Geschirr?
☐ Hat die Einrichtung bereits Erfahrung mit Zöliakie/Allergien?

NACH DEM GESPRÄCH:
☐ Gespräch schriftlich festhalten und E-Mail zur Bestätigung schicken
☐ Notfallkarte beim Kind deponieren
☐ Andere Betreuer informiert? (z.B. Hort, Nachmittagsbetreuung)`,
  },
  {
    id: 'ausflug-karte',
    emoji: '🚌',
    titel: 'Ausflug-Hinweiskarte für Lehrer',
    untertitel: 'Kurze Begleitinfo für Schulausflüge',
    beschreibung: 'Kompakte Erinnerung für begleitende Lehrkräfte – was beim Ausflug zu beachten ist.',
    text: `Hinweis für Lehrkräfte | Schulausflug

Schüler/in: [Name], Klasse [X]
Diagnose: Zöliakie (glutenfreie Ernährung zwingend erforderlich)

[Name] hat Proviant von zu Hause dabei ✓

Bitte beachten:
• Kein Probieren von anderen Speisen erlauben
• An Raststätten / Restaurants: nur mitgebrachtes Essen
• Eis: nur wenn ausdrücklich als glutenfrei gekennzeichnet
  (Softeis aus Maschinen ist oft kontaminiert – lieber vermeiden)
• Bäckereien: bitte nicht hinein, da Krümelkontamination

Falls [Name] trotzdem etwas gegessen haben könnte das Gluten enthält:
→ Eltern umgehend informieren: [Telefonnummer]
→ Zöliakie ist kein sofortiger Notfall (keine Atemnot o.ä.)
  Symptome wie Bauchschmerzen können Stunden später kommen.

Bei Fragen: [Eltern Name] | [Telefon / E-Mail]

Danke für Ihre Unterstützung!`,
  },
];

function KopiButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        padding: '0.45rem 0.9rem', borderRadius: '6px', border: 'none',
        cursor: 'pointer', fontSize: '0.78rem', fontWeight: 700,
        background: copied ? 'rgba(45,106,79,0.12)' : 'rgba(45,106,79,0.07)',
        color: copied ? 'var(--green-mid)' : 'var(--green-deep)',
        transition: 'all 0.15s',
      }}
    >
      {copied ? '✓ Kopiert' : '📋 Text kopieren'}
    </button>
  );
}

export default function VorlagenClient() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link>
            {' › '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link>
            {' › '}
            Vorlagen
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.75rem' }}>📄 Vorlagen & Vordrucke</h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: '580px', lineHeight: 1.75 }}>
            Musterbriefe, Notfallkarten und Checklisten für den Alltag mit Zöliakie –
            für Kita, Schule und Ausflüge. Einfach Text kopieren, Namen eintragen, fertig.
          </p>
          {/* Schnellnavigation */}
          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {VORLAGEN.map(v => (
              <button
                key={v.id}
                onClick={() => setOpen(open === v.id ? null : v.id)}
                style={{
                  padding: '0.35rem 0.85rem', borderRadius: '999px',
                  border: '1px solid rgba(149,213,178,0.35)',
                  fontSize: '0.78rem', color: 'var(--mint)',
                  background: open === v.id ? 'rgba(149,213,178,0.15)' : 'rgba(149,213,178,0.06)',
                  cursor: 'pointer',
                }}
              >
                {v.emoji} {v.titel}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>

          <div style={{
            padding: '0.875rem 1.25rem', marginBottom: '2.5rem',
            background: 'rgba(149,213,178,0.08)', border: '1.5px solid rgba(149,213,178,0.3)',
            borderRadius: '10px', fontSize: '0.825rem', color: 'var(--text-mid)', lineHeight: 1.75,
          }}>
            Alle Vorlagen sind Muster – bitte vor dem Versenden Namen, Daten und individuelle Details anpassen.
            Kein Ersatz für rechtliche oder ärztliche Beratung.
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {VORLAGEN.map(v => (
              <div key={v.id} style={{
                border: `1.5px solid ${open === v.id ? 'var(--green-mid)' : 'var(--border)'}`,
                borderRadius: '12px', overflow: 'hidden', background: '#fff',
                transition: 'border-color 0.15s',
              }}>
                {/* Header */}
                <button
                  onClick={() => setOpen(open === v.id ? null : v.id)}
                  style={{
                    width: '100%', textAlign: 'left',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: '0.75rem', padding: '1rem 1.25rem',
                    background: open === v.id ? 'rgba(45,106,79,0.04)' : 'none',
                    border: 'none', cursor: 'pointer',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                    <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{v.emoji}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.925rem', color: 'var(--text-dark)' }}>
                        {v.titel}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.15rem' }}>
                        {v.untertitel}
                      </div>
                    </div>
                  </div>
                  <span style={{
                    flexShrink: 0, fontSize: '0.6rem', color: 'var(--text-light)',
                    transition: 'transform 0.15s',
                    transform: open === v.id ? 'rotate(180deg)' : 'none',
                    display: 'inline-block',
                  }}>▼</span>
                </button>

                {open === v.id && (
                  <div style={{ borderTop: '1px solid var(--border)', padding: '1.25rem' }}>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-mid)', lineHeight: 1.7, margin: '0 0 1rem' }}>
                      {v.beschreibung}
                    </p>

                    {/* Vorlage Text */}
                    <div style={{
                      background: 'var(--cream)', border: '1px solid var(--border)',
                      borderRadius: '8px', padding: '1.25rem',
                      fontFamily: 'monospace', fontSize: '0.78rem',
                      color: 'var(--text-dark)', lineHeight: 1.8,
                      whiteSpace: 'pre-wrap', marginBottom: '0.875rem',
                      maxHeight: '400px', overflowY: 'auto',
                    }}>
                      {v.text}
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      <KopiButton text={v.text} />
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>
                        Platzhaltler in [eckigen Klammern] ersetzen
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Hinweis weitere Vorlagen */}
          <div style={{
            marginTop: '3rem', padding: '1.5rem', borderRadius: '12px',
            background: 'rgba(233,196,106,0.08)', border: '1.5px solid rgba(233,196,106,0.3)',
          }}>
            <h2 style={{ fontSize: '1rem', color: 'var(--green-deep)', marginBottom: '0.75rem' }}>
              💡 Weitere Vorlagen geplant
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.75, margin: '0 0 0.75rem' }}>
              In Arbeit: Vorlage für Restaurants (Kochhinweise für Servicepersonal),
              Reise-Info-Karte (mehrsprachig) und Formular für den Kinderarzt.
              Fehlt dir eine bestimmte Vorlage?
            </p>
            <Link href="/kontakt" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--green-mid)' }}>
              Wunsch einsenden →
            </Link>
          </div>

          {/* Verweis auf Schule-Kita */}
          <div style={{
            marginTop: '1.25rem', padding: '1.25rem', borderRadius: '12px',
            background: 'rgba(149,213,178,0.06)', border: '1px solid rgba(149,213,178,0.2)',
            display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap',
          }}>
            <span style={{ fontSize: '1.5rem' }}>🏫</span>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--green-deep)', marginBottom: '0.25rem' }}>
                Mehr zum Thema Schule & Kita
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-mid)' }}>
                Tipps für Elterngespräche, Geburtstage in der Gruppe und die Schulkantine
              </div>
            </div>
            <Link href="/wissen/schule-kita" style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--green-mid)', whiteSpace: 'nowrap' }}>
              Zum Artikel →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
