'use client';

import { useState } from 'react';
import Link from 'next/link';

// ── Typen ─────────────────────────────────────────────────────────────────────

type SlotKey = 'fruehstueck' | 'mittagessen' | 'abendessen' | 'snack';

// Hauptzutaten pro Rezept (ohne Wasser, Salz, Pfeffer, Öl, einfache Gewürze)
type Recipe = {
  title: string;
  slug: string;
  slots: SlotKey[];
  minuten: number;
  // Ernährungsfilter
  naturalGf: boolean;
  kleinkind: boolean;
  vegetarisch: boolean;
  vegan: boolean;
  pescetarisch: boolean;   // fisch ok, kein Fleisch
  histaminarm: boolean;    // kein Parmesan, keine Tomaten, kein Essig, kein Kakao
  zuckerfrei: boolean;     // kein zugesetzter Zucker (Honig/Früchte ok)
  laktosefrei: boolean;
  fruktosearm: boolean;
  nussfrei: boolean;
  eifrei: boolean;
  einfrierbar: boolean;
  // Zutaten-Vollständigkeit (Hauptzutaten, die man nicht immer zu Hause hat)
  keyIngredients: string[];
};

// ── Rezept-Daten ──────────────────────────────────────────────────────────────

const ALL_RECIPES: Recipe[] = [
  {
    title: 'Apfel-Zimt-Porridge',
    slug: '/rezepte/apfel-zimt-porridge',
    slots: ['fruehstueck'],
    minuten: 10,
    naturalGf: true, kleinkind: true,
    vegetarisch: true, vegan: false, pescetarisch: true,
    histaminarm: true, zuckerfrei: true,
    laktosefrei: true, fruktosearm: false, nussfrei: true, eifrei: true,
    einfrierbar: false,
    keyIngredients: ['Haferflocken (GF)', 'Apfel', 'Milch'],
  },
  {
    title: 'Pfannkuchen',
    slug: '/rezepte/pfannkuchen-reismehl',
    slots: ['fruehstueck'],
    minuten: 25,
    naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: false, pescetarisch: true,
    histaminarm: true, zuckerfrei: true,
    laktosefrei: true, fruktosearm: true, nussfrei: true, eifrei: false,
    einfrierbar: true,
    keyIngredients: ['Reismehl', 'Eier', 'Milch'],
  },
  {
    title: 'Nudeln mit Tomatensauce',
    slug: '/rezepte/nudeln-mit-tomatensauce',
    slots: ['mittagessen', 'abendessen'],
    minuten: 25,
    naturalGf: false, kleinkind: true,
    vegetarisch: true, vegan: true, pescetarisch: true,
    histaminarm: false, // Tomaten sind histaminreich
    zuckerfrei: true,
    laktosefrei: true, fruktosearm: false, nussfrei: true, eifrei: true,
    einfrierbar: true,
    keyIngredients: ['GF Nudeln', 'Tomaten', 'Knoblauch', 'Zwiebel'],
  },
  {
    title: 'Kürbisrisotto',
    slug: '/rezepte/kuerbisrisotto',
    slots: ['mittagessen', 'abendessen'],
    minuten: 40,
    naturalGf: true, kleinkind: false,
    vegetarisch: true, vegan: false, pescetarisch: true,
    histaminarm: false, // Parmesan ist gereift
    zuckerfrei: true,
    laktosefrei: false, fruktosearm: true, nussfrei: true, eifrei: true,
    einfrierbar: true,
    keyIngredients: ['Kürbis', 'Risottoreis', 'GF Gemüsebrühe', 'Zwiebel', 'Parmesan'],
  },
  {
    title: 'Pizza glutenfrei',
    slug: '/rezepte/pizza-glutenfrei',
    slots: ['abendessen'],
    minuten: 60,
    naturalGf: false, kleinkind: false,
    vegetarisch: true, vegan: false, pescetarisch: true,
    histaminarm: false, // Tomaten, gereifter Käse
    zuckerfrei: true,
    laktosefrei: false, fruktosearm: true, nussfrei: true, eifrei: false,
    einfrierbar: true,
    keyIngredients: ['GF Mehlmischung', 'Hefe', 'Tomaten', 'Käse'],
  },
  {
    title: 'Bananenmuffins',
    slug: '/rezepte/bananenmuffins',
    slots: ['snack'],
    minuten: 30,
    naturalGf: true, kleinkind: true,
    vegetarisch: true, vegan: false, pescetarisch: true,
    histaminarm: true, zuckerfrei: true, // natürliche Süße durch Banane
    laktosefrei: true, fruktosearm: false, nussfrei: false, eifrei: false,
    einfrierbar: true,
    keyIngredients: ['Banane', 'Eier', 'Mandelmehl'],
  },
  {
    title: 'Energiebällchen',
    slug: '/rezepte/energiebaellchen',
    slots: ['snack'],
    minuten: 15,
    naturalGf: true, kleinkind: true,
    vegetarisch: true, vegan: true, pescetarisch: true,
    histaminarm: false, // Kakao kann histaminreich sein
    zuckerfrei: false,
    laktosefrei: true, fruktosearm: true, nussfrei: false, eifrei: true,
    einfrierbar: true,
    keyIngredients: ['Haferflocken (GF)', 'Erdnussbutter', 'Honig', 'Kakao'],
  },
  {
    title: 'Kokos-Milchreis',
    slug: '/rezepte/milchreis-kokos',
    slots: ['snack', 'mittagessen'],
    minuten: 35,
    naturalGf: true, kleinkind: true,
    vegetarisch: true, vegan: true, pescetarisch: true,
    histaminarm: true, zuckerfrei: false,
    laktosefrei: true, fruktosearm: true, nussfrei: true, eifrei: true,
    einfrierbar: false,
    keyIngredients: ['Milchreis', 'Kokosmilch'],
  },
  {
    title: 'Schokoladenkuchen',
    slug: '/rezepte/schokoladenkuchen-mandelmehl',
    slots: ['snack'],
    minuten: 50,
    naturalGf: false, kleinkind: false,
    vegetarisch: true, vegan: false, pescetarisch: true,
    histaminarm: false, // Schokolade
    zuckerfrei: false,
    laktosefrei: false, fruktosearm: true, nussfrei: false, eifrei: false,
    einfrierbar: true,
    keyIngredients: ['Mandelmehl', 'Schokolade', 'Eier', 'Butter'],
  },
];

// Alle einzigartigen Hauptzutaten (für Chips-Auswahl)
const ALL_KEY_INGREDIENTS = [...new Set(ALL_RECIPES.flatMap(r => r.keyIngredients))].sort((a, b) =>
  a.localeCompare(b, 'de')
);

// ── Konstanten ────────────────────────────────────────────────────────────────

const TAGE_5 = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];
const TAGE_7 = [...TAGE_5, 'Samstag', 'Sonntag'];

const SLOTS: { key: SlotKey; label: string }[] = [
  { key: 'fruehstueck', label: '🌅 Frühstück'      },
  { key: 'mittagessen', label: '🍽 Mittagessen'     },
  { key: 'abendessen',  label: '🌙 Abendessen'      },
  { key: 'snack',       label: '🍪 Snack / Dessert' },
];

// ── Präferenzen ───────────────────────────────────────────────────────────────

type Prefs = {
  kleinkind: boolean; nurNatGf: boolean; schnell: boolean; einfrierbar: boolean;
  vegetarisch: boolean; vegan: boolean; pescetarisch: boolean;
  histaminarm: boolean; zuckerfrei: boolean;
  laktosefrei: boolean; fruktosearm: boolean; nussfrei: boolean; eifrei: boolean;
  zutatenmodus: boolean; // Zutaten-Vollständigkeits-Filter aktiv?
  woche: '5' | '7';
};

const DEFAULT_PREFS: Prefs = {
  kleinkind: false, nurNatGf: false, schnell: false, einfrierbar: false,
  vegetarisch: false, vegan: false, pescetarisch: false,
  histaminarm: false, zuckerfrei: false,
  laktosefrei: false, fruktosearm: false, nussfrei: false, eifrei: false,
  zutatenmodus: false,
  woche: '5',
};

// ── Plan-Logik ────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function applyFilters(pool: Recipe[], prefs: Prefs, available: string[]): Recipe[] {
  return pool.filter(r => {
    if (prefs.kleinkind    && !r.kleinkind)    return false;
    if (prefs.nurNatGf     && !r.naturalGf)    return false;
    if (prefs.schnell      && r.minuten > 30)  return false;
    if (prefs.einfrierbar  && !r.einfrierbar)  return false;
    if (prefs.vegan        && !r.vegan)        return false;
    if (prefs.vegetarisch  && !r.vegetarisch)  return false;
    if (prefs.pescetarisch && !r.pescetarisch) return false;
    if (prefs.histaminarm  && !r.histaminarm)  return false;
    if (prefs.zuckerfrei   && !r.zuckerfrei)   return false;
    if (prefs.laktosefrei  && !r.laktosefrei)  return false;
    if (prefs.fruktosearm  && !r.fruktosearm)  return false;
    if (prefs.nussfrei     && !r.nussfrei)     return false;
    if (prefs.eifrei       && !r.eifrei)       return false;
    // Zutaten-Vollständigkeit: ALLE Hauptzutaten müssen ausgewählt sein
    if (prefs.zutatenmodus && available.length > 0) {
      if (!r.keyIngredients.every(ing => available.includes(ing))) return false;
    }
    return true;
  });
}

function pickForSlot(slotKey: SlotKey, prefs: Prefs, available: string[], count: number): (Recipe | null)[] {
  const pool = applyFilters(
    ALL_RECIPES.filter(r => r.slots.includes(slotKey)),
    prefs, available
  );
  if (pool.length === 0) return Array(count).fill(null);
  const shuffled = shuffle(pool);
  return Array.from({ length: count }, (_, i) => shuffled[i % shuffled.length]);
}

type DayPlan = Record<SlotKey, Recipe | null>;
type Plan = Record<string, DayPlan>;

function buildPlan(prefs: Prefs, available: string[]): Plan {
  const days = prefs.woche === '7' ? TAGE_7 : TAGE_5;
  const n = days.length;
  const bySlot = {
    fruehstueck: pickForSlot('fruehstueck', prefs, available, n),
    mittagessen: pickForSlot('mittagessen', prefs, available, n),
    abendessen:  pickForSlot('abendessen',  prefs, available, n),
    snack:       pickForSlot('snack',       prefs, available, n),
  };
  const plan: Plan = {};
  days.forEach((tag, i) => {
    plan[tag] = {
      fruehstueck: bySlot.fruehstueck[i],
      mittagessen: bySlot.mittagessen[i],
      abendessen:  bySlot.abendessen[i],
      snack:       bySlot.snack[i],
    };
  });
  return plan;
}

// ── UI-Komponenten ────────────────────────────────────────────────────────────

function Pill({ label, active, onToggle, color }: {
  label: string; active: boolean; onToggle: () => void; color?: 'golden' | 'mint';
}) {
  const bg = active
    ? color === 'golden' ? 'var(--golden)' : 'var(--green-deep)'
    : 'var(--cream-dark)';
  const fg = active
    ? color === 'golden' ? 'var(--green-deep)' : 'var(--golden)'
    : 'var(--text-mid)';
  return (
    <button onClick={onToggle} style={{
      padding: '0.4rem 0.95rem', borderRadius: '999px',
      border: `2px solid ${active ? (color === 'golden' ? 'var(--golden)' : 'var(--green-deep)') : 'var(--border)'}`,
      background: bg, color: fg,
      fontWeight: active ? 700 : 400, fontSize: '0.82rem',
      cursor: 'pointer', transition: 'all 0.15s', whiteSpace: 'nowrap',
    }}>
      {label}
    </button>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 0.5rem' }}>
        {label}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {children}
      </div>
    </div>
  );
}

function IngredientChip({ label, selected, onToggle }: { label: string; selected: boolean; onToggle: () => void }) {
  return (
    <button onClick={onToggle} style={{
      padding: '0.3rem 0.75rem', borderRadius: '999px',
      border: `1.5px solid ${selected ? 'var(--mint)' : 'var(--border)'}`,
      background: selected ? 'rgba(149,213,178,0.2)' : 'var(--cream)',
      color: selected ? 'var(--green-deep)' : 'var(--text-mid)',
      fontSize: '0.78rem', fontWeight: selected ? 700 : 400,
      cursor: 'pointer', transition: 'all 0.12s',
    }}>
      {selected ? '✓ ' : ''}{label}
    </button>
  );
}

function RecipeCell({ recipe }: { recipe: Recipe | null }) {
  if (!recipe) return (
    <div style={{
      padding: '0.55rem 0.75rem', borderRadius: '8px',
      background: 'rgba(0,0,0,0.03)', border: '1.5px dashed var(--border)',
      fontSize: '0.75rem', color: 'var(--text-light)', fontStyle: 'italic',
    }}>
      Nicht verfügbar ✨
    </div>
  );
  return (
    <Link href={recipe.slug} target="_blank" style={{
      display: 'block', padding: '0.55rem 0.75rem', borderRadius: '8px',
      background: 'var(--cream-dark)', border: '1.5px solid var(--border)',
      textDecoration: 'none', color: 'var(--text-dark)',
      fontSize: '0.82rem', fontWeight: 500, lineHeight: 1.35,
    }}
    onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--green-mid)')}
    onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
    >
      {recipe.title}
      <span style={{ display: 'block', fontSize: '0.68rem', color: 'var(--text-light)', marginTop: '0.15rem' }}>
        ⏱ {recipe.minuten} Min.{recipe.naturalGf ? ' · ohne Spezialmehl' : ''}
      </span>
    </Link>
  );
}

// ── Hauptkomponente ───────────────────────────────────────────────────────────

export default function WochenplanPage() {
  const [prefs, setPrefs]         = useState<Prefs>(DEFAULT_PREFS);
  const [available, setAvailable] = useState<string[]>([]);
  const [plan, setPlan]           = useState<Plan | null>(null);
  const [ingSearch, setIngSearch] = useState('');

  const toggle = (key: keyof Omit<Prefs, 'woche' | 'zutatenmodus'>) =>
    setPrefs(p => ({ ...p, [key]: !p[key] }));

  const setWoche = (w: '5' | '7') => setPrefs(p => ({ ...p, woche: w }));

  const toggleIng = (ing: string) =>
    setAvailable(a => a.includes(ing) ? a.filter(x => x !== ing) : [...a, ing]);

  const activeCount = Object.entries(prefs)
    .filter(([k, v]) => !['woche', 'zutatenmodus'].includes(k) && v === true).length
    + (prefs.zutatenmodus && available.length > 0 ? 1 : 0);

  const days = prefs.woche === '7' ? TAGE_7 : TAGE_5;

  const visibleIngredients = ingSearch
    ? ALL_KEY_INGREDIENTS.filter(i => i.toLowerCase().includes(ingSearch.toLowerCase()))
    : ALL_KEY_INGREDIENTS;

  // Wie viele Rezepte sind überhaupt verfügbar?
  const availableCount = ALL_RECIPES.filter(r =>
    !r.keyIngredients.some(ing => !available.includes(ing))
  ).length;

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: 'var(--green-deep)', padding: '2.75rem 0 2.25rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> › Wochenplan
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>Glutenfreier Wochenplan</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '500px' }}>
            Filter einstellen – wir stellen deinen Plan aus Rezepten zusammen die wirklich zu euch passen.
          </p>
        </div>
      </section>

      {/* ── Filter-Panel ── */}
      <section style={{ background: 'var(--cream-dark)', borderBottom: '1px solid var(--border)', padding: '1.75rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>

          {/* Filter-Gruppen */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem 2.5rem', marginBottom: '1.25rem' }}>

            <FilterGroup label="⚙️ Praktisch">
              <Pill label="👶 Kleinkindtauglich"  active={prefs.kleinkind}   onToggle={() => toggle('kleinkind')} />
              <Pill label="💚 Ohne Spezialmehl"   active={prefs.nurNatGf}    onToggle={() => toggle('nurNatGf')} />
              <Pill label="⚡ Schnell (≤ 30 Min)" active={prefs.schnell}     onToggle={() => toggle('schnell')} />
              <Pill label="❄️ Einfrierbar"         active={prefs.einfrierbar} onToggle={() => toggle('einfrierbar')} />
            </FilterGroup>

            <FilterGroup label="🥦 Ernährungsweise">
              <Pill label="🥦 Vegetarisch"   active={prefs.vegetarisch}  onToggle={() => toggle('vegetarisch')} />
              <Pill label="🌱 Vegan"         active={prefs.vegan}        onToggle={() => {
                setPrefs(p => ({ ...p, vegan: !p.vegan, vegetarisch: !p.vegan ? true : p.vegetarisch }));
              }} />
              <Pill label="🐟 Pescetarisch"  active={prefs.pescetarisch} onToggle={() => toggle('pescetarisch')} />
              <Pill label="🌿 Histaminarm"   active={prefs.histaminarm}  onToggle={() => toggle('histaminarm')} />
              <Pill label="🚫 Zuckerfrei"    active={prefs.zuckerfrei}   onToggle={() => toggle('zuckerfrei')} />
            </FilterGroup>

            <FilterGroup label="⚠️ Unverträglichkeiten">
              <Pill label="🥛 Laktosefrei" active={prefs.laktosefrei} onToggle={() => toggle('laktosefrei')} />
              <Pill label="🍎 Fruktosearm" active={prefs.fruktosearm} onToggle={() => toggle('fruktosearm')} />
              <Pill label="🥜 Nussfrei"   active={prefs.nussfrei}    onToggle={() => toggle('nussfrei')} />
              <Pill label="🥚 Ei-frei"    active={prefs.eifrei}      onToggle={() => toggle('eifrei')} />
            </FilterGroup>

          </div>

          {/* Zutaten-zu-Hause Toggle */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: prefs.zutatenmodus ? '1rem' : '0' }}>
              <button
                onClick={() => setPrefs(p => ({ ...p, zutatenmodus: !p.zutatenmodus }))}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.45rem 1rem', borderRadius: '8px',
                  border: `2px solid ${prefs.zutatenmodus ? 'var(--mint)' : 'var(--border)'}`,
                  background: prefs.zutatenmodus ? 'rgba(149,213,178,0.15)' : 'transparent',
                  color: prefs.zutatenmodus ? 'var(--green-deep)' : 'var(--text-mid)',
                  fontWeight: prefs.zutatenmodus ? 700 : 400, fontSize: '0.85rem', cursor: 'pointer',
                }}
              >
                <span style={{
                  width: '18px', height: '18px', borderRadius: '4px',
                  border: `2px solid ${prefs.zutatenmodus ? 'var(--mint)' : 'var(--border)'}`,
                  background: prefs.zutatenmodus ? 'var(--mint)' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.7rem', color: 'var(--green-deep)', flexShrink: 0,
                }}>
                  {prefs.zutatenmodus ? '✓' : ''}
                </span>
                🧺 Nur Rezepte mit Zutaten die ich zu Hause habe
              </button>
              {prefs.zutatenmodus && available.length > 0 && (
                <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>
                  {availableCount} von {ALL_RECIPES.length} Rezepten verfügbar
                </span>
              )}
            </div>

            {/* Zutaten-Auswahl */}
            {prefs.zutatenmodus && (
              <div style={{ background: 'var(--cream)', border: '1.5px solid var(--mint)', borderRadius: '12px', padding: '1rem 1.25rem' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-mid)', margin: '0 0 0.75rem', lineHeight: 1.6 }}>
                  Wähle was du zu Hause hast. Wasser, Salz, Öl und einfache Gewürze werden nicht gezählt. Rezepte erscheinen nur wenn <strong>alle</strong> Hauptzutaten angehakt sind.
                </p>

                {/* Suche innerhalb der Zutaten */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', padding: '0.4rem 0.75rem', background: 'var(--cream-dark)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>🔍</span>
                  <input
                    value={ingSearch}
                    onChange={e => setIngSearch(e.target.value)}
                    placeholder="Zutat suchen…"
                    style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: '0.82rem', flex: 1, color: 'var(--text-dark)' }}
                  />
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  {visibleIngredients.map(ing => (
                    <IngredientChip key={ing} label={ing} selected={available.includes(ing)} onToggle={() => toggleIng(ing)} />
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <button onClick={() => setAvailable(ALL_KEY_INGREDIENTS)} style={{ fontSize: '0.75rem', color: 'var(--green-mid)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
                    Alles auswählen
                  </button>
                  {available.length > 0 && (
                    <button onClick={() => setAvailable([])} style={{ fontSize: '0.75rem', color: 'var(--text-light)', background: 'none', border: 'none', cursor: 'pointer' }}>
                      Auswahl löschen
                    </button>
                  )}
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginLeft: 'auto' }}>
                    {available.length} / {ALL_KEY_INGREDIENTS.length} ausgewählt
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Zeitraum + Reset + Generieren */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>Zeitraum:</span>
              {(['5', '7'] as const).map(w => (
                <button key={w} onClick={() => setWoche(w)} style={{
                  padding: '0.35rem 0.9rem', borderRadius: '999px',
                  border: `2px solid ${prefs.woche === w ? 'var(--golden)' : 'var(--border)'}`,
                  background: prefs.woche === w ? 'var(--golden)' : 'transparent',
                  color: prefs.woche === w ? 'var(--green-deep)' : 'var(--text-mid)',
                  fontWeight: prefs.woche === w ? 700 : 400, fontSize: '0.85rem', cursor: 'pointer',
                }}>
                  {w === '5' ? 'Mo – Fr' : 'Mo – So'}
                </button>
              ))}
              {activeCount > 0 && (
                <button onClick={() => { setPrefs(DEFAULT_PREFS); setAvailable([]); }} style={{
                  fontSize: '0.75rem', color: 'var(--text-light)',
                  background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline',
                }}>
                  Filter zurücksetzen ({activeCount})
                </button>
              )}
            </div>

            <button
              onClick={() => setPlan(buildPlan(prefs, available))}
              className="btn btn-golden"
              style={{ fontSize: '0.95rem', padding: '0.7rem 1.75rem' }}
            >
              {plan ? '🔄 Neuen Plan' : '✨ Plan erstellen'}
            </button>
          </div>
        </div>
      </section>

      {/* ── Plan-Tabelle ── */}
      {plan && (
        <section className="section">
          <div className="container" style={{ maxWidth: '1060px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
              <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.82rem' }}>
                Klick auf ein Rezept öffnet alle Details.
              </p>
              <button onClick={() => window.print()} style={{
                padding: '0.4rem 0.9rem', borderRadius: '8px',
                border: '1.5px solid var(--border)', background: 'transparent',
                color: 'var(--text-mid)', fontSize: '0.8rem', cursor: 'pointer',
              }}>
                🖨 Plan drucken
              </button>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '680px' }}>
                <thead>
                  <tr>
                    <th style={{ width: '90px', textAlign: 'left', padding: '0.5rem 0.75rem', fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 600, borderBottom: '2px solid var(--golden)' }}>Tag</th>
                    {SLOTS.map(s => (
                      <th key={s.key} style={{ textAlign: 'left', padding: '0.5rem 0.75rem', fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 600, borderBottom: '2px solid var(--golden)' }}>
                        {s.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {days.map((tag, i) => (
                    <tr key={tag} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.018)' }}>
                      <td style={{ padding: '0.6rem 0.75rem', verticalAlign: 'top' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--green-deep)' }}>{tag}</span>
                      </td>
                      {SLOTS.map(s => (
                        <td key={s.key} style={{ padding: '0.4rem 0.5rem', verticalAlign: 'top', minWidth: '140px' }}>
                          <RecipeCell recipe={plan[tag][s.key]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '1.5rem', padding: '0.875rem 1.25rem', background: 'rgba(149,213,178,0.1)', border: '1.5px solid var(--mint)', borderRadius: '10px', fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--text-mid)' }}>
              {prefs.zutatenmodus
                ? <><strong>Zutaten-Modus aktiv:</strong> Es erscheinen nur Rezepte bei denen du alle Hauptzutaten ausgewählt hast. „Nicht verfügbar" bedeutet: kein passendes Rezept für diese Kombination – bald kommen mehr! 😊</>
                : <><strong>Noch Lücken?</strong> Mit jedem neuen Rezept wird der Plan vollständiger. „Nicht verfügbar" heißt: Kategorie passt zu deinen Filtern, das Rezept ist noch in Arbeit.</>
              }
            </div>

            <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/rezepte" className="btn btn-outline">Alle Rezepte →</Link>
              <Link href="/rezepte/alle" className="btn btn-outline">Rezepte A–Z →</Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Leerer State ── */}
      {!plan && (
        <section className="section">
          <div className="container" style={{ maxWidth: '560px', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🥘</div>
            <h2 style={{ marginBottom: '0.5rem', color: 'var(--green-deep)' }}>Dein persönlicher Plan wartet</h2>
            <p style={{ color: 'var(--text-mid)' }}>
              Filter einstellen und auf „Plan erstellen" klicken. Alle Filter werden kombiniert – z.B. Vegan + Fruktosearm + Zutaten die du zu Hause hast.
            </p>
          </div>
        </section>
      )}

      <style>{`
        @media print {
          header, footer, section:first-of-type, section:nth-of-type(2), .btn, button { display: none !important; }
          table { font-size: 0.78rem; }
          td, th { border: 1px solid #ddd !important; padding: 0.4rem !important; }
          a { color: black !important; text-decoration: none !important; }
        }
      `}</style>
    </>
  );
}
