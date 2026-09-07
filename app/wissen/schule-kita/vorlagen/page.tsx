'use client';

import { useState } from 'react';
import Link from 'next/link';

// ── Texte zum Kopieren ──────────────────────────────────────────────────────

const BRIEF_TEXT = `Betreff: Zöliakie-Erkrankung von [Name des Kindes]

Sehr geehrte [Frau / Herr Nachname],

unser Kind [Name] leidet an Zöliakie – einer Autoimmunerkrankung bei der der Körper auf Gluten reagiert. Gluten steckt in Weizen, Roggen, Gerste und Dinkel. Schon kleinste Mengen – auch unsichtbare Spuren – können den Darm dauerhaft schädigen. Es ist keine vorübergehende Unverträglichkeit.

Für den Alltag bei Ihnen bedeutet das bitte Folgendes zu beachten:

• [Name] bringt sein/ihr eigenes Essen mit und darf nichts von anderen Kindern essen.
• Bitte darauf achten, dass Besteck, Hände und Tische sauber sind, bevor [Name] isst.
• Bei Backen oder Basteln mit Mehl/Teig bitte glutenfreies Material für [Name] bereitstellen oder uns vorher Bescheid geben.
• Auch Spielknete (z.B. Play-Doh) enthält Weizen – bitte beim Kneten beachten oder eine glutenfreie Alternative bereitstellen.
• Wir hinterlegen eine kleine Box mit sicheren glutenfreien Snacks für Situationen wie Geburtstage oder spontane Naschereien.

Zöliakie ist medizinisch diagnostiziert. Wir stehen jederzeit für Rückfragen zur Verfügung – am liebsten per E-Mail an [eure E-Mail-Adresse] oder telefonisch unter [Telefonnummer].

Herzlichen Dank für Ihr Verständnis und Ihre Unterstützung.

Mit freundlichen Grüßen,
[Vorname Nachname Elternteil 1] und [Vorname Nachname Elternteil 2]
Eltern von [Name des Kindes]`;

const CHECKLISTE_TEXT = `CHECKLISTE: Zöliakie in Kita & Schule
Was vor dem ersten Tag geregelt sein sollte

KOMMUNIKATION
☑ Brief / E-Mail an Gruppenerzieher oder Klassenleitung schicken
☑ Kurzes persönliches Gespräch vereinbaren
☑ Küchenpersonal / Caterer DIREKT informieren (nicht nur über die Leitung)
☑ Kontaktmöglichkeit hinterlassen: Handynummer für kurzfristige Fragen
◻ DZG-Flyer „Zöliakie im Kindergarten" aushändigen (kostenlos auf dzg-online.de)
◻ Regelmäßige Rücksprache vereinbaren (z.B. nach 4 Wochen)

ESSEN & VERPFLEGUNG
☑ Mittagessen-Situation klären: Kind bringt eigenes mit, oder gibt es eine GF-Option?
☑ Falls eigenes Essen: Aufwärmungsmöglichkeit klären und Kontaminationsschutz besprechen
◻ Speiseplan der Einrichtung anschauen: was ist sicher, was muss angepasst werden?
◻ Bei Kantine/Caterer: GF-Option anfragen

KÜCHE & HYGIENE
☑ Kreuzverunreinigung besprechen: separate Ablage, kein gemeinsames Besteck/Schöpfer
◻ Küchen-Rundgang: Toaster, Holzlöffel, Siebe, Schneidebretter – GF-Sicherheit prüfen
◻ Klären ob eigene GF-Töpfe und Utensilien vorhanden sind

NOTFALL-SNACKBOX
☑ Box abgeben (beschriftet: Name, „nur für [Kind] – glutenfrei")
☑ Ablaufdaten notiert, Vereinbarung zum Auffüllen getroffen
◻ Inhalt: Kekse, Reiswaffeln, Gummibärchen, Schokolade – oder GF Schär Muffins

SPIELZEUG & PFLEGEARTIKEL (häufig vergessen!)
☑ Spielknete prüfen: Play-Doh enthält Weizen → GF-Alternative (z.B. Fimo, GF-Salzteig)
☑ Fingerfarben, Bastelkleber, Pappmachéteig können Weizen enthalten → Zutaten prüfen
◻ Zahnpasta in der Einrichtung prüfen (bei Zahnpflege-Aktionen)
◻ Handcreme im Gruppenraum: manche Cremes enthalten Weizenkeimöl

DAS KIND VORBEREITEN
☑ Satz üben: „Ich darf das nicht essen, ich hab Zöliakie – ich hab meinen eigenen Snack dabei"
☑ Kind weiß welche Kategorien sicher sind: Fleisch ohne Soße, Kartoffeln, Reis, Obst, Rohkost
☑ Kind weiß wen es bei Unsicherheit fragen soll
◻ Notfallkarte im Ranzen: Name, Diagnose, Eltern-Telefonnummer

GEBURTSTAGE & ANLÄSSE
◻ Andere Eltern beim nächsten Geburtstag proaktiv informieren
◻ Feste und Schulfeiern: vorher erfragen was serviert wird

NACHHER
◻ Nach 4 Wochen: Rücksprache – läuft es? Hat das Kind Symptome?
◻ Ärztliches Attest bereithalten falls Einrichtung skeptisch wird

────────────────────────────────────────────────
☑ = unbedingt nötig  ◻ = empfohlen
Mehr: waschtls-schmankerl.de/wissen/schule-kita`;

// ── Component ───────────────────────────────────────────────────────────────

export default function VorlagenPage() {
  const [briefCopied, setBriefCopied] = useState(false);
  const [listeCopied, setListeCopied] = useState(false);

  function copy(text: string, setDone: (v: boolean) => void) {
    navigator.clipboard.writeText(text).then(() => {
      setDone(true);
      setTimeout(() => setDone(false), 2200);
    });
  }

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> ›{' '}
            <Link href="/wissen/schule-kita" style={{ color: 'var(--mint)' }}>Kita & Schule</Link> ›{' '}
            Vorlagen
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.75rem' }}>
            Vorlagen: Musterbrief & Checkliste
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '600px', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Text direkt kopieren oder als Word-Datei herunterladen – mit allen Platzhaltern
            zum Anpassen.
          </p>

          {/* Download-Button */}
          <a
            href="/downloads/musterbrief-und-checkliste-zoeliakie-kita-schule.docx"
            download
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              marginTop: '1.25rem',
              padding: '0.65rem 1.4rem', borderRadius: '999px',
              background: 'var(--golden)', color: 'var(--green-deep)',
              fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
            }}
          >
            📄 Word-Datei herunterladen (.docx)
          </a>
        </div>
      </section>

      {/* Hinweis Platzhalter */}
      <section style={{ background: 'rgba(180,83,9,0.07)', borderBottom: '1px solid rgba(180,83,9,0.15)', padding: '0.75rem 0' }}>
        <div className="container">
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#92400E' }}>
            <strong>Felder in [eckigen Klammern]</strong> bitte vor dem Versenden durch eure Daten ersetzen.
          </p>
        </div>
      </section>

      {/* ── MUSTERBRIEF ── */}
      <section className="section" id="brief">
        <div className="container" style={{ maxWidth: '740px' }}>

          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            <div>
              <h2 style={{ margin: '0 0 0.3rem' }}>Musterbrief für Erzieher & Lehrer</h2>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-mid)' }}>
                Per E-Mail oder ausgedruckt – einfach anpassen und abschicken.
              </p>
            </div>
            <button
              onClick={() => copy(BRIEF_TEXT, setBriefCopied)}
              style={{
                flexShrink: 0,
                padding: '0.55rem 1.1rem', borderRadius: '8px',
                background: briefCopied ? 'var(--green-mid)' : 'var(--green-deep)',
                color: '#fff', border: 'none', cursor: 'pointer',
                fontWeight: 700, fontSize: '0.85rem', transition: 'background 0.2s',
              }}
            >
              {briefCopied ? '✓ Kopiert!' : '📋 Text kopieren'}
            </button>
          </div>

          {/* Brief-Inhalt */}
          <div className="card" style={{ background: 'rgba(255,255,255,0.9)', border: '1.5px solid var(--border)', fontFamily: 'Georgia, serif' }}>
            {/* Absender-Platzhalter */}
            <div style={{ marginBottom: '1.5rem', fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.9 }}>
              <PlaceholderLine label="Vorname Nachname Elternteil 1 / Elternteil 2" />
              <PlaceholderLine label="Straße, PLZ Ort" />
              <PlaceholderLine label="E-Mail  ·  Telefonnummer" />
            </div>

            <p style={{ textAlign: 'right', fontSize: '0.875rem', marginBottom: '1.5rem', color: 'var(--text-mid)' }}>
              <Placeholder label="Ort" />, den <Placeholder label="TT.MM.JJJJ" />
            </p>

            <div style={{ marginBottom: '1.5rem', fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.9 }}>
              <PlaceholderLine label="Name der Einrichtung / Schule" />
              <PlaceholderLine label="z.Hd. Frau / Herr Nachname" />
              <PlaceholderLine label="Straße, PLZ Ort" />
            </div>

            <p style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '1.25rem', color: 'var(--green-deep)' }}>
              Betreff: Zöliakie-Erkrankung von <Placeholder label="Name des Kindes" />
            </p>

            <p style={{ marginBottom: '1rem', fontSize: '0.875rem', color: 'var(--text-mid)' }}>
              Sehr geehrte <Placeholder label="Frau / Herr Nachname" />,
            </p>

            <p style={{ marginBottom: '0.75rem', fontSize: '0.875rem', lineHeight: 1.9, color: 'var(--text-mid)' }}>
              unser Kind <Placeholder label="Name" /> leidet an Zöliakie – einer Autoimmunerkrankung bei der der Körper auf Gluten reagiert.
              Gluten steckt in Weizen, Roggen, Gerste und Dinkel. Schon kleinste Mengen – auch unsichtbare Spuren –
              können den Darm dauerhaft schädigen. Es ist keine vorübergehende Unverträglichkeit.
            </p>

            <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 700, color: 'var(--green-deep)' }}>
              Für den Alltag bei Ihnen bedeutet das bitte Folgendes zu beachten:
            </p>

            <ul style={{ paddingLeft: '1.5rem', marginBottom: '0.75rem' }}>
              {[
                <><Placeholder label="Name" /> bringt sein/ihr eigenes Essen mit und darf nichts von anderen Kindern essen.</>,
                'Bitte darauf achten, dass Besteck, Hände und Tische sauber sind, bevor unser Kind isst.',
                'Bei Backen oder Basteln mit Mehl/Teig bitte glutenfreies Material bereitstellen oder uns vorher Bescheid geben.',
                'Auch Spielknete (z.B. Play-Doh) enthält Weizen – bitte beim Kneten beachten oder eine glutenfreie Alternative bereitstellen.',
                'Wir hinterlegen eine kleine Box mit sicheren glutenfreien Snacks für Geburtstage oder spontane Naschereien.',
              ].map((item, i) => (
                <li key={i} style={{ fontSize: '0.875rem', lineHeight: 1.9, color: 'var(--text-mid)', marginBottom: '0.3rem' }}>{item}</li>
              ))}
            </ul>

            <p style={{ marginBottom: '0.75rem', fontSize: '0.875rem', lineHeight: 1.9, color: 'var(--text-mid)' }}>
              Zöliakie ist medizinisch diagnostiziert. Wir stehen jederzeit für Rückfragen zur Verfügung –
              am liebsten per E-Mail an <Placeholder label="eure E-Mail-Adresse" /> oder telefonisch unter <Placeholder label="Telefonnummer" />.
            </p>

            <p style={{ marginBottom: '1.5rem', fontSize: '0.875rem', color: 'var(--text-mid)' }}>
              Herzlichen Dank für Ihr Verständnis und Ihre Unterstützung.
            </p>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.9 }}>
              Mit freundlichen Grüßen,<br />
              <Placeholder label="Vorname Nachname Elternteil 1" /> und <Placeholder label="Vorname Nachname Elternteil 2" /><br />
              Eltern von <Placeholder label="Name des Kindes" />
            </p>
          </div>

          {/* Tipps */}
          <div style={{ marginTop: '1rem', padding: '0.875rem 1.1rem', background: 'rgba(45,106,79,0.06)', borderRadius: '10px', border: '1px solid rgba(45,106,79,0.15)' }}>
            <p style={{ margin: '0 0 0.4rem', fontSize: '0.825rem', fontWeight: 700, color: 'var(--green-deep)' }}>💡 Tipps</p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
              {[
                'Kurzes persönliches Gespräch zusätzlich zum Brief – wirkt viel stärker.',
                'Für Kita: Gruppenerzieherinnen per cc in die E-Mail setzen.',
                'Ärztliches Attest beilegen wenn die Einrichtung anfangs zögerlich reagiert.',
                'DZG-Flyer „Zöliakie im Kindergarten" als kostenlose Beilage: dzg-online.de',
              ].map((t, i) => (
                <li key={i} style={{ fontSize: '0.8rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CHECKLISTE ── */}
      <section className="section" style={{ background: 'var(--cream-dark)', paddingTop: '2.5rem' }} id="checkliste">
        <div className="container" style={{ maxWidth: '740px' }}>

          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            <div>
              <h2 style={{ margin: '0 0 0.3rem' }}>Checkliste: Was vor dem ersten Tag geregelt sein sollte</h2>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-mid)' }}>
                ☑ = unbedingt nötig &nbsp;·&nbsp; ◻ = empfohlen
              </p>
            </div>
            <button
              onClick={() => copy(CHECKLISTE_TEXT, setListeCopied)}
              style={{
                flexShrink: 0,
                padding: '0.55rem 1.1rem', borderRadius: '8px',
                background: listeCopied ? 'var(--green-mid)' : 'var(--green-deep)',
                color: '#fff', border: 'none', cursor: 'pointer',
                fontWeight: 700, fontSize: '0.85rem', transition: 'background 0.2s',
              }}
            >
              {listeCopied ? '✓ Kopiert!' : '📋 Text kopieren'}
            </button>
          </div>

          {[
            {
              titel: 'Kommunikation mit der Einrichtung',
              items: [
                { prio: true,  text: 'Brief / E-Mail an Gruppenerzieher oder Klassenleitung schicken' },
                { prio: true,  text: 'Kurzes persönliches Gespräch vereinbaren – Vertrauen aufbauen ist wichtiger als jeder Brief' },
                { prio: true,  text: 'Küchenpersonal / Caterer DIREKT informieren (nicht nur über die Leitung)' },
                { prio: true,  text: 'Kontaktmöglichkeit hinterlassen: Handynummer für kurzfristige Fragen' },
                { prio: false, text: 'DZG-Flyer „Zöliakie im Kindergarten" aushändigen (kostenlos auf dzg-online.de)' },
                { prio: false, text: 'Regelmäßige Rücksprache vereinbaren: z.B. nach 4 Wochen nochmals kurzes Gespräch' },
              ],
            },
            {
              titel: 'Essen & Verpflegung',
              items: [
                { prio: true,  text: 'Mittagessen-Situation klären: Kind bringt eigenes mit, oder gibt es eine glutenfreie Option?' },
                { prio: true,  text: 'Falls eigenes Essen: Aufwärmungsmöglichkeit klären und Kontaminationsschutz besprechen' },
                { prio: false, text: 'Speiseplan der Einrichtung anschauen: was ist sicher, was muss angepasst werden?' },
                { prio: false, text: 'Bei Kantine/Caterer: GF-Option anfragen – manchmal reicht es, Nudeln durch GF-Variante zu ersetzen' },
              ],
            },
            {
              titel: 'Küche & Hygiene',
              items: [
                { prio: true,  text: 'Kreuzverunreinigung besprechen: separate Ablage, kein gemeinsames Besteck/Schöpfer' },
                { prio: false, text: 'Küchen-Rundgang: Toaster, Holzlöffel, Siebe, Schneidebretter – GF-Sicherheit prüfen' },
                { prio: false, text: 'Klären ob eigene GF-Töpfe und Utensilien vorhanden sind oder mitgebracht werden müssen' },
              ],
            },
            {
              titel: 'Notfall-Snackbox',
              items: [
                { prio: true,  text: 'Box abgeben – beschriftet: Name, „nur für [Kind] – glutenfrei"' },
                { prio: true,  text: 'Ablaufdaten notiert, Vereinbarung zum Auffüllen getroffen' },
                { prio: false, text: 'Inhalt: GF-Kekse, Reiswaffeln, Gummibärchen, Schokolade – oder GF Schär Muffins (einzeln verpackt)' },
              ],
            },
            {
              titel: '🧸 Spielzeug & Pflegeartikel (häufig vergessen!)',
              items: [
                { prio: true,  text: 'Spielknete prüfen: Play-Doh enthält Weizen → GF-Alternative besorgen (z.B. Fimo, GF-Salzteig)' },
                { prio: true,  text: 'Fingerfarben, Bastelkleber, Pappmachéteig können Weizen enthalten → Zutaten prüfen' },
                { prio: false, text: 'Zahnpasta bei Zahnpflege-Aktionen der Einrichtung prüfen' },
                { prio: false, text: 'Handcreme im Gruppenraum: manche Cremes enthalten Weizenkeimöl' },
              ],
            },
            {
              titel: 'Das Kind vorbereiten',
              items: [
                { prio: true,  text: 'Satz üben: „Ich darf das nicht essen, ich hab Zöliakie – ich hab meinen eigenen Snack dabei"' },
                { prio: true,  text: 'Kind weiß welche Kategorien sicher sind: Fleisch ohne Soße, Kartoffeln, Reis, Obst, Rohkost' },
                { prio: true,  text: 'Kind weiß wen es bei Unsicherheit fragen soll (Bezugserzieherin / Klassenleitung)' },
                { prio: false, text: 'Notfallkarte im Ranzen: Name, Diagnose, Eltern-Telefonnummer' },
              ],
            },
            {
              titel: 'Geburtstage & besondere Anlässe',
              items: [
                { prio: false, text: 'GF-Schoko-Muffins eingefroren zuhause oder in der Garderobe bereithalten – für spontane Feiern' },
                { prio: false, text: 'Andere Eltern beim nächsten Geburtstag proaktiv informieren' },
                { prio: false, text: 'Feste und Schulfeiern: vorher erfragen was serviert wird' },
              ],
            },
            {
              titel: 'Nachher',
              items: [
                { prio: false, text: 'Nach 4 Wochen: kurze Rücksprache – läuft es? Hat das Kind Symptome?' },
                { prio: false, text: 'Ärztliches Attest bereithalten falls Einrichtung irgendwann skeptisch wird' },
                { prio: false, text: 'Arzttermine kommunizieren: wenn Blutwerte gut sind, bestätigt das dass die Diät eingehalten wird' },
              ],
            },
          ].map(gruppe => (
            <div key={gruppe.titel} style={{ marginBottom: '1.25rem' }}>
              <p style={{
                margin: '0 0 0.5rem', fontSize: '0.75rem', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--green-mid)',
              }}>{gruppe.titel}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {gruppe.items.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                    padding: '0.6rem 0.875rem',
                    background: item.prio ? 'rgba(45,106,79,0.06)' : 'rgba(255,255,255,0.7)',
                    borderRadius: '8px',
                    border: `1px solid ${item.prio ? 'rgba(45,106,79,0.15)' : 'var(--border)'}`,
                  }}>
                    <span style={{ fontSize: '0.9rem', flexShrink: 0, marginTop: '0.05rem' }}>
                      {item.prio ? '☑' : '◻'}
                    </span>
                    <span style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--text-mid)' }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nav */}
      <section className="section" style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/wissen/schule-kita" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
              ← Kita & Schule: Übersicht
            </Link>
            <Link href="/wissen/schule-kita/pausenbrot-snacks" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
              Pausenbrot & Snacks →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Inline-Komponenten ──────────────────────────────────────────────────────

function Placeholder({ label }: { label: string }) {
  return (
    <span style={{
      fontWeight: 700, color: '#B45309',
      background: 'rgba(180,83,9,0.08)',
      borderRadius: '3px', padding: '0 3px',
      fontSize: 'inherit',
    }}>[{label}]</span>
  );
}

function PlaceholderLine({ label }: { label: string }) {
  return (
    <div>
      <Placeholder label={label} />
    </div>
  );
}
