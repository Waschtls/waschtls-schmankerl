'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

// ── Zutaten-Index ─────────────────────────────────────────────────────────────

type RecipeWithIngredients = {
  title: string;
  slug: string;
  kat: string;
  zutaten: string[]; // Schlüsselzutaten (lowercase)
};

const RECIPES_WITH_INGREDIENTS: RecipeWithIngredients[] = [
  {
    title: 'Apfel-Zimt-Porridge',
    slug: '/rezepte/apfel-zimt-porridge',
    kat: 'Frühstück',
    zutaten: ['haferflocken', 'apfel', 'zimt', 'milch', 'honig'],
  },
  {
    title: 'Pfannkuchen aus Reismehl',
    slug: '/rezepte/pfannkuchen-reismehl',
    kat: 'Frühstück',
    zutaten: ['reismehl', 'eier', 'milch', 'butter'],
  },
  {
    title: 'Nudeln mit Tomatensauce',
    slug: '/rezepte/nudeln-mit-tomatensauce',
    kat: 'Mittagessen',
    zutaten: ['nudeln', 'tomaten', 'knoblauch', 'zwiebel', 'olivenöl'],
  },
  {
    title: 'Kürbisrisotto',
    slug: '/rezepte/kuerbisrisotto',
    kat: 'Mittagessen',
    zutaten: ['kürbis', 'reis', 'gemüsebrühe', 'zwiebel', 'parmesan', 'knoblauch'],
  },
  {
    title: 'Pizza glutenfrei',
    slug: '/rezepte/pizza-glutenfrei',
    kat: 'Brot & Hefeteig',
    zutaten: ['reismehl', 'hefe', 'tomaten', 'käse', 'olivenöl'],
  },
  {
    title: 'Bananenmuffins',
    slug: '/rezepte/bananenmuffins',
    kat: 'Snacks',
    zutaten: ['banane', 'eier', 'mandelmehl', 'backpulver', 'honig'],
  },
  {
    title: 'Energiebällchen',
    slug: '/rezepte/energiebaellchen',
    kat: 'Snacks',
    zutaten: ['haferflocken', 'erdnussbutter', 'honig', 'kakao', 'schokolade'],
  },
  {
    title: 'Kokos-Milchreis',
    slug: '/rezepte/milchreis-kokos',
    kat: 'Dessert',
    zutaten: ['milchreis', 'kokosmilch', 'milch', 'zucker', 'vanille'],
  },
  {
    title: 'Schokoladenkuchen',
    slug: '/rezepte/schokoladenkuchen-mandelmehl',
    kat: 'Backen',
    zutaten: ['mandelmehl', 'schokolade', 'eier', 'butter', 'zucker', 'kakao'],
  },
];

// Alle eindeutigen Zutaten für die Chip-Auswahl
const ALL_INGREDIENTS = [
  'Apfel', 'Banane', 'Backpulver', 'Butter', 'Eier', 'Erdnussbutter',
  'Gemüsebrühe', 'Haferflocken', 'Honig', 'Kakao', 'Käse', 'Knoblauch',
  'Kokosmilch', 'Kürbis', 'Mandelmehl', 'Milch', 'Milchreis', 'Nudeln',
  'Olivenöl', 'Parmesan', 'Reis', 'Reismehl', 'Schokolade', 'Tomaten',
  'Vanille', 'Zimt', 'Zucker', 'Zwiebel',
];

function searchByIngredients(selected: string[]): RecipeWithIngredients[] {
  if (selected.length === 0) return [];
  const lc = selected.map(s => s.toLowerCase());
  return RECIPES_WITH_INGREDIENTS
    .map(r => ({
      ...r,
      matches: lc.filter(z => r.zutaten.includes(z)).length,
    }))
    .filter(r => r.matches > 0)
    .sort((a, b) => b.matches - a.matches)
    .slice(0, 6);
}

// ── Such-Index ─────────────────────────────────────────────────────────────────

type SearchItem = {
  title: string;
  desc: string;
  href: string;
  type: 'Rezept' | 'Wissen' | 'Seite';
  tags: string;
};

const SEARCH_INDEX: SearchItem[] = [
  { title: 'Apfel-Zimt-Porridge',          desc: 'Frühstück · 10 Min · ohne Spezialmehl',          href: '/rezepte/apfel-zimt-porridge',         type: 'Rezept', tags: 'apfel zimt porridge haferflocken frühstück schnell kleinkind' },
  { title: 'Pfannkuchen aus Reismehl',      desc: 'Frühstück · 25 Min · kleinkindtauglich',         href: '/rezepte/pfannkuchen-reismehl',         type: 'Rezept', tags: 'pfannkuchen reismehl frühstück crepes' },
  { title: 'Nudeln mit Tomatensauce',       desc: 'Mittagessen · 25 Min · kleinkindtauglich',       href: '/rezepte/nudeln-mit-tomatensauce',      type: 'Rezept', tags: 'nudeln pasta tomaten mittagessen kinder schnell' },
  { title: 'Kürbisrisotto',                 desc: 'Mittagessen · 40 Min · ohne Spezialmehl',        href: '/rezepte/kuerbisrisotto',               type: 'Rezept', tags: 'kürbis risotto reis mittagessen herbst' },
  { title: 'Pizza glutenfrei',              desc: 'Brot & Hefeteig · 60 Min',                       href: '/rezepte/pizza-glutenfrei',             type: 'Rezept', tags: 'pizza hefeteig brot abendessen belag' },
  { title: 'Schokoladenkuchen (Mandelmehl)',desc: 'Backen · 50 Min',                                href: '/rezepte/schokoladenkuchen-mandelmehl', type: 'Rezept', tags: 'schokolade kuchen backen mandelmehl dessert geburtstag' },
  { title: 'Bananenmuffins',                desc: 'Snacks · 30 Min · ohne Spezialmehl · kleinkind', href: '/rezepte/bananenmuffins',               type: 'Rezept', tags: 'banane muffins snack ohne mehl einfach kleinkind' },
  { title: 'Energiebällchen',               desc: 'Snacks · 15 Min · ohne Spezialmehl · kleinkind', href: '/rezepte/energiebaellchen',             type: 'Rezept', tags: 'energie bällchen snack hafer ohne backen schule brotdose' },
  { title: 'Kokos-Milchreis',               desc: 'Dessert · 35 Min · ohne Spezialmehl · kleinkind',href: '/rezepte/milchreis-kokos',              type: 'Rezept', tags: 'kokos milchreis dessert reis cremig kleinkind' },
  { title: 'Was ist Zöliakie?',             desc: 'Grundlagen & Erklärung',                         href: '/wissen/was-ist-zoeliakiie',            type: 'Wissen', tags: 'zöliakie grundlagen erklärung darm gluten' },
  { title: 'Diagnose bei Kindern',          desc: 'Symptome, Ablauf, nächste Schritte',             href: '/wissen/diagnose-kinder',               type: 'Wissen', tags: 'diagnose bluttest biopsie symptome arzt kinder' },
  { title: 'Schule & Kita',                 desc: 'Zöliakie im Kita- und Schulalltag',              href: '/wissen/schule-kita',                   type: 'Wissen', tags: 'schule kita lehrer erzieher ausflug mensa' },
  { title: 'Welches Mehl wofür?',           desc: 'Reismehl, Mandelmehl, Buchweizen & Co.',         href: '/wissen/welches-mehl-wofuer',           type: 'Wissen', tags: 'mehl reismehl mandelmehl buchweizenmehl tapioka maismehl backen' },
  { title: 'Xanthan & Flohsamenschalen',    desc: 'Bindemittel beim glutenfreien Backen',           href: '/wissen/xanthan-flohsamenschalen',      type: 'Wissen', tags: 'xanthan flohsamenschalen bindemittel backen' },
  { title: 'Kreuzkontamination',            desc: 'Glutenspuren im Haushalt vermeiden',             href: '/wissen/kreuzkontamination',            type: 'Wissen', tags: 'kreuzkontamination toaster sieb holzlöffel küche sicherheit' },
  { title: 'Laktoseintoleranz bei Zöliakie',desc: 'Warum viele Kinder beides haben',               href: '/wissen/laktoseintoleranz-kinder',      type: 'Wissen', tags: 'laktose milch intoleranz darm kinder' },
  { title: 'Welche Lebensmittel sind glutenfrei?', desc: 'Die große Übersicht: erlaubt & verboten', href: '/wissen/glutenfreie-lebensmittel',      type: 'Wissen', tags: 'lebensmittel liste erlaubt verboten einkauf' },
  { title: 'Alle Rezepte A–Z',             desc: 'Alphabetischer Rezept-Index',                    href: '/rezepte/alle',                         type: 'Seite', tags: 'alle rezepte übersicht index' },
  { title: 'Wochenplan erstellen',          desc: 'Personalisierter Wochenplan aus unseren Rezepten',href: '/wochenplan',                          type: 'Seite', tags: 'wochenplan planer woche mahlzeiten' },
  { title: 'FAQ – Häufige Fragen',          desc: 'Antworten auf die häufigsten Elternfragen',      href: '/faq',                                  type: 'Seite', tags: 'faq fragen antworten häufig' },
  { title: 'Produkte & Empfehlungen',       desc: 'Produkte die wir selbst verwenden',              href: '/produkte',                             type: 'Seite', tags: 'produkte empfehlungen amazon einkauf' },
];

function searchText(query: string): SearchItem[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  return SEARCH_INDEX.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.desc.toLowerCase().includes(q) ||
    item.tags.toLowerCase().includes(q)
  ).slice(0, 8);
}

// ── Stil-Helfer ────────────────────────────────────────────────────────────────

const typeStyle: Record<string, { bg: string; color: string }> = {
  Rezept: { bg: 'var(--golden)',     color: 'var(--green-deep)' },
  Wissen: { bg: 'var(--mint)',       color: 'var(--green-deep)' },
  Seite:  { bg: 'var(--terracotta)',  color: '#fff' },
};

const nav = [
  { label: 'Rezepte',   href: '/rezepte' },
  { label: 'Wissen',    href: '/wissen' },
  { label: 'Produkte',  href: '/produkte' },
  { label: 'Über uns',  href: '/ueber-uns' },
];

// ── Such-Modal ─────────────────────────────────────────────────────────────────

type Tab = 'suche' | 'zutaten';

function SearchModal({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<Tab>('suche');

  // Tab: Textsuche
  const [query, setQuery]     = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [active, setActive]   = useState(0);

  // Tab: Zutaten
  const [selected, setSelected]         = useState<string[]>([]);
  const [ingredientQuery, setIQ]        = useState('');
  const [ingredientResults, setIR]      = useState<RecipeWithIngredients[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const router   = useRouter();

  useEffect(() => { inputRef.current?.focus(); }, []);

  useEffect(() => {
    setResults(searchText(query));
    setActive(0);
  }, [query]);

  useEffect(() => {
    setIR(searchByIngredients(selected));
  }, [selected]);

  const navigate = useCallback((href: string) => {
    router.push(href);
    onClose();
  }, [router, onClose]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (tab === 'suche') {
        if (e.key === 'ArrowDown') setActive(a => Math.min(a + 1, results.length - 1));
        if (e.key === 'ArrowUp')   setActive(a => Math.max(a - 1, 0));
        if (e.key === 'Enter' && results[active]) navigate(results[active].href);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [results, active, navigate, onClose, tab]);

  const toggleIngredient = (ing: string) => {
    setSelected(s => s.includes(ing) ? s.filter(x => x !== ing) : [...s, ing]);
  };

  const visibleIngredients = ingredientQuery
    ? ALL_INGREDIENTS.filter(i => i.toLowerCase().includes(ingredientQuery.toLowerCase()))
    : ALL_INGREDIENTS;

  const tabStyle = (t: Tab): React.CSSProperties => ({
    flex: 1, padding: '0.6rem 1rem',
    border: 'none', cursor: 'pointer',
    fontSize: '0.85rem', fontWeight: tab === t ? 700 : 400,
    background: tab === t ? 'var(--cream)' : 'transparent',
    color: tab === t ? 'var(--green-deep)' : 'var(--text-light)',
    borderBottom: tab === t ? '2px solid var(--green-deep)' : '2px solid transparent',
    transition: 'all 0.15s',
  });

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.55)',
          zIndex: 200,
          backdropFilter: 'blur(2px)',
        }}
      />

      {/* Modal */}
      <div style={{
        position: 'fixed', top: '80px',
        left: '50%', transform: 'translateX(-50%)',
        width: '100%', maxWidth: '620px',
        zIndex: 201, padding: '0 1rem',
      }}>
        <div style={{
          background: 'var(--cream)',
          borderRadius: '16px',
          boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
          overflow: 'hidden',
        }}>

          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', background: 'var(--cream-dark)' }}>
            <button onClick={() => setTab('suche')}   style={tabStyle('suche')}>🔍 Suche</button>
            <button onClick={() => setTab('zutaten')} style={tabStyle('zutaten')}>🧅 Zutaten im Kühlschrank</button>
          </div>

          {/* ── Tab: Textsuche ── */}
          {tab === 'suche' && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', padding: '0.875rem 1.25rem', gap: '0.75rem', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>🔍</span>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Rezept oder Thema suchen…"
                  style={{ flex: 1, border: 'none', outline: 'none', fontSize: '1rem', background: 'transparent', color: 'var(--text-dark)' }}
                />
                {query && (
                  <button onClick={() => setQuery('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-light)', fontSize: '0.9rem', padding: '0.2rem' }}>✕</button>
                )}
              </div>

              {results.length > 0 && (
                <ul style={{ margin: 0, padding: '0.5rem 0', listStyle: 'none', maxHeight: '380px', overflowY: 'auto' }}>
                  {results.map((item, i) => (
                    <li key={item.href}>
                      <button
                        onClick={() => navigate(item.href)}
                        onMouseEnter={() => setActive(i)}
                        style={{
                          display: 'flex', alignItems: 'flex-start', gap: '0.875rem',
                          width: '100%', padding: '0.75rem 1.25rem',
                          background: i === active ? 'rgba(27,67,50,0.06)' : 'transparent',
                          border: 'none', cursor: 'pointer', textAlign: 'left',
                        }}
                      >
                        <span style={{
                          flexShrink: 0, marginTop: '0.1rem',
                          padding: '0.15rem 0.55rem', borderRadius: '999px',
                          fontSize: '0.7rem', fontWeight: 700,
                          background: typeStyle[item.type].bg, color: typeStyle[item.type].color,
                          whiteSpace: 'nowrap',
                        }}>{item.type}</span>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-dark)' }}>{item.title}</div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '0.1rem' }}>{item.desc}</div>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {query.trim() && results.length === 0 && (
                <div style={{ padding: '1.5rem 1.25rem', textAlign: 'center', color: 'var(--text-light)', fontSize: '0.875rem' }}>
                  Kein Ergebnis für „{query}" – vielleicht bald ein neues Rezept! 😊
                </div>
              )}

              {!query && (
                <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', margin: '0 0 0.5rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Schnellzugriff</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {['Pfannkuchen', 'Pizza', 'Wochenplan', 'Mehl', 'Brotdose', 'Schule'].map(q => (
                      <button key={q} onClick={() => setQuery(q)} style={{ padding: '0.35rem 0.8rem', borderRadius: '999px', border: '1.5px solid var(--border)', background: 'var(--cream-dark)', fontSize: '0.8rem', cursor: 'pointer', color: 'var(--text-mid)' }}>
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* ── Tab: Zutaten ── */}
          {tab === 'zutaten' && (
            <div>
              {/* Zutaten-Suchfeld */}
              <div style={{ display: 'flex', alignItems: 'center', padding: '0.75rem 1.25rem', gap: '0.75rem', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: '1rem', color: 'var(--text-light)' }}>🔎</span>
                <input
                  value={ingredientQuery}
                  onChange={e => setIQ(e.target.value)}
                  placeholder="Zutat suchen oder unten auswählen…"
                  style={{ flex: 1, border: 'none', outline: 'none', fontSize: '0.9rem', background: 'transparent', color: 'var(--text-dark)' }}
                />
              </div>

              {/* Ausgewählte Zutaten */}
              {selected.length > 0 && (
                <div style={{ padding: '0.625rem 1.25rem', background: 'rgba(149,213,178,0.1)', borderBottom: '1px solid var(--border)', display: 'flex', flexWrap: 'wrap', gap: '0.35rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-light)', fontWeight: 600, marginRight: '0.25rem' }}>Ausgewählt:</span>
                  {selected.map(s => (
                    <button key={s} onClick={() => toggleIngredient(s)} style={{
                      padding: '0.2rem 0.6rem', borderRadius: '999px',
                      border: 'none', background: 'var(--green-deep)', color: 'var(--golden)',
                      fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: '0.3rem',
                    }}>
                      {s} ✕
                    </button>
                  ))}
                  <button onClick={() => setSelected([])} style={{ marginLeft: 'auto', fontSize: '0.72rem', color: 'var(--text-light)', background: 'none', border: 'none', cursor: 'pointer' }}>
                    Alle löschen
                  </button>
                </div>
              )}

              {/* Zutaten-Chips */}
              <div style={{ padding: '0.875rem 1.25rem', maxHeight: '160px', overflowY: 'auto', borderBottom: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {visibleIngredients.map(ing => {
                    const isSelected = selected.includes(ing);
                    return (
                      <button
                        key={ing}
                        onClick={() => toggleIngredient(ing)}
                        style={{
                          padding: '0.3rem 0.75rem', borderRadius: '999px',
                          border: `1.5px solid ${isSelected ? 'var(--green-deep)' : 'var(--border)'}`,
                          background: isSelected ? 'var(--green-deep)' : 'var(--cream-dark)',
                          color: isSelected ? 'var(--golden)' : 'var(--text-mid)',
                          fontSize: '0.78rem', fontWeight: isSelected ? 700 : 400,
                          cursor: 'pointer', transition: 'all 0.12s',
                        }}
                      >
                        {ing}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Rezept-Ergebnisse */}
              {selected.length === 0 && (
                <div style={{ padding: '1.25rem', textAlign: 'center', color: 'var(--text-light)', fontSize: '0.875rem' }}>
                  Wähle Zutaten aus die du zuhause hast – wir zeigen dir passende Rezepte.
                </div>
              )}

              {selected.length > 0 && ingredientResults.length === 0 && (
                <div style={{ padding: '1.25rem', textAlign: 'center', color: 'var(--text-light)', fontSize: '0.875rem' }}>
                  Kein Rezept mit diesen Zutaten – bald kommen mehr! 😊
                </div>
              )}

              {ingredientResults.length > 0 && (
                <ul style={{ margin: 0, padding: '0.5rem 0', listStyle: 'none', maxHeight: '220px', overflowY: 'auto' }}>
                  {(ingredientResults as (RecipeWithIngredients & { matches: number })[]).map(item => (
                    <li key={item.slug}>
                      <button
                        onClick={() => navigate(item.slug)}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '0.875rem',
                          width: '100%', padding: '0.7rem 1.25rem',
                          background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left',
                          transition: 'background 0.1s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(27,67,50,0.06)')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                      >
                        <span style={{ padding: '0.15rem 0.55rem', borderRadius: '999px', fontSize: '0.7rem', fontWeight: 700, background: 'var(--golden)', color: 'var(--green-deep)', whiteSpace: 'nowrap' }}>
                          Rezept
                        </span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-dark)' }}>{item.title}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{item.kat}</div>
                        </div>
                        <span style={{ fontSize: '0.72rem', color: 'var(--mint)', fontWeight: 700, flexShrink: 0 }}>
                          {item.matches}/{selected.length} Zutaten
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Footer */}
          <div style={{ padding: '0.45rem 1.25rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '1rem', fontSize: '0.7rem', color: 'var(--text-light)' }}>
            {tab === 'suche'
              ? <><span>↑↓ navigieren</span><span>↵ öffnen</span><span>Esc schließen</span></>
              : <><span>Mehrere Zutaten möglich</span><span>Esc schließen</span></>
            }
          </div>
        </div>
      </div>
    </>
  );
}

// ── Header ─────────────────────────────────────────────────────────────────────

export default function Header() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(o => !o);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <header style={{
        background: 'var(--green-deep)',
        position: 'sticky', top: 0, zIndex: 100,
        borderBottom: '3px solid var(--golden)',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '96px' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Image src="/logo.png" alt="Waschtls Schmankerl Logo" width={120} height={120} style={{ objectFit: 'contain', width: '120px', height: 'auto' }} />
            <div>
              <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--golden)', display: 'block', lineHeight: 1.1 }}>
                Waschtl&apos;s Schmankerl
              </span>
              <span style={{ fontSize: '0.68rem', color: 'var(--mint)', fontWeight: 500, letterSpacing: '0.04em' }}>
                glutenfrei &amp; aus Augsburg
              </span>
            </div>
          </Link>

          {/* Desktop Nav + Suche */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <nav style={{ display: 'flex', gap: '0.25rem' }} aria-label="Hauptnavigation">
              {nav.map(({ label, href }) => {
                const active = pathname === href || pathname.startsWith(href + '/');
                return (
                  <Link key={href} href={href} style={{
                    padding: '0.45rem 0.9rem', borderRadius: '6px',
                    fontWeight: active ? 600 : 500, fontSize: '0.9rem',
                    color: active ? 'var(--golden)' : 'var(--mint)',
                    background: active ? 'rgba(233,196,106,0.12)' : 'transparent',
                    transition: 'all 0.15s',
                  }}>
                    {label}
                  </Link>
                );
              })}
            </nav>

            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Suche öffnen"
              title="Suche (⌘K)"
              style={{
                marginLeft: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.4rem 0.75rem', borderRadius: '8px',
                border: '1.5px solid rgba(149,213,178,0.35)',
                background: 'rgba(149,213,178,0.08)',
                color: 'var(--mint)', cursor: 'pointer', fontSize: '0.82rem',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--mint)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(149,213,178,0.35)'; }}
            >
              <span>🔍</span>
              <span className="search-label">Suche</span>
              <span className="search-shortcut" style={{ fontSize: '0.7rem', opacity: 0.6, fontFamily: 'monospace' }}>⌘K</span>
            </button>
          </div>

          {/* Mobile */}
          <div className="mobile-actions" style={{ display: 'none', alignItems: 'center', gap: '0.5rem' }}>
            <button onClick={() => setSearchOpen(true)} aria-label="Suche" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--mint)', fontSize: '1.2rem', padding: '0.4rem' }}>🔍</button>
            <button
              aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: 'var(--mint)', fontSize: '1.4rem' }}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav style={{ background: 'var(--green-deep)', borderTop: '1px solid rgba(149,213,178,0.2)', padding: '0.75rem 1.25rem 1rem' }}>
            {nav.map(({ label, href }) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{
                display: 'block', padding: '0.6rem 0',
                color: pathname.startsWith(href) ? 'var(--golden)' : 'var(--mint)',
                fontWeight: 500, borderBottom: '1px solid rgba(149,213,178,0.15)', fontSize: '1rem',
              }}>
                {label}
              </Link>
            ))}
          </nav>
        )}

        <style>{`
          @media (max-width: 640px) {
            nav { display: none !important; }
            .mobile-actions { display: flex !important; }
            .search-label, .search-shortcut { display: none; }
          }
        `}</style>
      </header>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  );
}
