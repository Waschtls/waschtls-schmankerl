import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wenns mal schnell gehen muss – Glutenfreie Convenience-Produkte',
  description: 'Glutenfreie Fertigprodukte die wirklich funktionieren: Falafel, Gnocchi, Schlemmerfilet, TK-Pizza und mehr. Ehrliche Einschätzungen aus unserem Alltag mit Zöliakie.',
  alternates: { canonical: 'https://www.waschtls-schmankerl.de/schnellkueche' },
  openGraph: {
    title: 'Wenns mal schnell gehen muss – Glutenfreie Convenience',
    description: 'Was wirklich funktioniert wenn keine Zeit zum Kochen ist – getestet in unserer Zöliakie-Familie.',
    url: 'https://www.waschtls-schmankerl.de/schnellkueche',
  },
};

// ── Typen ─────────────────────────────────────────────────────────────────────

type GfStatus = 'ja' | 'pruefen' | 'nein';

type Produkt = {
  name: string;
  marke: string;
  emoji: string;
  gf: GfStatus;
  gfHinweis?: string;
  wo: string[];               // wo kaufen
  beschreibung: string;
  tipp: string;
  sterne: 1 | 2 | 3 | 4 | 5;
  amazon?: string;            // Affiliate-Link (waschtl-21)
  highlight?: boolean;        // Fixstarter bei uns
};

type Kategorie = {
  id: string;
  label: string;
  emoji: string;
  produkte: Produkt[];
};

// ── Produktdaten ──────────────────────────────────────────────────────────────

const KATEGORIEN: Kategorie[] = [
  {
    id: 'klassiker',
    label: 'Unsere Fixstarter',
    emoji: '⭐',
    produkte: [
      {
        name: 'Bio-Falafel',
        marke: 'dm dmBio',
        emoji: '🧆',
        gf: 'pruefen',
        gfHinweis: 'Kichererbsenbasiert – meist GF, Charge prüfen (Glutenspuren möglich). Wir haben bisher keine Reaktion.',
        wo: ['dm'],
        beschreibung: 'Knusprige Falafel aus der Tiefkühltruhe – funktioniert hervorragend in der Pfanne oder im Backofen. Schnell, sättigend, die Kinder lieben sie.',
        tipp: 'Im Ofen bei 200 °C ca. 15 Min goldbraun – dazu Tzatziki aus GF-Jogurt und fertig. Auch kalt als Snack top.',
        sterne: 5,
        highlight: true,
      },
      {
        name: 'Gnocchi (getrocknet)',
        marke: 'Schär',
        emoji: '🥔',
        gf: 'ja',
        gfHinweis: 'Offiziell glutenfrei zertifiziert.',
        wo: ['Rewe', 'Edeka', 'Online', 'dm'],
        beschreibung: 'Trockene Gnocchi von Schär – in 10 Minuten fertig, flauschig-weich, kein Geschmacksunterschied zum Original. Einer unserer Dauerbrenner.',
        tipp: 'In Butter mit Salbei anbraten bis sie leicht knusprig sind – das ist schneller als jede Pasta und macht mehr Eindruck. Oder einfach mit pürierter Tomatensauce.',
        sterne: 5,
        amazon: 'https://www.amazon.de/s?k=sch%C3%A4r+gnocchi+glutenfrei&tag=waschtl-21',
        highlight: true,
      },
      {
        name: 'Schlemmerfilet Belegtes Landbrot (Spinat-Käse)',
        marke: 'iglo',
        emoji: '🐟',
        gf: 'pruefen',
        gfHinweis: 'Etikett der jeweiligen Variante prüfen – nicht alle Schlemmerfilets sind GF. Die Spinat-Käse-Variante enthält laut aktuellem Etikett kein Gluten, kann aber Spuren enthalten.',
        wo: ['Rewe', 'Edeka', 'Kaufland', 'Aldi'],
        beschreibung: 'Das Schlemmerfilet mit Spinat-Käse-Haube ist bei uns ein Notfall-Abendessen erster Klasse – 20 Minuten Ofen, dazu Reis oder Kartoffeln. Kinder essen Fisch anstandslos wenn er so aussieht.',
        tipp: 'Immer das Etikett der aktuellen Charge kontrollieren – iglo ändert Rezepturen gelegentlich. Wir kaufen nur die Spinat-Variante, nicht Béchamel.',
        sterne: 4,
        highlight: true,
      },
      {
        name: 'TK-Blätterteig (glutenfrei)',
        marke: 'Schär',
        emoji: '🥐',
        gf: 'ja',
        gfHinweis: 'Glutenfrei zertifiziert.',
        wo: ['Online', 'Ausgewählte Rewe/Edeka', 'Reformhaus'],
        beschreibung: 'Aus dem Tiefkühler – funktioniert fast genauso wie normaler Blätterteig. Ideal für schnelle Tarts, Mini-Pizzas, Käsestangen oder als Hülle für alles mögliche.',
        tipp: 'Mit Schinken und Käse zu kleinen Röllchen formen, einfrieren und bei Bedarf direkt in den Ofen. Perfekt für Kindergeburtstage.',
        sterne: 4,
        amazon: 'https://www.amazon.de/s?k=glutenfreier+bl%C3%A4tterteig&tag=waschtl-21',
        highlight: true,
      },
      {
        name: 'TK-Chicken Nuggets (glutenfrei)',
        marke: 'Schär / je nach Supermarkt',
        emoji: '🍗',
        gf: 'ja',
        gfHinweis: 'Nur Varianten mit GF-Kennzeichnung kaufen – nicht alle TK-Nuggets sind GF!',
        wo: ['Rewe (Bio-Eigenmarke)', 'Online', 'Kaufland'],
        beschreibung: 'Gibt es mittlerweile in guten GF-Ausführungen – Schär hat eine Version, und einige Supermärkte führen GF-Nuggets in der Bio-Eigenmarke. Bei uns immer ein Vorrat im Tiefkühler.',
        tipp: 'Aus der TK direkt in die Heißluftfritteuse bei 180 °C, 12–14 Min – außen knusprig wie ein Restaurant. Viel besser als im Ofen.',
        sterne: 4,
        highlight: true,
      },
    ],
  },
  {
    id: 'pizza',
    label: 'Pizza & Fertiggerichte',
    emoji: '🍕',
    produkte: [
      {
        name: 'TK-Pizza (glutenfrei)',
        marke: 'Schär',
        emoji: '🍕',
        gf: 'ja',
        wo: ['Rewe', 'Edeka', 'Real', 'Online'],
        beschreibung: 'Die Schär TK-Pizza ist wirklich gut – dünner Boden, ordentlicher Belag. Kein Vergleich zu billigen GF-Pizzen aus dem normalen Supermarkt.',
        tipp: 'Den Rand kurz vor Ende etwas mit Olivenöl bepinseln – wird dann goldbraun statt blass.',
        sterne: 4,
        amazon: 'https://www.amazon.de/s?k=sch%C3%A4r+pizza+glutenfrei&tag=waschtl-21',
      },
      {
        name: 'Fischstäbchen (glutenfrei)',
        marke: 'verschiedene',
        emoji: '🐟',
        gf: 'pruefen',
        gfHinweis: '⚠️ Achtung: Standard-Fischstäbchen von iglo & Co. enthalten Weizenmehl! Es gibt GF-Varianten, diese aber explizit suchen – z.B. von Birds Eye GF (UK-Import) oder bestimmte Bio-Versionen.',
        wo: ['Online', 'Reformhaus', 'vereinzelt Rewe Bio'],
        beschreibung: 'Der Klassiker – aber beim Kauf aufpassen, normaler Fischstäbchen-Teig enthält immer Gluten. GF-Versionen gibt es, man muss sie aber suchen.',
        tipp: 'Zur Not: selber machen geht in 20 Minuten und ist deutlich besser. Seefischfilet in GF-Paniermehl wälzen und in Butter braten.',
        sterne: 3,
      },
    ],
  },
  {
    id: 'brot',
    label: 'Brot & Backwaren',
    emoji: '🍞',
    produkte: [
      {
        name: 'Toastbrot glutenfrei',
        marke: 'Schär',
        emoji: '🍞',
        gf: 'ja',
        wo: ['Rewe', 'Edeka', 'dm', 'Online'],
        beschreibung: 'Das bekannteste GF-Toastbrot – weich, gut zu toasten, kein Körnerbrot-Ersatz aber gut für alles was schnell gehen muss. Bei uns Grundausstattung.',
        tipp: 'Tiefgekühlt kaufen und einzelne Scheiben direkt in den Toaster – hält sich so viel länger und ist frischer.',
        sterne: 4,
        amazon: 'https://www.amazon.de/s?k=sch%C3%A4r+toast+glutenfrei&tag=waschtl-21',
      },
      {
        name: 'Brötchen (TK, glutenfrei)',
        marke: 'Schär / Alnavit',
        emoji: '🥖',
        gf: 'ja',
        wo: ['Online', 'Reformhaus', 'vereinzelt dm'],
        beschreibung: 'TK-Brötchen aufbacken – funktioniert überraschend gut. Alnavit hat eine gute Variante mit Sauerteig. Für Wochenendfrühstück ein echter Unterschied.',
        tipp: 'Abends aus dem Tiefkühler nehmen, 8 Stunden auf der Arbeitsfläche antauen, morgens 10 Min bei 180 °C – schmeckt fast frisch gebacken.',
        sterne: 3,
        amazon: 'https://www.amazon.de/s?k=glutenfreie+br%C3%B6tchen+tk&tag=waschtl-21',
      },
    ],
  },
  {
    id: 'snacks',
    label: 'Snacks & Unterwegs',
    emoji: '🍪',
    produkte: [
      {
        name: 'Reiswaffeln',
        marke: 'verschiedene (Rewe Bio, dm Bio)',
        emoji: '🫓',
        gf: 'ja',
        wo: ['Überall'],
        beschreibung: 'Der GF-Snack schlechthin – überall erhältlich, kein Kind meckert. Mit Frischkäse, Erdnussbutter oder einfach pur.',
        tipp: 'Im Brotdosen-Notfall: Reiswaffel + Frischkäse + Gurke = fertig. Kein Kind fragt nach dem normalen Brot.',
        sterne: 4,
      },
      {
        name: 'Maischips / Tortilla Chips',
        marke: 'Chio, Pringles (ausgewählte), store brands',
        emoji: '🌽',
        gf: 'pruefen',
        gfHinweis: 'Viele Chips sind von Natur aus GF, aber Würzungen können Gluten enthalten. Etikett prüfen, besonders bei Sour Cream und exotischen Sorten.',
        wo: ['Überall'],
        beschreibung: 'Maischips und Tortilla Chips sind für uns Standardvorrat – von Natur aus glutenfrei, wenn man die richtige Sorte erwischt.',
        tipp: 'Chio Tortilla Chips Original sind bei uns GF-bestätigt. Dazu selbst gemachte Guacamole: 2 Avocados, Limette, Salz – 5 Minuten.',
        sterne: 4,
      },
    ],
  },
];

// ── Hilfsfunktionen ───────────────────────────────────────────────────────────

function GfBadge({ status, hinweis }: { status: GfStatus; hinweis?: string }) {
  const cfg = {
    ja:      { label: '✅ Glutenfrei',        bg: 'rgba(149,213,178,0.2)', color: 'var(--green-mid)', border: 'rgba(149,213,178,0.5)' },
    pruefen: { label: '⚠️ Etikett prüfen',   bg: 'rgba(233,196,106,0.15)', color: '#8B6914', border: 'rgba(233,196,106,0.5)' },
    nein:    { label: '❌ Enthält Gluten',    bg: 'rgba(231,111,81,0.1)',  color: '#C85A3C', border: 'rgba(231,111,81,0.3)' },
  }[status];

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '0.25rem' }}>
      <span style={{
        display: 'inline-block', padding: '0.2rem 0.7rem', borderRadius: '999px',
        fontSize: '0.72rem', fontWeight: 700,
        background: cfg.bg, color: cfg.color, border: `1.5px solid ${cfg.border}`,
      }}>
        {cfg.label}
      </span>
      {hinweis && (
        <span style={{ fontSize: '0.7rem', color: 'var(--text-light)', lineHeight: 1.4 }}>
          {hinweis}
        </span>
      )}
    </div>
  );
}

function Sterne({ n }: { n: number }) {
  return (
    <span style={{ fontSize: '0.85rem', letterSpacing: '0.05em' }}>
      {'⭐'.repeat(n)}{'☆'.repeat(5 - n)}
    </span>
  );
}

// ── Seite ─────────────────────────────────────────────────────────────────────

export default function SchnellkuechePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)', padding: '2.75rem 0 2.25rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> › Schnellküche
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.6rem', marginTop: '1rem' }}>
            ⚡ Wenns mal schnell gehen muss
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '640px' }}>
            Nicht jeder Abend ist ein Kochabend. Das hier sind die glutenfreien Fertigprodukte
            die wirklich funktionieren – getestet in unserer Familie mit Zöliakie, ohne
            Marketing-Versprechen.
          </p>
        </div>
      </section>

      {/* Wichtiger Hinweis */}
      <section style={{ background: 'rgba(233,196,106,0.1)', borderBottom: '2px solid rgba(233,196,106,0.3)', padding: '1rem 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--green-deep)', lineHeight: 1.7, margin: 0 }}>
            <strong>⚠️ Wichtig bei Zöliakie:</strong> Rezepturen können sich ändern. Immer das aktuelle Etikett prüfen,
            auch bei Produkten die ihr kennt. Bei „Etikett prüfen"-Produkten empfehlen wir zusätzlich die Herstellerwebsite
            oder telefonische Nachfrage bei Unsicherheit.
          </p>
        </div>
      </section>

      {/* Inhalt */}
      <section className="section">
        <div className="container" style={{ maxWidth: '860px' }}>

          {KATEGORIEN.map(kat => (
            <div key={kat.id} style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.3rem', color: 'var(--green-deep)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>{kat.emoji}</span> {kat.label}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {kat.produkte.map(p => (
                  <div key={p.name} className="card" style={{
                    padding: '1.5rem',
                    border: p.highlight ? '2px solid var(--golden)' : '1.5px solid var(--border)',
                    position: 'relative',
                  }}>
                    {p.highlight && (
                      <span style={{
                        position: 'absolute', top: '-10px', right: '1rem',
                        background: 'var(--golden)', color: 'var(--green-deep)',
                        fontSize: '0.65rem', fontWeight: 800, padding: '0.2rem 0.65rem',
                        borderRadius: '999px', letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}>
                        Fixstarter
                      </span>
                    )}

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '2.25rem', flexShrink: 0 }}>{p.emoji}</span>
                      <div style={{ flex: 1, minWidth: '200px' }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.35rem' }}>
                          <h3 style={{ fontSize: '1.05rem', color: 'var(--green-deep)', margin: 0 }}>{p.name}</h3>
                          <span style={{ fontSize: '0.78rem', color: 'var(--text-light)', fontWeight: 500 }}>{p.marke}</span>
                        </div>

                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '0.75rem' }}>
                          <GfBadge status={p.gf} hinweis={p.gfHinweis} />
                          <Sterne n={p.sterne} />
                        </div>

                        <p style={{ margin: '0 0 0.75rem', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-dark)' }}>
                          {p.beschreibung}
                        </p>

                        <div style={{
                          padding: '0.65rem 0.9rem', borderRadius: '8px',
                          background: 'rgba(149,213,178,0.08)',
                          borderLeft: '3px solid var(--mint)',
                          fontSize: '0.85rem', color: 'var(--text-dark)', lineHeight: 1.65,
                          marginBottom: '0.875rem',
                        }}>
                          💡 <strong>Waschtls Tipp:</strong> {p.tipp}
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.72rem', color: 'var(--text-light)', fontWeight: 600 }}>Wo kaufen:</span>
                          {p.wo.map(w => (
                            <span key={w} style={{
                              fontSize: '0.72rem', padding: '0.15rem 0.55rem', borderRadius: '999px',
                              background: 'var(--cream-dark)', border: '1px solid var(--border)',
                              color: 'var(--text-mid)',
                            }}>{w}</span>
                          ))}
                          {p.amazon && (
                            <a
                              href={p.amazon}
                              target="_blank"
                              rel="noopener noreferrer sponsored"
                              style={{
                                fontSize: '0.72rem', padding: '0.15rem 0.65rem', borderRadius: '999px',
                                background: 'rgba(233,196,106,0.15)',
                                border: '1px solid rgba(233,196,106,0.4)',
                                color: 'var(--green-deep)', textDecoration: 'none', fontWeight: 600,
                              }}
                            >
                              🛒 Amazon (Anzeige)
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Vorratstipp */}
          <div className="card" style={{
            background: 'var(--green-deep)', color: '#fff', padding: '1.75rem 2rem',
            marginTop: '1rem',
          }}>
            <h3 style={{ color: 'var(--golden)', fontSize: '1.1rem', marginBottom: '1rem' }}>
              🧊 Unser Notfall-Vorrat (immer zu Hause)
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
              {[
                '🧆 dm Bio-Falafel (TK)',
                '🥔 Schär Gnocchi (getrocknet)',
                '🐟 iglo Schlemmerfilet Spinat',
                '🥐 Schär TK-Blätterteig',
                '🍗 GF TK-Nuggets',
                '🍕 Schär TK-Pizza (×2)',
                '🍞 Schär Toastbrot (TK)',
                '🫓 Reiswaffeln',
                '🌽 Tortilla Chips',
                '🥔 TK-Pommes (von Natur aus GF)',
              ].map(item => (
                <div key={item} style={{
                  fontSize: '0.85rem', padding: '0.5rem 0.75rem',
                  borderRadius: '8px', background: 'rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.85)',
                }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Link zu selbst kochen */}
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-mid)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Wenn doch Zeit ist: unsere schnellen Rezepte zum Selbstkochen
            </p>
            <Link href="/rezepte" className="btn btn-golden">
              Zu den Rezepten →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
