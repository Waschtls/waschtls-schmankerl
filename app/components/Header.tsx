'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

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
  { title: 'Vorratskiste & Convenience',     desc: 'GF Fertigprodukte die wirklich funktionieren',   href: '/vorratskiste',                        type: 'Seite',  tags: 'schnell fertig convenience falafel gnocchi fischstäbchen tk pizza nuggets blätterteig schlemmerfilet dm iglo schär' },
  { title: 'Nudeln mit Tomatensauce',       desc: 'Mittagessen · 25 Min · kleinkindtauglich',       href: '/rezepte/nudeln-mit-tomatensauce',      type: 'Rezept', tags: 'nudeln pasta tomaten mittagessen kinder schnell' },
  { title: 'Kürbisrisotto',                 desc: 'Mittagessen · 40 Min · ohne Spezialmehl',        href: '/rezepte/kuerbisrisotto',               type: 'Rezept', tags: 'kürbis risotto reis mittagessen herbst' },
  { title: 'Pizza glutenfrei',              desc: 'Brot & Hefeteig · 60 Min',                       href: '/rezepte/pizza-glutenfrei',             type: 'Rezept', tags: 'pizza hefeteig brot abendessen belag' },
  { title: 'Schokoladenkuchen (Mandelmehl)',desc: 'Backen · 50 Min',                                href: '/rezepte/schokoladenkuchen-mandelmehl', type: 'Rezept', tags: 'schokolade kuchen backen mandelmehl dessert geburtstag' },
  { title: 'Bananenmuffins',                desc: 'Snacks · 30 Min · ohne Spezialmehl · kleinkind', href: '/rezepte/bananenmuffins',               type: 'Rezept', tags: 'banane muffins snack ohne mehl einfach kleinkind' },
  { title: 'Energiebällchen',               desc: 'Snacks · 15 Min · ohne Spezialmehl · kleinkind', href: '/rezepte/energiebaellchen',             type: 'Rezept', tags: 'energie bällchen snack hafer ohne backen schule brotdose' },
  { title: 'Kokos-Milchreis',               desc: 'Dessert · 35 Min · ohne Spezialmehl · kleinkind',href: '/rezepte/milchreis-kokos',              type: 'Rezept', tags: 'kokos milchreis dessert reis cremig kleinkind' },
  { title: 'Schnitzel mit Kartoffelbrei',   desc: 'Abendessen · 35 Min · kleinkindtauglich',        href: '/rezepte/schnitzel-kartoffelbrei',      type: 'Rezept', tags: 'schnitzel kartoffel brei paniert abendessen mittagessen fleisch' },
  { title: 'Kässpatzen',                    desc: 'Abendessen · 40 Min · bayerisch · vegetarisch',  href: '/rezepte/kaesspatzen',                  type: 'Rezept', tags: 'kässpatzen kässpätzle spatzen spätzle käse bergkäse bayerisch vegetarisch' },
  { title: 'Pfannkuchen (klassisch)',       desc: 'Frühstück · 25 Min · kleinkind · Schär Mix It', href: '/rezepte/pfannkuchen-klassisch',         type: 'Rezept', tags: 'pfannkuchen crepe klassisch schaer mix frühstück' },
  { title: 'Veganes Chili con Carne',       desc: 'Abendessen · 35 Min · vegan · ohne Spezialmehl',href: '/rezepte/veganes-chili',                type: 'Rezept', tags: 'chili vegan hack dm bohnen mais tomate abendessen einfach' },
  { title: 'Was ist Zöliakie?',             desc: 'Grundlagen & Erklärung',                         href: '/wissen/was-ist-zoeliakiie',            type: 'Wissen', tags: 'zöliakie grundlagen erklärung darm gluten' },
  { title: 'Diagnose bei Kindern',          desc: 'Symptome, Ablauf, nächste Schritte',             href: '/wissen/diagnose-kinder',               type: 'Wissen', tags: 'diagnose bluttest biopsie symptome arzt kinder' },
  { title: 'Schule & Kita',                 desc: 'Zöliakie im Kita- und Schulalltag',              href: '/wissen/schule-kita',                   type: 'Wissen', tags: 'schule kita lehrer erzieher ausflug mensa' },
  { title: 'Welches Mehl wofür?',           desc: 'Reismehl, Mandelmehl, Buchweizen & Co.',         href: '/wissen/welches-mehl-wofuer',           type: 'Wissen', tags: 'mehl reismehl mandelmehl buchweizenmehl tapioka maismehl backen' },
  { title: 'Xanthan & Flohsamenschalen',    desc: 'Bindemittel beim glutenfreien Backen',           href: '/wissen/xanthan-flohsamenschalen',      type: 'Wissen', tags: 'xanthan flohsamenschalen bindemittel backen' },
  { title: 'Kreuzkontamination',            desc: 'Glutenspuren im Haushalt vermeiden',             href: '/wissen/kreuzkontamination',            type: 'Wissen', tags: 'kreuzkontamination toaster sieb holzlöffel küche sicherheit' },
  { title: 'Laktoseintoleranz bei Zöliakie',desc: 'Warum viele Kinder beides haben',               href: '/wissen/laktoseintoleranz-kinder',      type: 'Wissen', tags: 'laktose milch intoleranz darm kinder' },
  { title: 'Welche Lebensmittel sind glutenfrei?', desc: 'Die große Übersicht: erlaubt & verboten', href: '/wissen/glutenfreie-lebensmittel',      type: 'Wissen', tags: 'lebensmittel liste erlaubt verboten einkauf' },
  { title: 'Alle Rezepte A–Z',             desc: 'Alphabetischer Rezept-Index',                    href: '/rezepte/alle',                         type: 'Seite', tags: 'alle rezepte übersicht index' },
  { title: 'Speiseplan erstellen',           desc: 'Persönlicher Speiseplan aus unseren Rezepten',    href: '/wochenplan',                          type: 'Seite', tags: 'speiseplan wochenplan planer woche mahlzeiten' },
  { title: 'Aktuelles',                     desc: 'News & Forschung zu Zöliakie und Glutenunverträglichkeit', href: '/aktuelles',                   type: 'Seite', tags: 'aktuelles news forschung zöliakie gluten' },
  { title: 'Unterwegs',                     desc: 'Restaurants, Bäckereien & Tipps in Augsburg und Bayern',   href: '/unterwegs',                   type: 'Seite', tags: 'unterwegs restaurant augsburg münchen reisen urlaub bäckerei' },
  { title: 'Feste & Kindergeburtstag',      desc: 'Party-Rezepte, Checklisten und Tipps fürs Feiern',         href: '/rezepte/feste-geburtstage',   type: 'Seite', tags: 'geburtstag party fest kindergeburtstag backen kuchen' },
  { title: 'FAQ – Häufige Fragen',          desc: 'Antworten auf die häufigsten Elternfragen',      href: '/faq',                                  type: 'Seite', tags: 'faq fragen antworten häufig' },
  { title: 'Produkte & Empfehlungen',       desc: 'Produkte die wir selbst verwenden',              href: '/produkte',                             type: 'Seite', tags: 'produkte empfehlungen amazon einkauf' },
  { title: 'Nach Zutaten suchen',           desc: 'Welche Rezepte kann ich mit meinen Zutaten kochen?', href: '/rezepte/nach-zutaten',             type: 'Seite', tags: 'zutaten kühlschrank zutatenliste rezept finden' },
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

const navMain = [
  { label: 'Rezepte',      href: '/rezepte' },
  { label: 'Vorratskiste', href: '/vorratskiste' },
  { label: 'Wissen',       href: '/wissen' },
  { label: 'Speiseplan',   href: '/wochenplan' },
];

const navMehr = [
  { label: 'Aktuelles',  href: '/aktuelles' },
  { label: 'Unterwegs',  href: '/unterwegs' },
  { label: 'Produkte',   href: '/produkte' },
  { label: 'Über uns',   href: '/ueber-uns' },
];

// Für Mobilmenü alle zusammen
const nav = [...navMain, ...navMehr];

// ── Such-Modal ─────────────────────────────────────────────────────────────────

type Tab = 'suche' | 'zutaten';

function SearchModal({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<Tab>('suche');

  // Tab: Textsuche
  const [query, setQuery]     = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [active, setActive]   = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const router   = useRouter();

  useEffect(() => { inputRef.current?.focus(); }, []);

  useEffect(() => {
    setResults(searchText(query));
    setActive(0);
  }, [query]);

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
                    {['Pfannkuchen', 'Pizza', 'Speiseplan', 'Mehl', 'Brotdose', 'Schule'].map(q => (
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
            <div style={{ padding: '1.5rem 1.25rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem' }}>🧺</div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-dark)', margin: '0 0 0.4rem' }}>
                  Was habe ich zu Hause?
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-mid)', margin: 0, lineHeight: 1.6 }}>
                  Wähle auf der nächsten Seite die Zutaten aus die du da hast – wir zeigen welche Rezepte du damit kochen kannst.
                </p>
              </div>
              <button
                onClick={() => navigate('/rezepte/nach-zutaten')}
                className="btn btn-golden"
                style={{ fontSize: '0.9rem' }}
              >
                Zur Zutaten-Suche →
              </button>
            </div>
          )}

          {/* Footer */}
          <div style={{ padding: '0.45rem 1.25rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '1rem', fontSize: '0.7rem', color: 'var(--text-light)' }}>
            {tab === 'suche'
              ? <><span>↑↓ navigieren</span><span>↵ öffnen</span><span>Esc schließen</span></>
              : <><span>Esc schließen</span></>
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
  const [mehrOpen,   setMehrOpen]   = useState(false);
  const mehrRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Mehr-Dropdown schließen beim Klick außerhalb
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (mehrRef.current && !mehrRef.current.contains(e.target as Node)) {
        setMehrOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

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
            <nav className="desktop-nav" style={{ display: 'flex', gap: '0.15rem', alignItems: 'center' }} aria-label="Hauptnavigation">
              {navMain.map(({ label, href }) => {
                const active = pathname === href || pathname.startsWith(href + '/');
                return (
                  <Link key={href} href={href} style={{
                    padding: '0.4rem 0.8rem', borderRadius: '6px',
                    fontWeight: active ? 600 : 500, fontSize: '0.875rem',
                    color: active ? 'var(--golden)' : 'var(--mint)',
                    background: active ? 'rgba(233,196,106,0.12)' : 'transparent',
                    transition: 'all 0.15s', whiteSpace: 'nowrap',
                  }}>
                    {label}
                  </Link>
                );
              })}

              {/* Mehr-Dropdown */}
              <div ref={mehrRef} style={{ position: 'relative' }}>
                <button
                  onClick={() => setMehrOpen(o => !o)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.25rem',
                    padding: '0.4rem 0.8rem', borderRadius: '6px',
                    fontWeight: 500, fontSize: '0.875rem',
                    color: navMehr.some(n => pathname.startsWith(n.href)) ? 'var(--golden)' : 'var(--mint)',
                    background: mehrOpen ? 'rgba(149,213,178,0.1)' : 'transparent',
                    border: 'none', cursor: 'pointer',
                  }}
                >
                  Mehr <span style={{ fontSize: '0.65rem', opacity: 0.7 }}>{mehrOpen ? '▲' : '▼'}</span>
                </button>
                {mehrOpen && (
                  <div style={{
                    position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                    background: 'var(--green-deep)',
                    border: '1.5px solid rgba(149,213,178,0.25)',
                    borderRadius: '10px', padding: '0.5rem',
                    minWidth: '160px', zIndex: 150,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                  }}>
                    {navMehr.map(({ label, href }) => {
                      const active = pathname === href || pathname.startsWith(href + '/');
                      return (
                        <Link key={href} href={href}
                          onClick={() => setMehrOpen(false)}
                          style={{
                            display: 'block', padding: '0.5rem 0.75rem',
                            borderRadius: '6px', fontSize: '0.875rem',
                            color: active ? 'var(--golden)' : 'var(--mint)',
                            fontWeight: active ? 600 : 400,
                            background: active ? 'rgba(233,196,106,0.1)' : 'transparent',
                            whiteSpace: 'nowrap',
                          }}>
                          {label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </nav>

            {/* Suche – Icon only */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Suche öffnen (⌘K)"
              title="Suche (⌘K)"
              className="desktop-search-btn"
              style={{
                marginLeft: '0.35rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '36px', height: '36px', borderRadius: '8px',
                border: '1.5px solid rgba(149,213,178,0.35)',
                background: 'rgba(149,213,178,0.08)',
                color: 'var(--mint)', cursor: 'pointer', fontSize: '1rem',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--mint)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(149,213,178,0.35)'; }}
            >
              🔍
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
            .desktop-nav { display: none !important; }
            .desktop-search-btn { display: none !important; }
            .mobile-actions { display: flex !important; }
            .search-label, .search-shortcut { display: none; }
          }
        `}</style>
      </header>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  );
}
