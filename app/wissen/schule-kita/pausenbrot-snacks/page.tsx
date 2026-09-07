import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glutenfreies Pausenbrot & Snacks für Schule und Kita | Waschtls Schmankerl',
  description:
    'Was kommt ins glutenfreie Pausenbrot? Konkrete Ideen für Schule und Kita – was hält, was schmeckt, was das Kind auch wirklich isst. Aus dem Alltag einer Zöliakie-Familie.',
};

const brotIdeen = [
  {
    icon: '🧀',
    titel: 'Käse & Aufschnitt',
    text: 'Der Klassiker. GF-Toastbrot oder GF-Brötchen mit Scheibenkäse, Gouda, Salami oder Putenbrust. Schnell, sicher, wird fast immer gegessen. Schär Toast oder Meisterbäckers Classic halten die Form auch nach 3 Stunden noch gut.',
    tags: ['schnell', 'herzhaft'],
  },
  {
    icon: '🥑',
    titel: 'Avocado oder Frischkäse',
    text: 'Frischkäse (natur oder kräuter) auf GF-Brot ist ein guter Wechsel zu Aufschnitt. Avocado in Scheiben oder als grobe Paste funktioniert wenn man sie erst kurz vor der Schule schmiert. Zitronensaft drauf verhindert Braunwerden.',
    tags: ['vegetarisch', 'sättigend'],
  },
  {
    icon: '🥜',
    titel: 'Erdnussbutter oder Mandelmus',
    text: 'Viele Kinder lieben das. Auf GF-Toast mit Bananenscheiben oder einfach pur. Manche Schulen haben Nuss-Verbote – vorher fragen. Mandelmus ist eine gute Alternative für nussarme Klassen.',
    tags: ['süß', 'schnell', 'energiereich'],
  },
  {
    icon: '🍯',
    titel: 'Honig oder Marmelade',
    text: 'Einfach und bewährt. Homemade Marmelade läuft nicht wenn man erst eine dünne Schicht Butter oder Frischkäse drunterschmiert. Für unterwegs: kleine Marmeladengläschen aus dem Frühstücksbuffet (hygienisch, genau die richtige Menge).',
    tags: ['süß', 'vegan möglich'],
  },
  {
    icon: '🥚',
    titel: 'Hartgekochtes Ei',
    text: 'Als Beilage statt Aufschnitt – sättigend, proteinreich, von Natur aus glutenfrei. Vorher schälen oder ungeschält mitgeben und das Kind schält selbst. Hält 3–4 Stunden problemlos.',
    tags: ['herzhaft', 'proteinreich'],
  },
  {
    icon: '🫓',
    titel: 'Reiswaffel-Varianten',
    text: 'Reiswaffeln als Brot-Ersatz – funktioniert gut für Kinder die normales GF-Brot nicht mögen. Mit Frischkäse, Nutella oder Hummus belegen, in Folie einwickeln. Kein Matschrisiko.',
    tags: ['praktisch', 'flexibel'],
  },
];

const snackIdeen = [
  { emoji: '🍎', name: 'Obst (in Stücken)', note: 'Äpfel, Mandarinen, Trauben, Erdbeeren – von Natur aus GF, keine Prüfung nötig. Obst in Stücken essen Kinder lieber als ganze Früchte.' },
  { emoji: '🥕', name: 'Gemüsesticks', note: 'Karotten, Gurke, Paprika – mit einem kleinen Hummus-Tiegel als Dip. Hält sich gut, kein Matsch.' },
  { emoji: '🍫', name: 'Zartbitterschokolade', note: 'Lindt 70% oder Ritter Sport Zartbitter – 2–3 Stücke als Süßigkeit. Immer Label prüfen.' },
  { emoji: '🥨', name: 'Brezeln (GF)', note: 'Schär hat GF-Brezeln. Kleine Tüte macht als Knabberei-Ersatz für normale Brezeln auf dem Pausenhof.' },
  { emoji: '🍿', name: 'Popcorn (naturell)', note: 'Von Natur aus glutenfrei. Nur naturell ohne Zusätze kaufen. In einem kleinen Becher portioniert.' },
  { emoji: '🧇', name: 'Selbstgebackene Muffins', note: 'Unsere Bananenmuffins halten 2 Tage gut – Sonntag backen, Montag und Dienstag dabei. Einfrieren und über Nacht antauen geht auch.' },
  { emoji: '🥜', name: 'Nüsse & Trockenfrüchte', note: 'Mandeln, Cashews, Rosinen – energy-dicht und praktisch. Achtung: Nuss-Verbote in manchen Schulen.' },
  { emoji: '🫐', name: 'Joghurt (im Becher)', note: 'Naturjoghurt oder Fruchtjoghurt – mit kleinem Löffel. Manche Kitas haben Kühlmöglichkeit, sonst Kühlelement in die Brotdose.' },
];

const fallen = [
  {
    titel: 'Brot nicht von zuhause vorschneiden',
    text: 'Wer GF-Brot aus dem Kühlschrank nimmt und beim Schneiden das gleiche Brettchen und Messer benutzt wie für normales Brot – kontaminiert. Eigenes Brett und Messer für GF-Brot markieren.',
  },
  {
    titel: 'Brote nicht neu in den gleichen Behälter',
    text: 'Ein Behälter der vorher normale Brotkrümel hatte reicht. GF-Brotdose klar markieren, am besten in einer eigenen Farbe.',
  },
  {
    titel: 'Aufschnitt nicht vom gemeinsamen Anschneidebrett',
    text: 'Wenn morgens der Wurst-Aufschnitt auf dem normalen Schneidebrett war und danach das GF-Brot draufgelegt wird – passiert. Erst GF-Brot belegen, dann wegräumen.',
  },
  {
    titel: 'Tausch mit anderen Kindern',
    text: 'Kinder tauschen Pausenbrote. Muss klar kommuniziert sein: darf euer Kind nicht. Nicht als Regel von oben – als Erklärung: „Mein Bauch verträgt das andere Brot nicht." Das verstehen Kinder.',
  },
  {
    titel: 'Fertige Brotaufstriche ohne Prüfung',
    text: 'Viele Frischkäse, Aufstriche und Hummus aus dem Kühlregal sind glutenfrei – aber nicht alle. Würz-Hummus und Kräuteraufstriche mit Zusätzen kurz prüfen.',
  },
];

const wochenplan = [
  { tag: 'Montag',     brot: 'GF-Toast mit Gouda + Gurken-Sticks', snack: 'Apfelscheiben' },
  { tag: 'Dienstag',   brot: 'GF-Brötchen mit Putenbrust + Tomate', snack: 'Bananenmuffin (vom Sonntag)' },
  { tag: 'Mittwoch',   brot: 'GF-Toast mit Erdnussbutter + Bananenscheiben', snack: 'Trauben + 2 Schokoladen-Stücke' },
  { tag: 'Donnerstag', brot: 'Reiswaffel mit Frischkäse & Paprikasticks', snack: 'GF-Brezeln' },
  { tag: 'Freitag',    brot: 'GF-Toast mit Salami + Gurke', snack: 'Obstsalat aus dem Becher' },
];

export default function PausenbrotSnacksPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/wissen" style={{ color: 'var(--mint)' }}>Wissen</Link> ›{' '}
            <Link href="/wissen/schule-kita" style={{ color: 'var(--mint)' }}>Kita & Schule</Link> ›{' '}
            Pausenbrot & Snacks
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.75rem' }}>
            Glutenfreies Pausenbrot & Snacks
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '600px', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Was kommt morgens in die Brotdose, wenn alle anderen Weißbrot mit Nutella dabei haben?
            Konkrete Ideen die das Kind auch wirklich isst – und die den Schulvormittag überstehen.
          </p>
        </div>
      </section>

      {/* Einstieg */}
      <section className="section" style={{ paddingBottom: '1rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <div className="card" style={{ background: 'rgba(149,213,178,0.08)', border: '1.5px solid rgba(149,213,178,0.3)' }}>
            <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-mid)', fontStyle: 'italic' }}>
              „Das Pausenbrot ist für uns das größte tägliche Thema. Nicht das Mittagessen,
              nicht der Kindergeburtstag – das verdammte Pausenbrot. Es muss schnell gehen,
              darf nicht matschig werden, muss sicher sein, und das Kind muss es auch essen wollen.
              Hier ist was bei uns funktioniert."
            </p>
          </div>
        </div>
      </section>

      {/* Sprungmarken */}
      <section style={{ background: 'var(--cream-dark)', padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.5rem' }}>
            {[
              { href: '#brotideen',   emoji: '🥪', label: 'Brot-Ideen' },
              { href: '#snacks',      emoji: '🍎', label: 'Snacks' },
              { href: '#fallen',      emoji: '⚠️', label: 'Häufige Fallen' },
              { href: '#wochenplan',  emoji: '📅', label: 'Wochenplan' },
              { href: '#tipps',       emoji: '💡', label: 'Alltags-Tipps' },
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

      {/* Brotideen */}
      <section id="brotideen" className="section">
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.4rem' }}>Was aufs glutenfreie Pausenbrot kann</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem' }}>
            Basis ist immer glutenfreies Brot oder eine Alternative. Die Beläge sind dasselbe wie
            bei allen anderen Kindern – nur die Basis ist anders.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {brotIdeen.map(item => (
              <div key={item.titel} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>{item.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.35rem' }}>
                    <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--green-deep)' }}>{item.titel}</h4>
                    {item.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: '0.65rem', padding: '0.1rem 0.45rem',
                        background: 'rgba(149,213,178,0.15)',
                        color: 'var(--green-mid)', borderRadius: '999px',
                        border: '1px solid rgba(149,213,178,0.3)', fontWeight: 600,
                      }}>{tag}</span>
                    ))}
                  </div>
                  <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '1.5rem', padding: '0.875rem 1.1rem',
            background: 'rgba(233,196,106,0.08)', border: '1.5px solid rgba(233,196,106,0.25)', borderRadius: '10px',
          }}>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.85 }}>
              💡 <strong>Tipp für Brötchen:</strong> Schär-Brötchen aus der Tiefkühlung abends antauen,
              morgens 5 Minuten bei 180 °C aufbacken – schmecken fast frisch gebacken.
              Hält sich in der Brotdose bis zur Pause ohne aufzuweichen.
            </p>
          </div>
        </div>
      </section>

      {/* Snacks */}
      <section id="snacks" className="section" style={{ background: 'var(--cream-dark)', paddingTop: '2.5rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.4rem' }}>Snacks für die Pause</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem' }}>
            Neben dem Pausenbrot – für die kleine Pause oder als Ergänzung. Alles was hier steht
            ist von Natur aus glutenfrei oder leicht als glutenfrei zu bekommen.
          </p>

          <div className="grid-2">
            {snackIdeen.map(item => (
              <div key={item.name} className="card">
                <div style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>{item.emoji}</div>
                <h4 style={{ margin: '0 0 0.3rem', fontSize: '0.9rem', color: 'var(--green-deep)' }}>{item.name}</h4>
                <p style={{ margin: 0, fontSize: '0.8rem', lineHeight: 1.75, color: 'var(--text-mid)' }}>{item.note}</p>
              </div>
            ))}
          </div>

          {/* Verweis auf Rezepte */}
          <div style={{
            marginTop: '1.5rem', padding: '1rem 1.25rem',
            background: 'var(--green-deep)', borderRadius: '12px',
          }}>
            <p style={{ margin: '0 0 0.75rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
              🧁 <strong style={{ color: 'var(--golden)' }}>Selbst gebackene Pausensnacks:</strong>{' '}
              Diese Rezepte von uns sind perfekt zum Vorbacken und Einfrieren:
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {[
                { label: 'Bananenmuffins', href: '/rezepte/bananenmuffins' },
                { label: 'Energiebällchen', href: '/rezepte/energiebaellchen' },
                { label: 'Granola', href: '/rezepte/granola' },
                { label: 'Frozen Banana Bites', href: '/rezepte/frozen-banana-bites' },
              ].map(r => (
                <Link key={r.href} href={r.href} style={{
                  padding: '0.35rem 0.8rem',
                  background: 'rgba(233,196,106,0.15)',
                  border: '1px solid rgba(233,196,106,0.35)',
                  borderRadius: '999px',
                  fontSize: '0.78rem', color: 'var(--golden)',
                  fontWeight: 600, textDecoration: 'none',
                }}>
                  {r.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fallen */}
      <section id="fallen" className="section" style={{ paddingTop: '2.5rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.4rem' }}>Die häufigsten Fehler beim Pausenbrot machen</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.25rem' }}>
            Fast alle passieren in der Küche – nicht in der Schule.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {fallen.map(item => (
              <div key={item.titel} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0, fontWeight: 800, color: 'rgba(220,53,69,0.7)', fontSize: '1rem', marginTop: '0.15rem' }}>✕</span>
                <div>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--green-deep)' }}>{item.titel}</strong>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '1.25rem', padding: '0.875rem 1.1rem',
            background: 'rgba(149,213,178,0.08)', border: '1.5px solid rgba(149,213,178,0.25)', borderRadius: '10px',
          }}>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.85 }}>
              <strong>Unser System:</strong> Alles was GF ist kommt in grüne Behälter oder hat einen grünen Aufkleber.
              GF-Messer, GF-Brett, GF-Brotdose – alles grün. Das Kind weiß das, wir wissen das, es gibt keine Verwechslung.
              Klingt nach Aufwand, ist nach einer Woche Routine.
            </p>
          </div>
        </div>
      </section>

      {/* Wochenplan */}
      <section id="wochenplan" className="section" style={{ background: 'rgba(149,213,178,0.05)', paddingTop: '2.5rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '0.4rem' }}>Wochenplan Pausenbrot</h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem' }}>
            Ein Beispiel wie eine Woche bei uns aussieht – für alle die nicht jeden Morgen neu
            nachdenken wollen.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {wochenplan.map(item => (
              <div key={item.tag} style={{
                display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap',
                padding: '0.875rem 1.1rem',
                background: '#fff', borderRadius: '10px', border: '1px solid var(--border)',
              }}>
                <span style={{
                  flexShrink: 0, minWidth: '90px',
                  fontSize: '0.75rem', fontWeight: 700,
                  color: 'var(--green-deep)', letterSpacing: '0.03em',
                }}>{item.tag}</span>
                <div style={{ flex: 1, minWidth: '160px' }}>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-dark)', lineHeight: 1.5 }}>
                    🥪 {item.brot}
                  </p>
                </div>
                <div style={{ flexShrink: 0 }}>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-light)', lineHeight: 1.5 }}>
                    + {item.snack}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-light)', lineHeight: 1.7 }}>
            Einfach den Plan abfotografieren oder kopieren und anpassen. Was bei euch nicht funktioniert,
            streichen – was das Kind nicht mag, weglassen. Der Plan ist ein Anfang, kein Rezept.
          </p>
        </div>
      </section>

      {/* Alltags-Tipps */}
      <section id="tipps" className="section" style={{ paddingTop: '2.5rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '740px' }}>
          <h2 style={{ marginBottom: '1.25rem' }}>Alltags-Tipps die uns viel Zeit sparen</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {[
              {
                icon: '🧊',
                titel: 'Backen auf Vorrat, einfrieren',
                text: 'Muffins, Energiebällchen, Pfannkuchen – sonntags eine größere Menge backen und einfrieren. Über Nacht antauen. Montag früh kein Stress.',
              },
              {
                icon: '📦',
                titel: 'Vorratsdose beim Lehrer hinterlegen',
                text: 'Eine Box mit sicheren Snacks (Gummibärchen, Reiswaffeln, GF-Kekse) beim Erzieher oder Lehrer deponieren. Für Geburtstage anderer Kinder, spontane Naschereien, Ausflüge. Alle 4–6 Wochen auffüllen.',
              },
              {
                icon: '🎒',
                titel: 'Notfallsnack immer im Rucksack',
                text: 'Ein Päckchen GF-Kekse oder Reiswaffeln als festes Fach im Schulrucksack. Nicht zum täglichen Essen – für den Fall dass das Pausenbrot vergessen wird oder etwas passiert.',
              },
              {
                icon: '🗓',
                titel: 'Ausflüge und besondere Tage früh erfragen',
                text: 'Zu Beginn jedes Monats beim Lehrer nachfragen: Gibt es Ausflüge, Backtage, Feste? Dann rechtzeitig vorbereiten statt am Vortag improvisieren.',
              },
              {
                icon: '🛒',
                titel: 'Grundvorrat immer auffüllen',
                text: 'GF-Toast, GF-Brötchen (TK), Reiswaffeln, Frischkäse, Gouda, Salami – wenn das immer zu Hause ist, gibt es kein Morgen mehr wo die Brotdose leer bleibt.',
              },
            ].map(item => (
              <div key={item.titel} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem', fontSize: '0.95rem', color: 'var(--green-deep)' }}>{item.titel}</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-mid)' }}>{item.text}</p>
                </div>
              </div>
            ))}
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
            <Link href="/wissen/kreuzkontamination" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
              Kreuzverunreinigung verstehen →
            </Link>
            <Link href="/vorratskiste" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
              Vorratskiste: Was immer zu Hause sein sollte →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
