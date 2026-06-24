'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

// ── Zutaten-Kategorien ────────────────────────────────────────────────────────

const INGREDIENT_GROUPS = [
  {
    label: '🥛 Milch & Milchprodukte',
    items: ['Milch', 'Butter', 'Parmesan', 'Käse', 'Kokosmilch'],
  },
  {
    label: '🥚 Eier & Backzutaten',
    items: ['Eier', 'Reismehl', 'Mandelmehl', 'GF Mehlmischung', 'Hefe', 'Backpulver'],
  },
  {
    label: '🌾 Getreide & Grundnahrung',
    items: ['Haferflocken (GF)', 'GF Nudeln', 'Risottoreis', 'Milchreis'],
  },
  {
    label: '🧅 Gemüse',
    items: ['Kürbis', 'Tomaten', 'Knoblauch', 'Zwiebel'],
  },
  {
    label: '🍌 Obst',
    items: ['Apfel', 'Banane'],
  },
  {
    label: '🫙 Vorratskammer',
    items: ['Erdnussbutter', 'Honig', 'Kakao', 'Schokolade', 'GF Gemüsebrühe'],
  },
];

// ── Rezepte mit Hauptzutaten ──────────────────────────────────────────────────
// Nur Zutaten die man nicht immer hat (kein Wasser, Salz, Öl, Gewürze)

type RecipeEntry = {
  title: string;
  slug: string;
  kat: string;
  minuten: number;
  naturalGf: boolean;
  kleinkind: boolean;
  keyIngredients: string[];
};

const RECIPES: RecipeEntry[] = [
  {
    title: 'Apfel-Zimt-Porridge', slug: '/rezepte/apfel-zimt-porridge',
    kat: 'Frühstück', minuten: 10, naturalGf: true, kleinkind: true,
    keyIngredients: ['Haferflocken (GF)', 'Apfel', 'Milch'],
  },
  {
    title: 'Pfannkuchen', slug: '/rezepte/pfannkuchen-reismehl',
    kat: 'Frühstück', minuten: 25, naturalGf: false, kleinkind: true,
    keyIngredients: ['Reismehl', 'Eier', 'Milch'],
  },
  {
    title: 'Nudeln mit Tomatensauce', slug: '/rezepte/nudeln-mit-tomatensauce',
    kat: 'Mittagessen', minuten: 25, naturalGf: false, kleinkind: true,
    keyIngredients: ['GF Nudeln', 'Tomaten', 'Knoblauch', 'Zwiebel'],
  },
  {
    title: 'Kürbisrisotto', slug: '/rezepte/kuerbisrisotto',
    kat: 'Mittagessen', minuten: 40, naturalGf: true, kleinkind: false,
    keyIngredients: ['Kürbis', 'Risottoreis', 'GF Gemüsebrühe', 'Zwiebel', 'Parmesan'],
  },
  {
    title: 'Pizza glutenfrei', slug: '/rezepte/pizza-glutenfrei',
    kat: 'Abendessen', minuten: 60, naturalGf: false, kleinkind: false,
    keyIngredients: ['GF Mehlmischung', 'Hefe', 'Tomaten', 'Käse'],
  },
  {
    title: 'Bananenmuffins', slug: '/rezepte/bananenmuffins',
    kat: 'Snacks', minuten: 30, naturalGf: true, kleinkind: true,
    keyIngredients: ['Banane', 'Eier', 'Mandelmehl', 'Backpulver'],
  },
  {
    title: 'Energiebällchen', slug: '/rezepte/energiebaellchen',
    kat: 'Snacks', minuten: 15, naturalGf: true, kleinkind: true,
    keyIngredients: ['Haferflocken (GF)', 'Erdnussbutter', 'Honig', 'Kakao'],
  },
  {
    title: 'Kokos-Milchreis', slug: '/rezepte/milchreis-kokos',
    kat: 'Dessert', minuten: 35, naturalGf: true, kleinkind: true,
    keyIngredients: ['Milchreis', 'Kokosmilch'],
  },
  {
    title: 'Schokoladenkuchen', slug: '/rezepte/schokoladenkuchen-mandelmehl',
    kat: 'Backen', minuten: 50, naturalGf: false, kleinkind: false,
    keyIngredients: ['Mandelmehl', 'Schokolade', 'Eier', 'Butter'],
  },
];

// ── Haupt-Komponente ──────────────────────────────────────────────────────────

export default function NachZutatenPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [modus, setModus]       = useState<'alle' | 'komplett'>('komplett');

  const toggleIng = (ing: string) =>
    setSelected(s => s.includes(ing) ? s.filter(x => x !== ing) : [...s, ing]);

  const allIngredients = INGREDIENT_GROUPS.flatMap(g => g.items);

  const results = useMemo(() => {
    if (selected.length === 0) return [];
    return RECIPES
      .map(r => ({
        ...r,
        have:    r.keyIngredients.filter(i => selected.includes(i)).length,
        missing: r.keyIngredients.filter(i => !selected.includes(i)),
        total:   r.keyIngredients.length,
      }))
      .filter(r => modus === 'komplett' ? r.have === r.total : r.have > 0)
      .sort((a, b) => (b.have / b.total) - (a.have / a.total));
  }, [selected, modus]);

  const completeCount = useMemo(() => {
    if (selected.length === 0) return 0;
    return RECIPES.filter(r => r.keyIngredients.every(i => selected.includes(i))).length;
  }, [selected]);

  const selectAll   = () => setSelected(allIngredients);
  const clearAll    = () => setSelected([]);

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: 'var(--green-deep)', padding: '2.75rem 0 2.25rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> ›{' '}
            <Link href="/rezepte" style={{ color: 'var(--mint)' }}>Rezepte</Link> › Nach Zutaten
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>
            🧺 Was habe ich zu Hause?
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '520px' }}>
            Wähle die Zutaten aus die du gerade da hast – wir zeigen welche Rezepte du damit kochen kannst. Wasser, Salz, Öl und Standardgewürze sind nicht aufgelistet.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }} className="zutaten-grid">

            {/* ── Links: Zutatenliste ── */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h2 style={{ fontSize: '1rem', margin: 0 }}>Zutaten auswählen</h2>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button onClick={selectAll} style={{ fontSize: '0.75rem', color: 'var(--green-mid)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
                    Alle auswählen
                  </button>
                  {selected.length > 0 && (
                    <button onClick={clearAll} style={{ fontSize: '0.75rem', color: 'var(--text-light)', background: 'none', border: 'none', cursor: 'pointer' }}>
                      Löschen ({selected.length})
                    </button>
                  )}
                </div>
              </div>

              {/* Gruppen */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {INGREDIENT_GROUPS.map(group => (
                  <div key={group.label}>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 0.5rem' }}>
                      {group.label}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {group.items.map(ing => {
                        const isSelected = selected.includes(ing);
                        return (
                          <button key={ing} onClick={() => toggleIng(ing)} style={{
                            padding: '0.35rem 0.8rem', borderRadius: '999px',
                            border: `1.5px solid ${isSelected ? 'var(--mint)' : 'var(--border)'}`,
                            background: isSelected ? 'rgba(149,213,178,0.2)' : 'var(--cream-dark)',
                            color: isSelected ? 'var(--green-deep)' : 'var(--text-mid)',
                            fontSize: '0.8rem', fontWeight: isSelected ? 700 : 400,
                            cursor: 'pointer', transition: 'all 0.12s',
                          }}>
                            {isSelected ? '✓ ' : ''}{ing}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Rechts: Ergebnisse ── */}
            <div style={{ position: 'sticky', top: '110px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h2 style={{ fontSize: '1rem', margin: 0 }}>
                  {selected.length === 0 ? 'Rezepte' : `${results.length} Rezept${results.length !== 1 ? 'e' : ''} gefunden`}
                </h2>
                {selected.length > 0 && (
                  <div style={{ display: 'flex', gap: '0.25rem' }}>
                    {(['komplett', 'alle'] as const).map(m => (
                      <button key={m} onClick={() => setModus(m)} style={{
                        padding: '0.3rem 0.75rem', borderRadius: '999px', fontSize: '0.75rem',
                        border: `1.5px solid ${modus === m ? 'var(--green-deep)' : 'var(--border)'}`,
                        background: modus === m ? 'var(--green-deep)' : 'transparent',
                        color: modus === m ? 'var(--golden)' : 'var(--text-mid)',
                        fontWeight: modus === m ? 700 : 400, cursor: 'pointer',
                      }}>
                        {m === 'komplett' ? `Komplett (${completeCount})` : 'Teilweise'}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Leerer State */}
              {selected.length === 0 && (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🧺</div>
                  Wähle links Zutaten aus die du zu Hause hast – hier erscheinen dann passende Rezepte.
                </div>
              )}

              {/* Keine Ergebnisse */}
              {selected.length > 0 && results.length === 0 && (
                <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'var(--text-light)', fontSize: '0.875rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤔</div>
                  {modus === 'komplett'
                    ? <>Kein Rezept lässt sich mit diesen Zutaten komplett kochen.<br />Wechsel zu „Teilweise" um Rezepte zu sehen bei denen du fast alles hast.</>
                    : 'Kein passendes Rezept – bald kommen mehr!'
                  }
                </div>
              )}

              {/* Rezept-Karten */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {results.map(r => (
                  <Link key={r.slug} href={r.slug} style={{
                    display: 'block', padding: '1rem 1.25rem', borderRadius: '12px',
                    background: 'var(--cream-dark)',
                    border: `2px solid ${r.have === r.total ? 'var(--mint)' : 'var(--border)'}`,
                    textDecoration: 'none', color: 'var(--text-dark)',
                    transition: 'border-color 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = r.have === r.total ? 'var(--green-mid)' : 'var(--green-mid)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = r.have === r.total ? 'var(--mint)' : 'var(--border)')}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{r.title}</span>
                      <span style={{
                        fontSize: '0.7rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '999px', flexShrink: 0, marginLeft: '0.5rem',
                        background: r.have === r.total ? 'var(--mint)' : 'rgba(233,196,106,0.3)',
                        color: r.have === r.total ? 'var(--green-deep)' : 'var(--green-deep)',
                      }}>
                        {r.have === r.total ? '✓ Komplett' : `${r.have}/${r.total}`}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: r.missing.length > 0 ? '0.5rem' : 0 }}>
                      {r.kat} · ⏱ {r.minuten} Min.{r.naturalGf ? ' · ohne Spezialmehl' : ''}{r.kleinkind ? ' · 👶' : ''}
                    </div>
                    {r.missing.length > 0 && (
                      <div style={{ fontSize: '0.72rem', color: 'var(--terracotta)', fontWeight: 500 }}>
                        Fehlt noch: {r.missing.join(', ')}
                      </div>
                    )}
                  </Link>
                ))}
              </div>

              {/* Link zum Wochenplan */}
              {selected.length > 0 && results.length > 0 && (
                <div style={{ marginTop: '1.25rem', padding: '0.875rem 1rem', background: 'rgba(149,213,178,0.1)', border: '1.5px solid var(--mint)', borderRadius: '10px', fontSize: '0.82rem', lineHeight: 1.6 }}>
                  <strong>Für die ganze Woche planen?</strong>{' '}
                  <Link href="/wochenplan" style={{ color: 'var(--green-mid)', fontWeight: 600 }}>
                    Zum Wochenplan-Maker →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 720px) {
          .zutaten-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
