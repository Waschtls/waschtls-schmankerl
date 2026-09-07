import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Klassenfahrt mit Zöliakie – so klappt es | Waschtls Schmankerl',
  description:
    'Wie bereitet man eine Klassenfahrt mit einem Kind mit Zöliakie vor? Gespräch mit Lehrern, Packliste, sichere Snacks, Notfallplan – aus dem Alltag einer Zöliakie-Familie.',
};

const vorMittage = [
  {
    nr: '01',
    wann: 'So früh wie möglich',
    was: 'Lehrer informieren',
    text: 'Nicht erst eine Woche vorher – sobald die Fahrt angekündigt wird. Ein kurzes persönliches Gespräch ist besser als eine E-Mail. Frag konkret: Wer ist für das Essen zuständig? Gibt es eine Herberge mit Küche? Gibt es Alternativen?',
  },
  {
    nr: '02',
    wann: '4–6 Wochen vorher',
    was: 'Unterkunft direkt kontaktieren',
    text: 'Name und Telefonnummer der Unterkunft vom Lehrer holen und selbst anrufen. Erklär die Situation kurz und frag: Können sie glutenfreies Essen anbieten? Wenn ja – was genau? Wenn nein – darf das Kind eigene Lebensmittel mitbringen?',
  },
  {
    nr: '03',
    wann: '2–3 Wochen vorher',
    was: 'Packliste Lebensmittel erstellen',
    text: 'Je nach Antwort der Unterkunft: entweder vertrauen und nichts extra einpacken (bei klarer Zusage), oder Eigenversorgung für Frühstück und Snacks planen. Mittagessen und Abendessen sind in Herbergen meist machbar, Frühstück ist das Risikomahlzeit.',
  },
  {
    nr: '04',
    wann: '1 Woche vorher',
    was: 'Mit dem Kind üben',
    text: 'Das Kind muss wissen: Was darf ich essen? Wen frage ich wenn ich nicht sicher bin? Was ist mein Satz wenn jemand mir etwas anbietet? Kein Stress aufbauen – sachlich und klar.',
  },
  {
    nr: '05',
    wann: 'Abend vorher',
    was: 'Notfallpaket einpacken',
    text: 'Eine kleine Tasche mit sicheren Snacks die immer beim Kind bleibt – nicht im großen Koffer. Für den Fall dass eine Mahlzeit nicht passt oder spontan etwas angeboten wird.',
  },
];

const packlisteLebensmittel = [
  {
    kategorie: 'Frühstück-Backup',
    items: [
      'GF-Toast in verschlossenem Beutel (2–3 Tage haltbar)',
      'Portionspackung Erdnussbutter oder Frischkäse',
      'Reiswaffeln als Knäckebrot-Ersatz',
      'Instanthafer (GF-zertifiziert) + Becher wenn möglich',
    ],
  },
  {
    kategorie: 'Snacks für unterwegs & Pausen',
    items: [
      'GF-Kekse oder Schär Petit (mehrere Packungen)',
      'Reiswaffeln einzeln verpackt',
      'Nüsse & Trockenfrüchte (wenn keine Nuss-Beschränkung)',
      'Zartbitterschokolade (Lindt 70%)',
      'Haribogummibärchen',
      'Obstpüree-Quetschies (lange haltbar)',
    ],
  },
  {
    kategorie: 'Notfall-Hauptmahlzeit',
    items: [
      '1–2 Instant-Nudeln glutenfrei (z.B. Schär Instant-Pasta)',
      'Selbstgemachte Energiebällchen (einfrieren, am Tag der Fahrt mitnehmen)',
      'Kleine Dose Sardinen oder Thunfisch (Protein, kein Kühlen nötig)',
    ],
  },
  {
    kategorie: 'Praktisches',
    items: [
      'Kleines Schneidebrett (GF) wenn selbst belegen',
      'Messer für GF-Brot',
      'Wiederverschließbare Beutel',
      'Marker für Beschriftung',
      'Kontaktkarte mit Elternnummer und kurzem GF-Hinweis',
    ],
  },
];

const herbaergeSzenarien = [
  {
    szenario: '✅ Unterkunft macht mit',
    text: 'Die meisten größeren Jugendherbergen haben Erfahrung mit Allergien und Unverträglichkeiten. Klare Absprache: welche Mahlzeiten werden angepasst, wer ist Ansprechpartner in der Küche, wie wird das Kind beim Buffet erkannt. Einen Dankesbrief nach der Fahrt – das wird erinnert.',
    color: 'rgba(45,106,79,0.08)',
    border: 'rgba(45,106,79,0.2)',
  },
  {
    szenario: '⚠️ Unterkunft unsicher',
    text: 'Wenn die Antwort vage ist – Frühstück und Snacks selbst einpacken, bei Mittagessen und Abendessen auf einfache Gerichte setzen die sicher sind: Reis, Kartoffeln, Fleisch/Fisch ohne Soße, rohes Gemüse. Das Kind weiß welche Kategorien sicher sind.',
    color: 'rgba(233,196,106,0.08)',
    border: 'rgba(233,196,106,0.3)',
  },
  {
    szenario: '❌ Unterkunft kann gar nichts anbieten',
    text: 'Eigenversorgung für alle Mahlzeiten planen. Mit der Schule besprechen ob das Kind mit in die Küche darf um selbst zuzubereiten, oder ob es bei den gemeinsamen Mahlzeiten sein eigenes Essen dabei hat. Klar kommunizieren: Das ist keine Diätvorliebe, sondern medizinisch notwendig.',
    color: 'rgba(220,53,69,0.05)',
    border: 'rgba(220,53,69,0.2)',
  },
];

export default function KlassenfahrtPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> ›{' '}
            <Link href="/wissen/schule-kita" style={{ color: 'var(--mint)' }}>Kita & Schule</Link> ›{' '}
            Klassenfahrt
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.75rem' }}>
            Klassenfahrt mit Zöliakie
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '600px', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Drei Tage in einer Jugendherberge mit einer Klasse – und niemand soll wegen
            eines Pausenbrots zum Problem werden. Mit der richtigen Vorbereitung klappt das.
          </p>
        </div>
      </section>

      {/* Einstieg */}
      <section className="section" style={{ paddingBottom: '1rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <div className="card" style={{ background: 'rgba(149,213,178,0.08)', border: '1.5px solid rgba(149,213,178,0.3)' }}>
            <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-mid)', fontStyle: 'italic' }}>
              „Die erste Klassenfahrt war für uns aufregender als für unseren Sohn selbst.
              Drei Tage außer Haus, andere Köche, unbekanntes Essen, und wir nicht dabei.
              Was uns geholfen hat: früh anfangen, direkt mit der Unterkunft sprechen –
              und das Kind selbst vorbereiten, nicht nur die Lehrer."
            </p>
          </div>
        </div>
      </section>

      {/* Sprungmarken */}
      <section style={{ background: 'var(--cream-dark)', padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.5rem' }}>
            {[
              { href: '#vorbereitung', emoji: '📋', label: 'Vorbereitung' },
              { href: '#unterkunft',   emoji: '🏠', label: 'Unterkunft' },
              { href: '#packliste',    emoji: '🎒', label: 'Packliste' },
              { href: '#lehrer',       emoji: '👩‍🏫', label: 'Lehrer-Brief' },
              { href: '#kind',         emoji: '💬', label: 'Das Kind stärken' },
              { href: '#notfall',      emoji: '🆘', label: 'Notfallplan' },
            ].map(({ href, emoji, label }) => (
              <a key={href} href={href} style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.5rem 0.75rem', background: '#fff',
                borderRadius: '8px', border: '1px solid var(--border)',
                textDecoration: 'none', fontSize: '0.82rem', color: 'var(--text-mid)', fontWeight: 500,
              }}>
                <span>{emoji}</span><span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Vorbereitung Timeline */}
      <section id="vorbereitung" className="section">
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.4rem' }}>Was wann getan werden muss</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.75rem' }}>
            Das Wichtigste bei Klassenfahrten: früh anfangen. Wer eine Woche vorher anfängt zu
            organisieren, hat zu wenig Zeit.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {vorMittage.map(s => (
              <div key={s.nr} className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, textAlign: 'center' }}>
                  <span style={{ fontWeight: 800, fontSize: '1.3rem', color: 'var(--green-mid)', lineHeight: 1, display: 'block' }}>{s.nr}</span>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-light)', display: 'block', marginTop: '0.2rem', whiteSpace: 'nowrap' }}>{s.wann}</span>
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.3rem', color: 'var(--green-deep)', fontSize: '0.95rem' }}>{s.was}</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unterkunft-Szenarien */}
      <section id="unterkunft" className="section" style={{ background: 'var(--cream-dark)', paddingTop: '2.5rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.4rem' }}>Was die Unterkunft sagt – und was dann</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem' }}>
            Die Antwort der Herberge bestimmt alles weitere. Drei mögliche Szenarien:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {herbaergeSzenarien.map(item => (
              <div key={item.szenario} style={{
                padding: '1.25rem 1.5rem', borderRadius: '12px',
                background: item.color, border: `1.5px solid ${item.border}`,
              }}>
                <h4 style={{ margin: '0 0 0.5rem', color: 'var(--green-deep)', fontSize: '0.95rem' }}>{item.szenario}</h4>
                <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.85, color: 'var(--text-mid)' }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '1.25rem', padding: '0.875rem 1.1rem',
            background: 'rgba(45,106,79,0.06)', border: '1px solid rgba(45,106,79,0.15)',
            borderRadius: '10px',
          }}>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.85 }}>
              💡 <strong>Direktes Gespräch mit der Küche:</strong> Wenn die Lehrer die Unterkunft kontaktieren,
              geht vieles verloren. Bitte darum, direkt mit dem Küchenpersonal sprechen zu dürfen –
              die wissen am besten was möglich ist und was nicht.
            </p>
          </div>
        </div>
      </section>

      {/* Packliste */}
      <section id="packliste" className="section" style={{ paddingTop: '2.5rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.4rem' }}>Was eingepackt wird – Lebensmittel-Packliste</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem' }}>
            Selbst wenn die Unterkunft verlässlich ist – ein Notfallvorrat gehört immer mit.
            Alles was haltbar ist und nicht kühlen muss.
          </p>

          <div className="grid-2">
            {packlisteLebensmittel.map(k => (
              <div key={k.kategorie} className="card">
                <h4 style={{ marginBottom: '0.75rem', color: 'var(--green-deep)', fontSize: '0.9rem' }}>{k.kategorie}</h4>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  {k.items.map(item => (
                    <li key={item} style={{ fontSize: '0.85rem', lineHeight: 1.85, color: 'var(--text-mid)' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '1.25rem', padding: '0.875rem 1.1rem',
            background: 'rgba(233,196,106,0.08)', border: '1.5px solid rgba(233,196,106,0.25)', borderRadius: '10px',
          }}>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.85 }}>
              🎒 <strong>Getrennt einpacken:</strong> Die Notfallsnacks kommen in den Schulrucksack oder
              eine kleine Tasche die das Kind immer dabei hat – nicht in den großen Koffer der beim
              Gepäck landet. Das Kind muss jederzeit selbst drankommen.
            </p>
          </div>
        </div>
      </section>

      {/* Lehrer-Brief */}
      <section id="lehrer" className="section" style={{ background: 'var(--cream-dark)', paddingTop: '2.5rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Brief / E-Mail an den begleitenden Lehrer</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
            Einfach kopieren, anpassen und als E-Mail schicken – gerne auch als ausgedrucktes
            Kärtchen das der Lehrer für die Fahrt einpacken kann.
          </p>

          <div className="card" style={{ background: 'rgba(255,255,255,0.8)', border: '1.5px solid var(--border)' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '1.25rem', marginTop: 0 }}>
              — Kopiervorlage —
            </p>
            <div style={{ fontSize: '0.9rem', lineHeight: 2, color: 'var(--text-dark)' }}>
              <p style={{ margin: '0 0 0.75rem' }}>Betreff: Klassenfahrt – Zöliakie von [Name]</p>
              <p style={{ margin: '0 0 0.75rem' }}>Liebe/r [Lehrer-Name],</p>
              <p style={{ margin: '0 0 0.75rem' }}>
                kurze Information zur Klassenfahrt: [Name] hat Zöliakie, eine Autoimmunerkrankung.
                Er/sie darf kein Gluten essen (Weizen, Dinkel, Roggen, Gerste). Schon kleinste Mengen
                können den Darm schädigen – es ist keine Vorliebe und kein Wählen.
              </p>
              <p style={{ margin: '0 0 0.5rem' }}>Was das für die Fahrt bedeutet:</p>
              <ul style={{ margin: '0 0 0.75rem', paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.4rem' }}>[Name] bringt eigene Snacks mit (kleine Tasche im Rucksack).</li>
                <li style={{ marginBottom: '0.4rem' }}>Bei unklaren Mahlzeiten: lieber eigenen Snack statt riskieren.</li>
                <li style={{ marginBottom: '0.4rem' }}>Bei Buffet: [Name] weiß welche Kategorien sicher sind (Fleisch/Fisch ohne Soße, Kartoffeln, Reis, Rohkost).</li>
                <li style={{ marginBottom: '0.4rem' }}>Bei Bauchschmerzen oder Fragen: bitte anrufen – wir sind jederzeit erreichbar.</li>
              </ul>
              <p style={{ margin: '0 0 0.75rem' }}>
                [Name] ist gut vorbereitet und weiß selbst Bescheid. Es braucht keine besondere
                Aufmerksamkeit – nur das Vertrauen, dass er/sie selbst entscheidet was er/sie isst.
              </p>
              <p style={{ margin: '0 0 0.75rem' }}>Erreichbar unter: [Handynummer]</p>
              <p style={{ margin: 0 }}>Vielen Dank und eine schöne Fahrt!<br />[Eure Namen]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Das Kind stärken */}
      <section id="kind" className="section" style={{ paddingTop: '2.5rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.4rem' }}>Das Kind auf die Fahrt vorbereiten</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem' }}>
            Nicht nur Lehrer und Unterkunft vorbereiten – das Kind selbst muss wissen
            was es tut wenn ihr nicht dabei seid.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {[
              {
                titel: 'Klare Kategorien einüben',
                text: 'Was ist sicher? Fleisch und Fisch ohne Soße, Kartoffeln, Reis, rohes Gemüse, Obst – das sind die Basiskategorien die fast überall sicher sind. Kein Kind muss Zutaten lesen können, aber es sollte wissen: „Wenn ich mir nicht sicher bin, esse ich meinen eigenen Snack."',
              },
              {
                titel: 'Den Satz üben',
                text: '„Ich darf das nicht essen, ich hab Zöliakie – ich hab meinen eigenen Snack dabei." Dieser eine Satz reicht für 90% aller Situationen. Kein langes Erklären nötig.',
              },
              {
                titel: 'Kein Stress aufbauen',
                text: 'Kinder merken wenn Eltern Angst haben. Das überträgt sich. Sachlich besprechen, Notfallplan erklären, und dann vertrauen – das Kind ist besser vorbereitet als man denkt.',
              },
              {
                titel: 'Rollenspiel machen',
                text: 'Abends kurz durchspielen: „Was machst du wenn alle Käsespätzle essen und du nicht weißt ob sie GF sind?" – „Ich esse meine Reiswaffeln und frage danach die Lehrerin." Das sitzt dann.',
              },
            ].map(item => (
              <div key={item.titel} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0, fontSize: '1.25rem', marginTop: '0.1rem' }}>💬</span>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem', color: 'var(--green-deep)', fontSize: '0.95rem' }}>{item.titel}</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notfallplan */}
      <section id="notfall" className="section" style={{ background: 'rgba(220,53,69,0.03)', paddingTop: '2.5rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.4rem' }}>Wenn doch etwas passiert</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem' }}>
            Auch bei guter Vorbereitung kann es passieren: eine Soße enthält Mehl, jemand gibt
            dem Kind aus Versehen etwas falsches. Was dann?
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {[
              {
                icon: '🤢',
                titel: 'Symptome beobachten',
                text: 'Bei Zöliakie kommen Symptome (Bauchschmerzen, Müdigkeit, Übelkeit) oft mit Verzögerung – manchmal erst Stunden später. Wenn das Kind Bauchschmerzen meldet: ruhig bleiben, Eltern informieren, Kind ausruhen lassen.',
              },
              {
                icon: '📞',
                titel: 'Eltern anrufen',
                text: 'Bei unsicherem Essen oder Symptomen bitte direkt anrufen. Keine Scheu davor – wir sind lieber einmal unnötig erreichbar als nicht erreichbar wenn es nötig ist.',
              },
              {
                icon: '🏥',
                titel: 'Ein einmaliger Glutenkontakt ist kein medizinischer Notfall',
                text: 'Das ist wichtig zu wissen: Zöliakie ist keine Anaphylaxie. Ein Kontakt mit Gluten ist unangenehm und schadet langfristig der Darmschleimhaut – aber es ist kein sofortiger Notfall der einen Arzt erfordert. Symptome behandeln, Kind beruhigen, Eltern informieren.',
              },
            ].map(item => (
              <div key={item.titel} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem', color: 'var(--green-deep)', fontSize: '0.95rem' }}>{item.titel}</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Notfallkarte zum Ausdrucken */}
          <div style={{
            marginTop: '1.5rem', padding: '1.25rem 1.5rem',
            background: 'var(--green-deep)', borderRadius: '12px', border: '2px solid var(--golden)',
          }}>
            <h4 style={{ color: 'var(--golden)', margin: '0 0 0.75rem', fontSize: '0.95rem' }}>
              🪪 Notfallkarte fürs Kind (ausdrucken & laminieren)
            </h4>
            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '8px', padding: '1rem', fontSize: '0.85rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.9)' }}>
              <strong style={{ color: 'var(--golden)' }}>Ich habe Zöliakie.</strong><br />
              Ich darf kein Gluten essen (kein Weizen, Roggen, Gerste, Dinkel).<br />
              Auch keine Spuren. Auch nicht ein bisschen.<br />
              <br />
              <strong style={{ color: 'var(--golden)' }}>Meine Eltern:</strong> [Vorname Mutter/Vater]: [Telefonnummer]<br />
              <br />
              Wenn ich Bauchschmerzen habe: bitte meine Eltern anrufen.
            </div>
            <p style={{ margin: '0.75rem 0 0', fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)' }}>
              Text kopieren, Namen einsetzen, auf Kärtchengröße drucken, laminieren.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section" style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/wissen/schule-kita" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
              ← Kita & Schule: Übersicht
            </Link>
            <Link href="/wissen/schule-kita/pausenbrot-snacks" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
              Pausenbrot & Snacks →
            </Link>
            <Link href="/wissen/reisen" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
              Reisen mit Zöliakie →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
