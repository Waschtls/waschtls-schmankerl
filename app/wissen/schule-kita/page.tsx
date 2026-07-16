import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zöliakie in Kita & Schule – Musterbrief & Checklisten | Waschtls Schmankerl',
  description:
    'Wie informierst du Erzieher und Lehrer über Zöliakie? Mit Musterbrief, Checkliste für den ersten Tag und Tipps für Geburtstage – praktisch und kopierbereit.',
};

export default function SchuleKitaPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> › Kita & Schule
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.75rem' }}>
            Zöliakie in Kita & Schule
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '600px', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Das Gespräch mit Erziehern, Lehrern und anderen Eltern muss kein Drama sein.
            Hier bekommst du konkrete Texte und Checklisten die du direkt verwenden kannst.
          </p>
        </div>
      </section>

      {/* Warum das so wichtig ist */}
      <section className="section" style={{ paddingBottom: '1rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.75rem' }}>Warum gute Kommunikation alles ist</h2>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.9 }}>
            Zöliakie ist keine Allergie die man vielleicht mal tolerieren kann –
            schon kleinste Mengen Gluten können den Darm dauerhaft schädigen, oft ohne sofortige Symptome.
            Erzieherinnen und Lehrer müssen das verstehen, aber sie brauchen keine medizinische
            Fortbildung. Sie brauchen klare, einfache Regeln. Die kannst du ihnen geben.
          </p>
        </div>
      </section>

      {/* Musterbrief */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Musterbrief für Erzieher & Lehrer</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
            Den Text einfach kopieren, Namen und Details anpassen und ausdrucken oder per E-Mail schicken.
          </p>

          <div className="card" style={{ background: 'var(--cream-dark)', border: '1.5px solid var(--border)' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '1.25rem', marginTop: 0 }}>
              — Kopiervorlage: Text markieren → kopieren → anpassen —
            </p>
            <div style={{ fontSize: '0.9rem', lineHeight: 2, color: 'var(--text-dark)' }}>
              <p style={{ margin: '0 0 0.75rem' }}>Betreff: Zöliakie-Erkrankung von [Name des Kindes]</p>
              <p style={{ margin: '0 0 0.75rem' }}>Sehr geehrte [Frau / Herr …],</p>
              <p style={{ margin: '0 0 0.75rem' }}>
                unser Kind [Name] leidet an Zöliakie – einer Autoimmunerkrankung bei der der Körper
                auf Gluten reagiert. Gluten steckt in Weizen, Roggen, Gerste und Dinkel. Schon kleinste
                Mengen – auch unsichtbare Spuren – können den Darm dauerhaft schädigen.
                Es ist keine vorübergehende Unverträglichkeit.
              </p>
              <p style={{ margin: '0 0 0.5rem' }}>Für den Alltag bei Ihnen bedeutet das bitte Folgendes zu beachten:</p>
              <ul style={{ margin: '0 0 0.75rem', paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.4rem' }}>[Name] bringt sein/ihr eigenes Essen mit und darf nichts von anderen Kindern essen.</li>
                <li style={{ marginBottom: '0.4rem' }}>Bitte darauf achten, dass Besteck, Hände und Tische sauber sind, bevor [Name] isst.</li>
                <li style={{ marginBottom: '0.4rem' }}>Bei Backen oder Basteln mit Mehl/Teig bitte glutenfreies Material für [Name] bereitstellen oder uns vorher Bescheid geben.</li>
                <li style={{ marginBottom: '0.4rem' }}>Wir hinterlegen eine kleine Box mit sicheren glutenfreien Snacks für Situationen wie Geburtstage oder spontane Naschereien.</li>
              </ul>
              <p style={{ margin: '0 0 0.75rem' }}>
                Zöliakie ist medizinisch diagnostiziert. Wir stehen jederzeit für Rückfragen zur Verfügung –
                am liebsten per E-Mail an [eure E-Mail-Adresse].
              </p>
              <p style={{ margin: '0 0 0.75rem' }}>
                Herzlichen Dank für Ihr Verständnis und Ihre Unterstützung.
              </p>
              <p style={{ margin: 0 }}>
                Mit freundlichen Grüßen,<br />
                [Eure Namen], Eltern von [Name des Kindes]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Checkliste erster Tag */}
      <section className="section" style={{ background: 'var(--cream-dark)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Checkliste: Was vor dem ersten Tag geregelt sein sollte</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.75rem' }}>
            Was sollte geregelt sein bevor euer Kind wieder in die Einrichtung geht?
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              { prio: true,  text: 'Brief / E-Mail an Gruppenerzieher oder Klassenlehrer schicken' },
              { prio: true,  text: 'Kurzes persönliches Gespräch vereinbaren – Vertrauen aufbauen ist wichtiger als jeder Brief' },
              { prio: true,  text: 'Notfall-Snackbox abgeben (beschriftet, Ablaufdaten gecheckt)' },
              { prio: true,  text: 'Mittagessen-Situation klären: Kind bringt eigenes mit, oder gibt es eine glutenfreie Option?' },
              { prio: true,  text: 'Backen und Basteln mit Mehl ansprechen: Wann kommt das vor? Alternative für euer Kind besprechen.' },
              { prio: true,  text: 'Kontaktmöglichkeit hinterlassen für kurzfristige Fragen' },
              { prio: false, text: 'Bei Kitaküche oder Schulkantine: Anfrage stellen ob glutenfreies Essen möglich ist – manchmal geht das schon, fragen lohnt sich' },
              { prio: false, text: 'Andere Eltern: Nicht sofort nötig, aber beim nächsten Geburtstag proaktiv ansprechen' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                padding: '0.75rem 1rem',
                background: item.prio ? 'rgba(45,106,79,0.06)' : 'rgba(255,255,255,0.5)',
                borderRadius: '8px',
                border: `1px solid ${item.prio ? 'rgba(45,106,79,0.15)' : 'var(--border)'}`,
              }}>
                <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: '0.05rem' }}>
                  {item.prio ? '✅' : '📋'}
                </span>
                <span style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--text-mid)' }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notfallbox */}
      <section className="section">
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Die Notfall-Snackbox</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem' }}>
            Eine kleine Box die beim Erzieher oder Lehrer bleibt – für alle Situationen in denen
            andere Kinder spontan etwas bekommen und euer Kind nicht leer ausgehen soll.
          </p>
          <div className="grid-2">
            {[
              { icon: '🍫', titel: 'Schokolade', text: 'Zartbitter ohne Zusätze (Lindt 70%, Ritter Sport Herz – aber immer Label prüfen), oder kleine Tafeln die explizit GF ausgewiesen sind' },
              { icon: '🥨', titel: 'Knabbereien', text: 'Glutenfreie Reiswaffeln, Popcorn naturell, Erdnussflips (Label prüfen), Maischips ohne Gewürzmix' },
              { icon: '🍬', titel: 'Gummibärchen', text: 'Haribo Gold-Bären sind glutenfrei, viele Lutscher auch. Haribo hat eine gute Allergenübersicht auf der Website.' },
              { icon: '🍪', titel: 'Mini-Kekse', text: 'Schär Petit, glutenfreie Butterkekse – oder selbst gebackene in kleinen Tütchen. Hält sich 2–3 Wochen.' },
            ].map(item => (
              <div key={item.titel} className="card">
                <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{item.icon}</div>
                <h4 style={{ marginBottom: '0.3rem', fontSize: '0.9rem', color: 'var(--green-deep)' }}>{item.titel}</h4>
                <p style={{ margin: 0, fontSize: '0.8rem', lineHeight: 1.75, color: 'var(--text-mid)' }}>{item.text}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-light)' }}>
            Box gut beschriften mit Namen und „nur für [Name] – glutenfrei". Regelmäßig Ablaufdaten prüfen.
          </p>
        </div>
      </section>

      {/* Kindergeburtstag */}
      <section className="section" style={{ background: 'var(--cream-dark)', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>🎂 Kindergeburtstag – wenn alle Kuchen essen außer meinem Kind</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem' }}>
            Einer der emotionalsten Momente. Kein Kind soll als Außenseiter dasitzen.
            Mit etwas Vorbereitung klappt das gut.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                szenario: 'Geburtstag in der Kita oder Schule',
                text: 'Die Eltern des Geburtstagskindes vorher ansprechen – die meisten freuen sich wenn ihr sagt: „Wir bringen unseren eigenen kleinen Kuchen mit, damit unser Kind auch feiern kann." Oder ihr fragt ob sie einen glutenfreien Anteil backen können – oft klappt das.',
              },
              {
                szenario: 'Euer Kind feiert Geburtstag',
                text: 'Einfach alles glutenfrei backen. Niemand schmeckt den Unterschied bei einem guten Schokoladenkuchen. Unsere glutenfreien Kuchen waren auf keiner Party je ein Thema.',
              },
              {
                szenario: 'Geburtstag beim Freund oder der Freundin',
                text: 'Eltern kurz vorher informieren – eine WhatsApp reicht. Die meisten sind dankbar wenn sie wissen was sie beachten müssen. Ein Stück eigenen Kuchen mitgeben ist als Backup immer eine gute Idee.',
              },
              {
                szenario: 'Spontane Nascherei in der Gruppe',
                text: 'Genau dafür ist die Notfallbox. Das Kind greift in die eigene Box statt zuzuschauen. Das funktioniert – wenn die Box wirklich leckere Sachen enthält.',
              },
            ].map(s => (
              <div key={s.szenario} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span className="tag" style={{ flexShrink: 0, fontSize: '0.7rem', marginTop: '0.1rem' }}>{s.szenario}</span>
                <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.8 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Das Kind stärken */}
      <section className="section">
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.75rem' }}>Das Kind stärken</h2>
          <p style={{ color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
            Je selbstbewusster das Kind mit seiner Zöliakie umgeht, desto leichter wird der Alltag.
            Übt zuhause kurze Sätze: <em>„Ich darf das nicht essen, ich hab Zöliakie"</em> – einfach,
            klar, ohne Entschuldigung. Kinder die das selbst erklären können, kommen viel besser durch den Tag.
          </p>
          <div className="card" style={{ background: 'rgba(149,213,178,0.08)', border: '1.5px solid rgba(149,213,178,0.3)' }}>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--green-deep)' }}>
              💬 Sätze die Kinder lernen können
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                'Ich darf das nicht essen, ich hab Zöliakie.',
                'Ich hab eine besondere Krankheit – von Weizen wird mir krank.',
                'Ich hab meinen eigenen Snack dabei, danke!',
                'Nein danke, ich darf das nicht – aber das ist ok.',
              ].map((satz, i) => (
                <div key={i} style={{
                  padding: '0.6rem 0.875rem',
                  background: 'rgba(255,255,255,0.5)',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  color: 'var(--text-mid)',
                  fontStyle: 'italic',
                }}>
                  „{satz}"
                </div>
              ))}
            </div>
          </div>

          {/* Wenn die Einrichtung nicht mitspielt */}
          <div className="card" style={{ marginTop: '1.5rem', background: 'rgba(231,111,81,0.06)', border: '1.5px solid rgba(231,111,81,0.2)' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--terracotta)' }}>
              ⚠️ Wenn die Einrichtung nicht mitspielt
            </h3>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.85, color: 'var(--text-mid)' }}>
              In dem Fall: ein ärztliches Attest mitbringen das die Diagnose bestätigt –
              das verändert die Gesprächslage meistens sofort. Zöliakie ist eine medizinisch
              diagnostizierte Erkrankung und Einrichtungen sind verpflichtet die Sicherheit
              des Kindes zu gewährleisten. Die DZG bietet telefonische Beratung an wenn ihr
              nicht weiterkommt:{' '}
              <a href="https://www.dzg-online.de" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--green-mid)' }}>dzg-online.de</a>.
            </p>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/wissen/erstdiagnose" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
              ← Erstdiagnose
            </Link>
            <Link href="/wissen/kreuzkontamination" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
              Kreuzverunreinigung erklären →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
