'use client';

import { useState } from 'react';
import Link from 'next/link';

// ── Rezept-Daten ──────────────────────────────────────────────────────────────

type KatType = 'Frühstück' | 'Mittagessen' | 'Snack' | 'Dessert' | 'Backen';

type Recipe = {
  title: string;
  slug: string;
  kat: KatType;
  naturalGf: boolean;
  kleinkind: boolean;
  minuten: number;
};

const ALL_RECIPES: Recipe[] = [
  { title: 'Apfel-Zimt-Porridge',        slug: '/rezepte/apfel-zimt-porridge',        kat: 'Frühstück',   naturalGf: true,  kleinkind: true,  minuten: 10 },
  { title: 'Pfannkuchen aus Reismehl',   slug: '/rezepte/pfannkuchen-reismehl',        kat: 'Frühstück',   naturalGf: false, kleinkind: true,  minuten: 25 },
  { title: 'Nudeln mit Tomatensauce',    slug: '/rezepte/nudeln-mit-tomatensauce',     kat: 'Mittagessen', naturalGf: false, kleinkind: true,  minuten: 25 },
  { title: 'Kürbisrisotto',              slug: '/rezepte/kuerbisrisotto',              kat: 'Mittagessen', naturalGf: true,  kleinkind: false, minuten: 40 },
  { title: 'Pizza glutenfrei',           slug: '/rezepte/pizza-glutenfrei',            kat: 'Mittagessen', naturalGf: false, kleinkind: false, minuten: 60 },
  { title: 'Bananenmuffins',             slug: '/rezepte/bananenmuffins',              kat: 'Snack',       naturalGf: true,  kleinkind: true,  minuten: 30 },
  { title: 'Energiebällchen',            slug: '/rezepte/energiebaellchen',            kat: 'Snack',       naturalGf: true,  kleinkind: true,  minuten: 15 },
  { title: 'Kokos-Milchreis',            slug: '/rezepte/milchreis-kokos',             kat: 'Dessert',     naturalGf: true,  kleinkind: true,  minuten: 35 },
  { title: 'Schokoladenkuchen',          slug: '/rezepte/schokoladenkuchen-mandelmehl',kat: 'Backen',      naturalGf: false, kleinkind: false, minuten: 50 },
];

// ── Typen & Konstanten ────────────────────────────────────────────────────────

const TAGE_5 = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];
const TAGE_7 = [...TAGE_5, 'Samstag', 'Sonntag'];

type Prefs = {
  kleinkind: boolean;
  nurNatGf:  boolean;
  schnell:   boolean;
  woche:     '5' | '7';
};

type SlotKey = 'fruehstueck' | 'mittagessen' | 'snack';

const SLOTS: { key: SlotKey; label: string; kats: KatType[] }[] = [
  { key: 'fruehstueck',  label: '🌅 Frühstück',       kats: ['Frühstück'] },
  { key: 'mittagessen',  label: '🍽 Mittagessen',      kats: ['Mittagessen'] },
  { key: 'snack',        label: '🍪 Snack / Dessert',  kats: ['Snack', 'Dessert', 'Backen'] },
];

type DayPlan = Record<SlotKey, Recipe | null>;
type Plan    = Record<string, DayPlan>;

// ── Hilfsfunktionen ───────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function pickForSlot(kats: KatType[], prefs: Prefs, count: number): (Recipe | null)[] {
  let pool = ALL_RECIPES.filter(r => kats.includes(r.kat));
  if (prefs.kleinkind) pool = pool.filter(r => r.kleinkind);
  if (prefs.nurNatGf)  pool = pool.filter(r => r.naturalGf);
  if (prefs.schnell)   pool = pool.filter(r => r.minuten <= 30);
  if (pool.length === 0) return Array(count).fill(null);
  const shuffled = shuffle(pool);
  return Array.from({ length: count }, (_, i) => shuffled[i % shuffled.length]);
}

function buildPlan(prefs: Prefs): Plan {
  const days = prefs.woche === '7' ? TAGE_7 : TAGE_5;
  const n = days.length;
  const slots = {
    fruehstueck: pickForSlot(['Frühstück'], prefs, n),
    mittagessen: pickForSlot(['Mittagessen'], prefs, n),
    snack:       pickForSlot(['Snack', 'Dessert', 'Backen'], prefs, n),
  };
  const plan: Plan = {};
  days.forEach((tag, i) => {
    plan[tag] = {
      fruehstueck: slots.fruehstueck[i],
      mittagessen: slots.mittagessen[i],
      snack:       slots.snack[i],
    };
  });
  return plan;
}

// ── Toggle-Pill ───────────────────────────────────────────────────────────────

function Toggle({ label, active, onToggle }: { label: string; active: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      style={{
        padding: '0.5rem 1.1rem',
        borderRadius: '999px',
        border: `2px solid ${active ? 'var(--green-deep)' : 'var(--border)'}`,
        background: active ? 'var(--green-deep)' : 'var(--cream-dark)',
        color: active ? 'var(--golden)' : 'var(--text-mid)',
        fontWeight: active ? 700 : 400,
        fontSize: '0.875rem',
        cursor: 'pointer',
        transition: 'all 0.15s',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </button>
  );
}

// ── Rezept-Karte im Plan ──────────────────────────────────────────────────────

function RecipeSlot({ recipe, slot }: { recipe: Recipe | null; slot: string }) {
  if (!recipe) {
    return (
      <div style={{
        padding: '0.6rem 0.875rem',
        borderRadius: '8px',
        background: 'rgba(0,0,0,0.04)',
        border: '1.5px dashed var(--border)',
        fontSize: '0.78rem',
        color: 'var(--text-light)',
        fontStyle: 'italic',
      }}>
        Rezept kommt bald ✨
      </div>
    );
  }
  return (
    <Link
      href={recipe.slug}
      target="_blank"
      style={{
        display: 'block',
        padding: '0.6rem 0.875rem',
        borderRadius: '8px',
        background: 'var(--cream-dark)',
        border: '1.5px solid var(--border)',
        textDecoration: 'none',
        color: 'var(--text-dark)',
        fontSize: '0.82rem',
        fontWeight: 500,
        lineHeight: 1.4,
        transition: 'border-color 0.15s',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--green-mid)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
    >
      {recipe.title}
      <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-light)', marginTop: '0.15rem' }}>
        ⏱ {recipe.minuten} Min.{recipe.naturalGf ? ' · ohne Spezialmehl' : ''}
      </span>
    </Link>
  );
}

// ── Hauptkomponente ───────────────────────────────────────────────────────────

export default function WochenplanPage() {
  const [prefs, setPrefs] = useState<Prefs>({
    kleinkind: false,
    nurNatGf:  false,
    schnell:   false,
    woche:     '5',
  });
  const [plan, setPlan] = useState<Plan | null>(null);

  const toggle = (key: keyof Prefs) =>
    setPrefs(p => ({ ...p, [key]: !p[key] }));

  const setWoche = (w: '5' | '7') =>
    setPrefs(p => ({ ...p, woche: w }));

  const handleGenerate = () => setPlan(buildPlan(prefs));

  const days = prefs.woche === '7' ? TAGE_7 : TAGE_5;

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: 'var(--green-deep)', padding: '3rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumb" style={{ color: 'var(--mint)' }}>
            <Link href="/" style={{ color: 'var(--mint)' }}>Startseite</Link> › Wochenplan
          </div>
          <h1 style={{ color: 'var(--golden)', marginBottom: '0.5rem' }}>
            Glutenfreier Wochenplan
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '560px' }}>
            Stell deine Präferenzen ein – wir stellen dir einen individuellen Plan aus unseren Rezepten zusammen.
          </p>
        </div>
      </section>

      {/* ── Einstellungen ── */}
      <section style={{ background: 'var(--cream-dark)', borderBottom: '1px solid var(--border)', padding: '1.75rem 0' }}>
        <div className="container">
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.875rem' }}>
            Deine Einstellungen
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <Toggle label="👶 Kleinkindtauglich" active={prefs.kleinkind} onToggle={() => toggle('kleinkind')} />
            <Toggle label="💚 Ohne Spezialmehl" active={prefs.nurNatGf}  onToggle={() => toggle('nurNatGf')} />
            <Toggle label="⚡ Schnell (≤ 30 Min.)" active={prefs.schnell}  onToggle={() => toggle('schnell')} />
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-mid)', marginRight: '0.25rem' }}>Woche:</span>
            {(['5', '7'] as const).map(w => (
              <button
                key={w}
                onClick={() => setWoche(w)}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '999px',
                  border: `2px solid ${prefs.woche === w ? 'var(--golden)' : 'var(--border)'}`,
                  background: prefs.woche === w ? 'var(--golden)' : 'transparent',
                  color: prefs.woche === w ? 'var(--green-deep)' : 'var(--text-mid)',
                  fontWeight: prefs.woche === w ? 700 : 400,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                }}
              >
                {w === '5' ? 'Mo – Fr' : 'Ganze Woche'}
              </button>
            ))}
          </div>

          <button
            onClick={handleGenerate}
            className="btn btn-golden"
            style={{ fontSize: '1rem', padding: '0.75rem 2rem' }}
          >
            {plan ? '🔄 Neuen Plan erstellen' : '✨ Plan erstellen'}
          </button>
        </div>
      </section>

      {/* ── Plan-Anzeige ── */}
      {plan && (
        <section className="section">
          <div className="container" style={{ maxWidth: '960px' }}>

            {/* Print-Hinweis */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
              <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.85rem' }}>
                Klick auf ein Rezept → öffnet die Seite mit allen Details.
              </p>
              <button
                onClick={() => window.print()}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '8px',
                  border: '1.5px solid var(--border)',
                  background: 'transparent',
                  color: 'var(--text-mid)',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                }}
              >
                🖨 Plan drucken
              </button>
            </div>

            {/* Plan-Tabelle */}
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '560px' }}>
                <thead>
                  <tr>
                    <th style={{ width: '120px', textAlign: 'left', padding: '0.5rem 0.75rem', fontSize: '0.78rem', color: 'var(--text-light)', fontWeight: 600, borderBottom: '2px solid var(--golden)' }}>
                      Tag
                    </th>
                    {SLOTS.map(s => (
                      <th key={s.key} style={{ textAlign: 'left', padding: '0.5rem 0.75rem', fontSize: '0.78rem', color: 'var(--text-light)', fontWeight: 600, borderBottom: '2px solid var(--golden)' }}>
                        {s.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {days.map((tag, i) => (
                    <tr
                      key={tag}
                      style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.018)' }}
                    >
                      <td style={{ padding: '0.75rem', verticalAlign: 'top' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--green-deep)' }}>{tag}</span>
                      </td>
                      {SLOTS.map(s => (
                        <td key={s.key} style={{ padding: '0.5rem 0.75rem', verticalAlign: 'top' }}>
                          <RecipeSlot recipe={plan[tag][s.key]} slot={s.key} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Hinweis */}
            <div style={{
              marginTop: '2rem',
              padding: '1rem 1.25rem',
              background: 'rgba(149,213,178,0.12)',
              border: '1.5px solid var(--mint)',
              borderRadius: '10px',
              fontSize: '0.85rem',
              lineHeight: 1.7,
              color: 'var(--text-mid)',
            }}>
              <strong>Noch nicht perfekt?</strong> Wir fügen regelmäßig neue Rezepte hinzu – der Plan wird mit der Zeit vielfältiger. „Rezept kommt bald" heißt: Kategorie passt zu deinen Filtern, aber das Rezept ist noch in Arbeit. 😊
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/rezepte" className="btn btn-outline">Alle Rezepte →</Link>
              <Link href="/rezepte/alle" className="btn btn-outline">Rezepte A–Z →</Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Leerer State ── */}
      {!plan && (
        <section className="section">
          <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🥘</div>
            <h2 style={{ marginBottom: '0.5rem', color: 'var(--green-deep)' }}>Dein persönlicher Plan wartet</h2>
            <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem' }}>
              Wähle oben deine Einstellungen und klick auf „Plan erstellen" – fertig.
            </p>
            <ul style={{ textAlign: 'left', display: 'inline-block', lineHeight: 2.2, fontSize: '0.9rem', color: 'var(--text-mid)', padding: 0, listStyle: 'none' }}>
              <li>👶 <strong>Kleinkindtauglich</strong> – nur Rezepte die auch für Kleine geeignet sind</li>
              <li>💚 <strong>Ohne Spezialmehl</strong> – von Natur aus glutenfreie Rezepte, kein Ersatzmehl nötig</li>
              <li>⚡ <strong>Schnell</strong> – nur Rezepte mit max. 30 Minuten Zubereitungszeit</li>
            </ul>
          </div>
        </section>
      )}

      {/* ── Print-Styles ── */}
      <style>{`
        @media print {
          header, footer, .btn, button { display: none !important; }
          section:first-of-type { background: white !important; color: black !important; padding: 1rem 0 0.5rem !important; }
          h1 { color: black !important; font-size: 1.5rem !important; }
          p { color: black !important; }
          table { font-size: 0.8rem; }
          td, th { border: 1px solid #ccc !important; }
          a { color: black !important; text-decoration: none !important; }
          .affiliate-box { display: none !important; }
        }
      `}</style>
    </>
  );
}
